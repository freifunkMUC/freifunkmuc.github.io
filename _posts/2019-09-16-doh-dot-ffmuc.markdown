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
doh.ffmuc.net - IPv4: 5.1.66.255 / 185.150.99.255 IPv6: 2001:678:e68:f000:: / 2001:678:ed0:f000::
dot.ffmuc.net - IPv4: 5.1.66.255 / 185.150.99.255 IPv6: 2001:678:e68:f000:: / 2001:678:ed0:f000::
https://doh.ffmuc.net/dns-query
```
## Einrichtung

Um die Einrichtung zu erleichtern, könnt ihr [in unserem Wiki](https://ffmuc.net/wiki/doku.php?id=knb:dohdot) Anleitungen für verschiedene Geräte (mit Screenshots) ansehen.

## Statistiken
Natürlich gibt es auch eine ausführliche [Statusseite](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot?orgId=1&refresh=1m) auf der ihr alle möglichen Statistiken zu dem Dienst ansehen könnt.

## Mehr zum Thema
Wer noch mehr zu dem Thema wissen möchte, dem seien folgende Talks (englisch) empfohlen:

- [NLNOG 2019 - DNS over HTTPS considerations - Bert Hubert](https://www.youtube.com/watch?v=pjin3nv8jAo)
- [CCCamp 2019 - DoH or Don't](https://media.ccc.de/v/Camp2019-10213-doh_or_don_t )
