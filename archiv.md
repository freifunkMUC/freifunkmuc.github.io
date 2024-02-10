---
layout: page
title: Archiv
---

<div class="row">        
    <div class="col-sm-6">
        <div class="list-group">
          <div class="panel-heading" markdown="1">
{% assign current_year = 'now' | date: "%Y" %}
{% assign start_year = 2014 %}
{% for year in (start_year..current_year) reversed %}
{% capture current_year %}{{ year }}{% endcapture %}
### {{ year }}
  <ul class="posts">
  {% for post in site.posts %}
    {% assign y = post.date | date: "%Y" %}
    {% if y == current_year %}
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
