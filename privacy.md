---
layout: single
title: Datenschutzerklärung / Privacy Policy
permalink: /privacy/
---

[English version below](#english-version)

# Datenschutzerklärung

## 0. Geltungsbereich und Stand

Stand: 25.11.2026, Fassung 1.0. Frühere Fassungen auf Anfrage.

Diese Erklärung gilt für ffmuc.net und alle Dienste unter ffmuc.net (u. a. Wiki, Meet, Cloud, Chat, Mastodon, Karte, Firmware, Webmail, VPN, VMs, DNS, Status, Pads, Spenden, Mitgliedschaft, Knotenverwaltung), für die weiteren Domains ffmuc.bayern, fnmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de, freifunk-muenchen.de/.net, freewifi.bayern und freie-netze.org, soweit sie auf unsere Dienste verweisen, sowie für den Internetzugang über Freifunk-Knoten und Gateways. Für die DNS-Resolver gilt zusätzlich die [DNS-Privacy-Erklärung](/dns-privacy/).

## 1. Verantwortlicher und Kontakt

Verantwortlich ist die **Freie Netze München e. V.**, Parkstraße 28, 82131 Gauting, eingetragen im Vereinsregister des Amtsgerichts München unter VR 206402, vertreten durch den Vorstand. Weitere Angaben im [Impressum](/impressum/).

Datenschutzanfragen: hilfe@ffmuc.bayern

Einen Datenschutzbeauftragten haben wir nicht benannt. Fragen zum Datenschutz richten Sie an die obige Adresse.

## 2. Das Wichtigste in Kürze

- Wir sind ein ehrenamtlicher Verein und betreiben das Freifunk-Netz München sowie Dienste für Mitglieder und die Community.
- Beim Besuch unserer Websites speichern wir Zugriffsdaten kurzzeitig, um den Betrieb zu sichern. Auf ffmuc.net und im Wiki zählen wir Besuche mit Matomo (selbst betrieben, ohne Cookies, mit gekürzter IP-Adresse). Wir setzen keine Werbe-Cookies und geben keine Daten zu Werbezwecken weiter.
- Über das Freifunk-WLAN speichern wir keine Inhalte und führen keine Protokolle darüber, wer welche Seiten aufruft. Technische Verbindungsdaten (Geräte-Adresse, zugeteilte interne Adresse) fallen kurzzeitig im Betrieb an (Abschnitt 4.4).
- Wer ein Konto bei uns hat (Cloud, Chat, Mastodon, E-Mail, Passwortmanager und weitere), dessen Konto- und Nutzungsdaten werden bis zur Löschung des Kontos gespeichert; Protokolle werden nach kurzen Fristen gelöscht. Details je Dienst in Abschnitt 4.
- Empfänger sind unsere Dienstleister für Rechenzentren, DNS, Datensicherung, Mitgliederverwaltung und Zahlungen (Abschnitt 7). Einige sitzen in den USA; dafür nennen wir die Garantie.
- Die Speicherfristen stehen je Dienst in Abschnitt 4 und gesammelt in Abschnitt 8. Wo wir keine feste Frist haben, nennen wir das Kriterium.
- Sie haben die Rechte nach Abschnitt 10 und können sich bei der Aufsichtsbehörde beschweren.

## 3. Besuch der Websites

| Dienst | Daten | Zweck | Rechtsgrundlage | Frist |
|---|---|---|---|---|
| Websites und Dienstseiten (ffmuc.net, Wiki, Spende, Mitglieder, VPN, VMs, DNS-Einrichtung, Karte, Firmware, Status) | IP-Adresse, Zeitpunkt, aufgerufene Adresse, Statuscode, Datenmenge, Browserkennung, Referrer | sicherer, störungsfreier Betrieb, Fehlersuche, Abwehr von Missbrauch | Art. 6 Abs. 1 lit. f DSGVO | Zugriffsprotokolle auf den Webservern 14 Tage; an den vorgeschalteten Lastverteilern nur wenige Stunden (IP-Adresse dort gekürzt); Verbindungen zu Anwendungen (Reverse Proxy) 7 Tage; in der zentralen Protokollsammlung Zugriffsprotokolle 2 bis 3 Tage, Anwendungsprotokolle 7 bis 9 Tage |

Interessenabwägung: Wir haben ein berechtigtes Interesse am sicheren Betrieb; der Eingriff ist gering, weil die Daten nur kurz gespeichert, nur von Administratoren gelesen und nicht zur Profilbildung genutzt werden.

**Angriffs- und Bot-Schutz.** Auffällige Zugriffe (z. B. massenhafte Anfragen, Fehlanmeldungen) werden erkannt und die IP-Adresse zeitweise gesperrt (Fail2ban). Auf dem Mailserver sperrt Fail2ban nach drei Fehlversuchen innerhalb von 10 Minuten für 3 Stunden. Zusätzlich läuft dort CrowdSec: Angriffshinweise (IP-Adresse, Art, Zeitpunkt) gehen an die CrowdSec SAS (Frankreich), im Gegenzug erhalten wir eine Liste bekannter Angreifer; Sperren dauern dort 4 Stunden. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Schutz der Dienste).

**Statistik.** Auf ffmuc.net und im Wiki messen wir die Nutzung mit Matomo (selbst betrieben, ohne Cookies). IP-Adressen werden vor der Speicherung gekürzt (zwei Bytes), die Browser-Einstellung „Do Not Track“ wird beachtet. Rohdaten werden nach 180 Tagen gelöscht. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Interesse an Nutzungszahlen zur Verbesserung des Angebots); Sie können jederzeit widersprechen (Abschnitt 10).

**Externe Inhalte.** Unsere Seiten laden keine Schriften, Skripte oder Bilder von Dritten, mit diesen Ausnahmen: Auf der Spenden- und der Mitgliederseite werden erst beim Klick auf die PayPal-Schaltfläche Daten an PayPal übertragen (Abschnitt 5). In der Karte können Sie als Hintergrund ein Satellitenbild von Esri wählen; erst dann verbindet sich Ihr Browser mit Esri (USA). Die übrigen Kartenkacheln liefert unser eigener Zwischenserver. Links zu sozialen Netzwerken sind einfache Verweise; eine Verbindung dorthin entsteht erst beim Klick.

**Domains über Cloudflare.** Aufrufe der Domains fnmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de und freewifi.bayern laufen über Cloudflare (Abschnitt 7); Cloudflare verarbeitet dabei IP-Adresse, aufgerufene Adresse und Kopfzeilen und leitet zu unseren Diensten weiter. Bild und Ton von Meet, E-Mail-Verkehr und Webmail laufen nicht darüber. Die Seite freie-netze.org wird von GitHub Pages ausgeliefert (Abschnitt 7).

## 4. Konten und Dienste

Alle Dienste sind nur für den genannten Zweck bestimmt. Jede Zeile nennt die Daten, die bei Nutzung anfallen; Protokolle und Datensicherungen siehe Abschnitt 6. Wo keine feste Frist besteht, nennen wir das Kriterium der Speicherung (Art. 13 Abs. 2 lit. a DSGVO). Für Datensicherungen gilt zusätzlich: gelöschte Daten bleiben bis zu 4 Wochen in den verschlüsselten Sicherungen; die endgültige Bereinigung des Sicherungsspeichers läuft derzeit nicht, daher können gelöschte Daten übergangsweise länger darin verbleiben (Abschnitt 6).

