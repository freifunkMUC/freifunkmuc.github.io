---
layout: page
title: Willkommen bei Freifunk München
customjs:
 - longlist.min
 - main
---

![Logo Freifunk München](/assets/mobilewikilogo.png){:.pull-left width="60px" height="60px" style="margin-right: 10px"}

Die nichtkommerzielle Initiative für den Aufbau freier (Funk-)Netzwerke.

Unser Ziel: Der Aufbau und Betrieb eines freien und unabhängigen WLAN Netzes in München.

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

<div class="col-sm-6">
        <div class="list-group">

<div class="panel-heading">
<a class="twitter-timeline"  href="https://twitter.com/FreifunkMUC" data-widget-id="684307247363665920">Tweets von @FreifunkMUC </a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</div>

        </div>
    </div>

</div>

