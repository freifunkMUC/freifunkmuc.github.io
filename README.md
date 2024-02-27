[![Build Status](https://travis-ci.org/freifunkMUC/freifunkmuc.github.io.svg?branch=master)](https://travis-ci.org/freifunkMUC/freifunkmuc.github.io)

Zu erreichen unter: https://ffmuc.net

Diese Webseite wird mit dem [jekyll](https://jekyllrb.com) compiler erstellt.


Prerequisites:
```bash
sudo apt-get install ruby-dev jekyll
```

Zum lokalen testen sollte folgendes genügen:

```bash
git clone https://github.com/freifunkMUC/freifunkmuc.github.io.git
cd freifunkmuc.github.io
bundle config set --local path '.gems'
bundle install # install gem dependencies
bundle exec jekyll serve
```

Danach findest du auf http://localhost:4000 die Seiten, welche bei Änderungen an den Sourcen automatisch neu compiliert werden und nach einem Reload im Browser zu begutachten sind.
