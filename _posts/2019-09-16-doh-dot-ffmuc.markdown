---
layout: post
title:  "DNS-over-HTTPS und DNS-over-TLS Unterstützung"
date:   2019-09-16 10:00:00
categories: freifunkmuc
---

Sicher habt ihr schon von dem Thema gehört, welches zur Zeit groß durch die [IT-News](https://www.golem.de/news/wegen-cloudflare-openbsd-deaktiviert-doh-im-firefox-browser-1909-143884.html) geistert.
Mozilla wird in Firefox [Cloudflare](https://cloudflare.com) als DoH-Server integrieren und standardmäßig aktivieren.
An sich ist es keine schlechte Idee DNS Abfragen zu verschlüsseln, damit in offenen Netzen (wie Freifunk) diese nicht mitgelesen werden können.
Allerdings ist es vielen Nutzern und auch uns ein Dorn im Auge, per default einen Provider aus Amerika einzusetzen.

Deswegen haben wir für euch einen DoH/DoT Server aufgesetzt, den ihr zum Beispiel direkt in Firefox eintragen, per App nutzen oder mit einem sonstigen DNS Server vereinen könnt.

Wir haben uns zudem auch auf der Seite des [DNSCrypt-Projektes](https://dnscrypt.info/public-servers/) eintragen lassen, wodurch wir automatisch bei den Resolvern in der App [DNSCloak](https://apps.apple.com/de/app/dnscloak-secure-dns-client/id1452162351) (iOS) oder bei [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) zu finden sind.

Adressen:

```
doh.ffmuc.net - 195.30.94.28 / 2001:608:a01::3
dot.ffmuc.net - 195.30.94.28 / 2001:608:a01::3
```

## Firefox

Die Einstellungen in Firefox können bequem per Oberfläche gemacht werden. Dazu gebt ihr in die Adresszeile `about:preferences#general` ein und folgt dann den Screenshots.
Für die Netzwerkeinstellungen müsst ihr ganz nach unten scrollen.

![Preferences](/assets/2019-09-16-doh-firefox-network.png)
![DoHSettings](/assets/2019-09-16-doh-firefox-settings.png)

Wenn alles geklappt hat, könnt ihr einen [DNSLeak-Test](http://dns-leak.com) machen und das Ergebnis sollte wie folgt aussehen:

![DoHSuccess](/assets/2019-09-16-doh-success.png)

## DNSCloak (iOS)

Unter iOS installiert ihr die App DNSCloak und wählt die FFMUC-Server per Suche aus:
![DNSCloak](/assets/2019-09-16-doh-dnscloak.jpeg)

## Android 9

In Android (ab Android 9) geht ihr in eure "Einstellungen" zu "Wi-Fi & Internet".
Unten ist ein Feld "Privates DNS". Wenn ihr darauf klickt taucht folgender Dialog auf:
![PrivatesDNS-Details](/assets/2019-09-16-dot-android-details.jpeg)

Nachdem ihr auf "Speichern" geklickt habt, taucht "dot.ffmuc.net" in der Übersicht auf:
![PrivatesDNS-Overview](/assets/2019-09-16-dot-android-overview.jpeg)

## Android < 9
Falls ihr ein Android-System habt, welches älter als Android 9 ist, müsst ihr auf andere Apps zurückgreifen.<br />
Unsere aktuelle Empfehlung ist "Infra" ([PlayStore-Link](https://play.google.com/store/apps/details?id=app.intra)).

Ihr richtet den Einstellungen kann man den "DNS-over-HTTPS-Server auswählen".<br />
Dort tragt ihr als "Benutzerdefinierte Server-URL" `https://doh.ffmuc.net/dns-query` ein:
![DoH-Infra-Einstellungen](/assets/2019-09-16-doh-infra-settings.jpeg)

Wenn ihr es dann aktiviert, kann es dann so aussehen:
![DoH-Infra-Overview](/assets/2019-09-16-doh-infra-overview.jpeg)
![DoH-Infra-Details](/assets/2019-09-16-doh-infra-details.jpeg)

## Unbound
Falls ihr bei euch unbound als Resolver benutzt, ist das Hinzufügen eines DoT-Servers sehr einfach.
Ihr fügt zu eurer "normalen" Konfiguration folgendes hinzu:

```
 forward-zone:
        name: "."
        forward-addr: 195.30.94.28@853#dot.ffmuc.net
        forward-addr: 2001:608:a01::3@853#dot.ffmuc.net
```

## Statistiken
Natürlich gibt es auch eine ausführliche [Statusseite](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot?orgId=1&refresh=1m) auf der ihr alle möglichen Statistiken zu dem Dienst ansehen könnt.

## Mehr zum Thema
Wer noch mehr zu dem Thema wissen möchte, dem seien folgende Talks (englisch) empfohlen:

- [NLNOG 2019 - DNS over HTTPS considerations - Bert Hubert](https://www.youtube.com/watch?v=pjin3nv8jAo)
- [CCCamp 2019 - DoH or Don't](https://media.ccc.de/v/Camp2019-10213-doh_or_don_t )
