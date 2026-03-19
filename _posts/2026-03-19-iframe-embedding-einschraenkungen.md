---
layout: posts
title: "Einschränkungen für Iframe-Embedding unserer Dienste"
date: 2026-03-19 12:00:00 +0100
categories: freifunk infrastruktur community
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## Einschränkungen für Iframe-Embedding

Wir mussten leider Maßnahmen ergreifen, um das Einbetten von [meet.ffmuc.net](https://meet.ffmuc.net) per Iframe einzuschränken. Der Grund: Immer wieder betten Dritte unseren Videokonferenz-Dienst in ihre eigenen Webseiten ein und entfernen dabei sämtliche Logos und Spendenlinks.

### Was ist passiert?

In den letzten Wochen ist uns aufgefallen, dass diverse Webseiten [meet.ffmuc.net](https://meet.ffmuc.net) per `<iframe>` in ihre eigenen Seiten eingebunden haben. Dabei wurden systematisch:

- Unsere **Logos** und jegliches Branding entfernt
- Alle **Spendenlinks** herausgenommen
- Kein **Hinweis** auf Freifunk München angezeigt
- Keine **Rücksprache** mit uns gehalten

Unser Jitsi-Dienst wird ehrenamtlich betrieben und durch Spenden finanziert. Wenn jemand unseren Service einbettet und dabei alle Hinweise auf uns entfernt, belastet das nicht nur unsere Server, sondern entzieht uns auch die Möglichkeit, auf Spenden aufmerksam zu machen, die den Betrieb erst ermöglichen.

### Was haben wir geändert?

Wir setzen jetzt HTTP-Header, die das Einbetten unserer Seiten in fremde Iframes unterbinden:

- **`X-Frame-Options`**: Verhindert das Laden in Iframes auf fremden Domains
- **`Content-Security-Policy`** mit `frame-ancestors`-Direktive: Erlaubt Embedding nur von unseren eigenen Domains

Das bedeutet: Unsere Dienste können weiterhin direkt aufgerufen und genutzt werden. Sie lassen sich nur nicht mehr ohne Weiteres in fremde Webseiten einbetten.

### Was ist, wenn ich Freifunk-Inhalte einbetten möchte?

Wir sind ein offenes Community-Projekt und freuen uns über Verbreitung! Wenn ihr unsere Karte oder andere Dienste auf eurer Seite einbinden wollt, meldet euch einfach bei uns:

- Per E-Mail an [hilfe@ffmuc.net](mailto:hilfe@ffmuc.net)
- In unserem [Chat](https://chat.ffmuc.net)
- Auf unserem [nächsten Treffen](https://ffmuc.net/mitmachen/)

Wir bitten lediglich darum, dass unsere **Logos und Spendenlinks sichtbar bleiben** und ein **Link auf unser Projekt** vorhanden ist. Für befreundete Freifunk-Communities und gemeinnützige Projekte schalten wir das Embedding gerne frei.

### Hintergrund

Diese Maßnahme ist nicht nur eine Frage der Fairness, sondern auch der Sicherheit. Das Einbetten fremder Inhalte per Iframe kann für sogenanntes [Clickjacking](https://owasp.org/www-community/attacks/Clickjacking) missbraucht werden. Die von uns gesetzten Header sind eine empfohlene Sicherheitsmaßnahme gemäß OWASP-Richtlinien.

</section>

<section data-lang="en" class="language-content" markdown="1">

## Restrictions on Iframe Embedding of Our Services

We had to introduce measures to restrict the embedding of [meet.ffmuc.net](https://meet.ffmuc.net) via iframes. The reason: third parties keep embedding our video conferencing service into their own websites, stripping all logos and donation links in the process.

### What happened?

Over the past weeks, we noticed that various websites were embedding [meet.ffmuc.net](https://meet.ffmuc.net) via `<iframe>` tags on their own pages. In doing so, they systematically:

- Removed our **logos** and all branding
- Stripped all **donation links**
- Showed no **mention** of Freifunk München
- Made no **prior contact** with us

Our Jitsi service is run by volunteers and funded by donations. When someone embeds our service and removes all references to us, it not only puts load on our servers but also takes away our ability to raise awareness for the donations that make this service possible.

### What did we change?

We now set HTTP headers that prevent our pages from being embedded in third-party iframes:

- **`X-Frame-Options`**: Prevents loading in iframes on foreign domains
- **`Content-Security-Policy`** with `frame-ancestors` directive: Only allows embedding from our own domains

This means: Our services can still be accessed and used directly. They just can't be embedded into third-party websites without permission.

### What if I want to embed Freifunk content?

We are an open community project and we welcome people sharing our work! If you want to embed our map or other services on your site, just get in touch:

- By email at [hilfe@ffmuc.net](mailto:hilfe@ffmuc.net)
- In our [chat](https://chat.ffmuc.net)
- At our [next meetup](https://ffmuc.net/mitmachen/)

We simply ask that our **logos and donation links remain visible** and that a **link to our project** is included. We're happy to enable embedding for fellow Freifunk communities and non-profit projects.

### Background

This measure is not just a matter of fairness but also of security. Embedding third-party content via iframes can be exploited for so-called [clickjacking](https://owasp.org/www-community/attacks/Clickjacking) attacks. The headers we set are a recommended security measure according to OWASP guidelines.

</section>

<section data-lang="fr" class="language-content" markdown="1">

## Restrictions sur l'intégration en iframe de nos services

Nous avons dû introduire des mesures pour restreindre l'intégration de [meet.ffmuc.net](https://meet.ffmuc.net) via des iframes. La raison : des tiers intègrent régulièrement notre service de visioconférence dans leurs propres sites web, en supprimant tous les logos et liens de don.

### Que s'est-il passé ?

Au cours des dernières semaines, nous avons constaté que divers sites web intégraient [meet.ffmuc.net](https://meet.ffmuc.net) via des balises `<iframe>` sur leurs propres pages. Ce faisant, ils ont systématiquement :

- Supprimé nos **logos** et tout branding
- Retiré tous les **liens de don**
- N'affiché aucune **mention** de Freifunk München
- N'effectué aucun **contact préalable** avec nous

Notre service Jitsi est géré par des bénévoles et financé par des dons. Lorsque quelqu'un intègre notre service en supprimant toute référence à nous, cela sollicite non seulement nos serveurs, mais nous empêche aussi de sensibiliser aux dons qui rendent ce service possible.

### Qu'avons-nous changé ?

Nous utilisons désormais des en-têtes HTTP qui empêchent l'intégration de nos pages dans des iframes tiers :

- **`X-Frame-Options`** : empêche le chargement dans des iframes sur des domaines tiers
- **`Content-Security-Policy`** avec la directive `frame-ancestors` : n'autorise l'intégration que depuis nos propres domaines

Cela signifie : nos services restent accessibles et utilisables directement. Ils ne peuvent simplement plus être intégrés dans des sites tiers sans autorisation.

### Et si je veux intégrer du contenu Freifunk ?

Nous sommes un projet communautaire ouvert et nous encourageons le partage ! Si vous souhaitez intégrer notre carte ou d'autres services sur votre site, contactez-nous :

- Par e-mail à [hilfe@ffmuc.net](mailto:hilfe@ffmuc.net)
- Dans notre [chat](https://chat.ffmuc.net)
- Lors de notre [prochaine rencontre](https://ffmuc.net/mitmachen/)

Nous demandons simplement que nos **logos et liens de don restent visibles** et qu'un **lien vers notre projet** soit inclus. Nous activons volontiers l'intégration pour les communautés Freifunk amies et les projets à but non lucratif.

</section>

<section data-lang="es" class="language-content" markdown="1">

## Restricciones para la integración con iframe de nuestros servicios

Hemos tenido que introducir medidas para restringir la integración de [meet.ffmuc.net](https://meet.ffmuc.net) mediante iframes. El motivo: terceros integran repetidamente nuestro servicio de videoconferencia en sus propios sitios web, eliminando todos los logos y enlaces de donación.

### ¿Qué ocurrió?

En las últimas semanas, detectamos que diversos sitios web estaban integrando [meet.ffmuc.net](https://meet.ffmuc.net) mediante etiquetas `<iframe>` en sus propias páginas. Al hacerlo, sistemáticamente:

- Eliminaron nuestros **logos** y todo el branding
- Quitaron todos los **enlaces de donación**
- No mostraron ninguna **mención** de Freifunk München
- No realizaron **contacto previo** con nosotros

Nuestro servicio Jitsi es operado por voluntarios y financiado mediante donaciones. Cuando alguien integra nuestro servicio y elimina todas las referencias a nosotros, esto no solo genera carga en nuestros servidores, sino que también nos quita la posibilidad de dar a conocer las donaciones que hacen posible este servicio.

### ¿Qué hemos cambiado?

Ahora establecemos cabeceras HTTP que impiden que nuestras páginas se integren en iframes de terceros:

- **`X-Frame-Options`**: impide la carga en iframes de dominios externos
- **`Content-Security-Policy`** con la directiva `frame-ancestors`: solo permite la integración desde nuestros propios dominios

Esto significa: nuestros servicios siguen siendo accesibles y utilizables directamente. Simplemente ya no pueden integrarse en sitios web de terceros sin permiso.

### ¿Y si quiero integrar contenido de Freifunk?

Somos un proyecto comunitario abierto y nos alegra que la gente comparta nuestro trabajo. Si quieres integrar nuestro mapa u otros servicios en tu sitio, simplemente contáctanos:

- Por correo electrónico a [hilfe@ffmuc.net](mailto:hilfe@ffmuc.net)
- En nuestro [chat](https://chat.ffmuc.net)
- En nuestro [próximo encuentro](https://ffmuc.net/mitmachen/)

Solo pedimos que nuestros **logos y enlaces de donación permanezcan visibles** y que se incluya un **enlace a nuestro proyecto**. Activamos la integración con gusto para comunidades Freifunk amigas y proyectos sin ánimo de lucro.

</section>

<section data-lang="ua" class="language-content" markdown="1">

## Обмеження на вбудовування наших сервісів через iframe

Нам довелося запровадити заходи для обмеження вбудовування [meet.ffmuc.net](https://meet.ffmuc.net) через iframe. Причина: треті сторони постійно вбудовують наш сервіс відеоконференцій у свої веб-сайти, при цьому видаляючи всі логотипи та посилання на пожертви.

### Що сталося?

Протягом останніх тижнів ми помітили, що різні веб-сайти вбудовували [meet.ffmuc.net](https://meet.ffmuc.net) через теги `<iframe>` на своїх сторінках. При цьому систематично:

- Видалялися наші **логотипи** та весь брендинг
- Прибиралися всі **посилання на пожертви**
- Не відображалась жодна **згадка** про Freifunk München
- Не було жодного **попереднього зв'язку** з нами
Наш сервіс Jitsi підтримується волонтерами та фінансується з пожертв. Коли хтось вбудовує наш сервіс і видаляє всі згадки про нас, це не лише навантажує наші сервери, а й позбавляє нас можливості привернути увагу до пожертв, які уможливлюють роботу цього сервісу.

### Що ми змінили?

Тепер ми встановлюємо HTTP-заголовки, які запобігають вбудовуванню наших сторінок у сторонні iframe:

- **`X-Frame-Options`**: запобігає завантаженню в iframe на сторонніх доменах
- **`Content-Security-Policy`** з директивою `frame-ancestors`: дозволяє вбудовування лише з наших власних доменів

Це означає: наші сервіси можна й надалі відкривати та використовувати безпосередньо. Їх просто не можна вбудовувати на сторонні веб-сайти без дозволу.

### Що робити, якщо я хочу вбудувати контент Freifunk?

Ми - відкритий громадський проєкт і вітаємо поширення нашої роботи! Якщо ви хочете вбудувати нашу карту чи інші сервіси на вашому сайті, просто зв'яжіться з нами:

- Електронною поштою на [hilfe@ffmuc.net](mailto:hilfe@ffmuc.net)
- У нашому [чаті](https://chat.ffmuc.net)
- На нашій [наступній зустрічі](https://ffmuc.net/mitmachen/)

Ми лише просимо, щоб наші **логотипи та посилання на пожертви залишалися видимими** і було включено **посилання на наш проєкт**. Для дружніх спільнот Freifunk та некомерційних проєктів ми з радістю відкриємо вбудовування.

</section>
