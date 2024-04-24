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
{% include sidebar.html %}
{% include treffen.md layout=half %}

# Start
{% include treffen.md layout=half %}

{% include network-status.md layout=half %}

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