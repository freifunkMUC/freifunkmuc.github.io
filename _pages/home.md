---
layout: home
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
pagination:
  enabled: true
  per_page: 5
  permalink: /page/:num/
---

<h1>Start</h1>
{% include treffen.html layout=half %}

{% include network-status.html layout=half %}

<h2>Neuigkeiten</h2>

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}
