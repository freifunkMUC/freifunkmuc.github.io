---
layout: page
title: Firmware herunterladen
permalink: /firmware/
---
## ---Seite wird momentan (April/Mai 2019) wg. neuer Firmware überarbeitet--   
Kurzfassung: Freifunk Darmstadt hat eine sehr gute Übersicht der unterstützen Hardware, die dort unterstützten Router gelten größtenteils auch für Freifunk München. 

Die aktuelle Firmware für München und Umland gibts hier: [Freifunk München Firmware](https://firmware.ffmuc.net/) (**aktuelle Version: v2019.0.4**)


## Vor dem Kauf

Wir unterstützen aktuell verschiedene Routermodelle. Am Besten siehst Du vor dem Kauf nach welchen Router-Typ und Hardware-Version wir unterstüzten. Oft bringen Hersteller neue Hardware-Versionen eines Routers auf den Markt, für diese können wir erst oft nach einiger Zeit oder garnicht passende Firmware anbieten. Es kann daher sinnvoll sein gebrauchte Router (die wahrscheinlich eine ältere Hardware-Version sind) oder Router bei einem Treffen zu kaufen.

## Router-Daten herausfinden

Zunächst musst Du prüfen, welche Firmware Du benötigst. Wichtig ist der Router-Typ (1) und die Hardware-Version (2). Beide Informationen findest Du auf der Rückseite Deines Geräts.

![Modell und Version](/assets/router-flashen/guide-14.jpg)



Die Anleitung zum Flashen des Routers findest du [hier][router-flashen].

## Passende Firmware herunterladen

Hier kannst du die entsprechende [Freifunk München Firmware](https://firmware.ffmuc.net/) herunterladen.

* Für eine **Erstinstalltion** benötigst du eine Firmware aus dem Ordner [`factory`](https://firmware.ffmuc.net/stable/factory).
* Für eine **Aktualisierung** eines bestehenden Freifunk Routers oder wenn die Originalfirmware bereits auf OpenWRT basiert benötigst du eine Firmware aus dem Ordner [`sysupgrade`](https://firmware.ffmuc.net/stable/sysupgrade).

## Segmente

Für eine höhere Geschwindigkeit und bessere Nutzbarkeit des Netzes ist es in mehrere Segmente unterteilt. Beim Einrichten wählst du deinen Standort aus und wirst somit automatisch in ein Segment eingeteilt. Eine manuelle Auswahl des Segmentes ist allerdings auch möglich

## Changelog

Das aktuelle Changelog ist zu jeder Version in [unserem Github-Repository](https://github.com/freifunkMUC/site-ffm/blob/stable/CHANGELOG.md) einsehbar.
Hier findet ihr eine Erklärung zu den jeweiligen Änderungen der Firmware Versionen.

[hardware]: https://wiki.freifunk.net/Kategorie:Hardware
[router-flashen]: /router-flashen/
