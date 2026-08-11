# CLAUDE.md: Freifunk München website

Guidance for AI assistants and contributors in `freifunkMUC/freifunkmuc.github.io`.

## Stack

- Jekyll + Minimal Mistakes (`remote_theme`)
- Site: https://ffmuc.net · default locale `de-DE`
- Homepage: `_pages/home.md`, `_includes/home-*.html`
- Styles: `assets/css/main.scss`

## Hardware recommendations (strict)

When editing buy/hardware guidance (`mitmachen.md`, `firmware.md`, related copy):

**Only these two community sources may define which models we recommend:**

1. https://wiki.freifunk.net/Freifunk_Aachen/Hardware  
2. https://darmstadt.freifunk.net/mitmachen/kaufberatung/

Do **not** pull buy-lists from Ingolstadt, Lippe, MWU, random blogs, or model memory.

**Still required after picking models from Aachen/Darmstadt:**

- Verify the exact model appears on https://firmware.ffmuc.net/ (FFMUC images exist).
- Optional device map: https://firmware.ffmuc.net/.gluon-firmware-selector/devices.js
- Point to https://bitte-router-erneuern.ffmuc.net/ for retired/low-spec gear.
- Always warn: check **hardware revision** before purchase; prices are approximate.
- Cite Aachen/Darmstadt next to the list; add “Stand YYYY”.

Never invent support. If Aachen/DA recommend it but FFMUC has no image, say so or omit.

## Homepage UX

- Keep it **short**: hero + compact entry paths + **donation/membership banner** + compact service chips + treffen/status + news.
- Avoid repeating the same CTAs (Spenden/Mitglied/Mitmachen) in hero, path cards, and banner.
- Preserve the donation/support banner: it carries the mission (digitale Teilhabe).

## Mission surface

Reflect more than mesh Wi‑Fi: free network, DNS (`dns-setup.ffmuc.net`, listed on european-alternatives.eu), Meet (`meet.ffmuc.net`), IP lookup (`ip.ffmuc.net`), CryptPad, chat, stats, membership (`mitglieder.ffmuc.net`), donations (`spende.ffmuc.net`). Promote DNS and Meet prominently on home and `/dienste/`. Hub: `/dienste/`.

## Layout width

Content pages should use `classes: wide` and `author_profile: false` so they are not stuck in the narrow single-column + sidebar layout. Prefer readable but wide content (tables on Mitmachen need room). Global CSS widens `.layout--single.wide` / `.layout--single`.

## Local dev

```bash
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

## Don’t

- Don’t commit `_site/`, secrets, or huge vendor trees
- Don’t recommend EOL 4/32 or 8/64 class gear FFMUC is sunsetting
- Don’t remove membership/donation entry points from the homepage story
