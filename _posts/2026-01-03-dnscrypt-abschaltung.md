---
layout: posts
title: "Deprecating DNScrypt on the FFMUC DNS Resolver"
date: 2026-01-03 16:00:00 +0200
categories: services dns
author: Freifunk München / Freie Netze München e.V.
--- 

[Deutsche Übersetzung](#abschaltung-von-dnscrypt) darunter / [German translation](#abschaltung-von-dnscrypt) below!

## Disabling DNSCrypt

We have decided to disable the DNSCrypt endpoints of our [public DNS resolvers](https://ffmuc.net/wiki/doku.php?id=knb:dohdot) after the **end of February**.

We repeatedly get reports about timeouts and other issues, which we can't troubleshoot effectively unfortunately, primarily because nobody in our volunteer admin team uses DNSCrypt themselves.

Additionally, the usage counts are comparatively low, as can be seen in our [public statistics](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot).

We prefer not to offer a privacy-critical service at all rather than in a broken state, and instead want to point you to the modern alternative protocols, which we support:

## Alternatives

- DNS over TLS (DoT) `tls://dot.ffmuc.net`
- DNS over QUIC (DoQ) `quic://doq.ffmuc.net`
- DNS over HTTPS (DoH) `https://doh.ffmuc.net`
- DNS over HTTP/3 (DoH3) `h3://doh.ffmuc.net`

(see our more detailed wiki page on this: <https://ffmuc.net/wiki/doku.php?id=knb:dohdot>)

If you have been using `dnscrypt-proxy` so far, it already supports these protocols!

If however you want or are required to use DNSCrypt, there is a list of [alternative providers](https://dnscrypt.info/public-servers/).

---

If you have questions or comments, please reach out to us in our chat: <https://chat.ffmuc.net>

---


## Abschaltung von DNSCrypt

Wir haben uns dazu entschlossen, **nach Ende Februar 2026** die DNSCrypt Endpoints von unseren [öffentlichen DNS Resolvern](https://ffmuc.net/wiki/doku.php?id=knb:dohdot) abzuschalten.

Wir bekommen immer wieder Meldungen bezüglich Timeouts und anderer Fehler, die wir aber leider nicht vernünftig troubleshooten können, insbesondere da im ehrenamtlichen Team der Admins kein DNSCrypt-Nutzer/keine DNSCrypt-Nutzerin ist.

Die Nutzungszahlen sind auch vergleichweise gering, wie in unseren [öffentlichen Statistiken](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot) zu sehen ist. 

Wir möchten einen Privacy-kritischen Service lieber gar nicht als fehlerhaft zur Verfügung stellen, und weisen stattdessen auf die modernen alternativen Protokolle hin, die wir unterstützen:

## Alternativen

- DNS over TLS (DoT) `tls://dot.ffmuc.net`
- DNS over QUIC (DoQ) `quic://doq.ffmuc.net`
- DNS over HTTPS (DoH) `https://doh.ffmuc.net`
- DNS over HTTP/3 (DoH3) `h3://doh.ffmuc.net`

(siehe unsere detailierte Wiki-Seite dazu: <https://ffmuc.net/wiki/doku.php?id=knb:dohdot>)

Falls ihr die Software `dnscrypt-proxy` einsetzt, werden diese Protokolle auch bereits unterstützt!

Solltet ihr aber speziell das DNSCrypt-Protokoll verwenden wollen/müssen, gibt es eine Liste an [alternativen Anbietern](https://dnscrypt.info/public-servers/).

---

Bei Fragen oder Anmerkungen könnt ihr euch jederzeit bei uns im Chat melden: <https://chat.ffmuc.net>
