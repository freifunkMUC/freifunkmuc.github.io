---
layout: single
title: Datenschutzerklärung / Privacy Policy
permalink: /privacy/
---

[English version below](#english-version)

# Datenschutzerklärung

## 1. Verantwortlicher, Geltung, Stand

Verantwortlich ist die **Freie Netze München e. V.**, Parkstraße 28, 82131 Gauting, eingetragen im Vereinsregister des Amtsgerichts München unter VR 206402, vertreten durch den Vorstand. Weitere Angaben im [Impressum](/impressum/). Datenschutzanfragen: hilfe@ffmuc.bayern. Einen Datenschutzbeauftragten haben wir nicht benannt.

Diese Erklärung gilt für ffmuc.net und alle Dienste unter ffmuc.net (u. a. Wiki, Meet, Cloud, Chat, Mastodon, Karte, Firmware, Webmail, VPN, VMs, DNS, Status, Pads, Spenden, Mitgliedschaft, Knotenverwaltung), für die weiteren Domains ffmuc.bayern, fnmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de, freifunk-muenchen.de/.net, freewifi.bayern und freie-netze.org, soweit sie auf unsere Dienste verweisen, sowie für den Internetzugang über Freifunk-Knoten und Gateways. Für die DNS-Resolver gilt zusätzlich die [DNS-Privacy-Erklärung](/dns-privacy/).

Stand: 25.11.2026, Fassung 1.0. Frühere Fassungen auf Anfrage.

## 2. Das Wichtigste in Kürze

- **Freifunk-WLAN und Mesh-Netz.** Wir speichern keine Inhalte und protokollieren nicht, wer welche Seiten aufruft. Für den Betrieb sieht ein Gateway kurzzeitig die Geräte-Adresse (MAC) und die zugeteilte interne Adresse; diese Meldungen werden nach rund 4 Tagen am Gateway und nach höchstens 9 Tagen in der zentralen Protokollsammlung gelöscht. Verbindungen werden nur im Arbeitsspeicher geführt und nicht protokolliert (Abschnitt 3.1).
- **Websites.** Beim Besuch fallen Zugriffsdaten (IP-Adresse, Zeitpunkt, aufgerufene Seite) an; sie werden nach wenigen Stunden bis 14 Tagen gelöscht. Auf ffmuc.net und im Wiki zählen wir Besuche mit selbst betriebener, cookieloser Statistik (gekürzte IP-Adresse). Wir setzen keine Werbe- oder Tracking-Cookies und geben keine Daten zu Werbezwecken weiter (Abschnitt 3.2).
- **Dienste für die Community** (Meet, Chat, Mastodon, Cloud, E-Mail, Wiki, Pads und weitere). Konto- und Inhaltsdaten bleiben bis zur Löschung des Kontos oder der Inhalte; Protokolle werden nach kurzen Fristen gelöscht. Bild und Ton von Konferenzen werden nicht gespeichert (Abschnitt 3.3).
- **Mitgliedschaft und Spenden.** Mitglieds- und Spendendaten verarbeiten wir für die Vereinsverwaltung; Belege bewahren wir nach den gesetzlichen Fristen auf (8 bzw. 10 Jahre). Bei PayPal fließen Daten erst, wenn Sie die Schaltfläche anklicken (Abschnitt 3.4).
- **Kein Tracking, keine Werbung.** Außer der cookielosen Statistik gibt es keine Nutzerverfolgung.
- **Empfänger.** Daten gehen nur an Dienstleister, die wir dafür brauchen (Rechenzentren, DNS, Datensicherung, Mitgliederverwaltung, Zahlungen, Angriffsabwehr), teils in die USA; die jeweilige Garantie steht in Abschnitt 4.
- **Ihre Rechte.** Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit, Widerspruch und Beschwerde bei der Aufsichtsbehörde (Abschnitt 7). Kontakt: hilfe@ffmuc.bayern.

## 3. Einzelheiten nach Bereich

Jede Tabelle nennt die Daten, den Zweck mit Rechtsgrundlage und die Frist. Wo keine feste Frist besteht, nennen wir das Kriterium der Speicherung (Art. 13 Abs. 2 lit. a DSGVO). Zu Protokollen und Datensicherungen siehe Abschnitt 3.6.

### 3.1 Freifunk-Netz

| Verarbeitung | Daten | Zweck, Rechtsgrundlage | Frist |
|---|---|---|---|
| Internetzugang über Freifunk (Knoten und Gateways) | MAC-Adresse des Geräts und zugeteilte interne Adresse samt Zeitpunkt, Datenmenge je Gerät/Knoten (Zähler), Verbindungstabelle der Gateways im Arbeitsspeicher (Zuordnung interner zu öffentlicher Adresse/Port), Verbindungsaufbau zum Gateway (Schlüssel des Knotens, nicht des Geräts) | Aufbau und Betrieb der Verbindung, Verteilung der Last auf Gateways; § 9 TDDDG, Art. 6 Abs. 1 lit. f DSGVO; das Fernmeldegeheimnis (§ 3 TDDDG) wird gewahrt | Zuteilung 10 bis 60 Minuten; Meldungen der Adressvergabe (MAC-Adresse, interne Adresse, Zeitpunkt) im Systemprotokoll des Gateways rund 4 Tage, zentral höchstens 9 Tage; Verbindungstabelle nur im Speicher, nicht protokolliert, Einträge verfallen nach Inaktivität (bestehende TCP-Verbindungen bis zu 5 Tage); Zähler ohne Inhaltsbezug (Kriterium: Kapazitätsplanung) |
| Netzflussstatistik | Quell-/Ziel-Adressen und Datenmengen von Stichproben des Verkehrs an den Backbone-Routern | Netzbetrieb, Kapazitätsplanung, Störungs- und Angriffserkennung; Art. 6 Abs. 1 lit. f DSGVO | einzelne Flüsse mit Adressen 15 Tage, Zwischenspeicher 1 Tag; verdichtete Zähler ohne Endgeräte-Adressen bis zu 1 Jahr |
| DNS-Auflösung (Resolver, DoH, DoT, DoQ) | keine personenbezogenen Abfrageprotokolle; kurzlebige Zähler je IP-Adresse gegen Missbrauch, Gesamtstatistik | Namensauflösung; Art. 6 Abs. 1 lit. f DSGVO | Zähler nur zur technischen Durchsetzung; Statistik ohne Personenbezug; Einzelheiten: [DNS-Privacy](/dns-privacy/) |
| Verwaltung von Knoten und Standort-WLAN | Konto ausgewählter Mitglieder, Geräte- und Konfigurationsdaten, Änderungsprotokoll; Controller führen Listen verbundener Endgeräte (MAC-Adresse, Verbindungszeiten, Datenmenge) | Verwaltung und Betrieb der Netzgeräte; Art. 6 Abs. 1 lit. b, f DSGVO; § 9 TDDDG | Konto bis zur Löschung; Gerätedaten, solange das Gerät verwaltet wird; Endgeräte-Listen: solange für Betrieb und Fehlersuche nötig, Löschung auf Anfrage |

Wir speichern keine Inhalte und protokollieren nicht, welche Person welche Seiten aufruft. Die Verbindung der Nutzenden wird am Gateway in eine öffentliche Adresse des Vereins übersetzt; die Übersetzungen werden nicht einzeln protokolliert.

### 3.2 Websites und Karte

| Verarbeitung | Daten | Zweck, Rechtsgrundlage | Frist |
|---|---|---|---|
| Besuch der Websites und Dienstseiten (ffmuc.net, Wiki, Spende, Mitglieder, VPN, VMs, DNS-Einrichtung, Karte, Firmware, Status) | IP-Adresse, Zeitpunkt, aufgerufene Adresse, Statuscode, Datenmenge, Browserkennung, Referrer | sicherer, störungsfreier Betrieb, Fehlersuche, Missbrauchsabwehr; Art. 6 Abs. 1 lit. f DSGVO | Zugriffsprotokolle auf den Webservern 14 Tage; an den vorgeschalteten Lastverteilern wenige Stunden (IP-Adresse gekürzt); Verbindungen zu Anwendungen 7 Tage; in der zentralen Protokollsammlung Zugriffsprotokolle 2 bis 3 Tage, Anwendungsprotokolle 7 bis 9 Tage |
| Statistik (ffmuc.net, Wiki) | Matomo, selbst betrieben, ohne Cookies; IP-Adresse wird vor der Speicherung gekürzt (zwei Bytes); „Do Not Track“ wird beachtet | Nutzungszahlen zur Verbesserung des Angebots; Art. 6 Abs. 1 lit. f DSGVO, Widerspruch jederzeit (Abschnitt 7) | Rohdaten 180 Tage |
| Knotenkarte (map.ffmuc.net, föderierte Karte) | Name, Standort (Koordinaten), technische Daten und Geräte-Merkmale eines Knotens; die föderierte Karte zeigt zusätzlich Knoten anderer Freifunk-Communities nach deren Veröffentlichung (Quelle: die jeweilige Community) | Netz sichtbar machen, Störungen finden; Art. 6 Abs. 1 lit. f DSGVO | solange der Knoten gemeldet wird; danach nur Statistiken ohne Personenbezug |

Interessenabwägung: Wir haben ein berechtigtes Interesse am sicheren Betrieb; der Eingriff ist gering, weil die Daten nur kurz gespeichert, nur von Administratoren gelesen und nicht zur Profilbildung genutzt werden.

**Externe Inhalte.** Unsere Seiten laden keine Schriften, Skripte oder Bilder von Dritten, mit diesen Ausnahmen: Auf der Spenden- und der Mitgliederseite werden erst beim Klick auf die PayPal-Schaltfläche Daten an PayPal übertragen (Abschnitt 3.4). In der Karte können Sie als Hintergrund ein Satellitenbild von Esri wählen; erst dann verbindet sich Ihr Browser mit Esri (USA). Die übrigen Kartenkacheln liefert unser eigener Zwischenserver. Links zu sozialen Netzwerken sind einfache Verweise; eine Verbindung dorthin entsteht erst beim Klick.

**Domains über Cloudflare.** Aufrufe der Domains fnmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de und freewifi.bayern laufen über Cloudflare (Abschnitt 4); Cloudflare verarbeitet dabei IP-Adresse, aufgerufene Adresse und Kopfzeilen und leitet zu unseren Diensten weiter. Bild und Ton von Meet, E-Mail-Verkehr und Webmail laufen nicht darüber. Die Seite freie-netze.org wird von GitHub Pages ausgeliefert (Abschnitt 4).

### 3.3 Dienste für die Community

Alle Dienste sind nur für den genannten Zweck bestimmt. Die Anmeldung erfolgt über eine zentrale Anmeldung mit gemeinsamem Mitgliederverzeichnis.

| Dienst | Daten | Zweck, Rechtsgrundlage | Frist |
|---|---|---|---|
| Zentrale Anmeldung und Mitgliederkonto | Benutzername, Name, E-Mail-Adresse, Passwort (nur als Hash), Gruppen, Anmeldeereignisse (Zeitpunkt, IP-Adresse), optional zweiter Faktor/Passkey; bei Zugängen außerhalb der Mitgliedschaft Selbstregistrierung mit E-Mail-Bestätigung | Anmeldung, Kontoverwaltung, Missbrauchsschutz; Art. 6 Abs. 1 lit. b DSGVO, Anmeldeprotokolle lit. f | Konto bis zur Löschung auf Wunsch; Anmeldeereignisse 14 Tage (im Administrationsbereich 30 Tage); Sitzungen verfallen nach 30 Minuten Inaktivität, spätestens nach 10 Stunden |
| Videokonferenz Meet (meet.ffmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de) | Raumname, Anzeigename, IP-Adresse, Zeitpunkt, Gerätedaten; Bild und Ton live zwischen den Teilnehmenden (nicht gespeichert); Chat im Raum nur während der Konferenz; Untertitel: Sprache wird auf unseren Servern in Text umgewandelt | Konferenz, Fehlersuche, Missbrauchsabwehr; Teilnahme Art. 6 Abs. 1 lit. b DSGVO, Betriebsprotokolle lit. f, Untertitel lit. a (Einwilligung durch Einschalten) | Betriebsprotokolle (IP-Adresse, Raum) werden rotiert: je nach Server 7 Tage (Relay-Server), 14 Tage (Webserver) bis zu rund 3 Wochen (Videobrücken), in der Sammlung 2 bis 9 Tage; Kriterium: solange für Fehlersuche und Missbrauchsabwehr nötig. Inhalte werden nicht gespeichert |
| Pads, Whiteboard und Zeichnungen | Texte und Zeichnungen, Pad-/Boardname, teils das Konto; bei den verschlüsselten Pads sehen wir keine Inhalte; IP-Adresse im Zugriffsprotokoll | gemeinsames Arbeiten; Art. 6 Abs. 1 lit. b DSGVO, Protokolle lit. f | Inhalte bis zur Löschung durch Nutzende oder auf Anfrage (Kriterium: Erforderlichkeit für die gemeinsame Arbeit); Zugriffsprotokolle wie 3.2 |
| Chat (Mattermost, chat.ffmuc.net) | Konto (Name, E-Mail, Benutzername), Nachrichten, Dateien, Reaktionen, Zeitpunkte, Verbindungsdaten | Austausch der Community; Art. 6 Abs. 1 lit. b DSGVO, Betrieb lit. f | bis zur Löschung durch die Nutzenden oder des Kontos; keine automatische Löschung (Kriterium: Dauer der Kontonutzung) |
| Mastodon (social.ffmuc.net) | Konto, E-Mail-Adresse, Beiträge, Medien, Folgebeziehungen, Anmelde-IP-Adressen und Sitzungen; öffentliche Beiträge sind im Fediverse sichtbar und gehen an andere Server | Fediverse-Server der Community; Art. 6 Abs. 1 lit. b DSGVO, IP-Adressen lit. f (Missbrauchsabwehr) | Konto und Beiträge bis zur Löschung; Anmelde-IP-Adressen und Sitzungen 1 Jahr; Zugriffsprotokolle 7 Tage; Löschung bei anderen Servern können wir nur anstoßen (Art. 17 Abs. 2 DSGVO) |
| Cloud (cloud.ffmuc.net) | Konto, Dateien, Kalender, Kontakte, Aktivitäts- und Zugriffsprotokoll, Papierkorb und Dateiversionen | Datenspeicherung und Zusammenarbeit; Art. 6 Abs. 1 lit. b DSGVO, Protokolle lit. f | Dateien bis zur Löschung durch die Person; Papierkorb spätestens nach 30 Tagen (bei Speicherbedarf früher), Versionen zeitlich gestaffelt; Protokolle ohne feste Zeitfrist, begrenzt nach Größe (Kriterium: Nachvollziehbarkeit von Störungen und Missbrauch) |
| E-Mail und Webmail (ffmuc.net, fnmuc.net, ffmuc.bayern) | Postfächer: Adressen, Nachrichten (auf dem Server verschlüsselt abgelegt), Verbindungsdaten (IP-Adresse, Anmeldungen, Zustellung); Spam-Prüfung: Absender-IP wird bei öffentlichen Sperrlisten abgefragt | Postfächer und Weiterleitungen; Art. 6 Abs. 1 lit. b DSGVO, Protokolle und Spamabwehr lit. f | Nachrichten bis zur Löschung durch die Person; Zustellprotokolle wöchentlich rotiert, bis zu 5 Wochen; Zwischenablehnungen (Greylisting) 1 Tag |
| Passwortmanager | Konto, verschlüsselter Tresor (wir können Inhalte nicht lesen), Geräte- und Anmeldedaten | Passwortverwaltung; Art. 6 Abs. 1 lit. b DSGVO | bis zur Löschung des Kontos |
| Wiki (ffmuc.net/wiki) | Konto (bei Bearbeitung), Seitenänderungen mit Name und Zeitpunkt; beim Lesen nur Zugriffsprotokoll und Statistik (3.2) | Dokumentation der Community; Art. 6 Abs. 1 lit. b DSGVO, Protokolle lit. f | Änderungsverlauf dauerhaft, solange die Seite besteht (Kriterium: Nachvollziehbarkeit); Konto bis zur Löschung |
| Livestream (silo.ffmuc.net) | Zuschauer: IP-Adresse, Zeitpunkt; Chat-Name bei Nutzung des Chats | Übertragung von Veranstaltungen; Art. 6 Abs. 1 lit. f DSGVO | Zugriffsprotokolle wie 3.2 |
| VPN und VMs für Mitglieder | Konto, Gerätename, öffentlicher Schlüssel, VPN-Adresse, Zeitpunkt der letzten Verbindung, Datenmenge, Endpunkt-Adresse (nur während der Verbindung); Name und Ressourcen der VM, Verbindungsdaten; Inhalte der VM sehen wir nicht ein | Zugang und Plattform für Mitglieder-Projekte; Art. 6 Abs. 1 lit. b DSGVO | bis zur Löschung des Geräts, der VM oder des Kontos; für VM-Inhalte sind die Mitglieder selbst verantwortlich |

### 3.4 Mitgliedschaft und Spenden

| Verarbeitung | Daten | Zweck, Rechtsgrundlage | Frist |
|---|---|---|---|
| Mitgliedschaft (mitglieder.ffmuc.net; Antrag und Verwaltung über meinverein.de) | Name, Anschrift, E-Mail-Adresse, Beitrag, Ein- und Austrittsdatum, Zahlungsdaten, soweit im Antrag angegeben; mit „Mitglied werden“ verlassen Sie unsere Seite und geben die Angaben auf der Plattform des Anbieters ein | Vereinsmitgliedschaft, Beitragseinzug; Art. 6 Abs. 1 lit. b DSGVO, Aufbewahrung lit. c (§ 147 AO) | während der Mitgliedschaft; danach nur, soweit gesetzliche Pflichten es verlangen (Buchungsbelege 8, Bücher 10 Jahre nach § 147 AO); Kriterium für die übrigen Angaben: Ende der Mitgliedschaft |
| Spenden (spende.ffmuc.net) | Betrag, Name, Anschrift (für die Bescheinigung), E-Mail-Adresse; Zahlung über PayPal oder Überweisung | Spenden annehmen, Bescheinigung erstellen; Art. 6 Abs. 1 lit. b, c DSGVO | Belege nach § 147 AO (8 bzw. 10 Jahre) |
| Zahlung über PayPal | Beim Aufruf der Spenden- und der Mitgliederseite werden keine Daten an PayPal übertragen; erst beim Klick auf die Schaltfläche werden Sie zu PayPal weitergeleitet (IP-Adresse, Browserangaben) und geben dort Ihre Zahlungsdaten ein. PayPal ist für die Zahlung eigener Verantwortlicher (PayPal (Europe) S.à r.l. et Cie, S.C.A., Luxemburg) | Zahlungsabwicklung; Art. 6 Abs. 1 lit. b DSGVO | Frist bei PayPal nach deren Erklärung; bei uns Belege wie oben |

### 3.5 Kontakt und Support

| Verarbeitung | Daten | Zweck, Rechtsgrundlage | Frist |
|---|---|---|---|
| Support-Tickets | Name, E-Mail-Adresse, Inhalt und Anhänge der Anfrage, Bearbeitungsverlauf, Zugriffsprotokoll, Sitzungen | Anfragen bearbeiten; Art. 6 Abs. 1 lit. b DSGVO (Anfrage), lit. f (Organisation) | Tickets werden derzeit nicht automatisch gelöscht; Kriterium: solange zur Bearbeitung, Nachverfolgung und Dokumentation nötig; Löschung auf Anfrage jederzeit; lokale Datenbanksicherungen 3 Tage |
| Kontaktanfragen (E-Mail, Ticket, Formular) | Absender, Inhalt, Anhänge | Beantwortung; Art. 6 Abs. 1 lit. b oder f DSGVO | bis zum Abschluss der Anfrage und solange eine Rückfrage zu erwarten ist |

### 3.6 Sicherheit und Datensicherung

- **Verschlüsselung.** Alle Websites und Dienste sind per HTTPS (TLS) erreichbar; Postfächer liegen verschlüsselt auf dem Server (Art. 32 DSGVO). Zertifikate stellt Let’s Encrypt aus; dorthin gehen nur Domainnamen.
- **Zugriff.** Administratorenzugänge sind auf wenige Personen beschränkt, haben zweiten Faktor oder Passkey und werden protokolliert.
- **Angriffsabwehr.** Auffällige Zugriffe (z. B. massenhafte Anfragen, Fehlanmeldungen) werden erkannt und die IP-Adresse zeitweise gesperrt. Auf dem Mailserver sperrt das nach drei Fehlversuchen innerhalb von 10 Minuten für 3 Stunden. Zusätzlich läuft dort CrowdSec: Angriffshinweise (IP-Adresse, Art, Zeitpunkt) gehen an die CrowdSec SAS (Frankreich), im Gegenzug erhalten wir eine Liste bekannter Angreifer; Sperren dauern dort 4 Stunden. Auf Netzebene beobachten wir Angriffsmuster und können Datenverkehr begrenzen. Eine Sicherheitsüberwachung wertet auf ausgewählten Servern Systemereignisse aus; deren Alarme speichern wir 90 Tage. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
- **Zentrale Protokollverwaltung.** Server senden ihre Betriebsprotokolle an eine zentrale Sammlung auf eigenen Servern (Deutschland oder Österreich); dort bleiben Zugriffsprotokolle 2 bis 3 Tage, Anwendungsprotokolle 7 bis 9 Tage. Auf den Servern selbst gelten die Fristen in Abschnitt 5.
- **Datensicherung.** Täglich werden die Daten der Server verschlüsselt gesichert (Schlüssel nur bei uns, Verschlüsselung vor dem Hochladen). Aufbewahrt werden die letzten 7 Stände, bis zu 14 tägliche und 4 wöchentliche Stände; Speicherort Backblaze, Inc. (USA). Gelöschte Daten verschwinden aus den Sicherungen mit dem Ablauf dieser Fristen. Ein gesonderter Bereinigungslauf, der danach nicht mehr benötigte Datenblöcke aus dem Speicher entfernt, läuft derzeit nicht; gelöschte Daten bleiben daher übergangsweise länger darin (verschlüsselt, ohne Zugriff Dritter auf Klartext).
- **Vorfälle.** Verletzungen des Schutzes personenbezogener Daten melden wir der Aufsichtsbehörde binnen 72 Stunden und den Betroffenen bei hohem Risiko (Art. 33, 34 DSGVO).

## 4. Empfänger und Drittländer

| Empfänger | Zweck, Daten | Ort | Garantie / Grundlage |
|---|---|---|---|
| Rechenzentrums- und Hosting-Partner | Betrieb der Server, Standorte in München und Wien | Deutschland, Österreich | Art. 28 DSGVO bzw. Colocation-Vereinbarung |
| Hetzner Online GmbH | Server des Mail-Dienstes | Deutschland | Auftragsverarbeitung (Art. 28 DSGVO) |
| Gcore S.A. | DNS (Zone ffmuc.net): Domainnamen, DNS-Abfragen an die autoritativen Server | Luxemburg (Anbieter weltweit verteilt) | Art. 28 DSGVO; Übermittlung außerhalb EU/EWR nur auf Grundlage Art. 45/46 |
| Cloudflare, Inc. | DNS für die übrigen Domains; Webverkehr der in 3.2 genannten Domains (IP-Adresse, Anfragen), DNS-Validierung für Zertifikate | USA | EU-U.S. Data Privacy Framework (Art. 45 DSGVO; Durchführungsbeschluss (EU) 2023/1795); Auftragsverarbeitung Art. 28; Rückfall: Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) |
| Backblaze, Inc. | verschlüsselte Datensicherungen (Schlüssel nur bei uns) | USA | Art. 46 Abs. 2 lit. c DSGVO (Standardvertragsklauseln) bzw. Data Privacy Framework; Verschlüsselung als zusätzliche Maßnahme; Kopie der Garantien auf Anfrage |
| CrowdSec SAS | Angriffshinweise des Mailservers (IP-Adresse, Art, Zeitpunkt) | Frankreich | Art. 6 Abs. 1 lit. f DSGVO |
| Let’s Encrypt (ISRG) | Zertifikate, nur Domainnamen | USA | keine personenbezogenen Daten von Nutzenden |
| PayPal (Europe) S.à r.l. et Cie, S.C.A. | Zahlungsabwicklung für Spenden und Beiträge; Weiterleitung beim Klick auf die Schaltfläche | Luxemburg (Konzern weltweit) | eigener Verantwortlicher; Übermittlungen nach dessen Erklärung |
| meinverein.de (Anbieter der Mitgliederverwaltung) | Mitglieds- und Beitragsdaten | Deutschland | Auftragsverarbeitung (Art. 28 DSGVO) |
| GitHub, Inc. (GitHub Pages) | Auslieferung der Seite freie-netze.org (IP-Adresse beim Aufruf) | USA | EU-U.S. Data Privacy Framework bzw. Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) |
| Esri (nur bei Wahl der Satellitenkarte) | Kartenkacheln; Ihr Browser übermittelt IP-Adresse und Kartenausschnitt | USA | Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Auswahl der Ebene) |
| Banken, Steuerberater/Kassenprüfer | Beiträge, Spenden, Buchhaltung | Deutschland | gesetzliche Pflichten (Art. 6 Abs. 1 lit. c) |
| Andere Fediverse-Server | Beiträge, Profile bei Föderation (derzeit Mastodon); öffentlich sichtbar | weltweit | Art. 6 Abs. 1 lit. b DSGVO (Nutzung des Dienstes); Löschung dort nur anstoßbar |
| Mail-Gegenstellen | Zustellung und Annahme von E-Mail | weltweit | Art. 6 Abs. 1 lit. b DSGVO; Transport ohne Ende-zu-Ende-Verschlüsselung lesbar |
| Aufsichts- und Strafverfolgungsbehörden | nur bei gesetzlicher Pflicht | | Art. 6 Abs. 1 lit. c DSGVO |

