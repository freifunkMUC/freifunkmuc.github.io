---
layout: page
title: Router flashen
permalink: /router-flashen/
---

## Router auspacken

![Ueberblick](/assets/router-flashen/guide-17.jpg) 

Schließe zuerst den Router mit dem Netzteil (1) an eine Steckdose an. Anschließend verbindest Du den Router mit dem LAN-Kabel (2) mit Deinem Computer über eine der gelben Buchsen.

![LAN-Buchsen](/assets/router-flashen/guide-15.jpg)

## Firmware runterladen und installieren

![Modell und Version](/assets/router-flashen/guide-14.jpg)

Wir unterstützten aktuell verschiedene Routermodelle. Zunächst musst Du prüfen, welche Firmware Du benötigst. Wichtig ist der Router-Typ (1) und die Hardware-Version (2). Beide Informationen findest Du auf der Rückseite Deines Geräts.

Die entsprechende Firmware findest Du dann unter [Firmware](/firmware/).

Schalte nun den Router ein und rufe nach ca. 2 Minuten die Adresse **http://192.168.0.1** in Deinem Browser auf. Es erscheint eine Anmeldemaske, die nach Benutzername und Passwort fragt. Hier gibst Du als Benutzername **admin** und als Passwort ebenfalls **admin** ein.

![Adminpanel](/assets/router-flashen/guide-1.png)

Wähle auf der neuen Seite im linken Menü den Eintrag **System Tools** und anschließend **Firmware Upgrade**. Danach sollte die Seite ähnlich wie die nachfolgende Grafik aussehen.

![Firmware Upgrade](/assets/router-flashen/guide-2.png)

Über die Schaltfläche “Browse…” kannst Du nun die Firmware auswählen, die Du eben heruntergeladen hast. Nachdem Du bestätigt hast, dass die Firmware installiert werden soll, startet der Prozess. Trenne ab jetzt auf keinen Fall die Stromversorgung des Routers. Sonst schlägt die Installation fehl.

![Firmware Auswahl](/assets/router-flashen/guide-3.png)

![Upgrade bestaetigen](/assets/router-flashen/guide-4.png)

Nachdem die Firmware fertig eingespielt ist, startet der Router neu. Dass der Router neu startet, erkennst Du auch am Blinken der Lämpchen an Deinem Router. Zuerst blinken alle Lämpchen wild, dann gehen sie aus.

![warten](/assets/router-flashen/guide-5.png)

Wenn danach das Lämpchen mit dem Zahnrad gemütlich vor sich hin blinkt, ist der Router im Config-Mode angekommen.

Jetzt ist der Router nicht mehr unter der angegeben Adresse sichtbar und eine Fehlermeldung erscheint. Das ist gut so. Denn nun läuft nicht mehr die alte Firmware, sondern die neue, tolle Freifunk Firmware auf deinem Router.

Damit dein Router jetzt im Freifunk Netz funktioniert, musst du ihn jetzt noch [einrichten](/router-konfigurieren/).

Quelle: [Freifunk Magdeburg (CC BY-SA 4.0)](http://md.freifunk.net)
