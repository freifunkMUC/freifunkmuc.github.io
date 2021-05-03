---
layout: page
title: Willkommen bei Freifunk München
customjs:
 - longlist.min
 - main
---

![Logo Freifunk München](/assets/mobilewikilogo.png){:.pull-left width="60px" height="60px" style="margin-right: 10px"}

Freifunk München ist eine nichtkommerzielle Initiative für den Aufbau freier (Funk-)Netze sowie Kommunikationskanäle.

Unser Ziel ist der Aufbau und Betrieb eines freien und unabhängigen WLAN Netzes in und um München.

<div class="row">
    <div class="col-sm-6">
        <div class="list-group">

<div class="panel-heading" markdown="1">
## Neuigkeiten

<ul id="posts" class="posts">
{% for post in site.posts %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
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

    <div class="col-sm-6">
        <div class="list-group">

<div class="panel-heading" markdown="1">
{% include network-status.md %}
</div>

        </div>
    </div>

</div>

