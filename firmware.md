---
layout: single
title: Firmware herunterladen
permalink: /firmware/
classes: wide
author_profile: false
---

## Aktuelle Firmware

**[Freifunk München Firmware-Selector →](https://firmware.ffmuc.net/)**

Standardmäßig siehst du **empfohlene Geräte**. Andere Modelle sind oft ungeeignet (Performance, Stabilität, Support-Ende).

- Changelog: [site-ffm CHANGELOG](https://github.com/freifunkMUC/site-ffm/blob/stable/CHANGELOG.md)
- Veraltete Hardware: [bitte-router-erneuern.ffmuc.net](https://bitte-router-erneuern.ffmuc.net/)

## Vor dem Kauf

1. **Kaufempfehlungen** nur aus:
   - [Freifunk Aachen Hardware](https://wiki.freifunk.net/Freifunk_Aachen/Hardware)
   - [Freifunk Darmstadt Kaufberatung](https://darmstadt.freifunk.net/mitmachen/kaufberatung/)
   - Kuratiert bei uns: [Mitmachen](/mitmachen/)
2. Modell **und Hardware-Version** notieren
3. Im [Firmware-Selector](https://firmware.ffmuc.net/) prüfen, ob **wir** Images bauen
4. Unsicher? [Chat](https://chat.ffmuc.net/) **vor** der Bestellung

## Router-Daten

Typ (1) und Hardware-Version (2) stehen meist auf dem Gerät:

![Modell und Version](/assets/router-flashen/guide-14.jpg)

Flash-Anleitung: [Router flashen][router-flashen]

## Images

- **Erstinstallation:** Ordner **`factory`**
- **Update** (schon Freifunk/OpenWrt): **`sysupgrade`**

## Segmente

Beim Einrichten wählst du den Standort; das Segment wird i. d. R. automatisch gesetzt.

Alle aktuellen Segmente findest du in [site-ffm/domains](https://github.com/freifunkMUC/site-ffm/tree/HEAD/domains).

[router-flashen]: /router-flashen/
