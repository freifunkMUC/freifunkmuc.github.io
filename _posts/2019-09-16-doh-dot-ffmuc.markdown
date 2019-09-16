---
layout: post
title:  "DNS-over-HTTPS und DNS-over-TLS Unterstützung"
date:   2019-09-16 10:00:00
categories: freifunkmuc
---

Sicher habt ihr schon von dem Thema gehört, welches zur Zeit groß durch die [IT-News](https://www.golem.de/news/wegen-cloudflare-openbsd-deaktiviert-doh-im-firefox-browser-1909-143884.html) geistert. Mozilla wird in Firefox [Cloudflare](https://cloudflare.com) als DoH Server integrieren und standardmäßig aktivieren. An sich ist es keine schlechte Idee DNS Abfragen zu verschlüsseln, damit in offenen Netzen (wie Freifunk) keine Anfragen mitgelesen werden können. Allerdings ist es vielen Nutzern und auch uns ein Dorn im Auge, per default einen Provider aus Amerika einzusetzen.

Deswegen haben wir für euch einen DoH/DoT Server aufgesetzt, den ihr zum Beispiel direkt in Firefox eintragen könnt, per App nutzen oder mit einem sonstigen DNS Server vereinen könnt.

Wir haben uns zu dem auch auf der Seite des [DNSCrypt Projektes](https://dnscrypt.info/public-servers/) eintragen lassen, was uns automatisch auch zu den Resolvern in der App [DNSCloak](https://apps.apple.com/de/app/dnscloak-secure-dns-client/id1452162351) (iOS) oder dem [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) hinzufügt.

Adressen:

```
doh.ffmuc.net - 195.30.94.28 / 2001:608:a01::3
dot.ffmuc.net - 195.30.94.28 / 2001:608:a01::3
```

## Firefox

Die Einstellungen in Firefox können bequem per Oberfläche gemacht werden. Dazu gebt ihr in die Addresszeile `about:preferences#general` ein. Und folgt dann den Screenshots. Für die Netzwerkeinstellungen müsst ihr ganz nach unten scrollen.

![Preferences](/assets/doh-network.png)
![DoHSettings](/assets/doh-settings.png)

Wenn alles geklappt hat, könnt ihr einen [DNSLeak-Test](http://dns-leak.com) machen und das Ergebnis sollte wie folgt aussehen.

![DoHSuccess](/assets/doh-success.png)

## DNSCloak

Unter iOS installiert ihr die App DNSCloak und wählt die FFMUC Server per Suche aus.
![DNSCloak](/assets/dnscloak.jpeg)

## Unbound
Falls ihr zuhause unbound als Resolver benutzt, ist das hinzufügen eines DoT Servers sehr einfach.

```
 forward-zone:
        name: "."
        forward-addr: 195.30.94.28@853#dot.ffmuc.net
        forward-addr: 2001:608:a01::3@853#dot.ffmuc.net
```

## Statistiken
Natürlich, gibt es auch eine ausführliche [Statusseite](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot?orgId=1&refresh=1m) auf der ihr alle möglichen Statistiken zu dem Dienst ansehen könnt.

## Mehr zum Thema
Wer noch mehr zu dem Thema wissen möchte, dem seien folgende Talks (englisch) empfohlen:

- [NLNOG 2019 - DNS over HTTPS considerations - Bert Hubert](https://www.youtube.com/watch?v=pjin3nv8jAo&list=PLZZnjVUUZQgTAnr0nREB_MP4T8a13Qi8n)
- [CCCamp 2019 - DoH or Don't](https://media.ccc.de/v/Camp2019-10213-doh_or_don_t )