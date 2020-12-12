---
layout: post
title:  "Wireguard Firmware oder Freifunk wird endlich schnell! - #USEMOREBANDWIDTH"
date:   2020-12-03 10:43:00
categories: freifunkmuc
---
### Überlick

Am 19.11.2020 war es soweit wir haben unser komplettes Netzwerk von FastD VPN auf Wireguard VPN umgestellt. Was einfach klingt, war überhaupt nicht einfach. Es brauchte viele Softwarekomponenten sowie viele viele Tests um dieses Projekt zu verwirklichen.

Alles begann mit der Idee, dass Freifunk München endlich schnell und das ganze Potential was in der neuen Hardware steckt auch benutzbar werden soll. Hier war sofort klar, dass es mit der vorhandenen VPN Technik nicht möglich ist mehr Leistung rauszuholen. Deswegen suchten wir nach einer Möglichkeit andere Techniken einzusetzen. Wireguard erlebt sowieso gerade einen Hype und wir sahen es uns genauer an. Generell waren wir sofort überzeugt von Wireguard aber es gibt ein großes Problem für uns. Wireguard transportiert nur Layer3 Verbindungen und keine Layer2 Verbindungen, welche wir aber für das von uns eingesetzte Meshprotokoll (batman-adv) benötigen. 

Nachdem wir aber findige Techniker haben, haben diese einen Weg gefunden! Also transportieren wir nun über Wireguard VXLAN und in diesem läuft dann batman-adv! Klingt ein bisschen nach Matroschka Puppen? Stimmt, genauso ist es auch. Doch trotz des dreifachen encapsulierens sind wir bis zu fünf Mal schneller auf den aktuellen Routern!

### Softwareprojekte

#### Wireguard Key Exchange
Das Ganze klingt etwas nach Pionierarbeit? Richtig - deswegen haben wir auch einige neue Softwareprojekte ins Leben gerufen. Unter anderem braucht es wie oben erwähnt einen Broker zum annehmen der Wireguard Keys. Diesen haben wir zusammen mit Freifunk Regensburg und Freifunk Darmstadt [WGKEX](https://github.com/freifunkMUC/wgkex) (Wireguard Key Exchange) getauft. Dieser teilt sich in zwei Komponenten auf. Dem `broker` der die Keys per Webrequest annimmt und einem `worker` der dann die Gateways entsprechend programmiert dass die Keys bekannt sind und alle Routen korrekt gesetzt werden.

#### Firmwarekomponente (gluon-mesh-vpn-wireguard-vxlan)
Natürlich braucht es auch einen Teil in der Firmware der Knoten, welcher statt einem fastd oder l2tp VPN eine Wireguard + VXLAN Verbindung aufbaut. Dieses Projekt findet ihr natürlich auch [öffentlich auf Github](gluon-mesh-vpn-wireguard-vxlan).

#### systemd-networkd
Diese Komponente ist natürlich keine Vorraussetzung für das Setup, macht aber das Leben deutlich einfacher da es nun dank uns BATMAN Interfaces unterstützt! Den entsprechenden PullRequest findet ihr im [systemd Projekt](https://github.com/systemd/systemd/pull/17252)


 https://github.com/freifunk-gluon/community-packages/pull/6