Drittlandübermittlungen betreffen Cloudflare, Backblaze, GitHub und Esri (USA) sowie ggf. Gcore und PayPal je nach Standort. Eine Kopie der Garantien erhalten Sie auf Anfrage unter der Adresse in Abschnitt 1.

## 5. Speicherdauer

| Daten | Frist | Löschverfahren |
|---|---|---|
| Zugriffsprotokolle Webserver | 14 Tage | tägliche Rotation |
| Lastverteiler-Protokolle | wenige Stunden (IP gekürzt) | Rotation nach Größe |
| Protokolle der Verbindungen zu Anwendungen | 7 Tage | tägliche Rotation |
| Zentrale Protokollsammlung | Zugriffsprotokolle 2 bis 3 Tage, Anwendungsprotokolle 7 bis 9 Tage | automatische Löschung |
| Sicherheitsüberwachung (Alarme) | 90 Tage | automatische Löschung |
| Meet-Betriebsprotokolle | derzeit 7 bis rund 21 Tage je Server; Kriterium: Fehlersuche und Missbrauchsabwehr | Rotation |
| Anmeldeereignisse | 14 Tage (Administrationsbereich 30 Tage) | automatisch |
| Mastodon: Anmelde-IP, Sitzungen | 1 Jahr | automatisch |
| Support-Tickets | keine automatische Löschung; Kriterium: Erforderlichkeit der Bearbeitung | Löschung auf Anfrage |
| Chat-Nachrichten | bis zur Löschung durch Nutzende oder des Kontos | Löschung auf Wunsch |
| E-Mail-Zustellprotokolle | bis zu 5 Wochen | wöchentliche Rotation |
| Netzflussdaten | einzelne Flüsse 15 Tage; verdichtete Zähler ohne Endgeräte-Adressen bis zu 1 Jahr | automatisch |
| Verbindungsdaten Freifunk-Netz | Zuteilung 10 bis 60 Minuten, Meldungen am Gateway rund 4 Tage, zentral höchstens 9 Tage, Verbindungstabelle bis Verbindungsende bzw. Inaktivität | automatisch |
| Statistik | Rohdaten 180 Tage | automatisch |
| Konten und Inhalte aller Dienste | bis zur Löschung des Kontos | Löschung auf Wunsch (Abschnitt 7) |
| Datensicherungen | bis zu 4 Wochen plus Bereinigung des Speichers | automatisch |
| Mitglieds- und Spendenbelege | 8 bzw. 10 Jahre nach § 147 AO | nach Fristablauf |