### 4.1 Zentrale Anmeldung und Mitgliederkonto

| Dienst | Daten | Zweck | Rechtsgrundlage | Frist |
|---|---|---|---|---|
| Zentrale Anmeldung (Keycloak) und Mitgliederverzeichnis (LDAP) | Benutzername, Name, E-Mail-Adresse, Passwort (nur als Hash), Mitgliedschaft in Gruppen, Anmeldeereignisse (Zeitpunkt, IP-Adresse), optional zweiter Faktor/Passkey; bei Zugängen außerhalb der Mitgliedschaft Selbstregistrierung mit E-Mail-Bestätigung | Anmeldung an den Diensten, Kontoverwaltung, Schutz vor Missbrauch | Art. 6 Abs. 1 lit. b DSGVO (Nutzung des Dienstes), Anmeldeprotokolle lit. f | Konto bis zur Löschung auf Wunsch; Anmeldeereignisse 14 Tage (im Administrationsbereich 30 Tage); Anmeldesitzungen verfallen nach 30 Minuten Inaktivität bzw. spätestens nach 10 Stunden |
| Administrationswerkzeuge (Monitoring, Protokollsammlung, Verzeichnisse, Sicherheitsüberwachung) | Konten der Administratoren, Betriebs- und Sicherheitsprotokolle von Servern (IP-Adressen, Benutzernamen, Anmeldungen), Alarme der Sicherheitsüberwachung | Betrieb und Sicherheit der Infrastruktur | Art. 6 Abs. 1 lit. f DSGVO | Protokolle 2 bis 9 Tage in der Sammlung, auf den Servern nach Rotation (Abschnitt 8); Alarme der Sicherheitsüberwachung 90 Tage (Index und Alarmdateien); Konten bis zum Ausscheiden |

### 4.2 Kommunikation und Zusammenarbeit

| Dienst | Daten | Zweck | Rechtsgrundlage | Frist |
|---|---|---|---|---|
| Videokonferenz Meet (meet.ffmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de) | Raumname, Anzeigename, IP-Adresse, Zeitpunkt, Gerätedaten; Bild und Ton live zwischen den Teilnehmenden (nicht gespeichert); Chat im Raum nur während der Konferenz; Untertitel: Sprache wird auf unseren Servern in Text umgewandelt | Bereitstellung der Konferenz, Fehlersuche, Missbrauchsabwehr | Teilnahme: Art. 6 Abs. 1 lit. b DSGVO; Betriebsprotokolle: lit. f (Fehlersuche, Missbrauchsabwehr); Untertitel: lit. a (Einwilligung durch Einschalten) | Betriebsprotokolle (IP-Adresse, Raum) werden automatisch rotiert; derzeit je nach Server 7 Tage (Relay-Server), 14 Tage (Webserver) bis zu rund 3 Wochen (Videobrücken), in der Sammlung 2 bis 9 Tage. Kriterium: solange für Fehlersuche und Missbrauchsabwehr nötig. Inhalte der Konferenz werden nicht gespeichert |
| Meet: Pads und Whiteboard (Etherpad, Excalidraw, Whiteboard) | Texte und Zeichnungen, Pad-/Boardname; IP-Adresse im Zugriffsprotokoll | gemeinsames Arbeiten in der Konferenz | Art. 6 Abs. 1 lit. b DSGVO; Protokolle lit. f | Inhalte bleiben, bis sie gelöscht werden (durch Nutzende oder auf Anfrage); Kriterium: Erforderlichkeit für die gemeinsame Arbeit; Zugriffsprotokolle wie in Abschnitt 3 |
| Chat (Mattermost, chat.ffmuc.net) | Konto (Name, E-Mail, Benutzername), Nachrichten, Dateien, Reaktionen, Zeitpunkte, Verbindungsdaten | Austausch der Community | Art. 6 Abs. 1 lit. b DSGVO, Betrieb lit. f | Nachrichten und Dateien bis zur Löschung durch die Nutzenden oder des Kontos; keine automatische Löschung (Kriterium: Dauer der Kontonutzung) |
| Mastodon (social.ffmuc.net) | Konto, E-Mail-Adresse, Beiträge, Medien, Folgebeziehungen, Anmelde-IP-Adressen und Sitzungen; öffentliche Beiträge sind im Fediverse sichtbar und gehen an andere Server | Fediverse-Server der Community | Art. 6 Abs. 1 lit. b DSGVO; IP-Adressen lit. f (Missbrauchsabwehr) | Konto und Beiträge bis zur Löschung; Anmelde-IP-Adressen und Sitzungen 1 Jahr (Einstellung von Mastodon); Zugriffsprotokolle 7 Tage; Löschung bei anderen Servern können wir nur anstoßen (Art. 17 Abs. 2 DSGVO) |
| Cloud (Nextcloud, cloud.ffmuc.net) | Konto, Dateien, Kalender, Kontakte, Aktivitäts- und Zugriffsprotokoll, Papierkorb und Dateiversionen | Datenspeicherung und Zusammenarbeit | Art. 6 Abs. 1 lit. b DSGVO; Protokolle lit. f | Dateien bis zur Löschung durch die Person; Papierkorb und Versionen nach den Standardregeln von Nextcloud (Papierkorb spätestens nach 30 Tagen, bei Speicherbedarf früher; Versionen zeitlich gestaffelt); Protokolle ohne feste Zeitfrist, begrenzt nach Dateigröße (Kriterium: Nachvollziehbarkeit von Störungen und Missbrauch) |
| Pads und Zeichnungen (HedgeDoc, CryptPad) | Texte und Zeichnungen, Pad-Name, bei HedgeDoc das Konto; bei CryptPad Ende-zu-Ende-verschlüsselt, wir sehen keine Inhalte; IP-Adresse im Zugriffsprotokoll | gemeinsames Arbeiten | Art. 6 Abs. 1 lit. b DSGVO; Protokolle lit. f | Inhalte bis zur Löschung durch Nutzende oder auf Anfrage; Zugriffsprotokolle wie in Abschnitt 3 |
| Livestream (Owncast, silo.ffmuc.net) | Zuschauer: IP-Adresse, Zeitpunkt; Chat-Name bei Nutzung des Chats | Übertragung von Veranstaltungen | Art. 6 Abs. 1 lit. f DSGVO | Zugriffsprotokolle wie in Abschnitt 3 |
| E-Mail und Webmail (Domains ffmuc.net, fnmuc.net, ffmuc.bayern) | Postfächer: Adressen, Nachrichten (auf dem Server verschlüsselt abgelegt), Verbindungsdaten (IP-Adresse, Anmeldungen, Zustellung); Spam-Prüfung: Absender-IP wird bei öffentlichen Sperrlisten abgefragt | Postfächer und Weiterleitungen | Art. 6 Abs. 1 lit. b DSGVO; Protokolle und Spamabwehr lit. f | Nachrichten bis zur Löschung durch die Person; Zustellprotokolle werden wöchentlich rotiert und bis zu 5 Wochen aufbewahrt; Greylisting-Einträge 1 Tag |
| Passwortmanager (Vaultwarden) | Konto, verschlüsselter Tresor (wir können Inhalte nicht lesen), Geräte- und Anmeldedaten | Passwortverwaltung | Art. 6 Abs. 1 lit. b DSGVO | bis zur Löschung des Kontos |
| Wiki (DokuWiki, ffmuc.net/wiki) | Konto (bei Bearbeitung, aus dem Mitgliederverzeichnis), Seitenänderungen mit Name und Zeitpunkt; beim Lesen nur Zugriffsprotokoll und Statistik (Abschnitt 3) | Dokumentation der Community | Art. 6 Abs. 1 lit. b DSGVO, Protokolle lit. f | Änderungsverlauf dauerhaft, solange die Seite besteht (Kriterium: Nachvollziehbarkeit der Dokumentation); Konto bis zur Löschung |

