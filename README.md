Basierend auf dem [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes/) Theme. Erreichbar unter: https://freifunkmuc.github.io/

Diese Webseite wird mit dem [jekyll](https://jekyllrb.com) compiler erstellt.


Prerequisites:
```bash
sudo apt-get install ruby-dev jekyll
```

Zum lokalen testen sollte folgendes genügen:

```bash
git clone https://github.com/freifunkMUC/freifunkmuc.github.io.git
cd freifunkmuc.github.io
bundle add webrick
bundle install
bundle exec jekyll serve
```

Danach findest du auf http://localhost:4000 die Seiten, welche bei Änderungen an den Sourcen automatisch neu compiliert werden und nach einem Reload im Browser zu begutachten sind.
