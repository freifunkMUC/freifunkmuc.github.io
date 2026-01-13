---
layout: posts
title: "FFMUC DNS jetzt bei European Alternatives gelistet"
date: 2026-01-13 08:00:00 +0100
categories: freifunk dns privacy
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## FFMUC DNS jetzt bei European Alternatives gelistet

Unser DNS-Service ist nun offiziell bei [European Alternatives](https://european-alternatives.eu/product/ffmuc-dns) gelistet!

### Was ist European Alternatives?

European Alternatives ist eine Plattform, die europäische, datenschutzfreundliche und quelloffene Alternativen zu großen Tech-Konzern-Services präsentiert. Die Plattform hilft Nutzern dabei, digitale Souveränität zu bewahren und gleichzeitig DSGVO-konforme Dienste zu nutzen.

### Unser DNS-Service

Freifunk München betreibt seit Jahren zensurfreie, öffentliche DNS-Resolver als EU-basierte, non-profit Alternative zu kommerziellen DNS-Anbietern. Unsere DNS-Server respektieren deine Privatsphäre - wir loggen keine Anfragen und geben keine Daten an Dritte weiter. Mehr zu unseren Datenschutzpraktiken findest du in unserer [Privacy Policy](https://ffmuc.net/dns-privacy/).

**Technische Details:**
- IPv4: `185.150.99.255` / `5.1.66.255`
- IPv6: `2001:678:e68:f000::` / `2001:678:ed0:f000::`
- DoH (DNS over HTTPS): `https://doh.ffmuc.net/dns-query`
- DoT/DoQ (DNS over TLS/QUIC): `dot.ffmuc.net` / `doq.ffmuc.net` Port 853

### Warum ist das wichtig?

Die Listung bei European Alternatives hilft dabei:
- **Sichtbarkeit erhöhen**: Mehr Menschen erfahren von datenschutzfreundlichen Alternativen
- **Digitale Souveränität stärken**: Europäische Infrastruktur für europäische Nutzer
- **Community aufbauen**: Gleichgesinnte Projekte und Nutzer vernetzen

### So nutzt du unseren DNS-Service

#### Browser-Konfiguration (DoH)

**Firefox:**
1. Einstellungen → Datenschutz & Sicherheit
2. Scrolle zu "DNS über HTTPS aktivieren"
3. Wähle "Benutzerdefinierten Anbieter verwenden"
4. Trage ein: `https://doh.ffmuc.net/dns-query`

**Chrome/Edge:**
1. Einstellungen → Datenschutz und Sicherheit → Sicherheit
2. Scrolle zu "Sicheres DNS verwenden"
3. Wähle "Mit benutzerdefiniertem Dienstanbieter"
4. Trage ein: `https://doh.ffmuc.net/dns-query`

#### Fritzbox-Konfiguration

1. Fritz!Box-Oberfläche öffnen (fritz.box)
2. Internet → Zugangsdaten → DNS-Server
3. "Andere DNSv4-Server verwenden" aktivieren
4. Trage ein:
   - Bevorzugter DNSv4-Server: `185.150.99.255`
   - Alternativer DNSv4-Server: `5.1.66.255`
5. Bei IPv6: "Andere DNSv6-Server verwenden" aktivieren
   - Bevorzugter DNSv6-Server: `2001:678:e68:f000::`
   - Alternativer DNSv6-Server: `2001:678:ed0:f000::`
6. Übernehmen

#### Weitere Geräte

**Smartphone:**

*Android (nativ):*
1. Einstellungen → Netzwerk & Internet → Privates DNS
2. Wähle "Hostname des privaten DNS-Anbieters"
3. Trage ein: `dot.ffmuc.net`

*iOS (Configuration Profiles):*
- **Einfachste Methode**: Installiere ein Configuration Profile für globale DNS-Konfiguration:
  - [DoH Profile](https://github.com/paulmillr/encrypted-dns/blob/master/profiles/ffmucdns-https.mobileconfig) (DNS over HTTPS)
  - [DoT Profile](https://github.com/paulmillr/encrypted-dns/blob/master/profiles/ffmucdns-tls.mobileconfig) (DNS over TLS)
- **Alternative Apps**:
  - **DNSCloak** (DoH, Open Source)
  - **AdGuard DNS** (DoH, benutzerfreundlich)
- Die native iOS DNS-Konfiguration funktioniert nur pro WLAN-Netzwerk

*Apps für erweiterte Optionen:*
- **Nebulo** (Android): Unterstützt DoH/DoT, Open Source
- **DNSCloak** (iOS): Unterstützt DoH, Open Source
- **AdGuard DNS** (Android/iOS): Komfortabel, unterstützt DoH

**Computer:** Konfiguriere die Netzwerkeinstellungen mit unseren DNS-Servern

Eine detaillierte Anleitung findest du in unserem [Wiki](https://ffmuc.net/wiki/doku.php?id=knb:dohdot).

### Unterstütze uns!

Alle unsere Services werden durch Spenden finanziert. Wenn dir unser DNS-Service gefällt, freuen wir uns über deine Unterstützung: [https://spende.ffmuc.net](https://spende.ffmuc.net)

**Links:**
- [European Alternatives Profil](https://european-alternatives.eu/product/ffmuc-dns)
- [DNS-Anleitung (Wiki)](https://ffmuc.net/wiki/doku.php?id=knb:dohdot)
- [DNS Privacy Policy](https://ffmuc.net/dns-privacy/)
- [Freifunk München](https://ffmuc.net)

</section>

<section data-lang="en" class="language-content" markdown="1">

## FFMUC DNS now listed on European Alternatives

We are pleased to announce that our DNS service is now officially listed on [European Alternatives](https://european-alternatives.eu/product/ffmuc-dns)!

### What is European Alternatives?

European Alternatives is a platform that showcases European, privacy-friendly, and open-source alternatives to big tech services. The platform helps users maintain digital sovereignty while using GDPR-compliant services.

### Our DNS Service

Freifunk München has been operating censorship-free, public DNS resolvers for years as an EU-based, non-profit alternative to commercial DNS providers. Our DNS servers respect your privacy - we don't log queries and don't share data with third parties. Learn more about our privacy practices in our [Privacy Policy](https://ffmuc.net/dns-privacy/).

**Technical Details:**
- IPv4: `185.150.99.255` / `5.1.66.255`
- IPv6: `2001:678:e68:f000::` / `2001:678:ed0:f000::`
- DoH (DNS over HTTPS): `https://doh.ffmuc.net/dns-query`
- DoT/DoQ (DNS over TLS/QUIC): `dot.ffmuc.net` / `doq.ffmuc.net` Port 853

### Why is this important?

The listing on European Alternatives helps:
- **Increase visibility**: More people learn about privacy-friendly alternatives
- **Strengthen digital sovereignty**: European infrastructure for European users
- **Build community**: Connect like-minded projects and users

### How to use our DNS service

#### Browser Configuration (DoH)

**Firefox:**
1. Settings → Privacy & Security
2. Scroll to "Enable DNS over HTTPS"
3. Select "Use custom provider"
4. Enter: `https://doh.ffmuc.net/dns-query`

**Chrome/Edge:**
1. Settings → Privacy and security → Security
2. Scroll to "Use secure DNS"
3. Select "With custom provider"
4. Enter: `https://doh.ffmuc.net/dns-query`

#### Fritzbox Configuration

1. Open Fritz!Box interface (fritz.box)
2. Internet → Account Information → DNS Server
3. Enable "Use other DNSv4 servers"
4. Enter:
   - Preferred DNSv4 server: `185.150.99.255`
   - Alternative DNSv4 server: `5.1.66.255`
5. For IPv6: Enable "Use other DNSv6 servers"
   - Preferred DNSv6 server: `2001:678:e68:f000::`
   - Alternative DNSv6 server: `2001:678:ed0:f000::`
6. Apply

#### Other Devices

**Smartphone:**

*Android (native):*
1. Settings → Network & Internet → Private DNS
2. Select "Private DNS provider hostname"
3. Enter: `dot.ffmuc.net`

*iOS (Configuration Profiles):*
- **Easiest method**: Install a Configuration Profile for global DNS configuration:
  - [DoH Profile](https://github.com/paulmillr/encrypted-dns/blob/master/profiles/ffmucdns-https.mobileconfig) (DNS over HTTPS)
  - [DoT Profile](https://github.com/paulmillr/encrypted-dns/blob/master/profiles/ffmucdns-tls.mobileconfig) (DNS over TLS)
- **Alternative apps**:
  - **DNSCloak** (DoH, Open Source)
  - **AdGuard DNS** (DoH, user-friendly)
- Native iOS DNS configuration only works per Wi-Fi network

*Apps for advanced options:*
- **Nebulo** (Android): Supports DoH/DoT, Open Source
- **DNSCloak** (iOS): Supports DoH, Open Source
- **AdGuard DNS** (Android/iOS): User-friendly, supports DoH

**Computer:** Configure network settings with our DNS servers

A detailed guide can be found in our [Wiki](https://ffmuc.net/wiki/doku.php?id=knb:dohdot).

### Support us!

All our services are funded by donations. If you like our DNS service, we appreciate your support: [https://spende.ffmuc.net](https://spende.ffmuc.net)

**Links:**
- [European Alternatives Profile](https://european-alternatives.eu/product/ffmuc-dns)
- [DNS Setup Guide (Wiki)](https://ffmuc.net/wiki/doku.php?id=knb:dohdot)
- [DNS Privacy Policy](https://ffmuc.net/dns-privacy/)
- [Freifunk München](https://ffmuc.net)

</section>

<section data-lang="fr" class="language-content" markdown="1">

## Le DNS FFMUC maintenant répertorié sur European Alternatives

Nous sommes heureux d'annoncer que notre service DNS est maintenant officiellement répertorié sur [European Alternatives](https://european-alternatives.eu/product/ffmuc-dns) !

### Qu'est-ce qu'European Alternatives ?

European Alternatives est une plateforme qui présente des alternatives européennes, respectueuses de la vie privée et open source aux services des grandes entreprises technologiques. La plateforme aide les utilisateurs à maintenir leur souveraineté numérique tout en utilisant des services conformes au RGPD.

### Notre service DNS

Freifunk München exploite depuis des années des résolveurs DNS publics sans censure comme alternative non commerciale basée dans l'UE aux fournisseurs DNS commerciaux. Nos serveurs DNS respectent votre vie privée - nous n'enregistrons pas les requêtes et ne partageons aucune donnée avec des tiers. Pour en savoir plus sur nos pratiques en matière de confidentialité, consultez notre [Politique de confidentialité](https://ffmuc.net/dns-privacy/).

**Détails techniques :**
- IPv4 : `185.150.99.255` / `5.1.66.255`
- IPv6 : `2001:678:e68:f000::` / `2001:678:ed0:f000::`
- DoH (DNS over HTTPS) : `https://doh.ffmuc.net/dns-query`
- DoT/DoQ (DNS over TLS/QUIC) : `dot.ffmuc.net` / `doq.ffmuc.net` Port 853

### Pourquoi est-ce important ?

Le référencement sur European Alternatives aide à :
- **Augmenter la visibilité** : Plus de personnes découvrent des alternatives respectueuses de la vie privée
- **Renforcer la souveraineté numérique** : Infrastructure européenne pour les utilisateurs européens
- **Construire une communauté** : Connecter des projets et des utilisateurs partageant les mêmes idées

### Comment utiliser notre service DNS

#### Configuration du navigateur (DoH)

**Firefox :**
1. Paramètres → Vie privée et sécurité
2. Faites défiler jusqu'à "Activer le DNS via HTTPS"
3. Sélectionnez "Utiliser un fournisseur personnalisé"
4. Saisissez : `https://doh.ffmuc.net/dns-query`

**Chrome/Edge :**
1. Paramètres → Confidentialité et sécurité → Sécurité
2. Faites défiler jusqu'à "Utiliser un DNS sécurisé"
3. Sélectionnez "Avec un fournisseur personnalisé"
4. Saisissez : `https://doh.ffmuc.net/dns-query`

#### Configuration Fritzbox

1. Ouvrez l'interface Fritz!Box (fritz.box)
2. Internet → Informations de compte → Serveur DNS
3. Activez "Utiliser d'autres serveurs DNSv4"
4. Saisissez :
   - Serveur DNSv4 préféré : `185.150.99.255`
   - Serveur DNSv4 alternatif : `5.1.66.255`
5. Pour IPv6 : Activez "Utiliser d'autres serveurs DNSv6"
   - Serveur DNSv6 préféré : `2001:678:e68:f000::`
   - Serveur DNSv6 alternatif : `2001:678:ed0:f000::`
6. Appliquer

#### Autres appareils

**Smartphone :**

*Android (natif) :*
1. Paramètres → Réseau et Internet → DNS privé
2. Sélectionnez "Nom d'hôte du fournisseur DNS privé"
3. Saisissez : `dot.ffmuc.net`

*iOS (Profils de configuration) :*
- **Méthode la plus simple** : Installez un profil de configuration pour une configuration DNS globale :
  - [Profil DoH](https://github.com/paulmillr/encrypted-dns/blob/master/profiles/ffmucdns-https.mobileconfig) (DNS over HTTPS)
  - [Profil DoT](https://github.com/paulmillr/encrypted-dns/blob/master/profiles/ffmucdns-tls.mobileconfig) (DNS over TLS)
- **Applications alternatives** :
  - **DNSCloak** (DoH, Open Source)
  - **AdGuard DNS** (DoH, convivial)
- La configuration DNS native iOS fonctionne uniquement par réseau Wi-Fi

*Applications pour options avancées :*
- **Nebulo** (Android) : Prend en charge DoH/DoT, Open Source
- **DNSCloak** (iOS) : Prend en charge DoH, Open Source
- **AdGuard DNS** (Android/iOS) : Convivial, prend en charge DoH

**Ordinateur :** Configurez les paramètres réseau avec nos serveurs DNS

Un guide détaillé est disponible dans notre [Wiki](https://ffmuc.net/wiki/doku.php?id=knb:dohdot).

### Soutenez-nous !

Tous nos services sont financés par des dons. Si vous appréciez notre service DNS, nous serions heureux de recevoir votre soutien : [https://spende.ffmuc.net](https://spende.ffmuc.net)

**Liens :**
- [Profil European Alternatives](https://european-alternatives.eu/product/ffmuc-dns)
- [Guide de configuration DNS (Wiki)](https://ffmuc.net/wiki/doku.php?id=knb:dohdot)
- [Politique de confidentialité DNS](https://ffmuc.net/dns-privacy/)
- [Freifunk München](https://ffmuc.net)

</section>

<section data-lang="es" class="language-content" markdown="1">

## DNS FFMUC ahora listado en European Alternatives

¡Nos complace anunciar que nuestro servicio DNS ahora está oficialmente listado en [European Alternatives](https://european-alternatives.eu/product/ffmuc-dns)!

### ¿Qué es European Alternatives?

European Alternatives es una plataforma que presenta alternativas europeas, respetuosas con la privacidad y de código abierto a los servicios de las grandes empresas tecnológicas. La plataforma ayuda a los usuarios a mantener la soberanía digital mientras utilizan servicios compatibles con GDPR.

### Nuestro servicio DNS

Freifunk München opera desde hace años resolvedores DNS públicos sin censura como alternativa sin fines de lucro basada en la UE a los proveedores DNS comerciales. Nuestros servidores DNS respetan tu privacidad: no registramos consultas ni compartimos datos con terceros. Obtén más información sobre nuestras prácticas de privacidad en nuestra [Política de privacidad](https://ffmuc.net/dns-privacy/).

**Detalles técnicos:**
- IPv4: `185.150.99.255` / `5.1.66.255`
- IPv6: `2001:678:e68:f000::` / `2001:678:ed0:f000::`
- DoH (DNS over HTTPS): `https://doh.ffmuc.net/dns-query`
- DoT/DoQ (DNS over TLS/QUIC): `dot.ffmuc.net` / `doq.ffmuc.net` Puerto 853

### ¿Por qué es esto importante?

La inclusión en European Alternatives ayuda a:
- **Aumentar la visibilidad**: Más personas conocen alternativas respetuosas con la privacidad
- **Fortalecer la soberanía digital**: Infraestructura europea para usuarios europeos
- **Construir comunidad**: Conectar proyectos y usuarios con ideas afines

### Cómo usar nuestro servicio DNS

#### Configuración del navegador (DoH)

**Firefox:**
1. Configuración → Privacidad y seguridad
2. Desplázate hasta "Activar DNS sobre HTTPS"
3. Selecciona "Usar proveedor personalizado"
4. Ingresa: `https://doh.ffmuc.net/dns-query`

**Chrome/Edge:**
1. Configuración → Privacidad y seguridad → Seguridad
2. Desplázate hasta "Usar DNS seguro"
3. Selecciona "Con proveedor personalizado"
4. Ingresa: `https://doh.ffmuc.net/dns-query`

#### Configuración de Fritzbox

1. Abre la interfaz de Fritz!Box (fritz.box)
2. Internet → Información de cuenta → Servidor DNS
3. Activa "Usar otros servidores DNSv4"
4. Ingresa:
   - Servidor DNSv4 preferido: `185.150.99.255`
   - Servidor DNSv4 alternativo: `5.1.66.255`
5. Para IPv6: Activa "Usar otros servidores DNSv6"
   - Servidor DNSv6 preferido: `2001:678:e68:f000::`
   - Servidor DNSv6 alternativo: `2001:678:ed0:f000::`
6. Aplicar

#### Otros dispositivos

**Smartphone:**

*Android (nativo):*
1. Configuración → Red e Internet → DNS privado
2. Selecciona "Nombre de host del proveedor de DNS privado"
3. Ingresa: `dot.ffmuc.net`

*iOS (Perfiles de configuración):*
- **Método más fácil**: Instala un perfil de configuración para configuración DNS global:
  - [Perfil DoH](https://github.com/paulmillr/encrypted-dns/blob/master/profiles/ffmucdns-https.mobileconfig) (DNS over HTTPS)
  - [Perfil DoT](https://github.com/paulmillr/encrypted-dns/blob/master/profiles/ffmucdns-tls.mobileconfig) (DNS over TLS)
- **Aplicaciones alternativas**:
  - **DNSCloak** (DoH, Open Source)
  - **AdGuard DNS** (DoH, fácil de usar)
- La configuración DNS nativa de iOS solo funciona por red Wi-Fi

*Aplicaciones para opciones avanzadas:*
- **Nebulo** (Android): Compatible con DoH/DoT, Open Source
- **DNSCloak** (iOS): Compatible con DoH, Open Source
- **AdGuard DNS** (Android/iOS): Fácil de usar, compatible con DoH

**Computadora:** Configura los ajustes de red con nuestros servidores DNS

Puedes encontrar una guía detallada en nuestro [Wiki](https://ffmuc.net/wiki/doku.php?id=knb:dohdot).

### ¡Apóyanos!

Todos nuestros servicios se financian mediante donaciones. Si te gusta nuestro servicio DNS, agradecemos tu apoyo: [https://spende.ffmuc.net](https://spende.ffmuc.net)

**Enlaces:**
- [Perfil de European Alternatives](https://european-alternatives.eu/product/ffmuc-dns)
- [Guía de configuración DNS (Wiki)](https://ffmuc.net/wiki/doku.php?id=knb:dohdot)
- [Política de privacidad DNS](https://ffmuc.net/dns-privacy/)
- [Freifunk München](https://ffmuc.net)

</section>

<section data-lang="ua" class="language-content" markdown="1">

## DNS FFMUC тепер у списку European Alternatives

Ми раді повідомити, що наш DNS-сервіс тепер офіційно включено до списку [European Alternatives](https://european-alternatives.eu/product/ffmuc-dns)!

### Що таке European Alternatives?

European Alternatives - це платформа, яка представляє європейські, дружні до приватності та відкриті альтернативи сервісам великих технологічних компаній. Платформа допомагає користувачам зберігати цифровий суверенітет, використовуючи сервіси, що відповідають GDPR.

### Наш DNS-сервіс

Freifunk München уже багато років керує публічними DNS-резолверами без цензури як некомерційною альтернативою на базі ЄС комерційним DNS-провайдерам. Наші DNS-сервери поважають вашу приватність - ми не реєструємо запити та не передаємо дані третім сторонам. Дізнайтеся більше про наші практики конфіденційності в нашій [Політиці конфіденційності](https://ffmuc.net/dns-privacy/).

**Технічні деталі:**
- IPv4: `185.150.99.255` / `5.1.66.255`
- IPv6: `2001:678:e68:f000::` / `2001:678:ed0:f000::`
- DoH (DNS over HTTPS): `https://doh.ffmuc.net/dns-query`
- DoT/DoQ (DNS over TLS/QUIC): `dot.ffmuc.net` / `doq.ffmuc.net` Порт 853

### Чому це важливо?

Включення до European Alternatives допомагає:
- **Підвищити видимість**: Більше людей дізнаються про дружні до приватності альтернативи
- **Зміцнити цифровий суверенітет**: Європейська інфраструктура для європейських користувачів
- **Будувати спільноту**: Об'єднати однодумців та користувачів

### Як використовувати наш DNS-сервіс

#### Налаштування браузера (DoH)

**Firefox:**
1. Налаштування → Приватність і безпека
2. Прокрутіть до "Увімкнути DNS через HTTPS"
3. Виберіть "Використовувати власного постачальника"
4. Введіть: `https://doh.ffmuc.net/dns-query`

**Chrome/Edge:**
1. Налаштування → Конфіденційність та безпека → Безпека
2. Прокрутіть до "Використовувати захищений DNS"
3. Виберіть "З власним постачальником"
4. Введіть: `https://doh.ffmuc.net/dns-query`

#### Налаштування Fritzbox

1. Відкрийте інтерфейс Fritz!Box (fritz.box)
2. Internet → Дані облікового запису → DNS-сервер
3. Увімкніть "Використовувати інші DNSv4 сервери"
4. Введіть:
   - Основний DNSv4 сервер: `185.150.99.255`
   - Альтернативний DNSv4 сервер: `5.1.66.255`
5. Для IPv6: Увімкніть "Використовувати інші DNSv6 сервери"
   - Основний DNSv6 сервер: `2001:678:e68:f000::`
   - Альтернативний DNSv6 сервер: `2001:678:ed0:f000::`
6. Застосувати

#### Інші пристрої

**Смартфон:**

*Android (вбудований):*
1. Налаштування → Мережа та інтернет → Приватний DNS
2. Виберіть "Ім'я хоста постачальника приватного DNS"
3. Введіть: `dot.ffmuc.net`

*iOS (Профілі конфігурації):*
- **Найпростіший метод**: Встановіть профіль конфігурації для глобального налаштування DNS:
  - [DoH профіль](https://github.com/paulmillr/encrypted-dns/blob/master/profiles/ffmucdns-https.mobileconfig) (DNS over HTTPS)
  - [DoT профіль](https://github.com/paulmillr/encrypted-dns/blob/master/profiles/ffmucdns-tls.mobileconfig) (DNS over TLS)
- **Альтернативні додатки**:
  - **DNSCloak** (DoH, Open Source)
  - **AdGuard DNS** (DoH, зручний)
- Вбудована конфігурація DNS в iOS працює лише для окремої Wi-Fi мережі

*Додатки для розширених опцій:*
- **Nebulo** (Android): Підтримка DoH/DoT, Open Source
- **DNSCloak** (iOS): Підтримка DoH, Open Source
- **AdGuard DNS** (Android/iOS): Зручний, підтримка DoH

**Комп'ютер:** Налаштуйте параметри мережі з нашими DNS-серверами

Детальний посібник можна знайти в нашому [Wiki](https://ffmuc.net/wiki/doku.php?id=knb:dohdot).

### Підтримайте нас!

Усі наші сервіси фінансуються за рахунок пожертв. Якщо вам подобається наш DNS-сервіс, ми будемо раді вашій підтримці: [https://spende.ffmuc.net](https://spende.ffmuc.net)

**Посилання:**
- [Профіль European Alternatives](https://european-alternatives.eu/product/ffmuc-dns)
- [Посібник з налаштування DNS (Wiki)](https://ffmuc.net/wiki/doku.php?id=knb:dohdot)
- [Політика конфіденційності DNS](https://ffmuc.net/dns-privacy/)
- [Freifunk München](https://ffmuc.net)

</section>
