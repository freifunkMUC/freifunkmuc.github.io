---
layout: posts
title: "Jahresrückblick 2025"
date: 2025-12-31 14:00:00 +0200
categories: freifunk community
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

# Freifunk München - Jahresrückblick 2025

## Einleitung

2025 war ein bedeutendes Jahr für Freifunk München. Als nichtkommerzielle Initiative für den Aufbau freier (Funk-)Netze konnten wir unsere Services weiter ausbauen und die Community stärken.

## Netzwerk-Statistiken

### Überblick
- **Online Nodes**: Das Netzwerk zeigt eine stabile Entwicklung mit durchschnittlich über 3.300 aktiven Knoten über das Jahr verteilt
- **Firmware-Adoption**: Im Jahresdurchschnitt laufen ca. 85-87% der Nodes auf den aktuellen Firmware-Versionen
- **Router-Vielfalt**: Über 150 verschiedene Router-Modelle im Einsatz

### Top Router-Modelle
Die beliebtesten Router im ffmuc-Netzwerk 2025:
1. Ubiquiti UniFi AC Lite (109 Geräte, 6%)
2. TP-Link Archer C7 v5 (106 Geräte, 6%)
3. AVM FRITZ!Box 4040 (83 Geräte, 5%)
4. Netgear R6120 (77 Geräte, 4%)
5. QEMU Virtual Machines (62 Geräte, 3%)

### Internet-Gateways
Zwei Hauptstandorte sichern die Konnektivität mit folgenden Durchschnittswerten über das Jahr:
- **München (MUC01)**: RX: durchschnittlich 700-800 Mbps, TX: durchschnittlich 2-3 Gbps
- **Wien (VIE01)**: RX: durchschnittlich 300-400 Mbps, TX: durchschnittlich 350-450 Mbps

