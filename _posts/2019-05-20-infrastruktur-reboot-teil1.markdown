---
layout: post
title:  "Infrastruktur Reboot Teil 1"
date:   2019-05-20 12:00:00
categories: freifunkmuc
---
Nachdem wir die letzten Monate damit zugebracht haben die Freifunk München Infrastruktur komplett zu erneuern und die ersten sichtbaren Änderungen auch schon bei euch ankamen ([neue Karte](https://map.ffmuc.net), [neues Grafana](https://stats.ffmuc.net)) machen wir nun weiter mit den großen Änderungen.

Dazu wurde eine neue [Firmware](https://firmware.ffmuc.net) gebaut, welche aktuell in `testing` und `experimental` zu finden ist. 

Folgende Aenderungen erwarten euch:

- [Mehr Segmente](http://umap.openstreetmap.fr/en/map/ffmuc-sites_319166#9/47.9421/10.6128) zur besseren Verteilung der Knoten (muc_cty, muc_nord, muc_ost, muc_sued, muc_west, uml_nord, uml_ost, uml_sued, uml_west und welt).
- Die neuen Segmente besitzen jeweils eine eigene SSID (muenchen.freifunk.net/<Segmentname>), um schnelleres Einwählen bei einem Segmentwechsel zu ermöglichen. Das bedeutet aber auch, ihr müsst euch neu mit eurem Knoten verbinden.
- Außerdem setzen wir nun VXLAN zum Meshing ein, was dazu führt, dass versehntliches Bridgen und Loops bauen zwischen den Segmenten nicht mehr passiert.
- Neue virtualisierte Gateways, die neuen Gateways lauten gw01.ext.ffmuc.net und gw02.ext.ffmuc.net.

Die Segmentierung wurde vor Allem wegen dem viel zu hohen Management Traffic angegangen. Welche signifikante Änderung im Management Traffic diese Segmentierung hat, seht ihr im folgenden Screenshot.

![Node Graph](/assets/nodetraffic.png)

Alles in Allem wäre es sehr schön, wenn ihr uns helft, die neuen Gateways zu testen und möglichst viel Feedback im [Chat](https://chat.ffmuc.net) oder den anderen [Kontaktmoeglichkeiten](https://ffmuc.net/kontakt) gebt.

Bitte beachtet, sobald euer Knoten in eines der neuen Segmente wechselt wird er einmal als offline (alte Infrastruktur) und einmal als online (neue Infrastruktur) auf der Karte angezeigt.

Ein bekanntes Problem ist im Moment, dass Mesh-Links in den neuen Segmenten nicht richtig dargestellt werden. Die Funktion des Meshes ist aber nicht eingeschränkt.

Für bestehende Knoten ändert die neue Firmware nichts. Ein Knoten muss absichtlich auf ein neues Segment konfiguriert werden um die neuen Features zu testen.

Und so sieht die neue Hardware hinter Freifunk aus:

![New Servers](/assets/new_servers.png)

Viele Grüße und viel Spaß beim Testen,
euer Freifunk München Team
