---
layout: posts
title: "Verschlüsseltes DNS: Unser Zertifikat enthält jetzt auch die IP-Adressen"
date: 2026-11-10 08:00:00 +0100
categories: services dns
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

**Kurz gesagt:** Unsere öffentlichen DNS-Server werden noch etwas sicherer. Viele Geräte können jetzt von selbst auf verschlüsseltes DNS umschalten. **Du musst nichts tun.**

> 👉 **Noch nicht dabei?** Unser DNS ist **kostenlos, ohne Anmeldung** und für alle offen. In wenigen Minuten auf Handy, Laptop oder Router eingerichtet: **[dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)**

## Was ist DNS?

DNS ist das Telefonbuch des Internets. Wenn du `ffmuc.net` eingibst, fragt dein Gerät einen DNS-Server: „Welche Adresse hat diese Seite?“ Erst dann kann es die Seite laden.

## Warum Verschlüsselung?

Klassische DNS-Anfragen sind nicht verschlüsselt. Andere im Netz können also mitlesen, welche Seiten du aufrufst, oder die Antworten verfälschen. Mit **verschlüsseltem DNS** ist die Frage an das Telefonbuch privat. Das schützt deine Privatsphäre. Wir bieten verschlüsseltes DNS schon lange an.

## Was ist neu?

Viele Geräte kennen von unserem DNS-Server nur die **IP-Adresse**, zum Beispiel `5.1.66.255`, und keinen Namen. Moderne Systeme können dann selbst nachfragen: „Kann ich mit dir auch verschlüsselt reden?“ Das Verfahren heißt **DDR** (Discovery of Designated Resolvers).

Damit das sicher ist, muss das Gerät prüfen, dass es wirklich mit **unserem** Server spricht. Dafür braucht der Server ein Zertifikat – eine Art digitaler Ausweis. Bisher stand auf diesem Ausweis nur unser Name, aber nicht unsere IP-Adresse. Die Prüfung schlug fehl, und das Gerät blieb beim unverschlüsselten DNS.

**Jetzt steht auch die IP-Adresse im Ausweis.** Das Zertifikat kommt von Let's Encrypt. Let's Encrypt stellt solche Zertifikate für IP-Adressen erst seit 2026 aus. Sie gelten nur wenige Tage und werden automatisch erneuert.

Davon profitieren Systeme, die DDR unterstützen, zum Beispiel aktuelle Versionen von Windows 11 und Apple-Geräten sowie manche Android-Versionen und Browser. Wie gut das klappt, hängt vom Gerät und seinen Einstellungen ab.

## Was ändert sich für dich?

- **Nichts einzustellen.** Es wird einfach sicherer.
- Nutzt du schon `doh.ffmuc.net`, `dot.ffmuc.net` oder `doq.ffmuc.net`, bleibt alles wie bisher.
- Freifunk-Router und Firmware-Updates sind nicht betroffen.

## Jetzt umsteigen: privates DNS von Freifunk München

Warum unser DNS?