### 4.3 Support, Netzdienste, Karte

| Dienst | Daten | Zweck | Rechtsgrundlage | Frist |
|---|---|---|---|---|
| Support-Tickets (Zammad) | Name, E-Mail-Adresse, Inhalt und Anhänge der Anfrage, Bearbeitungsverlauf; Zugriffsprotokoll der Anwendung, Sitzungen | Anfragen bearbeiten | Art. 6 Abs. 1 lit. b DSGVO (Anfrage), lit. f (Organisation) | Tickets werden derzeit nicht automatisch gelöscht; Kriterium: solange zur Bearbeitung, Nachverfolgung und Dokumentation nötig; Löschung auf Anfrage jederzeit; lokale Datenbanksicherungen 3 Tage |
| VPN (vpn.ffmuc.net, Zugang zu VM- und Netzdiensten) | Konto, Gerätename, öffentlicher Schlüssel, VPN-Adresse, Zeitpunkt der letzten Verbindung, Datenmenge, Endpunkt-Adresse (nur im Zustand der Verbindung) | Zugang | Art. 6 Abs. 1 lit. b DSGVO | bis zur Löschung des Geräts oder Kontos (Kriterium: Dauer der Nutzung) |
| VMs für Mitglieder (vms.ffmuc.net, Virtualisierung) | Konto, Name der VM, Ressourcen, Verbindungsdaten; Inhalte der VM sehen wir nicht ein | Plattform für Mitglieder-Projekte | Art. 6 Abs. 1 lit. b DSGVO | bis zur Löschung der VM; für ihre Inhalte sind die Mitglieder selbst verantwortlich |
| Knotenverwaltung (OpenWISP, openwisp.ffmuc.net) | Konto (Anmeldung über die zentrale Anmeldung, nur für ausgewählte Mitglieder), Geräte- und Konfigurationsdaten verwalteter Geräte, Änderungsprotokoll | Verwaltung von Netzgeräten | Art. 6 Abs. 1 lit. b, f DSGVO | Konto bis zur Löschung; Gerätedaten, solange das Gerät verwaltet wird |
| DNS-Resolver (anycast, DoH, DoT, DoQ) | keine personenbezogenen Abfrageprotokolle; kurzlebige Zähler je IP-Adresse gegen Missbrauch, Gesamtstatistik | Namensauflösung | Art. 6 Abs. 1 lit. f DSGVO | Zähler nur für die technische Durchsetzung; Statistik ohne Personenbezug. Einzelheiten: [DNS-Privacy](/dns-privacy/) |
| Knotenkarte und Knotendaten (map.ffmuc.net, föderierte Karte) | Name, Standort (Koordinaten), technische Daten und Geräte-Merkmale eines Knotens. Die föderierte Karte zeigt zusätzlich Knoten anderer Freifunk-Communities nach deren Veröffentlichung (Quelle: die jeweilige Community) | Netz sichtbar machen, Störungen finden | Art. 6 Abs. 1 lit. f DSGVO | solange der Knoten gemeldet wird (Kriterium: Betrieb des Knotens); danach nur Statistiken ohne Personenbezug |
| Netzflussstatistik (Router-Flussdaten) | Quell-/Ziel-Adressen und Datenmengen von Stichproben des Verkehrs an den Backbone-Routern | Netzbetrieb, Kapazitätsplanung, Störungs- und Angriffserkennung | Art. 6 Abs. 1 lit. f DSGVO | einzelne Flüsse mit Adressen 15 Tage, Zwischenspeicher 1 Tag; verdichtete Zähler ohne Endgeräte-Adressen bis zu 1 Jahr |
| WLAN-Controller und Standort-WLAN (UniFi, Omada, UISP) | Gerätedaten der Zugangspunkte; die Controller führen Listen verbundener Endgeräte (MAC-Adresse, Verbindungszeiten, Datenmenge) | Betrieb der Standort-WLANs | Art. 6 Abs. 1 lit. f DSGVO; § 9 TDDDG | Kriterium: solange für Betrieb und Fehlersuche des Standort-WLANs nötig; Löschung auf Anfrage |

### 4.4 Freifunk-Internetzugang (Knoten und Gateways)

| Dienst | Daten | Zweck | Rechtsgrundlage | Frist |
|---|---|---|---|---|
| Internetzugang über Freifunk | MAC-Adresse des Geräts und zugeteilte interne Adresse (DHCP) samt Zeitpunkt, Datenmenge je Gerät/Knoten (Zähler), Verbindungstabelle der Gateways im Arbeitsspeicher (Zuordnung interner zu öffentlicher Adresse/Port), Verbindungsaufbau zum Gateway (Schlüssel des Knotens, nicht des Geräts) | Aufbau und Betrieb der Verbindung, Verteilung der Last auf Gateways | § 9 TDDDG (Verkehrsdaten); Art. 6 Abs. 1 lit. f DSGVO für den Betrieb; das Fernmeldegeheimnis (§ 3 TDDDG) wird gewahrt | Zuteilung (Lease) 10 bis 60 Minuten; Meldungen des DHCP-Dienstes (MAC-Adresse, interne Adresse, Zeitpunkt) stehen im Systemprotokoll des Gateways und werden dort nach rund 4 Tagen gelöscht, in der zentralen Sammlung nach höchstens 9 Tagen; Verbindungstabelle nur im Speicher, nicht protokolliert, Einträge verfallen nach Inaktivität (bestehende TCP-Verbindungen bis zu 5 Tage); Zähler: Kriterium Kapazitätsplanung, ohne Bezug zu Inhalten |

Wir speichern keine Inhalte und protokollieren nicht, welche Person welche Seiten aufruft. Die Internetverbindung der Nutzenden wird am Gateway in eine öffentliche Adresse des Vereins übersetzt; auf den Gateways werden dabei weder Verbindungen noch Übersetzungen einzeln protokolliert.

## 5. Mitgliedschaft, Spenden, Kontakt

