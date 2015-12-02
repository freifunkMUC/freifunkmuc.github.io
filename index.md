---
layout: page
title: Willkommen bei Freifunk München
---

Die nichtkommerzielle Initiative für den Aufbau freier (Funk-)Netzwerke.
Unser Ziel: Der Aufbau und Betrieb eines freien und unabhängigen WLAN Netzes in München.

<div class="row">        
    <div class="col-sm-6">
        <div class="list-group">

<div class="panel-heading" markdown="1">
### Neuigkeiten

<ul class="posts">
{% for post in site.posts %}
  {% assign y = post.date | date: "%Y" %}
  {% if y != "2014" %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

<p class="rss-subscribe"><a href="{{ "/feed.xml" | prepend: site.baseurl }}">RSS abonnieren</a> | <a href="{{ "/archiv" | prepend: site.baseurl }}">Archiv</a></p>
</div>

        </div>
    </div>
    <div class="col-sm-6">
        <div class="list-group">

<div class="panel-heading" markdown="1">
{% include treffen.md %}
</div>

        </div>
    </div>

</div>