- **Kostenlos und ohne Anmeldung** – für alle, nicht nur im Freifunk-Netz.
- **Datenschutzfreundlich:** Wir speichern keine Protokolle darüber, wer welche Seite aufruft, und verkaufen oder teilen keine DNS-Daten.
- **Keine Zensur:** Wir filtern keine Inhalte.
- **Verschlüsselt** mit DoH, DoT und DoQ.
- **Gemeinnützig:** betrieben vom Verein Freie Netze München e.V., gelistet auf [European Alternatives](https://european-alternatives.eu/de/produkt/ffmuc-dns).

**👉 [Jetzt einrichten auf dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)** – mit einfachen Anleitungen für Windows, macOS, iPhone, Android, Linux, Browser und Router.

## Für Technik-Interessierte

- **Anycast-IPs:** `185.150.99.255`, `5.1.66.255`, `2001:678:e68:f000::`, `2001:678:ed0:f000::`
- **DoH:** `https://doh.ffmuc.net/dns-query` · **DoT:** `dot.ffmuc.net:853` · **DoQ:** `doq.ffmuc.net:853`
- Das neue Let's-Encrypt-Zertifikat enthält die IPv4- und IPv6-Adressen als IP-SANs, zusätzlich zu `doh`, `dns`, `dot`, `doq`, `anycast`, `anycast01` und `anycast02.ffmuc.net`. Laufzeit etwa 6 Tage, automatische Erneuerung.
- Die IP-Adressen werden per HTTP-Challenge bestätigt. Da Anycast die Prüfung an jeden unserer Server schicken kann, teilen die Server die Antwort untereinander.
- Das bestehende `*.ffmuc.net`-Zertifikat bleibt der Standard.
- [Pull Request #697: Kurzlebiges DDR-Zertifikat mit Anycast-IP-Adressen](https://github.com/freifunkMUC/ffmuc-salt-public/pull/697)
- [RFC 9462: Discovery of Designated Resolvers](https://www.rfc-editor.org/rfc/rfc9462.html)
- [Unser Beitrag zu RFC 9462 und RFC 9463](/services/dns/2026/01/09/rfc9462-rfc9463-support/)
- [Datenschutzerklärung DNS](/dns-privacy)

</section>

<section data-lang="en" class="language-content" markdown="1">

**In short:** Our public DNS servers get a bit safer. Many devices can now switch to encrypted DNS by themselves. **You do not have to do anything.**

> 👉 **Not using it yet?** Our DNS is **free, with no sign-up**, and open to everyone. Set it up on your phone, laptop or router in a few minutes: **[dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)**

## What is DNS?

DNS is the phone book of the internet. When you type `ffmuc.net`, your device asks a DNS server: "What is the address of this site?" Only then can it load the page.

## Why encryption?

Classic DNS requests are not encrypted. Others on the network can see which sites you visit, or change the answers. With **encrypted DNS**, your question to the phone book stays private. This protects your privacy. We have offered encrypted DNS for a long time.

## What is new?

Many devices only know the **IP address** of our DNS server, for example `5.1.66.255`, and no name. Modern systems can then ask by themselves: "Can we also talk encrypted?" This method is called **DDR** (Discovery of Designated Resolvers).

To make this safe, the device must check that it really talks to **our** server. For this, the server needs a certificate – a kind of digital ID card. Until now, this ID card only had our name, but not our IP address. The check failed, and the device stayed on unencrypted DNS.

**Now the IP address is on the ID card, too.** The certificate comes from Let's Encrypt. Let's Encrypt only started to issue certificates for IP addresses in 2026. They are valid for a few days only and renew automatically.

Systems that support DDR benefit from this, for example recent versions of Windows 11 and Apple devices, and some Android versions and browsers. How well it works depends on the device and its settings.

## What changes for you?

- **Nothing to configure.** It simply gets safer.
- If you already use `doh.ffmuc.net`, `dot.ffmuc.net` or `doq.ffmuc.net`, nothing changes.
- Freifunk routers and firmware updates are not affected.

## Switch now: private DNS from Freifunk München

Why our DNS?

- **Free and no sign-up** – for everyone, not only in the Freifunk network.
- **Privacy-friendly:** We do not keep logs of who visits which site, and we do not sell or share DNS data.
- **No censorship:** We do not filter content.
- **Encrypted** with DoH, DoT and DoQ.
- **Non-profit:** run by the association Freie Netze München e.V., listed on [European Alternatives](https://european-alternatives.eu/product/ffmuc-dns).

**👉 [Set it up now at dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)** – with easy guides for Windows, macOS, iPhone, Android, Linux, browsers and routers.

## For the technically curious

- **Anycast IPs:** `185.150.99.255`, `5.1.66.255`, `2001:678:e68:f000::`, `2001:678:ed0:f000::`
- **DoH:** `https://doh.ffmuc.net/dns-query` · **DoT:** `dot.ffmuc.net:853` · **DoQ:** `doq.ffmuc.net:853`
- The new Let's Encrypt certificate contains the IPv4 and IPv6 addresses as IP SANs, in addition to `doh`, `dns`, `dot`, `doq`, `anycast`, `anycast01` and `anycast02.ffmuc.net`. Lifetime about 6 days, automatic renewal.
- The IP addresses are validated with an HTTP challenge. Because anycast can send the check to any of our servers, the servers share the answer with each other.
- The existing `*.ffmuc.net` certificate stays the default.
- [Pull Request #697: Short-lived DDR certificate with anycast IP addresses](https://github.com/freifunkMUC/ffmuc-salt-public/pull/697)
- [RFC 9462: Discovery of Designated Resolvers](https://www.rfc-editor.org/rfc/rfc9462.html)
- [Our post about RFC 9462 and RFC 9463](/services/dns/2026/01/09/rfc9462-rfc9463-support/)
- [DNS privacy policy](/dns-privacy)

</section>

<section data-lang="fr" class="language-content" markdown="1">

**En bref :** Nos serveurs DNS publics deviennent encore un peu plus sûrs. De nombreux appareils peuvent désormais passer seuls au DNS chiffré. **Vous n'avez rien à faire.**

> 👉 **Pas encore utilisateur ?** Notre DNS est **gratuit, sans inscription** et ouvert à toutes et tous. Configurez-le en quelques minutes sur votre téléphone, ordinateur ou routeur : **[dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)**

## Qu'est-ce que le DNS ?

Le DNS est l'annuaire d'Internet. Quand vous tapez `ffmuc.net`, votre appareil demande à un serveur DNS : « Quelle est l'adresse de ce site ? » Ce n'est qu'ensuite qu'il peut charger la page.

## Pourquoi chiffrer ?

Les requêtes DNS classiques ne sont pas chiffrées. D'autres personnes sur le réseau peuvent voir quels sites vous visitez, ou modifier les réponses. Avec le **DNS chiffré**, votre question à l'annuaire reste privée. Cela protège votre vie privée. Nous proposons le DNS chiffré depuis longtemps.

## Quoi de neuf ?

Beaucoup d'appareils ne connaissent que l'**adresse IP** de notre serveur DNS, par exemple `5.1.66.255`, et aucun nom. Les systèmes modernes peuvent alors demander d'eux-mêmes : « Pouvons-nous aussi parler de façon chiffrée ? » Cette méthode s'appelle **DDR** (Discovery of Designated Resolvers).

Pour que ce soit sûr, l'appareil doit vérifier qu'il parle vraiment à **notre** serveur. Pour cela, le serveur a besoin d'un certificat – une sorte de carte d'identité numérique. Jusqu'ici, cette carte ne contenait que notre nom, mais pas notre adresse IP. La vérification échouait, et l'appareil restait sur le DNS non chiffré.

**Désormais, l'adresse IP figure aussi sur la carte d'identité.** Le certificat vient de Let's Encrypt. Let's Encrypt ne délivre des certificats pour des adresses IP que depuis 2026. Ils ne sont valables que quelques jours et se renouvellent automatiquement.

Les systèmes compatibles DDR en profitent, par exemple les versions récentes de Windows 11 et des appareils Apple, ainsi que certaines versions d'Android et certains navigateurs. Le résultat dépend de l'appareil et de ses réglages.

## Qu'est-ce qui change pour vous ?

- **Rien à configurer.** C'est simplement plus sûr.
- Si vous utilisez déjà `doh.ffmuc.net`, `dot.ffmuc.net` ou `doq.ffmuc.net`, rien ne change.
- Les routeurs Freifunk et les mises à jour du firmware ne sont pas concernés.

## Passez-y maintenant : le DNS privé de Freifunk Munich

Pourquoi notre DNS ?

- **Gratuit et sans inscription** – pour tout le monde, pas seulement dans le réseau Freifunk.
- **Respectueux de la vie privée :** Nous ne gardons pas de journaux indiquant qui visite quel site, et nous ne vendons ni ne partageons de données DNS.
- **Pas de censure :** Nous ne filtrons aucun contenu.
- **Chiffré** avec DoH, DoT et DoQ.
- **À but non lucratif :** exploité par l'association Freie Netze München e.V., listé sur [European Alternatives](https://european-alternatives.eu/product/ffmuc-dns).

**👉 [Configurez-le maintenant sur dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)** – avec des guides simples pour Windows, macOS, iPhone, Android, Linux, les navigateurs et les routeurs.

## Pour les curieux de technique

- **IP anycast :** `185.150.99.255`, `5.1.66.255`, `2001:678:e68:f000::`, `2001:678:ed0:f000::`
- **DoH :** `https://doh.ffmuc.net/dns-query` · **DoT :** `dot.ffmuc.net:853` · **DoQ :** `doq.ffmuc.net:853`
- Le nouveau certificat Let's Encrypt contient les adresses IPv4 et IPv6 comme IP SAN, en plus de `doh`, `dns`, `dot`, `doq`, `anycast`, `anycast01` et `anycast02.ffmuc.net`. Durée de validité d'environ 6 jours, renouvellement automatique.
- Les adresses IP sont validées par un challenge HTTP. Comme l'anycast peut envoyer la vérification à n'importe lequel de nos serveurs, les serveurs partagent la réponse entre eux.
- Le certificat existant `*.ffmuc.net` reste le certificat par défaut.
- [Pull Request #697 : certificat DDR de courte durée avec adresses IP anycast](https://github.com/freifunkMUC/ffmuc-salt-public/pull/697)
- [RFC 9462 : Discovery of Designated Resolvers](https://www.rfc-editor.org/rfc/rfc9462.html)
- [Notre article sur RFC 9462 et RFC 9463](/services/dns/2026/01/09/rfc9462-rfc9463-support/)
- [Politique de confidentialité DNS](/dns-privacy)

</section>

<section data-lang="es" class="language-content" markdown="1">

**En resumen:** Nuestros servidores DNS públicos son ahora un poco más seguros. Muchos dispositivos pueden cambiar por sí solos a DNS cifrado. **No tienes que hacer nada.**

> 👉 **¿Aún no lo usas?** Nuestro DNS es **gratuito, sin registro** y abierto a todo el mundo. Configúralo en pocos minutos en tu móvil, portátil o router: **[dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)**

## ¿Qué es el DNS?

El DNS es la guía telefónica de Internet. Cuando escribes `ffmuc.net`, tu dispositivo pregunta a un servidor DNS: «¿Cuál es la dirección de este sitio?». Solo entonces puede cargar la página.

## ¿Por qué cifrar?

Las consultas DNS clásicas no están cifradas. Otras personas en la red pueden ver qué sitios visitas o cambiar las respuestas. Con **DNS cifrado**, tu pregunta a la guía telefónica es privada. Esto protege tu privacidad. Ofrecemos DNS cifrado desde hace mucho tiempo.

## ¿Qué hay de nuevo?

Muchos dispositivos solo conocen la **dirección IP** de nuestro servidor DNS, por ejemplo `5.1.66.255`, y ningún nombre. Los sistemas modernos pueden entonces preguntar por sí mismos: «¿Podemos hablar también de forma cifrada?». Este método se llama **DDR** (Discovery of Designated Resolvers).

Para que sea seguro, el dispositivo debe comprobar que realmente habla con **nuestro** servidor. Para ello, el servidor necesita un certificado: una especie de documento de identidad digital. Hasta ahora, este documento solo contenía nuestro nombre, pero no nuestra dirección IP. La comprobación fallaba y el dispositivo seguía usando DNS sin cifrar.

**Ahora la dirección IP también aparece en el documento.** El certificado lo emite Let's Encrypt. Let's Encrypt solo emite certificados para direcciones IP desde 2026. Son válidos solo unos pocos días y se renuevan automáticamente.

Se benefician los sistemas que admiten DDR, por ejemplo versiones recientes de Windows 11 y de dispositivos Apple, así como algunas versiones de Android y algunos navegadores. El resultado depende del dispositivo y de su configuración.

## ¿Qué cambia para ti?

- **Nada que configurar.** Simplemente es más seguro.
- Si ya usas `doh.ffmuc.net`, `dot.ffmuc.net` o `doq.ffmuc.net`, todo sigue igual.
- Los routers Freifunk y las actualizaciones de firmware no se ven afectados.

## Cámbiate ahora: DNS privado de Freifunk Múnich

¿Por qué nuestro DNS?

- **Gratuito y sin registro** – para todo el mundo, no solo en la red Freifunk.
- **Respetuoso con la privacidad:** No guardamos registros de quién visita qué sitio, y no vendemos ni compartimos datos DNS.
- **Sin censura:** No filtramos contenidos.
- **Cifrado** con DoH, DoT y DoQ.
- **Sin ánimo de lucro:** gestionado por la asociación Freie Netze München e.V., incluido en [European Alternatives](https://european-alternatives.eu/product/ffmuc-dns).

**👉 [Configúralo ahora en dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)** – con guías sencillas para Windows, macOS, iPhone, Android, Linux, navegadores y routers.

## Para los curiosos de la técnica

- **IP anycast:** `185.150.99.255`, `5.1.66.255`, `2001:678:e68:f000::`, `2001:678:ed0:f000::`
- **DoH:** `https://doh.ffmuc.net/dns-query` · **DoT:** `dot.ffmuc.net:853` · **DoQ:** `doq.ffmuc.net:853`
- El nuevo certificado de Let's Encrypt contiene las direcciones IPv4 e IPv6 como IP SAN, además de `doh`, `dns`, `dot`, `doq`, `anycast`, `anycast01` y `anycast02.ffmuc.net`. Validez de unos 6 días, renovación automática.
- Las direcciones IP se validan con un desafío HTTP. Como anycast puede enviar la comprobación a cualquiera de nuestros servidores, los servidores comparten la respuesta entre sí.
- El certificado existente `*.ffmuc.net` sigue siendo el predeterminado.
- [Pull Request #697: certificado DDR de corta duración con direcciones IP anycast](https://github.com/freifunkMUC/ffmuc-salt-public/pull/697)
- [RFC 9462: Discovery of Designated Resolvers](https://www.rfc-editor.org/rfc/rfc9462.html)
- [Nuestro artículo sobre RFC 9462 y RFC 9463](/services/dns/2026/01/09/rfc9462-rfc9463-support/)
- [Política de privacidad DNS](/dns-privacy)

</section>

<section data-lang="ua" class="language-content" markdown="1">

**Коротко:** Наші публічні DNS-сервери стають ще трохи безпечнішими. Багато пристроїв тепер можуть самостійно перейти на зашифрований DNS. **Вам нічого не потрібно робити.**

> 👉 **Ще не користуєтеся?** Наш DNS **безкоштовний, без реєстрації** і відкритий для всіх. Налаштуйте його за кілька хвилин на телефоні, ноутбуці чи маршрутизаторі: **[dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)**

## Що таке DNS?

DNS – це телефонна книга інтернету. Коли ви вводите `ffmuc.net`, ваш пристрій запитує DNS-сервер: «Яка адреса цього сайту?» Лише після цього він може завантажити сторінку.

## Навіщо шифрування?

Звичайні DNS-запити не зашифровані. Інші люди в мережі можуть бачити, які сайти ви відвідуєте, або змінювати відповіді. Із **зашифрованим DNS** ваше запитання до телефонної книги залишається приватним. Це захищає вашу приватність. Ми вже давно пропонуємо зашифрований DNS.

## Що нового?

Багато пристроїв знають лише **IP-адресу** нашого DNS-сервера, наприклад `5.1.66.255`, і не знають імені. Сучасні системи можуть тоді самі запитати: «Чи можемо ми спілкуватися зашифровано?» Цей метод називається **DDR** (Discovery of Designated Resolvers).

Щоб це було безпечно, пристрій має перевірити, що він справді спілкується з **нашим** сервером. Для цього серверу потрібен сертифікат – щось на зразок цифрового посвідчення. Досі в цьому посвідченні було лише наше ім'я, але не наша IP-адреса. Перевірка не проходила, і пристрій залишався на незашифрованому DNS.

**Тепер у посвідченні є й IP-адреса.** Сертифікат видає Let's Encrypt. Let's Encrypt видає сертифікати для IP-адрес лише з 2026 року. Вони дійсні лише кілька днів і оновлюються автоматично.

Від цього виграють системи з підтримкою DDR, наприклад актуальні версії Windows 11 і пристроїв Apple, а також деякі версії Android і деякі браузери. Результат залежить від пристрою та його налаштувань.

## Що змінюється для вас?

- **Нічого не потрібно налаштовувати.** Просто стає безпечніше.
- Якщо ви вже використовуєте `doh.ffmuc.net`, `dot.ffmuc.net` або `doq.ffmuc.net`, нічого не змінюється.
- Маршрутизатори Freifunk та оновлення прошивки це не зачіпає.

## Переходьте вже зараз: приватний DNS від Freifunk München

Чому наш DNS?

- **Безкоштовно і без реєстрації** – для всіх, не лише в мережі Freifunk.
- **Дбає про приватність:** Ми не зберігаємо журнали про те, хто які сайти відвідує, і не продаємо та не передаємо DNS-дані.
- **Без цензури:** Ми не фільтруємо вміст.
- **Зашифровано** за допомогою DoH, DoT і DoQ.
- **Неприбутково:** працює завдяки об'єднанню Freie Netze München e.V., є в каталозі [European Alternatives](https://european-alternatives.eu/product/ffmuc-dns).

**👉 [Налаштуйте зараз на dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)** – з простими інструкціями для Windows, macOS, iPhone, Android, Linux, браузерів і маршрутизаторів.

## Для тих, хто цікавиться технікою

- **Anycast IP:** `185.150.99.255`, `5.1.66.255`, `2001:678:e68:f000::`, `2001:678:ed0:f000::`
- **DoH:** `https://doh.ffmuc.net/dns-query` · **DoT:** `dot.ffmuc.net:853` · **DoQ:** `doq.ffmuc.net:853`
- Новий сертифікат Let's Encrypt містить адреси IPv4 та IPv6 як IP SAN, окрім `doh`, `dns`, `dot`, `doq`, `anycast`, `anycast01` та `anycast02.ffmuc.net`. Термін дії близько 6 днів, автоматичне оновлення.
- IP-адреси підтверджуються через HTTP-перевірку. Оскільки anycast може надіслати перевірку на будь-який із наших серверів, сервери обмінюються відповіддю між собою.
- Наявний сертифікат `*.ffmuc.net` залишається стандартним.
- [Pull Request #697: короткостроковий DDR-сертифікат з anycast IP-адресами](https://github.com/freifunkMUC/ffmuc-salt-public/pull/697)
- [RFC 9462: Discovery of Designated Resolvers](https://www.rfc-editor.org/rfc/rfc9462.html)
- [Наша публікація про RFC 9462 та RFC 9463](/services/dns/2026/01/09/rfc9462-rfc9463-support/)
- [Політика конфіденційності DNS](/dns-privacy)

</section>
