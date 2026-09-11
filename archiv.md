---
layout: single
title: Archiv
permalink: /archiv/
author_profile: false
classes: wide
---

Alle Neuigkeiten von Freifunk München, nach Jahren sortiert. Du kannst auch
nach [Kategorien]({{ '/categories/' | relative_url }}) stöbern.

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in posts_by_year %}
## {{ year.name }}

<ul class="archive-posts">
{% for post in year.items %}
  <li class="archive-post">
    <time class="archive-post__date" datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: "%d.%m.%Y" }}</time>
    <a class="archive-post__link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    {% if post.translations and post.translations.size > 0 %}
      <span class="translation-indicators-inline">
        <span class="translation-lang-inline">Deutsch</span>
        {% for lang in post.translations %}
          {% if lang == "en" %}
            <a href="{{ post.url | relative_url }}#en" class="translation-lang-inline">English</a>
          {% elsif lang == "fr" %}
            <a href="{{ post.url | relative_url }}#fr" class="translation-lang-inline">Français</a>
          {% elsif lang == "es" %}
            <a href="{{ post.url | relative_url }}#es" class="translation-lang-inline">Español</a>
          {% elsif lang == "ua" %}
            <a href="{{ post.url | relative_url }}#ua" class="translation-lang-inline">Українська</a>
          {% endif %}
        {% endfor %}
      </span>
    {% endif %}
  </li>
{% endfor %}
</ul>
{% endfor %}
