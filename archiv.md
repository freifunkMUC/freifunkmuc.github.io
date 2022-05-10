---
layout: home
title: Archiv
years: ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]
---

<div class="row">        
    <div class="col-sm-6">
        <div class="list-group">

<div class="panel-heading" markdown="1">

{% for year in page.years %}
### {{ year }}
<ul class="posts">
{% for post in site.posts %}
  {% assign y = post.date | date: "%Y" %}
  {% if y == year %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>
{% endfor %}

</div>

        </div>
    </div>
</div>