## 6. Cookies und ähnliche Technologien

Auf unseren Websites setzen wir **keine** Cookies zu Werbe- oder Analysezwecken; die Statistik (3.2) arbeitet ohne Cookies. Unsere Dienste mit Anmeldung setzen technisch notwendige Sitzungs-Cookies bzw. verwenden den lokalen Speicher des Browsers; dafür ist nach § 25 Abs. 2 Nr. 2 TDDDG keine Einwilligung nötig, Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b/f DSGVO. Nach dem Klick auf die PayPal-Schaltfläche gilt die Datenschutzerklärung von PayPal, auch für dortige Cookies; auf unseren Seiten setzt PayPal keine.

| Dienst | Art | Zweck | Dauer |
|---|---|---|---|
| Zentrale Anmeldung | Sitzungs-Cookies | Anmeldesitzung | Sitzung, höchstens 10 Stunden |
| Cloud, Chat, Mastodon, Support, Wiki | Sitzungs- und Sicherheits-Cookies | Anmeldung, Schutz vor Fremdzugriffen | Sitzung bzw. Anmeldedauer der Anwendung |
| Pads (mit Konto) | Anmelde-Cookie | Anmeldung | 14 Tage |
| Meet | Einstellungen und Anzeigename im lokalen Speicher | Komfort | bis zum Löschen durch Sie |

