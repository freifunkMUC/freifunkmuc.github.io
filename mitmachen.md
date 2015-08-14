---
layout: page
title: Mitmachen
permalink: /mitmachen/
---

{% include treffen.md %}


## Werde FreifunkerIn

Prima! Du hast Dich entschieden bei Freifunk mitzumachen und somit ist der schwierige Prozeß der Entscheidung erfolgreich absolviert. Wir befinden uns derzeit noch in der Beta-Phase. Falls sich bereits eine Freifunk Wolke (“Mesh-Netzwerk”) in unmittelbarer Umgebung befindet, braucht man nur einen eigenen Knoten ans Fenster zu stellen und mit etwas Strom aus der Steckdose versorgen. Die verwendeten Geräte sind sehr genügsam.

Falls sich in Deiner Nachbarschaft noch keine FreifunkerInnen befinden und die Entfernung zur nächsten Wolke einfach zu groß ist, musst Du den Freifunk Router an Dein heimische Netzwerk anschließen. Damit ermöglichst Du, dass sich Dein neuer Knoten mit einem der zentralen Gateways der Community über Deine Internet-Verbindung verbinden kann. Keine Sorge, Du bestimmst wie viel Bandbreite Du dafür reservieren möchtest. Der Freifunk Knoten greift nicht auf Dein lokales Netzwerk zu. Falls Dein Router ein Gäste-Netzwerk unterstützt, dann schließe bitte dort Deinen Freifunk Knoten an. Vertrauen ist gut aber zusätzliche Sicherheitsmassnahmen sind besser.

Falls Dir das mit der Technik zu kompliziert ist, [sprich uns einfach an][kontakt]. Vielleicht findet sich ja ein Termin, um gemeinsam einen Knoten bei Dir aufzustellen. Du kannst aber auch mitmachen, indem Du keinen eigenen Knoten betreibst und z.B. eine kleine Spende entrichtest.

## Alle können mitmachen!

Sprich mit deinem Freundeskreis, GeschäftspartnerInnen und allen Menschen die dich umgeben und verbreite die Idee von Freifunk. Alle können FreifunkerInnen werden! Wir freuen uns über Unterstützung bei

* der Erweiterung des Freifunk-Netzwerks durch das Aufstellen neuer Freifunk-Router (siehe unten) oder durch das Bereitstellen interessanter Standorte für Freifunk-Router (z.B. Dächer).
* der Entwicklung von Infomaterial, Bannern, Transparenten, T-Shirts, … was immer dir Kreatives einfällt!
* der Verbreitung der Idee auf Veranstaltungen, Barcamps und Kongressen.
* dem Betreiben von Diensten für die Community und der Entwicklung von Webanwendungen.
    
Komm zum [Freifunk-Treffen][kontakt] oder frag auf der [Mailingliste][kontakt].

## Du möchtest einen Freifunk-Router aufstellen?

<div class="row">        
    <div class="col-sm-4">
        <div class="list-group">

<div  markdown="1">
### Starter-Kit

![Starter-Kit](/assets/mitmachen/participate_small.png)

Wohnung, Geschäft, Café, Restaurant, Bar

#### Du möchtest

* dich mit dem Freifunk-Netz in deiner Nachbarschaft verbinden.
* deinen Internet-Anschluss freigeben.
* den ersten Freifunk-Router in deiner Umgebung aufstellen.

#### So kannst du mitmachen

