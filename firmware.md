---
layout: page
title: Firmware
permalink: /firmware/
---

## Firmware-Images (Gluon)

In der folgenden Tabelle sind die unterstützten Router aufgeführt. Hier kannst du die entsprechende Freifunk Firmware (aktuelle Version: 0.6~stable20141018) herunterladen.

Die technischen Details zu den jeweiligen Modellen findest du unter [wiki.freifunk.net][hardware].

Modell         |  Erstinstallation  |  Aktualisierung
-------------- | ------------------ | ---------------
D-Link DIR-615                | rev E1                    | rev E1
D-Link DIR-825                | rev B1                    | rev B1
Linksys WRT160NL              |  factory                  |   sysupgrade
TP-Link TL-MR3020             |  1.x                      |  1.x
TP-Link TL-MR3040             |  1.x                      |  1.x
TP-Link TL-MR3220             |  1.x                      |  1.x
TP-Link TL-MR3420             |  1.x, 2.x                 |  1.x, 2.x
TP-Link TL-WA901ND            |  2.x                      |  2.x
TP-Link TL-WDR3500            |  1.x                      |  1.x
TP-Link TL-WDR3600            |  1.x                      |  1.x
TP-Link TL-WDR4300            |  1.x                      |  1.x
TP-Link TL-WR740N/ND          |  1.x, 3.x, 4.x            |  1.x, 3.x, 4.x
TP-Link TL-WR741N/ND          |  1.x, 2.x, 4.x            |  1.x, 2.x, 4.x
TP-Link TL-WR841N/ND          |  3.x, 5.x, 7.x, 8.x, 9.x  |  3.x, 5.x, 7.x, 8.x, 9.x
TP-Link TL-WR842N/ND          |  1.x, 2.x                 |  1.x, 2.x
TP-Link TL-WR941N/ND          |  2.x, 3.x, 4.x            |  2.x, 3.x, 4.x
TP-Link TL-WR1043N/ND         |  1.x  |  1.x
Ubiquiti Bullet 2M / Ubiquiti Nanostation Loco M2  |  1.x  |  1.x
Ubiquiti Nanostation M2 / Ubiquiti Nanostation M5  |  1.x  |  1.x
Ubiquiti Unifi AP / Ubiquiti Unifi AP LR           |  1.x  |  1.x
Ubiquiti Unifiap Outdoor                           |  1.x  |  1.x

Wir unterstützten aktuell verschiedene Routermodelle. Zunächst musst Du prüfen, welche Firmware Du benötigst. Wichtig ist der Router-Typ (1) und die Hardware-Version (2). Beide Informationen findest Du auf der Rückseite Deines Geräts.

Aktuell bevorzugen wir wegen dem sehr günstigen Preis-Leistungsverhältnis den TP-Link TL-WR841ND (ca. 22 Euro).

Die Anleitung zum flashen des Routers findest du [hier][router-flashen].

### Was ist neu in der Firmware?
Unter [Changelog](#Changelog) findet ihr eine Erklärung zu den jeweiligen Änderungen der Firmware Versionen.

## Zweige

TODO CONTENT UEBERPRUEFEN

Wer im Config-Mode des Geräts die Optionen zum Autoupdate angeschaut hat, wird drei Entwicklungszweige namens stable, beta und experimental entdeckt haben. Normale Nutzer werden hier stable auswählen, da dies gut getestete und für den stabilen Dauerbetrieb vorgesehene Versionen sind – die mit den Releasenummern, die auch im Changelog stehen. Bei beta bekommt man Versionen, die bald das nächste Release werden. Diese sollten im normalen Betrieb keine Probleme machen, sind aber eben noch als Testversionen gedacht. Bei experimental landen, wie der Name schon sagt, Zwischenstände, wo wir für nichts garantieren. Das bitte nur anklicken, wenn man weiß, was man tut oder auch mal einige Zeit ohne den Freifunk-Router leben kann, sollte etwas kaputt gehen.

Automatische Updates passieren immer nur im entsprechenden Zweig, nicht übergreifend. Es kann dazu kommen, dass in stable eine neuere Version liegt, als in beta oder experimental, aber das heißt nicht, dass diese in einen anderen Zweig installiert wird. Wer beta auswählt, bekommt nur beta. Darüber hinaus ist es aber so, dass die letzte Beta vor einem Release, dann zum Release wird. D.h. wenn es bspw. für Version 0.29 zwei Beta-Versionen gab, dann ist die Version 0.29_beta2 technisch identisch zur 0.29 stable, es klebt nur ein anderer Name drauf, faktisch hat man aber dann erstmal die stabile Version, bis die erste Beta für die Folgeversion kommt. Wer Fragen dazu hat, kann sich gern nochmal konkret an uns wenden.

## Changelog

### 0.6~stable20141018

* TODO CONTENT

[hardware]: http://wiki.freifunk.net/Kategorie:Hardware
[router-flashen]: /router-flashen/
