---
layout: post
title:  "Infrastruktur Reboot Teil 2.0"
date:   2019-06-03 07:00:00
categories: freifunkmuc
---
# Infrastruktur Reboot Teil 2.0

Nach den ganzen [Neuigkeiten](https://ffmuc.net/freifunkmuc/2019/05/20/infrastruktur-reboot-teil1/) der [letzten](https://ffmuc.net/freifunkmuc/2019/05/27/infrastruktur-reboot-teil15/) [Wochen](https://ffmuc.net/freifunkmuc/2019/06/01/infrastruktur-reboot-teil175/), ist es nun so weit, wir stellen das komplette Netz auf die neue Hardware und damit auf die neuen Segmente um. 

Dafür wurden schon die entsprechende Firmware [v2019.0.4](https://firmware.ffmuc.net/stable) auf alle Knoten verteilt.

Die ersten 400 Knoten sind bereits migriert! Danke an all die fleißigen Helfer! 

Außerdem machten wir erste Tests, der automatischen Migration in der `experimental` und `testing` Firmware.

Und zwar wird das, wenn nichts dazwischen kommt am **Freitag den 07.06.2019 um 12:00Uhr** passieren.

Nun fragt ihr euch sicher, warum das so plötzlich passiert. Nun der Grund ist ein relativer einfacher, geplant war die Umstellung sowieso für die nächsten Wochen. Durch einen Hardwarefehler beschleunigen wir den Vorgang nun aber, denn das alte Gateway leidet etwas an alterschwäche und funktioniert nicht mehr zuverlässig.

**Der genaue Zeitplan sieht wie folgt aus:**

* Montag 03.06.2019 circa 20:00 - Umstellung eines ersten Segmentes (muc_cty) um den Switchvorgang noch einmal zu verifizieren
* Freitag 07.06.2019 12:00 - Alle Knoten wechseln in die neuen Segmente und damit auf die neue Hardware

**Und hier noch einmal eine Zusammenfassung aller Änderungen die euch erwarten:**

* Neue Segmente zur Reduzierung des sogenannten Management Traffics (Traffic der zur Verbindung der Knoten anfällt)
* Neue SSIDs in den Segmenten im Format: muenchen.freifunk.net/uml_west 
* Zwei vollständige Gateways, so dass wir auch bei einem Ausfall eines Gateways weiter online sind
* Neue IPv4 und IPv6 Addressbereiche in den Segmenten

**Was heißt das für alle Knotenbetreiber?**

* Eure Nutzer müssen sich einmal neu verbinden, da sich die SSID (der Name des Wlans) ändert
* Eure Knoten verbrauchen deutlich weniger Datenvolumen, wenn keine Nutzer online sind
* Die Gesamtperformance des Netzes verbessert sich

**Technische Hintergründe zur Segmentierung und warum wir verschiedene SSIDs einsetzen:**

* Wie oben bereits erwähnt, reduzieren wir dadurch den Management Traffic, da wir die Broadcast Domänen deutlich verkleinern und damit weniger "Noise" im Netz entsteht.
* Die verschiedenen SSIDs, helfen den Clients die Segmente voneinander trennen zu können und nicht in den Segmenten jeweils DHCP Anfragen für die falschen IP Addressbereiche zu stellen.
* Noch mehr Informationen findet ihr auf [Freifunk-Ebersberg.de](https://www.freifunk-ebersberg.de/segmentierung-des-ffmuc-netzes) und auf [Freifunk-Hochstift.de](https://hochstift.freifunk.net/warum-keine-einheitliche-ssid/).

**Die neuen IP Addressbereiche**

Nachdem es gerade Probleme mit dem Wiki gibt, hier ein Screenshot aus Netbox welchen Bereich welches Segment bekommt.

![IPv4](/assets/ipv4.png)
![IPv6](/assets/ipv6.png)

**Relevante Github Repos**

* [Unsere Site Config](https://github.com/freifunkMUC/site-ffm)
* [Unser Ansible (nur zum Kickstarten)](https://github.com/freifunkMUC/ansible-ffmuc)
* [Unser Saltstack](https://github.com/freifunkMUC/ffmuc-salt-public)

Und wenn ihr euch noch mehr für die Hintergründe der ganzen Umbauten interessiert, können wir euch folgende Videos empfehlen:

* [Software Defined Freifunk Backbone](https://www.youtube.com/watch?v=7bcCTLa-03g)
* [State of Frickel](https://media.ccc.de/v/gpn19-89-state-of-the-frickel)

Und damit wünschen wir euch viel Spaß auf unserer neuen Infrastruktur!

Bei Fragen, Kritik und/oder Anmerkungen bitte im [Chat](https://chat.ffmuc.net) oder einer anderen [Kontaktmöglichkeit](https://ffmuc.net/kontakt) melden.

Euer Freifunk München Team
