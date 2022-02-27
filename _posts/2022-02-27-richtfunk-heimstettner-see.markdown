---
layout: post
title:  "Richtfunk Projekt Heimstettner See"
date:   2022-02-27 09:00:00
categories: freifunkmuc
---

Unser neuestes und bisher größtes Richtfunk Projekt, ist die Anbindung einer Wasserwacht am Heimstettner See.

Wir haben uns bei der Technik dazu entschieden nur 60 Ghz Geräte zu nutzen, um hohe Bandbreiten übertragen zu können.

### Um welche Strecken geht es?

![Richtfunk strecken](/assets/posts/2022-02-27-rifu.png){: height="400px" }

Der Aufbau ist unterteilt in insgesamt 3 Einzelstrecken. Einmal werden Mikrotik Cube 60 eingesetzt um die kurze Strecke von der Wasserwacht auf das Silo Dach zu überbrücken. Als nächstes erfolgt die Übertragung per Ubiquiti Airfiber 60 LR zum Schlauchturm der Feuerwehr. Die letzte Strecke wird dann mit Hilfe von Mikrotik 60 LHG zum eigentlichen Uplink überbrückt.

![Richtfunk strecken lhg60](/assets/posts/2022-02-27-lhg60.jpg){: height="400px" }

![Richtfunk strecken Airfiber](/assets/posts/2022-02-27-see-airfiber.jpg){: height="400px" }

![Richtfunk strecken Cube60](/assets/posts/2022-02-27-see-cube60.jpg){: height="400px" }

### Geschwindigkeit

Wir bekommen auf der kompletten Strecke einen Durchsatz von 1Gbit/s ohne Probleme bewältigt. Im Moment ist der Internetdurchsatz durch den DSL Anschluss am Uplink auf 300mbit/s begrenzt.

### Regen? Schnee?

Wir haben sehr wenige Probleme durch Wettereinflüsse, nur bei absolutem Starkregen kommt es zu kurzen Abbrüchen.

![Richtfunk strecke im Regen](/assets/posts/2022-02-27-see-regen-rifu.jpg){: height="400px" }

![Richtfunk strecke im Regenradar](/assets/posts/2022-02-27-see-regen.jpg){: height="400px" }


### Verwendete Hardware

#### Routing - Switching

Wir haben uns an dieser Stelle auf Grund der Zukunftssicherheit für Mikrotik CCR2004-1G-12S+2XS entschieden. Dieser verfügt über 12 x 10G SFP+ und 2 x 25G SFP28 ports. Im Moment betreiben wir ihn mit Kupfer SFPs von Flexoptix.

![Router](/assets/posts/2022-02-27-see-router.jpeg){: height="400px" }

Als kleiner Switch der Routingfähig ist, falls es mal gebraucht wird setzen wir den Mikrotik CRS305-1G-4S+IN ein. Auch hier verwenden wir im Moment Kupfer SFPs von Flextopix.

Für die Verteilung in der Wasserwacht und zum Anschluss der Accesspoints verwenden wir einen Ubiquiti Unifi USW Flex.

#### Richtfunk

Wie oben bereits geschrieben, kommen hier verschiedene Produkte je nach Entfernung zum Einsatz.

2x Ubiquiti Airfiber 60LR (2,3km - Silo-Feuerwehr)
2x Mikrotik LHG60 (1.6km - Feuerwehr-Uplink) 
2x Mikrotik Cube60 (100m - Silo-Wasserwacht)

#### Wireless Access Points

Um an der Wasserwacht das Netz ausstrahlen zu können setzen wir auf Ubiquiti Unifi UAP-Mesh. Für die Außensektoren sind diese zusätzlich mit UMA-D Antennen ausgestattet.

![Accesspoints](/assets/posts/2022-02-27-see-unifi-ap.jpg){: height="400px" }

### Wie geht es weiter?

Es ist geplant die Kapazität der Richtfunkstrecke noch deutlich zu erhöhen, so wie weitere Wasserwachten und andere gemeinnützige Organisationen an diese Strecke anzubinden.

Als nächstes steht der Uplink zum Aschheimer Autokino an, was die nutzbare Kapazität deutlich erhöhen wird. Auch hier kommen auf Grund der Entfernung Airfiber 60 LR zum Einsatz.
