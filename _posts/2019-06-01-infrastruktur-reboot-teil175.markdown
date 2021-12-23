---
layout: post
title:  "Infrastruktur Reboot Teil 1.75"
date:   2019-06-01 09:00:00
categories: freifunkmuc
---
# Infrastruktur Reboot Teil 1.75

In unserer [letzten Mitteilung](https://ffmuc.net/freifunkmuc/2019/05/27/infrastruktur-reboot-teil15/) haben wir euch gebeten auf euren Knoten testweise schon die neuen Segmente einzurichten.
Bis heute sind auch schon ca. 200 Knoten (von ca. 1500) in ein solches Segment umgezogen.

Wie ihr vielleicht auch gesehen habt, gibt es wieder eine neue [Firmware](https://firmware.ffmuc.net), welche bereits bis testing released ist. Diese bringt eine neue Funktionalität um die Knoten automatisiert in die richtigen Segmente umzuziehen.

Nachdem bereits [andere](https://karlsruhe.freifunk.net) [Communities](https://darmstadt.freifunk.net) das Problem hatten, viele Knoten in neue Segmente zu bekommen. Haben diese den Domain-Director geschrieben, welcher automatisiert den Knoten mitteilt in welches Segment sie wechseln müssen.

Wie schon mal erwähnt haben wir mit [UMap](https://umap.openstreetmap.fr/en/map/ffmuc-sites_319166) eine Einteilung der Knoten in verschiedene Segmente vorgenommen.
Diese Segmente werden durch den Domain-Director automatisch den Knoten mitgeteilt.

Wir überwachen bereits mit [Grafana](https://stats.ffmuc.net/d/vhI10KgZk/debugging-dashboard?orgId=1&refresh=1m&fullscreen&panelId=13), in welche Segmente die Knoten wechseln wollen. 
Falls es hier zu einem Ungleichgewicht kommt und ein Segment wesentlich zu viele Knoten abbekommen würde, können wir also rechtzeitig eingreifen und den Domain-Director anpassen.

**Um die Funktionalität der neuen Firmware zu testen, werden wir heute um 15:00 Uhr die ersten Knoten automatisiert in die neuen Segmente umziehen.**

Dies betrifft **NUR** Knoten welche als `autoupdater` `experimental` oder `testing` ausgewählt haben.

In den Knoteneinstellungen hat sich damit auch die Segmentauswahl geändert, diese sieht nun so aus:

![Segment Selektion](/assets/posts/2019-06-01-new_segment_selection.png) 

Bleibt also gespannt und bis demnächst,

Euer Freifunk München Team
