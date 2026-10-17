---
layout: posts
title: "Neu bei meet.ffmuc.net: Live-Untertitel und Zuschauermodus"
date: 2026-10-17 12:00:00 +0200
categories: freifunk meet dienste
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## Neu bei meet.ffmuc.net: Live-Untertitel und Zuschauermodus

Wir haben [meet.ffmuc.net](https://meet.ffmuc.net) auf **Jitsi Meet Release 11248** aktualisiert und dabei auch die Betriebssysteme aller Server auf den neuesten Stand gebracht. Mit dem Update kommen zwei neue Funktionen: **Live-Untertitel** und ein **Zuschauermodus** für große Veranstaltungen.

### Live-Untertitel (Transkription)

Gesprochenes kann jetzt live als Text mitgeschrieben werden. Die Spracherkennung läuft **komplett auf unseren eigenen Servern** mit [Vosk](https://alphacephei.com/vosk/), einer Open-Source-Spracherkennung. **Es werden keine Audiodaten an externe Dienste geschickt.**

Aktuell nutzen wir ein **deutsches Sprachmodell**. Die Qualität ist ordentlich, aber nicht perfekt: Es ist ein kleines Modell, Fachbegriffe und Namen gehen schon mal daneben.

**So geht's:**

1. Unten in der Leiste auf **⋯ (Weitere Aktionen)** klicken und **Untertitel** (*Closed captions*) wählen.

   ![Menü „Weitere Aktionen“ mit den Einträgen Untertitel und Aufnahme & Transkription](/assets/media/meet-2026-10/meet-menu-captions.png)

2. In der Seitenleiste öffnet sich der Reiter **CC**. Dort auf **Untertitel starten** (*Start closed captions*) klicken.

   ![CC-Reiter in der Seitenleiste mit der Schaltfläche „Untertitel starten“](/assets/media/meet-2026-10/meet-captions-start.png)

3. Ab jetzt erscheint das Transkript live im CC-Reiter. Weitere Teilnehmende können die Untertitel auf demselben Weg für sich einblenden.

   ![Live-Transkript auf Deutsch im CC-Reiter, mit den Testpersonen Anna, Clara und Ben](/assets/media/meet-2026-10/meet-captions-live.png)

### Zuschauermodus für große Meetings

Sobald ein Meeting **mehr als 50 Teilnehmende** hat, werden alle weiteren automatisch zu **Zuschauer\*innen**: Sie sehen und hören das Meeting, senden aber selbst kein Audio und Video. Dadurch funktionieren auch sehr große Veranstaltungen mit Hunderten Zuschauer\*innen.

![Ansicht beim Beitreten als Zuschauer: Hinweis „Du bist derzeit Zuschauer“ und Möglichkeit, die Hand zu heben](/assets/media/meet-2026-10/meet-visitor-join.png)

Zuschauer\*innen können **die Hand heben**, um sich zu Wort zu melden. Moderator\*innen können sie dann zulassen, und sie nehmen anschließend als ganz normale Teilnehmende am Meeting teil.

![Nach dem Handheben wurde Ben zugelassen und ist jetzt normaler Teilnehmer neben Anna (Moderation) und Clara](/assets/media/meet-2026-10/meet-visitor-promoted.png)

### Tipp: Zuschauer-Link

Hängt man `#config.preferVisitor=true` an einen Meeting-Link an, treten Personen, die diesen Link nutzen, direkt als Zuschauer\*innen bei:

```
https://meet.ffmuc.net/MeinRaum#config.preferVisitor=true
```

Das ist praktisch, wenn ihr z. B. einen Vortrag streamt und den Link öffentlich teilt.

**Wichtig:** Das ist nur eine **Komfortfunktion, keine Zugriffskontrolle**. Jede\*r kann den Zusatz einfach entfernen und normal beitreten. Moderator\*innen können den Zuschauermodus auch nicht für alle erzwingen. Wenn ihr steuern wollt, wer reinkommt, nutzt die **Lobby** oder ein **Passwort**.

### Danke!

[meet.ffmuc.net](https://meet.ffmuc.net) wird ehrenamtlich betrieben und durch Spenden finanziert, ohne Werbung und ohne Tracking. Wenn euch der Dienst hilft, freuen wir uns über Unterstützung:

- Spenden: [https://spende.ffmuc.net](https://spende.ffmuc.net)
- Mitglied werden: [https://mitglieder.ffmuc.net](https://mitglieder.ffmuc.net)
- Alle Dienste im Überblick: [/dienste/](/dienste/)

</section>

<section data-lang="en" class="language-content" markdown="1">

## New on meet.ffmuc.net: live subtitles and visitor mode

We have upgraded [meet.ffmuc.net](https://meet.ffmuc.net) to **Jitsi Meet release 11248** and also brought the operating systems of all servers up to date. The update brings two new features: **live subtitles** and a **visitor mode** for large events.

### Live subtitles (transcription)

Speech can now be transcribed live. Speech recognition runs **entirely on our own servers** using [Vosk](https://alphacephei.com/vosk/), an open source speech recognition toolkit. **No audio is sent to external services.**

We currently use a **German speech model**. The quality is decent but not perfect: it is a small model, so technical terms and names are sometimes off.

**How to use it:**

1. In the toolbar, click **⋯ (More actions)** and choose **Closed captions**.

   ![“More actions” menu with the entries Closed captions and Record & Transcribe](/assets/media/meet-2026-10/meet-menu-captions.png)

2. The **CC** tab opens in the side panel. Click **Start closed captions**.

   ![CC tab in the side panel with the “Start closed captions” button](/assets/media/meet-2026-10/meet-captions-start.png)

3. The transcript now appears live in the CC tab. Other participants can turn on subtitles for themselves the same way.

   ![Live German transcript in the CC tab, with the test users Anna, Clara and Ben](/assets/media/meet-2026-10/meet-captions-live.png)

### Visitor mode for large meetings

Once a meeting has **more than 50 participants**, everyone joining after that automatically becomes a **visitor**: visitors see and hear the meeting but do not send audio or video themselves. This makes very large events with hundreds of viewers possible.

![View when joining as a visitor: “You're currently a viewer” notice and the option to raise your hand](/assets/media/meet-2026-10/meet-visitor-join.png)

Visitors can **raise their hand** to ask to speak. Moderators can then admit them, and they join the meeting as normal participants.

![After raising his hand, Ben was admitted and is now a normal participant next to Anna (moderator) and Clara](/assets/media/meet-2026-10/meet-visitor-promoted.png)

### Tip: visitor link

If you append `#config.preferVisitor=true` to a meeting link, people using that link join directly as visitors:

```
https://meet.ffmuc.net/MyRoom#config.preferVisitor=true
```

This is handy if you are streaming a talk and sharing the link publicly.

**Important:** this is just a **convenience, not access control**. Anyone can simply remove the suffix and join normally. Moderators also cannot force visitor mode for everyone. If you want to control who gets in, use the **lobby** or a **password**.

### Thank you!

[meet.ffmuc.net](https://meet.ffmuc.net) is run by volunteers and funded by donations, without ads and without tracking. If the service helps you, we appreciate your support:

- Donate: [https://spende.ffmuc.net](https://spende.ffmuc.net)
- Become a member: [https://mitglieder.ffmuc.net](https://mitglieder.ffmuc.net)
- All our services: [/dienste/](/dienste/)

</section>

<section data-lang="fr" class="language-content" markdown="1">

## Nouveau sur meet.ffmuc.net : sous-titres en direct et mode spectateur

Nous avons mis à jour [meet.ffmuc.net](https://meet.ffmuc.net) vers **Jitsi Meet release 11248** et mis à jour les systèmes d'exploitation de tous les serveurs. Cette mise à jour apporte deux nouvelles fonctionnalités : les **sous-titres en direct** et un **mode spectateur** pour les grands événements.

### Sous-titres en direct (transcription)

La parole peut désormais être transcrite en direct. La reconnaissance vocale fonctionne **entièrement sur nos propres serveurs** avec [Vosk](https://alphacephei.com/vosk/), un outil de reconnaissance vocale open source. **Aucun audio n'est envoyé à des services externes.**

Nous utilisons actuellement un **modèle de langue allemand**. La qualité est correcte mais pas parfaite : c'est un petit modèle, les termes techniques et les noms ne sont pas toujours bien reconnus.

**Mode d'emploi :**

1. Dans la barre d'outils, cliquez sur **⋯ (Plus d'actions)** et choisissez **Sous-titres** (*Closed captions*).

   ![Menu « Plus d'actions » avec les entrées Sous-titres et Enregistrer et transcrire](/assets/media/meet-2026-10/meet-menu-captions.png)

2. L'onglet **CC** s'ouvre dans le panneau latéral. Cliquez sur **Démarrer les sous-titres** (*Start closed captions*).

   ![Onglet CC du panneau latéral avec le bouton « Démarrer les sous-titres »](/assets/media/meet-2026-10/meet-captions-start.png)

3. La transcription apparaît maintenant en direct dans l'onglet CC. Les autres participants peuvent activer les sous-titres de la même manière.

   ![Transcription allemande en direct dans l'onglet CC, avec les utilisateurs de test Anna, Clara et Ben](/assets/media/meet-2026-10/meet-captions-live.png)

### Mode spectateur pour les grandes réunions

Dès qu'une réunion compte **plus de 50 participants**, toutes les personnes qui rejoignent ensuite deviennent automatiquement des **spectateurs** : ils voient et entendent la réunion, mais n'envoient ni audio ni vidéo. Cela permet d'organiser de très grands événements avec des centaines de spectateurs.

![Vue lors de l'arrivée en tant que spectateur : message « Vous êtes actuellement spectateur » et possibilité de lever la main](/assets/media/meet-2026-10/meet-visitor-join.png)

Les spectateurs peuvent **lever la main** pour demander la parole. Les modérateurs peuvent alors les admettre, et ils rejoignent la réunion comme participants normaux.

![Après avoir levé la main, Ben a été admis et est maintenant participant normal à côté d'Anna (modération) et Clara](/assets/media/meet-2026-10/meet-visitor-promoted.png)

### Astuce : lien spectateur

Si vous ajoutez `#config.preferVisitor=true` à un lien de réunion, les personnes qui utilisent ce lien rejoignent directement en tant que spectateurs :

```
https://meet.ffmuc.net/MaSalle#config.preferVisitor=true
```

C'est pratique si vous diffusez une conférence et partagez le lien publiquement.

**Important :** il s'agit seulement d'une **commodité, pas d'un contrôle d'accès**. N'importe qui peut supprimer ce suffixe et rejoindre normalement. Les modérateurs ne peuvent pas non plus imposer le mode spectateur à tout le monde. Pour contrôler qui entre, utilisez la **salle d'attente** (lobby) ou un **mot de passe**.

### Merci !

[meet.ffmuc.net](https://meet.ffmuc.net) est géré par des bénévoles et financé par des dons, sans publicité ni pistage. Si le service vous est utile, votre soutien est le bienvenu :

- Faire un don : [https://spende.ffmuc.net](https://spende.ffmuc.net)
- Devenir membre : [https://mitglieder.ffmuc.net](https://mitglieder.ffmuc.net)
- Tous nos services : [/dienste/](/dienste/)

</section>

<section data-lang="es" class="language-content" markdown="1">

## Novedades en meet.ffmuc.net: subtítulos en directo y modo espectador

Hemos actualizado [meet.ffmuc.net](https://meet.ffmuc.net) a **Jitsi Meet release 11248** y también hemos actualizado los sistemas operativos de todos los servidores. La actualización trae dos nuevas funciones: **subtítulos en directo** y un **modo espectador** para eventos grandes.

### Subtítulos en directo (transcripción)

Ahora lo que se dice puede transcribirse en directo. El reconocimiento de voz funciona **íntegramente en nuestros propios servidores** con [Vosk](https://alphacephei.com/vosk/), un sistema de reconocimiento de voz de código abierto. **No se envía audio a servicios externos.**

Actualmente usamos un **modelo de idioma alemán**. La calidad es aceptable pero no perfecta: es un modelo pequeño, y a veces falla con términos técnicos y nombres.

**Cómo usarlo:**

1. En la barra de herramientas, haz clic en **⋯ (Más acciones)** y elige **Subtítulos** (*Closed captions*).

   ![Menú «Más acciones» con las entradas Subtítulos y Grabar y transcribir](/assets/media/meet-2026-10/meet-menu-captions.png)

2. Se abre la pestaña **CC** en el panel lateral. Haz clic en **Iniciar subtítulos** (*Start closed captions*).

   ![Pestaña CC del panel lateral con el botón «Iniciar subtítulos»](/assets/media/meet-2026-10/meet-captions-start.png)

3. A partir de ahora la transcripción aparece en directo en la pestaña CC. Los demás participantes pueden activar los subtítulos de la misma manera.

   ![Transcripción en alemán en directo en la pestaña CC, con los usuarios de prueba Anna, Clara y Ben](/assets/media/meet-2026-10/meet-captions-live.png)

### Modo espectador para reuniones grandes

En cuanto una reunión tiene **más de 50 participantes**, todas las personas que se unen después pasan automáticamente a ser **espectadores**: ven y oyen la reunión, pero no envían audio ni vídeo. Así funcionan incluso eventos muy grandes con cientos de espectadores.

![Vista al unirse como espectador: aviso «Actualmente eres espectador» y la opción de levantar la mano](/assets/media/meet-2026-10/meet-visitor-join.png)

Los espectadores pueden **levantar la mano** para pedir la palabra. Los moderadores pueden entonces admitirlos, y pasan a participar en la reunión como participantes normales.

![Tras levantar la mano, Ben fue admitido y ahora es un participante normal junto a Anna (moderación) y Clara](/assets/media/meet-2026-10/meet-visitor-promoted.png)

### Consejo: enlace de espectador

Si añades `#config.preferVisitor=true` a un enlace de reunión, las personas que usen ese enlace se unen directamente como espectadores:

```
https://meet.ffmuc.net/MiSala#config.preferVisitor=true
```

Es práctico si retransmites una charla y compartes el enlace públicamente.

**Importante:** es solo una **comodidad, no un control de acceso**. Cualquiera puede quitar el sufijo y unirse normalmente. Los moderadores tampoco pueden imponer el modo espectador a todo el mundo. Si quieres controlar quién entra, usa la **sala de espera** (lobby) o una **contraseña**.

### ¡Gracias!

[meet.ffmuc.net](https://meet.ffmuc.net) lo gestionan voluntarios y se financia con donaciones, sin publicidad ni rastreo. Si el servicio te resulta útil, agradecemos tu apoyo:

- Donar: [https://spende.ffmuc.net](https://spende.ffmuc.net)
- Hacerse miembro: [https://mitglieder.ffmuc.net](https://mitglieder.ffmuc.net)
- Todos nuestros servicios: [/dienste/](/dienste/)

</section>

<section data-lang="ua" class="language-content" markdown="1">

## Нове на meet.ffmuc.net: субтитри в реальному часі та режим глядача

Ми оновили [meet.ffmuc.net](https://meet.ffmuc.net) до **Jitsi Meet release 11248** і також оновили операційні системи на всіх серверах. Оновлення принесло дві нові функції: **субтитри в реальному часі** та **режим глядача** для великих заходів.

### Субтитри в реальному часі (транскрипція)

Тепер мовлення можна транскрибувати наживо. Розпізнавання мовлення працює **повністю на наших власних серверах** за допомогою [Vosk](https://alphacephei.com/vosk/) — системи розпізнавання мовлення з відкритим кодом. **Жодне аудіо не надсилається зовнішнім сервісам.**

Наразі ми використовуємо **німецьку мовну модель**. Якість прийнятна, але не ідеальна: це невелика модель, тож технічні терміни та імена інколи розпізнаються неточно.

**Як користуватися:**

1. На панелі інструментів натисніть **⋯ (Більше дій)** і виберіть **Субтитри** (*Closed captions*).

   ![Меню «Більше дій» з пунктами «Субтитри» та «Запис і транскрипція»](/assets/media/meet-2026-10/meet-menu-captions.png)

2. На бічній панелі відкриється вкладка **CC**. Натисніть **Увімкнути субтитри** (*Start closed captions*).

   ![Вкладка CC на бічній панелі з кнопкою «Увімкнути субтитри»](/assets/media/meet-2026-10/meet-captions-start.png)

3. Тепер транскрипт з'являється наживо у вкладці CC. Інші учасники можуть увімкнути субтитри для себе так само.

   ![Транскрипт німецькою мовою наживо у вкладці CC з тестовими користувачами Anna, Clara та Ben](/assets/media/meet-2026-10/meet-captions-live.png)

### Режим глядача для великих зустрічей

Щойно у зустрічі стає **понад 50 учасників**, усі, хто приєднується далі, автоматично стають **глядачами**: вони бачать і чують зустріч, але самі не надсилають аудіо та відео. Завдяки цьому працюють навіть дуже великі заходи із сотнями глядачів.

![Вигляд під час приєднання як глядач: повідомлення «Ви зараз глядач» і можливість підняти руку](/assets/media/meet-2026-10/meet-visitor-join.png)

Глядачі можуть **підняти руку**, щоб попросити слово. Модератори можуть їх допустити, і тоді вони беруть участь у зустрічі як звичайні учасники.

![Після піднятої руки Ben був допущений і тепер є звичайним учасником поруч з Anna (модерація) та Clara](/assets/media/meet-2026-10/meet-visitor-promoted.png)

### Порада: посилання для глядачів

Якщо додати `#config.preferVisitor=true` до посилання на зустріч, люди, які скористаються цим посиланням, приєднаються одразу як глядачі:

```
https://meet.ffmuc.net/MoyaKimnata#config.preferVisitor=true
```

Це зручно, якщо ви транслюєте доповідь і публічно поширюєте посилання.

**Важливо:** це лише **зручність, а не контроль доступу**. Будь-хто може просто прибрати цей суфікс і приєднатися звичайним чином. Модератори також не можуть примусово увімкнути режим глядача для всіх. Якщо ви хочете контролювати, хто заходить, використовуйте **лобі** або **пароль**.

### Дякуємо!

[meet.ffmuc.net](https://meet.ffmuc.net) підтримується волонтерами та фінансується з пожертв, без реклами та без стеження. Якщо сервіс вам корисний, ми будемо вдячні за підтримку:

- Пожертва: [https://spende.ffmuc.net](https://spende.ffmuc.net)
- Стати членом: [https://mitglieder.ffmuc.net](https://mitglieder.ffmuc.net)
- Усі наші сервіси: [/dienste/](/dienste/)

</section>