| Dienst | Daten | Zweck | Rechtsgrundlage | Frist |
|---|---|---|---|---|
| Mitgliedschaft (Seite mitglieder.ffmuc.net; Antrag und Verwaltung über den Anbieter meinverein.de) | Name, Anschrift, E-Mail-Adresse, Beitrag, Ein- und Austrittsdatum, Zahlungsdaten, soweit im Antrag angegeben; mit „Mitglied werden“ verlassen Sie unsere Seite und geben die Angaben auf der Plattform des Anbieters ein | Vereinsmitgliedschaft, Beitragseinzug | Art. 6 Abs. 1 lit. b DSGVO; Aufbewahrung lit. c DSGVO (§ 147 AO) | Daten während der Mitgliedschaft; danach nur, soweit gesetzliche Aufbewahrungspflichten es verlangen (Buchungsbelege 8, Bücher 10 Jahre nach § 147 AO); Kriterium für die übrigen Angaben: Ende der Mitgliedschaft |
| Spenden (spende.ffmuc.net) | Betrag, Name, Anschrift (für Bescheinigung), E-Mail-Adresse; Zahlung über PayPal oder Überweisung | Spenden annehmen, Bescheinigung erstellen | Art. 6 Abs. 1 lit. b, c DSGVO | Belege nach § 147 AO (8 bzw. 10 Jahre) |
| Zahlung über PayPal | Beim Aufruf der Spenden- und der Mitgliederseite werden keine Daten an PayPal übertragen; erst beim Klick auf die Schaltfläche werden Sie zu PayPal weitergeleitet (IP-Adresse, Browserangaben) und geben dort Ihre Zahlungsdaten ein. PayPal ist für die Zahlung eigener Verantwortlicher (PayPal (Europe) S.à r.l. et Cie, S.C.A., Luxemburg) | Zahlungsabwicklung, Bereitstellen der Zahlungsmöglichkeit | Art. 6 Abs. 1 lit. b DSGVO | Frist bei PayPal nach deren Erklärung; bei uns Belege wie oben |
| Kontaktanfragen (E-Mail, Ticket, Formular) | Absender, Inhalt, Anhänge | Beantwortung | Art. 6 Abs. 1 lit. b oder f DSGVO | Kriterium: bis zum Abschluss der Anfrage und solange eine Rückfrage zu erwarten ist; Tickets siehe 4.3 |

## 6. Sicherheit, Protokolle, Datensicherung

- **Verschlüsselung.** Alle Websites und Dienste sind per HTTPS (TLS) erreichbar; Postfächer werden auf dem Server verschlüsselt abgelegt (technische Maßnahme nach Art. 32 DSGVO). Zertifikate stellt Let’s Encrypt (ISRG, USA) aus; dorthin gehen nur Domainnamen.
- **Zugriff.** Administratorenzugänge sind auf wenige Personen beschränkt, haben zweiten Faktor oder Passkey und werden protokolliert.
- **Angriffsabwehr.** Siehe Abschnitt 3 (Fail2ban, CrowdSec). Auf Netzebene beobachten wir Angriffsmuster (Flussdaten, Paketmerkmale) und können Datenverkehr begrenzen. Eine Sicherheitsüberwachung (Wazuh) wertet auf ausgewählten Servern Systemereignisse aus; deren Alarme speichern wir 90 Tage.
- **Zentrale Protokollsammlung.** Server senden ihre Betriebsprotokolle an eine zentrale Sammlung (selbst betrieben, in Deutschland oder Österreich); dort bleiben Zugriffsprotokolle 2 bis 3 Tage, Anwendungsprotokolle 7 bis 9 Tage. Auf den Servern selbst gelten die Fristen in Abschnitt 8.
- **Datensicherung.** Täglich werden die Daten der Server verschlüsselt gesichert (Schlüssel nur bei uns, Verschlüsselung vor dem Hochladen). Aufbewahrt werden die letzten 7 Stände, bis zu 14 tägliche und 4 wöchentliche Stände; Speicherort Backblaze, Inc. (USA). Datenbank-Sicherungen von Zammad lokal 3 Tage. Gelöschte Daten verschwinden aus den Sicherungen mit dem Ablauf dieser Fristen; ein gesonderter Bereinigungslauf entfernt danach nicht mehr benötigte Datenblöcke aus dem Speicher und läuft derzeit nicht, daher bleiben gelöschte Daten übergangsweise länger darin (verschlüsselt, ohne Zugriff Dritter auf Klartext).
- **Vorfälle.** Verletzungen des Schutzes personenbezogener Daten melden wir der Aufsichtsbehörde binnen 72 Stunden und den Betroffenen bei hohem Risiko (Art. 33, 34 DSGVO).

## 7. Empfänger, Auftragsverarbeiter, Drittländer

| Empfänger | Zweck, Daten | Ort | Garantie / Grundlage |
|---|---|---|---|
| Rechenzentrums- und Hosting-Partner | Betrieb der Server, Standorte in München und Wien | Deutschland, Österreich | Art. 28 DSGVO bzw. Colocation-Vereinbarung |
| Hetzner Online GmbH | Server des Mail-Dienstes | Deutschland | Auftragsverarbeitung (Art. 28 DSGVO) |
| Gcore S.A. | DNS (Zone ffmuc.net): Domainnamen, DNS-Abfragen an die autoritativen Server | Luxemburg (Anbieter weltweit verteilt) | Art. 28 DSGVO; Übermittlung außerhalb EU/EWR nur auf Grundlage Art. 45/46 |
| Cloudflare, Inc. | DNS für die übrigen Domains; Webverkehr der in Abschnitt 3 genannten Domains (IP-Adresse, Anfragen), DNS-Validierung für Zertifikate | USA | EU-U.S. Data Privacy Framework (Art. 45 DSGVO; Durchführungsbeschluss (EU) 2023/1795); Auftragsverarbeitung Art. 28; Rückfall: Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) |
| Backblaze, Inc. | verschlüsselte Datensicherungen (wir verschlüsseln vor dem Hochladen, Schlüssel nur bei uns) | USA | Art. 46 Abs. 2 lit. c DSGVO (Standardvertragsklauseln) bzw. Data Privacy Framework; Verschlüsselung als zusätzliche Maßnahme; Kopie der Garantien auf Anfrage |
| CrowdSec SAS | Angriffshinweise des Mailservers (IP-Adresse, Art, Zeitpunkt) | Frankreich | Art. 6 Abs. 1 lit. f DSGVO |
| Let’s Encrypt (ISRG) | Zertifikate, nur Domainnamen | USA | keine personenbezogenen Daten von Nutzenden |
| PayPal (Europe) S.à r.l. et Cie, S.C.A. | Zahlungsabwicklung für Spenden und Beiträge; Weiterleitung beim Klick auf die Schaltfläche | Luxemburg (Konzern weltweit) | eigener Verantwortlicher; Übermittlungen nach dessen Erklärung |
| meinverein.de (Anbieter der Mitgliederverwaltung) | Mitglieds- und Beitragsdaten | Deutschland | Auftragsverarbeitung (Art. 28 DSGVO) |
| GitHub, Inc. (GitHub Pages) | Auslieferung der Seite freie-netze.org (IP-Adresse beim Aufruf) | USA | EU-U.S. Data Privacy Framework bzw. Standardvertragsklauseln (Art. 46 Abs. 2 lit. c) |
| Esri (nur bei Wahl der Satellitenkarte) | Kartenkacheln; Ihr Browser übermittelt IP-Adresse und Kartenausschnitt | USA | Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Auswahl der Ebene) |
| Banken, Steuerberater/Kassenprüfer | Beiträge, Spenden, Buchhaltung | Deutschland | gesetzliche Pflichten (Art. 6 Abs. 1 lit. c) |
| Andere Matrix-Server und Fediverse-Server | Beiträge, Profile bei Föderation (derzeit Mastodon); öffentlich sichtbar | weltweit | Art. 6 Abs. 1 lit. b DSGVO (Nutzung des Dienstes); Löschung dort nur anstoßbar |
| Mail-Gegenstellen | Zustellung und Annahme von E-Mail | weltweit | Art. 6 Abs. 1 lit. b DSGVO; Transport ohne Ende-zu-Ende-Verschlüsselung lesbar |
| Aufsichts- und Strafverfolgungsbehörden | nur bei gesetzlicher Pflicht | | Art. 6 Abs. 1 lit. c DSGVO |

