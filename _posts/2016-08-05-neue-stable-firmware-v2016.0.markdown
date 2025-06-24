---
layout: posts
title: "Neue Stable Firmware v2016.0"
date: 2016-08-05 21:56:00
categories: freifunkmuc
---

Es ist endlich soweit, gerade eben wurde eine neue Version der FFMuc
Software freigegeben v2016.0.

Aufgrund Zeitmangel der Firmware Mannschaft und diverser "den Fix
sollten wir auch noch reinbringen"-Gründen hat es diesesmal etwas länger
gedauert.

**Hier die Fakten zum Release und das Changelog**

- Es werden diverse neue Modelle nun auch offiziell unterstützt (z.B.
  841v11), komplette Liste siehe Gluon Changelogs (s.u.)
- Es gibt ein Problem mit 1043v1 Routern (regelmäßige Reboots), daher
  werden diese aktuell noch vom Autoupdater ausgenommen.
- based Gluon v2016.1.5
  - [Changelog Gluon v2016.1](https://gluon.readthedocs.org/en/v2016.1/releases/v2016.1.html)
  - [Changelog Gluon v2016.1.1](https://gluon.readthedocs.org/en/v2016.1.1/releases/v2016.1.1.html)
  - [Changelog Gluon v2016.1.2](https://gluon.readthedocs.org/en/v2016.1.2/releases/v2016.1.2.html)
  - [Changelog Gluon v2016.1.3](https://gluon.readthedocs.org/en/v2016.1.3/releases/v2016.1.3.html)
  - [Changelog Gluon v2016.1.4](https://gluon.readthedocs.org/en/v2016.1.4/releases/v2016.1.4.html)
  - [Changelog Gluon v2016.1.5](https://gluon.readthedocs.org/en/v2016.1.5/releases/v2016.1.5.html)
- additional patches for FFMuc
  - mesh_no_rebroadcast for mesh-on-wan
    (8b66da95f1887fc6068a6e9d6b6494c2ff4d2fb4)
  - preserve wifi channels feature
    (76a77902e3624167e81ca6e200519468bb66d5f7)
  - new package tecff-ath9k-broken-wifi-workaround
    (freifunkmuc/gluon-packages)
  - added fix for autoupdater (8f5a7c90019085dd8f02f96ab0e7a905f82e1be0)
- site.conf
  - changed MTU size to 1280
  - due to the decreased MTU fastd can now support IPv6!
- site.mk
  - added USB support for various devices

**Die nächsten Schritte**

- Testen von Hopglass/respondd als Ersatz für Alfred als Lieferant für
  die Kartendaten
- weitere Segmentierung
- weitere Experimente mit Babel als Batman-Ersatz

**Feedback/Probleme bitte im
[Chat](https://chat.ffmuc.net/freifunk/channels/firmware) melden.**

fpletz & chris
