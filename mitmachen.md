---
layout: single
title: Wie mache ich mit?
permalink: /mitmachen/
---

## Werde FreifunkerIn

Prima! Du hast Dich entschieden bei Freifunk mitzumachen und somit ist der schwierige Prozeß der Entscheidung erfolgreich absolviert. Falls sich bereits eine Freifunk Wolke (“Mesh-Netzwerk”) in unmittelbarer Umgebung befindet, braucht man nur einen eigenen Knoten ans Fenster zu stellen und mit etwas Strom aus der Steckdose versorgen. Die verwendeten Geräte sind sehr genügsam.

Falls sich in Deiner Nachbarschaft noch keine FreifunkerInnen befinden und die Entfernung zur nächsten Wolke einfach zu groß ist, musst Du den Freifunk Router an Dein heimische Netzwerk anschließen. Damit ermöglichst Du, dass sich Dein neuer Knoten mit einem der zentralen Gateways der Community über Deine Internet-Verbindung verbinden kann. Keine Sorge, Du bestimmst wie viel Bandbreite Du dafür reservieren möchtest. Der Freifunk Knoten greift nicht auf Dein lokales Netzwerk zu. Falls Dein Router ein Gäste-Netzwerk unterstützt, dann schließe bitte dort Deinen Freifunk Knoten an (FritzBox-Nutzer beachten bitte den Punkt ["Mein Knoten funktioniert nicht am Gastzugang der FritzBox"][faq] in den FAQ). Vertrauen ist gut aber zusätzliche Sicherheitsmassnahmen sind besser.

Falls Dir das mit der Technik zu kompliziert ist, [sprich uns einfach an][kontakt]. Vielleicht findet sich ja ein Termin, um gemeinsam einen Knoten bei Dir aufzustellen. Du kannst aber auch mitmachen, indem Du keinen eigenen Knoten betreibst und z.B. eine kleine Spende entrichtest.

## Alle können mitmachen!

Sprich mit deinem Freundeskreis, GeschäftspartnerInnen und allen Menschen die dich umgeben und verbreite die Idee von Freifunk. Alle können FreifunkerInnen werden! Wir freuen uns über Unterstützung bei

* der Erweiterung des Freifunk-Netzwerks durch das Aufstellen neuer Freifunk-Router (siehe unten) oder durch das Bereitstellen interessanter Standorte für Freifunk-Router (z.B. Dächer).
* der Entwicklung von Infomaterial, Bannern, Transparenten, T-Shirts, … was immer dir Kreatives einfällt!
* der Verbreitung der Idee auf Veranstaltungen, Barcamps und Kongressen.
* dem Betreiben von Diensten für die Community und der Entwicklung von Webanwendungen.

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

* Besorge einen Freifunk-fähigen 2,4&nbsp;GHz und 5&nbsp;GHz Router. Bitte beim Kauf immer auf die Hardwareversion achten! Von unseren [unterstützten Modellen][firmware] empfehlen wir:
  * D-Link DAP-X1860 (ca. 30&nbsp;€, Wifi6, Steckdosenplug)
  * AVM Fritzbox 7520 (ca. 30&nbsp;€ gebraucht, Wifi 4&5)
  * D-Link COVR-X1860 (ca. 50&nbsp;€, Wifi6)
  * ZyXEL WSM20/Multy-M1 (ca. 50&nbsp;€, Wifi6, inkl. Wandhalterung)
  * Ubiquiti UAP-AC-LITE (ca. 80&nbsp;€, Wifi4&5)
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

* Besorge dir einen Freifunk-fähigen 2,4&nbsp;GHz oder 5&nbsp;GHz Outdoor-Router. Bitte beim Kauf immer auf die Hardwareversion achten! Von unseren [unterstützten Modellen][firmware] empfehlen wir:
  * Zyxel NWA55AXE (Wifi 6)
  * Ubiquiti UAP-AC-Mesh (Wifi 4&5)
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

* Besorge dir einen Freifunk-fähigen 5&nbsp;GHz Outdoor-Router. Bitte beim Kauf immer auf die Hardwareversion achten! Von unseren [unterstützten Modellen][firmware] empfehlen wir:
  * Ubiquiti Litebeam AC Gen2 \\
    (bis ca. 5&nbsp;km)
  * Ubiquiti Powerbeam \\
    (bis ca. 10&nbsp;km)
* Schalte die Originalfirmware der 5&nbsp;GHz Router in den Bridge-Modus und verbinde sie mit einem Mesh-on-LAN Port eines anderen Freifunk-Routers oder einem Server mit dem [x86 Virtual Machine Image][firmware].
* Die neuen Verbindungen solltest du mit den Freifunker_innen planen, die die entfernten Router betreiben.
</div>

    </div>
    </div><!-- /.col-sm-4 -->
</div>

## Wo kann ich meine Fragen stellen?

Wenn du noch mehr über Freifunk wissen möchtest, schaue bitte zuerst in die [häufig gestellten Fragen][faq]. Ansonsten schaue gerne im [Chat](https://chat.ffmuc.net) vorbei und scheue dich nicht uns zu [kontaktieren][kontakt].

Die Anleitung basiert auf [https://berlin.freifunk.net/participate/overview/][berlin] \\
Quelle: [Freifunk Magdeburg (CC BY-SA 4.0)](https://md.freifunk.net)

[berlin]: https://berlin.freifunk.net/participate/overview/
[faq]: /faq/
[firmware]: /firmware/
[kontakt]: /kontakt/
[twitter]: https://twitter.com/freifunkmuc
[router-flashen]: https://ffmuc.net/wiki/doku.php?id=knb:download#router_flashen_-_aufspielen_der_freifunk-firmware
[router-konfigurieren]: https://ffmuc.net/wiki/doku.php?id=knb:gui