Drittlandübermittlungen betreffen Cloudflare, Backblaze, GitHub und Esri (USA) sowie ggf. Gcore und PayPal je nach Standort. Eine Kopie der Garantien erhalten Sie auf Anfrage unter der Adresse in Abschnitt 1.

## 8. Speicherdauer

| Dienst / Daten | Frist | Löschverfahren |
|---|---|---|
| Zugriffsprotokolle Webserver | 14 Tage | tägliche Rotation |
| Lastverteiler-Protokolle | wenige Stunden (IP gekürzt) | Rotation nach Größe |
| Reverse-Proxy-Protokolle | 7 Tage | tägliche Rotation |
| Zentrale Protokollsammlung | Zugriffsprotokolle 2 bis 3 Tage, Anwendungsprotokolle 7 bis 9 Tage | automatische Löschung der Indizes |
| Sicherheitsüberwachung (Alarme) | 90 Tage | automatische Löschung von Index und Alarmdateien |
| Meet-Betriebsprotokolle | derzeit 7 bis rund 21 Tage je Server; Kriterium: Fehlersuche und Missbrauchsabwehr | Rotation |
| Anmeldeereignisse (zentrale Anmeldung) | 14 Tage (Administrationsbereich 30 Tage) | automatisch |
| Mastodon: Anmelde-IP, Sitzungen | 1 Jahr | automatisch |
| Support-Tickets | keine automatische Löschung; Kriterium: Erforderlichkeit der Bearbeitung | Löschung auf Anfrage |
| Chat-Nachrichten | bis zur Löschung durch Nutzende oder des Kontos | Löschung auf Wunsch |
| E-Mail-Zustellprotokolle | bis zu 5 Wochen | wöchentliche Rotation |
| Netzflussdaten | einzelne Flüsse 15 Tage; verdichtete Zähler ohne Endgeräte-Adressen bis zu 1 Jahr | automatisch |
| Verbindungsdaten Freifunk-Netz | Lease 10 bis 60 Minuten, DHCP-Meldungen im Gateway-Systemprotokoll rund 4 Tage, zentral höchstens 9 Tage, Verbindungstabelle bis Verbindungsende bzw. Inaktivität | automatisch |
| Statistik (Matomo) | Rohdaten 180 Tage | automatisch |
| Konten und Inhalte aller Dienste | bis zur Löschung des Kontos | Löschung auf Wunsch (Abschnitt 10) |
| Datensicherungen | bis zu 4 Wochen plus Bereinigung des Speichers | automatisch |
| Mitglieds- und Spendenbelege | 8 bzw. 10 Jahre nach § 147 AO | nach Fristablauf |

## 9. Cookies und ähnliche Technologien

Auf unseren Websites setzen wir **keine** Cookies zu Werbe- oder Analysezwecken; die Statistik (Abschnitt 3) arbeitet ohne Cookies. Unsere Dienste mit Anmeldung setzen technisch notwendige Sitzungs-Cookies bzw. verwenden den lokalen Speicher des Browsers; dafür ist nach § 25 Abs. 2 Nr. 2 TDDDG keine Einwilligung nötig, Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b/f DSGVO. Nach dem Klick auf die PayPal-Schaltfläche gilt die Datenschutzerklärung von PayPal, auch für dortige Cookies; auf unseren Seiten setzt PayPal keine.

| Dienst | Name (Beispiele) | Zweck | Dauer |
|---|---|---|---|
| Zentrale Anmeldung | KEYCLOAK_IDENTITY, KEYCLOAK_SESSION, AUTH_SESSION_ID | Anmeldesitzung | Sitzung, höchstens 10 Stunden |
| Cloud | Sitzungs-Cookies von Nextcloud (zufällig benannt), oc_sessionPassphrase, __Host-nc_sameSiteCookie… | Anmeldung, Sicherheit | Sitzung |
| Chat | MMAUTHTOKEN, MMUSERID, MMCSRF | Anmeldung, Sicherheit | Sitzung bzw. Anmeldedauer der Anwendung |
| Mastodon | _mastodon_session | Anmeldung | Sitzung |
| Support | _zammad_session | Anmeldung | Sitzung |
| Pads | connect.sid (HedgeDoc) | Anmeldung | 14 Tage |
| Wiki | DokuWiki | Anmeldung | Sitzung |
| Meet | Einstellungen und Anzeigename im lokalen Speicher | Komfort (Einstellungen) | bis zum Löschen durch Sie |

## 10. Ihre Rechte

Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21); eine Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3). Anfragen richten Sie an die Adresse in Abschnitt 1. Wir antworten innerhalb eines Monats (Art. 12 Abs. 3), kostenfrei; zur Auskunft kann eine Identitätsprüfung nötig sein (Art. 12 Abs. 6).

**Widerspruchsrecht.** Soweit wir Ihre Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch einlegen (Art. 21 Abs. 1 DSGVO). Wir verarbeiten die Daten dann nicht mehr, es sei denn, wir weisen zwingende schutzwürdige Gründe nach, die Ihre Interessen überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.

**Beschwerde.** Sie können sich bei einer Aufsichtsbehörde beschweren (Art. 77 DSGVO), insbesondere am Ort Ihres Aufenthalts:

- für Website, Mitglieder, Konten und Dienste: **Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)**, Promenade 18, 91522 Ansbach, Postfach 1349, 91504 Ansbach, www.lda.bayern.de (Online-Formular);
- soweit wir Telekommunikationsdienste geschäftsmäßig erbringen (Internetzugang über Freifunk, § 29 Abs. 1 TDDDG): **Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)**, Graurheindorfer Str. 153, 53117 Bonn, www.bfdi.bund.de.

Welche Behörde zuständig ist, richtet sich nach der Tätigkeit, nicht nach dem Dienstnamen.

## 11. Bereitstellungspflicht, automatisierte Entscheidungen

Für Konten und Mitgliedschaft sind Name, E-Mail-Adresse und Zugangsdaten nötig; ohne sie können wir den Dienst nicht bereitstellen. Beim bloßen Besuch der Websites fallen nur die Zugriffsdaten (Abschnitt 3) an. Für den offenen Internetzugang über Freifunk ist keine Anmeldung nötig, das Gerät übermittelt technisch seine MAC-Adresse. Eine automatisierte Entscheidungsfindung einschließlich Profiling nach Art. 22 DSGVO findet nicht statt.

## 12. Änderungen

Wir passen diese Erklärung an, wenn sich Dienste oder Verarbeitungen ändern, und prüfen sie mindestens halbjährlich. Das Datum oben nennt den Stand; frühere Fassungen auf Anfrage.


# Privacy Policy {#english-version}

(German version prevails.)

## 0. Scope and date

As of: 25 November 2026, version 1.0. Earlier versions on request.

This policy covers ffmuc.net and all services under ffmuc.net (wiki, Meet, cloud, chat, Mastodon, map, firmware, webmail, VPN, VMs, DNS, status, pads, donations, membership, node management), the further domains ffmuc.bayern, fnmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de, freifunk-muenchen.de/.net, freewifi.bayern and freie-netze.org where they point to our services, and internet access through Freifunk nodes and gateways. The DNS resolvers have their own [DNS privacy statement](/dns-privacy/).

