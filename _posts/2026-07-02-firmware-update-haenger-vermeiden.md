---
layout: posts
title: "Firmware-Update am 1. August: Bekannter Fehler im Update-Prozess - manuelles Update empfohlen"
date: 2026-07-02 12:00:00
categories: freifunkmuc firmware
translations: [en]
---

<section data-lang="de" class="language-content active" markdown="1">

**Liebe Freifunkerinnen und Freifunker,**

am **1. August 2026** verteilen wir per **automatischem Update** die Firmware **v2025.12.3** an alle Knoten. Es handelt sich um ein kleines Wartungsupdate mit einer wichtigen Fehlerbehebung: Es behebt einen Fehler, der den Update-Vorgang selbst betreffen kann.

Das Wichtigste in Kürze:

* Auf Knoten mit Firmware **v2025.12.2 oder älter** kann ein bekannter Fehler dazu führen, dass der Knoten **beim Update hängen bleibt**. Beim vergleichbaren Rollout im Januar war das bei rund 10 % der Knoten der Fall.
* Ein hängender Knoten ist danach **offline und aus der Ferne nicht erreichbar**. Er lässt sich dann nur vor Ort durch Ziehen des Stromsteckers wieder in Betrieb nehmen.
* Das lässt sich vermeiden: **Per SSH einloggen und mit den Befehlen unten das Update selbst und sicher anstoßen.** Der Vorgang dauert wenige Minuten und wird allen mit SSH-Zugriff auf ihren Knoten empfohlen.
* Knoten bei denen WiFi Mesh deaktiviert wurde, sind nicht betroffen.

## Ist mein Knoten betroffen?

