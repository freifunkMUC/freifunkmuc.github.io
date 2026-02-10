---
layout: posts
title: "Stellungnahme zum Referentenentwurf "Einführung einer IP-Adressspeicherung und Weiterentwicklung der Befugnisse zur Datenerhebung im Strafverfahren""
date: 2026-02-06 12:00:00 +0100
categories: politik freifunk gesetzgebung
author: Freifunk München / Freie Netze München e.V.
---

## Vorbemerkung

Der Verein Freie Netze München e.V. betreibt unter dem Namen **Freifunk München** eines der größten ehrenamtlich getragenen, gemeinnützigen WLAN-Netze in Deutschland. Das Netz steht der Allgemeinheit offen - ohne Registrierung, ohne Anmeldung, ohne personenbezogene Datenerhebung. Es dient der digitalen Teilhabe und wird täglich von tausenden Menschen genutzt: auf öffentlichen Plätzen, in Flüchtlingsunterkünften, in Vereinsräumen, in Verkehrsmitteln und an vielen weiteren Orten.

Wir nehmen hiermit Stellung zum [Referentenentwurf des Bundesministeriums der Justiz und für Verbraucherschutz vom 22. Dezember 2025](https://www.bmjv.de/SharedDocs/Gesetzgebungsverfahren/DE/2025_IP_Speicherung.html?nn=110518) zur "Einführung einer IP-Adressspeicherung und Weiterentwicklung der Befugnisse zur Datenerhebung im Strafverfahren".

Bereits im November 2025 haben wir in einer [früheren Stellungnahme](/politik/freifunk/gesetzgebung/2025/11/10/stellungnahme-mindestspeicherung.html) auf die grundlegenden technischen, datenschutzrechtlichen und gesellschaftlichen Probleme einer IP-Adressspeicherung für offene WLAN-Netze hingewiesen. Der nun vorliegende Referentenentwurf bestätigt und verschärft unsere Bedenken.

---

## I. Zusammenfassung

Der Referentenentwurf sieht eine **dreimonatige, anlasslose und unterschiedslose Speicherpflicht** für IP-Adressen (einschließlich Portnummern) durch Anbieter von Internetzugangsdiensten vor. Ergänzt wird dies durch eine **Sicherungsanordnung** für sonstige Verkehrsdaten und **neue Befugnisse für das Bundeskriminalamt (BKA)** zur präventiven Datensicherung.

Wir lehnen den Entwurf in seiner jetzigen Form ab. Er ist mit dem Betrieb offener, gemeinnütziger Netze unvereinbar, technisch auf falsche Annahmen gestützt, grundrechtlich problematisch und in der Praxis unverhältnismäßig.

---

## II. Warum die Umsetzung in offenen Netzen unmöglich und unbezahlbar ist

### 1. Die Dimension: 4.000 und mehr gleichzeitige Nutzer - ohne jedes Vertragsverhältnis

Freifunk München versorgt regelmäßig **über 4.000 gleichzeitig verbundene Endgeräte** - an Spitzentagen deutlich mehr. Dabei handelt es sich nicht um einen festen Kreis von 4.000 "Kunden": Die Nutzerschaft wechselt ständig. Im Laufe eines einzigen Tages verbinden sich **zehntausende unterschiedliche Geräte** mit dem Netz - Passanten, Reisende, Besucher, Anwohner. Anders als bei einem klassischen Internetzugangsanbieter gibt es zu keinem dieser Geräte ein Vertragsverhältnis, keine Registrierung, keine Identitätsprüfung. Es gibt schlicht keinen "Anschlussinhaber" im Sinne des Entwurfs.

Der Gesetzentwurf geht davon aus, dass ein Anbieter "seinem Kunden" eine IP-Adresse zuweist und diese Zuordnung speichern kann. In einem offenen WLAN funktioniert das nicht:

- Nutzer kommen und gehen im Minutentakt. Ein Gerät, das sich am Hauptbahnhof verbindet, ist zehn Minuten später möglicherweise am Marienplatz in einem anderen Netzknoten - oder offline.
- Moderne Endgeräte wechseln ständig ihre Identität: Sie erzeugen eigene IPv6-Adressen (SLAAC mit Privacy Extensions), rotieren ihre MAC-Adressen und erscheinen dem Netz bei jeder Verbindung als neues, unbekanntes Gerät.
- Es gibt keine zentrale Stelle, die Adressen "zuweist" - das Netz stellt Konnektivität bereit, die Adressvergabe geschieht automatisch und dezentral.

Um die Speicherpflicht zu erfüllen, müssten wir **jeden dieser tausenden Nutzer identifizieren** - etwa durch ein Captive Portal mit Ausweispflicht oder Mobilfunknummer. Das würde nicht nur den offenen Charakter des Netzes zerstören, sondern auch die **niederschwellige Nutzung** unmöglich machen, die gerade den gesellschaftlichen Wert von Freifunk ausmacht: Menschen ohne Smartphone-Vertrag, ohne Ausweis, ohne Sprachkenntnisse - Geflüchtete, Wohnungslose, Kinder, ältere Menschen - nutzen unser Netz täglich, weil es **barrierefrei** funktioniert: verbinden und lossurfen, ohne Formulare, ohne Registrierung, ohne Hürden. Eine Identifikationspflicht würde genau diese Menschen ausschließen und ist mit unserem gemeinnützigen Zweck unvereinbar.

### 2. Die Kosten: NAT-Protokollierung bei tausenden gleichzeitigen Nutzern

Da sich in unserem Netz viele Nutzer wenige öffentliche IPv4-Adressen teilen (NAT bzw. CGNAT), müsste nicht nur die IP-Adresse, sondern **jede einzelne Verbindung mit Portnummer, Zeitstempel und Zieladresse** protokolliert werden, um eine nachträgliche Zuordnung überhaupt theoretisch zu ermöglichen.

Was das bei unserer Größenordnung konkret bedeutet:

- **4.000+ gleichzeitige Nutzer** erzeugen jeweils hunderte bis tausende NAT-Übersetzungen pro Stunde - allein durch normales Surfen, E-Mail, Messenger und App-Updates im Hintergrund.
- Konservativ geschätzt fallen damit **mehrere Millionen NAT-Einträge pro Stunde** an, die jeweils mit Quell-IP, Quell-Port, Ziel-IP, Ziel-Port und Zeitstempel gespeichert werden müssten.
- Über **drei Monate** summiert sich das auf **dutzende Terabyte** an Rohdaten - allein für unser ehrenamtlich betriebenes Netz.
- Ein einziges kompromittiertes IoT-Gerät, das an einem DDoS-Angriff beteiligt ist, erzeugt laut Sachverständigem Lutz Donnerhacke **360 MB Verkehrsdaten pro Stunde** zusätzlich.

Diese Datenmengen erfordern eine professionelle **Logging-Infrastruktur** mit leistungsfähiger Hardware, redundanter Speicherung, Backup, Verschlüsselung und Zugriffskontrolle. Da Freifunk München seine Infrastruktur aus Ausfallsicherheitsgründen über **zwei redundante Standorte** betreibt, müssten beide Standorte mit entsprechenden Logging- und Speicherkapazitäten ausgestattet werden - was die Kosten nochmals verdoppelt. Insgesamt liegen die Kosten **im fünf- bis sechsstelligen Bereich jährlich** - für ein Netz, das vollständig ehrenamtlich und aus Spenden finanziert wird.

Darüber hinaus ermöglichen diese Datenmengen entgegen der Behauptung des Entwurfs sehr wohl die Erstellung detaillierter **Persönlichkeits- und Kommunikationsprofile** - ein Punkt, den sowohl die Gesellschaft für Informatik als auch die BRAK in ihren Stellungnahmen hervorheben.

Wie Lutz Donnerhacke zudem aufzeigt, ließe sich das CGNAT-Problem durch eine konsequente **IPv6-Migration (RFC 6540)** beseitigen. Statt eine unverhältnismäßige Speicherinfrastruktur für ein Übergangsproblem aufzubauen, sollte der Gesetzgeber die Abkehr von CGNAT vorantreiben.

Hinzu kommt ein **grundlegender innerer Widerspruch** im Entwurf selbst: Einerseits sollen "weitere Verkehrsdaten, soweit diese für eine Identifizierung des Beschuldigten anhand einer zu einem bestimmten Zeitpunkt zugewiesenen Internetprotokoll-Adresse erforderlich sind" gespeichert werden - was bei CGNAT zwingend auch Ziel-IP-Adressen umfasst. Andererseits bestimmt der Entwurf, dass "Inhalte der Kommunikation, wie Daten über den Aufruf oder die Nutzung von anderen Telekommunikationsdiensten oder digitalen Diensten" gerade **nicht** gespeichert werden dürfen. Jede Ziel-IP-Adresse stellt jedoch technisch die "Nutzung eines anderen digitalen Dienstes" dar. Wer entscheidet, welche Zieladresse gespeichert werden darf und welche nicht? Der Entwurf lässt diese Frage offen und schafft damit für Betreiber eine **massive Rechtsunsicherheit** - mit dem Risiko, entweder gegen die Speicherpflicht oder gegen das Speicherverbot zu verstoßen.

### 3. Freifunk ist "Privacy by Design" - aus gutem Grund

Unsere Netzwerkinfrastruktur wurde bewusst und konform zur Datenschutz-Grundverordnung (DSGVO) nach dem Grundsatz der **Datensparsamkeit** konzipiert. Es ist technisch nicht möglich, IP-Adressen einer konkreten Person zuzuordnen - es existiert weder eine Nutzerregistrierung noch ein Vertragsverhältnis, das eine solche Zuordnung erlauben würde.

Dieses Designprinzip ist keine Nachlässigkeit, sondern bewusste Umsetzung geltenden Datenschutzrechts. Eine grundlegende Umgestaltung unserer gesamten Infrastruktur wäre notwendig - mit erheblichen Kosten für Neuentwicklung, Betrieb und laufende Wartung, die ein ehrenamtlicher Verein nicht stemmen kann.

---

## III. Grundrechtliche Bedenken

### 1. Anlasslose Massenüberwachung

Die Speicherpflicht trifft **alle Nutzerinnen und Nutzer** ohne konkreten Verdacht. Der Europäische Gerichtshof (EuGH) hat in seinem Urteil vom 20. September 2022 (C-793/19, C-794/19) klargestellt, dass auch die Vorratsdatenspeicherung von IP-Adressen ein **schwerwiegender Eingriff in die Grundrechte** der Art. 7, 8 und 11 der EU-Grundrechtecharta darstellt und das "absolut Notwendige" nicht überschreiten darf.

Das Bundesverwaltungsgericht (BVerwG, Urteil vom 14.08.2023) hat die bis dahin geltende deutsche Regelung zur Vorratsdatenspeicherung für unionsrechtswidrig erklärt.

### 2. Fehlender Richtervorbehalt

Die Bundesrechtsanwaltskammer (BRAK), der Deutsche Anwaltverein (DAV) und weitere Verbände weisen zutreffend darauf hin, dass der Entwurf für die Abfrage der gespeicherten IP-Adressen **keinen Richtervorbehalt** vorsieht. Dies widerspricht den Anforderungen des Bundesverfassungsgerichts (BVerfG) an Eingriffe in Art. 10 GG (Fernmeldegeheimnis).

### 3. Keine empirische Grundlage

Der Entwurf enthält keine belastbare empirische Begründung für die Speicherfrist von drei Monaten. Im Gegenteil: Die BKA-Vizepräsidentin Martina Link erklärte selbst, dass bereits eine Speicherdauer von **zwei bis drei Wochen** einen "erheblichen Sicherheitsgewinn" brächte (Steigerung der Zuordnungsquote von 41 % auf ca. 80 %). Eine Studie des **Max-Planck-Instituts für Strafrecht** (2011) und eine Untersuchung des **Wissenschaftlichen Dienstes des Europäischen Parlaments** (2020) fanden keinen belastbaren Zusammenhang zwischen Vorratsdatenspeicherung und Aufklärungsquoten.

### 4. Gefahren der Sicherungsanordnung und BKA-Befugnisse

Besonders kritisch sehen wir die neuen präventiven Befugnisse des BKA (§ 10b BKAG-E), die eine **Sicherungsanordnung auch gegen Nichtverdächtige** und auf bloße polizeiliche Erwartung künftiger Straftaten ermöglichen - ohne richterliche Kontrolle. In Kombination mit dem Ausbau automatisierter Datenanalyse schafft dies ein erhebliches Missbrauchspotenzial.

---

## IV. Unverhältnismäßige Belastung gemeinnütziger Betreiber

### 1. Existenzbedrohung für Bürgernetze

Der Referentenentwurf enthält **keine Ausnahme** für gemeinnützige, ehrenamtlich betriebene Netze. Eine Umsetzung der Speicherpflicht wäre nur durch eine grundlegende Änderung des Betriebsmodells möglich - insbesondere durch die Einführung einer verpflichtenden Nutzeridentifikation. Dies würde:

- den **offenen Charakter** der Netze aufheben,
- dem **gemeinnützigen Zweck** widersprechen,
- den **barrierefreien Zugang** zur digitalen Teilhabe zerstören,
- einen erheblichen **Eingriff in die informationelle Selbstbestimmung** der Nutzenden darstellen.

### 2. Widerspruch zur Gemeinnützigkeitsanerkennung

Erst 2020 wurde die Gemeinnützigkeit von Freifunk-Initiativen durch eine Bundesratsinitiative explizit anerkannt. Die damalige Begründung betonte die Bedeutung des "freien Zugangs zum Netz" und der "Teilhabe aller Menschen an der Digitalisierung". Der vorliegende Entwurf droht genau diese gesellschaftliche Leistung zu zerstören.

### 3. Fehlende Darstellung des Erfüllungsaufwands - eine konkrete Rechnung

Der Referentenentwurf enthält keine nachvollziehbare Darstellung des **Erfüllungsaufwands** für kleinere Betreiber. Für Freifunk München lässt sich der Aufwand konkret abschätzen:

| Posten | Geschätzte Kosten |
|---|---|
| Speicherhardware für NAT-Logs (dutzende TB, redundant, verschlüsselt) | 20.000-50.000 € Anschaffung |
| Laufender Betrieb, Strom, Hosting, Wartung der Logging-Systeme | 10.000-20.000 € / Jahr |
| Neuentwicklung der Netzwerkinfrastruktur (Logging, Zuordnung, Schnittstellen) | 50.000-100.000 € |
| Datenschutz-Compliance (Datenschutz-Folgenabschätzung, technische und organisatorische Maßnahmen, Löschkonzept, Auskunftsprozesse) | 10.000-20.000 € / Jahr |
| Rechtliche Absicherung und Beratung | 5.000-10.000 € / Jahr |
| Bearbeitung behördlicher Auskunftsersuchen | laufender ehrenamtlicher Personalaufwand |

Dem stehen **jährliche Spendeneinnahmen im niedrigen fünfstelligen Bereich** gegenüber, die heute vollständig in den Netzbetrieb fließen. Allein die Erstinvestition würde das Jahresbudget des Vereins um ein Vielfaches übersteigen.

Gleichzeitig sollen die **Entschädigungssätze** nach dem Justizvergütungs- und -entschädigungsgesetz (JVEG) für die Bearbeitung behördlicher Anfragen sogar noch gesenkt werden - ein Punkt, den der eco-Verband und der Verband der Anbieter von Telekommunikations- und Mehrwertdiensten (VATM) zutreffend kritisieren. Für ehrenamtlich betriebene Netze bedeutet das: Die Kosten der Überwachungsinfrastruktur sollen vollständig von den Betreibern getragen werden - ohne jede Gegenleistung.

---

## V. Breiter Konsens gegen den Entwurf

Unsere Einschätzung wird von einer breiten Allianz aus Zivilgesellschaft, Wirtschaft und Fachwissenschaft geteilt. Unter den [27 veröffentlichten Stellungnahmen](https://www.bmjv.de/SharedDocs/Downloads/DE/Gesetzgebung/Stellungnahmen/2026/Stellugnahmen_RefE_IP_Speicherung.zip?__blob=publicationFile&v=2) lehnen zahlreiche Organisationen den Entwurf ab oder fordern grundlegende Änderungen:

- Die **BRAK** kritisiert die anlasslose Speicherung als grundrechtswidrig und bemängelt fehlende richterliche Kontrolle.
- Der **eco - Verband der Internetwirtschaft** sieht Gründe für eine vollständige Rücknahme des Entwurfs.
- Die **Gesellschaft für Informatik** lehnt die Speicherpflicht als technisch verfehlt und grundrechtlich unverhältnismäßig ab.
- Die **Digitale Gesellschaft e.V.** empfiehlt, den Entwurf nicht zu beschließen und die Vorratsdatenspeicherung endgültig zu beerdigen.
- **D64 - Zentrum für Digitalen Fortschritt** weist darauf hin, dass schon heute ca. 75 % der Fälle durch freiwillige Speicherung der Telekommunikationsanbieter aufgeklärt werden.
- **Freifunk Rheinland**, **Freifunk Nordhessen** und die **F3N Aachen** warnen übereinstimmend vor dem Ende offener Bürgernetze.
- Der Sachverständige **Lutz Donnerhacke** legt die technische Unmöglichkeit einer verhältnismäßigen Umsetzung bei CGNAT detailliert dar.
- Das **Medienbündnis** (ARD, ZDF, BDZV, DJV u. a.) sieht den Quellenschutz und die Pressefreiheit gefährdet.

---

## VI. Alternative Ansätze

Statt einer anlasslosen Massenüberwachung stehen zielgerichtete und grundrechtskonforme Alternativen zur Verfügung:

1. **Quick-Freeze-Verfahren:** Anlassbezogene Sicherung vorhandener Daten bei konkretem Verdacht - ohne zusätzliche Speicherpflichten. Dies funktioniert insbesondere dann, wenn Anbieter ohnehin betriebsbedingt Daten vorhalten.

2. **Login-Falle:** Bei langfristig genutzten Accounts (Cybergrooming, Hasskriminalität) kann die Identifikation über die **aktuelle IP-Adresse** nach richterlicher Anordnung erfolgen - ohne historische Massenerhebung.

3. **Ausbau bestehender Ermittlungsinstrumente:** Verbesserung der IT-Ausstattung und Kapazitäten der Strafverfolgungsbehörden, schnellere richterliche Verfahren und internationale Kooperation (e-Evidence).

---

## VII. Forderungen

Wir fordern den Gesetzgeber auf:

1. **Auf jede Form der anlasslosen Vorratsdatenspeicherung zu verzichten** - gleich unter welcher Bezeichnung - für Internet Service Provider (ISPs), Internetzugänge, WLAN/Hotspot-Betreiber, LoRaWAN- und ähnliche Netzwerke.

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

Der Referentenentwurf ignoriert die technische Realität moderner Netze, missachtet die klare Rechtsprechung des EuGH und des BVerwG und gefährdet den Fortbestand offener, gemeinnütziger Netzwerkinfrastrukturen in Deutschland. Die Erfahrung mit früheren Anläufen zur Vorratsdatenspeicherung zeigt, dass auch dieser Entwurf absehbar vor Gericht scheitern wird - mit erheblichen Kosten für Wirtschaft, Zivilgesellschaft und den Rechtsstaat.

Wir appellieren eindringlich an den Gesetzgeber, diesen Weg nicht erneut zu beschreiten und stattdessen auf zielgerichtete, verhältnismäßige und grundrechtskonforme Ermittlungsinstrumente zu setzen.

---

**Freifunk München / Freie Netze München e.V.**  
Parkstraße 28, 82131 Gauting  
Eingetragen im Vereinsregister beim Amtsgericht München - VR 206402  
Web: [https://ffmuc.net](https://ffmuc.net)  
E-Mail: [info@ffmuc.net](mailto:info@ffmuc.net)  