## 1. Controller and contact

Controller: **Freie Netze München e. V.**, Parkstraße 28, 82131 Gauting, Germany, registered at the Amtsgericht München, VR 206402, represented by the board. See the [legal notice](/impressum/).

Data protection requests: hilfe@ffmuc.bayern

We have not appointed a data protection officer. Please direct data protection questions to the address above.

## 2. In brief

- We are a volunteer association running the Freifunk Munich network and services for members and the community.
- When you visit our websites we store access data for a short time to keep operations secure. On ffmuc.net and in the wiki we count visits with Matomo (self-hosted, without cookies, with a shortened IP address). We use no advertising cookies and pass no data on for advertising.
- Over the Freifunk Wi-Fi we store no content and keep no records of who visits which sites. Technical connection data (device address, assigned internal address) arise briefly during operation (section 4.4).
- If you have an account (cloud, chat, Mastodon, e-mail, password manager and others), account and usage data are kept until the account is deleted; logs are deleted after short periods. Details per service in section 4.
- Recipients are our providers for data centres, DNS, backups, membership administration and payments (section 7). Some are in the USA; we name the safeguard.
- Retention periods per service are in section 4 and summarised in section 8. Where we have no fixed period we state the criterion.
- You have the rights in section 10 and may complain to the supervisory authority.

## 3. Visiting the websites

| Service | Data | Purpose | Legal basis | Retention |
|---|---|---|---|---|
| Websites and service pages (ffmuc.net, wiki, donations, membership, VPN, VMs, DNS setup, map, firmware, status) | IP address, time, requested address, status code, data volume, browser identifier, referrer | secure, reliable operation, troubleshooting, abuse protection | Art. 6(1)(f) GDPR | access logs on the web servers 14 days; on the upstream load balancers only a few hours (IP address shortened); reverse-proxy logs 7 days; central log collection: access logs 2 to 3 days, application logs 7 to 9 days |

Balance of interests: we have a legitimate interest in secure operation; the intrusion is small because the data are kept only briefly, read only by administrators and not used for profiling.

**Attack and bot protection.** Suspicious requests (mass requests, failed logins) are detected and the IP address is temporarily blocked (Fail2ban). On the mail server Fail2ban blocks for 3 hours after three failed attempts within 10 minutes. CrowdSec also runs there: attack indications (IP address, type, time) go to CrowdSec SAS (France), and we receive a list of known attackers in return; blocks there last 4 hours. Legal basis: Art. 6(1)(f) GDPR (protecting the services).

**Statistics.** On ffmuc.net and in the wiki we measure usage with Matomo (self-hosted, without cookies). IP addresses are shortened before storage (two bytes), the browser setting “Do Not Track” is honoured. Raw data is deleted after 180 days. Legal basis: Art. 6(1)(f) GDPR (interest in usage figures to improve the offering); you may object at any time (section 10).

**External content.** Our pages load no fonts, scripts or images from third parties, with these exceptions: on the donation and membership pages data is sent to PayPal only when you click the PayPal button (section 5). In the map you can choose a satellite image from Esri as background; only then does your browser connect to Esri (USA). The other map tiles are delivered by our own intermediary server. Links to social networks are plain links; a connection arises only when you click.

**Domains via Cloudflare.** Requests to the domains fnmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de and freewifi.bayern pass through Cloudflare (section 7), which processes IP address, requested address and headers and forwards to our services. Meet audio and video, e-mail traffic and webmail do not pass through it. The site freie-netze.org is delivered by GitHub Pages (section 7).

## 4. Accounts and services

Services are for their stated purpose only. Each row names the data arising from use; logs and backups see section 6. Where there is no fixed period we state the criterion for storage (Art. 13(2)(a) GDPR). For backups: deleted data stay in the encrypted backups for up to 4 weeks; the final clean-up of the backup store is currently not running, so deleted data may remain in it for longer for the time being (section 6).

### 4.1 Central login and member account

| Service | Data | Purpose | Legal basis | Retention |
|---|---|---|---|---|
| Central login (Keycloak) and member directory (LDAP) | username, name, e-mail address, password (hash only), group memberships, login events (time, IP address), optional second factor/passkey; for access outside the membership self-registration with e-mail verification | login to services, account management, abuse protection | Art. 6(1)(b) GDPR (use of the service), login logs (f) | account until deletion on request; login events 14 days (30 days in the administration area); login sessions expire after 30 minutes of inactivity or after 10 hours at most |
| Administration tools (monitoring, log collection, directories, security monitoring) | administrators’ accounts, operating and security logs of servers (IP addresses, user names, logins), alerts of the security monitoring | operation and security of the infrastructure | Art. 6(1)(f) GDPR | logs 2 to 9 days in the collection, on servers after rotation (section 8); security-monitoring alerts 90 days (index and alert files); accounts until the person leaves |

### 4.2 Communication and collaboration

| Service | Data | Purpose | Legal basis | Retention |
|---|---|---|---|---|
| Video conferencing Meet (meet.ffmuc.net, ffmeet.net, ffmeet.de, klassenkonferenz.de) | room name, display name, IP address, time, device data; audio and video live between participants (not stored); in-room chat only during the conference; captions: speech is converted to text on our servers | providing the conference, troubleshooting, abuse protection | participation Art. 6(1)(b) GDPR; operating logs (f) (troubleshooting, abuse protection); captions (a) (consent by switching on) | operating logs (IP, room) are rotated automatically; currently, depending on the server, 7 days (relay servers), 14 days (web server) up to about 3 weeks (video bridges), 2 to 9 days in the collection. Criterion: as long as needed for troubleshooting and abuse protection. Conference content is not stored |
| Meet: pads and whiteboard (Etherpad, Excalidraw, whiteboard) | texts and drawings, pad/board name; IP address in the access log | collaboration during the conference | Art. 6(1)(b) GDPR; logs (f) | content stays until deleted (by users or on request); criterion: need for the joint work; access logs as in section 3 |
| Chat (Mattermost, chat.ffmuc.net) | account (name, e-mail, username), messages, files, reactions, timestamps, connection data | community exchange | Art. 6(1)(b) GDPR, operation (f) | messages and files until deleted by the users or with the account; no automatic deletion (criterion: duration of account use) |
| Mastodon (social.ffmuc.net) | account, e-mail address, posts, media, follow relations, login IP addresses and sessions; public posts are visible in the fediverse and sent to other servers | community fediverse server | Art. 6(1)(b) GDPR; IP addresses (f) (abuse protection) | account and posts until deletion; login IPs and sessions 1 year (Mastodon setting); access logs 7 days; deletion at other servers can only be requested (Art. 17(2) GDPR) |
| Cloud (Nextcloud, cloud.ffmuc.net) | account, files, calendars, contacts, activity and access log, trash and file versions | storage and collaboration | Art. 6(1)(b) GDPR; logs (f) | files until deleted by the person; trash and versions under Nextcloud’s standard rules (trash at the latest after 30 days, earlier if space is needed; versions thinned out over time); logs without a fixed time limit, limited by file size (criterion: traceability of faults and abuse) |
| Pads and drawings (HedgeDoc, CryptPad) | texts and drawings, pad name, account for HedgeDoc; CryptPad is end-to-end encrypted, we cannot see contents; IP address in access log | collaboration | Art. 6(1)(b) GDPR; logs (f) | content until deleted by users or on request; access logs as in section 3 |
| Livestream (Owncast, silo.ffmuc.net) | viewers: IP address, time; chat name if the chat is used | broadcasting events | Art. 6(1)(f) GDPR | access logs as in section 3 |
| E-mail and webmail (domains ffmuc.net, fnmuc.net, ffmuc.bayern) | mailboxes: addresses, messages (stored encrypted on the server), connection data (IP address, logins, delivery); spam check: sender IP is looked up at public blocklists | mailboxes and forwarding | Art. 6(1)(b) GDPR; logs and spam defence (f) | messages until deleted by the person; delivery logs are rotated weekly and kept up to 5 weeks; greylisting entries 1 day |
| Password manager (Vaultwarden) | account, encrypted vault (we cannot read contents), device and login data | password management | Art. 6(1)(b) GDPR | until the account is deleted |
| Wiki (DokuWiki, ffmuc.net/wiki) | account (for editing, from the member directory), page changes with name and time; for reading only the access log and statistics (section 3) | community documentation | Art. 6(1)(b) GDPR, logs (f) | change history kept while the page exists (criterion: traceability of the documentation); account until deletion |

