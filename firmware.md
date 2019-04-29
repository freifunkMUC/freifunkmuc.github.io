---
layout: page
title: Firmware herunterladen
permalink: /firmware/
---
## ---Seite wird momentan (April/Mai 2019) wg. neuer Firmware überarbeitet--   
Kurzfassung: Freifunk Darmstadt hat eine sehr gute [Übersicht der unterstützen Hardware](https://darmstadt.freifunk.net/mitmachen/unterstuetzte-geraete/), die dort unterstützten Router gelten größtenteils auch für Freifunk München. 

Die aktuelle Firmware für München und Umland gibts hier: [Freifunk München Firmware](https://firmware.ffmuc.net/) (**aktuelle Version: v2019.0.2**) 



## Vor dem Kauf

Wir unterstützen aktuell verschiedene Routermodelle. Am Besten siehst Du vor dem Kauf nach welchen Router-Typ und Hardware-Version wir unterstüzten. Oft bringen Hersteller neue Hardware-Versionen eines Routers auf den Markt, für diese können wir erst oft nach einiger Zeit oder garnicht passende Firmware anbieten. Es kann daher sinnvoll sein gebrauchte Router (die wahrscheinlich eine ältere Hardware-Version sind) oder Router bei einem Treffen zu kaufen.


## Router-Daten herausfinden

Zunächst musst Du prüfen, welche Firmware Du benötigst. Wichtig ist der Router-Typ (1) und die Hardware-Version (2). Beide Informationen findest Du auf der Rückseite Deines Geräts.

![Modell und Version](/assets/router-flashen/guide-14.jpg)



Die Anleitung zum Flashen des Routers findest du [hier][router-flashen].

## Passende Firmware herunterladen

Hier kannst du die entsprechende [Freifunk München Firmware](https://firmware.ffmuc.net/) (**aktuelle Version: v2018.1**) herunterladen.

Mit Auswahlboxen suchst du deinen unterstützten Router aus. Die technischen Details zu den jeweiligen Modellen findest du unter [wiki.freifunk.net]
[hardware].

<div markdown="0" style="text-align:center">

<label for="brand">Hersteller</label>
<select id="brand" onchange="giveSelection(1,this.value)">
  <option value="8devices">8devices</option>
  <option value="alfa">Alfa</option>
  <option value="allnet">Allnet</option>
  <option value="buffalo">Buffalo</option>
  <option value="d-link">D-Link</option>
  <option value="gl-inet">GL.iNet</option>
  <option value="linksys">Linksys</option>
  <option value="netgear">Netgear</option>
  <option value="onion">Onion</option>
  <option value="openmesh">OpenMesh</option>
  <option value="raspberry">Raspberry</option>
  <option value="tp-link" selected>TP-Link</option>
  <option value="ubiquiti">Ubiquiti</option>
  <option value="wd">Western Digital</option>
  <option value="x86">x86</option>
</select>
<label for="model">Modell</label>
<select id="model" onchange="giveSelection(2,this.value)">
  <option data-option="8devices" value="carambola2-board">Carambola2 Board</option>
  <option data-option="alfa" value="ap121">AP121</option>
  <option data-option="alfa" value="ap121u">AP121U</option>
  <option data-option="alfa" value="hornet-ub">Hornet UB</option>
  <option data-option="alfa" value="n2-n5">N2-N5</option>
  <option data-option="alfa" value="tube2h">Tube2H</option>
  <option data-option="allnet" value="all0315n">ALL0315N</option>
  <option data-option="buffalo" value="wzr-600dhp">WZR 600DHP</option>
  <option data-option="buffalo" value="wzr-hp-ag300h">WZR HP AG300H</option>
  <option data-option="buffalo" value="wzr-hp-g300nh">WZR HP G300NH</option>
  <option data-option="buffalo" value="wzr-hp-g450h">WZR HP G450H</option>
  <option data-option="d-link" value="dir-505">DIR-505</option>
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
  <option data-option="onion" value="omega">OMEGA</option>
  <option data-option="openmesh" value="mr1750">MR1750</option>
  <option data-option="openmesh" value="mr1750v2">MR1750v2</option>
  <option data-option="openmesh" value="mr600">MR600</option>
  <option data-option="openmesh" value="mr600v2">MR600v2</option>
  <option data-option="openmesh" value="mr900">MR600</option>
  <option data-option="openmesh" value="mr900v2">MR600v2</option>
  <option data-option="openmesh" value="om2p-hs">OM2P-HS</option>
  <option data-option="openmesh" value="om2p-hsv2">OM2P-HSv2</option>
  <option data-option="openmesh" value="om2p-hsv3">OM2P-HSv3</option>
  <option data-option="openmesh" value="om2p-lc">OM2P-LC</option>
  <option data-option="openmesh" value="om2p">OM2P</option>
  <option data-option="openmesh" value="om2pv2">OM2Pv2</option>
  <option data-option="openmesh" value="om5p-ac">OM5P-AC</option>
  <option data-option="openmesh" value="om5p-acv2">OM5P-ACv2</option>
  <option data-option="openmesh" value="om5p-an">OM5P-AN</option>
  <option data-option="openmesh" value="om5p">OM5P</option>
  <option data-option="raspberry" value="pi">Pi</option>
  <option data-option="tp-link" value="archer-c5">Archer C5</option>
  <option data-option="tp-link" value="archer-c7">Archer C7</option>
  <option data-option="tp-link" value="cpe210">CPE210</option>
  <option data-option="tp-link" value="cpe220">CPE220</option>
  <option data-option="tp-link" value="cpe510">CPE510</option>
  <option data-option="tp-link" value="cpe520">CPE520</option>
  <option data-option="tp-link" value="tl-mr13u">TL-MR13U</option>
  <option data-option="tp-link" value="tl-mr3020">TL-MR3020</option>
  <option data-option="tp-link" value="tl-mr3040">TL-MR3040</option>
  <option data-option="tp-link" value="tl-mr3220">TL-MR3220</option>
  <option data-option="tp-link" value="tl-mr3420">TL-MR3420</option>
  <option data-option="tp-link" value="tl-wa701n-nd">TL-WA701N/ND</option>
  <option data-option="tp-link" value="tl-wa750re">TL-WA750RE</option>
  <option data-option="tp-link" value="tl-wa7510n">TL-WA7510N</option>
  <option data-option="tp-link" value="tl-wa801n-nd">TL-WA801N/ND</option>
  <option data-option="tp-link" value="tl-wa830re">TL-WA830RE</option>
  <option data-option="tp-link" value="tl-wa850re">TL-WA850RE</option>
  <option data-option="tp-link" value="tl-wa860re">TL-WA860RE</option>
  <option data-option="tp-link" value="tl-wa901n-nd">TL-WA901N/ND</option>
  <option data-option="tp-link" value="tl-wdr3500">TL-WDR3500</option>
  <option data-option="tp-link" value="tl-wdr3600">TL-WDR3600</option>
  <option data-option="tp-link" value="tl-wdr4300">TL-WDR4300</option>
  <option data-option="tp-link" value="tl-wdr4900">TL-WDR4900</option>
  <option data-option="tp-link" value="tl-wr1043n-nd">TL-WR1043N/ND</option>
  <option data-option="tp-link" value="tl-wr2543n-nd">TL-WR2543N/ND</option>
  <option data-option="tp-link" value="tl-wr703n">TL-WR703N</option>
  <option data-option="tp-link" value="tl-wr710n">TL-WR710N</option>
  <option data-option="tp-link" value="tl-wr740n-nd">TL-WR740N/ND</option>
  <option data-option="tp-link" value="tl-wr741n-nd">TL-WR741N/ND</option>
  <option data-option="tp-link" value="tl-wr743n-nd">TL-WR743N/ND</option>
  <option data-option="tp-link" value="tl-wr841n-nd">TL-WR841N/ND</option>
  <option data-option="tp-link" value="tl-wr842n-nd" selected>TL-WR842N/ND</option>
  <option data-option="tp-link" value="tl-wr843n-nd">TL-WR843N/ND</option>
  <option data-option="tp-link" value="tl-wr940n-nd">TL-WR940N/ND</option>
  <option data-option="tp-link" value="tl-wr941n-nd">TL-WR941N/ND</option>
  <option data-option="ubiquiti" value="airgateway">AirGateway</option>
  <option data-option="ubiquiti" value="airrouter">AirRouter</option>
  <option data-option="ubiquiti" value="bullet-m">Bullet M</option>
  <option data-option="ubiquiti" value="bullet-m2">Bullet M2</option>
  <option data-option="ubiquiti" value="bullet-m5">Bullet M5</option>
  <option data-option="ubiquiti" value="loco-m">Nanostation Loco M</option>
  <option data-option="ubiquiti" value="loco-m-xw">Nanostation Loco M XW</option>
  <option data-option="ubiquiti" value="nanostation-m-xw">Nanostation M XW</option>
  <option data-option="ubiquiti" value="nanostation-m">Nanostation/Loco M</option>
  <option data-option="ubiquiti" value="nanostation-m2">Nanostation/Loco M2</option>
  <option data-option="ubiquiti" value="nanostation-m5">Nanostation/Loco M5</option>
  <option data-option="ubiquiti" value="picostation-m">Picostation M2</option>
  <option data-option="ubiquiti" value="rocket-m-xw">Rocket M XW</option>
  <option data-option="ubiquiti" value="rocket-m">Rocket M</option>
  <option data-option="ubiquiti" value="rocket-m2">Rocket M2</option>
  <option data-option="ubiquiti" value="rocket-m5">Rocket M5</option>
  <option data-option="ubiquiti" value="unifi-ap-pro">UniFi AP-Pro</option>
  <option data-option="ubiquiti" value="unifi">UniFi AP / Unifi AP-LR</option>
  <option data-option="ubiquiti" value="unifiap-outdoor+">UniFi Outdoor+</option>
  <option data-option="ubiquiti" value="unifiap-outdoor">UniFi Outdoor</option>
  <option data-option="wd" value="my-net-n600">My Net N600</option>
  <option data-option="wd" value="my-net-n750">My Net N750</option>
  <option data-option="x86" value="vmi32">Virtual Machine Images (x86)</option>
  <option data-option="x86" value="vmi64">Virtual Machine Images (x86-64)</option>
</select>
<label for="version">Version</label>
<select id="version">
  <option data-option="carambola2-board" value="">sysupgrade</option>
  <option data-option="ap121" value="">factory</option>
  <option data-option="ap121u" value="">factory</option>
  <option data-option="hornet-ub" value="">factory</option>
  <option data-option="n2-n5" value="">sysupgrade</option>
  <option data-option="tube2h" value="">sysupgrade</option>
  <option data-option="all0315n" value="">sysupgrade</option>
  <option data-option="wzr-600dhp" value="">factory</option>
  <option data-option="wzr-hp-ag300h" value="">factory</option>
  <option data-option="wzr-hp-g300nh" value="">factory</option>
  <option data-option="wzr-hp-g300nh2" value="">factory</option>
  <option data-option="wzr-hp-g450h" value="">factory</option>
  <option data-option="dir-505" value="rev-a1">rev A1</option>
  <option data-option="dir-505" value="rev-a2">rev A2</option>
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
  <option data-option="omega" value="">factory</option>
  <option data-option="mr1750" value="">factory</option>
  <option data-option="mr1750v2" value="">factory</option>
  <option data-option="mr600" value="">factory</option>
  <option data-option="mr600v2" value="">factory</option>
  <option data-option="mr900" value="">factory</option>
  <option data-option="mr900v2" value="">factory</option>
  <option data-option="om2p" value="">factory</option>
  <option data-option="om2pv2" value="">factory</option>
  <option data-option="om2p-hs" value="">factory</option>
  <option data-option="om2p-hsv2" value="">factory</option>
  <option data-option="om2p-hsv3" value="">factory</option>
  <option data-option="om2p-lc" value="">factory</option>
  <option data-option="om5p" value="">factory</option>
  <option data-option="om5p-ac" value="">factory</option>
  <option data-option="om5p-acv2" value="">factory</option>
  <option data-option="om5p-an" value="">factory</option>
  <option data-option="pi" value="">1.x</option>
  <option data-option="pi" value="2">2.x</option>
  <option data-option="archer-c5" value="v1">1.x</option>
  <option data-option="archer-c7" value="v2">2.x</option>
  <option data-option="cpe210" value="v1.0">1.0</option>
  <option data-option="cpe210" value="v1.1">1.1</option>
  <option data-option="cpe220" value="v1.0">1.0</option>
  <option data-option="cpe220" value="v1.1">1.1</option>
  <option data-option="cpe510" value="v1.0">1.0</option>
  <option data-option="cpe510" value="v1.1">1.1</option>
  <option data-option="cpe520" value="v1.0">1.0</option>
  <option data-option="cpe520" value="v1.1">1.1</option>
  <option data-option="tl-mr13u" value="v1">1.x</option>
  <option data-option="tl-mr3020" value="v1">1.x</option>
  <option data-option="tl-mr3040" value="v1">1.x</option>
  <option data-option="tl-mr3040" value="v2">2.x</option>
  <option data-option="tl-mr3220" value="v1">1.x</option>
  <option data-option="tl-mr3220" value="v2">2.x</option>
  <option data-option="tl-mr3420" value="v1">1.x</option>
  <option data-option="tl-mr3420" value="v2">2.x</option>
  <option data-option="tl-wa701n-nd" value="v1">1.x</option>
  <option data-option="tl-wa701n-nd" value="v2">2.x</option>
  <option data-option="tl-wa750re" value="v1">1.x</option>
  <option data-option="tl-wa7510n" value="v1">1.x</option>
  <option data-option="tl-wa801n-nd" value="v1">1.x</option>
  <option data-option="tl-wa801n-nd" value="v2">2.x</option>
  <option data-option="tl-wa801n-nd" value="v3">3.x</option>
  <option data-option="tl-wa830re" value="v1">1.x</option>
  <option data-option="tl-wa830re" value="v2">2.x</option>
  <option data-option="tl-wa850re" value="v1">1.x</option>
  <option data-option="tl-wa860re" value="v1">1.x</option>
  <option data-option="tl-wa901n-nd" value="v1">1.x</option>
  <option data-option="tl-wa901n-nd" value="v2">2.x</option>
  <option data-option="tl-wa901n-nd" value="v3">3.x</option>
  <option data-option="tl-wdr3500" value="v1">1.x</option>
  <option data-option="tl-wdr3600" value="v1">1.x</option>
  <option data-option="tl-wdr4300" value="v1">1.x</option>
  <option data-option="tl-wdr4900" value="v1">1.x</option>
  <option data-option="tl-wr1043n-nd" value="v1">1.x</option>
  <option data-option="tl-wr1043n-nd" value="v2">2.x</option>
  <option data-option="tl-wr1043n-nd" value="v3">3.x</option>
  <option data-option="tl-wr1043n-nd" value="v4">4.x</option>
  <option data-option="tl-wr2543n-nd" value="v1">1.x</option>
  <option data-option="tl-wr703n" value="v1">1.x</option>
  <option data-option="tl-wr710n" value="v1">1.x</option>
  <option data-option="tl-wr710n" value="v2">2.0</option>
  <option data-option="tl-wr710n" value="v2.1">2.1</option>
  <option data-option="tl-wr740n-nd" value="v1">1.x</option>
  <option data-option="tl-wr740n-nd" value="v3">3.x</option>
  <option data-option="tl-wr740n-nd" value="v4">4.x</option>
  <option data-option="tl-wr740n-nd" value="v5">5.x</option>
  <option data-option="tl-wr741n-nd" value="v1">1.x</option>
  <option data-option="tl-wr741n-nd" value="v2">2.x</option>
  <option data-option="tl-wr741n-nd" value="v4">4.x</option>
  <option data-option="tl-wr741n-nd" value="v5">5.x</option>
  <option data-option="tl-wr743n-nd" value="v1">1.x</option>
  <option data-option="tl-wr743n-nd" value="v2">2.x</option>
  <option data-option="tl-wr841n-nd" value="v3">3.x</option>
  <option data-option="tl-wr841n-nd" value="v5">5.x</option>
  <option data-option="tl-wr841n-nd" value="v7">7.x</option>
  <option data-option="tl-wr841n-nd" value="v8">8.x</option>
  <option data-option="tl-wr841n-nd" value="v9">9.x</option>
  <option data-option="tl-wr841n-nd" value="v10">10.x</option>
  <option data-option="tl-wr841n-nd" value="v11">11.x</option>
  <option data-option="tl-wr842n-nd" value="v1">1.x</option>
  <option data-option="tl-wr842n-nd" value="v2">2.x</option>
  <option data-option="tl-wr842n-nd" value="v3" selected>3.x</option>
  <option data-option="tl-wr843n-nd" value="v1">1.x</option>
  <option data-option="tl-wr940n-nd" value="v1">1.x</option>
  <option data-option="tl-wr940n-nd" value="v2">2.x</option>
  <option data-option="tl-wr940n-nd" value="v3">3.x</option>
  <option data-option="tl-wr941n-nd" value="v2">2.x</option>
  <option data-option="tl-wr941n-nd" value="v3">3.x</option>
  <option data-option="tl-wr941n-nd" value="v4">4.x</option>
  <option data-option="tl-wr941n-nd" value="v5">5.x</option>
  <option data-option="tl-wr941n-nd" value="v6">6.x</option>
  <option data-option="airgateway" value="">factory</option>
  <option data-option="airrouter" value="">factory</option>
  <option data-option="bullet-m" value="">factory</option>
  <option data-option="bullet-m2" value="">factory</option>
  <option data-option="bullet-m5" value="">factory</option>
  <option data-option="loco-m" value="">factory only</option>
  <option data-option="loco-m-xw" value="">factory</option>
  <option data-option="nanostation-m" value="">factory</option>
  <option data-option="nanostation-m2" value="">factory</option>
  <option data-option="nanostation-m5" value="">factory</option>
  <option data-option="nanostation-m-xw" value="">factory</option>
  <option data-option="picostation-m2" value="">factory</option>
  <option data-option="rocket-m" value="">factory only</option>
  <option data-option="rocket-m2" value="">factory</option>
  <option data-option="rocket-m5" value="">factory</option>
  <option data-option="rocket-m-xw" value="">factory</option>
  <option data-option="unifi" value="">factory</option>
  <option data-option="unifi-ap-pro" value="">factory</option>
  <option data-option="unifiap-outdoor" value="">factory</option>
  <option data-option="unifiap-outdoor+" value="">factory</option>
  <option data-option="my-net-n600" value="">factory</option>
  <option data-option="my-net-n750" value="">factory</option>
  <option data-option="vmi64" value="64">Generic</option>
  <option data-option="vmi64" value="64-virtualbox">Virtualbox VDI</option>
  <option data-option="vmi64" value="64-vmware">VMware vmdk</option>
  <option data-option="vmi32" value="generic">Generic</option>
  <option data-option="vmi32" value="kvm">QEMU/KVM</option>
  <option data-option="vmi32" value="virtualbox">Virtualbox VDI</option>
  <option data-option="vmi32" value="vmware">VMware vmdk</option>
</select>

<script type="text/javascript">
var sel1 = document.querySelector('#brand');
var sel2 = document.querySelector('#model');
var sel3 = document.querySelector('#version');
var options2 = sel2.querySelectorAll('option');
var options3 = sel3.querySelectorAll('option');

function giveSelection(box,selValue) {
  var sel;
  var options;
  if(box === 1) {
    sel = sel2;
    options = options2;
  } else {
    sel = sel3;
    options = options3;
  }
  sel.innerHTML = '';
  for(var i = 0; i < options.length; i++) {
    if(options[i].dataset.option === selValue) {
      sel.appendChild(options[i]);
    }
  }
  if(box === 1) {
    giveSelection(2,sel.value);
  }
}

function getImage(code,type,url,gluon) {
  var el1 = document.getElementById('brand');
  var el2 = document.getElementById('model');
  var el3 = document.getElementById('version');
  var brand = el1.options[el1.selectedIndex].value;
  var model = el2.options[el2.selectedIndex].value;
  var version = el3.options[el3.selectedIndex].value;
  var imgURL = url + type + '/gluon-' + code + '-' + gluon + '-' + brand;
  if(model !== 'vmi32' && model !== 'vmi64') {
    imgURL += '-' + model;
  }
  if(version.length != 0) {
    imgURL += '-' + version;
  }
  if(type === 'sysupgrade') {
    imgURL += '-' + type;
  }
  if( model == 'pi' || version === 'kvm' || version == '64' || version === 'generic') {
    imgURL += '.img.gz';
  } else if(version == '64-virtualbox' || version === 'virtualbox') {
    imgURL += '.vdi';
  } else if(version == '64-vmware' || version === 'vmware') {
    imgURL += '.vmdk';
  } else {
    imgURL += '.bin';
  }

  $.ajax({
          type: "GET",
          url: imgURL
        }).done(function (result) {
          console.log("working");
          window.location.href = imgURL;
       }).fail(function () {
          alert("Entschuldige, die Firmware gibt es als Stable gerade nicht, bitte schau doch mal kurz unter https://firmware.ffmuc.net nach, dort wirst du bestimmt eine passende finden.");
       });
}
</script>

<br><br>
  <button type="button" class="btn btn-default" onclick="getImage('ffmuc','factory','https://firmware.ffmuc.net/stable/','v2018.1');">Erstinstallation</button>
  <button type="button" class="btn btn-primary" onclick="getImage('ffmuc','sysupgrade','https://firmware.ffmuc.net/stable/','v2018.1');">Aktualisierung</button>

<br>
<a href="https://firmware.ffmuc.net/stable/">Direktlinks</a>

</div>

**Erstinstallation** wählst du für Router, die noch die Originalfirmware des Herstellers installiert haben und diese nicht auf OpenWRT basiert. \\
Ist bereits eine Freifunk München Firmware oder OpenWRT bzw. LEDE installiert worden und du möchtest manuell upgraden, lade dir das Image mit **Aktualisierung**.

## Segmente

Aufgrund des schnellen Wachstums des Netzes und den damit verbundenen größeren Anforderungen haben wir uns entschlossen Freifunk München in die 3 Segmente "Kernbereich", "Umland" und "Welcome" aufzuteilen. Mehr Informationen findest du in der [Wiki](https://ffmuc.net/wiki/p/Segmente#Die_aktuellen_Segmente). <br>
Knoten aus unterschiedlichen Segmenten können **nicht** miteinander meshen, sind jedoch über das VPN verbunden.

**Wähle bitte den Bereich in dem sich dein Knoten befinden wird während der Konfiguration deines Routers aus.**

![Site Select](/assets/firmware/site-select.png)

## Changelog

Das aktuelle Changelog ist zu jeder Version in [unserem Github-Repository](https://github.com/freifunkMUC/site-ffm/blob/v2018.1/CHANGELOG.md) einsehbar.
Hier findet ihr eine Erklärung zu den jeweiligen Änderungen der Firmware Versionen.

[hardware]: https://wiki.freifunk.net/Kategorie:Hardware
[router-flashen]: /router-flashen/
