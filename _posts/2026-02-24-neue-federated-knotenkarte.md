---
layout: posts
title: "Neue föderierte Knotenkarte: freifunk-map-modern"
date: 2026-02-24 12:00:00 +0100
categories: freifunk karte community
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## Neue föderierte Knotenkarte

Wir haben einen kleinen Service gebaut, der versucht alle Freifunk-Communities über die [Freifunk API](https://api.freifunk.net/) zu finden und auf einer gemeinsamen Karte darzustellen, inklusive Grafana Live-Daten, wo möglich.

**Viel Spaß beim Spielen: [federated-map.ffmuc.net](https://federated-map.ffmuc.net/)**

### Features

- **Automatische Federation**: erkennt alle Freifunk-Communities automatisch über die Freifunk API und zeigt deren Knoten auf einer Karte
- **Grafana-Integration**: erkennt vorhandene Grafana-Dashboards und zeigt Live-Statistiken pro Knoten (Traffic, Clients, Uptime)
- **Echtzeit-Updates** via Server-Sent Events (SSE), die Karte aktualisiert sich automatisch
- **Knotendetails** mit Firmware-Version, Uptime, Traffic-Charts und Mesh-Nachbarschaftsansicht
- **Suche** nach Hostname, Node-ID oder Router-Modell
- **Community-Filter** mit Metacommunity-Gruppierung
- **Warnungen** für End-of-Life Hardware
- **Datenschutzfreundlich**: der einzige externe Request geht an OpenStreetMap für die Kartenkacheln

Technisch ist das Ganze ein einzelnes Go-Binary ohne externe Abhängigkeiten, das alle Web-Assets einbettet und alles aus einem Prozess heraus ausliefert.

### Noch experimentell

Im Moment gibt es noch ein paar Bugs, aber wir basteln dran. Wenn ihr Fehler findet oder Ideen habt: [GitHub Issues](https://github.com/freifunkMUC/freifunk-map-modern/issues) oder kommt zu unserem [nächsten Treffen](https://ffmuc.net/mitmachen/).

Die bisherige Knotenkarte bleibt unter [map.ffmuc.net](https://map.ffmuc.net) erreichbar.

### Aufruf an alle Communities: Bitte pflegt eure API-Dateien!

Die Federated Map bezieht alle Daten über die [Freifunk API](https://api.freifunk.net/). Damit eure Community korrekt auf der Karte erscheint, prüft bitte eure API-Datei:

- **Links aktuell?** Zeigen eure URLs (Karte, Firmware, Kontakt, etc.) noch auf existierende Seiten?
- **Datenquellen erreichbar?** Ist eure `meshviewer.json` oder `nodelist.json` URL noch korrekt und erreichbar?
- **API-Version aktuell?** Idealerweise nutzt ihr die aktuelle [API-Spezifikation](https://github.com/freifunk/api.freifunk.net/tree/master/specs). Ältere Versionen funktionieren teilweise, aber je aktueller eure API-Datei, desto besser können wir eure Knoten darstellen.

Eine gepflegte API-Datei hilft nicht nur dieser Karte, sondern dem gesamten Freifunk-Ökosystem. Schaut mal rein und räumt auf!

Der gesamte Quellcode ist Open Source (AGPL-3.0): **[github.com/freifunkMUC/freifunk-map-modern](https://github.com/freifunkMUC/freifunk-map-modern)**

</section>

<section data-lang="en" class="language-content" markdown="1">

## New Federated Node Map

We built a small service that tries to discover all Freifunk communities via the [Freifunk API](https://api.freifunk.net/) and display them on a single shared map, including live Grafana data where available.

**Have fun exploring: [federated-map.ffmuc.net](https://federated-map.ffmuc.net/)**

### Features

- **Automatic federation**: discovers all Freifunk communities via the Freifunk API and shows their nodes on one map
- **Grafana integration**: auto-discovers Grafana dashboards and renders live per-node charts (traffic, clients, uptime)
- **Real-time updates** via Server-Sent Events (SSE), the map refreshes automatically
- **Node details** with firmware version, uptime, traffic charts, and mesh neighbour view
- **Search** by hostname, node ID, or router model
- **Community filtering** with metacommunity grouping
- **Warnings** for end-of-life hardware
- **Privacy-friendly**: the only external request goes to OpenStreetMap for map tiles

Technically it's a single Go binary with zero external dependencies that embeds all web assets and serves everything from one process.

### Still experimental

There are still a few bugs, but we're working on it. If you find issues or have ideas: [GitHub Issues](https://github.com/freifunkMUC/freifunk-map-modern/issues) or join our [next meetup](https://ffmuc.net/mitmachen/).

The existing node map remains available at [map.ffmuc.net](https://map.ffmuc.net).

### Calling all communities: please maintain your API files!

The Federated Map pulls all its data from the [Freifunk API](https://api.freifunk.net/). To make sure your community shows up correctly on the map, please check your API file:

- **Links up to date?** Do your URLs (map, firmware, contact, etc.) still point to existing pages?
- **Data sources reachable?** Is your `meshviewer.json` or `nodelist.json` URL still correct and reachable?
- **API version current?** Ideally use the latest [API specification](https://github.com/freifunk/api.freifunk.net/tree/master/specs). Older versions partially work, but the more up-to-date your API file, the better we can display your nodes.

A well-maintained API file doesn't just help this map. It benefits the entire Freifunk ecosystem. Take a moment to check and clean up!

The full source code is open source (AGPL-3.0): **[github.com/freifunkMUC/freifunk-map-modern](https://github.com/freifunkMUC/freifunk-map-modern)**

</section>

<section data-lang="fr" class="language-content" markdown="1">

## Nouvelle carte fédérée des nœuds

Nous avons créé un petit service qui tente de découvrir toutes les communautés Freifunk via l'[API Freifunk](https://api.freifunk.net/) et de les afficher sur une carte commune, y compris les données Grafana en temps réel lorsque c'est possible.

**Amusez-vous bien : [federated-map.ffmuc.net](https://federated-map.ffmuc.net/)**

### Fonctionnalités

- **Fédération automatique**: découvre toutes les communautés Freifunk via l'API et affiche leurs nœuds sur une seule carte
- **Intégration Grafana**: découvre automatiquement les dashboards Grafana et affiche des graphiques en direct par nœud (trafic, clients, uptime)
- **Mises à jour en temps réel** via Server-Sent Events (SSE), la carte se rafraîchit automatiquement
- **Détails des nœuds** avec version firmware, uptime, graphiques de trafic et vue du voisinage mesh
- **Recherche** par nom d'hôte, ID de nœud ou modèle de routeur
- **Filtre par communauté** avec regroupement par méta-communauté
- **Avertissements** pour le matériel en fin de vie
- **Respectueux de la vie privée**: la seule requête externe va vers OpenStreetMap pour les tuiles de carte

Techniquement, c'est un seul binaire Go sans dépendances externes qui embarque tous les assets web et sert tout depuis un seul processus.

### Encore expérimental

Il y a encore quelques bugs, mais nous y travaillons. Si vous trouvez des problèmes ou avez des idées : [GitHub Issues](https://github.com/freifunkMUC/freifunk-map-modern/issues) ou rejoignez-nous lors de notre [prochaine réunion](https://ffmuc.net/mitmachen/).

La carte des nœuds existante reste accessible sur [map.ffmuc.net](https://map.ffmuc.net).

### Appel à toutes les communautés : maintenez vos fichiers API !

La Federated Map récupère toutes ses données via l'[API Freifunk](https://api.freifunk.net/). Pour que votre communauté apparaisse correctement sur la carte, vérifiez votre fichier API :

- **Liens à jour ?** Vos URLs (carte, firmware, contact, etc.) pointent-elles encore vers des pages existantes ?
- **Sources de données accessibles ?** Votre URL `meshviewer.json` ou `nodelist.json` est-elle encore correcte et accessible ?
- **Version de l'API à jour ?** Idéalement, utilisez la dernière [spécification API](https://github.com/freifunk/api.freifunk.net/tree/master/specs). Les anciennes versions fonctionnent partiellement, mais plus votre fichier API est à jour, mieux nous pouvons afficher vos nœuds.

Un fichier API bien maintenu ne profite pas qu'à cette carte. Il bénéficie à tout l'écosystème Freifunk. Vérifiez et nettoyez !

Le code source complet est open source (AGPL-3.0) : **[github.com/freifunkMUC/freifunk-map-modern](https://github.com/freifunkMUC/freifunk-map-modern)**

</section>

<section data-lang="es" class="language-content" markdown="1">

## Nuevo mapa federado de nodos

Hemos creado un pequeño servicio que intenta descubrir todas las comunidades Freifunk a través de la [API Freifunk](https://api.freifunk.net/) y mostrarlas en un mapa compartido, incluyendo datos en vivo de Grafana cuando estén disponibles.

**Diviértete explorando: [federated-map.ffmuc.net](https://federated-map.ffmuc.net/)**

### Características

- **Federación automática**: descubre todas las comunidades Freifunk a través de la API y muestra sus nodos en un solo mapa
- **Integración con Grafana**: detecta automáticamente dashboards de Grafana y muestra gráficos en vivo por nodo (tráfico, clientes, uptime)
- **Actualizaciones en tiempo real** vía Server-Sent Events (SSE), el mapa se actualiza automáticamente
- **Detalles de nodos** con versión de firmware, uptime, gráficos de tráfico y vista de vecinos mesh
- **Búsqueda** por hostname, ID de nodo o modelo de router
- **Filtro por comunidad** con agrupación por metacomunidad
- **Avisos** para hardware en fin de vida
- **Respetuoso con la privacidad**: la única petición externa va a OpenStreetMap para los tiles del mapa

Técnicamente es un único binario Go sin dependencias externas que integra todos los assets web y sirve todo desde un solo proceso.

### Todavía experimental

Aún hay algunos bugs, pero estamos trabajando en ello. Si encuentras problemas o tienes ideas: [GitHub Issues](https://github.com/freifunkMUC/freifunk-map-modern/issues) o únete a nuestro [próximo encuentro](https://ffmuc.net/mitmachen/).

El mapa de nodos existente sigue disponible en [map.ffmuc.net](https://map.ffmuc.net).

### Llamada a todas las comunidades: ¡mantened vuestros archivos API!

El Federated Map obtiene todos sus datos de la [API Freifunk](https://api.freifunk.net/). Para que vuestra comunidad aparezca correctamente en el mapa, revisad vuestro archivo API:

- **¿Enlaces actualizados?** ¿Vuestras URLs (mapa, firmware, contacto, etc.) siguen apuntando a páginas existentes?
- **¿Fuentes de datos accesibles?** ¿Vuestra URL de `meshviewer.json` o `nodelist.json` sigue siendo correcta y accesible?
- **¿Versión de API actual?** Idealmente usad la última [especificación API](https://github.com/freifunk/api.freifunk.net/tree/master/specs). Las versiones anteriores funcionan parcialmente, pero cuanto más actualizado esté vuestro archivo API, mejor podremos mostrar vuestros nodos.

Un archivo API bien mantenido no solo ayuda a este mapa. Beneficia a todo el ecosistema Freifunk. ¡Revisadlo y actualizadlo!

El código fuente completo es open source (AGPL-3.0): **[github.com/freifunkMUC/freifunk-map-modern](https://github.com/freifunkMUC/freifunk-map-modern)**

</section>

<section data-lang="ua" class="language-content" markdown="1">

## Нова федеративна карта вузлів

Ми створили невеликий сервіс, який намагається знайти всі спільноти Freifunk через [Freifunk API](https://api.freifunk.net/) і показати їх на одній спільній карті, включаючи живі дані Grafana, де це можливо.

**Розважайтеся: [federated-map.ffmuc.net](https://federated-map.ffmuc.net/)**

### Можливості

- **Автоматична федерація**: знаходить усі спільноти Freifunk через API і показує їхні вузли на одній карті
- **Інтеграція з Grafana**: автоматично знаходить дашборди Grafana і показує живі графіки для кожного вузла (трафік, клієнти, аптайм)
- **Оновлення в реальному часі** через Server-Sent Events (SSE), карта оновлюється автоматично
- **Деталі вузлів** з версією прошивки, аптаймом, графіками трафіку та видом mesh-сусідів
- **Пошук** за іменем хоста, ID вузла або моделлю роутера
- **Фільтр за спільнотою** з групуванням за метаспільнотою
- **Попередження** для обладнання з закінченим терміном підтримки
- **Приватність**: єдиний зовнішній запит йде до OpenStreetMap для тайлів карти

Технічно це один Go-бінарник без зовнішніх залежностей, який вбудовує всі веб-ресурси і обслуговує все з одного процесу.

### Ще експериментально

На даний момент є ще кілька багів, але ми працюємо над цим. Якщо знайшли проблеми або маєте ідеї: [GitHub Issues](https://github.com/freifunkMUC/freifunk-map-modern/issues) або приходьте на нашу [наступну зустріч](https://ffmuc.net/mitmachen/).

Існуюча карта вузлів залишається доступною за адресою [map.ffmuc.net](https://map.ffmuc.net).

### Звернення до всіх спільнот: підтримуйте ваші API-файли!

Federated Map отримує всі дані через [Freifunk API](https://api.freifunk.net/). Щоб ваша спільнота коректно відображалася на карті, перевірте ваш API-файл:

- **Посилання актуальні?** Чи ваші URL (карта, прошивка, контакт тощо) ще вказують на існуючі сторінки?
- **Джерела даних доступні?** Чи ваш URL `meshviewer.json` або `nodelist.json` ще коректний і доступний?
- **Версія API актуальна?** Ідеально використовувати останню [специфікацію API](https://github.com/freifunk/api.freifunk.net/tree/master/specs). Старіші версії частково працюють, але чим актуальніший ваш API-файл, тим краще ми зможемо відобразити ваші вузли.

Добре підтримуваний API-файл допомагає не лише цій карті. Він корисний для всієї екосистеми Freifunk. Перевірте та оновіть!

Весь вихідний код є відкритим (AGPL-3.0): **[github.com/freifunkMUC/freifunk-map-modern](https://github.com/freifunkMUC/freifunk-map-modern)**

</section>
