---
layout: page
title: Archiv
---

<div class="row">        
    <div class="col-sm-6">
        <div class="list-group">

<div class="panel-heading" markdown="1">

### 2021
<ul class="posts">
{% for post in site.posts %}
  {% assign y = post.date | date: "%Y" %}
  {% if y == "2021" %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

### 2020
<ul class="posts">
{% for post in site.posts %}
  {% assign y = post.date | date: "%Y" %}
  {% if y == "2020" %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

### 2019
<ul class="posts">
{% for post in site.posts %}
  {% assign y = post.date | date: "%Y" %}
  {% if y == "2019" %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

### 2018
<ul class="posts">
{% for post in site.posts %}
  {% assign y = post.date | date: "%Y" %}
  {% if y == "2018" %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

### 2017
<ul class="posts">
{% for post in site.posts %}
  {% assign y = post.date | date: "%Y" %}
  {% if y == "2017" %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

### 2016
<ul class="posts">
{% for post in site.posts %}
  {% assign y = post.date | date: "%Y" %}
  {% if y == "2016" %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

### 2015
<ul class="posts">
{% for post in site.posts %}
  {% assign y = post.date | date: "%Y" %}
  {% if y == "2015" %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

### 2014
<ul class="posts">
{% for post in site.posts %}
  {% assign y = post.date | date: "%Y" %}
  {% if y == "2014" %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d" }}</span>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

</div>

        </div>
    </div>
</div>
