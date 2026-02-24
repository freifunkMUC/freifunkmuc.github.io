---
layout: posts
title: "Neue föderierte Knotenkarte – freifunk-map-modern"
date: 2026-02-24 12:00:00 +0100
categories: freifunk karte community
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## Neue föderierte Knotenkarte

Wir haben einen kleinen Service gebaut, der versucht alle Freifunk-Communities über die [Freifunk API](https://api.freifunk.net/) zu finden und auf einer gemeinsamen Karte darzustellen – inklusive Grafana Live-Daten, wo möglich.

**Viel Spaß beim Spielen: [federated-map.ffmuc.net](https://federated-map.ffmuc.net/)**

### Features

- **Automatische Federation** – erkennt alle Freifunk-Communities automatisch über die Freifunk API und zeigt deren Knoten auf einer Karte
- **Grafana-Integration** – erkennt vorhandene Grafana-Dashboards und zeigt Live-Statistiken pro Knoten (Traffic, Clients, Uptime)
- **Echtzeit-Updates** via Server-Sent Events (SSE) – die Karte aktualisiert sich automatisch
- **Knotendetails** mit Firmware-Version, Uptime, Traffic-Charts und Mesh-Nachbarschaftsansicht
- **Suche** nach Hostname, Node-ID oder Router-Modell
- **Community-Filter** mit Metacommunity-Gruppierung
- **Warnungen** für End-of-Life Hardware
- **Datenschutzfreundlich** – der einzige externe Request geht an OpenStreetMap für die Kartenkacheln

Technisch ist das Ganze ein einzelnes Go-Binary ohne externe Abhängigkeiten, das alle Web-Assets einbettet und alles aus einem Prozess heraus ausliefert.

### Noch experimentell

Im Moment gibt es noch ein paar Bugs, aber wir basteln dran. Wenn ihr Fehler findet oder Ideen habt: [GitHub Issues](https://github.com/freifunkMUC/freifunk-map-modern/issues) oder kommt zu unserem [nächsten Treffen](https://ffmuc.net/mitmachen/).

Die bisherige Knotenkarte bleibt unter [map.ffmuc.net](https://map.ffmuc.net) erreichbar.

Der gesamte Quellcode ist Open Source (AGPL-3.0): **[github.com/freifunkMUC/freifunk-map-modern](https://github.com/freifunkMUC/freifunk-map-modern)**

</section>

<section data-lang="en" class="language-content" markdown="1">

## New Federated Node Map

We built a small service that tries to discover all Freifunk communities via the [Freifunk API](https://api.freifunk.net/) and display them on a single shared map – including live Grafana data where available.

**Have fun exploring: [federated-map.ffmuc.net](https://federated-map.ffmuc.net/)**

### Features

- **Automatic federation** – discovers all Freifunk communities via the Freifunk API and shows their nodes on one map
- **Grafana integration** – auto-discovers Grafana dashboards and renders live per-node charts (traffic, clients, uptime)
- **Real-time updates** via Server-Sent Events (SSE) – the map refreshes automatically
- **Node details** with firmware version, uptime, traffic charts, and mesh neighbour view
- **Search** by hostname, node ID, or router model
- **Community filtering** with metacommunity grouping
- **Warnings** for end-of-life hardware
- **Privacy-friendly** – the only external request goes to OpenStreetMap for map tiles

Technically it's a single Go binary with zero external dependencies that embeds all web assets and serves everything from one process.

### Still experimental

There are still a few bugs, but we're working on it. If you find issues or have ideas: [GitHub Issues](https://github.com/freifunkMUC/freifunk-map-modern/issues) or join our [next meetup](https://ffmuc.net/mitmachen/).

The existing node map remains available at [map.ffmuc.net](https://map.ffmuc.net).

The full source code is open source (AGPL-3.0): **[github.com/freifunkMUC/freifunk-map-modern](https://github.com/freifunkMUC/freifunk-map-modern)**

</section>

<section data-lang="fr" class="language-content" markdown="1">

## Nouvelle carte fédérée des nœuds

Nous avons créé un petit service qui tente de découvrir toutes les communautés Freifunk via l'[API Freifunk](https://api.freifunk.net/) et de les afficher sur une carte commune – y compris les données Grafana en temps réel lorsque c'est possible.

**Amusez-vous bien : [federated-map.ffmuc.net](https://federated-map.ffmuc.net/)**

### Fonctionnalités

- **Fédération automatique** – découvre toutes les communautés Freifunk via l'API et affiche leurs nœuds sur une seule carte
- **Intégration Grafana** – découvre automatiquement les dashboards Grafana et affiche des graphiques en direct par nœud (trafic, clients, uptime)
- **Mises à jour en temps réel** via Server-Sent Events (SSE) – la carte se rafraîchit automatiquement
- **Détails des nœuds** avec version firmware, uptime, graphiques de trafic et vue du voisinage mesh
- **Recherche** par nom d'hôte, ID de nœud ou modèle de routeur
- **Filtre par communauté** avec regroupement par méta-communauté
- **Avertissements** pour le matériel en fin de vie
- **Respectueux de la vie privée** – la seule requête externe va vers OpenStreetMap pour les tuiles de carte

Techniquement, c'est un seul binaire Go sans dépendances externes qui embarque tous les assets web et sert tout depuis un seul processus.

### Encore expérimental

Il y a encore quelques bugs, mais nous y travaillons. Si vous trouvez des problèmes ou avez des idées : [GitHub Issues](https://github.com/freifunkMUC/freifunk-map-modern/issues) ou rejoignez-nous lors de notre [prochaine réunion](https://ffmuc.net/mitmachen/).

La carte des nœuds existante reste accessible sur [map.ffmuc.net](https://map.ffmuc.net).

Le code source complet est open source (AGPL-3.0) : **[github.com/freifunkMUC/freifunk-map-modern](https://github.com/freifunkMUC/freifunk-map-modern)**

</section>

<section data-lang="es" class="language-content" markdown="1">

## Nuevo mapa federado de nodos

Hemos creado un pequeño servicio que intenta descubrir todas las comunidades Freifunk a través de la [API Freifunk](https://api.freifunk.net/) y mostrarlas en un mapa compartido – incluyendo datos en vivo de Grafana cuando estén disponibles.

**Diviértete explorando: [federated-map.ffmuc.net](https://federated-map.ffmuc.net/)**

### Características

- **Federación automática** – descubre todas las comunidades Freifunk a través de la API y muestra sus nodos en un solo mapa
- **Integración con Grafana** – detecta automáticamente dashboards de Grafana y muestra gráficos en vivo por nodo (tráfico, clientes, uptime)
- **Actualizaciones en tiempo real** vía Server-Sent Events (SSE) – el mapa se actualiza automáticamente
- **Detalles de nodos** con versión de firmware, uptime, gráficos de tráfico y vista de vecinos mesh
- **Búsqueda** por hostname, ID de nodo o modelo de router
- **Filtro por comunidad** con agrupación por metacomunidad
- **Avisos** para hardware en fin de vida
- **Respetuoso con la privacidad** – la única petición externa va a OpenStreetMap para los tiles del mapa

Técnicamente es un único binario Go sin dependencias externas que integra todos los assets web y sirve todo desde un solo proceso.

### Todavía experimental

Aún hay algunos bugs, pero estamos trabajando en ello. Si encuentras problemas o tienes ideas: [GitHub Issues](https://github.com/freifunkMUC/freifunk-map-modern/issues) o únete a nuestro [próximo encuentro](https://ffmuc.net/mitmachen/).

El mapa de nodos existente sigue disponible en [map.ffmuc.net](https://map.ffmuc.net).

El código fuente completo es open source (AGPL-3.0): **[github.com/freifunkMUC/freifunk-map-modern](https://github.com/freifunkMUC/freifunk-map-modern)**

</section>

<section data-lang="ua" class="language-content" markdown="1">

## Нова федеративна карта вузлів

Ми створили невеликий сервіс, який намагається знайти всі спільноти Freifunk через [Freifunk API](https://api.freifunk.net/) і показати їх на одній спільній карті – включаючи живі дані Grafana, де це можливо.

**Розважайтеся: [federated-map.ffmuc.net](https://federated-map.ffmuc.net/)**

### Можливості

- **Автоматична федерація** – знаходить усі спільноти Freifunk через API і показує їхні вузли на одній карті
- **Інтеграція з Grafana** – автоматично знаходить дашборди Grafana і показує живі графіки для кожного вузла (трафік, клієнти, аптайм)
- **Оновлення в реальному часі** через Server-Sent Events (SSE) – карта оновлюється автоматично
- **Деталі вузлів** з версією прошивки, аптаймом, графіками трафіку та видом mesh-сусідів
- **Пошук** за іменем хоста, ID вузла або моделлю роутера
- **Фільтр за спільнотою** з групуванням за метаспільнотою
- **Попередження** для обладнання з закінченим терміном підтримки
- **Приватність** – єдиний зовнішній запит йде до OpenStreetMap для тайлів карти

Технічно це один Go-бінарник без зовнішніх залежностей, який вбудовує всі веб-ресурси і обслуговує все з одного процесу.

### Ще експериментально

На даний момент є ще кілька багів, але ми працюємо над цим. Якщо знайшли проблеми або маєте ідеї: [GitHub Issues](https://github.com/freifunkMUC/freifunk-map-modern/issues) або приходьте на нашу [наступну зустріч](https://ffmuc.net/mitmachen/).

Існуюча карта вузлів залишається доступною за адресою [map.ffmuc.net](https://map.ffmuc.net).

Весь вихідний код є відкритим (AGPL-3.0): **[github.com/freifunkMUC/freifunk-map-modern](https://github.com/freifunkMUC/freifunk-map-modern)**

</section>
