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

<ul id="posts" class="posts">
{% for post in site.posts %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

<script type="text/javascript">
  longlist(document.getElementById('posts'), {'perPage': 5});
</script>
<style type="text/css">
  .paging-controls {text-align: center;}
  .paging-controls a {color: #2a7ae2;}
  .paging-controls a:visited {color: #205caa;}
  .paging-controls .prev {float: left;}
  .paging-controls .prev:before {content: "< neuere";}
  .paging-controls .next {float: right;}
  .paging-controls .next:after {content: "ältere >";}
  .paging-controls .elipsis:before {content: " ... ";}
</style>

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