Die Firmware-Version eures Knotens findet ihr auf dessen Statusseite oder auf der [Knotenkarte](https://map.ffmuc.net).

| Eure Firmware            | Risiko                                                        |
| ------------------------ | ------------------------------------------------------------- |
| v2025.12.3 oder neuer    | ✅ Nicht betroffen, nichts zu tun                             |
| v2025.6.1 bis v2025.12.2 | ⚠️ Update kann hängen bleiben - Anleitung unten               |
| älter als v2025.6.1      | ✅ Nicht betroffen, das manuelle Update ist dennoch empfohlen |

Betroffen sind Knoten, die **per WLAN meshen** (802.11s) und dabei Mesh-Nachbarn in Reichweite haben. Knoten, die ausschließlich per VPN oder Kabel (Mesh-on-LAN/WAN) angebunden sind, sind nicht betroffen; die Anleitung kann aber auch dort gefahrlos angewendet werden.

## Was ist passiert?

Beim [Stable-Rollout im Januar]({% post_url 2026-01-06-auffaelligkeiten-stable-firmware-rollout %}) blieben rund 10 % der Knoten beim Update hängen. Anhand von Rückmeldungen und Logs aus der Community konnten wir die Ursache ermitteln: ein Fehler in **batman-adv**, unserem Mesh-Routing-Protokoll. Beim Herunterfahren der WLAN-Mesh-Schnittstellen während des Updates können sich zwei Teile des Kernels gegenseitig blockieren (ein sogenannter Deadlock). Der Update-Vorgang erreicht dadurch nie das eigentliche Flashen, und der Knoten bleibt in diesem Zustand hängen.

Der Fehler ist inzwischen [im offiziellen Linux-Kernel behoben](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=cfc83a3c71517b59c1047db57da31e26a9dc2f33), und **v2025.12.3** enthält genau diesen Fix. Die Schwierigkeit dabei: Während des Updates läuft noch die **alte** Firmware, die den Fehler noch enthält. Deshalb kann bereits das Update **auf** die fehlerbereinigte Version selbst hängen bleiben.

## Anleitung: Update manuell durchführen

Bitte nur ausführen, wenn euer Knoten **v2025.12.2 oder älter** hat (siehe Tabelle oben). Voraussetzung ist SSH-Zugriff auf euren Knoten (SSH-Schlüssel oder Passwort, wie im Config-Mode hinterlegt).

**Schritt 1:** Per SSH mit dem Knoten verbinden (die Adresse findet ihr z. B. auf der [Knotenkarte](https://map.ffmuc.net)):

```
ssh root@<adresse-eures-knotens>
```

**Schritt 2:** Diese Zeilen als Ganzes kopieren, einfügen und mit Enter bestätigen:

```
for i in $(batctl if | cut -d: -f1); do
    [ -d "/sys/class/net/$i/phy80211" ] && batctl hardif "$i" throughput_override 10mbit
done
sleep 5
autoupdater -f -b experimental
```

Die ersten Zeilen umgehen die fehlerhafte Stelle in batman-adv (das WLAN-Mesh erhält bis zum nächsten Neustart einen festen statt eines laufend gemessenen Metrik-Werts, was unbedenklich ist). Die letzte Zeile installiert v2025.12.3 sofort. Der Zusatz »experimental« bedeutet hier nicht, dass eine experimentelle Firmware installiert wird: Es handelt sich um exakt dieselbe Version v2025.12.3, die am 1. August ohnehin verteilt wird; sie wird an dieser Stelle lediglich vorab bereitgestellt. Der Knoten bleibt dauerhaft auf dem **stable**-Zweig, die Option gilt nur für diesen einen Aufruf.

**Schritt 3:** Abwarten. Der Knoten lädt die neue Firmware, die SSH-Verbindung bricht ab, und der Knoten startet neu. Nach etwa 10 Minuten ist er mit **v2025.12.3** wieder online. Der Vorgang ist damit abgeschlossen; das automatische Update am 1. August betrifft den Knoten dann nicht mehr.

Zwei Hinweise:

* Meldet der Autoupdater »no new version available«, ist der Knoten bereits aktuell.
* Bitte die Zeilen **in einem Durchgang inklusive Update** ausführen. Der Schutz gilt nur bis zum nächsten Neustart; nur die ersten Zeilen auszuführen und das Update später nachzuholen, hat daher keine Wirkung.

## Was passiert ohne manuelles Eingreifen?

Dann versucht der Knoten das Update ab dem **1. August automatisch** - ohne den beschriebenen Schutz. In den meisten Fällen verläuft das Update ohne Probleme. Andernfalls bleibt der Knoten hängen: Er ist offline und aus der Ferne nicht erreichbar. In diesem Fall hilft nur, **den Stromstecker zu ziehen**, 10 Sekunden zu warten und ihn wieder einzustecken.

Dabei entsteht kein dauerhafter Schaden: Der Knoten startet anschließend mit der alten Firmware und versucht das Update später erneut. Dabei kann er wieder hängen bleiben, bis das Update einmal erfolgreich durchläuft. Wir empfehlen daher, nach dem 1. August kurz auf der [Karte](https://map.ffmuc.net) zu prüfen, ob der Knoten noch online ist.

Wer Knoten an schwer zugänglichen Standorten betreibt (Dach, Keller, Ferienhaus …), dem empfehlen wir das manuelle Update besonders.

Ab v2025.12.3 ist der Fehler behoben, und alle weiteren Updates laufen wieder normal.

## Technischer Hintergrund

Für alle, die es genau wissen wollen: Der Deadlock steckt im ELP-Metrik-Worker von B.A.T.M.A.N. V. Beim Abbau einer WLAN-Mesh-Schnittstelle wird der Worker unter gehaltenem RTNL-Lock per `cancel_delayed_work_sync()` beendet - während der Worker selbst gerade auf `rtnl_lock()` wartet. Beide warten aufeinander, für immer. Das `throughput_override` aus der Anleitung sorgt dafür, dass der Worker die betroffene Code-Stelle gar nicht erst erreicht. Details stehen in unserem [Issue #776](https://github.com/freifunkMUC/site-ffm/issues/776) und im [Kernel-Commit](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=cfc83a3c71517b59c1047db57da31e26a9dc2f33).

Vielen Dank an alle, die im Januar Logs und Hinweise beigesteuert haben, an **Sören Skaarup** für das Testen sowie an **Sven Eckelmann** vom batman-adv-Projekt für den schnellen Fix. Aus einer Fehlermeldung der Community ist so ein Patch im offiziellen Linux-Kernel entstanden.

Bei Fragen oder Problemen meldet euch gerne im [Firmware-Channel](https://chat.ffmuc.net/freifunk/channels/firmware).

Viele Grüße
Euer Freifunk München Team

</section>

<section data-lang="en" class="language-content" markdown="1">

On **August 1, 2026** we will roll out firmware **v2025.12.3** to all nodes via **automatic update**. This is a small maintenance release with one important fix: it addresses a bug that can affect the update process itself.

The short version:

* Nodes running firmware **v2025.12.2 or older** may be affected by a known bug that can cause the node to **hang during the update**. During a comparable rollout in January, this affected around 10 % of nodes.
* A hung node is **offline and unreachable remotely**. It can only be recovered by physically pulling the power plug on site.
* This can be avoided: **anyone with SSH access to their node can safely trigger the update themselves using the commands below.** The process takes a few minutes and is recommended for everyone with SSH access to their node.
* Nodes that have WiFi Mesh disabled are not affected.

## Is my node affected?

You can find your node's firmware version on its status page or on the [node map](https://map.ffmuc.net).

| Your firmware           | Risk                                              |
| ----------------------- | ------------------------------------------------- |
| v2025.12.3 or newer     | ✅ Not affected, nothing to do                    |
| v2025.6.1 to v2025.12.2 | ⚠️ Update may hang, see instructions below        |
| older than v2025.6.1    | ✅ Not affected, but manual update is recommended |

Affected are nodes that **mesh via Wi-Fi** (802.11s) and have mesh neighbors in range. Nodes connected exclusively via VPN or cable (mesh-on-LAN/WAN) are not affected; the instructions can, however, be applied there safely as well.

## What happened?

During the [stable rollout in January]({% post_url 2026-01-06-auffaelligkeiten-stable-firmware-rollout %}), around 10 % of nodes hung during the update. Based on reports and logs from the community, we were able to determine the cause: a bug in **batman-adv**, our mesh routing protocol. When the Wi-Fi mesh interfaces are shut down during the update, two parts of the kernel can block each other (a so-called deadlock). As a result, the update never reaches the actual flashing stage, and the node remains stuck in this state.

The bug has since been [fixed in the official Linux kernel](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=cfc83a3c71517b59c1047db57da31e26a9dc2f33), and **v2025.12.3** contains exactly this fix. The difficulty is that during the update, the **old** firmware — which still contains the bug — is running. As a result, the update **to** the fixed version can itself still hang.

## Instructions: update your node manually

Please only do this if your node runs **v2025.12.2 or older** (see the table above). You need SSH access to your node (SSH key or password, as configured in config mode).

**Step 1:** Connect to your node via SSH (you can find its address on the [node map](https://map.ffmuc.net)):

```
ssh root@<address-of-your-node>
```

**Step 2:** Copy the following lines as a whole, paste them, and confirm with Enter:

```
for i in $(batctl if | cut -d: -f1); do
    [ -d "/sys/class/net/$i/phy80211" ] && batctl hardif "$i" throughput_override 10mbit
done
sleep 5
autoupdater -f -b experimental
```

The first lines route around the buggy code path in batman-adv (until the next reboot, the Wi-Fi mesh uses a fixed link metric instead of a continuously measured one, which is harmless). The last line installs v2025.12.3 right away. The "experimental" flag here does not mean an experimental firmware is being installed: it is exactly the same v2025.12.3 that will be rolled out on August 1 anyway; it is simply made available ahead of time through this channel. The node permanently remains on the **stable** branch; the flag only applies to this single invocation.

**Step 3:** Wait. The node downloads the new firmware, the SSH connection drops, and the node reboots. After about 10 minutes it will be back online running **v2025.12.3**. The process is then complete, and the automatic update on August 1 will no longer apply to this node.

Two notes:

* If the autoupdater reports "no new version available", the node is already up to date.
* Please run the lines **in a single session, including the update**. The protection only lasts until the next reboot, so running just the first lines and updating later has no effect.

## What happens without manual action?

In that case, the node will attempt the update **automatically starting August 1** - without the protection described above. In most cases, the update completes without issues. Otherwise, the node hangs: it is offline and unreachable remotely. In that case, the only remedy is to **pull the power plug**, wait 10 seconds, and plug it back in.

This causes no permanent damage: the node then boots the old firmware and will retry the update later. It may hang again in the process until the update eventually succeeds. We therefore recommend checking the [map](https://map.ffmuc.net) after August 1 to confirm the node is still online.

For nodes in hard-to-reach places (rooftop, basement, holiday home …), we especially recommend the manual update.

From v2025.12.3 on, the bug is fixed and all further updates will work normally again.

## Technical background

For those who want the details: the deadlock lives in the ELP metric worker of B.A.T.M.A.N. V. When a Wi-Fi mesh interface is torn down, the worker is stopped via `cancel_delayed_work_sync()` while the RTNL lock is held - while the worker itself is waiting on `rtnl_lock()`. Both wait for each other, forever. The `throughput_override` from the instructions ensures the worker never reaches the affected code path in the first place. Details can be found in our [issue #776](https://github.com/freifunkMUC/site-ffm/issues/776) and in the [kernel commit](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=cfc83a3c71517b59c1047db57da31e26a9dc2f33).

Thank you to everyone who contributed logs and hints in January, to **Sören Skaarup** for testing, and to **Sven Eckelmann** from the batman-adv project for the quick fix. A bug report from our community turned into a patch in the official Linux kernel.

If you have questions or run into problems, please reach out in the [firmware channel](https://chat.ffmuc.net/freifunk/channels/firmware).

Best regards
Your Freifunk München Team

</section>
