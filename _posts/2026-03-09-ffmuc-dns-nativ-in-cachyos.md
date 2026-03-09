---
layout: posts
title: "Freifunk München DNS nativ in CachyOS verfügbar"
date: 2026-03-09 12:00:00 +0100
categories: freifunk dns community
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## Freifunk München DNS jetzt nativ in CachyOS

Wir freuen uns, dass unser DNS-Resolver ab sofort nativ in [CachyOS](https://cachyos.org/) als DNS-Option verfügbar ist! CachyOS ist eine auf Performance optimierte Arch-Linux-Distribution, die besonders bei Linux-Enthusiasten beliebt ist.

Im [CachyOS Welcome-Tool](https://github.com/CachyOS/CachyOS-Welcome/blob/develop/src/dns.rs) kann Freifunk München DNS jetzt direkt als DNS-Provider ausgewählt werden — ohne manuelle Konfiguration. Die Integration wurde mit dem [CachyOS March 2026 Release](https://cachyos.org/blog/2603-march-release/) ausgeliefert.

### Was bedeutet das?

Alle CachyOS-Nutzer können unseren datenschutzfreundlichen DNS-Resolver mit wenigen Klicks über das Welcome-Tool aktivieren — als Plain DNS (Port 53) mit unseren Anycast-IPs:

- **IPv4:** `5.1.66.255`, `185.150.99.255`
- **IPv6:** `2001:678:e68:f000::`, `2001:678:ed0:f000::`

Unser DNS-Resolver loggt keine personenbezogenen Daten und blockiert keine Inhalte. Mehr dazu in unserer [DNS-Privacy-Erklärung](https://ffmuc.net/dns-privacy/).

### Einrichtung auf anderen Systemen

Nicht CachyOS? Kein Problem. Unter **[dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)** findet ihr Anleitungen für alle gängigen Plattformen:

- **Android** — Private DNS (ab Android 9)
- **iOS & macOS** — Konfigurationsprofil mit einem Tap installieren
- **Windows** — Windows 10 & 11
- **Browser** — Firefox, Chrome, Edge, Brave
- **Linux** — GUI, systemd-resolved, NetworkManager
- **Router** — Fritz!Box, MikroTik, OpenWrt
- **Fortgeschritten** — Unbound, Pi-hole, AdGuard Home, Blocky

Neben Plain DNS unterstützen wir auch DNS over HTTPS (DoH), DNS over TLS (DoT) und DNS over QUIC (DoQ).

### Über unseren DNS-Resolver

Der Freifunk München DNS-Resolver steht allen offen — nicht nur Freifunk-Nutzern. Er bietet:

- **Kein Logging** personenbezogener Daten (gemäß RFC 8932)
- **Keine Zensur** oder Inhaltsfilterung
- **DNSSEC**-validiert
- **Hohe Verfügbarkeit** durch Anycast-Infrastruktur
- **EU-gehostet**

</section>

<section data-lang="en" class="language-content" markdown="1">

## Freifunk München DNS Now Natively Available in CachyOS

We're happy to announce that our DNS resolver is now natively available as a DNS option in [CachyOS](https://cachyos.org/)! CachyOS is a performance-optimized Arch Linux distribution that's especially popular among Linux enthusiasts.

In the [CachyOS Welcome tool](https://github.com/CachyOS/CachyOS-Welcome/blob/develop/src/dns.rs), Freifunk München DNS can now be selected directly as a DNS provider — no manual configuration needed. The integration shipped with the [CachyOS March 2026 Release](https://cachyos.org/blog/2603-march-release/).

### What does this mean?

All CachyOS users can now activate our privacy-friendly DNS resolver with just a few clicks via the Welcome tool — as plain DNS (port 53) using our anycast IPs:

- **IPv4:** `5.1.66.255`, `185.150.99.255`
- **IPv6:** `2001:678:e68:f000::`, `2001:678:ed0:f000::`

Our DNS resolver does not log any personal data and does not block any content. More details in our [DNS Privacy Policy](https://ffmuc.net/dns-privacy/).

### Setup on other systems

Not on CachyOS? No problem. Visit **[dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)** for setup guides covering all major platforms:

- **Android** — Private DNS (Android 9+)
- **iOS & macOS** — install a configuration profile with one tap
- **Windows** — Windows 10 & 11
- **Browsers** — Firefox, Chrome, Edge, Brave
- **Linux** — GUI, systemd-resolved, NetworkManager
- **Routers** — Fritz!Box, MikroTik, OpenWrt
- **Advanced** — Unbound, Pi-hole, AdGuard Home, Blocky

Besides plain DNS we also support DNS over HTTPS (DoH), DNS over TLS (DoT), and DNS over QUIC (DoQ).

### About our DNS resolver

The Freifunk München DNS resolver is open to everyone — not just Freifunk users. It offers:

- **No logging** of personal data (compliant with RFC 8932)
- **No censorship** or content filtering
- **DNSSEC** validated
- **High availability** through anycast infrastructure
- **EU-hosted**

</section>

<section data-lang="fr" class="language-content" markdown="1">

## Le DNS Freifunk München désormais disponible nativement dans CachyOS

Nous sommes heureux d'annoncer que notre résolveur DNS est désormais disponible nativement comme option DNS dans [CachyOS](https://cachyos.org/) ! CachyOS est une distribution Arch Linux optimisée pour les performances, particulièrement populaire parmi les passionnés de Linux.

Dans l'[outil CachyOS Welcome](https://github.com/CachyOS/CachyOS-Welcome/blob/develop/src/dns.rs), Freifunk München DNS peut désormais être sélectionné directement comme fournisseur DNS — sans aucune configuration manuelle. L'intégration a été livrée avec la [version de mars 2026 de CachyOS](https://cachyos.org/blog/2603-march-release/).

### Qu'est-ce que cela signifie ?

Tous les utilisateurs de CachyOS peuvent désormais activer notre résolveur DNS respectueux de la vie privée en quelques clics via l'outil Welcome — en DNS classique (port 53) avec nos IPs anycast :

- **IPv4 :** `5.1.66.255`, `185.150.99.255`
- **IPv6 :** `2001:678:e68:f000::`, `2001:678:ed0:f000::`

Notre résolveur DNS n'enregistre aucune donnée personnelle et ne bloque aucun contenu. Plus de détails dans notre [politique de confidentialité DNS](https://ffmuc.net/dns-privacy/).

### Configuration sur d'autres systèmes

Pas sous CachyOS ? Pas de problème. Rendez-vous sur **[dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)** pour des guides couvrant toutes les plateformes :

- **Android** — DNS privé (Android 9+)
- **iOS & macOS** — profil de configuration en un tap
- **Windows** — Windows 10 & 11
- **Navigateurs** — Firefox, Chrome, Edge, Brave
- **Linux** — GUI, systemd-resolved, NetworkManager
- **Routeurs** — Fritz!Box, MikroTik, OpenWrt
- **Avancé** — Unbound, Pi-hole, AdGuard Home, Blocky

En plus du DNS classique, nous supportons également DNS over HTTPS (DoH), DNS over TLS (DoT) et DNS over QUIC (DoQ).

### À propos de notre résolveur DNS

Le résolveur DNS Freifunk München est ouvert à tous — pas seulement aux utilisateurs Freifunk. Il offre :

- **Aucun enregistrement** de données personnelles (conforme au RFC 8932)
- **Aucune censure** ni filtrage de contenu
- **DNSSEC** validé
- **Haute disponibilité** grâce à une infrastructure anycast
- **Hébergé dans l'UE**

</section>

<section data-lang="es" class="language-content" markdown="1">

## DNS de Freifunk München ahora disponible nativamente en CachyOS

Nos alegra anunciar que nuestro resolver DNS está ahora disponible nativamente como opción DNS en [CachyOS](https://cachyos.org/). CachyOS es una distribución Arch Linux optimizada para rendimiento, especialmente popular entre entusiastas de Linux.

En la [herramienta CachyOS Welcome](https://github.com/CachyOS/CachyOS-Welcome/blob/develop/src/dns.rs), Freifunk München DNS ahora se puede seleccionar directamente como proveedor DNS — sin configuración manual. La integración se incluyó en el [lanzamiento de marzo 2026 de CachyOS](https://cachyos.org/blog/2603-march-release/).

### ¿Qué significa esto?

Todos los usuarios de CachyOS pueden activar nuestro resolver DNS respetuoso con la privacidad con solo unos clics a través de la herramienta Welcome — como DNS plano (puerto 53) con nuestras IPs anycast:

- **IPv4:** `5.1.66.255`, `185.150.99.255`
- **IPv6:** `2001:678:e68:f000::`, `2001:678:ed0:f000::`

Nuestro resolver DNS no registra datos personales y no bloquea ningún contenido. Más detalles en nuestra [política de privacidad DNS](https://ffmuc.net/dns-privacy/).

### Configuración en otros sistemas

¿No estás en CachyOS? No hay problema. Visita **[dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)** para guías que cubren todas las plataformas:

- **Android** — DNS privado (Android 9+)
- **iOS y macOS** — perfil de configuración con un tap
- **Windows** — Windows 10 y 11
- **Navegadores** — Firefox, Chrome, Edge, Brave
- **Linux** — GUI, systemd-resolved, NetworkManager
- **Routers** — Fritz!Box, MikroTik, OpenWrt
- **Avanzado** — Unbound, Pi-hole, AdGuard Home, Blocky

Además de DNS plano, también soportamos DNS over HTTPS (DoH), DNS over TLS (DoT) y DNS over QUIC (DoQ).

### Sobre nuestro resolver DNS

El resolver DNS de Freifunk München está abierto a todos — no solo a usuarios de Freifunk. Ofrece:

- **Sin registro** de datos personales (conforme con RFC 8932)
- **Sin censura** ni filtrado de contenido
- **DNSSEC** validado
- **Alta disponibilidad** mediante infraestructura anycast
- **Alojado en la UE**

</section>

<section data-lang="ua" class="language-content" markdown="1">

## DNS Freifunk München тепер нативно доступний у CachyOS

Ми раді повідомити, що наш DNS-резолвер тепер нативно доступний як опція DNS у [CachyOS](https://cachyos.org/)! CachyOS — це оптимізований для продуктивності дистрибутив Arch Linux, особливо популярний серед ентузіастів Linux.

В [інструменті CachyOS Welcome](https://github.com/CachyOS/CachyOS-Welcome/blob/develop/src/dns.rs) Freifunk München DNS тепер можна вибрати безпосередньо як DNS-провайдер — без ручної конфігурації. Інтеграція була включена у [березневий реліз CachyOS 2026](https://cachyos.org/blog/2603-march-release/).

### Що це означає?

Усі користувачі CachyOS тепер можуть активувати наш приватний DNS-резолвер лише кількома кліками через Welcome-інструмент — як звичайний DNS (порт 53) з нашими anycast-IP:

- **IPv4:** `5.1.66.255`, `185.150.99.255`
- **IPv6:** `2001:678:e68:f000::`, `2001:678:ed0:f000::`

Наш DNS-резолвер не зберігає персональні дані і не блокує жодний контент. Більше деталей у нашій [політиці конфіденційності DNS](https://ffmuc.net/dns-privacy/).

### Налаштування на інших системах

Не на CachyOS? Не проблема. Відвідайте **[dns-setup.ffmuc.net](https://dns-setup.ffmuc.net)** для інструкцій для всіх основних платформ:

- **Android** — приватний DNS (Android 9+)
- **iOS та macOS** — профіль конфігурації одним дотиком
- **Windows** — Windows 10 та 11
- **Браузери** — Firefox, Chrome, Edge, Brave
- **Linux** — GUI, systemd-resolved, NetworkManager
- **Роутери** — Fritz!Box, MikroTik, OpenWrt
- **Для досвідчених** — Unbound, Pi-hole, AdGuard Home, Blocky

Окрім звичайного DNS ми також підтримуємо DNS over HTTPS (DoH), DNS over TLS (DoT) та DNS over QUIC (DoQ).

### Про наш DNS-резолвер

DNS-резолвер Freifunk München відкритий для всіх — не тільки для користувачів Freifunk. Він пропонує:

- **Без логування** персональних даних (відповідно до RFC 8932)
- **Без цензури** або фільтрації контенту
- **DNSSEC**-валідований
- **Висока доступність** завдяки anycast-інфраструктурі
- **Хостинг у ЄС**

</section>
