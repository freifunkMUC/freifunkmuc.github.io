# How to Write Multi-Language Posts - Simple Guide

This is the **easiest way** to create posts in multiple languages without knowing HTML.

## Quick Start (Copy & Paste)

Just copy the template below into a new post file. Replace the text in each colored section with your content.

```markdown
---
layout: posts
title: "Your German Title Here"
date: 2026-01-XX 12:00:00
categories: freifunkmuc
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

**German Title or Heading**

Replace this with your German text.

You can write normally:
- Use bullet points
- **Make text bold**
- [Add links](https://example.com)
- Create | tables | like | this |

</section>

<section data-lang="en" class="language-content" markdown="1">

**English Title or Heading**

Replace this with your English translation.

</section>

<section data-lang="fr" class="language-content" markdown="1">

**French Title or Heading**

Replace this with your French translation.

</section>

<section data-lang="es" class="language-content" markdown="1">

**Spanish Title or Heading**

Replace this with your Spanish translation.

</section>

<section data-lang="ua" class="language-content" markdown="1">

**Ukrainian Title or Heading**

Replace this with your Ukrainian translation.

</section>
```

## What Each Line Means (For Reference)

- `{::options parse_block_html="true" /}` = Tells Jekyll "please render markdown below"
- `data-lang="de"` = This block is German
- `class="language-content active"` = Show this by default
- `markdown="1"` = Render markdown inside this box
- The language switcher in top-right handles the rest automatically

## That's All You Need to Know!

- Just copy the template
- Replace the 5 text sections with your translations
- Save the file with format: `_posts/YYYY-MM-DD-your-title.markdown`
- Done! No HTML knowledge required.

The language switcher automatically:
- Shows German by default
- Detects user's browser language
- Saves user's choice in their browser
- Switches content when they click the dropdown
