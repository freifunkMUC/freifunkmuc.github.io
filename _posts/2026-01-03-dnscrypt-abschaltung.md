---
layout: posts
title: "Abschaltung von DNSCrypt"
date: 2026-01-03 16:00:00 +0200
categories: services dns
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## Abschaltung von DNSCrypt

Wir haben uns dazu entschlossen, **nach Ende Februar 2026** die DNSCrypt Endpoints von unseren [öffentlichen DNS Resolvern](https://ffmuc.net/wiki/doku.php?id=knb:dohdot) abzuschalten.

Wir bekommen immer wieder Meldungen bezüglich Timeouts und anderer Fehler, die wir aber leider nicht vernünftig troubleshooten können, insbesondere da im ehrenamtlichen Team der Admins kein DNSCrypt-Nutzer/keine DNSCrypt-Nutzerin ist.

Die Nutzungszahlen sind auch vergleichweise gering, wie in unseren [öffentlichen Statistiken](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot) zu sehen ist. 

Wir möchten einen Privacy-kritischen Service lieber gar nicht als fehlerhaft zur Verfügung stellen, und weisen stattdessen auf die modernen alternativen Protokolle hin, die wir unterstützen:

## Alternativen

- DNS over TLS (DoT) `tls://dot.ffmuc.net`
- DNS over QUIC (DoQ) `quic://doq.ffmuc.net`
- DNS over HTTPS (DoH) `https://doh.ffmuc.net`
- DNS over HTTP/3 (DoH3) `h3://doh.ffmuc.net`

(siehe unsere detailierte Wiki-Seite dazu: <https://ffmuc.net/wiki/doku.php?id=knb:dohdot>)

Falls ihr die Software `dnscrypt-proxy` einsetzt, werden diese Protokolle auch bereits unterstützt!

Solltet ihr aber speziell das DNSCrypt-Protokoll verwenden wollen/müssen, gibt es eine Liste an [alternativen Anbietern](https://dnscrypt.info/public-servers/).

---

Bei Fragen oder Anmerkungen könnt ihr euch jederzeit bei uns im Chat melden: <https://chat.ffmuc.net>

</section>

<section data-lang="en" class="language-content" markdown="1">

## Disabling DNSCrypt

We have decided to disable the DNSCrypt endpoints of our [public DNS resolvers](https://ffmuc.net/wiki/doku.php?id=knb:dohdot) after the **end of February 2026**.

We repeatedly get reports about timeouts and other issues, which we can't troubleshoot effectively unfortunately, primarily because nobody in our volunteer admin team uses DNSCrypt themselves.

Additionally, the usage counts are comparatively low, as can be seen in our [public statistics](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot).

We prefer not to offer a privacy-critical service at all rather than in a broken state, and instead want to point you to the modern alternative protocols, which we support:

## Alternatives

- DNS over TLS (DoT) `tls://dot.ffmuc.net`
- DNS over QUIC (DoQ) `quic://doq.ffmuc.net`
- DNS over HTTPS (DoH) `https://doh.ffmuc.net`
- DNS over HTTP/3 (DoH3) `h3://doh.ffmuc.net`

(see our more detailed wiki page on this: <https://ffmuc.net/wiki/doku.php?id=knb:dohdot>)

If you have been using `dnscrypt-proxy` so far, it already supports these protocols!

If however you want or are required to use DNSCrypt, there is a list of [alternative providers](https://dnscrypt.info/public-servers/).

---

If you have questions or comments, please reach out to us in our chat: <https://chat.ffmuc.net>

</section>

<section data-lang="fr" class="language-content" markdown="1">

## Désactivation de DNSCrypt

Nous avons décidé de désactiver les points de terminaison DNSCrypt de nos [résolveurs DNS publics](https://ffmuc.net/wiki/doku.php?id=knb:dohdot) après la **fin février 2026**.

Nous recevons régulièrement des signalements concernant des délais d'attente et d'autres erreurs que nous ne pouvons malheureusement pas résoudre correctement, en particulier parce qu'aucun membre de l'équipe administrative bénévole n'utilise DNSCrypt.

Les chiffres d'utilisation sont également relativement faibles, comme le montrent nos [statistiques publiques](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot).

Nous préférons ne pas offrir un service critique pour la confidentialité plutôt que de l'offrir de manière défectueuse, et nous souhaitons plutôt vous orienter vers les protocoles alternatifs modernes que nous prenons en charge :

## Alternatives

- DNS over TLS (DoT) `tls://dot.ffmuc.net`
- DNS over QUIC (DoQ) `quic://doq.ffmuc.net`
- DNS over HTTPS (DoH) `https://doh.ffmuc.net`
- DNS over HTTP/3 (DoH3) `h3://doh.ffmuc.net`

(voir notre page wiki détaillée à ce sujet : <https://ffmuc.net/wiki/doku.php?id=knb:dohdot>)

Si vous utilisez le logiciel `dnscrypt-proxy`, ces protocoles sont déjà pris en charge !

Cependant, si vous souhaitez ou devez utiliser spécifiquement le protocole DNSCrypt, il existe une liste de [fournisseurs alternatifs](https://dnscrypt.info/public-servers/).

---

Pour toute question ou remarque, n'hésitez pas à nous contacter dans notre chat : <https://chat.ffmuc.net>

</section>

<section data-lang="es" class="language-content" markdown="1">

## Desactivación de DNSCrypt

Hemos decidido desactivar los puntos finales DNSCrypt de nuestros [resolutores DNS públicos](https://ffmuc.net/wiki/doku.php?id=knb:dohdot) después del **final de febrero de 2026**.

Recibimos repetidamente informes sobre tiempos de espera y otros errores que desafortunadamente no podemos solucionar adecuadamente, especialmente porque ningún miembro del equipo administrativo voluntario utiliza DNSCrypt.

Las cifras de uso también son comparativamente bajas, como se puede ver en nuestras [estadísticas públicas](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot).

Preferimos no ofrecer un servicio crítico para la privacidad en absoluto que ofrecerlo defectuosamente, y en su lugar queremos señalar los protocolos alternativos modernos que admitimos:

## Alternativas

- DNS over TLS (DoT) `tls://dot.ffmuc.net`
- DNS over QUIC (DoQ) `quic://doq.ffmuc.net`
- DNS over HTTPS (DoH) `https://doh.ffmuc.net`
- DNS over HTTP/3 (DoH3) `h3://doh.ffmuc.net`

(consulta nuestra página wiki detallada sobre esto: <https://ffmuc.net/wiki/doku.php?id=knb:dohdot>)

Si utilizas el software `dnscrypt-proxy`, ¡estos protocolos ya son compatibles!

Sin embargo, si deseas o debes usar específicamente el protocolo DNSCrypt, existe una lista de [proveedores alternativos](https://dnscrypt.info/public-servers/).

---

Si tienes preguntas o comentarios, puedes contactarnos en nuestro chat en cualquier momento: <https://chat.ffmuc.net>

</section>

<section data-lang="ua" class="language-content" markdown="1">

## Вимкнення DNSCrypt

Ми вирішили вимкнути кінцеві точки DNSCrypt наших [публічних DNS-розпрацьовувачів](https://ffmuc.net/wiki/doku.php?id=knb:dohdot) після **кінця лютого 2026 року**.

Ми постійно отримуємо повідомлення про тайм-аути та інші помилки, які ми, на жаль, не можемо належним чином усунути, особливо тому, що жоден із членів нашої волонтерської адміністративної команди не використовує DNSCrypt.

Кількість використань також порівняно низька, як видно з наших [публічних статистик](https://stats.ffmuc.net/d/tlvoghcZk/doh-dot).

Ми віддаємо перевагу взагалі не пропонувати послугу, критичну для конфіденційності, ніж пропонувати її з помилками, і натомість хочемо вказати на сучасні альтернативні протоколи, які ми підтримуємо:

## Альтернативи

- DNS over TLS (DoT) `tls://dot.ffmuc.net`
- DNS over QUIC (DoQ) `quic://doq.ffmuc.net`
- DNS over HTTPS (DoH) `https://doh.ffmuc.net`
- DNS over HTTP/3 (DoH3) `h3://doh.ffmuc.net`

(дивіться нашу детальну wiki-сторінку про це: <https://ffmuc.net/wiki/doku.php?id=knb:dohdot>)

Якщо ви використовуєте програмне забезпечення `dnscrypt-proxy`, ці протоколи вже підтримуються!

Однак, якщо ви хочете або повинні використовувати саме протокол DNSCrypt, існує список [альтернативних постачальників](https://dnscrypt.info/public-servers/).

---

Якщо у вас виникнуть запитання або коментарі, ви можете в будь-який час зв'язатися з нами в нашому чаті: <https://chat.ffmuc.net>

</section>
