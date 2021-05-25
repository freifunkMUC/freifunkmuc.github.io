---
layout: post
title:  "Migration abgeschlossen"
date:   2019-06-07 22:00:00
categories: freifunkmuc
---

Nach den ganzen [Neuigkeiten](https://ffmuc.net/freifunkmuc/2019/05/20/infrastruktur-reboot-teil1/) [der](https://ffmuc.net/freifunkmuc/2019/05/27/infrastruktur-reboot-teil15/) [letzten](https://ffmuc.net/freifunkmuc/2019/06/01/infrastruktur-reboot-teil175/) [Wochen](https://ffmuc.net/freifunkmuc/2019/06/03/infrastruktur-reboot-teil2/), haben wir es endlich hinter uns:

**Alle Router** (bis auf ein paar widerspenstige) **sind ohne Probleme auf die neuen Segmente umgezogen.**

Die Änderung innerhalb von weniger Minuten überzeugt zumindest uns :)

| Stand 12:00 | Stand 12:07 |
|--------|--------|
| ![Stand 12:00](/assets/2019-06-07-migration_1200.png) | ![](/assets/2019-06-07-migration_1207.png)|

Ihr habt es vielleicht daran gemerkt, dass sich der Name des WLAN's geändert hat - oder daran dass das Surfen wieder schneller funktioniert.

Trotzdem möchten wir euch die Entwicklung anhand eines Graphen etwas zeigen:
![Graph Knoten](/assets/2019-06-07-migration_nodes.png)
Man sieht, dass viele Knoten vor 12 Uhr noch in alten Segmenten waren (die größen Bereiche).
Als die Knoten umgeschaltet haben, brauchte das System ein paar Minuten um dies zu bemerken (der Ausschlag)
doch danach waren alle Knoten wieder da.
Wie man sieht ist nachher die Verteilung ist viel gleichmäßiger.
Unten seht ihr noch, dass nur noch recht wenige Knoten die alten Segmente benutzen.

## Veränderung im Backend

Unser alter Server, den wir aufgrund von zunehmenden Altersschwächen ablösen wollten, musste sich ab kurz nach 12 Uhr nicht mehr um die Last des Netzwerkes kümmern.
Von den vorher 80°C ist er innerhalb kürester Zeit auf 40°C abgekühlt.

Da wir in den letzten Wochen intensiv daran gearbeitet haben die Gateways automatisiert und reproduzierbar installieren zu können,
ist es recht einfach geworden ein "Legacy-Gateway" zu bauen, welches die alten Segmente *übergangsweise* versorgt.

Aus diesem Grund waren wir endlich in der Lage den alten Server auch heute noch abschalten.
Und das haben wir auch getan.

Das Legacy-Gateway versorgt jetzt noch den letzten Überrest an Knoten damit diese noch Gelegenheit haben sich zu aktualisieren.

Wir haben das Gateway zwar jetzt eingerichtet aber auch nur, weil es mit unserer neuen Automatisierung schnell gemacht war.
Noch können wir kein Datum nennen, doch wird es dieses Gateway nicht ewig geben!
**Sollte deine Installation eine derjenigen sein, die sich nicht automatisch aktualisieren ist es jetzt höchste Zeit dies zu tun!**

## Was steht noch an?

Kleinigkeiten.

- Der alte Server steht aktuell noch im Rechenzentrum und nimmt Platz ein. Der wird die nächsten Tage ganz abgebaut.

- Desweiteren werden wir eine neue Firmware releasen, in denen die alten Segmente nicht mehr auswählbar sind. In dieser werden wir auch die Konfiguration für ein weiteres Gateway verteilen um die Verfügbarkeit weiter zu erhöhen.

Etwas größer ist da der Punkt "Verfügbarkeit":
Wir haben vor sie noch weiter auszubauen.
Aktuell sind all unsere Gateways nur bei unserem langjährigen Partner [SpaceNet](https://www.space.net/) untergestellt.
Wir möchten sie gerne etwas entlasten und standortunabhängiger werden, weswegen wir auch Gateways an anderen Standorten betreiben wollen.
Vorbereitungen dafür wurden schon getroffen, doch können wir das jetzt endlich wieder angehen.

## Jetzt seid ihr am Zug!

Dadurch, dass wir jetzt keine Angst mehr haben müssen, dass unser Gateway an Altersschwäche stirbt und das Netz allgemein wieder in einem vorzeigbaren Zustand ist,
haben wir aber auch wieder Kapazitäten um vielleicht gemeinsam mit euch Dinge zu starten.

Das Netz wäre jetzt vorbereitet. Jetzt könnt ihr losgehen und
- euere Nachbarn einladen einen Router aufzustellen und so unabhängiger von ihrem Provider zu werden (ein Hoch aufs [Mesh-Netzwerk](https://de.wikipedia.org/wiki/Vermaschtes_Netz))
- zusammen mit uns und anderen neue Dienste entwickeln und im Freifunk anzubieten
- ...

**Jetzt wäre ein guter Moment Teil der Community zu werden und Freifunk mitzugestalten!**

Kommt mal bei einem Treffen oder im [Chat](https://chat.ffmuc.net) vorbei.
Ihr könnt aber auch einen der anderen [Kontaktmöglichkeiten](https://ffmuc.net/kontakt) nutzen.

Euer Freifunk München Team
