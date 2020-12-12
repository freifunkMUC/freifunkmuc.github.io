---
layout: post
title:  "Wireguard Firmware oder Freifunk wird endlich schnell! - #USEMOREBANDWIDTH"
date:   2020-12-03 10:43:00
categories: freifunkmuc
---
### Überblick

Am 19.11.2020 war es dann soweit: Wir haben unser komplettes Netzwerk von _fastd_-VPN auf _WireGuard_-VPN umgestellt. Was einfach klingt, war überhaupt nicht einfach. Viele Softwarekomponenten auf unseren Servern und auf den Teilnehmer-Routern mussten neu eingebunden und angepasst werden. Vor allem mussten viele, viele Tests durchgeführt werden, um dieses Projekt zu verwirklichen.

Alles begann mit der Idee, Freifunk München für die Benutzer endlich schneller zu machen und das volle Potential der Teilnehmer-Router und Gateways im Backend abzurufen. Zudem stand ein größerer Umbau der Server-Infrastruktur an und so ergab es sich, dass sich unser Team sowieso mit dem gesamten FFMUC-Ökosystem auseinandersetzen musste.

Es war uns klar, dass es mit der vorhandenen VPN-Technik nicht möglich wäre, mehr Leistung herauszuholen. Deswegen suchten wir Alternativen zum bestehenden _fastd_-Anstatz und wurden bei _WireGuard_ fündig. Aber vorher gab ein großes Problem zu lösen: _WireGuard_ transportiert nur Layer-3-Verbindungen und keine Layer-2-Verbindungen, die wir aber für das von uns eingesetzte Meshprotokoll, B.A.T.M.A.N.-Advanced _batman-adv_, benötigen. 

Aber wir haben ja findige Techniker und die haben eine Lösung gefunden! Also transportieren wir nun über WireGuard ein Virtual eXtensible LAN (_VXLAN_, siehe RFC 7348) und in diesem _VXLAN_ läuft dann _batman-adv_. Klingt ein bisschen nach Matroschka-Puppe? Stimmt, genauso ist es auch. Doch trotz des dreifachen "Encapsulierens" sind wir bis zu fünf Mal schneller auf den aktuellen Teilnehmer-Routern und auf älteren Modellen holen wir immerhin bis zu Faktor 2,5 heraus! Und das ist für viele Teilnehmer der Unterschied von "gefühlt lahm" zu "gefühlt flott".

### Technik

#### WireGuard
_WireGuard_ verwendet eine _Public/Private-Key_-Architektur, dass heißt, es ist notwendig, dass wir vorher den _Public-Key_ eines Knotens (Teilnehmer-Routers) wissen müssen und bei den Backend-Gateways entsprechend anmelden müssen. Hierzu haben wir, wie weiter unten ausgeführt wird, eine eigene Softwarekomponente geschrieben, den WireGuard Key Exchange _wgkex_. Diese Komponente sorgt dafür, dass die Knoten ihren _Public-Key_ den Gateways mitteilen und die Gateways ihn in den entsprechenden _WireGuard_-Strukturen ablegen. Auch wird aus diesem _Public-Key_ die interne _IPv6_-Adresse der Knoten berechnet und für _WireGuard_ freigegeben, die wir wiederum wir für die _VXLAN_-Kommunikation benötigen.

#### VXLAN
Wir verwenden Virtual eXtensible LAN _VXLAN_ um die Limitierung von _WireGuard_ zu umgehen, nur "geroutete" Pakete auf Layer 3 zu übertragen. Mit _VXLAN_ ist es uns nun möglich, via Layer 3 wieder Layer-2-Pakete, in unserem Fall _B.A.T.M.A.N._-Pakete, zu übertragen. Dazu richten wir zwischen den Gateways und den Knoten eine 1:1-_IPv6_-Verbindung ein. Auch hier werden die _IPv6_-Adressen des Gateways und des Knoten wieder aus den jeweiligen _Public-Keys_ errechnet. So stellen wir sicher, dass eine alle generierten _IPv6_-Adressen im System einmalig sind.

### Softwareprojekte

Klingt das Ganze für euch nach Pionierarbeit? Richtig, das war es auch! Deswegen haben wir auch einige neue Softwareprojekte ins Leben gerufen. Diese wollen wir hier zum Schluss kurz vorstellen.

#### Wireguard Key Exchange
Wie oben erwähnt, brauchten wir einen Broker zum Entgegennehmen der _WireGuard-Public-Keys_. Diesen haben wir zusammen mit Freifunk Regensburg und Freifunk Darmstadt Wireguard Key Exchange _wgkex_ getauft und den Code auf [GitHub](https://github.com/freifunkMUC/wgkex) veröffentlicht. _wgkex_ besteht aus zwei Komponenten: Dem "broker", der die _Public-Keys_ per Webrequest annimmt und einem "worker", der dann die Gateways so umkonfiguriert, dass die _Public-Keys_ im System bekannt sind und alle Routen korrekt gesetzt werden.

#### Gluon-Firmwarekomponente
Natürlich brauchten wir auch einen Teil in der Firmware der Teilnehmer-Knoten, der statt einem _fastd_- oder _L2TP_-VPN eine _WireGuard/VXLAN_-Verbindung aufbaut. Dieses Projekt haben wir _gluon-mesh-vpn-wireguard-vxlan_ genannt und ihr findet es natürlich auf [GitHub](https://github.com/freifunkMUC/gluon-mesh-vpn-wireguard).

#### systemd-networkd
Damit auf den Gateways alles rund läuft, haben wir uns zu guter Letzt noch eine _systemd_-Erweitung ausgedacht. Diese Komponente ist natürlich keine Vorraussetzung für das Setup. Sie macht uns das Leben aber deutlich einfacher, da _systemd_ nun dank uns _B.A.T.M.A.N._-Interfaces unterstützt! Den entsprechenden Pull-Request findet ihr im _systemd_-Projekt auf [GitHub](https://github.com/systemd/systemd/pull/17252).

### Ausblick
Heute, fast einen Monat nach Inbetriebnahme des neuen Systems, können wir zufrieden auf unser Projekt blicken, das uns zwar unzählige Stunden Arbeit gekostet hat, aber für alle Beteiligten spannend und lehrreich war. Und mit den Performance-Gewinnen sind wir auch sehr zufrieden.
Für die Benutzer, die vom Umbau hoffentlich garnichts mitbekommen haben, hat es ein insgesamt besseres Freifunk-Erlebnis mit einer höheren nutzbaren Freifunk-Bandbreite gebracht.
Und vielleicht zeigt es für andere Freifunk-Communities einen Weg auf, Engpässe im eigenen Netz zu beheben und unbekannte Leistungsreserven auszuschöpfen.

