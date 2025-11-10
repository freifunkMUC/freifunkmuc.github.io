---
layout: post
title: "Stellungnahme zur Mindestspeicherung von IP-Adressen bei öffentlichen WLANs"
date: 2025-11-10 10:00:00 +0200
categories: politik freifunk gesetzgebung
author: Freifunk München / Freie Netze München e.V.
---

## Hintergrund

Der Gesetzentwurf – [BT-Drs. 20/13748](https://dserver.bundestag.de/btd/20/137/2013748.pdf) verpflichtet Anbieter „öffentlich zugänglicher Internetzugangsdienste“ zur Speicherung der dem Endnutzer zugewiesenen IP-Adresse, Anschlusskennung und Nutzungszeiten für einen Monat.  
Ausnahmen für gemeinnützige oder nicht-kommerzielle Anbieter – etwa Freifunk oder kommunale Hotspots – sind nicht vorgesehen.  


## Technische Unmöglichkeit/Komplikationen

Die geforderte Speicherung setzt voraus, dass einem Nutzer eindeutig eine IP-Adresse zugewiesen und diese Zuordnung protokolliert werden kann.  
Bei modernen öffentlichen WLAN-Netzen ist das technisch nur sehr erschwert möglich:

- Endgeräte erzeugen ihre IPv6-Adressen selbst über SLAAC; der Betreiber weist keine Adressen aktiv zu.
- Privacy Extensions führen dazu, dass sich IPv6-Adressen regelmäßig ändern.
- Viele Endgeräte (Android, Apple, Windows) rotieren heute ihre MAC-Adressen auch im IPv4-Betrieb, um Nachverfolgbarkeit zu erschweren. Dadurch lassen sich DHCP-Zuweisungen keinem bestimmten Gerät mehr dauerhaft zuordnen.

Eine eindeutige, dauerhafte Zuordnung von IP-Adresse zu einem Endgerät ist somit weder unter IPv6 noch unter IPv4 technisch sicher möglich.  
Die Umsetzung der Speicherpflicht wäre nur über eine verpflichtende Nutzeridentifikation mit personenbezogenen Daten realisierbar. Das würde spontane, niederschwellige WLAN-Nutzung erheblich erschweren.

## Datenschutz und organisatorische Folgen

Betreiber öffentlicher WLANs verfügen bereits heute über Datenschutzkonzepte, Auftragsverarbeitungsverträge und technische Schutzmaßnahmen.  
Wenn jedoch personenbezogene Nutzerdaten erhoben und gespeichert werden müssten, wären deutlich strengere Anforderungen zu erfüllen:

- Erweiterte Maßnahmen im Datenschutzmanagement, bei Datensicherheit und Rechenschaftspflicht.
- Höhere laufende Kosten für Wartung, Compliance, rechtliche Absicherung und Sicherheitsinfrastruktur.
- Erhöhtes Risiko bei Datenschutzverletzungen und behördlichen Auskunftsersuchen.

Für viele ehrenamtliche, kommunale oder kleinere gewerbliche Betreiber wäre das wirtschaftlich und organisatorisch kaum leistbar.

## Auswirkungen auf Barrierefreiheit und digitale Teilhabe

Eine verpflichtende Nutzeridentifikation oder komplexe Anmeldeverfahren würden den barrierefreien Zugang zum Internet im öffentlichen Raum deutlich erschweren.  
Offene WLANs sind heute ein wichtiger Bestandteil digitaler Teilhabe, insbesondere für Menschen ohne mobile Datenverträge, für sozial schwächere Gruppen oder für Gäste aus dem Ausland.  
Die geplanten Vorgaben würden diese niedrigschwelligen Zugänge faktisch einschränken und damit dem politischen Ziel digitaler Inklusion widersprechen.

## Bewertung im Vergleich zu anderen Stellungnahmen

### Perspektive von Rechts- und Fachverbänden  
Die BRAK kritisiert in ihrer [Stellungnahme Nr. 7/2025](https://www.brak.de/fileadmin/05_zur_rechtspolitik/stellungnahmen-pdf/stellungnahmen-deutschland/2025/stellungnahme-der-brak-2025-07.pdf) die anlasslose Mindestspeicherung von IP-Adressen als rechtlich und technisch problematisch und weist auf erhebliche Risiken für Datenschutz und Grundrechte hin.  
Die **eco – Verband der Internetwirtschaft e. V.** warnt in ihrer [Pressemitteilung](https://www.eco.de/presse/vorratsdatenspeicherung-eco-verband-der-internetwirtschaft-e-v-warnt-vor-rueckschritt-rechtssicherheit-verhaeltnismaessigkeit-und-datenschutz-muessen-leitlinien-bleiben/), dass eine pauschale IP-Adressenspeicherung „einen Rückschritt in der Digitalpolitik“ darstelle und nennt insbesondere wirtschaftliche Belastungen für Infrastruktur- und Netzbetreiber sowie Risiken für Datenschutz und Rechtssicherheit.  

### Bezug zur vorliegenden Analyse  
Die dort genannten Grundrechte-, Betriebs- und Datenschutzrisiken korrespondieren unmittelbar mit den technischen und organisatorischen Herausforderungen öffentlicher WLAN-Anbieter – insbesondere kleinerer Gemeinschaftsnetze wie dem unsrigen.

## Fazit

Die geplante Mindestspeicherung ist mit den heutigen technischen Standards nicht praktikabel und führt zu erheblichen rechtlichen und gesellschaftlichen Nebenwirkungen.  
Ohne eine gesetzliche Ausnahme oder eine differenzierte Regelung nach Betreiberart würde sie die Bereitstellung öffentlicher WLAN-Angebote erheblich erschweren oder unmöglich machen – sowohl technisch als auch aus Gründen der Barrierefreiheit und Datenschutzkonformität.

---

**Freifunk München / Freie Netze München e.V.**  
Parkstraße 28, 82131 Gauting  
Eingetragen im Vereinsregister beim Amtsgericht München – VR 206402  
Web: [https://ffmuc.net](https://ffmuc.net)  
E-Mail: [info@ffmuc.net](mailto:info@ffmuc.net)