* Besorge einen Freifunk-fähigen [2,4&nbsp;GHz](#bentige-ich-einen-router-fr-24-ghz-oder-5-ghz) Router. Von unseren [unterstützten Modellen][firmware] empfehlen wir:
  * TP-Link TL-WR841N (ca. 16&nbsp;€)
  * TL-WDR4300 (ca. 45&nbsp;€)
  * Ubiquiti Enterprise AP UAP, geeignet für Restaurants (ca. 60&nbsp;€)
* [Installiere][router-flashen] und [konfiguriere][router-konfigurieren] die Freifunk-Firmware.
* Stelle den Router an einem geeigneten Ort auf (z.B. Fensterbank).
</div>

        </div>            
    </div><!-- /.col-sm-4 -->
    <div class="col-sm-4">
    <div class="list-group">

<div markdown="1">
### Level 2

![Level 2](/assets/mitmachen/participate_medium.png)

Balkon, hohes Gebäude, öffentlicher Platz, Park, weitläufiges Gelände

#### Du möchtest

* dich mit dem Freifunk-Netz in deiner Nachbarschaft verbinden.
* deinen Internet-Anschluss freigeben.
* den ersten Freifunk-Router in deiner Umgebung aufstellen.

#### So kannst du mitmachen

* Besorge dir einen Freifunk-fähigen [2,4&nbsp;GHz](#bentige-ich-einen-router-fr-24-ghz-oder-5-ghz) Outdor-Router. Von unseren [unterstützten Modellen][firmware] empfehlen wir:
  * TP-Link CPE210
  * Ubiquiti NanoStation M2 oder M2 loco
* [installiere][router-flashen] und [konfiguriere][router-konfigurieren] die Freifunk-Firmware.
* Montiere den Router an einem geeigneten Ort.
</div>

        </div>
    </div><!-- /.col-sm-4 -->
    <div class="col-sm-4">
    <div class="list-group">

<div markdown="1">
### Backbone

![Level 2](/assets/mitmachen/participate_big.png)

Dach, Dachgeschoss, hohes Gebäude, öffentliches Gebäude, Rathaus, Kirchturm

#### Du möchtest

* das “Rückgrat” des Freifunk-Netzes stärken, indem du stabile Richtfunk-Verbindungen zu weit entfernten Freifunk-Routern aufbaust. Für stabile Verbindungen wird eine freie Sicht zum entfernten Router benötigt.

#### So kannst du mitmachen

* Besorge dir einen Freifunk-fähigen [5&nbsp;GHz](#bentige-ich-einen-router-fr-24-ghz-oder-5-ghz) Outdor-Router. Von unseren [unterstützten Modellen][firmware] empfehlen wir:
  * Ubiquiti NanoStation M5 \\
    (bis ca. 5&nbsp;km)
  * Ubiquiti NanoBridge M5 \\
    (bis ca. 10&nbsp;km)
* Schalte die Originalfirmware der 5 GHz Router in den Bridge-Modus und verbinde sie mit einem Mesh-on-LAN Port eines anderen Freifunk-Routers oder einem Server mit dem [x86 Virtual Machine Image][firmware].
* Die neuen Verbindungen solltest du mit den Freifunker_innen planen, die die entfernten Router betreiben.
</div>

    </div>
    </div><!-- /.col-sm-4 -->
</div>

## Weitere Informationen und Hinweise

### Wo kann ich meine Fragen stellen?
Wir treffen uns regelmäßig zum [Freifunktreffen][kontakt] jeden letzten Mittwoch im Monat im [Chaos Computer Club München][ccc]. Wenn du dich einfach nur mal Informieren lassen willst, eine Beratung wünscht oder Probleme mit deiner Hardware hast, komm einfach zum Treffen.

### Benötige ich einen Router für 2,4 GHz oder 5 GHz?
Damit sich ein Freifunk-Router mit einem anderen Freifunk-Router über WLAN verbinden kann, müssen beide Router im gleichen Frequenzband (2,4 GHz oder 5 GHz) arbeiten. Standardmäßig wird 2,4 GHz verwendet, dies liegt auch daran, dass die Freifunk-Firmware für 5 GHz Geräte zur Zeit nicht im Freien eingesetzt werden darf (fehlendes DFS).

### Können mehrere Freifunk-Router an einem Ort miteinander verbunden werden?
Mehrere Freifunk-Router können über ein Switch mit Netzwerk-Kabeln verbunden werden. Der im Starter-Kit empfohlene Router hat z.B. ein integriertes Switch.

### Wie nehme ich meinen Router in Betrieb (flashen)
Mit den folgenden drei Schritten kannst du deinen neu gekauften Router in das Freifunk-Netz einbringen.
Diese Prozedur wird manchmal auch "flashen" genannt.

Zuerst lädst du dir die [passende Firmware][firmware] zu deinem Router runter.
Diese kannst du dann nach unserer [Anleitung][router-flashen] auf deinem Router installieren (das eigentliche "flashen").
Zu guter Letzt musst du noch deinen Router konfigurieren. Aber keine Panik, es gibt nur eine Hand voll Einstellungen, die wir ebenfalls in einer [Anleitung][router-konfigurieren] beschrieben haben.


### Wo stehen schon Freifunk-Router?
Schau mal auf der [Knotenkarte](http://map.freifunk-muenchen.de/meshviewer/) nach. Wenn es bei dir noch keinen Freifunk-Router in der Nachbarschaft gibt, dann sei die oder der Erste!

Die Anleitung basiert auf [http://berlin.freifunk.net/participate/overview/][berlin] \\
Quelle: [Freifunk Magdeburg (CC BY-SA 4.0)](http://md.freifunk.net)

[berlin]: http://berlin.freifunk.net/participate/overview/
[kontakt]: /kontakt/
[firmware]: /firmware/
[router-flashen]: /router-flashen/
[router-konfigurieren]: /router-konfigurieren/
[ccc]: http://muc.ccc.de
[twitter]: https://twitter.com/freifunkmuc
