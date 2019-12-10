---
layout: post
title:  "DNSCrypt Unterstützung"
date:   2019-12-10 10:00:00
categories: freifunkmuc
---

Nachdem wir vor einigen Monaten angekündigt haben, dass wir [DoH und DoT unterstützen](/freifunkmuc/2019/09/16/doh-dot-ffmuc/) haben wir uns nun auch daran gemacht und DNSCrypt einzurichten.

Wie DNS-over-HTTPS und DNS-over-TLS versucht DNSCrypt eine Möglichkeit zu bieten verschlüsselt DNS-Abfragen durchzuführen.
Für mehr Details dafür sei aber mal auf die Webseite [dnscrypt.info](https://dnscrypt.info/) verwiesen.

Wir nutzen für DoH und DoT [dnsdist](https://dnsdist.org/) als Software und sie ermöglicht es uns recht einfach auch [DNSCrypt](https://dnsdist.org/guides/dnscrypt.html) zu aktivieren.
Dies haben wir jetzt auch getan, sodass ihr auch diesen Weg nutzen könnt um eure Abfragen verschlüsselt an uns zu schicken.

Nun aber zu den Informationen, die ihr evtl. braucht um unseren Resolver bei euch in den Geräten einzutragen:

```
IP-Adressen:  195.30.94.28 / 2001:608:a01::3
Port:         8443

Fingerprint:  07D0:7AF1:CFDC:5D99:769D:3F02:6690:A704:4965:C274:276C:791C:AEF5:AEF3:B90C:46FA 
Providername: 2.dnscrypt-cert.ffmuc.net
```

Wenn ihr es euch einfach machen wollt (oder eine Software verwendet, die nur sdns-Einträge unterstützt), könnt ihr dies eintragen:
```
IPv4:
sdns://AQcAAAAAAAAAETE5NS4zMC45NC4yODo4NDQzIAfQevHP3F2Zdp0_AmaQpwRJZcJ0J2x5HK71rvO5DEb6GTIuZG5zY3J5cHQtY2VydC5mZm11Yy5uZXQ

IPv6: 
sdns://AQcAAAAAAAAAFlsyMDAxOjYwODphMDE6OjNdOjg0NDMgB9B68c_cXZl2nT8CZpCnBEllwnQnbHkcrvWu87kMRvoZMi5kbnNjcnlwdC1jZXJ0LmZmbXVjLm5ldA
```

## Statistiken
Wir haben unsere [Statusseite für DoH und DoT](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot?orgId=1&refresh=1m) erweitert, sodass auch DNSCrypt-Anfragen angezeigt werden.
Da es alles in einem Programm zusammenläuft wissen wir aber auch nicht mehr als das.

## Weiteres

Wenn ihr nach Clients sucht, die eins (oder mehr) der verschlüsselten Protokolle unterstützen, findet ihr auf [dnscrypt.info](https://dnscrypt.info) eine Liste mit [Implementierungen](https://dnscrypt.info/implementations).
Wir ersparen uns an der Stelle Kopien von Dokumentationen und verweisen einfach darauf.

Ihr seid aber im [Chat](https://chat.ffmuc.net) willkommen, wenn ihr Fragen oder Anregungen zu Freifunk oder anderen Dingen die wir tun (z.B. unser DNS-Angebot) habt.