### 4.3 Support, network services, map

| Service | Data | Purpose | Legal basis | Retention |
|---|---|---|---|---|
| Support tickets (Zammad) | name, e-mail address, content and attachments, processing history; application access log, sessions | handling requests | Art. 6(1)(b) GDPR (request), (f) (organisation) | tickets are currently not deleted automatically; criterion: as long as needed for handling, follow-up and documentation; deletion on request at any time; local database backups 3 days |
| VPN (vpn.ffmuc.net) | account, device name, public key, VPN address, time of last connection, data volume, endpoint address (only while connected) | access | Art. 6(1)(b) GDPR | until the device or account is deleted (criterion: duration of use) |
| VMs for members (vms.ffmuc.net, virtualisation) | account, VM name, resources, connection data; we do not inspect VM contents | platform for member projects | Art. 6(1)(b) GDPR | until the VM is deleted; members are responsible for their own content |
| Node management (OpenWISP, openwisp.ffmuc.net) | account (login through the central login, selected members only), device and configuration data of managed devices, change log | management of network devices | Art. 6(1)(b), (f) GDPR | account until deletion; device data while the device is managed |
| DNS resolvers (anycast, DoH, DoT, DoQ) | no personal query logs; short-lived per-IP counters against abuse, aggregate statistics | name resolution | Art. 6(1)(f) GDPR | counters only for technical enforcement; statistics without personal reference. Details: [DNS privacy](/dns-privacy/) |
| Node map and node data (map.ffmuc.net, federated map) | name, location (coordinates), technical data and hardware attributes of a node. The federated map additionally shows nodes of other Freifunk communities as published by them (source: the respective community) | making the network visible, finding faults | Art. 6(1)(f) GDPR | as long as the node is reported (criterion: operation of the node); afterwards only statistics without personal reference |
| Network flow statistics (router flow data) | source/destination addresses and data volumes from samples of traffic at the backbone routers | network operation, capacity planning, fault and attack detection | Art. 6(1)(f) GDPR | individual flows with addresses 15 days, intermediate buffer 1 day; aggregated counters without end-device addresses up to 1 year |
| Wi-Fi controllers and site Wi-Fi (UniFi, Omada, UISP) | device data of access points; the controllers keep lists of connected end devices (MAC address, connection times, data volume) | operation of site Wi-Fi networks | Art. 6(1)(f) GDPR; § 9 TDDDG | criterion: as long as needed for operation and troubleshooting of the site Wi-Fi; deletion on request |

### 4.4 Freifunk internet access (nodes and gateways)

| Service | Data | Purpose | Legal basis | Retention |
|---|---|---|---|---|
| Internet access via Freifunk | device MAC address and assigned internal address (DHCP) with time, data volume per device/node (counters), gateways’ connection table in memory (mapping of internal to public address/port), connection set-up to the gateway (key of the node, not of the device) | setting up and operating the connection, load distribution across gateways | § 9 TDDDG (traffic data); Art. 6(1)(f) GDPR for operation; secrecy of telecommunications (§ 3 TDDDG) is observed | lease 10 to 60 minutes; messages of the DHCP service (MAC address, internal address, time) are in the gateway’s system log and are deleted there after about 4 days, in the central collection after 9 days at most; connection table in memory only, not logged, entries expire after inactivity (established TCP connections up to 5 days); counters: criterion capacity planning, no reference to content |

We store no content and do not log which person visits which sites. At the gateway the users’ connections are translated to a public address of the association; the gateways do not log individual connections or translations.

## 5. Membership, donations, contact

| Service | Data | Purpose | Legal basis | Retention |
|---|---|---|---|---|
| Membership (page mitglieder.ffmuc.net; application and administration through the provider meinverein.de) | name, address, e-mail address, fee, joining and leaving date, payment data where given in the application; with “Become a member” you leave our site and enter the details on the provider’s platform | membership, fee collection | Art. 6(1)(b) GDPR; retention (c) GDPR (§ 147 AO) | data during membership; afterwards only as far as statutory retention duties require (accounting vouchers 8, books 10 years under § 147 AO); criterion for other details: end of membership |
| Donations (spende.ffmuc.net) | amount, name, address (for receipt), e-mail address; payment via PayPal or bank transfer | accepting donations, issuing receipts | Art. 6(1)(b), (c) GDPR | receipts under § 147 AO (8 or 10 years) |
| Payment via PayPal | opening the donation and membership pages sends no data to PayPal; only when you click the button are you redirected to PayPal (IP address, browser details) and enter your payment details there. PayPal is a separate controller for the payment (PayPal (Europe) S.à r.l. et Cie, S.C.A., Luxembourg) | payment processing, providing the payment option | Art. 6(1)(b) GDPR | at PayPal per its policy; with us receipts as above |
| Enquiries (e-mail, ticket, form) | sender, content, attachments | answering | Art. 6(1)(b) or (f) GDPR | criterion: until the enquiry is completed and as long as a follow-up question is to be expected; tickets see 4.3 |

## 6. Security, logs, backups

- **Encryption.** All websites and services are reachable via HTTPS (TLS); mailboxes are stored encrypted on the server (technical measure under Art. 32 GDPR). Certificates come from Let’s Encrypt (ISRG, USA); only domain names are sent there.
- **Access.** Administrator access is limited to few people, uses a second factor or passkey and is logged.
- **Attack protection.** See section 3 (Fail2ban, CrowdSec). At network level we watch attack patterns (flow data, packet characteristics) and can limit traffic. A security monitoring system (Wazuh) evaluates system events on selected servers; we keep its alerts for 90 days.
- **Central log collection.** Servers send operating logs to a central collection (self-hosted, in Germany or Austria); access logs stay there 2 to 3 days, application logs 7 to 9 days. On the servers themselves the periods in section 8 apply.
- **Backups.** Server data are backed up daily in encrypted form (key only with us, encrypted before upload). The last 7 states, up to 14 daily and 4 weekly states are kept; storage at Backblaze, Inc. (USA). Zammad database backups locally 3 days. Deleted data disappear from backups when these periods expire; a separate clean-up run then removes data blocks no longer needed from the store and is currently not running, so deleted data stay in it for longer for the time being (encrypted, with no third-party access to plaintext).
- **Incidents.** We notify the supervisory authority of personal data breaches within 72 hours and affected persons if the risk is high (Art. 33, 34 GDPR).