## 7. Ihre Rechte

Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21); eine Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3). Anfragen richten Sie an hilfe@ffmuc.bayern. Wir antworten innerhalb eines Monats (Art. 12 Abs. 3), kostenfrei; zur Auskunft kann eine Identitätsprüfung nötig sein (Art. 12 Abs. 6). Für Konten und Mitgliedschaft sind Name, E-Mail-Adresse und Zugangsdaten nötig; ohne sie können wir den Dienst nicht bereitstellen. Für den offenen Internetzugang über Freifunk ist keine Anmeldung nötig. Eine automatisierte Entscheidungsfindung einschließlich Profiling (Art. 22 DSGVO) findet nicht statt.

> **Widerspruchsrecht (Art. 21 DSGVO).** Soweit wir Ihre Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch einlegen. Wir verarbeiten die Daten dann nicht mehr, es sei denn, wir weisen zwingende schutzwürdige Gründe nach, die Ihre Interessen überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Formlos per E-Mail an hilfe@ffmuc.bayern.

**Beschwerde.** Sie können sich bei einer Aufsichtsbehörde beschweren (Art. 77 DSGVO), insbesondere am Ort Ihres Aufenthalts:

- für Website, Mitglieder, Konten und Dienste: **Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)**, Promenade 18, 91522 Ansbach, Postfach 1349, 91504 Ansbach, www.lda.bayern.de (Online-Formular);
- soweit wir Telekommunikationsdienste geschäftsmäßig erbringen (Internetzugang über Freifunk, § 29 Abs. 1 TDDDG): **Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)**, Graurheindorfer Str. 153, 53117 Bonn, www.bfdi.bund.de.

