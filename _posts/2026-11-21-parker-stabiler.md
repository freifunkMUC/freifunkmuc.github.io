---
layout: posts
title: "Parker wird stabiler: Jetzt brauchen wir mehr Tester"
date: 2026-11-21 12:00:00 +0100
categories: freifunkmuc firmware
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

**Kurz gesagt:** Vor ein paar Tagen haben wir **Parker** als sehr experimentelle Firmware vorgestellt ([erster Beitrag]({% post_url 2026-11-18-parker-experimentelle-tests %})). Seitdem ist viel passiert: **Die großen Fehler sind behoben.** Einige **große Installationen laufen schon auf Parker, mit großem Erfolg**. Parker verlässt jetzt die reine Experimentierphase und kommt in stabilere Umgebungen. **Darum suchen wir jetzt mehr Tester.**

- **Test-Kanal im Chat:** [Projekt Parker - L3-routed APs](https://chat.ffmuc.net/freifunk/channels/projekt---l3-routed-aps)
- **Fehler melden:** als Issue in [freifunkMUC/site-ffm](https://github.com/freifunkMUC/site-ffm/issues) oder im Test-Kanal
- **Offene Punkte:** [site-ffm#1011](https://github.com/freifunkMUC/site-ffm/issues/1011)
- **Karte der Parker-Knoten:** [map-parker.ffmuc.net](https://map-parker.ffmuc.net/)

## Was Parker heute kann

- **Zwei Standorte: München und Wien.** Fällt ein Standort aus, schaltet der Knoten automatisch auf den anderen um.
- **DNS64 an jedem Standort.** Damit erreichen auch reine IPv6-Clients Ziele, die nur IPv4 haben.
- **IPv4 über IPv6:** Eine CLAT auf dem Knoten übersetzt IPv4 in IPv6. Ältere Geräte ohne IPv6 funktionieren weiter.

Wie Parker funktioniert und warum wir es machen, steht im [ersten Beitrag]({% post_url 2026-11-18-parker-experimentelle-tests %}).

## Mach mit!

Je mehr Knoten und Meshes Parker nutzen, desto schneller finden wir die letzten Fehler. **Du hast einen Knoten oder ein ganzes Mesh?** Dann probier Parker aus.

> ⚠️ **Noch keine stabile Firmware.** Parker ist stabiler als vor einer Woche, aber noch im Test. Prüfe vor dem Update **Modell und Hardware-Revision** deines Routers.

1. **Notiere** Name, Standort und Kontakt deines Knotens.
2. Hol dir die Firmware im Firmware-Selector auf [firmware.ffmuc.net](https://firmware.ffmuc.net/):
   - **Schritt 1:** Gib dein Routermodell ein. Prüfe Modell **und Hardware-Revision**.
   - **Schritt 2:** Wähle **Upgrade** (Sysupgrade-Image).
   - **Schritt 3:** Klicke auf **Experimentelle Firmware anzeigen**, lies die Warnung und wähle **parker**.
3. Spiele es wie gewohnt ein: im **Konfigurationsmodus** über „Firmware aktualisieren“ oder per SSH mit `sysupgrade`.
4. Prüfe, ob dein Knoten auf der [Parker-Karte](https://map-parker.ffmuc.net/) erscheint.
5. Sag uns im Test-Kanal, was geht und was nicht.

**Mesh:** Parker-Knoten meshen nur mit anderen Parker-Knoten. Aktualisiere darum alle Knoten in deinem Mesh.

## Zurück zur normalen Firmware

Das geht jederzeit: Spiele das normale FFMUC-Image (**stable**) von [firmware.ffmuc.net](https://firmware.ffmuc.net/) ein. Die Schritte stehen im [ersten Beitrag]({% post_url 2026-11-18-parker-experimentelle-tests %}). Hilfe bekommst du im Test-Kanal [Projekt Parker - L3-routed APs](https://chat.ffmuc.net/freifunk/channels/projekt---l3-routed-aps).

**Danke** an alle, die schon testen und Fehler melden. Ihr macht Parker besser!

</section>

<section data-lang="en" class="language-content" markdown="1">

## Parker is getting more stable: now we need more testers

**In short:** A few days ago we introduced **Parker** as a very experimental firmware ([first post]({% post_url 2026-11-18-parker-experimentelle-tests %})). Since then, a lot has happened: **We fixed the big bugs.** Some **big installations already run on Parker, with great success**. Parker now leaves the pure experiment phase and moves into more stable environments. **So now we need more testers.**

- **Test channel in the chat:** [Projekt Parker - L3-routed APs](https://chat.ffmuc.net/freifunk/channels/projekt---l3-routed-aps)
- **Report bugs:** as an issue in [freifunkMUC/site-ffm](https://github.com/freifunkMUC/site-ffm/issues) or in the test channel
- **Open items:** [site-ffm#1011](https://github.com/freifunkMUC/site-ffm/issues/1011)
- **Map of Parker nodes:** [map-parker.ffmuc.net](https://map-parker.ffmuc.net/)

## What Parker does today

- **Two sites: Munich and Vienna.** If one site fails, the node switches to the other site automatically.
- **DNS64 at each site.** With it, IPv6-only clients can reach destinations that have only IPv4.
- **IPv4 over IPv6:** A CLAT on the node translates IPv4 into IPv6. Older devices without IPv6 continue to work.

How Parker works and why we do it is in the [first post]({% post_url 2026-11-18-parker-experimentelle-tests %}).

## Join in!

The more nodes and meshes use Parker, the faster we find the last bugs. **Do you have a node or a full mesh?** Then try Parker.

> ⚠️ **Not a stable firmware yet.** Parker is more stable than one week ago, but it is still in test. Before the update, check the **model and hardware revision** of your router.

1. **Write down** the name, location and contact of your node.
2. Get the firmware in the firmware selector on [firmware.ffmuc.net](https://firmware.ffmuc.net/):
   - **Step 1:** Enter your router model. Check the model **and the hardware revision**.
   - **Step 2:** Select **Upgrade** (sysupgrade image).
   - **Step 3:** Click **Show experimental firmware**, read the warning and select **parker**.
3. Install it as usual: in **config mode** with "Upgrade firmware", or through SSH with `sysupgrade`.
4. Check that your node shows on the [Parker map](https://map-parker.ffmuc.net/).
5. Tell us in the test channel what works and what does not.

**Mesh:** Parker nodes mesh only with other Parker nodes. So update all nodes in your mesh.

## Go back to the normal firmware

You can do this at any time: install the normal FFMUC image (**stable**) from [firmware.ffmuc.net](https://firmware.ffmuc.net/). The steps are in the [first post]({% post_url 2026-11-18-parker-experimentelle-tests %}). You get help in the test channel [Projekt Parker - L3-routed APs](https://chat.ffmuc.net/freifunk/channels/projekt---l3-routed-aps).

**Thank you** to all who already test and report bugs. You make Parker better!

</section>

<section data-lang="fr" class="language-content" markdown="1">

## Parker devient plus stable : nous cherchons plus de testeurs

**En bref :** Il y a quelques jours, nous avons présenté **Parker** comme firmware très expérimental ([premier article]({% post_url 2026-11-18-parker-experimentelle-tests %})). Depuis, beaucoup de choses ont changé : **nous avons corrigé les gros bugs.** Quelques **grandes installations fonctionnent déjà avec Parker, avec un grand succès**. Parker quitte maintenant la phase purement expérimentale et passe dans des environnements plus stables. **Nous cherchons donc plus de testeurs.**

- **Canal de test dans le chat :** [Projekt Parker - L3-routed APs](https://chat.ffmuc.net/freifunk/channels/projekt---l3-routed-aps)
- **Signaler un bug :** comme issue dans [freifunkMUC/site-ffm](https://github.com/freifunkMUC/site-ffm/issues) ou dans le canal de test
- **Points ouverts :** [site-ffm#1011](https://github.com/freifunkMUC/site-ffm/issues/1011)
- **Carte des nœuds Parker :** [map-parker.ffmuc.net](https://map-parker.ffmuc.net/)

## Ce que Parker fait aujourd'hui

- **Deux sites : Munich et Vienne.** Si un site tombe en panne, le nœud passe automatiquement à l'autre.
- **DNS64 sur chaque site.** Ainsi, les clients IPv6 uniquement atteignent aussi les destinations qui n'ont que l'IPv4.
- **IPv4 sur IPv6 :** Un CLAT sur le nœud traduit l'IPv4 en IPv6. Les anciens appareils sans IPv6 continuent de fonctionner.

Le fonctionnement de Parker et nos raisons sont dans le [premier article]({% post_url 2026-11-18-parker-experimentelle-tests %}).

## Participez !

Plus il y a de nœuds et de meshes avec Parker, plus vite nous trouvons les derniers bugs. **Vous avez un nœud ou un mesh complet ?** Essayez Parker.

> ⚠️ **Pas encore un firmware stable.** Parker est plus stable qu'il y a une semaine, mais il est encore en test. Avant la mise à jour, vérifiez le **modèle et la révision matérielle** de votre routeur.

1. **Notez** le nom, l'emplacement et le contact de votre nœud.
2. Prenez le firmware dans le sélecteur sur [firmware.ffmuc.net](https://firmware.ffmuc.net/) :
   - **Étape 1 :** Entrez le modèle de votre routeur. Vérifiez le modèle **et la révision matérielle**.
   - **Étape 2 :** Choisissez **Upgrade** (image sysupgrade).
   - **Étape 3 :** Cliquez sur **Afficher le firmware expérimental**, lisez l'avertissement et choisissez **parker**.
3. Installez-le comme d'habitude : en **mode configuration** avec « Mettre à jour le firmware », ou par SSH avec `sysupgrade`.
4. Vérifiez que votre nœud apparaît sur la [carte Parker](https://map-parker.ffmuc.net/).
5. Dites-nous dans le canal de test ce qui marche et ce qui ne marche pas.

**Mesh :** Les nœuds Parker ne font du mesh qu'avec d'autres nœuds Parker. Mettez donc à jour tous les nœuds de votre mesh.

## Revenir au firmware normal

C'est possible à tout moment : installez l'image FFMUC normale (**stable**) depuis [firmware.ffmuc.net](https://firmware.ffmuc.net/). Les étapes sont dans le [premier article]({% post_url 2026-11-18-parker-experimentelle-tests %}). Vous trouvez de l'aide dans le canal de test [Projekt Parker - L3-routed APs](https://chat.ffmuc.net/freifunk/channels/projekt---l3-routed-aps).

**Merci** à toutes les personnes qui testent déjà et signalent des bugs. Vous rendez Parker meilleur !

</section>

<section data-lang="es" class="language-content" markdown="1">

## Parker es más estable: ahora buscamos más testers

**En resumen:** Hace unos días presentamos **Parker** como firmware muy experimental ([primer artículo]({% post_url 2026-11-18-parker-experimentelle-tests %})). Desde entonces ha pasado mucho: **corregimos los errores grandes.** Algunas **instalaciones grandes ya funcionan con Parker, con gran éxito**. Parker deja ahora la fase puramente experimental y pasa a entornos más estables. **Por eso buscamos más testers.**

- **Canal de pruebas en el chat:** [Projekt Parker - L3-routed APs](https://chat.ffmuc.net/freifunk/channels/projekt---l3-routed-aps)
- **Informar de errores:** como issue en [freifunkMUC/site-ffm](https://github.com/freifunkMUC/site-ffm/issues) o en el canal de pruebas
- **Puntos abiertos:** [site-ffm#1011](https://github.com/freifunkMUC/site-ffm/issues/1011)
- **Mapa de nodos Parker:** [map-parker.ffmuc.net](https://map-parker.ffmuc.net/)

## Qué hace Parker hoy

- **Dos sitios: Múnich y Viena.** Si un sitio falla, el nodo cambia automáticamente al otro.
- **DNS64 en cada sitio.** Así los clientes solo IPv6 también llegan a destinos que solo tienen IPv4.
- **IPv4 sobre IPv6:** Un CLAT en el nodo traduce IPv4 a IPv6. Los dispositivos antiguos sin IPv6 siguen funcionando.

Cómo funciona Parker y por qué lo hacemos está en el [primer artículo]({% post_url 2026-11-18-parker-experimentelle-tests %}).

## ¡Participa!

Cuantos más nodos y meshes usen Parker, más rápido encontramos los últimos errores. **¿Tienes un nodo o un mesh completo?** Entonces prueba Parker.

> ⚠️ **Aún no es un firmware estable.** Parker es más estable que hace una semana, pero sigue en pruebas. Antes de actualizar, comprueba el **modelo y la revisión de hardware** de tu router.

1. **Anota** el nombre, la ubicación y el contacto de tu nodo.
2. Descarga el firmware en el selector de [firmware.ffmuc.net](https://firmware.ffmuc.net/):
   - **Paso 1:** Escribe el modelo de tu router. Comprueba el modelo **y la revisión de hardware**.
   - **Paso 2:** Elige **Upgrade** (imagen sysupgrade).
   - **Paso 3:** Haz clic en **Mostrar firmware experimental**, lee la advertencia y elige **parker**.
3. Instálalo como siempre: en **modo de configuración** con «Actualizar firmware», o por SSH con `sysupgrade`.
4. Comprueba que tu nodo aparece en el [mapa de Parker](https://map-parker.ffmuc.net/).
5. Dinos en el canal de pruebas qué funciona y qué no.

**Mesh:** Los nodos Parker solo hacen mesh con otros nodos Parker. Por eso actualiza todos los nodos de tu mesh.

## Volver al firmware normal

Puedes hacerlo en cualquier momento: instala la imagen normal de FFMUC (**stable**) desde [firmware.ffmuc.net](https://firmware.ffmuc.net/). Los pasos están en el [primer artículo]({% post_url 2026-11-18-parker-experimentelle-tests %}). Encuentras ayuda en el canal de pruebas [Projekt Parker - L3-routed APs](https://chat.ffmuc.net/freifunk/channels/projekt---l3-routed-aps).

**Gracias** a todas las personas que ya prueban e informan de errores. ¡Hacéis Parker mejor!

</section>

<section data-lang="ua" class="language-content" markdown="1">

## Parker стає стабільнішим: тепер нам потрібно більше тестувальників

**Коротко:** Кілька днів тому ми представили **Parker** як дуже експериментальну прошивку ([перший допис]({% post_url 2026-11-18-parker-experimentelle-tests %})). Відтоді сталося багато: **ми виправили великі помилки.** Деякі **великі інсталяції вже працюють на Parker, з великим успіхом**. Тепер Parker виходить з суто експериментальної фази і переходить у стабільніші середовища. **Тому ми шукаємо більше тестувальників.**

- **Тестовий канал у чаті:** [Projekt Parker - L3-routed APs](https://chat.ffmuc.net/freifunk/channels/projekt---l3-routed-aps)
- **Повідомити про помилку:** як issue в [freifunkMUC/site-ffm](https://github.com/freifunkMUC/site-ffm/issues) або в тестовому каналі
- **Відкриті питання:** [site-ffm#1011](https://github.com/freifunkMUC/site-ffm/issues/1011)
- **Карта вузлів Parker:** [map-parker.ffmuc.net](https://map-parker.ffmuc.net/)

## Що Parker уміє сьогодні

- **Два майданчики: Мюнхен і Відень.** Якщо один майданчик не працює, вузол автоматично перемикається на інший.
- **DNS64 на кожному майданчику.** Так клієнти лише з IPv6 також досягають адрес, які мають тільки IPv4.
- **IPv4 через IPv6:** CLAT на вузлі перетворює IPv4 на IPv6. Старі пристрої без IPv6 працюють далі.

Як працює Parker і навіщо ми це робимо, описано в [першому дописі]({% post_url 2026-11-18-parker-experimentelle-tests %}).

## Долучайтеся!

Чим більше вузлів і mesh-мереж використовують Parker, тим швидше ми знайдемо останні помилки. **У вас є вузол або ціла mesh-мережа?** Тоді спробуйте Parker.

> ⚠️ **Це ще не стабільна прошивка.** Parker стабільніший, ніж тиждень тому, але ще в тестуванні. Перед оновленням перевірте **модель і апаратну ревізію** вашого роутера.

1. **Запишіть** назву, місце і контакт вашого вузла.
2. Завантажте прошивку через Firmware-Selector на [firmware.ffmuc.net](https://firmware.ffmuc.net/):
   - **Крок 1:** Введіть модель роутера. Перевірте модель **і апаратну ревізію**.
   - **Крок 2:** Виберіть **Upgrade** (образ sysupgrade).
   - **Крок 3:** Натисніть **Показати експериментальну прошивку**, прочитайте попередження і виберіть **parker**.
3. Встановіть її як зазвичай: у **режимі конфігурації** через «Оновити прошивку» або через SSH командою `sysupgrade`.
4. Перевірте, що ваш вузол з'явився на [карті Parker](https://map-parker.ffmuc.net/).
5. Розкажіть нам у тестовому каналі, що працює, а що ні.

**Mesh:** Вузли Parker утворюють mesh лише з іншими вузлами Parker. Тому оновіть усі вузли у вашій mesh-мережі.

## Повернення до звичайної прошивки

Це можна зробити будь-коли: встановіть звичайний образ FFMUC (**stable**) з [firmware.ffmuc.net](https://firmware.ffmuc.net/). Кроки описано в [першому дописі]({% post_url 2026-11-18-parker-experimentelle-tests %}). Допомогу ви отримаєте в тестовому каналі [Projekt Parker - L3-routed APs](https://chat.ffmuc.net/freifunk/channels/projekt---l3-routed-aps).

**Дякуємо** всім, хто вже тестує і повідомляє про помилки. Ви робите Parker кращим!

</section>
