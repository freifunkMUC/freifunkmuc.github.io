---
layout: page
title: Firmware
permalink: /firmware/
---

Wir unterstützen aktuell verschiedene Routermodelle. Zunächst musst Du prüfen, welche Firmware Du benötigst. Wichtig ist der Router-Typ (1) und die Hardware-Version (2). Beide Informationen findest Du auf der Rückseite Deines Geräts.

![Modell und Version](/assets/router-flashen/guide-14.jpg)

Aktuell bevorzugen wir wegen des guten Preis-Leistungsverhältnises den TP-Link TL-WR841N (ab ca. 16 Euro).

Die Anleitung zum flashen des Routers findest du [hier][router-flashen].

## Images

Hier kannst du die entsprechende [Freifunk Firmware](http://firmware.ffmuc.net/) (aktuelle Version: v2015.5) herunterladen.

Mit Auswahlboxen suchst du deinen unterstützten Router aus. Die technischen Details zu den jeweiligen Modellen findest du unter [wiki.freifunk.net][hardware].

<label for="brand">Hersteller</label>
<select id="brand" onchange="giveSelection(1,this.value)">
  <option value="allnet">Allnet</option>
  <option value="buffalo">Buffalo</option>
  <option value="d-link">D-Link</option>
  <option value="gl-inet">GL.iNet</option>
  <option value="linksys">Linksys</option>
  <option value="netgear">Netgear</option>
  <option value="tp-link">TP-Link</option>
  <option value="ubiquiti">Ubiquiti</option>
  <option value="x86">x86</option>
</select>
<label for="model">Modell</label>
<select id="model" onchange="giveSelection(2,this.value)">
  <option data-option="allnet" value="all0315n">ALL0315N</option>
  <option data-option="buffalo" value="wzr-hp-ag300h-wzr-600dhp">WZR HP AG300H</option>
  <option data-option="buffalo" value="wzr-hp-ag300h-wzr-600dhp">WZR 600DHP</option>
  <option data-option="buffalo" value="wzr-hp-g450h">WZR HP G450H</option>
  <option data-option="d-link" value="dir-615">DIR-615</option>
  <option data-option="d-link" value="dir-825">DIR-825</option>
  <option data-option="gl-inet" value="6408a">6408A</option>
  <option data-option="gl-inet" value="6416a">6416A</option>
  <option data-option="linksys" value="wrt160nl">WRT160NL</option>
  <option data-option="netgear" value="wndr3700">WNDR3700</option>
  <option data-option="netgear" value="wndr3700v2">WNDR3700v2</option>
  <option data-option="netgear" value="wndr3700v4">WNDR3700v4</option>
  <option data-option="netgear" value="wndr3800">WNDR3800</option>
  <option data-option="netgear" value="wndr4300">WNDR4300</option>
  <option data-option="netgear" value="wndrmacv2">WNDRMACv2</option>
  <option data-option="tp-link" value="cpe210">CPE210</option>
  <option data-option="tp-link" value="cpe220">CPE220</option>
  <option data-option="tp-link" value="cpe510">CPE510</option>
  <option data-option="tp-link" value="cpe520">CPE520</option>
  <option data-option="tp-link" value="tl-mr3020">TL-MR3020</option>
  <option data-option="tp-link" value="tl-mr3040">TL-MR3040</option>
  <option data-option="tp-link" value="tl-mr3220">TL-MR3220</option>
  <option data-option="tp-link" value="tl-mr3420">TL-MR3420</option>
  <option data-option="tp-link" value="tl-wa701n-nd">TL-WA701N/ND</option>
  <option data-option="tp-link" value="tl-wa750re">TL-WA750RE</option>
  <option data-option="tp-link" value="tl-wa801n-nd">TL-WA801N/ND</option>
  <option data-option="tp-link" value="tl-wa830re">TL-WA830RE</option>
  <option data-option="tp-link" value="tl-wa850re">TL-WA850RE</option>
  <option data-option="tp-link" value="tl-wa860re">TL-WA860RE</option>
  <option data-option="tp-link" value="tl-wa901n-nd">TL-WA901N/ND</option>
  <option data-option="tp-link" value="tl-wdr3500">TL-WDR3500</option>
  <option data-option="tp-link" value="tl-wdr3600">TL-WDR3600</option>
  <option data-option="tp-link" value="tl-wdr4300">TL-WDR4300</option>
  <option data-option="tp-link" value="tl-wr703n">TL-WR703N</option>
  <option data-option="tp-link" value="tl-wr710n">TL-WR710N</option>
  <option data-option="tp-link" value="tl-wr740n-nd">TL-WR740N/ND</option>
  <option data-option="tp-link" value="tl-wr741n-nd">TL-WR741N/ND</option>
  <option data-option="tp-link" value="tl-wr743n-nd">TL-WR743N/ND</option>
  <option data-option="tp-link" value="tl-wr841n-nd">TL-WR841N/ND</option>
  <option data-option="tp-link" value="tl-wr842n-nd">TL-WR842N/ND</option>
  <option data-option="tp-link" value="tl-wr941n-nd">TL-WR941N/ND</option>
  <option data-option="tp-link" value="tl-wr1043n-nd">TL-WR1043N/ND</option>
  <option data-option="tp-link" value="tl-wr2543n-nd">TL-WR2543N/ND</option>
  <option data-option="ubiquiti" value="bullet-m">Bullet M</option>
  <option data-option="ubiquiti" value="nanostation-m">Nanostation/Loco M</option>
  <option data-option="ubiquiti" value="nanostation-m-xw">Nanostation M XW</option>
  <option data-option="ubiquiti" value="loco-m-xw">Nanostation Loco M XW</option>
  <option data-option="ubiquiti" value="unifi">UniFi AP / Unifi AP-LR</option>
  <option data-option="ubiquiti" value="unifi-ap-pro">UniFi AP-Pro</option>
  <option data-option="ubiquiti" value="unifiap-outdoor">UniFi Outdoor</option>
  <option data-option="x86" value="vmi">Virtual Machine Images</option>
</select>
<label for="version">Version</label>
<select id="version">
  <option data-option="all0315n" value="">factory</option>
  <option data-option="wzr-hp-ag300h-wzr-600dhp" value="">factory</option>
  <option data-option="wzr-hp-g450h" value="">factory</option>
  <option data-option="dir-615" value="rev-c1">rev C1</option>
  <option data-option="dir-825" value="rev-b1">rev B1</option>
  <option data-option="6408a" value="v1">v1</option>
  <option data-option="6416a" value="v1">v1</option>
  <option data-option="wrt160nl" value="">factory</option>
  <option data-option="wndr3700" value="">factory</option>
  <option data-option="wndr3700v2" value="">factory</option>
  <option data-option="wndr3700v4" value="">factory</option>
  <option data-option="wndr3800" value="">factory</option>
  <option data-option="wndr4300" value="">factory</option>
  <option data-option="wndrmacv2" value="">factory</option>
  <option data-option="cpe210" value="v1.0">1.0</option>
  <option data-option="cpe220" value="v1.0">1.0</option>
  <option data-option="cpe510" value="v1.0">1.0</option>
  <option data-option="cpe520" value="v1.0">1.0</option>
  <option data-option="tl-mr3020" value="v1">1.x</option>
  <option data-option="tl-mr3040" value="v1">1.x</option>
  <option data-option="tl-mr3040" value="v2">2.x</option>
  <option data-option="tl-mr3220" value="v1">1.x</option>
  <option data-option="tl-mr3420" value="v1">1.x</option>
  <option data-option="tl-mr3420" value="v2">2.x</option>
  <option data-option="tl-wa701n-nd" value="v1">1.x</option>
  <option data-option="tl-wa750re" value="v1">1.x</option>
  <option data-option="tl-wa801n-nd" value="v2">2.x</option>
  <option data-option="tl-wa830re" value="v1">1.x</option>
  <option data-option="tl-wa850re" value="v1">1.x</option>
  <option data-option="tl-wa860re" value="v1">1.x</option>
  <option data-option="tl-wa901n-nd" value="v2">2.x</option>
  <option data-option="tl-wa901n-nd" value="v3">3.x</option>
  <option data-option="tl-wdr3500" value="v1">1.x</option>
  <option data-option="tl-wdr3600" value="v1">1.x</option>
  <option data-option="tl-wdr4300" value="v1">1.x</option>
  <option data-option="tl-wr703n" value="v1">1.x</option>
  <option data-option="tl-wr710n" value="v1">1.x</option>
  <option data-option="tl-wr740n-nd" value="v1">1.x</option>
  <option data-option="tl-wr740n-nd" value="v3">3.x</option>
  <option data-option="tl-wr740n-nd" value="v4">4.x</option>
  <option data-option="tl-wr741n-nd" value="v1">1.x</option>
  <option data-option="tl-wr741n-nd" value="v2">2.x</option>
  <option data-option="tl-wr741n-nd" value="v4">4.x</option>
  <option data-option="tl-wr743n-nd" value="v1">1.x</option>
  <option data-option="tl-wr743n-nd" value="v2">2.x</option>
  <option data-option="tl-wr841n-nd" value="v3">3.x</option>
  <option data-option="tl-wr841n-nd" value="v5">5.x</option>
  <option data-option="tl-wr841n-nd" value="v7">7.x</option>
  <option data-option="tl-wr841n-nd" value="v8">8.x</option>
  <option data-option="tl-wr841n-nd" value="v9">9.x</option>
  <option data-option="tl-wr842n-nd" value="v1">1.x</option>
  <option data-option="tl-wr842n-nd" value="v2">2.x</option>
  <option data-option="tl-wr941n-nd" value="v2">2.x</option>
  <option data-option="tl-wr941n-nd" value="v3">3.x</option>
  <option data-option="tl-wr941n-nd" value="v4">4.x</option>
  <option data-option="tl-wr941n-nd" value="v5">5.x</option>
  <option data-option="tl-wr1043n-nd" value="v1">1.x</option>
  <option data-option="tl-wr1043n-nd" value="v2">2.x</option>
  <option data-option="tl-wr2543n-nd" value="v1">1.x</option>
  <option data-option="bullet-m" value="">factory</option>
  <option data-option="nanostation-m" value="">factory</option>
  <option data-option="nanostation-m-xw" value="">factory</option>
  <option data-option="loco-m-xw" value="">factory</option>
  <option data-option="unifi" value="">factory</option>
  <option data-option="unifi-ap-pro" value="">factory</option>
  <option data-option="unifiap-outdoor" value="">factory</option>
  <option data-option="vmi" value="kvm">kvm</option>
  <option data-option="vmi" value="generic">Generic</option>
  <option data-option="vmi" value="virtualbox">Virtualbox VDI</option>
  <option data-option="vmi" value="vmware">VMware vmdk</option>
</select>

Aufgrund des schnellen Wachstums des Netzes und den damit verbundenen größeren Anforderungen, haben wir uns entschlossen Freifunk München in die 2 Segmente "Kernbereich" und "Umland" aufzuteilen. <br>
Knoten aus unterschiedlichen Segmenten können **nicht** miteinander meshen, sind jedoch über das VPN verbunden. Wähle bitte den Bereich in dem sich dein Knoten befinden wird.

Erstinstallation wählst du für Router, die noch die Originalfirmware des Herstellers installiert haben. Ist bereits eine Freifunk München Firmware installiert worden und du möchtest manuell upgraden, lade dir das Image mit Aktualisierung.

<div class="row">        
    <div class="col-sm-6">
        <div class="list-group">

<div class="panel-heading" markdown="1" style="text-align:center">
### Kernbereich

Innerhalb A99 Autobahnring

![Kernbereich](/assets/firmware/kernbereich.jpg)
<div>
<button type="button" class="btn btn-default" onclick="getImage('ffmuc','factory','http://firmware.ffmuc.net/stable/','v2015.5');">Erstinstallation</button>
<button type="button" class="btn btn-primary" onclick="getImage('ffmuc','sysupgrade','http://firmware.ffmuc.net/stable/','v2015.5');">Aktualisierung</button>
</div>
</div>
        </div>            
    </div><!-- /.col-sm-6 -->
    <div class="col-sm-6">
    <div class="list-group">

<div class="panel-heading" markdown="1" style="text-align:center">
### Umland

Außerhalb A99 Autobahnring

![Umland](/assets/firmware/umland.jpg)
<div>
<button type="button" class="btn btn-default" onclick="getImage('ffmuc_umland','factory','http://firmware.ffmuc.net/umland/stable/','v2015.6.1-umland');">Erstinstallation</button>
<button type="button" class="btn btn-primary" onclick="getImage('ffmuc_umland','sysupgrade','http://firmware.ffmuc.net/umland/stable/','v2015.6.1-umland');">Aktualisierung</button>
</div>
</div>

    </div>
    </div><!-- /.col-sm-6 -->
</div>

## Changelog

Hier findet ihr eine Erklärung zu den jeweiligen Änderungen der Firmware Versionen.

## v2015.6.1
 * Added support of site selection in config mode
 * Switch autoupdater URL back to main firmware repo path

### v2015.6
 - Introduced *ffmuc-umland* site-code for segmentation (own GWs).
 - ffmuc core segment still sticks at v2015.5

### v2015.5
 - Updated to Gluon 2015.1.1
   - Fixes some problems with mesh on LAN setups
 - x86 images now support two network interfaces, eth0 for LAN and eth1 for WAN
 - Mesh on WAN is disabled by default

### v2015.4
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
