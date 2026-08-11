---
layout: home
permalink: /
hidden: true
author_profile: true
sidebar:
  - title: '<a href="https://silo.ffmuc.net" target="_blank" rel="noopener" style="color: inherit;">Richtfunk – Webcam</a>'
    text: '<iframe src="https://silo.ffmuc.net/embed/video" title="Richtfunk Webcam / Owncast" style="width: 100%; height: 200px; border: none;" referrerpolicy="origin" allowfullscreen loading="lazy"></iframe>'
header:
  overlay_image: /assets/banner.jpg
  overlay_filter: 0.45
  actions:
    - label: "<i class='fas fa-fw fa-rocket'></i> Mitmachen"
      url: "/mitmachen/"
    - label: "<i class='fas fa-fw fa-heart'></i> Spenden"
      url: "https://spende.ffmuc.net"
    - label: "<i class='fas fa-fw fa-comment'></i> Chat"
      url: "https://chat.ffmuc.net"
excerpt: >
  Offenes WLAN und digitale Dienste für alle. Nichtkommerziell, datensparsam, in Europa gehostet.
pagination:
  enabled: true
  per_page: 5
  permalink: /page/:num/
---

{% include home-paths.html %}

{% include home-support.html %}

{% include home-services.html %}

<div class="info-boxes-container">
  <div class="info-box">
    {% include treffen.html %}
  </div>
  <div class="info-box">
    {% include network-status.html %}
  </div>
</div>

<h2 class="news-heading">Neuigkeiten</h2>
