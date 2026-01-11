---
layout: home
permalink: /
hidden: true
author_profile: true
sidebar:
  - title: '<a href="https://silo.ffmuc.net" target="_blank" style="color: inherit;">Richtfunk - Webcam</a>'
    text: '<iframe src="https://silo.ffmuc.net/embed/video" title="Owncast" style="width: 100%; height: 200px; border: none;" referrerpolicy="origin" allowfullscreen></iframe>'
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

<div class="info-boxes-container">
  <div class="info-box">
    {% include treffen.html %}
  </div>
  <div class="info-box">
    {% include network-status.html %}
  </div>
</div>

<h2 class="news-heading">Neuigkeiten</h2>

{% if paginator %}
{% assign posts = paginator.posts | where_lang: "de" | sort: 'date' | reverse %}
{% else %}
{% assign posts = site.posts | where_lang: "de" | sort: 'date' | reverse %}
{% endif %}
