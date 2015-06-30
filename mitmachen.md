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

* Besorge einen Freifunk-fähigen Router. [Diese Modelle unterstützen wir][firmware].
* Empfehlung: TP-Link TL-WR841N (ca. 16€), TL-WDR4300 (ca. 45 €), für Restaurants Ubiquiti Enterprise AP UAP (ca. 60€)
* [installiere][router-flashen] und [konfiguriere][router-konfigurieren] die Freifunk-Firmware.
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

* Besorge einen Freifunk-fähigen Outdoor-Router. Empfehlungen:
* NanoStation M2 oder M2 loco (2.4 GHz)
* NanoStation M5 oder M5 loco (5 GHz)
* [installiere][router-flashen] und [konfiguriere][router-konfigurieren] die Freifunk-Firmware.
* Stelle den Router an einem geeigneten Ort auf.
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

* das “Rückgrat” des Freifunk-Netzes stärken, indem du stabile Richtfunk-Verbindungen zu weit entfernten Freifunk-Routern aufbaust (bis ~10km). Für stabile Verbindungen wird eine freie Sicht zum entfernten Router benötigt.

#### So kannst du mitmachen

* Besorge mehrere Freifunk-fähige Outdoor-Router für 5 GHz. Empfehlungen:
* NanoStation M5 (bis ~5 km)
* NanoBridge M5 (bis ~10 km)
* [installiere][router-flashen] und [konfiguriere][router-konfigurieren] die Freifunk-Firmware.
* Die neuen Verbindungen solltest du mit den Freifunker_innen planen, die die entfernten Router betreiben.
</div>

    </div>
    </div><!-- /.col-sm-4 -->
</div>

## Weitere Informationen und Hinweise

### Wo kann ich meine Fragen stellen?
Wir treffen uns regelmäßig zum [Freifunktreffen][kontakt] jeden letzten Mittwoch im Monat im [Chaos Computer Club München][ccc].

### Benötige ich einen Router für 2.4 GHz oder 5 GHz?
Damit sich ein Freifunk-Router mit einem anderen Freifunk-Router über WLAN verbinden kann, müssen beide Router im gleichen Frequenzband (2.4 GHz oder 5 GHz) arbeiten. Bitte vorher prüfen!

### Können mehrere Freifunk-Router an einem Ort miteinander verbunden werden?
Mehrere Freifunk-Router können über ein Switch mit Netzwerk-Kabeln verbunden werden. Der im Starter-Kit empfohlene Router hat z.B. ein integriertes Switch.

### Wie flashe ich den Router
Die Firmware findest du [hier][firmware], eine Anleitung zum Flashen findest du [hier][router-flashen]. Wie man dann den Knoten konfiguriert ist [hier][router-konfigurieren] erklärt.

Sobald Du den Freifunk Knoten bei Dir zu Hause in Betrieb genommen hast, musst Du diesen noch kurz mit Hilfe des Kontaktformulars eintragen.

Nachdem Du das Formular abgeschickt hast, musst Du Dich noch kurz gedulden, bis wir die Daten eingepflegt haben. Genug Zeit also uns auf [Twitter][twitter] zu folgen, damit man regelmäßig mit Informationen versorgt wird.

### Wo stehen schon Freifunk-Router?
Schau mal auf der [Knotenkarte](http://freifunk-muenchen.de/knotenkarte) nach. Wenn es bei dir noch keinen Freifunk-Router in der Nachbarschaft gibt, dann sei die oder der Erste!

Die Anleitung basiert auf [http://berlin.freifunk.net/participate/overview/][berlin] \\
Quelle: [Freifunk Magdeburg (CC BY-SA 4.0)](http://md.freifunk.net)

[berlin]: http://berlin.freifunk.net/participate/overview/
[kontakt]: /kontakt/
[firmware]: /firmware/
[router-flashen]: /router-flashen/
[router-konfigurieren]: /router-konfigurieren/
[ccc]: http://muc.ccc.de
[twitter]: https://twitter.com/freifunkmuc
