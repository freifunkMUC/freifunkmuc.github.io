---
layout: post
title:  "MEET - Ausfall am 21.04.2020 von 10:04 - 10:24"
date:   2020-04-21 09:00:00
categories: freifunkmuc
---

Leider hatten wir heute in der PrimeTime um 10 Uhr einen Ausfall zu verzeichnen. Die entsprechenden Gegenmaßnahmen sind getroffen und dieser Fehler tritt nicht noch einmal auf.

### Hintergründe

Gegen 10 Uhr erreichten wir einen neuen Nutzerpeak. Dieser führte auf einer der Hauptkomponenten des Setups dazu, dass zuviele Backendverbindungen aufgebaut wurden. Daraufhin beendete der Dienst (Prosody) alle Nutzerverbindungen (siehe Graph). Dieser Fehler war schnell behoben und alle Nutzer konnten wieder verbinden.

Doch leider zeigte sich daraufhin ein Problem in einer anderen Hauptkomponente (Jicofo), dieser entschied auf der Grund der Geschwindigkeit in der die neuen Verbindungen nun anfielen alle Teilnehmer auf eine einzige unserer Videobridges zu schicken. Dies führte in der Konsequenz zu einer Überlast der Videobridge und damit wieder zu einer Trennung aller Teilnehmer. Nun kamen aber die Verbindungen wieder gleich schnell rein und das Spiel ging mit der nächsten Videobridge von vorne los. Um einen Ausweg aus der Situation zu finden haben wir zunächst auf unserem Webserver konfiguriert Verbindungen langsamer anzunehmen und so Jicofo Zeit zugeben "richtige" Loadbalancing Entscheidungen zu treffen. Dies führe allerdings auch nicht zum erhofften Erfolg. 

Im weiteren Verlauf haben wir nach eben diesem Problem im Code gesucht und einen Fix in der neuesten Version von Jicofo gefunden. Daraufhin haben wir Jicofo auf die neueste Version aktualisiert, daraufhin pendelte sich dann alles wieder in normalen Bahnen ein.

![Postmortem](/assets/postmortem.png)
