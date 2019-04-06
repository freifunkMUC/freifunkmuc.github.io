---
layout: post
title:  "Neuer Branch für autoupdater: testing"
date:   2019-04-03 20:00:00
categories: freifunkmuc
---
Hallo zusammen,

Wir richten einen 3. Branch für den autoupdater ein.
In Zukunft wird es also `stable`, `testing` und `experimental` geben.
Das hat folgendene Gründe:

- Wir würden gerne unsere Testbuilds leichter auf unsere Test-Knoten übertragen.
- Wir wissen nicht, welche Knoten auf `experimental` eingestellt sind. Vor allen Dingen ob es ein Relikt ist oder die Personen immer noch im Notfall (schnell) eingreifen könnten.
- Wir möchten demnächst damit anfangen Änderungen zu testen die unter Umständen alles kaputt machen aber wir möchten keine 270 Knoten notfalls von Hand anfassen (oder darauf vertrauen, das ihr das schon irgendwie macht).

Deswegen nun die 3-teilung. Die Branches werden wie folgt lauten:
1. `experimental`
  - Für alle "Entwickler" oder Personen, die bereit sind ihren Knoten unter Umständen selbst zu reparieren.
  - Wir werden davon ausgehen (müssen), dass alle die diesen Branch benutzen über unseren [Chat](https://chat.ffmuc.net/freifunk/channels/firmware) erreichbar sind.
  - Wir *hoffen*. dass Updates, die über diesen Kanal verteilt werden für alle funktionieren werden.
2. `testing`
  - Hier werden wir in Zukunft das Rollout einer stabilen Version testen.
  - Neueste Features wird es zuerst hier geben.
  - Wir *glauben*, dass Updates, die über diesen Kanal verteilt werden für alle funktionieren werden.
3. `stable`
  - Alle hier veröffentlichten Builds wurden über `experimental` und `testing` getestet. In dem Zug sind uns keine Fehler aufgefallen, die wir beheben müssten.
  - Wir *sind davon überzeugt*, dass Updates, die über diesen Kanal verteilt werden für alle funktionieren werden.

Aktuell läuft eine Migration, bei der alle Knoten, die bisher auf `experimental` waren auf `testing` umgezogen werden.
*Sollte euer Knoten also im autoupdater `testing` stehen haben, auch wenn ihr `experimental` eingestellt habt, liegt das genau daran.*

Wir gehen davon aus, dass diese 3-teilung uns in Zukunft das Testen vereinfachen wird.
Vor allen Dingen werden wir in Zukunft mit ruhigerem Gewissen Tests auf `experimental` ausrollen können.
Spätestens ab jetzt werden wir davon ausgehen, das die Wahl zu `experimental` eine bewusste Entscheidung war.

**Übrigens:**
Im aktuellen Release (v2019.0.1~exp24), welches aktuell auf `experimental` ausgerollt wird, ist es nicht möglich `experimental` auszuwählen.
Ihr könnt es zwar wählen, doch wird es nicht gespeichert werden.
Erst mit einem späteren Release (welches vorraussichtlich bald kommt) ist das wieder möglich.

Euer Team vom Freifunk München