Insgesamt stehen in unserem Netzwerk dank [zahlreicher Sponsoren](https://ffmuc.net/unterstuetzer/) über 300Gbps Anbindung zur Verfügung.

## DNS & Privacy Services

### DNS-Service Highlights
Freifunk München betreibt zensurfreie öffentliche DNS-Resolver als EU-basierte, non-profit Alternative zu kommerziellen Anbietern:

**Technische Details:**
- IPv4: 185.150.99.255 / 5.1.66.255
- IPv6: 2001:678:e68:f000:: / 2001:678:ed0:f000::
- DoH (DNS over HTTPS): https://doh.ffmuc.net/dns-query
- DoT/DoQ (DNS over TLS/QUIC): dot.ffmuc.net / doq.ffmuc.net Port 853

### DNS-Neuigkeiten 2025

**September 2025**: Umstellung auf HAProxy
- HTTP/3 und QUIC-Unterstützung für DoH-Server
- Verbesserte Performance und moderne Protokoll-Unterstützung

## Weitere Services

### Neue Dienste 2025

**HedgeDoc** (April 2025)
- Kollaboratives Markdown-Dokumenten-Tool
- Erreichbar unter: [https://hedgedoc.ffmuc.net](https://hedgedoc.ffmuc.net)
- Kostenloser Service für die Community

### media.ccc.de Mirror
2025 stellt FFMUC Bandbreite für die Spiegelung der c3voc-Videos bereit:
- 80 Gbps verfügbare Bandbreite
- Spitzenauslastung während 39C3 (7Gbps), durchschnittlich 1-2 Gbps im regulären Betrieb
- Traffic-Monitoring via [öffentlichem Dashboard](https://stats.ffmuc.net/d/aegea5ohylkaoa/ffmuc-media-ccc-de?orgId=1&from=now-24h&to=now&timezone=browser&refresh=30s)

## Verein Freie Netze München e.V.

### Umstellung Vereinsverwaltung

Migration auf [neues Vereinstool](https://web.meinverein.de/profile/86506) abgeschlossen und neue Mitglieder gewonnen so wie die Möglichkeit zum Lastschrifteinzug. Wir zählen damit **93 Mitglieder**.

### Neue Dienste exklusiv für Mitglieder
- [VMs](https://vms.ffmuc.net/) zur Selbstverwaltung via Incus
- [Wireguard VPN](https://vpn.ffmuc.net/)
- [Passwortmanager](https://vault.ffmuc.net/)

### Kurzinformations Webseiten zum Verein
- [https://mitglieder.ffmuc.net/](https://mitglieder.ffmuc.net/)
- [https://spende.ffmuc.net/](https://spende.ffmuc.net/)

### Signifikante Anschaffungen

Supportvertrag für Switche für 3 Jahre verlängert.

## Community & Engagement

### Neue Unterkünfte für Geflüchtete

2025 kamen zwei weitere große Unterkünfte zum Freifunk-Netzwerk hinzu:

**Garching**
- Internetversorgung für eine Unterkunft für Geflüchtete
- Über 20 Unifi Accesspoints
- [Nanopi R4S als Offloader](https://map.ffmuc.net/#/en/map/82342878f006)
- Starlink als Uplink

**Unterschleißheim**
- Neue große Unterkunft mit Freifunk-Anbindung
- Omada Setup
- [Nanopi R2S](https://map.ffmuc.net/#/en/map/263e34f31f0f)
- Starlink als Uplink

Diese Projekte setzen die langjährige Tradition von Freifunk München fort, Internet-Zugang für Geflüchtete und sozial benachteiligte Gruppen bereitzustellen.

### Unterstützung für Internet Researcher

Wir unterstützen einige Internet Research Projekte mit VMs, so zum Beispiel ein Projekt zu RPKI Messungen, Globalping und weitere Wissenschaftler. Solltet ihr Unterstützung benötigen für eure Studienarbeit meldet euch gerne bei uns.

### Herausforderungen 2025

**Aufruf vom Juli**: "Unser Verein braucht dich"
Der Verein kämpft mit einem Mangel an aktiven Helfer:innen, was die Organisation zunehmend an ihre Grenzen bringt. Der Aufruf zum monatlichen Treffen am 30.07.2025 betonte die Notwendigkeit für mehr Community-Engagement.

### Events & Öffentlichkeitsarbeit

**Kulturspektakel Gauting** (Juli 2025)
- Freifunk-WLAN auf dem gesamten Festivalgelände
- 7 Offloader und 20 Access Points in fast allen Buden
- Uplink über Starlink-Verbindungen
- Waldbühne mit Photovoltaikanlage versorgt
- Mehrere hundert Meter Strom- und Netzwerkkabel verlegt
- Open-Air-Festival mit Live-Musik auf 3 Bühnen, kostenloser Eintritt

**Augsburger Linux-Infotag**
- Stand auf dem [Augsburger Linux-Infotag 2025](https://www.luga.de/static/LIT-2025/)
- Präsentation der Vereinsaktivitäten und Services
- Vernetzung mit Freifunk Augsburg

[**Corso Leopold**](https://corso-leopold.de) (Juni 2025)

Auch dieses Jahr waren wir wieder mit einem Stand präsent: Interessierte und Neugierige mit Informationen versorgen, Tipps geben und das Projekt erklären.

**Besuch bei Freifunk Braunschweig** (Juli 2025) 

Wir nahmen an einem gemeinsamen Hackathon zu "Project Parker" teil, einem neuen Netzdesign, von dem wir uns mehr Stabilität und bessere Performance erhoffen.

**Community übergreifende Aktion zur Nachnutzung einer Großspende ausrangierter Accesspoints**

Wir haben viele Stunden in die Integration der Geräte aus der Großspende gesteckt und hoffen, dass das diese auch bald in OpenWRT für jeden nutzbar sein wird. Dies erfolgte in zusammenarbeit mit vielen anderen Communities, frei nachdem Motto "Freifunk verbindet".


### Regelmäßige Treffen
**Online Treffen**
- Jeden letzten Mittwoch des Monats um 19:30 Uhr
- Online auf [https://meet.ffmuc.net/ffmuctreffen](https://meet.ffmuc.net/ffmuctreffen)
- Chat-Diskussionen: [https://chat.ffmuc.net](https://chat.ffmuc.net)

**Stammtisch**

Unser Stammtisch findet seit diesem Jahr regelmäßig alle 2 Monate im 
[MuMaLab](https://munichmakerlab.de) statt: Socializing, Hacking, Networking, grillen, diskutieren, Spaß haben...

### Social Media Präsenz
Aktive Präsenz auf Mastodon ([@freifunkMUC@social.ffmuc.net](https://social.ffmuc.net/@freifunkMUC)) mit:
- 292 Posts
- 1.3K Follower
- Regelmäßige Updates zu technischen Themen und Community-Events

## Technische Highlights & Wartungen

### Support-Ende
**November 2025**: Ende der Unterstützung für EdgeRouter X und EdgeRouter X SFP
- Betroffene Nutzer wurden frühzeitig informiert
- Migration auf neuere Hardware empfohlen

### Technische Verbesserungen
- [Monitoring von Paketverlusten von allen Standorten](https://stats.ffmuc.net/d/Os3hdxQZk/http-response-monitoring?orgId=1&from=now-1h&to=now&timezone=browser&var-url_name=$__all&var-error_url=$__all&refresh=auto)
- Ubuntu 24.04 Updates
- Neuer Switch in Wiener Rechenzentrum (Arista DCS-7280SR3E-40YC6-F) und Server auf 2x25Gbps geupgraded

## Politisches Engagement

### Stellungnahme zur Mindestspeicherung (November 2025)
Freifunk München nahm [Stellung zur geplanten Mindestspeicherung von IP-Adressen bei öffentlichen WLANs](https://ffmuc.net/politik/freifunk/gesetzgebung/2025/11/10/stellungnahme-mindestspeicherung/) und setzte sich für datenschutzfreundliche Lösungen ein. Die Stellungnahme kritisiert die technische Impraktikabilität der Regelung, die erheblichen Datenschutzrisiken und den unverhältnismäßigen Aufwand für kleinere und ehrenamtliche Betreiber. Als PDF verfügbar unter: [Stellungnahme als PDF](https://ffmuc.net/assets/posts/Freifunk_Muenchen_Stellungnahme_IP-Adressen-Speicherung.pdf)

**Medienecho**  
Die Stellungnahme fand Beachtung in der Fachpresse:
- **heise online** berichtete am 11. November 2025 ausführlich über die Warnung der Freifunker mit dem Artikel ["Aus für offenes WLAN? Vorratsdatenspeicherung gefährdet digitale Teilhabe"](https://www.heise.de/news/Aus-fuer-offenes-WLAN-Vorratsdatenspeicherung-gefaehrdet-digitale-Teilhabe-11074279.html)
- Der Artikel zitiert die Stellungnahme von Freifunk München und stellt die technischen und rechtlichen Probleme der geplanten Regelung detailliert dar
- Auch andere Fachverbände wie die Bundesanwaltskammer (BRAK) und der eco-Verband der Internetwirtschaft übten Kritik

### Münchener Digitalrat
Teilnahme und Weitergabe von Informationen zur Digital Strategie der [Stadt München](https://muenchen.digital/projekte/digitale-teilhabe/digitalrat.html).

### Chatkontrolle
Kontinuierliche Aufklärungsarbeit und kritische Begleitung der EU-Gesetzgebung zur Chatkontrolle.

## Unterstützung & Spenden

Alle Services werden durch Spenden finanziert:
**[https://spende.ffmuc.net](https://spende.ffmuc.net)**

Die Services umfassen:
- DNS (DoH/DoT/DoQ)
- Jitsi Meet Videokonferenz
- Chat (Mattermost - Migration geplant wegen Policy-Änderungen)
- HedgeDoc
- Wiki
- Gateway-Services

---

## Zusammenfassung

2025 war ein Jahr der Konsolidierung und des Ausbaus für Freifunk München. Trotz Herausforderungen bei der Gewinnung aktiver Helfer:innen konnten wir:

- Stabile Netzwerk-Performance mit über 3.300 Nodes  
- Ausbau der DNS-Services mit modernen Protokollen (HTTP/3, QUIC)  
- Neue Community-Tools (HedgeDoc)  
- Erfolgreiche Unterstützung von Community-Events (39C3)  
- Politisches Engagement für digitale Grundrechte  
- Hardware-Upgrades in den Rechenzentrumsstandorten  

**Für 2026 und darüber hinaus** brauchen wir verstärkt die Unterstützung der Community, um diese wichtige Infrastruktur für digitale Souveränität und Privatsphäre weiter betreiben und ausbauen zu können.

---

*Freifunk München ist eine Initiative für freie Netzwerke und wird getragen vom Freie Netze München e.V.*

**Links:**
- Website: [https://ffmuc.net](https://ffmuc.net)
- Knotenkarte: [https://map.ffmuc.net](https://map.ffmuc.net)
- Wiki: [https://ffmuc.net/wiki](https://ffmuc.net/wiki)
- Chat: [https://chat.ffmuc.net](https://chat.ffmuc.net)
- Mastodon: [@freifunkMUC@social.ffmuc.net](https://social.ffmuc.net/@freifunkMUC)
- Stats: [https://stats.ffmuc.net](https://stats.ffmuc.net)

</section>

<section data-lang="en" class="language-content" markdown="1">

# Freifunk München - 2025 Year in Review

## Introduction

2025 was a significant year for Freifunk München. As a non-commercial initiative for building free (wireless) networks, we were able to further expand our services and strengthen the community.

## Network Statistics

### Overview
- **Online Nodes**: The network shows stable development with an average of over 3,300 active nodes throughout the year
- **Firmware Adoption**: On average, approximately 85-87% of nodes run on current firmware versions
- **Router Diversity**: Over 150 different router models in use

### Top Router Models
The most popular routers in the ffmuc network 2025:
1. Ubiquiti UniFi AC Lite (109 devices, 6%)
2. TP-Link Archer C7 v5 (106 devices, 6%)
3. AVM FRITZ!Box 4040 (83 devices, 5%)
4. Netgear R6120 (77 devices, 4%)
5. QEMU Virtual Machines (62 devices, 3%)

### Internet Gateways
Two main locations ensure connectivity with the following average values over the year:
- **Munich (MUC01)**: RX: average 700-800 Mbps, TX: average 2-3 Gbps
- **Vienna (VIE01)**: RX: average 300-400 Mbps, TX: average 350-450 Mbps

Thanks to [numerous sponsors](https://ffmuc.net/unterstuetzer/), our network has over 300Gbps of connectivity available.

## DNS & Privacy Services

### DNS Service Highlights
Freifunk München operates censorship-free public DNS resolvers as an EU-based, non-profit alternative to commercial providers:

**Technical Details:**
- IPv4: 185.150.99.255 / 5.1.66.255
- IPv6: 2001:678:e68:f000:: / 2001:678:ed0:f000::
- DoH (DNS over HTTPS): https://doh.ffmuc.net/dns-query
- DoT/DoQ (DNS over TLS/QUIC): dot.ffmuc.net / doq.ffmuc.net Port 853

### DNS News 2025

**September 2025**: Migration to HAProxy
- HTTP/3 and QUIC support for DoH servers
- Improved performance and modern protocol support

## Additional Services

### New Services 2025

**HedgeDoc** (April 2025)
- Collaborative Markdown document tool
- Available at: [https://hedgedoc.ffmuc.net](https://hedgedoc.ffmuc.net)
- Free service for the community

### media.ccc.de Mirror
In 2025, FFMUC provides bandwidth for mirroring c3voc videos:
- 80 Gbps available bandwidth
- Peak utilization during 39C3 (7Gbps), average 1-2 Gbps in regular operation
- Traffic monitoring via [public dashboard](https://stats.ffmuc.net/d/aegea5ohylkaoa/ffmuc-media-ccc-de?orgId=1&from=now-24h&to=now&timezone=browser&refresh=30s)

## Freie Netze München e.V. Association

### Association Management Transition

Migration to [new association tool](https://web.meinverein.de/profile/86506) completed and new members gained, including the ability to use direct debit. We now count **93 members**.

### New Services Exclusive to Members
- [VMs](https://vms.ffmuc.net/) for self-management via Incus
- [Wireguard VPN](https://vpn.ffmuc.net/)
- [Password Manager](https://vault.ffmuc.net/)

### Brief Information Websites about the Association
- [https://mitglieder.ffmuc.net/](https://mitglieder.ffmuc.net/)
- [https://spende.ffmuc.net/](https://spende.ffmuc.net/)

### Significant Acquisitions

Support contract for switches extended for 3 years.

## Community & Engagement

### New Refugee Accommodations

In 2025, two more large accommodations were added to the Freifunk network:

**Garching**
- Internet provision for a refugee accommodation
- Over 20 Unifi access points
- [Nanopi R4S as offloader](https://map.ffmuc.net/#/en/map/82342878f006)
- Starlink as uplink

**Unterschleißheim**
- New large accommodation with Freifunk connection
- Omada setup
- [Nanopi R2S](https://map.ffmuc.net/#/en/map/263e34f31f0f)
- Starlink as uplink

These projects continue Freifunk München's long-standing tradition of providing internet access for refugees and socially disadvantaged groups.

### Support for Internet Researchers

We support several Internet research projects with VMs, such as a project on RPKI measurements, Globalping, and other researchers. If you need support for your study work, please contact us.

### Challenges 2025

**Call from July**: "Our association needs you"
The association struggles with a lack of active helpers, which increasingly pushes the organization to its limits. The call for the monthly meeting on July 30, 2025 emphasized the need for more community engagement.

### Events & Public Relations

**Kulturspektakel Gauting** (July 2025)
- Freifunk WLAN throughout the festival grounds
- 7 offloaders and 20 access points in almost all booths
- Uplink via Starlink connections
- Forest stage powered by photovoltaic system
- Several hundred meters of power and network cables laid
- Open-air festival with live music on 3 stages, free admission

**Augsburger Linux-Infotag**
- Booth at [Augsburger Linux-Infotag 2025](https://www.luga.de/static/LIT-2025/)
- Presentation of association activities and services
- Networking with Freifunk Augsburg

[**Corso Leopold**](https://corso-leopold.de) (June 2025)

This year we were again present with a booth: providing interested and curious people with information, giving tips and explaining the project.

**Visit to Freifunk Braunschweig** (July 2025) 

We participated in a joint hackathon on "Project Parker", a new network design from which we hope for more stability and better performance.

**Cross-community action for reuse of a large donation of decommissioned access points**

We invested many hours in integrating the devices from the large donation and hope that they will soon be usable for everyone in OpenWRT. This was done in collaboration with many other communities, freely following the motto "Freifunk connects".

### Regular Meetings
**Online Meetings**
- Every last Wednesday of the month at 7:30 PM
- Online at [https://meet.ffmuc.net/ffmuctreffen](https://meet.ffmuc.net/ffmuctreffen)
- Chat discussions: [https://chat.ffmuc.net](https://chat.ffmuc.net)

**Stammtisch**

Our Stammtisch has been held regularly every 2 months at [MuMaLab](https://munichmakerlab.de) since this year: Socializing, hacking, networking, grilling, discussing, having fun...

### Social Media Presence
Active presence on Mastodon ([@freifunkMUC@social.ffmuc.net](https://social.ffmuc.net/@freifunkMUC)) with:
- 292 posts
- 1.3K followers
- Regular updates on technical topics and community events

## Technical Highlights & Maintenance

### End of Support
**November 2025**: End of support for EdgeRouter X and EdgeRouter X SFP
- Affected users were informed early
- Migration to newer hardware recommended

### Technical Improvements
- [Monitoring of packet loss from all locations](https://stats.ffmuc.net/d/Os3hdxQZk/http-response-monitoring?orgId=1&from=now-1h&to=now&timezone=browser&var-url_name=$__all&var-error_url=$__all&refresh=auto)
- Ubuntu 24.04 updates
- New switch in Vienna data center (Arista DCS-7280SR3E-40YC6-F) and server upgraded to 2x25Gbps

## Political Engagement

### Statement on Minimum Data Retention (November 2025)
Freifunk München [issued a statement on the planned minimum retention of IP addresses for public WLANs](https://ffmuc.net/politik/freifunk/gesetzgebung/2025/11/10/stellungnahme-mindestspeicherung/) and advocated for privacy-friendly solutions. The statement criticizes the technical impracticality of the regulation, the significant data protection risks, and the disproportionate effort for smaller and volunteer operators. Available as PDF at: [Statement as PDF](https://ffmuc.net/assets/posts/Freifunk_Muenchen_Stellungnahme_IP-Adressen-Speicherung.pdf)

**Media Echo**  
The statement received attention in the specialist press:
- **heise online** reported extensively on November 11, 2025 about the Freifunkers' warning with the article ["End of open WLAN? Data retention endangers digital participation"](https://www.heise.de/news/Aus-fuer-offenes-WLAN-Vorratsdatenspeicherung-gefaehrdet-digitale-Teilhabe-11074279.html)
- The article cites Freifunk München's statement and presents the technical and legal problems of the planned regulation in detail
- Other professional associations such as the Federal Bar Association (BRAK) and eco - Association of the Internet Industry also criticized

### Munich Digital Council
Participation and sharing of information on the digital strategy of the [City of Munich](https://muenchen.digital/projekte/digitale-teilhabe/digitalrat.html).

### Chat Control
Continuous education work and critical monitoring of EU legislation on chat control.

## Support & Donations

All services are financed by donations:
**[https://spende.ffmuc.net](https://spende.ffmuc.net)**

The services include:
- DNS (DoH/DoT/DoQ)
- Jitsi Meet video conferencing
- Chat (Mattermost - migration planned due to policy changes)
- HedgeDoc
- Wiki
- Gateway services

---

## Summary

2025 was a year of consolidation and expansion for Freifunk München. Despite challenges in recruiting active helpers, we were able to:

- Stable network performance with over 3,300 nodes  
- Expansion of DNS services with modern protocols (HTTP/3, QUIC)  
- New community tools (HedgeDoc)  
- Successful support of community events (39C3)  
- Political engagement for digital fundamental rights  
- Hardware upgrades in data center locations  

**For 2026 and beyond** we urgently need the support of the community to continue operating and expanding this important infrastructure for digital sovereignty and privacy.

---

*Freifunk München is an initiative for free networks and is supported by Freie Netze München e.V.*

**Links:**
- Website: [https://ffmuc.net](https://ffmuc.net)
- Node Map: [https://map.ffmuc.net](https://map.ffmuc.net)
- Wiki: [https://ffmuc.net/wiki](https://ffmuc.net/wiki)
- Chat: [https://chat.ffmuc.net](https://chat.ffmuc.net)
- Mastodon: [@freifunkMUC@social.ffmuc.net](https://social.ffmuc.net/@freifunkMUC)
- Stats: [https://stats.ffmuc.net](https://stats.ffmuc.net)

</section>

<section data-lang="fr" class="language-content" markdown="1">

# Freifunk München - Rétrospective 2025

## Introduction

2025 a été une année significative pour Freifunk München. En tant qu'initiative non commerciale pour la construction de réseaux libres (sans fil), nous avons pu étendre davantage nos services et renforcer la communauté.

## Statistiques du réseau

### Vue d'ensemble
- **Nœuds en ligne** : Le réseau montre un développement stable avec une moyenne de plus de 3 300 nœuds actifs tout au long de l'année
- **Adoption du firmware** : En moyenne, environ 85-87% des nœuds fonctionnent avec les versions actuelles du firmware
- **Diversité des routeurs** : Plus de 150 modèles de routeurs différents utilisés

### Modèles de routeurs les plus populaires
Les routeurs les plus populaires dans le réseau ffmuc 2025 :
1. Ubiquiti UniFi AC Lite (109 appareils, 6%)
2. TP-Link Archer C7 v5 (106 appareils, 6%)
3. AVM FRITZ!Box 4040 (83 appareils, 5%)
4. Netgear R6120 (77 appareils, 4%)
5. Machines virtuelles QEMU (62 appareils, 3%)

### Passerelles Internet
Deux emplacements principaux assurent la connectivité avec les valeurs moyennes suivantes sur l'année :
- **Munich (MUC01)** : RX : moyenne 700-800 Mbps, TX : moyenne 2-3 Gbps
- **Vienne (VIE01)** : RX : moyenne 300-400 Mbps, TX : moyenne 350-450 Mbps

Grâce à de [nombreux sponsors](https://ffmuc.net/unterstuetzer/), notre réseau dispose de plus de 300 Gbps de connectivité.

## Services DNS et de confidentialité

### Points forts du service DNS
Freifunk München exploite des résolveurs DNS publics sans censure comme alternative non commerciale basée dans l'UE aux fournisseurs commerciaux :

**Détails techniques :**
- IPv4 : 185.150.99.255 / 5.1.66.255
- IPv6 : 2001:678:e68:f000:: / 2001:678:ed0:f000::
- DoH (DNS over HTTPS) : https://doh.ffmuc.net/dns-query
- DoT/DoQ (DNS over TLS/QUIC) : dot.ffmuc.net / doq.ffmuc.net Port 853

### Actualités DNS 2025

**Septembre 2025** : Migration vers HAProxy
- Support HTTP/3 et QUIC pour les serveurs DoH
- Performances améliorées et support de protocoles modernes

## Services supplémentaires

### Nouveaux services 2025

**HedgeDoc** (Avril 2025)
- Outil de document Markdown collaboratif
- Disponible sur : [https://hedgedoc.ffmuc.net](https://hedgedoc.ffmuc.net)
- Service gratuit pour la communauté

### Miroir media.ccc.de
En 2025, FFMUC fournit de la bande passante pour la mise en miroir des vidéos c3voc :
- 80 Gbps de bande passante disponible
- Utilisation maximale pendant 39C3 (7Gbps), moyenne 1-2 Gbps en fonctionnement régulier
- Surveillance du trafic via [tableau de bord public](https://stats.ffmuc.net/d/aegea5ohylkaoa/ffmuc-media-ccc-de?orgId=1&from=now-24h&to=now&timezone=browser&refresh=30s)

## Association Freie Netze München e.V.

### Transition de la gestion de l'association

Migration vers [nouvel outil d'association](https://web.meinverein.de/profile/86506) terminée et nouveaux membres gagnés, y compris la possibilité d'utiliser le prélèvement automatique. Nous comptons maintenant **93 membres**.

### Nouveaux services exclusifs aux membres
- [VMs](https://vms.ffmuc.net/) pour l'auto-gestion via Incus
- [Wireguard VPN](https://vpn.ffmuc.net/)
- [Gestionnaire de mots de passe](https://vault.ffmuc.net/)

### Sites Web d'information sur l'association
- [https://mitglieder.ffmuc.net/](https://mitglieder.ffmuc.net/)
- [https://spende.ffmuc.net/](https://spende.ffmuc.net/)

Pour un résumé complet de toutes les activités de 2025, voir la version allemande ou anglaise.

---

*Freifunk München est une initiative pour les réseaux libres et est soutenue par Freie Netze München e.V.*

**Liens :**
- Site Web : [https://ffmuc.net](https://ffmuc.net)
- Carte des nœuds : [https://map.ffmuc.net](https://map.ffmuc.net)
- Wiki : [https://ffmuc.net/wiki](https://ffmuc.net/wiki)
- Chat : [https://chat.ffmuc.net](https://chat.ffmuc.net)
- Mastodon : [@freifunkMUC@social.ffmuc.net](https://social.ffmuc.net/@freifunkMUC)
- Stats : [https://stats.ffmuc.net](https://stats.ffmuc.net)

</section>

<section data-lang="es" class="language-content" markdown="1">

# Freifunk München - Retrospectiva 2025

## Introducción

2025 fue un año significativo para Freifunk München. Como iniciativa no comercial para la construcción de redes libres (inalámbricas), pudimos ampliar aún más nuestros servicios y fortalecer la comunidad.

## Estadísticas de red

### Resumen
- **Nodos en línea**: La red muestra un desarrollo estable con un promedio de más de 3.300 nodos activos durante todo el año
- **Adopción de firmware**: En promedio, aproximadamente el 85-87% de los nodos ejecutan versiones actuales de firmware
- **Diversidad de routers**: Más de 150 modelos de router diferentes en uso

### Modelos de router más populares
Los routers más populares en la red ffmuc 2025:
1. Ubiquiti UniFi AC Lite (109 dispositivos, 6%)
2. TP-Link Archer C7 v5 (106 dispositivos, 6%)
3. AVM FRITZ!Box 4040 (83 dispositivos, 5%)
4. Netgear R6120 (77 dispositivos, 4%)
5. Máquinas virtuales QEMU (62 dispositivos, 3%)

### Puertas de enlace de Internet
Dos ubicaciones principales aseguran la conectividad con los siguientes valores promedio durante el año:
- **Munich (MUC01)**: RX: promedio 700-800 Mbps, TX: promedio 2-3 Gbps
- **Viena (VIE01)**: RX: promedio 300-400 Mbps, TX: promedio 350-450 Mbps

Gracias a [numerosos patrocinadores](https://ffmuc.net/unterstuetzer/), nuestra red tiene disponibles más de 300Gbps de conectividad.

## Servicios DNS y de privacidad

### Aspectos destacados del servicio DNS
Freifunk München opera resolvedores DNS públicos sin censura como una alternativa sin fines de lucro basada en la UE a los proveedores comerciales:

**Detalles técnicos:**
- IPv4: 185.150.99.255 / 5.1.66.255
- IPv6: 2001:678:e68:f000:: / 2001:678:ed0:f000::
- DoH (DNS over HTTPS): https://doh.ffmuc.net/dns-query
- DoT/DoQ (DNS over TLS/QUIC): dot.ffmuc.net / doq.ffmuc.net Puerto 853

### Noticias DNS 2025

**Septiembre 2025**: Migración a HAProxy
- Soporte HTTP/3 y QUIC para servidores DoH
- Rendimiento mejorado y soporte de protocolos modernos

## Servicios adicionales

### Nuevos servicios 2025

**HedgeDoc** (Abril 2025)
- Herramienta de documento Markdown colaborativa
- Disponible en: [https://hedgedoc.ffmuc.net](https://hedgedoc.ffmuc.net)
- Servicio gratuito para la comunidad

### Espejo media.ccc.de
En 2025, FFMUC proporciona ancho de banda para el espejo de videos c3voc:
- 80 Gbps de ancho de banda disponible
- Utilización máxima durante 39C3 (7Gbps), promedio 1-2 Gbps en operación regular
- Monitoreo de tráfico a través del [panel público](https://stats.ffmuc.net/d/aegea5ohylkaoa/ffmuc-media-ccc-de?orgId=1&from=now-24h&to=now&timezone=browser&refresh=30s)

## Asociación Freie Netze München e.V.

### Transición de gestión de la asociación

Migración a [nueva herramienta de asociación](https://web.meinverein.de/profile/86506) completada y nuevos miembros ganados, incluida la capacidad de usar débito directo. Ahora contamos con **93 miembros**.

### Nuevos servicios exclusivos para miembros
- [VMs](https://vms.ffmuc.net/) para autogestión a través de Incus
- [Wireguard VPN](https://vpn.ffmuc.net/)
- [Gestor de contraseñas](https://vault.ffmuc.net/)

### Sitios web de información sobre la asociación
- [https://mitglieder.ffmuc.net/](https://mitglieder.ffmuc.net/)
- [https://spende.ffmuc.net/](https://spende.ffmuc.net/)

Para un resumen completo de todas las actividades de 2025, consulte la versión alemana o inglesa.

---

*Freifunk München es una iniciativa para redes libres y cuenta con el apoyo de Freie Netze München e.V.*

**Enlaces:**
- Sitio web: [https://ffmuc.net](https://ffmuc.net)
- Mapa de nodos: [https://map.ffmuc.net](https://map.ffmuc.net)
- Wiki: [https://ffmuc.net/wiki](https://ffmuc.net/wiki)
- Chat: [https://chat.ffmuc.net](https://chat.ffmuc.net)
- Mastodon: [@freifunkMUC@social.ffmuc.net](https://social.ffmuc.net/@freifunkMUC)
- Estadísticas: [https://stats.ffmuc.net](https://stats.ffmuc.net)

</section>

<section data-lang="ua" class="language-content" markdown="1">

# Freifunk München - Підсумки року 2025

## Вступ

2025 був значущим роком для Freifunk München. Як некомерційна ініціатива зі створення вільних (бездротових) мереж, ми змогли ще більше розширити наші послуги та зміцнити спільноту.

## Статистика мережі

### Огляд
- **Вузли онлайн**: Мережа показує стабільний розвиток з середньою кількістю понад 3 300 активних вузлів протягом року
- **Прийняття прошивки**: У середньому близько 85-87% вузлів працюють на поточних версіях прошивки
- **Різноманітність маршрутизаторів**: Використовується понад 150 різних моделей маршрутизаторів

### Найпопулярніші моделі маршрутизаторів
Найпопулярніші маршрутизатори в мережі ffmuc 2025:
1. Ubiquiti UniFi AC Lite (109 пристроїв, 6%)
2. TP-Link Archer C7 v5 (106 пристроїв, 6%)
3. AVM FRITZ!Box 4040 (83 пристрої, 5%)
4. Netgear R6120 (77 пристроїв, 4%)
5. Віртуальні машини QEMU (62 пристрої, 3%)

### Інтернет-шлюзи
Два основні розташування забезпечують підключення з наступними середніми значеннями протягом року:
- **Мюнхен (MUC01)**: RX: в середньому 700-800 Мбіт/с, TX: в середньому 2-3 Гбіт/с
- **Відень (VIE01)**: RX: в середньому 300-400 Мбіт/с, TX: в середньому 350-450 Мбіт/с

Завдяки [численним спонсорам](https://ffmuc.net/unterstuetzer/), наша мережа має доступними понад 300 Гбіт/с підключення.

## Служби DNS та конфіденційності

### Основні моменти служби DNS
Freifunk München експлуатує публічні DNS-розпрацьовувачі без цензури як некомерційну альтернативу на базі ЄС комерційним постачальникам:

**Технічні деталі:**
- IPv4: 185.150.99.255 / 5.1.66.255
- IPv6: 2001:678:e68:f000:: / 2001:678:ed0:f000::
- DoH (DNS over HTTPS): https://doh.ffmuc.net/dns-query
- DoT/DoQ (DNS over TLS/QUIC): dot.ffmuc.net / doq.ffmuc.net Порт 853

### Новини DNS 2025

**Вересень 2025**: Міграція на HAProxy
- Підтримка HTTP/3 та QUIC для серверів DoH
- Покращена продуктивність та підтримка сучасних протоколів

## Додаткові послуги

### Нові послуги 2025

**HedgeDoc** (Квітень 2025)
- Інструмент для спільної роботи з документами Markdown
- Доступний за адресою: [https://hedgedoc.ffmuc.net](https://hedgedoc.ffmuc.net)
- Безкоштовна послуга для спільноти

### Дзеркало media.ccc.de
У 2025 році FFMUC надає пропускну здатність для дзеркалювання відео c3voc:
- 80 Гбіт/с доступної пропускної здатності
- Пікове використання під час 39C3 (7 Гбіт/с), в середньому 1-2 Гбіт/с у звичайному режимі
- Моніторинг трафіку через [публічну панель](https://stats.ffmuc.net/d/aegea5ohylkaoa/ffmuc-media-ccc-de?orgId=1&from=now-24h&to=now&timezone=browser&refresh=30s)

## Асоціація Freie Netze München e.V.

### Перехід управління асоціацією

Міграція на [новий інструмент асоціації](https://web.meinverein.de/profile/86506) завершена, отримано нових членів, включаючи можливість використання прямого дебету. Тепер ми налічуємо **93 члени**.

### Нові послуги виключно для членів
- [ВМ](https://vms.ffmuc.net/) для самостійного управління через Incus
- [Wireguard VPN](https://vpn.ffmuc.net/)
- [Менеджер паролів](https://vault.ffmuc.net/)

### Інформаційні веб-сайти про асоціацію
- [https://mitglieder.ffmuc.net/](https://mitglieder.ffmuc.net/)
- [https://spende.ffmuc.net/](https://spende.ffmuc.net/)

Для повного огляду всіх діяльностей 2025 року дивіться німецьку або англійську версію.

---

*Freifunk München - це ініціатива для вільних мереж, яку підтримує Freie Netze München e.V.*

**Посилання:**
- Веб-сайт: [https://ffmuc.net](https://ffmuc.net)
- Карта вузлів: [https://map.ffmuc.net](https://map.ffmuc.net)
- Вікі: [https://ffmuc.net/wiki](https://ffmuc.net/wiki)
- Чат: [https://chat.ffmuc.net](https://chat.ffmuc.net)
- Mastodon: [@freifunkMUC@social.ffmuc.net](https://social.ffmuc.net/@freifunkMUC)
- Статистика: [https://stats.ffmuc.net](https://stats.ffmuc.net)

</section>
