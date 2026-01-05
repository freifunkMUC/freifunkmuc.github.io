---
layout: single
title: DNS-Privacy
permalink: /dns-privacy/
---

# Freifunk München DNS Resolver — Privacy & Terms of Use

[Deutsche Version ↓](#deutsche-version)

---

## English Version

## Freifunk München DNS Resolver — Privacy & Terms of Use

*(aligned with RFC 8932 – BCP 232)*

**Service name:** Freifunk München Public DNS / DNS Privacy Resolver  
**Operator:** **Freie Netze München e.V.**, operating the service on behalf of the **Freifunk München** community network  
**Website:** [https://ffmuc.net](https://ffmuc.net)  
**Service information:**

* DNS: [https://ffmuc.net/wiki/doku.php?id=knb:dns](https://ffmuc.net/wiki/doku.php?id=knb:dns)
* DoH / DoT / DoQ: [https://ffmuc.net/wiki/knb:dohdot](https://ffmuc.net/wiki/knb:dohdot)
* **RFC 8932 – Recommendations for DNS Privacy Service Operators:**
  [https://datatracker.ietf.org/doc/html/rfc8932](https://datatracker.ietf.org/doc/html/rfc8932)

---

### 1) Scope

This document describes how the public recursive DNS resolvers provided by Freie Netze München e.V. for the Freifunk München network are operated, including privacy, logging, and security practices.
It follows the recommendations of **RFC 8932 – "Recommendations for DNS Privacy Service Operators (BCP 232)"**.

---

### 2) Provided services

The resolver infrastructure supports:

* **Plain DNS** over UDP/TCP port 53
* **DNS over HTTPS (DoH)**
* **DNS over TLS (DoT)**
* **DNS over QUIC (DoQ)**

Public endpoints and IP addresses are published on the Freifunk München wiki pages linked above.

---

### 3) Transport security

Users are encouraged to use encrypted DNS transports (DoH, DoT or DoQ).
These protocols protect DNS traffic against passive monitoring and manipulation between client and resolver.

---

### 4) Logging policy

The Freifunk München DNS resolvers follow a **data-minimization approach**:

* The service does **not retain identifiable per-user DNS query logs**.
* No long-term storage of full query names linked to client IP addresses takes place.
* For operational reasons (e.g. rate limiting, abuse protection), the resolvers maintain **temporary per-IP query counters**.
* Only **aggregated statistics** (e.g. total query volume, error rates) are stored for service monitoring and capacity planning.

---

### 5) Data retention

* **Aggregate statistics:** retained as needed for operation and planning.
* **Rate-limit counters:** retained only as long as required for technical enforcement.
* **Per-user historical DNS query logs:** not retained.

---

### 6) Data sharing

* Freie Netze München e.V. does **not sell DNS query data**.
* DNS data is not shared with third parties for tracking, advertising or profiling.
* Queries are resolved directly against authoritative DNS servers on the Internet.

---

### 7) Filtering and response integrity

The resolver operates as a **general-purpose recursive DNS service** and does not perform content filtering or censorship by default.
Any future filtering policies will be documented publicly.

---

### 8) DNSSEC

If DNSSEC validation is enabled, invalid or forged responses are rejected to ensure integrity.

---

### 9) Abuse handling and legal obligations

Freie Netze München e.V. handles abuse reports and lawful requests in accordance with German and EU law.
Due to the minimal logging policy, the ability to provide historical user-specific DNS data is technically limited.

---

### 10) Policy changes

This statement will be updated whenever resolver operation or privacy practices change.

---

### Short version

**Freifunk München DNS / DoH / DoT / DoQ** is operated by **Freie Netze München e.V. on behalf of Freifunk München**.
We support encrypted DNS, minimize logging, do not sell or share DNS data, and operate according to **RFC 8932**:
[https://datatracker.ietf.org/doc/html/rfc8932](https://datatracker.ietf.org/doc/html/rfc8932)

---

## Deutsche Version

## Freifunk München DNS Resolver — Datenschutz & Nutzungsbedingungen

*(in Übereinstimmung mit RFC 8932 – BCP 232)*

**Dienstname:** Freifunk München Public DNS / DNS Privacy Resolver  
**Betreiber:** **Freie Netze München e.V.**, betreibt den Dienst im Auftrag des Community-Netzwerks **Freifunk München**  
**Website:** [https://ffmuc.net](https://ffmuc.net)  
**Dienstinformationen:**

* DNS: [https://ffmuc.net/wiki/doku.php?id=knb:dns](https://ffmuc.net/wiki/doku.php?id=knb:dns)
* DoH / DoT / DoQ: [https://ffmuc.net/wiki/knb:dohdot](https://ffmuc.net/wiki/knb:dohdot)
* **RFC 8932 – Empfehlungen für DNS-Privacy-Dienstanbieter:**
  [https://datatracker.ietf.org/doc/html/rfc8932](https://datatracker.ietf.org/doc/html/rfc8932)

---

### 1) Geltungsbereich

Dieses Dokument beschreibt, wie die öffentlichen rekursiven DNS-Resolver, die von Freie Netze München e.V. für das Freifunk München Netzwerk bereitgestellt werden, betrieben werden, einschließlich Datenschutz-, Logging- und Sicherheitspraktiken.
Es folgt den Empfehlungen von **RFC 8932 – "Recommendations for DNS Privacy Service Operators (BCP 232)"**.

---

### 2) Bereitgestellte Dienste

Die Resolver-Infrastruktur unterstützt:

* **Plain DNS** über UDP/TCP Port 53
* **DNS over HTTPS (DoH)**
* **DNS over TLS (DoT)**
* **DNS over QUIC (DoQ)**

Öffentliche Endpunkte und IP-Adressen sind auf den oben verlinkten Freifunk München Wiki-Seiten veröffentlicht.

---

### 3) Transportverschlüsselung

Nutzer werden ermutigt, verschlüsselte DNS-Transporte (DoH, DoT oder DoQ) zu verwenden.
Diese Protokolle schützen DNS-Verkehr gegen passive Überwachung und Manipulation zwischen Client und Resolver.

---

### 4) Logging-Richtlinie

Die Freifunk München DNS-Resolver folgen einem **Datenminimierungsansatz**:

* Der Dienst speichert **keine identifizierbaren benutzerspezifischen DNS-Abfrage-Logs**.
* Es findet keine Langzeitspeicherung vollständiger Abfragenamen verknüpft mit Client-IP-Adressen statt.
* Aus operativen Gründen (z.B. Ratenbegrenzung, Missbrauchsschutz) führen die Resolver **temporäre IP-basierte Abfragezähler**.
* Nur **aggregierte Statistiken** (z.B. Gesamtabfragevolumen, Fehlerraten) werden für Service-Überwachung und Kapazitätsplanung gespeichert.

---

### 5) Datenspeicherung

* **Aggregierte Statistiken:** nach Bedarf für Betrieb und Planung aufbewahrt.
* **Ratenbegrenzungszähler:** nur so lange aufbewahrt, wie für die technische Durchsetzung erforderlich.
* **Benutzerspezifische historische DNS-Abfrage-Logs:** werden nicht aufbewahrt.

---

### 6) Datenweitergabe

* Freie Netze München e.V. **verkauft keine DNS-Abfragedaten**.
* DNS-Daten werden nicht zu Tracking-, Werbe- oder Profilbildungszwecken an Dritte weitergegeben.
* Abfragen werden direkt gegen autoritative DNS-Server im Internet aufgelöst.

---

### 7) Filterung und Antwortintegrität

Der Resolver arbeitet als **allgemeiner rekursiver DNS-Dienst** und führt standardmäßig keine Inhaltsfilterung oder Zensur durch.
Zukünftige Filterrichtlinien werden öffentlich dokumentiert.

---

### 8) DNSSEC

Wenn DNSSEC-Validierung aktiviert ist, werden ungültige oder gefälschte Antworten abgelehnt, um die Integrität sicherzustellen.

---

### 9) Missbrauchsbehandlung und rechtliche Verpflichtungen

Freie Netze München e.V. behandelt Missbrauchsmeldungen und rechtmäßige Anfragen in Übereinstimmung mit deutschem und EU-Recht.
Aufgrund der minimalen Logging-Richtlinie ist die Möglichkeit, historische benutzerspezifische DNS-Daten bereitzustellen, technisch eingeschränkt.

---

### 10) Richtlinienänderungen

Diese Erklärung wird aktualisiert, wenn sich der Resolver-Betrieb oder die Datenschutzpraktiken ändern.

---

### Kurzfassung

**Freifunk München DNS / DoH / DoT / DoQ** wird von **Freie Netze München e.V. im Auftrag von Freifunk München** betrieben.
Wir unterstützen verschlüsseltes DNS, minimieren Logging, verkaufen oder teilen keine DNS-Daten und arbeiten gemäß **RFC 8932**:
[https://datatracker.ietf.org/doc/html/rfc8932](https://datatracker.ietf.org/doc/html/rfc8932)

---

*(aligned with RFC 8932 – BCP 232)*

**Service name:** Freifunk München Public DNS / DNS Privacy Resolver  
**Operator:** **Freie Netze München e.V.**, operating the service on behalf of the **Freifunk München** community network  
**Website:** [https://ffmuc.net](https://ffmuc.net)  
**Service information:**

* DNS: [https://ffmuc.net/wiki/doku.php?id=knb:dns](https://ffmuc.net/wiki/doku.php?id=knb:dns)
* DoH / DoT / DoQ: [https://ffmuc.net/wiki/knb:dohdot](https://ffmuc.net/wiki/knb:dohdot)
* **RFC 8932 – Recommendations for DNS Privacy Service Operators:**
  [https://datatracker.ietf.org/doc/html/rfc8932](https://datatracker.ietf.org/doc/html/rfc8932)

---

### 1) Scope

This document describes how the public recursive DNS resolvers provided by Freie Netze München e.V. for the Freifunk München network are operated, including privacy, logging, and security practices.
It follows the recommendations of **RFC 8932 – "Recommendations for DNS Privacy Service Operators (BCP 232)"**.

---

### 2) Provided services

The resolver infrastructure supports:

* **Plain DNS** over UDP/TCP port 53
* **DNS over HTTPS (DoH)**
* **DNS over TLS (DoT)**
* **DNS over QUIC (DoQ)**

Public endpoints and IP addresses are published on the Freifunk München wiki pages linked above.

---

### 3) Transport security

Users are encouraged to use encrypted DNS transports (DoH, DoT or DoQ).
These protocols protect DNS traffic against passive monitoring and manipulation between client and resolver.

---

### 4) Logging policy

The Freifunk München DNS resolvers follow a **data-minimization approach**:

* The service does **not retain identifiable per-user DNS query logs**.
* No long-term storage of full query names linked to client IP addresses takes place.
* For operational reasons (e.g. rate limiting, abuse protection), the resolvers maintain **temporary per-IP query counters**.
* Only **aggregated statistics** (e.g. total query volume, error rates) are stored for service monitoring and capacity planning.

---

### 5) Data retention

* **Aggregate statistics:** retained as needed for operation and planning.
* **Rate-limit counters:** retained only as long as required for technical enforcement.
* **Per-user historical DNS query logs:** not retained.

---

### 6) Data sharing

* Freie Netze München e.V. does **not sell DNS query data**.
* DNS data is not shared with third parties for tracking, advertising or profiling.
* Queries are resolved directly against authoritative DNS servers on the Internet.

---

### 7) Filtering and response integrity

The resolver operates as a **general-purpose recursive DNS service** and does not perform content filtering or censorship by default.
Any future filtering policies will be documented publicly.

---

### 8) DNSSEC

If DNSSEC validation is enabled, invalid or forged responses are rejected to ensure integrity.

---

### 9) Abuse handling and legal obligations

Freie Netze München e.V. handles abuse reports and lawful requests in accordance with German and EU law.
Due to the minimal logging policy, the ability to provide historical user-specific DNS data is technically limited.

---

### 10) Policy changes

This statement will be updated whenever resolver operation or privacy practices change.

---

### Short version

**Freifunk München DNS / DoH / DoT / DoQ** is operated by **Freie Netze München e.V. on behalf of Freifunk München**.
We support encrypted DNS, minimize logging, do not sell or share DNS data, and operate according to **RFC 8932**:
[https://datatracker.ietf.org/doc/html/rfc8932](https://datatracker.ietf.org/doc/html/rfc8932)

---

## Weitere Informationen

Für technische Fragen oder Unterstützung bei der Einrichtung wenden Sie sich bitte an:

- **E-Mail:** hilfe@ffmuc.bayern
- **Mailingliste:** [liste.freifunk-muenchen.de](https://liste.freifunk-muenchen.de/)
- **Chat:** Besuchen Sie uns im [Chat](https://chat.ffmuc.net/)

## Weiterführende Links

- [DNS-Privacy-Projekt](https://dnsprivacy.org/)
- [DNS-over-TLS (RFC 7858)](https://tools.ietf.org/html/rfc7858)
- [DNS-over-HTTPS (RFC 8484)](https://tools.ietf.org/html/rfc8484)
- [DNSSEC Informationen](https://www.dnssec.net/)
