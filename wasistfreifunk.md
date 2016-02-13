---
layout: page
title: Was ist Freifunk?
permalink: /wasistfreifunk/
customcss:
 - /assets/projekktor/projekktor.style.css
customjs:
 - /js/jquery.min.js
 - /js/projekktor-1.3.09.min.js
---

Das Projekt Freifunk München baut ein stadtweites Datennetz mit WLAN-Geräten, den sogenannten Knoten, auf. Die Nutzung ist dabei frei von Registrierung und Erfassung von Informationen.

<div id="player_a" class="projekktor"></div>

<script type="text/javascript">
$(document).ready(function() {
    projekktor('#player_a', {
    title: 'Was ist Freifunk?',
    playerFlashMP4: '/assets/media/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
    playerFlashMP3: '/assets/media/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
    width: 640,
    height: 385,
    playlist: [
        {
        0: {src: "/assets/media/freifunk.mp4", type: "video/mp4"},
        1: {src: "/assets/media/freifunk.webm", type: "video/webm"}
        }
    ]
    }, function(player) {} // on ready 
    );
});
</script>


Konkret hat sich Freifunk zum Ziel gesetzt, offene Funknetzwerke einzurichten und diese miteinander zu verbinden. Dies ermöglicht einen freien Datenverkehr “durch die Luft” in der ganze Stadt innerhalb des Freifunk-Netzes. Freifunk ist somit eine offene nicht-kommerzielle, hierarchielose Initiative für freie Funknetzwerke.

## Wie funktioniert Freifunk?

Freifunk funktioniert nur durch den Einsatz von Dir! Die Initiative setzt auf eine Gemeinschaft von Menschen, die dazu beitragen, dass die Idee von Freifunk wächst. Um mitzumachen brauchst Du gar nicht viel zu tun. Mach einfach mit!

##Technische Aspekte

Von der technischen Seite her bilden alle Freifunkgeräte ein Mesh-Netzwerk. Das bedeutet, dass alle Geräte innerhalb des Freifunk Netzwerks direkt miteinander kommunizieren können und somit das eigene Netzwerk erstellen.

Du als UnterstützerIn der Community stellst also einen Knoten bei Dir zu Hause auf und bildest ein Teil dieses Netzwerks. Diese WLAN-Router verwenden eine spezielle Software (Firmware), die für das Freifunk Projekt entwickelt wurde und frei und offen im Internet zur Verfügung steht.


## VPN Umleitung ins Ausland

Du kannst über Deinen WLAN-Router auch einen Teil deiner Internetverbindung dem Freifunknetz zur Verfügung stellen. Damit Du keine Probleme mit der Störerhaftung bekommst, betreiben wir mehrere zentrale Zugangspunkte für München (Gateway), die den Internetverkehr ins Ausland leiten. So bleibt auch Dein Heimnetzwerk sicher und unberührt! Und wie kommst Du zu diesem Gateway? Das ist alles in der Software bereits für Dich eingestellt, Du brauchst Dich um nichts mehr zu kümmern!

## Freifunk Prinzipien

Freifunk ist komplett von seinen BenutzerInnen geschaffen worden, es gibt keine mächtige Instanz, die über das Netz herrscht. Alle AnwenderInnen sind zum gleichen Teil an dem Projekt beteiligt. Die Beteiligten betreiben das Netzwerk auf eigene Kosten und dies ist nur möglich, wenn sich alle an ein paar Regeln halten. Lies Dir bitte die [Nutzungsbedingungen](http://freifunk-muenchen.de/nutzungsbedingungen) durch und halte Dich daran. Wir speichern zwar keinerlei Verbindungsdaten und können Dich somit nicht identifizieren, aber ein soziales Projekt kann nur funktionieren, wenn sich alle an ein paar Regeln halten.

Quelle: [Freifunk Magdeburg (CC BY-SA 4.0)](http://md.freifunk.net)
