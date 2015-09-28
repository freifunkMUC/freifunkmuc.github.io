---
layout: page
title: Firmware
permalink: /firmware/
---

Wir unterstützen aktuell verschiedene Routermodelle. Zunächst musst Du prüfen, welche Firmware Du benötigst. Wichtig ist der Router-Typ (1) und die Hardware-Version (2). Beide Informationen findest Du auf der Rückseite Deines Geräts.

![Modell und Version](/assets/router-flashen/guide-14.jpg)

Aktuell bevorzugen wir wegen des guten Preis-Leistungsverhältnises den TP-Link TL-WR841N (ab ca. 16 Euro).

Die Anleitung zum flashen des Routers findest du [hier][router-flashen].

## Images (Gluon)

In der folgenden Tabelle sind die unterstützten Router aufgeführt. Hier kannst du die entsprechende Freifunk Firmware (aktuelle Version: v2015.5) herunterladen.

Die technischen Details zu den jeweiligen Modellen findest du unter [wiki.freifunk.net][hardware].

<ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#kern">Kernbereich</a></li>
  <li><a data-toggle="tab" href="#umland">Umland</a></li>
</ul>

<div class="tab-content" markdown="1">
Modell         |  Erstinstallation  |  Aktualisierung
-------------- | ------------------ | ---------------
Allnet ALL0315N               |  [factory][factory-allnet-all0315n]  |  [sysupgrade][sysupgrade-allnet-all0315n]
Buffalo WZR HP AG300H<br>Buffalo WZR 600DHP | [factory][factory-buffalo-wzr-hp-ag300h-wzr-600dhp]  |  [sysupgrade][sysupgrade-buffalo-wzr-hp-ag300h-wzr-600dhp]
Buffalo WZR HP G450H          |  [factory][factory-buffalo-wzr-hp-g450h]  |  [sysupgrade][sysupgrade-buffalo-wzr-hp-g450h]
D-Link DIR-615                |  [rev C1][factory-d-link-dir-615-rev-c1]                    | [rev C1][sysupgrade-d-link-dir-615-rev-c1]
D-Link DIR-825                |  [rev B1][factory-d-link-dir-825-rev-b1]                    | [rev B1][sysupgrade-d-link-dir-825-rev-b1]
GL.iNet 6408A                 |  [v1][factory-gl-inet-6408a-v1] | [v1][sysupgrade-gl-inet-6408a-v1]
GL.iNet 6416A                 |  [v1][factory-gl-inet-6416a-v1] | [v1][sysupgrade-gl-inet-6416a-v1]
Linksys WRT160NL              |  [factory][factory-linksys-wrt160nl]                  |   [sysupgrade][sysupgrade-linksys-wrt160nl]
Netgear WNDR3700              |  [factory][factory-netgear-wndr3700]                  |   [sysupgrade][sysupgrade-netgear-wndr3700]
Netgear WNDR3700v2            |  [factory][factory-netgear-wndr3700v2]                |   [sysupgrade][sysupgrade-netgear-wndr3700v2]
Netgear WNDR3700v4            |  [factory][factory-netgear-wndr3700v4]                |   [sysupgrade][sysupgrade-netgear-wndr3700v4]
Netgear WNDR3800              |  [factory][factory-netgear-wndr3800]                  |   [sysupgrade][sysupgrade-netgear-wndr3800]
Netgear WNDR3800              |  [factory][factory-netgear-wndr4300]                  |   [sysupgrade][sysupgrade-netgear-wndr4300]
Netgear WNDRMACv2             |  [factory][factory-netgear-wndrmacv2]                 |   [sysupgrade][sysupgrade-netgear-wndrmacv2]
TP-Link CPE210                |  [1.0][factory-tp-link-cpe210-v1] | [sysupgrade][sysupgrade-tp-link-cpe210-v1]
TP-Link CPE220                |  [1.0][factory-tp-link-cpe220-v1] | [sysupgrade][sysupgrade-tp-link-cpe220-v1]
TP-Link CPE510                |  [1.0][factory-tp-link-cpe510-v1] | [sysupgrade][sysupgrade-tp-link-cpe510-v1]
TP-Link CPE520                |  [1.0][factory-tp-link-cpe520-v1] | [sysupgrade][sysupgrade-tp-link-cpe520-v1]
TP-Link TL-MR3020             |  [1.x][factory-tp-link-tl-mr3020-v1]                      |  [1.x][sysupgrade-tp-link-tl-mr3020-v1]
TP-Link TL-MR3040             |  [1.x][factory-tp-link-tl-mr3040-v1]<br>[2.x][factory-tp-link-tl-mr3040-v2]                  |  [1.x][sysupgrade-tp-link-tl-mr3040-v1]<br>[2.x][sysupgrade-tp-link-tl-mr3040-v2]
TP-Link TL-MR3220             |  [1.x][factory-tp-link-tl-mr3220-v1]                      |  [1.x][sysupgrade-tp-link-tl-mr3220-v1]
TP-Link TL-MR3420             |  [1.x][factory-tp-link-tl-mr3420-v1]<br>[2.x][factory-tp-link-tl-mr3420-v2]                 |  [1.x][sysupgrade-tp-link-tl-mr3420-v1]<br>[2.x][sysupgrade-tp-link-tl-mr3420-v2]
TP-Link TL-WA701N/ND          |  [1.x][factory-tp-link-tl-wa701n-nd-v1]   | [1.x][sysupgrade-tp-link-tl-wa701n-nd-v1]
TP-Link TL-WA750RE            |  [1.x][factory-tp-link-tl-wa750re-v1]   | [2.x][sysupgrade-tp-link-tl-wa750re-v1]
TP-Link TL-WA801N/ND          |  [2.x][factory-tp-link-tl-wa801n-nd-v2]   | [2.x][sysupgrade-tp-link-tl-wa801n-nd-v2]
TP-Link TL-WA830RE            |  [1.x][factory-tp-link-tl-wa830re-v1]   | [1.x][sysupgrade-tp-link-tl-wa830re-v1]
TP-Link TL-WA850RE            |  [1.x][factory-tp-link-tl-wa850re-v1]   | [1.x][sysupgrade-tp-link-tl-wa850re-v1]
TP-Link TL-WA860RE            |  [1.x][factory-tp-link-tl-wa860re-v1]   | [1.x][sysupgrade-tp-link-tl-wa860re-v1]
TP-Link TL-WA901ND            |  [2.x][factory-tp-link-tl-wa901n-nd-v2]<br>[3.x][factory-tp-link-tl-wa901n-nd-v3]  |  [2.x][sysupgrade-tp-link-tl-wa901n-nd-v2]<br>[3.x][sysupgrade-tp-link-tl-wa901n-nd-v3]
TP-Link TL-WDR3500            |  [1.x][factory-tp-link-tl-wdr3500-v1]                      |  [1.x][sysupgrade-tp-link-tl-wdr3500-v1]
TP-Link TL-WDR3600            |  [1.x][factory-tp-link-tl-wdr3600-v1]                      |  [1.x][sysupgrade-tp-link-tl-wdr3600-v1]
TP-Link TL-WDR4300            |  [1.x][factory-tp-link-tl-wdr4300-v1]                      |  [1.x][sysupgrade-tp-link-tl-wdr4300-v1]
TP-Link TL-WR703N          |  [1.x][factory-tp-link-tl-wr703n-v1]    | [1.x][sysupgrade-tp-link-tl-wr703n-v1]
TP-Link TL-WR710N          |  [1.x][factory-tp-link-tl-wr710n-v1]    | [1.x][sysupgrade-tp-link-tl-wr710n-v1]
TP-Link TL-WR740N/ND          |  [1.x][factory-tp-link-tl-wr740n-nd-v1]<br>[3.x][factory-tp-link-tl-wr740n-nd-v3]<br>[4.x][factory-tp-link-tl-wr740n-nd-v4]            |  [1.x][sysupgrade-tp-link-tl-wr740n-nd-v1]<br>[3.x][sysupgrade-tp-link-tl-wr740n-nd-v3]<br>[4.x][sysupgrade-tp-link-tl-wr740n-nd-v4]
TP-Link TL-WR741N/ND          |  [1.x][factory-tp-link-tl-wr741n-nd-v1]<br>[2.x][factory-tp-link-tl-wr741n-nd-v2]<br>[4.x][factory-tp-link-tl-wr741n-nd-v4]            |  [1.x][sysupgrade-tp-link-tl-wr741n-nd-v1]<br>[2.x][sysupgrade-tp-link-tl-wr741n-nd-v2]<br>[4.x][sysupgrade-tp-link-tl-wr741n-nd-v4]
TP-Link TL-WR743N/ND          |  [1.x][factory-tp-link-tl-wr743n-nd-v1]<br> [2.x][factory-tp-link-tl-wr743n-nd-v2]    | [1.x][sysupgrade-tp-link-tl-wr743n-nd-v1]<br>[1.x][sysupgrade-tp-link-tl-wr743n-nd-v2]
TP-Link TL-WR841N/ND          |  [3.x][factory-tp-link-tl-wr841n-nd-v3]<br>[5.x][factory-tp-link-tl-wr841n-nd-v5]<br>[7.x][factory-tp-link-tl-wr841n-nd-v7]<br>[8.x][factory-tp-link-tl-wr841n-nd-v8]<br>[9.x][factory-tp-link-tl-wr841n-nd-v9]  |  [3.x][sysupgrade-tp-link-tl-wr841n-nd-v3]<br>[5.x][sysupgrade-tp-link-tl-wr841n-nd-v5]<br>[7.x][sysupgrade-tp-link-tl-wr841n-nd-v7]<br>[8.x][sysupgrade-tp-link-tl-wr841n-nd-v8]<br>[9.x][sysupgrade-tp-link-tl-wr841n-nd-v9]
TP-Link TL-WR842N/ND          |  [1.x][factory-tp-link-tl-wr842n-nd-v1]<br>[2.x][factory-tp-link-tl-wr842n-nd-v2]                 |  [1.x][sysupgrade-tp-link-tl-wr842n-nd-v1]<br>[2.x][sysupgrade-tp-link-tl-wr842n-nd-v2]
TP-Link TL-WR941N/ND          |  [2.x][factory-tp-link-tl-wr941n-nd-v2]<br>[3.x][factory-tp-link-tl-wr941n-nd-v3]<br>[4.x][factory-tp-link-tl-wr941n-nd-v4]<br>[5.x][factory-tp-link-tl-wr941n-nd-v5]             |  [2.x][sysupgrade-tp-link-tl-wr941n-nd-v2]<br>[3.x][sysupgrade-tp-link-tl-wr941n-nd-v3]<br>[4.x][sysupgrade-tp-link-tl-wr941n-nd-v4]<br>[5.x][sysupgrade-tp-link-tl-wr941n-nd-v5]
TP-Link TL-WR1043N/ND         |  [1.x][factory-tp-link-tl-wr1043n-nd-v1]<br>[2.x][factory-tp-link-tl-wr1043n-nd-v2]  |  [1.x][sysupgrade-tp-link-tl-wr1043n-nd-v1]<br>[2.x][sysupgrade-tp-link-tl-wr1043n-nd-v2]
TP-Link TL-WR2543N/ND         |  [1.x][factory-tp-link-tl-wr2543n-nd-v1]                      |  [1.x][sysupgrade-tp-link-tl-wr2543n-nd-v1]
Ubiquiti Bullet M |  [factory][factory-ubiquiti-bullet-m]  |  [sysupgrade][sysupgrade-ubiquiti-bullet-m]
Ubiquiti Nanostation/Loco M   |  [factory][factory-ubiquiti-nanostation-m]  |  [sysupgrade][sysupgrade-ubiquiti-nanostation-m]
Ubiquiti Nanostation M XW     |  [factory][factory-ubiquiti-nanostation-m-xw]  |  [sysupgrade][sysupgrade-ubiquiti-nanostation-m-xw]
Ubiquiti Nanostation Loco M XW |  [factory][factory-ubiquiti-loco-m-xw]  |  [sysupgrade][sysupgrade-ubiquiti-loco-m-xw]
Ubiquiti UniFi AP / Unifi AP-LR |  [factory][factory-ubiquiti-unifi]  |  [sysupgrade][sysupgrade-ubiquiti-unifi]
Ubiquiti UniFi AP-Pro         |  [factory][factory-ubiquiti-unifi-ap-pro]  |  [sysupgrade][sysupgrade-ubiquiti-unifi-ap-pro]
Ubiquiti UniFi Outdoor        |  [factory][factory-ubiquiti-unifiap-outdoor]  |  [sysupgrade][sysupgrade-ubiquiti-unifiap-outdoor]
x86 Virtual Machine Images    |  [kvm][factory-x86-kvm]<br>[Generic][factory-x86-generic]<br>[Virtualbox VDI][factory-x86-virtualbox]<br>[VMware vmdk][factory-x86-vmware]  |  [kvm][sysupgrade-x86-kvm]<br>[Generic][sysupgrade-x86-generic]
{:.tab-pane #kern .in .active}

Modell         |  Erstinstallation  |  Aktualisierung
-------------- | ------------------ | ---------------
Allnet ALL0315N               |  [factory][umland-factory-allnet-all0315n]  |  [sysupgrade][umland-sysupgrade-allnet-all0315n]
Buffalo WZR HP AG300H<br>Buffalo WZR 600DHP | [factory][umland-factory-buffalo-wzr-hp-ag300h-wzr-600dhp]  |  [sysupgrade][umland-sysupgrade-buffalo-wzr-hp-ag300h-wzr-600dhp]
Buffalo WZR HP G450H          |  [factory][umland-factory-buffalo-wzr-hp-g450h]  |  [sysupgrade][umland-sysupgrade-buffalo-wzr-hp-g450h]
D-Link DIR-615                |  [rev C1][umland-factory-d-link-dir-615-rev-c1]                    | [rev C1][umland-sysupgrade-d-link-dir-615-rev-c1]
D-Link DIR-825                |  [rev B1][umland-factory-d-link-dir-825-rev-b1]                    | [rev B1][umland-sysupgrade-d-link-dir-825-rev-b1]
GL.iNet 6408A                 |  [v1][umland-factory-gl-inet-6408a-v1] | [v1][umland-sysupgrade-gl-inet-6408a-v1]
GL.iNet 6416A                 |  [v1][umland-factory-gl-inet-6416a-v1] | [v1][umland-sysupgrade-gl-inet-6416a-v1]
Linksys WRT160NL              |  [factory][umland-factory-linksys-wrt160nl]                  |   [sysupgrade][umland-sysupgrade-linksys-wrt160nl]
Netgear WNDR3700              |  [factory][umland-factory-netgear-wndr3700]                  |   [sysupgrade][umland-sysupgrade-netgear-wndr3700]
Netgear WNDR3700v2            |  [factory][umland-factory-netgear-wndr3700v2]                |   [sysupgrade][umland-sysupgrade-netgear-wndr3700v2]
Netgear WNDR3700v4            |  [factory][umland-factory-netgear-wndr3700v4]                |   [sysupgrade][umland-sysupgrade-netgear-wndr3700v4]
Netgear WNDR3800              |  [factory][umland-factory-netgear-wndr3800]                  |   [sysupgrade][umland-sysupgrade-netgear-wndr3800]
Netgear WNDR3800              |  [factory][umland-factory-netgear-wndr4300]                  |   [sysupgrade][umland-sysupgrade-netgear-wndr4300]
Netgear WNDRMACv2             |  [factory][umland-factory-netgear-wndrmacv2]                 |   [sysupgrade][umland-sysupgrade-netgear-wndrmacv2]
TP-Link CPE210                |  [1.0][umland-factory-tp-link-cpe210-v1] | [sysupgrade][umland-sysupgrade-tp-link-cpe210-v1]
TP-Link CPE220                |  [1.0][umland-factory-tp-link-cpe220-v1] | [sysupgrade][umland-sysupgrade-tp-link-cpe220-v1]
TP-Link CPE510                |  [1.0][umland-factory-tp-link-cpe510-v1] | [sysupgrade][umland-sysupgrade-tp-link-cpe510-v1]
TP-Link CPE520                |  [1.0][umland-factory-tp-link-cpe520-v1] | [sysupgrade][umland-sysupgrade-tp-link-cpe520-v1]
TP-Link TL-MR3020             |  [1.x][umland-factory-tp-link-tl-mr3020-v1]                      |  [1.x][umland-sysupgrade-tp-link-tl-mr3020-v1]
TP-Link TL-MR3040             |  [1.x][umland-factory-tp-link-tl-mr3040-v1]<br>[2.x][umland-factory-tp-link-tl-mr3040-v2]                  |  [1.x][umland-sysupgrade-tp-link-tl-mr3040-v1]<br>[2.x][umland-sysupgrade-tp-link-tl-mr3040-v2]
TP-Link TL-MR3220             |  [1.x][umland-factory-tp-link-tl-mr3220-v1]                      |  [1.x][umland-sysupgrade-tp-link-tl-mr3220-v1]
TP-Link TL-MR3420             |  [1.x][umland-factory-tp-link-tl-mr3420-v1]<br>[2.x][umland-factory-tp-link-tl-mr3420-v2]                 |  [1.x][umland-sysupgrade-tp-link-tl-mr3420-v1]<br>[2.x][umland-sysupgrade-tp-link-tl-mr3420-v2]
TP-Link TL-WA701N/ND          |  [1.x][umland-factory-tp-link-tl-wa701n-nd-v1]   | [1.x][umland-sysupgrade-tp-link-tl-wa701n-nd-v1]
TP-Link TL-WA750RE            |  [1.x][umland-factory-tp-link-tl-wa750re-v1]   | [2.x][umland-sysupgrade-tp-link-tl-wa750re-v1]
TP-Link TL-WA801N/ND          |  [2.x][umland-factory-tp-link-tl-wa801n-nd-v2]   | [2.x][umland-sysupgrade-tp-link-tl-wa801n-nd-v2]
TP-Link TL-WA830RE            |  [1.x][umland-factory-tp-link-tl-wa830re-v1]   | [1.x][umland-sysupgrade-tp-link-tl-wa830re-v1]
TP-Link TL-WA850RE            |  [1.x][umland-factory-tp-link-tl-wa850re-v1]   | [1.x][umland-sysupgrade-tp-link-tl-wa850re-v1]
TP-Link TL-WA860RE            |  [1.x][umland-factory-tp-link-tl-wa860re-v1]   | [1.x][umland-sysupgrade-tp-link-tl-wa860re-v1]
TP-Link TL-WA901ND            |  [2.x][umland-factory-tp-link-tl-wa901n-nd-v2]<br>[3.x][umland-factory-tp-link-tl-wa901n-nd-v3]  |  [2.x][umland-sysupgrade-tp-link-tl-wa901n-nd-v2]<br>[3.x][umland-sysupgrade-tp-link-tl-wa901n-nd-v3]
TP-Link TL-WDR3500            |  [1.x][umland-factory-tp-link-tl-wdr3500-v1]                      |  [1.x][umland-sysupgrade-tp-link-tl-wdr3500-v1]
TP-Link TL-WDR3600            |  [1.x][umland-factory-tp-link-tl-wdr3600-v1]                      |  [1.x][umland-sysupgrade-tp-link-tl-wdr3600-v1]
TP-Link TL-WDR4300            |  [1.x][umland-factory-tp-link-tl-wdr4300-v1]                      |  [1.x][umland-sysupgrade-tp-link-tl-wdr4300-v1]
TP-Link TL-WR703N          |  [1.x][umland-factory-tp-link-tl-wr703n-v1]    | [1.x][umland-sysupgrade-tp-link-tl-wr703n-v1]
TP-Link TL-WR710N          |  [1.x][umland-factory-tp-link-tl-wr710n-v1]    | [1.x][umland-sysupgrade-tp-link-tl-wr710n-v1]
TP-Link TL-WR740N/ND          |  [1.x][umland-factory-tp-link-tl-wr740n-nd-v1]<br>[3.x][umland-factory-tp-link-tl-wr740n-nd-v3]<br>[4.x][umland-factory-tp-link-tl-wr740n-nd-v4]            |  [1.x][umland-sysupgrade-tp-link-tl-wr740n-nd-v1]<br>[3.x][umland-sysupgrade-tp-link-tl-wr740n-nd-v3]<br>[4.x][umland-sysupgrade-tp-link-tl-wr740n-nd-v4]
TP-Link TL-WR741N/ND          |  [1.x][umland-factory-tp-link-tl-wr741n-nd-v1]<br>[2.x][umland-factory-tp-link-tl-wr741n-nd-v2]<br>[4.x][umland-factory-tp-link-tl-wr741n-nd-v4]            |  [1.x][umland-sysupgrade-tp-link-tl-wr741n-nd-v1]<br>[2.x][umland-sysupgrade-tp-link-tl-wr741n-nd-v2]<br>[4.x][umland-sysupgrade-tp-link-tl-wr741n-nd-v4]
TP-Link TL-WR743N/ND          |  [1.x][umland-factory-tp-link-tl-wr743n-nd-v1]<br> [2.x][umland-factory-tp-link-tl-wr743n-nd-v2]    | [1.x][umland-sysupgrade-tp-link-tl-wr743n-nd-v1]<br>[1.x][umland-sysupgrade-tp-link-tl-wr743n-nd-v2]
TP-Link TL-WR841N/ND          |  [3.x][umland-factory-tp-link-tl-wr841n-nd-v3]<br>[5.x][umland-factory-tp-link-tl-wr841n-nd-v5]<br>[7.x][umland-factory-tp-link-tl-wr841n-nd-v7]<br>[8.x][umland-factory-tp-link-tl-wr841n-nd-v8]<br>[9.x][umland-factory-tp-link-tl-wr841n-nd-v9]  |  [3.x][umland-sysupgrade-tp-link-tl-wr841n-nd-v3]<br>[5.x][umland-sysupgrade-tp-link-tl-wr841n-nd-v5]<br>[7.x][umland-sysupgrade-tp-link-tl-wr841n-nd-v7]<br>[8.x][umland-sysupgrade-tp-link-tl-wr841n-nd-v8]<br>[9.x][umland-sysupgrade-tp-link-tl-wr841n-nd-v9]
TP-Link TL-WR842N/ND          |  [1.x][umland-factory-tp-link-tl-wr842n-nd-v1]<br>[2.x][umland-factory-tp-link-tl-wr842n-nd-v2]                 |  [1.x][umland-sysupgrade-tp-link-tl-wr842n-nd-v1]<br>[2.x][umland-sysupgrade-tp-link-tl-wr842n-nd-v2]
TP-Link TL-WR941N/ND          |  [2.x][umland-factory-tp-link-tl-wr941n-nd-v2]<br>[3.x][umland-factory-tp-link-tl-wr941n-nd-v3]<br>[4.x][umland-factory-tp-link-tl-wr941n-nd-v4]<br>[5.x][umland-factory-tp-link-tl-wr941n-nd-v5]             |  [2.x][umland-sysupgrade-tp-link-tl-wr941n-nd-v2]<br>[3.x][umland-sysupgrade-tp-link-tl-wr941n-nd-v3]<br>[4.x][umland-sysupgrade-tp-link-tl-wr941n-nd-v4]<br>[5.x][umland-sysupgrade-tp-link-tl-wr941n-nd-v5]
TP-Link TL-WR1043N/ND         |  [1.x][umland-factory-tp-link-tl-wr1043n-nd-v1]<br>[2.x][umland-factory-tp-link-tl-wr1043n-nd-v2]  |  [1.x][umland-sysupgrade-tp-link-tl-wr1043n-nd-v1]<br>[2.x][umland-sysupgrade-tp-link-tl-wr1043n-nd-v2]
TP-Link TL-WR2543N/ND         |  [1.x][umland-factory-tp-link-tl-wr2543n-nd-v1]                      |  [1.x][umland-sysupgrade-tp-link-tl-wr2543n-nd-v1]
Ubiquiti Bullet M |  [factory][umland-factory-ubiquiti-bullet-m]  |  [sysupgrade][umland-sysupgrade-ubiquiti-bullet-m]
Ubiquiti Nanostation/Loco M   |  [factory][umland-factory-ubiquiti-nanostation-m]  |  [sysupgrade][umland-sysupgrade-ubiquiti-nanostation-m]
Ubiquiti Nanostation M XW     |  [factory][umland-factory-ubiquiti-nanostation-m-xw]  |  [sysupgrade][umland-sysupgrade-ubiquiti-nanostation-m-xw]
Ubiquiti Nanostation Loco M XW |  [factory][umland-factory-ubiquiti-loco-m-xw]  |  [sysupgrade][umland-sysupgrade-ubiquiti-loco-m-xw]
Ubiquiti UniFi AP / Unifi AP-LR |  [factory][umland-factory-ubiquiti-unifi]  |  [sysupgrade][umland-sysupgrade-ubiquiti-unifi]
Ubiquiti UniFi AP-Pro         |  [factory][umland-factory-ubiquiti-unifi-ap-pro]  |  [sysupgrade][umland-sysupgrade-ubiquiti-unifi-ap-pro]
Ubiquiti UniFi Outdoor        |  [factory][umland-factory-ubiquiti-unifiap-outdoor]  |  [sysupgrade][umland-sysupgrade-ubiquiti-unifiap-outdoor]
x86 Virtual Machine Images    |  [kvm][umland-factory-x86-kvm]<br>[Generic][umland-factory-x86-generic]<br>[Virtualbox VDI][umland-factory-x86-virtualbox]<br>[VMware vmdk][umland-factory-x86-vmware]  |  [kvm][umland-sysupgrade-x86-kvm]<br>[Generic][umland-sysupgrade-x86-generic]
{:.tab-pane #umland}
</div>

## Changelog

Hier findet ihr eine Erklärung zu den jeweiligen Änderungen der Firmware Versionen.

## v2015.5
 - Updated to Gluon 2015.1.1
   - Fixes some problems with mesh on LAN setups
 - x86 images now support two network interfaces, eth0 for LAN and eth1 for WAN
 - Mesh on WAN is disabled by default

## v2015.4
 - Updated to Gluon 2015.1
   - More supported architectures and router models are available, including x86
 - Setup Mode
   - A new wifi configuration page is available to disable client and mesh
     networks on 2.4 & 5GHz indiviually
   - Mesh on WAN can now be configured and is enabled by default
   - Internationalization for German and English is available and will
     be autodetected depending on the browser setting

### v2015.3

- Add 4 new gateways as placeholders (not all are and will be active immediately)
- Integrated no_rebroadcast fix on mesh-vpn from Gluon Upstream
- Added another key for stable version signing

### v2015.2 (nicht kompatibel zu v2015.1 und älter)

 - Updated to new upstream gluon: 52698e62bac2ec0f8764b12cf437040528e…
…77efb

 - Switched to batman-adv compat version 15
 - Changed channel to 6 with HT20 on 2.4GHz
 - Added FFMuc custom gluon packages with ebtables rules:
   - mcast-drop-non-site to prohibit arp traffic except 10.8.0.0/16
   - mcast-drop-arp to drop arp traffic from/to 0.0.0.0
   - mcast-allow-cjdns to allow cjdns multicast traffic
 - Use new gateways with DNS names
 - Changed default download/upload traffic shaping to 12.000/1.200 kbit/s
 - Removed keyformular note on end of luci configuration, as we're now
   blacklisting keys instead of whitelisting
 - Added information about liquid feedback on end of luci configuration
 - Use improved version naming scheme for autoupdater compatibility with
   intermediate versions
 - Use internal NTP server 0.ntp.ffmuc.net
 - Connections from nodes to gateways only over IPv4 for now (MTU issues)

[hardware]: http://wiki.freifunk.net/Kategorie:Hardware
[router-flashen]: /router-flashen/

[factory-allnet-all0315n]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-allnet-all0315n.bin
[sysupgrade-allnet-all0315n]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-allnet-all0315n-sysupgrade.bin

[factory-buffalo-wzr-hp-ag300h-wzr-600dhp]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-buffalo-wzr-hp-ag300h-wzr-600dhp.bin
[sysupgrade-buffalo-wzr-hp-ag300h-wzr-600dhp]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-buffalo-wzr-hp-ag300h-wzr-600dhp-sysupgrade.bin

[factory-buffalo-wzr-hp-g450h]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-buffalo-wzr-hp-g450h.bin
[sysupgrade-buffalo-wzr-hp-g450h]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-buffalo-wzr-hp-g450h-sysupgrade.bin

[factory-d-link-dir-615-rev-c1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-d-link-dir-615-rev-c1.bin
[sysupgrade-d-link-dir-615-rev-c1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-d-link-dir-615-rev-c1-sysupgrade.bin

[factory-d-link-dir-825-rev-b1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-d-link-dir-825-rev-b1.bin
[sysupgrade-d-link-dir-825-rev-b1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-d-link-dir-825-rev-b1-sysupgrade.bin

[factory-gl-inet-6408a-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-gl-inet-6408a-v1.bin
[sysupgrade-gl-inet-6408a-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-gl-inet-6408a-v1-sysupgrade.bin

[factory-gl-inet-6416a-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-gl-inet-6416a-v1.bin
[sysupgrade-gl-inet-6416a-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-gl-inet-6416a-v1-sysupgrade.bin

[factory-linksys-wrt160nl]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-linksys-wrt160nl.bin
[sysupgrade-linksys-wrt160nl]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-linksys-wrt160nl-sysupgrade.bin

[factory-netgear-wndr3700]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-netgear-wndr3700.img
[sysupgrade-netgear-wndr3700]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-netgear-wndr3700-sysupgrade.bin

[factory-netgear-wndr3700v2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-netgear-wndr3700v2.img
[sysupgrade-netgear-wndr3700v2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-netgear-wndr3700v2-sysupgrade.bin

[factory-netgear-wndr3700v4]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-netgear-wndr3700v4.img
[sysupgrade-netgear-wndr3700v4]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-netgear-wndr3700v4-sysupgrade.tar

[factory-netgear-wndr3800]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-netgear-wndr3800.img
[sysupgrade-netgear-wndr3800]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-netgear-wndr3800-sysupgrade.bin

[factory-netgear-wndr4300]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-netgear-wndr4300.img
[sysupgrade-netgear-wndr4300]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-netgear-wndr4300-sysupgrade.bin

[factory-netgear-wndrmacv2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-netgear-wndrmacv2.img
[sysupgrade-netgear-wndrmacv2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-netgear-wndrmacv2-sysupgrade.bin

[factory-tp-link-cpe210-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-cpe210-v1.0.bin
[sysupgrade-tp-link-cpe210-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-cpe210-v1.0-sysupgrade.bin

[factory-tp-link-cpe220-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-cpe220-v1.0.bin
[sysupgrade-tp-link-cpe220-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-cpe220-v1.0-sysupgrade.bin

[factory-tp-link-cpe510-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-cpe510-v1.0.bin
[sysupgrade-tp-link-cpe510-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-cpe510-v1.0-sysupgrade.bin

[factory-tp-link-cpe520-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-cpe520-v1.0.bin
[sysupgrade-tp-link-cpe520-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-cpe520-v1.0-sysupgrade.bin

[factory-tp-link-tl-mr3020-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-mr3020-v1.bin
[sysupgrade-tp-link-tl-mr3020-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-mr3020-v1-sysupgrade.bin

[factory-tp-link-tl-mr3040-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-mr3040-v1.bin
[sysupgrade-tp-link-tl-mr3040-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-mr3040-v1-sysupgrade.bin
[factory-tp-link-tl-mr3040-v2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-mr3040-v2.bin
[sysupgrade-tp-link-tl-mr3040-v2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-mr3040-v2-sysupgrade.bin

[factory-tp-link-tl-mr3220-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-mr3220-v1.bin
[sysupgrade-tp-link-tl-mr3220-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-mr3220-v1-sysupgrade.bin

[factory-tp-link-tl-mr3420-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-mr3420-v1.bin
[sysupgrade-tp-link-tl-mr3420-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-mr3420-v1-sysupgrade.bin
[factory-tp-link-tl-mr3420-v2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-mr3420-v2.bin
[sysupgrade-tp-link-tl-mr3420-v2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-mr3420-v2-sysupgrade.bin

[factory-tp-link-tl-wa701n-nd-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wa701n-nd-v1.bin
[sysupgrade-tp-link-tl-wa701n-nd-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wa701n-nd-v1-sysupgrade.bin

[factory-tp-link-tl-wa750re-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wa750re-v1.bin
[sysupgrade-tp-link-tl-wa750re-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wa750re-v1-sysupgrade.bin

[factory-tp-link-tl-wa801n-nd-v2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wa801n-nd-v2.bin
[sysupgrade-tp-link-tl-wa801n-nd-v2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wa801n-nd-v2-sysupgrade.bin

[factory-tp-link-tl-wa830re-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wa830re-v1.bin
[sysupgrade-tp-link-tl-wa830re-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wa830re-v1-sysupgrade.bin

[factory-tp-link-tl-wa850re-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wa850re-v1.bin
[sysupgrade-tp-link-tl-wa850re-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wa850re-v1-sysupgrade.bin

[factory-tp-link-tl-wa860re-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wa860re-v1.bin
[sysupgrade-tp-link-tl-wa860re-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wa860re-v1-sysupgrade.bin

[factory-tp-link-tl-wa901n-nd-v2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wa901n-nd-v2.bin
[sysupgrade-tp-link-tl-wa901n-nd-v2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wa901n-nd-v2-sysupgrade.bin
[factory-tp-link-tl-wa901n-nd-v3]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wa901n-nd-v3.bin
[sysupgrade-tp-link-tl-wa901n-nd-v3]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wa901n-nd-v3-sysupgrade.bin

[factory-tp-link-tl-wdr3500-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wdr3500-v1.bin
[sysupgrade-tp-link-tl-wdr3500-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wdr3500-v1-sysupgrade.bin

[factory-tp-link-tl-wdr3600-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wdr3600-v1.bin
[sysupgrade-tp-link-tl-wdr3600-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wdr3600-v1-sysupgrade.bin

[factory-tp-link-tl-wdr4300-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wdr4300-v1.bin
[sysupgrade-tp-link-tl-wdr4300-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wdr4300-v1-sysupgrade.bin

[factory-tp-link-tl-wr703n-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr703n-v1.bin
[sysupgrade-tp-link-tl-wr703n-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr703n-v1-sysupgrade.bin

[factory-tp-link-tl-wr710n-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr710n-v1.bin
[sysupgrade-tp-link-tl-wr710n-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr710n-v1-sysupgrade.bin

[factory-tp-link-tl-wr740n-nd-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr740n-nd-v1.bin
[sysupgrade-tp-link-tl-wr740n-nd-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr740n-nd-v1-sysupgrade.bin
[factory-tp-link-tl-wr740n-nd-v3]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr740n-nd-v3.bin
[sysupgrade-tp-link-tl-wr740n-nd-v3]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr740n-nd-v3-sysupgrade.bin
[factory-tp-link-tl-wr740n-nd-v4]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr740n-nd-v4.bin
[sysupgrade-tp-link-tl-wr740n-nd-v4]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr740n-nd-v4-sysupgrade.bin

[factory-tp-link-tl-wr741n-nd-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr741n-nd-v1.bin
[sysupgrade-tp-link-tl-wr741n-nd-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr741n-nd-v1-sysupgrade.bin
[factory-tp-link-tl-wr741n-nd-v2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr741n-nd-v2.bin
[sysupgrade-tp-link-tl-wr741n-nd-v2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr741n-nd-v2-sysupgrade.bin
[factory-tp-link-tl-wr741n-nd-v4]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr741n-nd-v4.bin
[sysupgrade-tp-link-tl-wr741n-nd-v4]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr741n-nd-v4-sysupgrade.bin

[factory-tp-link-tl-wr743n-nd-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr743n-nd-v1.bin
[sysupgrade-tp-link-tl-wr743n-nd-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr743n-nd-v1-sysupgrade.bin
[factory-tp-link-tl-wr743n-nd-v2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr743n-nd-v2.bin
[sysupgrade-tp-link-tl-wr743n-nd-v2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr743n-nd-v2-sysupgrade.bin

[factory-tp-link-tl-wr841n-nd-v3]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr841n-nd-v3.bin
[sysupgrade-tp-link-tl-wr841n-nd-v3]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr841n-nd-v3-sysupgrade.bin
[factory-tp-link-tl-wr841n-nd-v5]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr841n-nd-v5.bin
[sysupgrade-tp-link-tl-wr841n-nd-v5]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr841n-nd-v5-sysupgrade.bin
[factory-tp-link-tl-wr841n-nd-v7]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr841n-nd-v7.bin
[sysupgrade-tp-link-tl-wr841n-nd-v7]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr841n-nd-v7-sysupgrade.bin
[factory-tp-link-tl-wr841n-nd-v8]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr841n-nd-v8.bin
[sysupgrade-tp-link-tl-wr841n-nd-v8]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr841n-nd-v8-sysupgrade.bin
[factory-tp-link-tl-wr841n-nd-v9]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr841n-nd-v9.bin
[sysupgrade-tp-link-tl-wr841n-nd-v9]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr841n-nd-v9-sysupgrade.bin

[factory-tp-link-tl-wr842n-nd-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr842n-nd-v1.bin
[sysupgrade-tp-link-tl-wr842n-nd-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr842n-nd-v1-sysupgrade.bin
[factory-tp-link-tl-wr842n-nd-v2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr842n-nd-v2.bin
[sysupgrade-tp-link-tl-wr842n-nd-v2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr842n-nd-v2-sysupgrade.bin

[factory-tp-link-tl-wr941n-nd-v2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr941n-nd-v2.bin
[sysupgrade-tp-link-tl-wr941n-nd-v2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr941n-nd-v2-sysupgrade.bin
[factory-tp-link-tl-wr941n-nd-v3]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr941n-nd-v3.bin
[sysupgrade-tp-link-tl-wr941n-nd-v3]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr941n-nd-v3-sysupgrade.bin
[factory-tp-link-tl-wr941n-nd-v4]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr941n-nd-v4.bin
[sysupgrade-tp-link-tl-wr941n-nd-v4]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr941n-nd-v4-sysupgrade.bin
[factory-tp-link-tl-wr941n-nd-v5]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr941n-nd-v5.bin
[sysupgrade-tp-link-tl-wr941n-nd-v5]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr941n-nd-v5-sysupgrade.bin

[factory-tp-link-tl-wr1043n-nd-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr1043n-nd-v1.bin
[sysupgrade-tp-link-tl-wr1043n-nd-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr1043n-nd-v1-sysupgrade.bin
[factory-tp-link-tl-wr1043n-nd-v2]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr1043n-nd-v2.bin
[sysupgrade-tp-link-tl-wr1043n-nd-v2]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr1043n-nd-v2-sysupgrade.bin

[factory-tp-link-tl-wr2543n-nd-v1]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-tp-link-tl-wr2543n-nd-v1.bin
[sysupgrade-tp-link-tl-wr2543n-nd-v1]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-tp-link-tl-wr2543n-nd-v1-sysupgrade.bin

[factory-ubiquiti-bullet-m]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-ubiquiti-bullet-m.bin
[sysupgrade-ubiquiti-bullet-m]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-ubiquiti-bullet-m-sysupgrade.bin

[factory-ubiquiti-loco-m-xw]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-ubiquiti-loco-m-xw.bin
[sysupgrade-ubiquiti-loco-m-xw]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-ubiquiti-loco-m-xw-sysupgrade.bin

[factory-ubiquiti-nanostation-m]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-ubiquiti-nanostation-m.bin
[sysupgrade-ubiquiti-nanostation-m]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-ubiquiti-nanostation-m-sysupgrade.bin

[factory-ubiquiti-nanostation-m-xw]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-ubiquiti-nanostation-m-xw.bin
[sysupgrade-ubiquiti-nanostation-m-xw]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-ubiquiti-nanostation-m-xw-sysupgrade.bin

[factory-ubiquiti-unifi]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-ubiquiti-unifi.bin
[sysupgrade-ubiquiti-unifi]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-ubiquiti-unifi-sysupgrade.bin

[factory-ubiquiti-unifi-ap-pro]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-ubiquiti-unifi-ap-pro.bin
[sysupgrade-ubiquiti-unifi-ap-pro]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-ubiquiti-unifi-ap-pro-sysupgrade.bin

[factory-ubiquiti-unifiap-outdoor]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-ubiquiti-unifiap-outdoor.bin
[sysupgrade-ubiquiti-unifiap-outdoor]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-ubiquiti-unifiap-outdoor-sysupgrade.bin

[factory-x86-kvm]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-x86-kvm.img.gz
[sysupgrade-x86-kvm]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-x86-kvm-sysupgrade.img.gz

[factory-x86-generic]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-x86-generic.img.gz
[factory-x86-virtualbox]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-x86-virtualbox.vdi
[factory-x86-vmware]: http://firmware.ffmuc.net/stable/factory/gluon-ffmuc-v2015.5-x86-vmware.vmdk
[sysupgrade-x86-generic]: http://firmware.ffmuc.net/stable/sysupgrade/gluon-ffmuc-v2015.5-x86-generic-sysupgrade.img.gz

[umland-factory-allnet-all0315n]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-allnet-all0315n.bin
[umland-sysupgrade-allnet-all0315n]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-allnet-all0315n-sysupgrade.bin

[umland-factory-buffalo-wzr-hp-ag300h-wzr-600dhp]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-buffalo-wzr-hp-ag300h-wzr-600dhp.bin
[umland-sysupgrade-buffalo-wzr-hp-ag300h-wzr-600dhp]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-buffalo-wzr-hp-ag300h-wzr-600dhp-sysupgrade.bin

[umland-factory-buffalo-wzr-hp-g450h]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-buffalo-wzr-hp-g450h.bin
[umland-sysupgrade-buffalo-wzr-hp-g450h]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-buffalo-wzr-hp-g450h-sysupgrade.bin

[umland-factory-d-link-dir-615-rev-c1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-d-link-dir-615-rev-c1.bin
[umland-sysupgrade-d-link-dir-615-rev-c1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-d-link-dir-615-rev-c1-sysupgrade.bin

[umland-factory-d-link-dir-825-rev-b1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-d-link-dir-825-rev-b1.bin
[umland-sysupgrade-d-link-dir-825-rev-b1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-d-link-dir-825-rev-b1-sysupgrade.bin

[umland-factory-gl-inet-6408a-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-gl-inet-6408a-v1.bin
[umland-sysupgrade-gl-inet-6408a-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-gl-inet-6408a-v1-sysupgrade.bin

[umland-factory-gl-inet-6416a-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-gl-inet-6416a-v1.bin
[umland-sysupgrade-gl-inet-6416a-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-gl-inet-6416a-v1-sysupgrade.bin

[umland-factory-linksys-wrt160nl]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-linksys-wrt160nl.bin
[umland-sysupgrade-linksys-wrt160nl]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-linksys-wrt160nl-sysupgrade.bin

[umland-factory-netgear-wndr3700]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-netgear-wndr3700.img
[umland-sysupgrade-netgear-wndr3700]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-netgear-wndr3700-sysupgrade.bin

[umland-factory-netgear-wndr3700v2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-netgear-wndr3700v2.img
[umland-sysupgrade-netgear-wndr3700v2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-netgear-wndr3700v2-sysupgrade.bin

[umland-factory-netgear-wndr3700v4]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-netgear-wndr3700v4.img
[umland-sysupgrade-netgear-wndr3700v4]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-netgear-wndr3700v4-sysupgrade.tar

[umland-factory-netgear-wndr3800]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-netgear-wndr3800.img
[umland-sysupgrade-netgear-wndr3800]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-netgear-wndr3800-sysupgrade.bin

[umland-factory-netgear-wndr4300]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-netgear-wndr4300.img
[umland-sysupgrade-netgear-wndr4300]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-netgear-wndr4300-sysupgrade.bin

[umland-factory-netgear-wndrmacv2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-netgear-wndrmacv2.img
[umland-sysupgrade-netgear-wndrmacv2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-netgear-wndrmacv2-sysupgrade.bin

[umland-factory-tp-link-cpe210-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-cpe210-v1.0.bin
[umland-sysupgrade-tp-link-cpe210-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-cpe210-v1.0-sysupgrade.bin

[umland-factory-tp-link-cpe220-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-cpe220-v1.0.bin
[umland-sysupgrade-tp-link-cpe220-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-cpe220-v1.0-sysupgrade.bin

[umland-factory-tp-link-cpe510-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-cpe510-v1.0.bin
[umland-sysupgrade-tp-link-cpe510-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-cpe510-v1.0-sysupgrade.bin

[umland-factory-tp-link-cpe520-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-cpe520-v1.0.bin
[umland-sysupgrade-tp-link-cpe520-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-cpe520-v1.0-sysupgrade.bin

[umland-factory-tp-link-tl-mr3020-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3020-v1.bin
[umland-sysupgrade-tp-link-tl-mr3020-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3020-v1-sysupgrade.bin

[umland-factory-tp-link-tl-mr3040-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3040-v1.bin
[umland-sysupgrade-tp-link-tl-mr3040-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3040-v1-sysupgrade.bin
[umland-factory-tp-link-tl-mr3040-v2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3040-v2.bin
[umland-sysupgrade-tp-link-tl-mr3040-v2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3040-v2-sysupgrade.bin

[umland-factory-tp-link-tl-mr3220-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3220-v1.bin
[umland-sysupgrade-tp-link-tl-mr3220-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3220-v1-sysupgrade.bin

[umland-factory-tp-link-tl-mr3420-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3420-v1.bin
[umland-sysupgrade-tp-link-tl-mr3420-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3420-v1-sysupgrade.bin
[umland-factory-tp-link-tl-mr3420-v2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3420-v2.bin
[umland-sysupgrade-tp-link-tl-mr3420-v2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-mr3420-v2-sysupgrade.bin

[umland-factory-tp-link-tl-wa701n-nd-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa701n-nd-v1.bin
[umland-sysupgrade-tp-link-tl-wa701n-nd-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa701n-nd-v1-sysupgrade.bin

[umland-factory-tp-link-tl-wa750re-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa750re-v1.bin
[umland-sysupgrade-tp-link-tl-wa750re-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa750re-v1-sysupgrade.bin

[umland-factory-tp-link-tl-wa801n-nd-v2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa801n-nd-v2.bin
[umland-sysupgrade-tp-link-tl-wa801n-nd-v2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa801n-nd-v2-sysupgrade.bin

[umland-factory-tp-link-tl-wa830re-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa830re-v1.bin
[umland-sysupgrade-tp-link-tl-wa830re-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa830re-v1-sysupgrade.bin

[umland-factory-tp-link-tl-wa850re-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa850re-v1.bin
[umland-sysupgrade-tp-link-tl-wa850re-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa850re-v1-sysupgrade.bin

[umland-factory-tp-link-tl-wa860re-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa860re-v1.bin
[umland-sysupgrade-tp-link-tl-wa860re-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa860re-v1-sysupgrade.bin

[umland-factory-tp-link-tl-wa901n-nd-v2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa901n-nd-v2.bin
[umland-sysupgrade-tp-link-tl-wa901n-nd-v2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa901n-nd-v2-sysupgrade.bin
[umland-factory-tp-link-tl-wa901n-nd-v3]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa901n-nd-v3.bin
[umland-sysupgrade-tp-link-tl-wa901n-nd-v3]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wa901n-nd-v3-sysupgrade.bin

[umland-factory-tp-link-tl-wdr3500-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wdr3500-v1.bin
[umland-sysupgrade-tp-link-tl-wdr3500-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wdr3500-v1-sysupgrade.bin

[umland-factory-tp-link-tl-wdr3600-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wdr3600-v1.bin
[umland-sysupgrade-tp-link-tl-wdr3600-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wdr3600-v1-sysupgrade.bin

[umland-factory-tp-link-tl-wdr4300-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wdr4300-v1.bin
[umland-sysupgrade-tp-link-tl-wdr4300-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wdr4300-v1-sysupgrade.bin

[umland-factory-tp-link-tl-wr703n-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr703n-v1.bin
[umland-sysupgrade-tp-link-tl-wr703n-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr703n-v1-sysupgrade.bin

[umland-factory-tp-link-tl-wr710n-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr710n-v1.bin
[umland-sysupgrade-tp-link-tl-wr710n-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr710n-v1-sysupgrade.bin

[umland-factory-tp-link-tl-wr740n-nd-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr740n-nd-v1.bin
[umland-sysupgrade-tp-link-tl-wr740n-nd-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr740n-nd-v1-sysupgrade.bin
[umland-factory-tp-link-tl-wr740n-nd-v3]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr740n-nd-v3.bin
[umland-sysupgrade-tp-link-tl-wr740n-nd-v3]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr740n-nd-v3-sysupgrade.bin
[umland-factory-tp-link-tl-wr740n-nd-v4]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr740n-nd-v4.bin
[umland-sysupgrade-tp-link-tl-wr740n-nd-v4]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr740n-nd-v4-sysupgrade.bin

[umland-factory-tp-link-tl-wr741n-nd-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr741n-nd-v1.bin
[umland-sysupgrade-tp-link-tl-wr741n-nd-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr741n-nd-v1-sysupgrade.bin
[umland-factory-tp-link-tl-wr741n-nd-v2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr741n-nd-v2.bin
[umland-sysupgrade-tp-link-tl-wr741n-nd-v2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr741n-nd-v2-sysupgrade.bin
[umland-factory-tp-link-tl-wr741n-nd-v4]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr741n-nd-v4.bin
[umland-sysupgrade-tp-link-tl-wr741n-nd-v4]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr741n-nd-v4-sysupgrade.bin

[umland-factory-tp-link-tl-wr743n-nd-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr743n-nd-v1.bin
[umland-sysupgrade-tp-link-tl-wr743n-nd-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr743n-nd-v1-sysupgrade.bin
[umland-factory-tp-link-tl-wr743n-nd-v2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr743n-nd-v2.bin
[umland-sysupgrade-tp-link-tl-wr743n-nd-v2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr743n-nd-v2-sysupgrade.bin

[umland-factory-tp-link-tl-wr841n-nd-v3]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr841n-nd-v3.bin
[umland-sysupgrade-tp-link-tl-wr841n-nd-v3]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr841n-nd-v3-sysupgrade.bin
[umland-factory-tp-link-tl-wr841n-nd-v5]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr841n-nd-v5.bin
[umland-sysupgrade-tp-link-tl-wr841n-nd-v5]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr841n-nd-v5-sysupgrade.bin
[umland-factory-tp-link-tl-wr841n-nd-v7]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr841n-nd-v7.bin
[umland-sysupgrade-tp-link-tl-wr841n-nd-v7]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr841n-nd-v7-sysupgrade.bin
[umland-factory-tp-link-tl-wr841n-nd-v8]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr841n-nd-v8.bin
[umland-sysupgrade-tp-link-tl-wr841n-nd-v8]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr841n-nd-v8-sysupgrade.bin
[umland-factory-tp-link-tl-wr841n-nd-v9]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr841n-nd-v9.bin
[umland-sysupgrade-tp-link-tl-wr841n-nd-v9]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr841n-nd-v9-sysupgrade.bin

[umland-factory-tp-link-tl-wr842n-nd-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr842n-nd-v1.bin
[umland-sysupgrade-tp-link-tl-wr842n-nd-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr842n-nd-v1-sysupgrade.bin
[umland-factory-tp-link-tl-wr842n-nd-v2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr842n-nd-v2.bin
[umland-sysupgrade-tp-link-tl-wr842n-nd-v2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr842n-nd-v2-sysupgrade.bin

[umland-factory-tp-link-tl-wr941n-nd-v2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr941n-nd-v2.bin
[umland-sysupgrade-tp-link-tl-wr941n-nd-v2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr941n-nd-v2-sysupgrade.bin
[umland-factory-tp-link-tl-wr941n-nd-v3]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr941n-nd-v3.bin
[umland-sysupgrade-tp-link-tl-wr941n-nd-v3]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr941n-nd-v3-sysupgrade.bin
[umland-factory-tp-link-tl-wr941n-nd-v4]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr941n-nd-v4.bin
[umland-sysupgrade-tp-link-tl-wr941n-nd-v4]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr941n-nd-v4-sysupgrade.bin
[umland-factory-tp-link-tl-wr941n-nd-v5]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr941n-nd-v5.bin
[umland-sysupgrade-tp-link-tl-wr941n-nd-v5]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr941n-nd-v5-sysupgrade.bin

[umland-factory-tp-link-tl-wr1043n-nd-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr1043n-nd-v1.bin
[umland-sysupgrade-tp-link-tl-wr1043n-nd-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr1043n-nd-v1-sysupgrade.bin
[umland-factory-tp-link-tl-wr1043n-nd-v2]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr1043n-nd-v2.bin
[umland-sysupgrade-tp-link-tl-wr1043n-nd-v2]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr1043n-nd-v2-sysupgrade.bin

[umland-factory-tp-link-tl-wr2543n-nd-v1]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr2543n-nd-v1.bin
[umland-sysupgrade-tp-link-tl-wr2543n-nd-v1]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-tp-link-tl-wr2543n-nd-v1-sysupgrade.bin

[umland-factory-ubiquiti-bullet-m]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-bullet-m.bin
[umland-sysupgrade-ubiquiti-bullet-m]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-bullet-m-sysupgrade.bin

[umland-factory-ubiquiti-loco-m-xw]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-loco-m-xw.bin
[umland-sysupgrade-ubiquiti-loco-m-xw]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-loco-m-xw-sysupgrade.bin

[umland-factory-ubiquiti-nanostation-m]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-nanostation-m.bin
[umland-sysupgrade-ubiquiti-nanostation-m]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-nanostation-m-sysupgrade.bin

[umland-factory-ubiquiti-nanostation-m-xw]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-nanostation-m-xw.bin
[umland-sysupgrade-ubiquiti-nanostation-m-xw]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-nanostation-m-xw-sysupgrade.bin

[umland-factory-ubiquiti-unifi]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-unifi.bin
[umland-sysupgrade-ubiquiti-unifi]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-unifi-sysupgrade.bin

[umland-factory-ubiquiti-unifi-ap-pro]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-unifi-ap-pro.bin
[umland-sysupgrade-ubiquiti-unifi-ap-pro]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-unifi-ap-pro-sysupgrade.bin

[umland-factory-ubiquiti-unifiap-outdoor]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-unifiap-outdoor.bin
[umland-sysupgrade-ubiquiti-unifiap-outdoor]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-ubiquiti-unifiap-outdoor-sysupgrade.bin

[umland-factory-x86-kvm]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-x86-kvm.img.gz
[umland-sysupgrade-x86-kvm]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-x86-kvm-sysupgrade.img.gz

[umland-factory-x86-generic]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-x86-generic.img.gz
[umland-factory-x86-virtualbox]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-x86-virtualbox.vdi
[umland-factory-x86-vmware]: http://firmware.ffmuc.net/umland/stable/factory/gluon-ffmuc-umland-v2015.6-umland-x86-vmware.vmdk
[umland-sysupgrade-x86-generic]: http://firmware.ffmuc.net/umland/stable/sysupgrade/gluon-ffmuc-umland-v2015.6-umland-x86-generic-sysupgrade.img.gz
