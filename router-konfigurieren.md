---
layout: single
title: Router konfigurieren
permalink: /router-konfigurieren/
---

## Einleitung

Für die Einrichtung des Routers werden keine technischen Kenntnisse benötigt. Wenn du dieser Anleitung Schritt für Schritt folgst, kann eigentlich nichts schiefgehen. Wenn du fertig bist, läuft das Freifunk WLAN und ist für alle in der Nähe als offenes WLAN mit dem Namen “muenchen.freifunk.net” zu sehen.

Dein Router sollte das Freifunk-Betriebssystem (die “Firmware”) bereits installiert haben. Falls dein Router noch keine Freifunk-Firmware installiert hat, findest du [hier](/router-flashen/) eine Schritt-für-Schritt-Anleitung. Alternativ helfen wir Dir natürlich auch gerne auf einem [Freifunk-Treffen](/kontakt/).

Wenn du noch nicht im [Konfigurationsmodus](https://ffmuc.net/wiki/p/Routerkonfiguration_via_UI) bist, drücke die Reset-Taste am Router solange bis alle Lampen am Router kurz aufleuchten. Der Router startet dann neu in den Konfigurationsmodus.

## Router einrichten

### 1. Freifunk-Router mit dem Computer verbinden

Deinem Router liegen ein Steckernetzteil (1) und ein LAN-Kabel (2) bei.

![Ueberblick](/assets/router-flashen/guide-17.jpg)

Schließe zuerst den Router mit dem Steckernetzteil (1) an eine Steckdose an. [Verbinde](https://ffmuc.net/wiki/p/Routerkonfiguration_via_UI#Verkabeln) dann den Router mit dem beiliegenden LAN-Kabel (2) mit Deinem Computer. Stecke es dabei am Router in eine gelbe Buchse.

![LAN-Buchsen](/assets/router-flashen/guide-15.jpg)

### 2. Router konfigurieren

Jetzt kannst du den Router einfach über den Browser konfigurieren.

Dazu rufst du in deinem Browser folgende Adresse auf: [http://192.168.1.1](http://192.168.1.1)

Dein Browserfenster müsste nun wie folgt aussehen. Hier kannst du die wichtigsten Einstellungen für deinen Router vornehmen.

![Gluon Luci](/assets/router-konfigurieren/luci01.png)

Zuerst klickst Du auf "Expert Mode" um folgende Einstellungen vorzunehmen:

#### Expert Mode

##### Autoupdate

Es wird empfohlen, den Auto-Update Mechanismus zu aktivieren.
Stelle sicher, dass der Haken bei "Auto-Update" gesetzt ist.
Das heisst sobald eine neue Version unserer Freifunk Firmware verfügbar ist, wird sie automatisch auf den Router heruntergeladen und installiert - Du musst nichts Zusätzliches tun!

##### Zugangsdaten

Falls Du die Einstellungen deines Routers ueber Netzwerk aendern willst,
musst Du hier ein Passwort oder einen [SSH Key hinterlegen](https://forum.freifunk.net/t/ssh-key-einrichten/2165).
Wenn Du das nicht machst, musst Du physischen Zugang zu dem Router haben, um
ihn manuell in den Konfigurationsmodus zurueck zu versetzen.

Danach klickst Du auf "Speichern" und wechselst auf die Wizard Seite:

#### Wizard

##### Name dieses Knotens

Als erstes solltest du deinem Router einen Namen geben. Nimm einfach einen, der dir gefällt und vielleicht etwas über den Standort des Routers aussagt. Bitte achte darauf, dass keine Leerzeichen im Namen enthalten sind. Verwende stattdessen einfach einen Bindestrich (“-”) oder Unterstrich (“\_”).

##### Segmente

Auf Grund der Größe von Freifunk München ist das Netz in mehrere Segmente unterteilt.

In der Mitte befindet sich `München Stadt` und außen rum die jeweiligen Himmelsrichtungen, danach folgt das Umland mit seinen Himmelsrichtungen. Auf Grund der hohen Knotendichte in `Gauting` und `Freising` haben diese beiden Kreise jeweils extra Segmente erhalten. Die Unterteilungen halten sich nicht strikt an Stadtgrenzen, sondern sind so gewählt dass eine möglichst gute Verteilung der Knoten stattfindet.

Für alle Knoten die in keines der aufgezeigten Segmente passen gibt es das Segment `Welt`.

![Segment Übersicht](/assets/segmente_map.png)

##### Mesh-VPN aktivieren (empfohlen)

Wenn du bei “Mesh-VPN aktivieren” ein Häkchen setzt, wird über deinen Internet-Anschluss eine verschlüsselte Verbindung zu den Freifunk-Servern hergestellt. Diese verbinden deinen Router dann mit weit entfernten Freifunk-Routern und dem Internet, ohne Störerhaftung.

Wenn die Option deaktiviert bleibt, kann sich dein Router nur mit anderen Freifunk-Routern in der Nachbarschaft verbinden. Internet-Zugang ist dann nur möglich, wenn einer der anderen Router ihn anbietet. Auch in dem Fall bietet es sich an die Option zu setzen und einfach in der Praxis den blauen Port ungenutzt zu lassen.

![Gluon Luci](/assets/router-konfigurieren/luci02.png)

Wir empfehlen dieses Häkchen zu setzen.

##### Mesh-VPN Bandbreite begrenzen (optional)

Wenn du einen normalen Internet-Anschluss hast, wird dein Freifunk-Router im alltäglichen Betrieb nicht allzuviel von deiner Bandbreite in Anspruch nehmen. Unsere Empfehlung ist deshalb, die Begrenzung nicht zu aktivieren.

Solltest du aber trotzdem eine Begrenzung eintragen wollen, setze den Haken “Mesh-VPN Bandbreite begrenzen”. Daraufhin erscheinen zwei neue Felder. Trage in die beiden Felder die gewünschten Grenzen in Kbit/s ein. Wir empfehlen mindestens “8000″ für Downstream und “500″ für Upstream.

##### Geo-Koordinaten

Wenn du die Geo-Koordinaten deines Routers hier einträgst, ist er auf der [Knotenkarte](https://map.ffmuc.net/) zu sehen. So können alle feststellen, wo überall Freifunk verfügbar ist. Diese Angabe ist freiwillig, aber empfohlen.

Die Koordinaten zu ermitteln, ist ganz einfach: Suche den Standort auf der [Knotenkarte](https://map.ffmuc.net/) und klicke mit der rechten Maustaste auf die entsprechende Stelle in der Karte, um die Koordinaten zu erfahren.

![Gluon Luci](/assets/router-konfigurieren/luci03.png)

Wenn du alle Daten eingegeben und noch mal geprüft hast, bist du fertig und klickst beherzt auf “Fertig”.

### (Fast) Geschafft!

Dein Freifunk-Router ist nun fertig eingerichtet – aber du bist noch nicht ganz fertig!

### 4. Router anschließen

Wenn du vorhin das Mesh-VPN aktiviert hast, kannst du den Router nun ans Internet anschließen. Dazu musst du das LAN-Kabel auf der Rückseite in die blaue Buchse umstecken.

![WAN-Buchse](/assets/router-flashen/guide-16.jpg)

Das andere Ende des Kabels gehört in deinen Internet-Router.
Clients koennen sich nun über die gelben Buchsen oder ueber das WLAN mit der SSID "muenchen.freifunk.net" in das Freifunk Netz einbuchen.

Jetzt hast du’s geschafft. Klopf dir auf die Schultern, freu dich und verbreite die Botschaft von Freifunk weiter!

## Fragen?

Solltest du Fragen oder Probleme haben oder Einträge deines Knoten ändern wollen, lies die [FAQ](/faq/) oder [schreibe uns gerne an](/kontakt/).

## Noch ein wichtiger Hinweis zum Schluss

Das Freifunk-Netz wird getunnelt. Wo Deine Pakete wieder ins Internet entlassen werden können wir nicht beeinflussen und wird von unseren VPN-Providern bestimmt. Möglicherweise liegt der VPN-Endpunkt im Ausland (z.B. Niederlande oder Schweden). Das kann bedeuten, dass dich Facebook, Googlemail, etc. warnen, du seist im Ausland. Erschrick nicht, obwohl in manchen Warnungen von „Hackerangriffen“ etc. die Rede ist. Das ist ganz normal und es soll auch so sein. Diese Maßnahme schützt Freifunk vor ungerechtfertigten Abmahnungen wegen der [Störerhaftung](https://ffmuc.net/wiki/p/Argumentationshilfe_Freifunk#St.C3.B6rerhaftung). Es gibt auch VPN-Endpunkte in Deutschland. Auch da nicht erschrecken, da die Gerichtsbarkeit des VPN-Betreibers zählt, nicht der Ort wo er seine Router aufstellt.

Weitere Informationen dazu findest du in der [FAQ](/faq/).

Quelle: [Freifunk Magdeburg (CC BY-SA 4.0)](http://md.freifunk.net)