Welche Behörde zuständig ist, richtet sich nach der Tätigkeit, nicht nach dem Dienstnamen.

## 8. Änderungen

Wir passen diese Erklärung an, wenn sich Dienste oder Verarbeitungen ändern, und prüfen sie mindestens halbjährlich. Das Datum oben nennt den Stand; frühere Fassungen auf Anfrage.

---

# Privacy Policy {#english-version}

(German version prevails.)

## 1. Controller, scope, date

Controller: **Freie Netze München e. V.**, Parkstraße 28, 82131 Gauting, Germany, registered at the Amtsgericht München, VR 206402, represented by the board. See the [legal notice](/impressum/). Data protection requests: hilfe@ffmuc.bayern. We have not appointed a data protection officer.

This policy covers ffmuc.net and all services under ffmuc.net (wiki, Meet, cloud, chat, Mastodon, map, firmware, webmail, VPN, VMs, DNS, status, pads, donations, membership, node management), the further domains ffmuc.bayern, fnmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de, freifunk-muenchen.de/.net, freewifi.bayern and freie-netze.org where they point to our services, and internet access through Freifunk nodes and gateways. The DNS resolvers have their own [DNS privacy statement](/dns-privacy/).

As of: 25 November 2026, version 1.0. Earlier versions on request.

