---
layout: splash
permalink: /
hidden: true
author_profile: true
header:
  overlay_image: /assets/banner.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  actions:
  - label: "<i class='fas fa-fw fa-comment'></i> Unser Chat"
    url: "https://chat.ffmuc.net"
excerpt: >
  Freifunk München ist eine nichtkommerzielle Initiative für den Aufbau freier (Funk-)Netze sowie Kommunikationskanäle.
---

# Start
## Treffen

<!-- Wir treffen uns meistens am letzten Mittwoch des Monats im [muCCC](https://muc.ccc.de) ([Schleißheimer Str. 39](https://osm.org/go/0JAf0IVLh?node=2012031859)).  -->
Wir treffen uns jeden letzten Mittwoch des Monats um 19:30 Uhr online auf [#FFMEET](https://meet.ffmuc.net/ffmuctreffen).\\
Aktuelle Infos und Diskussionen zum Treffen gibt es im [ffmuc-chat](https://chat.ffmuc.net/freifunk/channels/00-freifunk-treffen).\\
Protokolle der vergangenen sowie die Termine für kommende Treffen sind im [Wiki](https://ffmuc.net/wiki/doku.php?id=treffen:start) zu finden.


## Netzwerk Status
<a target='_blank' href="https://stats.ffmuc.net/d/kUoZ2DRWz/network-overview">>> Gateway Stats-Dashboard</a>
<br>
<br><u><b>Geplant:</b></u>
<br>Aktuell sind keine Wartungen geplant
<br><u><b>Aktuell:</b></u>
<br>Aktuell sind uns keine Störungen bekannt
<br><u><b>History:</b></u>
<br><b>03.04.2024</b> - Wartungsarbeiten neue Server für Wiener Rechenzentrum
<br><b>09.03.2024</b> - Wartungsarbeiten neue Server für Münchner Rechenzentrum
<br>

## Neuigkeiten

{% if paginator %}
  {% assign posts = paginator.posts %}
{% else %}
  {% assign posts = site.posts %}
{% endif %}

{% assign entries_layout = page.entries_layout | default: 'list' %}
<div class="entries-{{ entries_layout }}">
  {% for post in posts %}
    {% include archive-single.html type="entries_layout" %}
  {% endfor %}
</div>

{% include paginator.html %}