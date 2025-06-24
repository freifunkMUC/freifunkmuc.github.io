---
layout: posts
title: "Austausch älterer Router"
date: 2019-07-11 14:00:00
categories: freifunkmuc
---

Wie ihr vielleicht schon in unserem [Chat](https://chat.ffmuc.net) mitbekommen habt, werden manche Geräte demnächst nicht mehr unterstützt. Unter anderem fallen diese Geräte durch gelegentliche Neustarts bei vielen Clients, schlechter Performance und geringen Durchsatz auf.

Es handelt sich um die sogenannten 4/32-Geräte, das heisst Geräte mit nur 4MB Flash-Speicher und 32MB RAM. Der geringe Arbeitsspeicher stellt ein großes Problem für die Stabilität der Geräte dar, da dieser schnell voll läuft. Da der Linux-Kernel und die benötigten Libraries mit der Zeit gewachsen sind, schaffen wir es mit dem neuesten Release nicht mehr das Firmware-Image klein genug für den vorhandenen Flash-Speicher zu machen.

Außerdem wird der Support von Gluon und OpenWrt, unserer Basisfirmware, im nächsten Release beendet. Das bedeutet, dass es schwierig wird, Funktions-, sowie Sicherheitsupdates für diese Geräte bereit zu stellen.

Aus diesem Grund wird es leider in naher Zukunft **keine** Updates - auch keine Sicherheitsupdates - mehr für diese Geräte geben.

Wir werden versuchen so lange wie **möglich** und **sinnvoll** noch Updates für die Geräte bereitzustellen, können jedoch nicht sagen wie lange dies der Fall sein wird.

Deswegen wollen wir euch bitten, so bald wie möglich eure alten Geräte durch neuere zu ersetzen!

## Router kaufen

Wir empfehlen den Besuch beim lokalen Händler deines Vertrauens, da du dort die Revision vor dem Kauf überprüfen kannst. Alternativ lohnt sich der Preisvergleich im Internet bei Seiten wie [Geizhals](https://geizhals.de/) oder [Idealo](https://www.idealo.de/).

Hier findet ihr außerdem eine [Geschwindigkeitsmessungen für viele Geräte](https://ffmuc.net/wiki/doku.php?id=knb:gluon.speed-with-wg).

### Kostengünstige Geräte:

Siehe [Empfehlungen von Freifunk Aachen](https://wiki.freifunk.net/Freifunk_Aachen/Hardware)

### Bekannte Geräte:

- Xiaomi Mi Router 4A Gigabit Edition (ca. 50€)
- AVM FRITZ!Repeater 1200 (ohne AX!) (ca. 55€)
- AVM FRITZ!Box 4040 (ca. 72€)
- Netgear WAX220 (ca. 130€)

### High-Performance Lösungen:

Für Lösungen die viele Endgeräte erwarten oder hohe Anforderungen an Bandbreite haben, empfehlen wir einen Offloader zusammen mit Ubiquiti Unifi oder TP-Link Omada Geräten.

Für die Verwaltung der Unifi oder Omada Geräte benötigt ihr keine eigenen Controller (bspw. "UniFi Cloud Key", "Omada Hardware Controller", ...), ihr könnt dir die Geräte über die von FFMuc betriebnen Controller konfigurieren.

#### Offloader

- NanoPi R2S (ca. 90€)
- NanoPi R4S (ca. 140€)
- t-bao T8 Plus (ca. 150€)

## Kontakt mit FFMuc aufnehmen

Auch schauen wir, dass wir in unserem [Marktplatz](https://ffmuc.net/pad/p/Marktplatz) einige Geräte zur Aufrüstung zur Verfügung stellen können, hierfür achten wir immer wieder auf gute Angebote und stellen diese dann kostenneutral und fertig mit FFMUC Firmware bestückt zur Verfügung.

Für Fragen und Feedback könnt ihr euch gerne mit uns in [Verbindung](https://ffmuc.net/kontakt) setzen.

## Betroffene Geräte

- ALFA Network
  - AP121
  - AP121U
- A5-V11
- D-Link
  - DIR-615 (C1, D1, D2, D3, D4, H1)
- Linksys
  - WRT160NL
- TP-Link
  - TL-MR13U (v1)
  - TL-MR3020 (v1)
  - TL-MR3040 (v1, v2)
  - TL-MR3220 (v1, v2)
  - TL-MR3420 (v1, v2)
  - TL-WA701N/ND (v1, v2)
  - TL-WA730RE (v1)
  - TL-WA750RE (v1)
  - TL-WA801N/ND (v1, v2, v3)
  - TL-WA830RE (v1, v2)
  - TL-WA850RE (v1)
  - TL-WA860RE (v1)
  - TL-WA901N/ND (v1, v2, v3, v4, v5)
  - TL-WA7210N (v2)
  - TL-WA7510N (v1)
  - TL-WR703N (v1)
  - TL-WR710N (v2)
  - TL-WR740N (v1, v3, v4, v5)
  - TL-WR741N/ND (v1, v2, v4, v5)
  - TL-WR743N/ND (v1, v2)
  - TL-WR840N (v2)
  - TL-WR841N/ND (v3, v5, v7, v8, v9, v10, v11, v12)
  - TL-WR843N/ND (v1)
  - TL-WR940N (v1, v2, v3, v4, v5, v6)
  - TL-WR941ND (v2, v3, v4, v5, v6)
  - RE450 (v1)

- Ubiquiti Networks
  - Air Gateway
  - Air Gateway LR
  - Air Gateway PRO
  - Air Router
  - Bullet M2
  - Bullet M5
  - Loco M2
  - Loco M5
  - NanoStation M2
  - NanoStation M5
  - PicoStation M2
- VoCore
  - VoCore (8M, 16M)