## 2. In brief

- **Freifunk Wi-Fi and mesh network.** We store no content and keep no records of who visits which sites. For operation, a gateway briefly sees the device address (MAC) and the assigned internal address; these messages are deleted after about 4 days at the gateway and after at most 9 days in the central log collection. Connections are held only in memory and not logged (section 3.1).
- **Websites.** Visiting produces access data (IP address, time, page requested); it is deleted after a few hours up to 14 days. On ffmuc.net and in the wiki we count visits with self-hosted, cookie-free statistics (shortened IP address). We use no advertising or tracking cookies and pass no data on for advertising (section 3.2).
- **Community services** (Meet, chat, Mastodon, cloud, e-mail, wiki, pads and others). Account and content data stay until the account or content is deleted; logs are deleted after short periods. Video and audio of conferences are not stored (section 3.3).
- **Membership and donations.** We process member and donation data for association administration; records are kept for the statutory periods (8 or 10 years). Data flows to PayPal only once you click its button (section 3.4).
- **No tracking, no advertising.** Apart from the cookie-free statistics there is no user tracking.
- **Recipients.** Data goes only to providers we need for this (data centres, DNS, backup, membership administration, payments, attack defence), partly in the USA; the safeguard for each is in section 4.
- **Your rights.** Access, rectification, erasure, restriction, portability, objection and complaint to the supervisory authority (section 7). Contact: hilfe@ffmuc.bayern.

## 3. Details by area

Each table gives the data, the purpose with legal basis and the retention. Where there is no fixed period we state the criterion (Art. 13(2)(a) GDPR). For logs and backups see section 3.6.

### 3.1 Freifunk network

| Processing | Data | Purpose, legal basis | Retention |
|---|---|---|---|
| Internet access via Freifunk (nodes and gateways) | MAC address of the device and assigned internal address with time, data volume per device/node (counters), connection table of the gateways in memory (mapping of internal to public address/port), tunnel set-up to the gateway (key of the node, not of the device) | setting up and operating the connection, spreading load across gateways; § 9 TDDDG, Art. 6(1)(f) GDPR; secrecy of telecommunications (§ 3 TDDDG) is respected | assignment 10 to 60 minutes; address-assignment messages (MAC address, internal address, time) in the gateway system log about 4 days, centrally at most 9 days; connection table in memory only, not logged, entries expire after inactivity (established TCP connections up to 5 days); counters have no content reference (criterion: capacity planning) |
| Network flow statistics | source/destination addresses and data volumes of traffic samples at the backbone routers | network operation, capacity planning, detecting faults and attacks; Art. 6(1)(f) GDPR | single flows with addresses 15 days, buffer 1 day; aggregated counters without end-device addresses up to 1 year |
| DNS resolution (resolvers, DoH, DoT, DoQ) | no personal query logs; short-lived counters per IP address against abuse, overall statistics | name resolution; Art. 6(1)(f) GDPR | counters only for technical enforcement; statistics without personal reference; details: [DNS privacy](/dns-privacy/) |
| Management of nodes and site Wi-Fi | account of selected members, device and configuration data, change log; controllers keep lists of connected devices (MAC address, connection times, data volume) | managing and operating network devices; Art. 6(1)(b), (f) GDPR; § 9 TDDDG | account until deletion; device data while the device is managed; device lists as long as needed for operation and troubleshooting, deletion on request |

We store no content and do not log which person visits which sites. At the gateway the user's connection is translated into a public address of the association; the translations are not logged individually.

### 3.2 Websites and map

| Processing | Data | Purpose, legal basis | Retention |
|---|---|---|---|
| Visiting websites and service pages (ffmuc.net, wiki, donations, membership, VPN, VMs, DNS setup, map, firmware, status) | IP address, time, requested address, status code, data volume, browser identifier, referrer | secure, reliable operation, troubleshooting, abuse protection; Art. 6(1)(f) GDPR | access logs on the web servers 14 days; at the upstream load balancers a few hours (IP address shortened); connections to applications 7 days; in the central log collection access logs 2 to 3 days, application logs 7 to 9 days |
| Statistics (ffmuc.net, wiki) | Matomo, self-hosted, without cookies; IP address shortened before storage (two bytes); “Do Not Track” is respected | usage figures to improve the offering; Art. 6(1)(f) GDPR, objection at any time (section 7) | raw data 180 days |
| Node map (map.ffmuc.net, federated map) | name, location (coordinates), technical data and device characteristics of a node; the federated map also shows nodes of other Freifunk communities as published by them (source: that community) | making the network visible, finding faults; Art. 6(1)(f) GDPR | while the node is reported; afterwards only statistics without personal reference |

Balancing of interests: we have a legitimate interest in secure operation; the intrusion is small because the data is kept only briefly, read only by administrators and not used for profiling.

**External content.** Our pages load no fonts, scripts or images from third parties, with these exceptions: on the donation and membership pages, data goes to PayPal only when you click the PayPal button (section 3.4). In the map you can choose a satellite image from Esri as background; only then does your browser connect to Esri (USA). The other map tiles come from our own intermediate server. Links to social networks are plain links; a connection arises only on click.

**Domains via Cloudflare.** Requests to fnmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de and freewifi.bayern run through Cloudflare (section 4); Cloudflare processes IP address, requested address and headers and forwards to our services. Video and audio of Meet, e-mail traffic and webmail do not pass through it. The site freie-netze.org is served by GitHub Pages (section 4).

### 3.3 Community services

All services are for the stated purpose only. Login uses a central login with a shared member directory.

