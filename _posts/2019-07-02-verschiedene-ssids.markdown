---
layout: post
title:  "Warum gibt es verschiedene SSIDs?"
date:   2019-07-02 14:00:00
categories: freifunkmuc
---
Nachdem uns nun öfter im [Chat](https://chat.ffmuc.net) oder per [Twitter](https://twitter.com/FreifunkMUC) die Frage gestellt wurde, warum wir keine einheitliche SSID wie "Freifunk" benutzen, hier die Erklärung :).

Natürlich würden wir um es möglichst einfach für die Benutzer zu halten gerne die einheitliche SSID "Freifunk" benutzen, leider ist dies aus technischen Gründen aber nicht sinnvoll.

Denn die Endgeräte gehen bei einer einheitlichen SSID davon aus, dass es sich um ein und dasselbe Netz handelt. Dies ist aber bei nicht der Fall, da alleine das Freifunk München Netz in mehrere sogenannte [Segmente](http://umap.openstreetmap.fr/en/map/ffmuc-sites_319166#8/46.995/12.849) unterteilt ist. Jedes dieser Segmente stellt ein eigenes Netz mit eigenen IP-Adressen dar. Die Netze können zwar zwischen einander kommunizieren, sind aber für sich genommen eine abgeschlossene Einheit mit
eigenem DHCP Server, eigenem Gateway etc.. Wenn die Geräte also zwischen den Segmenten hin- und herwechseln würde mit einheitlicher SSID zum Beispiel folgendes passieren:

* Das Gerät verbindet sich mit Knoten A im Segment "Umland Nord" und bekommt eine IP-Adresse aus diesem Segment.
* Wegen schlechtem Empfang zu Knoten A, wechselt das Gerät nun zu Knoten B im Segment "München Nord".
* Das Gerät geht davon aus, dass es sich um dasselbe Netz handelt und tut nichts, verwendet also weiterhin die falsche IP-Adresse.
* Mit dieser IP-Adresse ist es nicht möglich dass Internet oder irgendetwas Anderes zu erreichen, da sie für den Knoten aus dem falschen Bereich kommt und damit nicht zu den Gateways weitergeleitet wird.
* Nach einiger Zeit (bei uns circa 5-10min) fragt das Endgerät erneut nach seiner IP-Adresse, der DHCP-Server beantwortet dies mit einem "Nein, das ist die falsche IP-Adresse".
* Das Endgerät verliert seine IP-Adresse komplett und fragt nach einer Neuen.
* Erst ab diesem Zeitpunkt ist das Surfen wieder möglich.

Diese ganze Abfolge wäre bei einer anderen SSID nicht passiert, da das Endgerät von sich aus wüsste dass es sich um ein anderes Netz handelt und pro-aktiv nach einer neuen IP-Adresse gefragt hätte.

Deswegen haben wir uns entschieden entsprechend dem Segment auch die SSID zu benennen.

Unsere aktuellen SSIDs lauten:

* muenchen.freifunk.net/muc_cty
* muenchen.freifunk.net/muc_nord
* muenchen.freifunk.net/muc_ost
* muenchen.freifunk.net/muc_sued
* muenchen.freifunk.net/muc_west
* muenchen.freifunk.net/uml_nord
* muenchen.freifunk.net/uml_ost
* muenchen.freifunk.net/uml_sued
* muenchen.freifunk.net/uml_west
* muenchen.freifunk.net/gauting
* muenchen.freifunk.net/freising
* muenchen.freifunk.net/welt


Weitere Fragen die ihr euch eventuell stellt:

* Warum eigentlich die unterschiedlichen Segmente? 
    * Näheres dazu haben wir bereits in einem anderen [Post](https://ffmuc.net/freifunkmuc/2019/05/20/infrastruktur-reboot-teil1/) verfasst.
* Warum wird die Leasetime dann nicht drastisch reduziert? 
    * Die Antwort darauf ist leider auch wieder, dass Endgeräte gerne Dinge "annehmen" und manche Endgeräte bzw. Betriebssysteme ignorieren Leasetimes unter 10 Minuten und setzen sie auf 60 Minuten.
* Aber die kommerziellen Hotspotbetreiber bekommen es doch auch hin!
    * Der Infrastruktur Aufwand dahinter ist aber auch ein deutlich Anderer, außerdem handelt es sich dort um einheitliche Unternehmen und nicht um mehrere unabhängige Communities.

Wir hoffen das beantwortet eure Fragen :). 

Falls ihr noch mehr wissen wollt schaut gerne im [Chat](https://chat.ffmuc.net) vorbei und fragt uns.

Euer Freifunk München Team
