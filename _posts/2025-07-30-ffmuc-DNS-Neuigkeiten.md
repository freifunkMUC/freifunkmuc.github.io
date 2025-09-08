---
layout: posts
title: "Freifunk München DNS Neuigkeiten"
date: 2025-09-08 10:00:00
categories: freifunkmuc
---

## Umstellung unserer DoH-Server auf HAProxy bringt HTTP/3 und QUIC Unterstützung

Wir haben unsere **DNS-over-HTTPS (DoH) Server** von NGINX auf **HAProxy** umgestellt. Mit dieser Umstellung können unsere DoH-Server nun **HTTP/3** sowie das moderne **QUIC-Protokoll** unterstützen. Dies führt zu deutlich reduzierten Latenzzeiten und verbessertem Nutzererlebnis bei der DNS-Abfrage.

[![Screenshot der Latenzverbesserung](/assets/posts/2025-09-08-latenzzeiten.png){: style="max-height:300px;"}][dns-stats]

[![Screenshot für QUIC und HTTP3](/assets/posts/2025-09-08-quic-http.png){: style="max-height:300px;"}][http3check]


### QUIC jetzt auch im normalen DNS

Neben den DoH-Servern unterstützen wir jetzt auch unseren "normalen" DNS-Server mit **QUIC**. Diese Funktion wurde auf unserem **dnsdist-Server** aktiviert und sorgt für schnelle und sichere DNS-Abfragen auch außerhalb von HTTPS.


## Adressen & Protokolle unserer DNS-Server

Unsere DNS-Server sind sowohl als „normale“ DNS-Server (also für einfaches, unverschlüsseltes DNS über UDP/TCP) nutzbar, als auch über folgende Protokolle:

- DNS over TLS (DoT): [tls://dot.ffmuc.net](tls://dot.ffmuc.net)
- DNS over HTTPS (DoH): [https://doh.ffmuc.net/dns-query](https://doh.ffmuc.net/dns-query)
- DNS over HTTP/3: [h3://doh.ffmuc.net/dns-query](h3://doh.ffmuc.net/dns-query)
- DNS over QUIC: [quic://doq.ffmuc.net](quic://doq.ffmuc.net)

Für die Konfiguration gelten folgende Adressen & Domains:

- **doh.ffmuc.net** | **dot.ffmuc.net** | **doq.ffmuc.net**  
  IPv4: `5.1.66.255` / `185.150.99.255`  
  IPv6: `2001:678:e68:f000::` / `2001:678:ed0:f000::`  

Direkte DoH-URL:  
[https://doh.ffmuc.net/dns-query](https://doh.ffmuc.net/dns-query)

Weitere Infos zur Umstellung:
- [https://social.ffmuc.net/@freifunkMUC/115163642228685280](https://social.ffmuc.net/@freifunkMUC/115163642228685280)
- [https://social.ffmuc.net/@freifunkMUC/115150492031769809](https://social.ffmuc.net/@freifunkMUC/115150492031769809)
- [https://social.ffmuc.net/@freifunkMUC/115146964709056754](https://social.ffmuc.net/@freifunkMUC/115146964709056754)

---

[dns-stats]: https://stats.ffmuc.net/goto/OxeFxs9Ng?orgId=1
[http3check]: https://http3check.net/?host=doh.ffmuc.net