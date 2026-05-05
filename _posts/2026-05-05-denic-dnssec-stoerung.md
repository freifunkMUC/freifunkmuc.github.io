---
layout: posts
title: "DENIC DNSSEC-Störung – .de-Domains nicht erreichbar"
date: 2026-05-05 22:30:00 +0200
categories: freifunk infrastruktur
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## DENIC DNSSEC-Störung – .de-Domains nicht erreichbar

Seit ca. 22:00 Uhr (MESZ) am 05.05.2026 besteht eine massive Störung bei der DENIC, dem deutschen Domain-Registrar. Dadurch sind alle **DNSSEC-signierten .de-Domains** derzeit in ihrer Erreichbarkeit betroffen.

### Was ist passiert?

Betroffen sind alle **DNSSEC-signierten** Websites und Dienste unter der `.de`-Top-Level-Domain. Der Zugriff ist aktuell nur noch möglich, wenn die Domain-Auflösung noch im DNS-Cache eures Routers oder Providers gespeichert ist. Sobald dieser Cache abläuft, kommt es zu Verbindungsfehlern im Browser.

### Was bedeutet das für euch?

- Eure DNSSEC-signierten `.de`-Websites können für Besucher teilweise oder vollständig nicht erreichbar sein
- Auch **nicht-`.de`-Domains** können betroffen sein, wenn deren Nameserver selbst unter `.de` laufen. Beispiel: Die Domain `example.com` nutzt als Nameserver `ns1.hoster.de` und `ns2.hoster.de` – wenn `hoster.de` DNSSEC-signiert ist und nicht aufgelöst werden kann, ist auch `example.com` nicht erreichbar
- Dies liegt **nicht** an unseren Systemen, sondern an der zentralen DENIC-Infrastruktur
- Wir beobachten die Situation kontinuierlich

### Was haben wir getan?

Um euch trotz der Störung ungestörtes Surfen zu ermöglichen, haben wir auf unseren Nameservern die **DNSSEC-Validierung für die .de-Zone vorübergehend deaktiviert**:

<pre><code>rec_control add-nta de.</code></pre>

Das bedeutet: Wenn ihr unsere DNS-Server nutzt, könnt ihr `.de`-Domains weiterhin erreichen.

### Wie nutzt ihr unsere Nameserver?

Eine Anleitung zur Einrichtung unserer DNS-Server findet ihr hier:

**[https://dns-setup.ffmuc.net/](https://dns-setup.ffmuc.net/)**

Weitere Informationen zu unserem DNS-Angebot gibt es auf unserer [DNS-Privacy-Seite](https://ffmuc.net/dns-privacy/).

### Offizielle Stellungnahme der DENIC

> **05. Mai 2026, 23:28 MESZ** – Frankfurt am Main – Die DENIC eG verzeichnet derzeit eine Störung ihres DNS-Dienstes für .de-Domains. Hiervon sind aktuell alle DNSSEC-signierten .de-Domains in ihrer Erreichbarkeit betroffen.
>
> Die genaue Ursache der Störung ist noch nicht abschließend identifiziert. Die technischen Teams der DENIC arbeiten intensiv an der Analyse und an der schnellstmöglichen Wiederherstellung des stabilen Betriebs.
>
> Nach aktuellem Kenntnisstand kann es für Nutzerinnen und Nutzer sowie Betreiber von .de-Domains zu Beeinträchtigungen bei der Domain-Auflösung kommen. Weitere Updates werden bereitgestellt, sobald belastbare Erkenntnisse zur Ursache und zur Wiederherstellung vorliegen.
>
> Die DENIC bittet alle Betroffenen um Verständnis.

### Aktueller Status

Den aktuellen Status der Störung könnt ihr bei der DENIC selbst einsehen und euch für automatische Benachrichtigungen anmelden:

**[https://status.denic.de/](https://status.denic.de/)**

Sobald die Störung auf DENIC-Seite behoben ist, werden wir die DNSSEC-Validierung wieder aktivieren.

</section>

<section data-lang="en" class="language-content" markdown="1">

## DENIC DNSSEC Outage – .de Domains Unreachable

Since approximately 10:00 PM (CEST) on 05 May 2026, there has been a major outage at DENIC, the German domain registrar. As a result, all **DNSSEC-signed .de domains** are currently affected in their reachability.

### What happened?

All **DNSSEC-signed** websites and services under the `.de` top-level domain are affected. Access is currently only possible if the domain resolution is still cached in your router's or provider's DNS cache. Once this cache expires, you will experience connection errors in your browser.

### What does this mean for you?

- Your DNSSEC-signed `.de` websites may be partially or completely unreachable for visitors
- **Non-`.de` domains** can also be affected if their nameservers run under `.de`. Example: The domain `example.com` uses `ns1.hoster.de` and `ns2.hoster.de` as nameservers – if `hoster.de` is DNSSEC-signed and cannot be resolved, `example.com` will also be unreachable
- This is **not** caused by our systems but by the central DENIC infrastructure
- We are continuously monitoring the situation

### What did we do?

To allow you to continue browsing despite the outage, we have **temporarily disabled DNSSEC validation for the .de zone** on our nameservers:

<pre><code>rec_control add-nta de.</code></pre>

This means: If you use our DNS servers, you can still reach `.de` domains.

### How to use our nameservers

You can find setup instructions for our DNS servers here:

**[https://dns-setup.ffmuc.net/](https://dns-setup.ffmuc.net/)**

More information about our DNS service is available on our [DNS Privacy page](https://ffmuc.net/dns-privacy/).

### Official DENIC Statement

> **5 May 2026, 23:28 CEST** – Frankfurt am Main – DENIC eG is currently experiencing a disruption in its DNS service for .de domains. As a result, all DNSSEC-signed .de domains are currently affected in their reachability.
>
> The root cause of the disruption has not yet been fully identified. DENIC's technical teams are working intensively on analysis and on restoring stable operations as quickly as possible.
>
> Based on current information, users and operators of .de domains may experience impairments in domain resolution. Further updates will be provided as soon as reliable findings on the cause and recovery are available.
>
> DENIC asks all affected parties for their understanding.

### Current Status

You can check the current status of the outage at DENIC and sign up for automatic notifications:

**[https://status.denic.de/](https://status.denic.de/)**

Once the issue on DENIC's side is resolved, we will re-enable DNSSEC validation.

</section>

<section data-lang="fr" class="language-content" markdown="1">

## Panne DNSSEC chez DENIC – Domaines .de inaccessibles

Depuis environ 22h00 (CEST) le 05 mai 2026, une panne majeure affecte DENIC, le registraire de domaines allemand. En conséquence, tous les **domaines .de signés DNSSEC** sont actuellement affectés dans leur accessibilité.

### Que s'est-il passé ?

Tous les sites web et services **signés DNSSEC** sous le domaine de premier niveau `.de` sont affectés. L'accès n'est actuellement possible que si la résolution du domaine est encore en cache dans votre routeur ou chez votre fournisseur d'accès. Dès que ce cache expire, des erreurs de connexion apparaîtront dans votre navigateur.

### Qu'est-ce que cela signifie pour vous ?

- Vos sites web `.de` signés DNSSEC peuvent être partiellement ou totalement inaccessibles pour les visiteurs
- Les **domaines non-`.de`** peuvent également être affectés si leurs serveurs de noms fonctionnent sous `.de`. Exemple : le domaine `example.com` utilise `ns1.hoster.de` et `ns2.hoster.de` comme serveurs de noms – si `hoster.de` est signé DNSSEC et ne peut pas être résolu, `example.com` sera également inaccessible
- Ce problème n'est **pas** causé par nos systèmes, mais par l'infrastructure centrale de DENIC
- Nous surveillons la situation en continu

### Qu'avons-nous fait ?

Pour vous permettre de continuer à naviguer malgré la panne, nous avons **temporairement désactivé la validation DNSSEC pour la zone .de** sur nos serveurs DNS :

<pre><code>rec_control add-nta de.</code></pre>

Cela signifie que si vous utilisez nos serveurs DNS, vous pouvez toujours accéder aux domaines `.de`.

### Comment utiliser nos serveurs DNS

Vous trouverez les instructions de configuration de nos serveurs DNS ici :

**[https://dns-setup.ffmuc.net/](https://dns-setup.ffmuc.net/)**

Plus d'informations sur notre service DNS sont disponibles sur notre [page DNS Privacy](https://ffmuc.net/dns-privacy/).

### Communiqué officiel de DENIC

> **5 mai 2026, 23h28 CEST** – Francfort-sur-le-Main – DENIC eG subit actuellement une perturbation de son service DNS pour les domaines .de. En conséquence, tous les domaines .de signés DNSSEC sont actuellement affectés dans leur accessibilité.
>
> La cause exacte de la perturbation n'a pas encore été entièrement identifiée. Les équipes techniques de DENIC travaillent intensivement à l'analyse et au rétablissement du fonctionnement stable dans les plus brefs délais.
>
> Selon les informations actuelles, les utilisateurs et opérateurs de domaines .de peuvent rencontrer des problèmes de résolution de domaine. De nouvelles mises à jour seront fournies dès que des résultats fiables sur la cause et le rétablissement seront disponibles.
>
> DENIC demande la compréhension de toutes les parties concernées.

### Statut actuel

Vous pouvez consulter le statut actuel de la panne chez DENIC et vous inscrire aux notifications automatiques :

**[https://status.denic.de/](https://status.denic.de/)**

Dès que le problème sera résolu du côté de DENIC, nous réactiverons la validation DNSSEC.

</section>

<section data-lang="es" class="language-content" markdown="1">

## Fallo DNSSEC en DENIC – Dominios .de inaccesibles

Desde aproximadamente las 22:00 (CEST) del 05 de mayo de 2026, se produce una interrupción importante en DENIC, el registrador de dominios alemán. Como resultado, todos los **dominios .de firmados con DNSSEC** están actualmente afectados en su accesibilidad.

### ¿Qué ha pasado?

Todos los sitios web y servicios **firmados con DNSSEC** bajo el dominio de nivel superior `.de` están afectados. El acceso solo es posible actualmente si la resolución del dominio aún está almacenada en la caché DNS de tu router o proveedor. Una vez que esta caché expire, aparecerán errores de conexión en tu navegador.

### ¿Qué significa esto para ti?

- Tus sitios web `.de` firmados con DNSSEC pueden ser parcial o totalmente inaccesibles para los visitantes
- Los **dominios que no son `.de`** también pueden verse afectados si sus servidores de nombres funcionan bajo `.de`. Ejemplo: el dominio `example.com` usa `ns1.hoster.de` y `ns2.hoster.de` como servidores de nombres – si `hoster.de` está firmado con DNSSEC y no se puede resolver, `example.com` tampoco será accesible
- Esto **no** es causado por nuestros sistemas, sino por la infraestructura central de DENIC
- Estamos monitorizando la situación continuamente

### ¿Qué hemos hecho?

Para permitiros seguir navegando a pesar de la interrupción, hemos **desactivado temporalmente la validación DNSSEC para la zona .de** en nuestros servidores de nombres:

<pre><code>rec_control add-nta de.</code></pre>

Esto significa que si utilizáis nuestros servidores DNS, podéis seguir accediendo a los dominios `.de`.

### Cómo usar nuestros servidores DNS

Podéis encontrar las instrucciones de configuración de nuestros servidores DNS aquí:

**[https://dns-setup.ffmuc.net/](https://dns-setup.ffmuc.net/)**

Más información sobre nuestro servicio DNS está disponible en nuestra [página de DNS Privacy](https://ffmuc.net/dns-privacy/).

### Comunicado oficial de DENIC

> **5 de mayo de 2026, 23:28 CEST** – Fráncfort del Meno – DENIC eG está experimentando actualmente una interrupción en su servicio DNS para dominios .de. Como resultado, todos los dominios .de firmados con DNSSEC están actualmente afectados en su accesibilidad.
>
> La causa raíz de la interrupción aún no ha sido completamente identificada. Los equipos técnicos de DENIC están trabajando intensamente en el análisis y en restaurar las operaciones estables lo antes posible.
>
> Según la información actual, los usuarios y operadores de dominios .de pueden experimentar problemas en la resolución de dominios. Se proporcionarán más actualizaciones tan pronto como se disponga de hallazgos fiables sobre la causa y la recuperación.
>
> DENIC pide comprensión a todas las partes afectadas.

### Estado actual

Podéis consultar el estado actual de la interrupción en DENIC e inscribiros para recibir notificaciones automáticas:

**[https://status.denic.de/](https://status.denic.de/)**

En cuanto el problema se resuelva por parte de DENIC, reactivaremos la validación DNSSEC.

</section>

<section data-lang="ua" class="language-content" markdown="1">

## Збій DNSSEC у DENIC – домени .de недоступні

Приблизно з 22:00 (CEST) 05 травня 2026 року відбувається масштабний збій у DENIC, німецькому реєстраторі доменів. Внаслідок цього всі **домени .de з підписом DNSSEC** наразі мають проблеми з доступністю.

### Що сталося?

Постраждали всі **підписані DNSSEC** веб-сайти та сервіси під доменом верхнього рівня `.de`. Доступ наразі можливий лише якщо розв'язання домену ще збережено в DNS-кеші вашого роутера або провайдера. Щойно цей кеш закінчиться, у браузері з'являться помилки з'єднання.

### Що це означає для вас?

- Ваші веб-сайти `.de` з підписом DNSSEC можуть бути частково або повністю недоступні для відвідувачів
- **Домени, що не є `.de`**, також можуть бути зачеплені, якщо їхні сервери імен працюють під `.de`. Приклад: домен `example.com` використовує `ns1.hoster.de` та `ns2.hoster.de` як сервери імен – якщо `hoster.de` підписаний DNSSEC і не може бути розв'язаний, `example.com` також буде недоступний
- Це **не** спричинено нашими системами, а центральною інфраструктурою DENIC
- Ми постійно відстежуємо ситуацію

### Що ми зробили?

Щоб забезпечити вам безперебійний доступ до інтернету попри збій, ми **тимчасово вимкнули валідацію DNSSEC для зони .de** на наших серверах імен:

<pre><code>rec_control add-nta de.</code></pre>

Це означає: якщо ви використовуєте наші DNS-сервери, ви й надалі можете отримувати доступ до доменів `.de`.

### Як використовувати наші сервери імен

Інструкції з налаштування наших DNS-серверів можна знайти тут:

**[https://dns-setup.ffmuc.net/](https://dns-setup.ffmuc.net/)**

Більше інформації про наш DNS-сервіс доступно на нашій [сторінці DNS Privacy](https://ffmuc.net/dns-privacy/).

### Офіційна заява DENIC

> **5 травня 2026, 23:28 CEST** – Франкфурт-на-Майні – DENIC eG наразі зазнає збою у своєму DNS-сервісі для доменів .de. Внаслідок цього всі домени .de з підписом DNSSEC наразі мають проблеми з доступністю.
>
> Основну причину збою ще не вдалося повністю встановити. Технічні команди DENIC інтенсивно працюють над аналізом та якнайшвидшим відновленням стабільної роботи.
>
> За наявною інформацією, користувачі та оператори доменів .de можуть стикатися з порушеннями в розв'язанні доменів. Подальші оновлення будуть надані, щойно з'являться надійні дані про причину та відновлення.
>
> DENIC просить усіх постраждалих про розуміння.

### Поточний статус

Ви можете перевірити поточний стан збою на сайті DENIC та підписатися на автоматичні сповіщення:

**[https://status.denic.de/](https://status.denic.de/)**

Щойно проблему з боку DENIC буде вирішено, ми знову увімкнемо валідацію DNSSEC.

</section>