## 7. Recipients, processors, third countries

| Recipient | Purpose, data | Location | Safeguard / basis |
|---|---|---|---|
| Data-centre and hosting partners | running the servers, sites in Munich and Vienna | Germany, Austria | Art. 28 GDPR or colocation agreement |
| Hetzner Online GmbH | servers of the mail service | Germany | processing on behalf (Art. 28 GDPR) |
| Gcore S.A. | DNS (zone ffmuc.net): domain names, DNS queries to the authoritative servers | Luxembourg (provider distributed worldwide) | Art. 28 GDPR; transfers outside the EU/EEA only under Art. 45/46 |
| Cloudflare, Inc. | DNS for the other domains; web traffic of the domains named in section 3 (IP address, requests), DNS validation for certificates | USA | EU-U.S. Data Privacy Framework (Art. 45 GDPR; Implementing Decision (EU) 2023/1795); Art. 28; fallback: standard contractual clauses (Art. 46(2)(c)) |
| Backblaze, Inc. | encrypted backups (we encrypt before upload, key only with us) | USA | Art. 46(2)(c) GDPR (standard contractual clauses) or Data Privacy Framework; encryption as supplementary measure; copy of safeguards on request |
| CrowdSec SAS | attack indications from the mail server (IP address, type, time) | France | Art. 6(1)(f) GDPR |
| Let’s Encrypt (ISRG) | certificates, domain names only | USA | no personal data of users |
| PayPal (Europe) S.à r.l. et Cie, S.C.A. | payment processing for donations and fees; redirect when the button is clicked | Luxembourg (group worldwide) | separate controller; transfers per its policy |
| meinverein.de (provider of the membership administration) | member and fee data | Germany | processing on behalf (Art. 28 GDPR) |
| GitHub, Inc. (GitHub Pages) | delivery of the site freie-netze.org (IP address on access) | USA | EU-U.S. Data Privacy Framework or standard contractual clauses (Art. 46(2)(c)) |
| Esri (only if the satellite map is chosen) | map tiles; your browser transmits IP address and map section | USA | Art. 6(1)(a) GDPR (consent by choosing the layer) |
| Banks, tax advisers/auditors | fees, donations, bookkeeping | Germany | legal obligation (Art. 6(1)(c)) |
| Other Matrix and fediverse servers | posts, profiles under federation (currently Mastodon); publicly visible | worldwide | Art. 6(1)(b) GDPR (use of the service); deletion there can only be requested |
| Mail counterparts | delivery and receipt of e-mail | worldwide | Art. 6(1)(b) GDPR; transport readable without end-to-end encryption |
| Supervisory and law enforcement authorities | only on legal obligation | | Art. 6(1)(c) GDPR |

Third-country transfers concern Cloudflare, Backblaze, GitHub and Esri (USA) and, depending on location, Gcore and PayPal. You can get a copy of the safeguards on request at the address in section 1.

## 8. Retention

| Service / data | Period | Deletion method |
|---|---|---|
| Web server access logs | 14 days | daily rotation |
| Load-balancer logs | a few hours (IP shortened) | rotation by size |
| Reverse-proxy logs | 7 days | daily rotation |
| Central log collection | access logs 2 to 3 days, application logs 7 to 9 days | automatic index deletion |
| Security monitoring (alerts) | 90 days | automatic deletion of index and alert files |
| Meet operating logs | currently 7 to about 21 days depending on the server; criterion: troubleshooting and abuse protection | rotation |
| Login events (central login) | 14 days (30 days in the administration area) | automatic |
| Mastodon: login IP, sessions | 1 year | automatic |
| Support tickets | no automatic deletion; criterion: need for handling | deletion on request |
| Chat messages | until deleted by users or with the account | deletion on request |
| E-mail delivery logs | up to 5 weeks | weekly rotation |
| Network flow data | individual flows 15 days; aggregated counters without end-device addresses up to 1 year | automatic |
| Freifunk network connection data | lease 10 to 60 minutes, DHCP messages in the gateway system log about 4 days, centrally 9 days at most, connection table until the connection ends or goes idle | automatic |
| Statistics (Matomo) | raw data 180 days | automatic |
| Accounts and content of all services | until the account is deleted | deletion on request (section 10) |
| Backups | up to 4 weeks plus clean-up of the store | automatic |
| Membership and donation records | 8 or 10 years under § 147 AO | after expiry |

## 9. Cookies and similar technologies

On our websites we use **no** advertising or analytics cookies; the statistics (section 3) work without cookies. Our services with login set strictly necessary session cookies or use browser local storage; under § 25(2) no. 2 TDDDG no consent is needed, the legal basis for processing is Art. 6(1)(b)/(f) GDPR. After you click the PayPal button, PayPal's privacy policy applies, including to cookies set there; PayPal sets none on our pages.

| Service | Name (examples) | Purpose | Duration |
|---|---|---|---|
| Central login | KEYCLOAK_IDENTITY, KEYCLOAK_SESSION, AUTH_SESSION_ID | login session | session, 10 hours at most |
| Cloud | Nextcloud session cookies (randomly named), oc_sessionPassphrase, __Host-nc_sameSiteCookie… | login, security | session |
| Chat | MMAUTHTOKEN, MMUSERID, MMCSRF | login, security | session or login duration of the application |
| Mastodon | _mastodon_session | login | session |
| Support | _zammad_session | login | session |
| Pads | connect.sid (HedgeDoc) | login | 14 days |
| Wiki | DokuWiki | login | session |
| Meet | settings and display name in local storage | convenience (settings) | until you delete it |

## 10. Your rights

You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), data portability (Art. 20) and to object (Art. 21); you may withdraw consent at any time with effect for the future (Art. 7(3)). Send requests to the address in section 1. We reply within one month (Art. 12(3)), free of charge; proof of identity may be needed for access (Art. 12(6)).

**Right to object.** Where we process your data on the basis of legitimate interests (Art. 6(1)(f) GDPR) you may object at any time on grounds relating to your particular situation (Art. 21(1) GDPR). We then stop processing unless we demonstrate compelling legitimate grounds that override your interests or the processing serves to establish, exercise or defend legal claims.

**Complaint.** You may complain to a supervisory authority (Art. 77 GDPR), in particular at your place of residence:

- for websites, members, accounts and services: **Bavarian State Office for Data Protection Supervision (BayLDA)**, Promenade 18, 91522 Ansbach, Germany, PO box 1349, 91504 Ansbach, www.lda.bayern.de (online form);
- where we provide telecommunications services on a business basis (internet access via Freifunk, § 29(1) TDDDG): **Federal Commissioner for Data Protection and Freedom of Information (BfDI)**, Graurheindorfer Str. 153, 53117 Bonn, Germany, www.bfdi.bund.de.

The competent authority depends on the activity, not on the service name.

## 11. Obligation to provide data, automated decisions

For accounts and membership name, e-mail address and login data are required; without them we cannot provide the service. Merely visiting the websites produces only the access data (section 3). The open internet access via Freifunk needs no registration; the device technically transmits its MAC address. There is no automated decision-making including profiling under Art. 22 GDPR.

## 12. Changes

We update this policy when services or processing change and review it at least every six months. The date above is the date of the current version; earlier versions on request.

