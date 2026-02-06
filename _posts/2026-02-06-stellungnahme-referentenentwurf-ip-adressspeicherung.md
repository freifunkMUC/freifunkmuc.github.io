---
layout: posts
title: "Stellungnahme zum Referentenentwurf „Einführung einer IP-Adressspeicherung und Weiterentwicklung der Befugnisse zur Datenerhebung im Strafverfahren""
date: 2026-02-06 12:00:00 +0100
categories: politik freifunk gesetzgebung
author: Freifunk München / Freie Netze München e.V.
---

## Vorbemerkung

Der Verein Freie Netze München e.V. betreibt unter dem Namen **Freifunk München** eines der größten ehrenamtlich getragenen, gemeinnützigen WLAN-Netze in Deutschland. Das Netz steht der Allgemeinheit offen – ohne Registrierung, ohne Anmeldung, ohne personenbezogene Datenerhebung. Es dient der digitalen Teilhabe und wird täglich von tausenden Menschen genutzt: auf öffentlichen Plätzen, in Flüchtlingsunterkünften, in Vereinsräumen, in Verkehrsmitteln und an vielen weiteren Orten.

Wir nehmen hiermit Stellung zum [Referentenentwurf des Bundesministeriums der Justiz und für Verbraucherschutz vom 22. Dezember 2025](https://www.bmjv.de/SharedDocs/Gesetzgebungsverfahren/DE/2025_IP_Speicherung.html?nn=110518) zur „Einführung einer IP-Adressspeicherung und Weiterentwicklung der Befugnisse zur Datenerhebung im Strafverfahren".

Bereits im November 2025 haben wir in einer [früheren Stellungnahme](/politik/freifunk/gesetzgebung/2025/11/10/stellungnahme-mindestspeicherung.html) auf die grundlegenden technischen, datenschutzrechtlichen und gesellschaftlichen Probleme einer IP-Adressspeicherung für offene WLAN-Netze hingewiesen. Der nun vorliegende Referentenentwurf bestätigt und verschärft unsere Bedenken.

---

## I. Zusammenfassung

Der Referentenentwurf sieht eine **dreimonatige, anlasslose und unterschiedslose Speicherpflicht** für IP-Adressen (einschließlich Portnummern) durch Anbieter von Internetzugangsdiensten vor. Ergänzt wird dies durch eine **Sicherungsanordnung** für sonstige Verkehrsdaten und **neue Befugnisse für das BKA** zur präventiven Datensicherung.

Wir lehnen den Entwurf in seiner jetzigen Form ab. Er ist mit dem Betrieb offener, gemeinnütziger Netze unvereinbar, technisch auf falsche Annahmen gestützt, grundrechtlich problematisch und in der Praxis unverhältnismäßig.

---

## II. Technische Unmöglichkeit der Umsetzung in offenen Netzen

### 1. Keine Zuordnung von IP-Adressen zu Personen möglich

Der Gesetzentwurf setzt voraus, dass eine eindeutige Zuordnung einer IP-Adresse zu einem „Anschlussinhaber" technisch möglich ist. **Diese Annahme trifft auf offene WLAN-Netze wie Freifunk nicht zu.**

- **IPv6 / SLAAC:** Moderne Endgeräte erzeugen ihre IPv6-Adressen über Stateless Address Autoconfiguration (SLAAC) selbst. Der Netzbetreiber weist keine Adressen aktiv zu. Privacy Extensions führen dazu, dass sich diese Adressen regelmäßig ändern.
- **MAC-Adressen-Rotation:** Aktuelle Betriebssysteme (Android, iOS, Windows) randomisieren ihre MAC-Adressen. Damit ist selbst bei IPv4-DHCP-Zuweisungen keine dauerhafte Zuordnung zu einem bestimmten Gerät möglich.
- **Kein Vertragsverhältnis:** In Freifunk-Netzen existiert weder eine Registrierung noch eine Identitätsprüfung. Es gibt keinen „Anschlussinhaber" im Sinne des Entwurfs.

### 2. CGNAT erzeugt massive Datenmengen ohne Erkenntnisgewinn

Wie der Sachverständige Lutz Donnerhacke in seiner Stellungnahme detailliert darlegt, erfordert die Speicherung von Portnummern bei Carrier-Grade NAT (CGNAT) eine **Protokollierung jeder einzelnen Verbindung**. Für einen mittelgroßen Anbieter mit ca. 100.000 Kunden bedeutet dies:

- Bei konservativster Schätzung: **ca. 2 Terabyte** Speicherbedarf für drei Monate
- Realistisch mit Power-Usern und IoT-Geräten: **500 Terabyte und mehr**
- Ein einziges kompromittiertes IoT-Gerät bei einem DDoS-Angriff erzeugt **360 MB Verkehrsdaten pro Stunde**

Diese Datenmengen ermöglichen entgegen der Behauptung des Entwurfs sehr wohl die Erstellung detaillierter **Persönlichkeits- und Kommunikationsprofile** – ein Punkt, den sowohl die Gesellschaft für Informatik als auch die BRAK in ihren Stellungnahmen hervorheben.

### 3. Systeme von Freifunk sind „Privacy by Design"

Unsere Netzwerkinfrastruktur wurde bewusst und DSGVO-konform nach dem Grundsatz der **Datensparsamkeit** konzipiert. Es ist technisch nicht möglich, IP-Adressen einem Endgerät oder einer Person zuzuordnen. Dieses Designprinzip ist keine Nachlässigkeit, sondern bewusste Umsetzung geltenden Datenschutzrechts. Eine grundlegende Umgestaltung der Systeme wäre notwendig – und stünde im direkten Widerspruch zu den Prinzipien von Privacy by Design und Privacy by Default.

---

## III. Grundrechtliche Bedenken

### 1. Anlasslose Massenüberwachung

Die Speicherpflicht trifft **alle Nutzerinnen und Nutzer** ohne konkreten Verdacht. Der EuGH hat in seinem Urteil vom 20. September 2022 (C-793/19, C-794/19) klargestellt, dass auch die Vorratsdatenspeicherung von IP-Adressen ein **schwerwiegender Eingriff in die Grundrechte** der Art. 7, 8 und 11 der EU-Grundrechtecharta darstellt und das „absolut Notwendige" nicht überschreiten darf.

Das Bundesverwaltungsgericht (BVerwG, Urteil vom 14.08.2023) hat die bis dahin geltende deutsche Regelung zur Vorratsdatenspeicherung für unionsrechtswidrig erklärt.

### 2. Fehlender Richtervorbehalt

Die BRAK, der DAV und weitere Verbände weisen zutreffend darauf hin, dass der Entwurf für die Abfrage der gespeicherten IP-Adressen **keinen Richtervorbehalt** vorsieht. Dies widerspricht den Anforderungen des BVerfG an Eingriffe in Art. 10 GG (Fernmeldegeheimnis).

### 3. Keine empirische Grundlage

Der Entwurf enthält keine belastbare empirische Begründung für die Speicherfrist von drei Monaten. Im Gegenteil: Die BKA-Vizepräsidentin Martina Link erklärte selbst, dass bereits eine Speicherdauer von **zwei bis drei Wochen** einen „erheblichen Sicherheitsgewinn" brächte (Steigerung der Zuordnungsquote von 41 % auf ca. 80 %). Eine Studie des **Max-Planck-Instituts für Strafrecht** (2011) und eine Untersuchung des **Wissenschaftlichen Dienstes des Europäischen Parlaments** (2020) fanden keinen belastbaren Zusammenhang zwischen Vorratsdatenspeicherung und Aufklärungsquoten.

### 4. Gefahren der Sicherungsanordnung und BKA-Befugnisse

Besonders kritisch sehen wir die neuen präventiven Befugnisse des BKA (§ 10b BKAG-E), die eine **Sicherungsanordnung auch gegen Nichtverdächtige** und auf bloße polizeiliche Erwartung künftiger Straftaten ermöglichen – ohne richterliche Kontrolle. In Kombination mit dem Ausbau automatisierter Datenanalyse schafft dies ein erhebliches Missbrauchspotenzial.

---

## IV. Unverhältnismäßige Belastung gemeinnütziger Betreiber

### 1. Existenzbedrohung für Bürgernetze

Der Referentenentwurf enthält **keine Ausnahme** für gemeinnützige, ehrenamtlich betriebene Netze. Eine Umsetzung der Speicherpflicht wäre nur durch eine grundlegende Änderung des Betriebsmodells möglich – insbesondere durch die Einführung einer verpflichtenden Nutzeridentifikation. Dies würde:

- den **offenen Charakter** der Netze aufheben,
- dem **gemeinnützigen Zweck** widersprechen,
- den **barrierefreien Zugang** zur digitalen Teilhabe zerstören,
- einen erheblichen **Eingriff in die informationelle Selbstbestimmung** der Nutzenden darstellen.

### 2. Widerspruch zur Gemeinnützigkeitsanerkennung

Erst 2020 wurde die Gemeinnützigkeit von Freifunk-Initiativen durch eine Bundesratsinitiative explizit anerkannt. Die damalige Begründung betonte die Bedeutung des „freien Zugangs zum Netz" und der „Teilhabe aller Menschen an der Digitalisierung". Der vorliegende Entwurf droht genau diese gesellschaftliche Leistung zu zerstören.

### 3. Fehlende Darstellung des Erfüllungsaufwands

Der Referentenentwurf enthält keine nachvollziehbare Darstellung des **Erfüllungsaufwands** für kleinere Betreiber. Die Kosten für Logging-Infrastruktur, Speichersysteme, Datenschutz-Compliance, rechtliche Absicherung und laufende Wartung sind für ehrenamtliche Initiativen schlicht nicht tragbar. Gleichzeitig sollen die **Entschädigungssätze** (JVEG) sogar noch gesenkt werden – ein Punkt, den der eco-Verband und der VATM zutreffend kritisieren.

---

## V. Breiter Konsens gegen den Entwurf

Unsere Einschätzung wird von einer breiten Allianz aus Zivilgesellschaft, Wirtschaft und Fachwissenschaft geteilt. Unter den 27 veröffentlichten Stellungnahmen lehnen zahlreiche Organisationen den Entwurf ab oder fordern grundlegende Änderungen:

- Die **Bundesrechtsanwaltskammer (BRAK)** kritisiert die anlasslose Speicherung als grundrechtswidrig und bemängelt fehlende richterliche Kontrolle.
- Der **eco – Verband der Internetwirtschaft** sieht Gründe für eine vollständige Rücknahme des Entwurfs.
- Die **Gesellschaft für Informatik** lehnt die Speicherpflicht als technisch verfehlt und grundrechtlich unverhältnismäßig ab.
- Die **Digitale Gesellschaft e.V.** empfiehlt, den Entwurf nicht zu beschließen und die Vorratsdatenspeicherung endgültig zu beerdigen.
- **D64 – Zentrum für Digitalen Fortschritt** weist darauf hin, dass schon heute ca. 75 % der Fälle durch freiwillige Speicherung der Telekommunikationsanbieter aufgeklärt werden.
- **Freifunk Rheinland**, **Freifunk Nordhessen** und die **F3N Aachen** warnen übereinstimmend vor dem Ende offener Bürgernetze.
- Der Sachverständige **Lutz Donnerhacke** legt die technische Unmöglichkeit einer verhältnismäßigen Umsetzung bei CGNAT detailliert dar.
- Das **Medienbündnis** (ARD, ZDF, BDZV, DJV u. a.) sieht den Quellenschutz und die Pressefreiheit gefährdet.

---

## VI. Alternative Ansätze

Statt einer anlasslosen Massenüberwachung stehen zielgerichtete und grundrechtskonforme Alternativen zur Verfügung:

1. **Quick-Freeze-Verfahren:** Anlassbezogene Sicherung vorhandener Daten bei konkretem Verdacht – ohne zusätzliche Speicherpflichten. Dies funktioniert insbesondere dann, wenn Anbieter ohnehin betriebsbedingt Daten vorhalten.

2. **Login-Falle:** Bei langfristig genutzten Accounts (Cybergrooming, Hasskriminalität) kann die Identifikation über die **aktuelle IP-Adresse** nach richterlicher Anordnung erfolgen – ohne historische Massenerhebung.

3. **IPv6-Pflicht (RFC 6540):** Wie Lutz Donnerhacke vorschlägt, würde eine konsequente IPv6-Migration die technischen Probleme von CGNAT beseitigen. In einer Übergangsphase könnte für Bestandskunden lediglich die Zuordnung öffentlicher IP-Adressen verlängert werden.

4. **Ausbau bestehender Ermittlungsinstrumente:** Verbesserung der IT-Ausstattung und Kapazitäten der Strafverfolgungsbehörden, schnellere richterliche Verfahren und internationale Kooperation (e-Evidence).

---

## VII. Forderungen

Wir fordern den Gesetzgeber auf:

1. **Auf jede Form der anlasslosen Vorratsdatenspeicherung zu verzichten** – gleich unter welcher Bezeichnung – für ISPs, Internetzugänge, WLAN/Hotspot-Betreiber, LoRaWAN- und ähnliche Netzwerke.

2. Hilfsweise, sofern an einer Speicherpflicht festgehalten wird: **eine ausdrückliche gesetzliche Ausnahme** für:
   - Bürgernetze und vergleichbare offene Infrastrukturen,
   - ehrenamtlich betriebene Netzwerke,
   - Betreiber ohne kommerzielles Interesse,
   - Kleine Organisationen und Unternehmen mit weniger als 50 Beschäftigten und einem Jahresumsatz unter 10 Millionen Euro.

3. **Grundrechtskonforme Alternativen** wie Quick-Freeze, Login-Falle und IPv6-Pflicht vorrangig zu verfolgen.

4. **Einen Richtervorbehalt** für jede Abfrage gespeicherter Daten vorzusehen.

5. **Die EU-Harmonisierung abzuwarten**, statt durch einen nationalen Alleingang Fakten zu schaffen, die absehbar vor dem EuGH keinen Bestand haben werden.

6. **Fachverbände und die Zivilgesellschaft** an der Ausgestaltung der Regelung substantiell zu beteiligen.

---

## VIII. Fazit

Der Referentenentwurf ignoriert die technische Realität moderner Netze, missachtet die klare Rechtsprechung des EuGH und des BVerwG und gefährdet den Fortbestand offener, gemeinnütziger Netzwerkinfrastrukturen in Deutschland. Die Erfahrung mit früheren Anläufen zur Vorratsdatenspeicherung zeigt, dass auch dieser Entwurf absehbar vor Gericht scheitern wird – mit erheblichen Kosten für Wirtschaft, Zivilgesellschaft und den Rechtsstaat.

Wir appellieren eindringlich an den Gesetzgeber, diesen Weg nicht erneut zu beschreiten und stattdessen auf zielgerichtete, verhältnismäßige und grundrechtskonforme Ermittlungsinstrumente zu setzen.

---

**Freifunk München / Freie Netze München e.V.**  
Parkstraße 28, 82131 Gauting  
Eingetragen im Vereinsregister beim Amtsgericht München – VR 206402  
Web: [https://ffmuc.net](https://ffmuc.net)  
E-Mail: [info@ffmuc.net](mailto:info@ffmuc.net)  
