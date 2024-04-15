---
layout: posts
title:  "WireGuard-Firmware oder Freifunk München wird endlich schnell! - #USEMOREBANDWIDTH"
date:   2020-12-03 10:43:00
categories: freifunkmuc
---
### Überblick

Am 19.11.2020 war es dann soweit: Wir haben unser komplettes Netzwerk von _fastd_-VPN auf **WireGuard-VPN** umgestellt. Was einfach klingt, war überhaupt nicht einfach. Viele Softwarekomponenten auf unseren Servern und auf den Teilnehmer-Routern mussten neu eingebunden und angepasst werden. Vor allem mussten viele, viele Tests durchgeführt werden, um dieses Projekt zu verwirklichen.

Alles begann mit der Idee, Freifunk München für die Benutzer endlich schneller zu machen und das volle Potential der Teilnehmer-Router und Gateways im Backend abzurufen. Zudem stand ein größerer Umbau der Server-Infrastruktur an und so ergab es sich, dass sich unser Team sowieso mit dem gesamten FFMUC-Ökosystem auseinandersetzen musste.

Es war uns klar, dass es mit der vorhandenen VPN-Technik nicht möglich wäre, mehr Leistung herauszuholen. Deswegen suchten wir Alternativen zum bestehenden _fastd_-Ansatz und wurden bei [WireGuard](https://www.wireguard.com/) fündig. Aber vorher gab ein großes Problem zu lösen: _WireGuard_ transportiert nur Layer-3-Verbindungen und keine Layer-2-Verbindungen, die wir aber für das von uns eingesetzte Meshprotokoll, **B.A.T.M.A.N.-Advanced** _batman-adv_, benötigen. 

Aber wir haben ja findige Techniker und die haben eine Lösung gefunden! Also transportieren wir nun über _WireGuard_ ein **Virtual eXtensible LAN** (_VXLAN_, siehe [RFC 7348](https://tools.ietf.org/html/rfc7348)) und in diesem **VXLAN** läuft dann _batman-adv_. Klingt ein bisschen nach Matroschka-Puppe? Stimmt, genauso ist es auch. Doch trotz des dreifachen "Encapsulierens" sind wir bis zu fünf Mal schneller auf den aktuellen Teilnehmer-Routern und auf älteren Modellen holen wir immerhin bis zu Faktor 2,5 heraus! Und das ist für viele Teilnehmer der Unterschied von "gefühlt lahm" zu "gefühlt flott".

### Technik

#### WireGuard
_WireGuard_ verwendet eine _Public/Private-Key_-Architektur, dass heißt, es ist notwendig, dass wir vorher den _Public-Key_ eines Knotens (Teilnehmer-Routers) wissen müssen und bei den Backend-Gateways entsprechend anmelden müssen. Hierzu haben wir, wie weiter unten ausgeführt wird, eine eigene Softwarekomponente geschrieben, den **WireGuard Key Exchange** _wgkex_. Diese Komponente sorgt dafür, dass die Knoten ihren _Public-Key_ den Gateways mitteilen und die Gateways ihn in den entsprechenden _WireGuard_-Strukturen ablegen. Auch wird aus diesem _Public-Key_ die interne _IPv6_-Adresse der Knoten berechnet und für _WireGuard_ freigegeben, die wir wiederum wir für die _VXLAN_-Kommunikation benötigen.

#### VXLAN
Wir verwenden _VXLAN_ um die Limitierung von _WireGuard_ zu umgehen, nur "geroutete" Pakete auf Layer 3 zu übertragen. Mit _VXLAN_ ist es uns nun möglich, via Layer 3 wieder Layer-2-Pakete, in unserem Fall _B.A.T.M.A.N._-Pakete, zu übertragen. Dazu richten wir zwischen den Gateways und den Knoten eine 1:1-IPv6-Verbindung ein. Auch hier werden die _IPv6_-Adressen des Gateways und des Knoten wieder aus den jeweiligen _Public-Keys_ errechnet. So stellen wir sicher, dass alle generierten _IPv6_-Adressen im System einmalig sind.

### Softwareprojekte

Klingt das Ganze für euch nach Pionierarbeit? Richtig, das war es auch! Deswegen haben wir auch einige neue Softwareprojekte ins Leben gerufen. Diese wollen wir hier zum Schluss kurz vorstellen.

#### Wireguard Key Exchange
Wie oben erwähnt, brauchten wir einen Broker zum Entgegennehmen der _WireGuard-Public-Keys_. Diesen haben wir zusammen mit **Freifunk Regensburg** und **Freifunk Darmstadt** Wireguard Key Exchange _wgkex_ getauft und den Code auf [GitHub](https://github.com/freifunkMUC/wgkex) veröffentlicht. _wgkex_ besteht aus zwei Komponenten: Dem **broker**, der die _Public-Keys_ per Webrequest annimmt und einem **worker**, der dann die Gateways so umkonfiguriert, dass die _Public-Keys_ im System bekannt sind und alle Routen korrekt gesetzt werden.

#### Gluon-Firmwarekomponente
Natürlich benötigten wir auch einen Teil in der Firmware der Teilnehmer-Knoten, der statt einem _fastd_- oder _L2TP_-VPN eine _WireGuard/VXLAN_-Verbindung aufbaut. Dieses Projekt haben wir **gluon-mesh-vpn-wireguard-vxlan** genannt und ihr findet es natürlich auch auf [GitHub](https://github.com/freifunkMUC/gluon-mesh-vpn-wireguard).

#### systemd-networkd
Damit auf den Gateways alles rund läuft, haben wir uns zu guter Letzt noch eine **systemd-Erweitung** ausgedacht. Diese Komponente ist natürlich keine Vorraussetzung für das Setup. Sie macht uns und anderen _systemd_-Nutzern das Leben aber deutlich einfacher, da _systemd_ nun auch _B.A.T.M.A.N._-Interfaces unterstützt! Den entsprechenden Pull-Request findet ihr im _systemd_-Projekt, wieder öffentlich auf [GitHub](https://github.com/systemd/systemd/pull/17252).

### Fehlersuche

Direkt nach der Umstellung fiel auf, dass wir zwar deutlich schnellere Einzelverbindungen haben, die Gateways aber unter deutlich höherer Last litten, als zuvor. Auch mehr, als durch die Zunahme des Traffics zu erklären gewesen wäre. Also ging es los mit der Fehlersuche. Dabei wurden [Flamegraphen](http://www.brendangregg.com/FlameGraphs/cpuflamegraphs.html) angefertigt, Linux-Kernelcode studiert sowie der _batman-adv_-Code näher unter die Lupe genommen.

Es wurde relativ schnell klar, dass innerhalb des Kernels die Netzwerkpakete zu oft umkopiert werden mussten, was zu großen Performanceverlusten im Netzwerkstack führte. Nach mehreren Tagen intersiver Suche durch das FFMUC-Server-Team und auch dank der Unterstützung der _B.A.T.M.A.N.-Advanced_-Entwickler konnte das Problem eingegrenzt und schließlich behoben werden.

Aktuell (12/2020) laufen unsere Gateways deswegen auf einem Linux-Kernel mit Custom-Patches, sozusagen an der "bleeding edge", aber wir hoffen, dass bald auch die Allgemeinheit von unserer Arbeit profitieren kann.

#### B.A.T.M.A.N.-Advanced-Patches
[batman-adv: Reserve needed_*room for fragments](https://patchwork.open-mesh.org/project/b.a.t.m.a.n./patch/20201126153120.1053700-1-sven@narfation.org/)<br />
[batman-adv: Don't always reallocate the fragmentation skb head](https://patchwork.open-mesh.org/project/b.a.t.m.a.n./patch/20201127173849.19208-4-sw@simonwunderlich.de/)<br />
[batman-adv: Consider fragmentation for needed_headroom](https://patchwork.open-mesh.org/project/b.a.t.m.a.n./patch/20201127173849.19208-2-sw@simonwunderlich.de/)<br />

#### Linux-Kernel-Patch im VXLAN-Code
[vxlan: Add needed_headroom for lower device](https://patchwork.open-mesh.org/project/b.a.t.m.a.n./patch/20201126125247.1047977-1-sven@narfation.org/)

### Fazit
Heute, fast einen Monat nach Inbetriebnahme des neuen Systems, können wir zufrieden auf das Projekt zurückblicken. Es hat uns zwar unzählige Stunden Arbeit gekostet, war aber für alle Beteiligten immer spannend und lehrreich. Mit den Performance-Gewinnen sind wir auch sehr zufrieden und für die Freifunk- und _systemd_-Community ist auch etwas herausgekommen.

Für die Freifunk-München-Benutzer, die vom Umbau hoffentlich garnichts mitbekommen haben, hat es ein insgesamt besseres Freifunk-Erlebnis mit einer höheren nutzbaren Freifunk-Bandbreite gebracht.

Und vielleicht zeigt es für andere Freifunk-Communities einen Weg auf, Engpässe im eigenen Netz zu beheben und unbekannte Leistungsreserven auszuschöpfen.