| Service | Data | Purpose, legal basis | Retention |
|---|---|---|---|
| Central login and member account | user name, name, e-mail address, password (hash only), groups, login events (time, IP address), optional second factor/passkey; for access outside membership self-registration with e-mail confirmation | login, account management, abuse protection; Art. 6(1)(b) GDPR, login logs (f) | account until deletion on request; login events 14 days (30 days in the administration area); sessions expire after 30 minutes of inactivity, at the latest after 10 hours |
| Video conference Meet (meet.ffmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de) | room name, display name, IP address, time, device data; video and audio live between participants (not stored); in-room chat only during the conference; subtitles: speech is converted to text on our servers | conference, troubleshooting, abuse defence; participation Art. 6(1)(b) GDPR, operating logs (f), subtitles (a) (consent by switching on) | operating logs (IP address, room) are rotated: depending on the server 7 days (relay servers), 14 days (web servers) up to about 3 weeks (video bridges), in the collection 2 to 9 days; criterion: as long as needed for troubleshooting and abuse defence. Content is not stored |
| Pads, whiteboard and drawings | texts and drawings, pad/board name, partly the account; for the encrypted pads we see no content; IP address in the access log | collaboration; Art. 6(1)(b) GDPR, logs (f) | content until deleted by users or on request (criterion: needed for the joint work); access logs as in 3.2 |
| Chat (Mattermost, chat.ffmuc.net) | account (name, e-mail, user name), messages, files, reactions, times, connection data | community exchange; Art. 6(1)(b) GDPR, operation (f) | until deleted by the users or the account; no automatic deletion (criterion: duration of account use) |
| Mastodon (social.ffmuc.net) | account, e-mail address, posts, media, follow relations, login IP addresses and sessions; public posts are visible in the fediverse and go to other servers | the community's fediverse server; Art. 6(1)(b) GDPR, IP addresses (f) (abuse defence) | account and posts until deletion; login IP addresses and sessions 1 year; access logs 7 days; we can only request deletion at other servers (Art. 17(2) GDPR) |
| Cloud (cloud.ffmuc.net) | account, files, calendars, contacts, activity and access log, trash and file versions | storage and collaboration; Art. 6(1)(b) GDPR, logs (f) | files until deleted by the person; trash at most 30 days (earlier if space is needed), versions thinned out over time; logs without fixed time limit, bounded by size (criterion: tracing faults and abuse) |
| E-mail and webmail (ffmuc.net, fnmuc.net, ffmuc.bayern) | mailboxes: addresses, messages (stored encrypted on the server), connection data (IP address, logins, delivery); spam check: the sender IP is looked up at public blocklists | mailboxes and forwarding; Art. 6(1)(b) GDPR, logs and spam defence (f) | messages until deleted by the person; delivery logs rotated weekly, kept up to 5 weeks; greylisting entries 1 day |
| Password manager | account, encrypted vault (we cannot read the content), device and login data | password management; Art. 6(1)(b) GDPR | until the account is deleted |
| Wiki (ffmuc.net/wiki) | account (when editing), page changes with name and time; when reading only access log and statistics (3.2) | community documentation; Art. 6(1)(b) GDPR, logs (f) | change history permanent while the page exists (criterion: traceability); account until deletion |
| Live stream (silo.ffmuc.net) | viewers: IP address, time; chat name when using the chat | broadcasting events; Art. 6(1)(f) GDPR | access logs as in 3.2 |
| VPN and VMs for members | account, device name, public key, VPN address, time of last connection, data volume, endpoint address (only while connected); VM name and resources, connection data; we do not inspect VM content | access and platform for member projects; Art. 6(1)(b) GDPR | until the device, VM or account is deleted; members are responsible for VM content |

### 3.4 Membership and donations

| Processing | Data | Purpose, legal basis | Retention |
|---|---|---|---|
| Membership (mitglieder.ffmuc.net; application and administration via meinverein.de) | name, address, e-mail address, fee, entry and exit date, payment data as given in the application; with “Become a member” you leave our site and enter the data on the provider's platform | association membership, fee collection; Art. 6(1)(b) GDPR, retention (c) (§ 147 AO) | during membership; afterwards only as far as legal duties require (vouchers 8, books 10 years under § 147 AO); criterion for the rest: end of membership |
| Donations (spende.ffmuc.net) | amount, name, address (for the receipt), e-mail address; payment via PayPal or bank transfer | accepting donations, issuing receipts; Art. 6(1)(b), (c) GDPR | records under § 147 AO (8 or 10 years) |
| Payment via PayPal | no data goes to PayPal when you open the donation and membership pages; only when you click the button are you redirected to PayPal (IP address, browser details) and enter your payment data there. PayPal is a separate controller for the payment (PayPal (Europe) S.à r.l. et Cie, S.C.A., Luxembourg) | payment processing; Art. 6(1)(b) GDPR | at PayPal per its policy; with us records as above |

### 3.5 Contact and support

| Processing | Data | Purpose, legal basis | Retention |
|---|---|---|---|
| Support tickets | name, e-mail address, content and attachments of the request, processing history, access log, sessions | handling requests; Art. 6(1)(b) GDPR (request), (f) (organisation) | tickets are currently not deleted automatically; criterion: as long as needed for handling, follow-up and documentation; deletion on request at any time; local database backups 3 days |
| Contact requests (e-mail, ticket, form) | sender, content, attachments | reply; Art. 6(1)(b) or (f) GDPR | until the request is closed and as long as a follow-up question is expected |

### 3.6 Security and backup

- **Encryption.** All websites and services are reachable over HTTPS (TLS); mailboxes are stored encrypted on the server (Art. 32 GDPR). Certificates are issued by Let’s Encrypt; only domain names go there.
- **Access.** Administrator access is limited to a few people, uses a second factor or passkey and is logged.
- **Attack defence.** Conspicuous access (e.g. mass requests, failed logins) is detected and the IP address temporarily blocked. On the mail server this blocks for 3 hours after three failed attempts within 10 minutes. CrowdSec also runs there: attack indications (IP address, type, time) go to CrowdSec SAS (France), and in return we receive a list of known attackers; blocks last 4 hours. At network level we observe attack patterns and can limit traffic. A security monitoring evaluates system events on selected servers; its alerts are kept for 90 days. Legal basis: Art. 6(1)(f) GDPR.
- **Central log management.** Servers send their operating logs to a central collection on our own servers (Germany or Austria); access logs stay there 2 to 3 days, application logs 7 to 9 days. On the servers themselves the periods in section 5 apply.
- **Backup.** The servers' data is backed up daily, encrypted (key only with us, encrypted before upload). We keep the last 7 snapshots, up to 14 daily and 4 weekly; storage location Backblaze, Inc. (USA). Deleted data disappears from the backups as these periods expire. A separate clean-up run that removes data blocks no longer needed from the storage is currently not running; deleted data therefore stays in it longer for the time being (encrypted, no third-party access to plaintext).
- **Incidents.** We report personal data breaches to the supervisory authority within 72 hours and to data subjects where the risk is high (Art. 33, 34 GDPR).

## 4. Recipients and third countries

