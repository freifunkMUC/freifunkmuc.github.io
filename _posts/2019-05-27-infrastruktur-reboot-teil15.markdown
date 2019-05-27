---
layout: post
title:  "Infrastruktur Reboot Teil 1.5"
date:   2019-05-27 12:00:00
categories: freifunkmuc
---
# Infrastruktur Reboot Teil 1.5

Wir ihr bereits in unserer letzten [Neuigkeit](https://ffmuc.net/freifunkmuc/2019/05/20/infrastruktur-reboot-teil1/) lesen konntet, geht es mit der neuen Infrastruktur in großen Schritten voran. 

In den letzten Tagen waren wir sehr damit beschäftigt einige Fehler in der Firmware zu beheben, welche durch das Nutzen von einem neuen Routingalgorithmus (BATMAN_V) aufgetreten sind. 
Dank [Freifunk Chemnitz](https://www.chemnitz.freifunk.net) konnten wir die Fehler wie [fehlende Mesh-Links](https://github.com/freifunk-gluon/gluon/issues/1726) auf der Karte und [falsche Meshing Präferenz](https://github.com/freifunk-gluon/gluon/issues/1728) [reparieren](https://github.com/freifunkMUC/site-ffm/commit/083cf05f55ce512484f4e2f904f12f231bb08a66). 

Die aktuelle `experimental` läuft somit sauber und stellt auch wieder alle gewünschten Funktionen auf der Karte zur Verfügung. 

Einen Härtetest hat die Firmware auch gleich hinter sich gebracht und den [Corso Leopold](https://corso-leopold.de) mit [Wifi versorgt](https://stats.ffmuc.net/d/hRIn3dRWk/mesh-nodes?orgId=1&var-nodeid=18d6c7f9e292&from=1558786051972&to=1558892523115).

Nachdem sich die Firmware bewehrt hat, werden wir diese nun in `testing` überführen um noch mehr Nutzer auf diese Version zu bekommen. 

Allerdings gibt es einen kleinen Haken: 
Durch die Anpassungen in der Firmware welche dafür sorgt, dass der neue Meshing-Algorithmus korrekt auf der Karte dargestellt wird, kommt es nun dazu, dass "alte" Mesh-Verbindungen auf der Karte nicht mehr richtig dargestellt werden. 

Dies betrifft aber _NUR_ die Darstellung auf der Karte und _nicht_ die Funktionalität. Dies betrifft _ALLE_ Nutzer in den _ALTEN_ Segmenten die die neue Firmware bekommen. 

Wer auf die neuen Segmente umgestellt hat, kann sich an den Bugfixes erfreuen ;).

Wir wissen, dass das für einige Knotenbetreiber unangenehm sein wird, nachdem dies aber durch einen Wechseln in die neuen Segmente behoben werden kann (was sowieso langfristig der Plan ist) sind wir gemeisam zu dem Entschluss gekommen die Firmware trotzdem in `testing` zu überführen.

Wir hoffen, dass es nicht mehr lange dauert bis wir die neuen Segmente auf alle Knoten ausrollen können. Die Auswirkungen werden also hoffentlich nur zeitlich begrenzt bemerkbar sein.

Viele Grüße,

Euer Freifunk München Team
