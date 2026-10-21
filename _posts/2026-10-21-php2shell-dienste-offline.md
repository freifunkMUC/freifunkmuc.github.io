---
layout: posts
title: "PHP2Shell: PHP-basierte Dienste vorsorglich offline"
date: 2026-10-21 12:00:00 +0200
categories: services security
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## PHP2Shell: PHP-basierte Dienste vorsorglich offline

Heute Morgen (21. Oktober 2026, ca. 09:00 Uhr) haben wir vorsorglich **alle unsere PHP-basierten Dienste vom Netz genommen**, bis gepatchte PHP-Versionen eingespielt sind.

**Betroffen sind nur cloud.ffmuc.net, matomo.ffmuc.net, uisp.ffmuc.net und das Wiki. Alles andere, auch das Freifunk-Netz selbst und [meet.ffmuc.net](https://meet.ffmuc.net), läuft ganz normal weiter.**

## Hintergrund

Am 20. Oktober 2026 hat das PHP-Projekt zwei kritische Sicherheitslücken im PHP-Kern vorangekündigt: **CVE-2026-109618** und **CVE-2026-109619**, Spitzname „PHP2Shell“, jeweils mit CVSS v4 9.2 bewertet. Sie erlauben **Remote Code Execution ohne Authentifizierung**.

- Details sind bereits vor dem Patch durchgesickert; laut dem CTO von Cloudflare gab es am 21. Oktober erste Angriffe „in the wild“.
- Gepatchte Releases sind für den 21. Oktober 2026, 14:00 UTC angekündigt. Fixes gibt es nur für PHP 8.2 und neuer.
- Berichten zufolge liegt der Fehler in der Verarbeitung von Session-Upload-Progress bzw. Multipart-Requests und ist erreichbar, **bevor irgendein Anwendungscode läuft**. Schutzmaßnahmen auf Anwendungsebene helfen daher nicht.
- Die PHP-Core-Entwickler:innen sagen: Die einzige echte Gegenmaßnahme ist das Patchen. Wer kann, nimmt Server bis dahin besser vom Netz.

## Was wir gemacht haben

Folgende Dienste sind vorübergehend offline:

- **cloud.ffmuc.net** (Nextcloud, auch cloud.freifunk-muenchen.de): Der Nextcloud-PHP-Container wurde gestoppt
- **matomo.ffmuc.net** (Web-Analytics)
- **uisp.ffmuc.net** (UISP)
- **Wiki** unter [ffmuc.net/wiki/](https://ffmuc.net/wiki/) (DokuWiki)

Auf unseren HAProxy-Webfrontends beantwortet HAProxy Anfragen an die betroffenen Hostnamen/Pfade direkt mit einer **HTTP-503-Wartungsseite** (inkl. `Retry-After`). Die Requests erreichen PHP also gar nicht erst. Workarounds wie das Abschalten einzelner Einstellungen in der `php.ini` haben wir nicht als ausreichend angesehen, da bisher nur der Patch als wirksam bestätigt ist.

## Wie es weitergeht

Sobald gepatchte PHP-Pakete bzw. -Container verfügbar sind, aktualisieren wir, prüfen alles und schalten die Dienste wieder ein. Statusupdates gibt es auf [Mastodon](https://social.ffmuc.net/@freifunkMUC).

**An alle, die selbst PHP betreiben:** Patcht so schnell wie möglich und überlegt, eure PHP-Seiten bis dahin offline zu nehmen.

## Quellen

- [PHP Announce](https://news-web.php.net/php.announce/509)
- [php.net News](https://www.php.net/archive/2026.php#2026-10-20-1)
- [Sansec: PHP2Shell](https://sansec.io/research/php2shell)
- [CERT-EU Advisory 2026-018](https://cert.europa.eu/publications/security-advisories/2026-018/)
- [Mattias Geniar: Early mitigation](https://ma.ttias.be/php-cve-2026-109618-early-mitigation/)

---

Bei Fragen meldet euch gern im Chat: <https://chat.ffmuc.net> oder auf Mastodon: <https://social.ffmuc.net/@freifunkMUC>

</section>

<section data-lang="en" class="language-content" markdown="1">

## PHP2Shell: PHP-based services taken offline as a precaution

This morning (21 October 2026, around 09:00 CEST) we took **all our PHP-based services offline** as a precaution until patched PHP versions are deployed.

**Only cloud.ffmuc.net, matomo.ffmuc.net, uisp.ffmuc.net and the wiki are affected. Everything else, including the Freifunk network itself and [meet.ffmuc.net](https://meet.ffmuc.net), keeps running normally.**

## Background

On 20 October 2026 the PHP project pre-announced two critical vulnerabilities in PHP core: **CVE-2026-109618** and **CVE-2026-109619**, nicknamed "PHP2Shell", each rated CVSS v4 9.2. They allow **unauthenticated remote code execution**.

- Details leaked before the patch; Cloudflare's CTO reported early attacks in the wild on 21 October.
- Patched releases are announced for 21 October 2026, 14:00 UTC. Fixes are only provided for PHP 8.2 and newer.
- Reportedly the bug sits in PHP's session upload-progress / multipart request handling and is reachable **before any application code runs**, so application-level protections don't help.
- The PHP core developers said the only real mitigation is patching, and taking servers offline is the sensible choice if possible.

## What we did

The following services are temporarily offline:

- **cloud.ffmuc.net** (Nextcloud, also cloud.freifunk-muenchen.de): the Nextcloud PHP container was stopped
- **matomo.ffmuc.net** (web analytics)
- **uisp.ffmuc.net** (UISP)
- **Wiki** at [ffmuc.net/wiki/](https://ffmuc.net/wiki/) (DokuWiki)

On our HAProxy web frontends, requests to the affected hostnames/paths are answered directly by HAProxy with an **HTTP 503 maintenance page** (including `Retry-After`), so they never reach PHP at all. We did not consider workarounds such as disabling settings in `php.ini` sufficient, since nothing except the patch is confirmed to fix the issue.

## Next steps

As soon as patched PHP packages/containers are available, we will update, verify and bring the services back. Status updates are posted on [Mastodon](https://social.ffmuc.net/@freifunkMUC).

**To everyone running PHP themselves:** patch as soon as possible and consider taking your PHP sites offline until then.

## Sources

- [PHP Announce](https://news-web.php.net/php.announce/509)
- [php.net News](https://www.php.net/archive/2026.php#2026-10-20-1)
- [Sansec: PHP2Shell](https://sansec.io/research/php2shell)
- [CERT-EU Advisory 2026-018](https://cert.europa.eu/publications/security-advisories/2026-018/)
- [Mattias Geniar: Early mitigation](https://ma.ttias.be/php-cve-2026-109618-early-mitigation/)

---

If you have questions, reach out in our chat: <https://chat.ffmuc.net> or on Mastodon: <https://social.ffmuc.net/@freifunkMUC>

</section>

<section data-lang="fr" class="language-content" markdown="1">

## PHP2Shell : services PHP mis hors ligne par précaution

Ce matin (21 octobre 2026, vers 09h00 CEST), nous avons mis **tous nos services basés sur PHP hors ligne** par précaution, jusqu'au déploiement de versions corrigées de PHP.

**Seuls cloud.ffmuc.net, matomo.ffmuc.net, uisp.ffmuc.net et le wiki sont concernés. Tout le reste, y compris le réseau Freifunk lui-même et [meet.ffmuc.net](https://meet.ffmuc.net), continue de fonctionner normalement.**

## Contexte

Le 20 octobre 2026, le projet PHP a pré-annoncé deux vulnérabilités critiques dans le cœur de PHP : **CVE-2026-109618** et **CVE-2026-109619**, surnommées « PHP2Shell », chacune notée CVSS v4 9.2. Elles permettent une **exécution de code à distance sans authentification**.

- Des détails ont fuité avant le correctif ; le CTO de Cloudflare a signalé les premières attaques réelles le 21 octobre.
- Les versions corrigées sont annoncées pour le 21 octobre 2026 à 14h00 UTC, uniquement pour PHP 8.2 et versions ultérieures.
- Selon les rapports, le bug se situe dans le traitement de la progression d'upload des sessions / des requêtes multipart et est atteignable **avant l'exécution de tout code applicatif** ; les protections au niveau de l'application n'aident donc pas.
- Les développeurs du cœur de PHP indiquent que la seule vraie mesure est d'appliquer le correctif, et que mettre les serveurs hors ligne est le choix raisonnable si possible.

## Ce que nous avons fait

Les services suivants sont temporairement hors ligne :

- **cloud.ffmuc.net** (Nextcloud, aussi cloud.freifunk-muenchen.de) : le conteneur PHP de Nextcloud a été arrêté
- **matomo.ffmuc.net** (statistiques web)
- **uisp.ffmuc.net** (UISP)
- **Wiki** sur [ffmuc.net/wiki/](https://ffmuc.net/wiki/) (DokuWiki)

Sur nos frontaux web HAProxy, les requêtes vers les noms d'hôte/chemins concernés reçoivent directement de HAProxy une **page de maintenance HTTP 503** (avec `Retry-After`) ; elles n'atteignent donc jamais PHP. Nous n'avons pas jugé suffisantes des solutions comme la désactivation de paramètres dans `php.ini`, car seul le correctif est confirmé comme efficace.

## Prochaines étapes

Dès que des paquets/conteneurs PHP corrigés seront disponibles, nous mettrons à jour, vérifierons et remettrons les services en ligne. Les mises à jour de statut sont publiées sur [Mastodon](https://social.ffmuc.net/@freifunkMUC).

**À toutes celles et ceux qui exploitent PHP :** appliquez le correctif au plus vite et envisagez de mettre vos sites PHP hors ligne d'ici là.

## Sources

- [PHP Announce](https://news-web.php.net/php.announce/509)
- [php.net News](https://www.php.net/archive/2026.php#2026-10-20-1)
- [Sansec : PHP2Shell](https://sansec.io/research/php2shell)
- [CERT-EU Advisory 2026-018](https://cert.europa.eu/publications/security-advisories/2026-018/)
- [Mattias Geniar : Early mitigation](https://ma.ttias.be/php-cve-2026-109618-early-mitigation/)

---

Pour toute question, contactez-nous dans notre chat : <https://chat.ffmuc.net> ou sur Mastodon : <https://social.ffmuc.net/@freifunkMUC>

</section>

<section data-lang="es" class="language-content" markdown="1">

## PHP2Shell: servicios basados en PHP desconectados por precaución

Esta mañana (21 de octubre de 2026, hacia las 09:00 CEST) hemos desconectado por precaución **todos nuestros servicios basados en PHP** hasta que se desplieguen versiones de PHP corregidas.

**Solo están afectados cloud.ffmuc.net, matomo.ffmuc.net, uisp.ffmuc.net y la wiki. Todo lo demás, incluida la propia red Freifunk y [meet.ffmuc.net](https://meet.ffmuc.net), sigue funcionando con normalidad.**

## Contexto

El 20 de octubre de 2026, el proyecto PHP preanunció dos vulnerabilidades críticas en el núcleo de PHP: **CVE-2026-109618** y **CVE-2026-109619**, apodadas «PHP2Shell», ambas con una puntuación CVSS v4 de 9.2. Permiten la **ejecución remota de código sin autenticación**.

- Los detalles se filtraron antes del parche; el CTO de Cloudflare informó de los primeros ataques reales el 21 de octubre.
- Las versiones corregidas están anunciadas para el 21 de octubre de 2026 a las 14:00 UTC; solo PHP 8.2 y posteriores reciben correcciones.
- Según los informes, el fallo está en el manejo del progreso de subida de sesiones / peticiones multipart y es alcanzable **antes de que se ejecute cualquier código de la aplicación**, por lo que las protecciones a nivel de aplicación no ayudan.
- Los desarrolladores del núcleo de PHP indicaron que la única mitigación real es aplicar el parche, y que desconectar los servidores es la opción sensata si es posible.

## Qué hemos hecho

Los siguientes servicios están temporalmente desconectados:

- **cloud.ffmuc.net** (Nextcloud, también cloud.freifunk-muenchen.de): se detuvo el contenedor PHP de Nextcloud
- **matomo.ffmuc.net** (analítica web)
- **uisp.ffmuc.net** (UISP)
- **Wiki** en [ffmuc.net/wiki/](https://ffmuc.net/wiki/) (DokuWiki)

En nuestros frontales web HAProxy, las peticiones a los nombres de host/rutas afectados reciben directamente de HAProxy una **página de mantenimiento HTTP 503** (con `Retry-After`), de modo que nunca llegan a PHP. No consideramos suficientes medidas como desactivar ajustes en `php.ini`, ya que solo el parche está confirmado como solución.

## Próximos pasos

En cuanto haya paquetes/contenedores de PHP corregidos, actualizaremos, verificaremos y volveremos a poner en marcha los servicios. Publicaremos actualizaciones de estado en [Mastodon](https://social.ffmuc.net/@freifunkMUC).

**A quienes administren PHP:** aplicad el parche lo antes posible y considerad desconectar vuestros sitios PHP hasta entonces.

## Fuentes

- [PHP Announce](https://news-web.php.net/php.announce/509)
- [php.net News](https://www.php.net/archive/2026.php#2026-10-20-1)
- [Sansec: PHP2Shell](https://sansec.io/research/php2shell)
- [CERT-EU Advisory 2026-018](https://cert.europa.eu/publications/security-advisories/2026-018/)
- [Mattias Geniar: Early mitigation](https://ma.ttias.be/php-cve-2026-109618-early-mitigation/)

---

Si tienes preguntas, contáctanos en nuestro chat: <https://chat.ffmuc.net> o en Mastodon: <https://social.ffmuc.net/@freifunkMUC>

</section>

<section data-lang="ua" class="language-content" markdown="1">

## PHP2Shell: сервіси на PHP тимчасово вимкнено з міркувань безпеки

Сьогодні вранці (21 жовтня 2026 року, близько 09:00 CEST) ми з міркувань безпеки **вимкнули всі наші сервіси на базі PHP** до розгортання виправлених версій PHP.

**Постраждали лише cloud.ffmuc.net, matomo.ffmuc.net, uisp.ffmuc.net і wiki. Усе інше, зокрема сама мережа Freifunk і [meet.ffmuc.net](https://meet.ffmuc.net), працює у звичайному режимі.**

## Передісторія

20 жовтня 2026 року проєкт PHP заздалегідь оголосив про дві критичні вразливості в ядрі PHP: **CVE-2026-109618** та **CVE-2026-109619** під назвою «PHP2Shell», кожна з оцінкою CVSS v4 9.2. Вони дозволяють **віддалене виконання коду без автентифікації**.

- Подробиці потрапили в мережу ще до виходу патча; технічний директор Cloudflare повідомив про перші реальні атаки 21 жовтня.
- Виправлені релізи оголошено на 21 жовтня 2026 року, 14:00 UTC; виправлення отримають лише PHP 8.2 і новіші.
- За повідомленнями, помилка знаходиться в обробці прогресу завантаження сесій / multipart-запитів і доступна **ще до виконання будь-якого коду застосунку**, тому захист на рівні застосунку не допомагає.
- Розробники ядра PHP заявили, що єдиний справжній захист: це оновлення, а вимкнення серверів є розумним рішенням, якщо це можливо.

## Що ми зробили

Тимчасово вимкнено такі сервіси:

- **cloud.ffmuc.net** (Nextcloud, також cloud.freifunk-muenchen.de): PHP-контейнер Nextcloud зупинено
- **matomo.ffmuc.net** (веб-аналітика)
- **uisp.ffmuc.net** (UISP)
- **Wiki** за адресою [ffmuc.net/wiki/](https://ffmuc.net/wiki/) (DokuWiki)

На наших вебфронтендах HAProxy запити до відповідних хостів/шляхів отримують від HAProxy безпосередньо **сторінку обслуговування HTTP 503** (з `Retry-After`), тож вони взагалі не доходять до PHP. Обхідні рішення, як-от вимкнення налаштувань у `php.ini`, ми не вважали достатніми, оскільки підтверджено ефективним лише патч.

## Подальші кроки

Щойно з'являться виправлені пакети/контейнери PHP, ми оновимо, перевіримо та знову ввімкнемо сервіси. Оновлення статусу публікуємо в [Mastodon](https://social.ffmuc.net/@freifunkMUC).

**Усім, хто сам адмініструє PHP:** оновлюйтеся якомога швидше і розгляньте можливість вимкнути свої PHP-сайти до того часу.

## Джерела

- [PHP Announce](https://news-web.php.net/php.announce/509)
- [php.net News](https://www.php.net/archive/2026.php#2026-10-20-1)
- [Sansec: PHP2Shell](https://sansec.io/research/php2shell)
- [CERT-EU Advisory 2026-018](https://cert.europa.eu/publications/security-advisories/2026-018/)
- [Mattias Geniar: Early mitigation](https://ma.ttias.be/php-cve-2026-109618-early-mitigation/)

---

Якщо у вас є запитання, пишіть нам у чат: <https://chat.ffmuc.net> або в Mastodon: <https://social.ffmuc.net/@freifunkMUC>

</section>