| Recipient | Purpose, data | Location | Safeguard / basis |
|---|---|---|---|
| Data-centre and hosting partners | running the servers, sites in Munich and Vienna | Germany, Austria | Art. 28 GDPR or colocation agreement |
| Hetzner Online GmbH | servers of the mail service | Germany | processing on behalf (Art. 28 GDPR) |
| Gcore S.A. | DNS (zone ffmuc.net): domain names, DNS queries to the authoritative servers | Luxembourg (provider distributed worldwide) | Art. 28 GDPR; transfers outside the EU/EEA only under Art. 45/46 |
| Cloudflare, Inc. | DNS for the other domains; web traffic of the domains named in 3.2 (IP address, requests), DNS validation for certificates | USA | EU-U.S. Data Privacy Framework (Art. 45 GDPR; implementing decision (EU) 2023/1795); processing on behalf Art. 28; fallback: standard contractual clauses (Art. 46(2)(c)) |
| Backblaze, Inc. | encrypted backups (key only with us) | USA | Art. 46(2)(c) GDPR (standard contractual clauses) or Data Privacy Framework; encryption as supplementary measure; copy of the safeguards on request |
| CrowdSec SAS | attack indications from the mail server (IP address, type, time) | France | Art. 6(1)(f) GDPR |
| Let’s Encrypt (ISRG) | certificates, domain names only | USA | no personal data of users |
| PayPal (Europe) S.à r.l. et Cie, S.C.A. | payment processing for donations and fees; redirect when the button is clicked | Luxembourg (group worldwide) | separate controller; transfers per its policy |
| meinverein.de (provider of the membership administration) | member and fee data | Germany | processing on behalf (Art. 28 GDPR) |
| GitHub, Inc. (GitHub Pages) | delivery of the site freie-netze.org (IP address on access) | USA | EU-U.S. Data Privacy Framework or standard contractual clauses (Art. 46(2)(c)) |
| Esri (only if the satellite map is chosen) | map tiles; your browser transmits IP address and map section | USA | Art. 6(1)(a) GDPR (consent by choosing the layer) |
| Banks, tax advisers/auditors | fees, donations, bookkeeping | Germany | legal obligation (Art. 6(1)(c)) |
| Other fediverse servers | posts, profiles under federation (currently Mastodon); publicly visible | worldwide | Art. 6(1)(b) GDPR (use of the service); deletion there can only be requested |
| Mail counterparts | delivery and receipt of e-mail | worldwide | Art. 6(1)(b) GDPR; transport readable without end-to-end encryption |
| Supervisory and law enforcement authorities | only on legal obligation | | Art. 6(1)(c) GDPR |

Third-country transfers concern Cloudflare, Backblaze, GitHub and Esri (USA) and, depending on location, Gcore and PayPal. You can get a copy of the safeguards on request at the address in section 1.

## 5. Retention

| Data | Period | Deletion method |
|---|---|---|
| Web server access logs | 14 days | daily rotation |
| Load balancer logs | a few hours (IP shortened) | rotation by size |
| Logs of connections to applications | 7 days | daily rotation |
| Central log collection | access logs 2 to 3 days, application logs 7 to 9 days | automatic deletion |
| Security monitoring (alerts) | 90 days | automatic deletion |
| Meet operating logs | currently 7 to about 21 days depending on the server; criterion: troubleshooting and abuse defence | rotation |
| Login events | 14 days (administration area 30 days) | automatic |
| Mastodon: login IP, sessions | 1 year | automatic |
| Support tickets | no automatic deletion; criterion: needed for handling | deletion on request |
| Chat messages | until deleted by users or the account | deletion on request |
| E-mail delivery logs | up to 5 weeks | weekly rotation |
| Network flow data | single flows 15 days; aggregated counters without end-device addresses up to 1 year | automatic |
| Connection data Freifunk network | assignment 10 to 60 minutes, messages at the gateway about 4 days, centrally at most 9 days, connection table until connection end or inactivity | automatic |
| Statistics | raw data 180 days | automatic |
| Accounts and content of all services | until the account is deleted | deletion on request (section 7) |
| Backups | up to 4 weeks plus storage clean-up | automatic |
| Membership and donation records | 8 or 10 years under § 147 AO | after expiry |

## 6. Cookies and similar technologies

On our websites we set **no** cookies for advertising or analytics; the statistics (3.2) work without cookies. Our services with login set technically necessary session cookies or use the browser's local storage; under § 25(2) no. 2 TDDDG no consent is needed, the legal basis for the processing is Art. 6(1)(b)/(f) GDPR. After you click the PayPal button, PayPal's privacy policy applies, including to cookies set there; PayPal sets none on our pages.

| Service | Type | Purpose | Duration |
|---|---|---|---|
| Central login | session cookies | login session | session, at most 10 hours |
| Cloud, chat, Mastodon, support, wiki | session and security cookies | login, protection against third-party access | session or login duration of the application |
| Pads (with account) | login cookie | login | 14 days |
| Meet | settings and display name in local storage | convenience | until you delete them |

## 7. Your rights

You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), data portability (Art. 20) and to object (Art. 21); you may withdraw consent at any time with effect for the future (Art. 7(3)). Send requests to hilfe@ffmuc.bayern. We reply within one month (Art. 12(3)), free of charge; an identity check may be needed for access requests (Art. 12(6)). For accounts and membership, name, e-mail address and login data are required; without them we cannot provide the service. The open internet access via Freifunk needs no registration. No automated decision-making including profiling (Art. 22 GDPR) takes place.

> **Right to object (Art. 21 GDPR).** Where we process your data on the basis of legitimate interests (Art. 6(1)(f) GDPR) you may object at any time on grounds relating to your particular situation. We will then stop processing unless we demonstrate compelling legitimate grounds that override your interests, or the processing serves the establishment, exercise or defence of legal claims. Informally by e-mail to hilfe@ffmuc.bayern.

**Complaint.** You may complain to a supervisory authority (Art. 77 GDPR), in particular at your place of residence:

- for websites, members, accounts and services: **Bavarian State Office for Data Protection Supervision (BayLDA)**, Promenade 18, 91522 Ansbach, Germany, PO box 1349, 91504 Ansbach, www.lda.bayern.de (online form);
- where we provide telecommunications services on a business basis (internet access via Freifunk, § 29(1) TDDDG): **Federal Commissioner for Data Protection and Freedom of Information (BfDI)**, Graurheindorfer Str. 153, 53117 Bonn, Germany, www.bfdi.bund.de.

The competent authority depends on the activity, not on the service name.

## 8. Changes

We adapt this policy when services or processing change and review it at least every six months. The date above gives the version; earlier versions on request.
