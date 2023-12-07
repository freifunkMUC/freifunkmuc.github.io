---
layout: post
title:  "Supportende von 8/64 Routern"
date:   2023-12-08 14:00:00
categories: freifunkmuc
---

Wie ihr vielleicht schon in unserem [Chat](https://chat.ffmuc.net) mitbekommen habt, werden manche Geräte demnächst
nicht mehr unterstützt. Unter anderem fallen diese Geräte durch gelegentliche unerwartete Neustarts, schlechte
Performance und geringen Durchsatz auf.

Es handelt sich um die sogenannten 8/64-Geräte, das heißt, sie haben nur 8MB Flash-Speicher oder 64MB RAM. Der geringe
Arbeitsspeicher stellt unter anderem ein Problem für die Stabilität dar, da neuere WiFi Treiber oft sehr viel RAM
benötigen. Da der Linux-Kernel und die benötigten Libraries mit der Zeit gewachsen sind, schaffen wir es außerdem mit
dem neuesten Firmware-Release nicht mehr, das Image klein genug für den vorhandenen Flash-Speicher zu machen.

Wir werden im nächsten Release den Support für diese Router beenden. Das bedeutet, dass wir keine Funktions- oder
Sicherheitsupdates für diese Geräte mehr bereitstellen werden.

In Ausnahmefällen werden wir versuchen wichtige Sicherheitsupdates soweit **möglich** und **sinnvoll** für die Geräte
bereitzustellen.

Deswegen wollen wir euch bitten, so bald wie möglich eure alten Geräte durch neuere, mit
ausreichender Hardware, zu ersetzen!

## Router kaufen

Wir empfehlen den Besuch beim lokalen Händler deines Vertrauens, da du dort die Revision vor dem Kauf überprüfen
kannst. Alternativ lohnt sich der Preisvergleich im Internet bei Seiten wie [Geizhals](https://geizhals.de/) oder
[Idealo](https://www.idealo.de/).

Hier findet ihr außerdem eine [Geschwindigkeitsmessungen für viele Geräte](https://ffmuc.net/wiki/doku.php?id=knb:gluon.speed-with-wg).


### Kostengünstige Geräte:

Siehe [Empfehlungen von Freifunk Aachen](https://wiki.freifunk.net/Freifunk_Aachen/Hardware)

Neu im nächsten Release (v2024+)
* Zyxel Multy M1 (ca 35€)
* Cudy WR3000 (ca 55€)
* Netgear WAX220 (ca. 130€)


### High-Performance Lösungen:

Für Installationen die viele Endgeräte erwarten oder hohe Anforderungen an Bandbreite haben, empfehlen wir einen
Offloader zusammen mit Ubiquiti Unifi oder TP-Link Omada Geräten.

Für die Verwaltung der Unifi oder Omada Geräte benötigt ihr keine eigenen Controller (bspw. "UniFi Cloud Key",
"Omada Hardware Controller", ...). Ihr könnt die Geräte über die von FFMuc betriebenen Controller konfigurieren.


#### Offloader
* NanoPi R2S (ca. 90€)
* NanoPi R4S (ca. 140€)
* t-bao	T8 Plus	(ca. 150€)


## Kontakt mit FFMuc aufnehmen

Für Fragen und Feedback könnt ihr euch gerne mit uns in [Verbindung](https://ffmuc.net/kontakt) setzen.


## Betroffene Geräte

***Vorläufige Liste***

Liste wird regelmäßig aktualisiert.

* TP-Link
  * Archer C2
  * Archer C20
  * Archer C20i
  * Archer C25
  * Archer C50
  * Archer C6
  * Archer C60
  * Archer C7
  * CPE210
  * CPE510
  * TL-WR902AC
  * WBS210
  * WBS510

* Netgear
  * R6020
