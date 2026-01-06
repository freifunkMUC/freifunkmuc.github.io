---
layout: single
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
      {% if post.translations and post.translations.size > 0 %}
        <span class="translation-indicators-inline">
          <span class="translation-lang-inline">Deutsch</span>
          {% for lang in post.translations %}
            {% if lang == "en" %}
              <a href="{{ post.url | prepend: site.baseurl }}#en" class="translation-lang-inline">English</a>
            {% elsif lang == "fr" %}
              <a href="{{ post.url | prepend: site.baseurl }}#fr" class="translation-lang-inline">Français</a>
            {% elsif lang == "es" %}
              <a href="{{ post.url | prepend: site.baseurl }}#es" class="translation-lang-inline">Español</a>
            {% elsif lang == "ua" %}
              <a href="{{ post.url | prepend: site.baseurl }}#ua" class="translation-lang-inline">Українська</a>
            {% endif %}
          {% endfor %}
        </span>
      {% endif %}
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
