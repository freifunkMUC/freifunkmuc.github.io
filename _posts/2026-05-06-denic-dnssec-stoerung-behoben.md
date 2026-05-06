---
layout: posts
title: "DENIC DNSSEC-Störung behoben – DNSSEC-Validierung wieder aktiv"
date: 2026-05-06 06:00:00 +0200
categories: freifunk infrastruktur
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## DENIC DNSSEC-Störung behoben – DNSSEC-Validierung wieder aktiv

**Update zur [gestrigen Meldung](/freifunk/infrastruktur/2026/05/05/denic-dnssec-stoerung):** Die DNSSEC-Störung bei der DENIC ist behoben. Alle `.de`-Domains sind wieder normal erreichbar.

### Was haben wir getan?

Wir haben die **DNSSEC-Validierung für die .de-Zone auf unseren Nameservern wieder aktiviert**:

<pre><code>rec_control clear-nta de.</code></pre>

Damit ist der reguläre Betrieb mit voller DNSSEC-Validierung auf unseren DNS-Servern wiederhergestellt.

### Hintergrund: Warum war das Deaktivieren von DNSSEC vertretbar?

Das Setzen eines sogenannten **Negative Trust Anchor (NTA)** ist ein standardisiertes Verfahren, das in [RFC 7646](https://datatracker.ietf.org/doc/html/rfc7646) beschrieben wird. Ein NTA deaktiviert die DNSSEC-Validierung gezielt für eine bestimmte Zone – in diesem Fall `.de` – ohne die Validierung für alle anderen Domains zu beeinträchtigen.

Laut RFC 7646 sind NTAs genau für solche Situationen vorgesehen: Wenn eine DNSSEC-Störung nicht durch einen Angriff, sondern durch eine Fehlkonfiguration oder einen Ausfall auf Seiten des Zonenbetreibers verursacht wird. Die Alternative – dass Nutzer auf nicht-validierende DNS-Resolver ausweichen – wäre deutlich schädlicher für die Sicherheit, da dann **sämtliche** DNSSEC-Validierung verloren ginge.

Nach Behebung der Störung haben wir den NTA umgehend entfernt und die volle DNSSEC-Validierung wiederhergestellt – wie es RFC 7646 empfiehlt.

### Offizielle Stellungnahme der DENIC

> **06. Mai 2026** – Frankfurt am Main – Die DENIC eG verzeichnete eine Störung ihres DNS-Dienstes für .de-Domains. Hiervon waren insbesondere DNSSEC-signierte .de-Domains in ihrer Erreichbarkeit vorübergehend eingeschränkt.
>
> Das Problem ist behoben und alle Systeme arbeiten wieder im Normalbetrieb.
>
> Die genaue Ursache des Vorfalls wird noch analysiert. Die technischen Teams der DENIC setzen die Untersuchung fort und werden weitere Details veröffentlichen, sobald belastbare Erkenntnisse vorliegen.
>
> Die DENIC dankt allen Betroffenen für ihre Geduld und ihr Verständnis.

Quelle: [DENIC Blog](https://blog.denic.de/en/denic-reports-resolved-dnssec-disruption-affecting-de-domains/)

</section>

<section data-lang="en" class="language-content" markdown="1">

## DENIC DNSSEC Outage Resolved – DNSSEC Validation Re-enabled

**Update to [yesterday's post](/freifunk/infrastruktur/2026/05/05/denic-dnssec-stoerung):** The DNSSEC disruption at DENIC has been resolved. All `.de` domains are reachable again.

### What did we do?

We have **re-enabled DNSSEC validation for the .de zone** on our nameservers:

<pre><code>rec_control clear-nta de.</code></pre>

Regular operation with full DNSSEC validation on our DNS servers has been restored.

### Background: Why was disabling DNSSEC validation justified?

Setting a so-called **Negative Trust Anchor (NTA)** is a standardised procedure described in [RFC 7646](https://datatracker.ietf.org/doc/html/rfc7646). An NTA disables DNSSEC validation specifically for a single zone – in this case `.de` – without affecting validation for any other domains.

According to RFC 7646, NTAs are designed for exactly this kind of situation: when a DNSSEC failure is caused not by an attack, but by a misconfiguration or outage on the zone operator's side. The alternative – users switching to non-validating DNS resolvers – would be far more harmful to security, as it would disable **all** DNSSEC validation entirely.

Once the disruption was resolved, we promptly removed the NTA and restored full DNSSEC validation – as recommended by RFC 7646.

### Official DENIC Statement

> **6 May 2026** – Frankfurt am Main – DENIC eG experienced a disruption in its DNS service for .de domains. As a result, there were temporary limitations in the reachability of .de domains, in particular those signed with DNSSEC.
>
> The issue has been resolved and all systems are now operating normally again.
>
> The root cause of the incident is still under analysis. DENIC's technical teams are continuing to investigate and will share further details as soon as reliable findings are available.
>
> DENIC thanks all affected parties for their patience and understanding.

Source: [DENIC Blog](https://blog.denic.de/en/denic-reports-resolved-dnssec-disruption-affecting-de-domains/)

</section>

<section data-lang="fr" class="language-content" markdown="1">

## Panne DNSSEC chez DENIC résolue – Validation DNSSEC réactivée

**Mise à jour du [post d'hier](/freifunk/infrastruktur/2026/05/05/denic-dnssec-stoerung) :** La perturbation DNSSEC chez DENIC est résolue. Tous les domaines `.de` sont de nouveau accessibles.

### Qu'avons-nous fait ?

Nous avons **réactivé la validation DNSSEC pour la zone .de** sur nos serveurs DNS :

<pre><code>rec_control clear-nta de.</code></pre>

Le fonctionnement normal avec validation DNSSEC complète sur nos serveurs DNS est rétabli.

### Contexte : Pourquoi la désactivation de DNSSEC était-elle justifiée ?

La mise en place d'un **Negative Trust Anchor (NTA)** est une procédure standardisée décrite dans la [RFC 7646](https://datatracker.ietf.org/doc/html/rfc7646). Un NTA désactive la validation DNSSEC de manière ciblée pour une zone spécifique – dans ce cas `.de` – sans affecter la validation pour les autres domaines.

Selon la RFC 7646, les NTA sont conçus exactement pour ce type de situation : lorsqu'une défaillance DNSSEC n'est pas causée par une attaque, mais par une erreur de configuration ou une panne du côté de l'opérateur de la zone. L'alternative – que les utilisateurs basculent vers des résolveurs DNS non validants – serait bien plus dangereuse pour la sécurité, car elle désactiverait **toute** la validation DNSSEC.

Une fois la perturbation résolue, nous avons rapidement supprimé le NTA et rétabli la validation DNSSEC complète – conformément aux recommandations de la RFC 7646.

### Communiqué officiel de DENIC

> **6 mai 2026** – Francfort-sur-le-Main – DENIC eG a subi une perturbation de son service DNS pour les domaines .de. En conséquence, la joignabilité des domaines .de, en particulier ceux signés avec DNSSEC, a été temporairement limitée.
>
> Le problème est résolu et tous les systèmes fonctionnent de nouveau normalement.
>
> La cause exacte de l'incident est encore en cours d'analyse. Les équipes techniques de DENIC poursuivent l'enquête et communiqueront des détails supplémentaires dès que des résultats fiables seront disponibles.
>
> DENIC remercie toutes les parties concernées pour leur patience et leur compréhension.

Source : [Blog DENIC](https://blog.denic.de/en/denic-reports-resolved-dnssec-disruption-affecting-de-domains/)

</section>

<section data-lang="es" class="language-content" markdown="1">

## Fallo DNSSEC en DENIC resuelto – Validación DNSSEC reactivada

**Actualización del [artículo de ayer](/freifunk/infrastruktur/2026/05/05/denic-dnssec-stoerung):** La interrupción DNSSEC en DENIC ha sido resuelta. Todos los dominios `.de` vuelven a estar accesibles.

### ¿Qué hemos hecho?

Hemos **reactivado la validación DNSSEC para la zona .de** en nuestros servidores de nombres:

<pre><code>rec_control clear-nta de.</code></pre>

El funcionamiento normal con validación DNSSEC completa en nuestros servidores DNS ha sido restablecido.

### Contexto: ¿Por qué era justificable desactivar DNSSEC?

Establecer un **Negative Trust Anchor (NTA)** es un procedimiento estandarizado descrito en [RFC 7646](https://datatracker.ietf.org/doc/html/rfc7646). Un NTA desactiva la validación DNSSEC específicamente para una zona concreta – en este caso `.de` – sin afectar a la validación de otros dominios.

Según RFC 7646, los NTA están diseñados exactamente para este tipo de situación: cuando un fallo DNSSEC no es causado por un ataque, sino por un error de configuración o una caída del lado del operador de la zona. La alternativa – que los usuarios cambien a resolvedores DNS sin validación – sería mucho más perjudicial para la seguridad, ya que desactivaría **toda** la validación DNSSEC por completo.

Una vez resuelta la interrupción, eliminamos rápidamente el NTA y restauramos la validación DNSSEC completa, tal como recomienda RFC 7646.

### Comunicado oficial de DENIC

> **6 de mayo de 2026** – Fráncfort del Meno – DENIC eG experimentó una interrupción en su servicio DNS para dominios .de. Como resultado, hubo limitaciones temporales en la accesibilidad de los dominios .de, en particular los firmados con DNSSEC.
>
> El problema ha sido resuelto y todos los sistemas funcionan con normalidad de nuevo.
>
> La causa raíz del incidente aún está siendo analizada. Los equipos técnicos de DENIC continúan investigando y compartirán más detalles tan pronto como se disponga de hallazgos fiables.
>
> DENIC agradece a todas las partes afectadas su paciencia y comprensión.

Fuente: [Blog DENIC](https://blog.denic.de/en/denic-reports-resolved-dnssec-disruption-affecting-de-domains/)

</section>

<section data-lang="ua" class="language-content" markdown="1">

## Збій DNSSEC у DENIC усунено – Валідацію DNSSEC відновлено

**Оновлення до [вчорашнього повідомлення](/freifunk/infrastruktur/2026/05/05/denic-dnssec-stoerung):** Збій DNSSEC у DENIC усунено. Усі домени `.de` знову доступні.

### Що ми зробили?

Ми **знову увімкнули валідацію DNSSEC для зони .de** на наших серверах імен:

<pre><code>rec_control clear-nta de.</code></pre>

Нормальну роботу з повною валідацією DNSSEC на наших DNS-серверах відновлено.

### Контекст: Чому вимкнення DNSSEC було виправданим?

Встановлення так званого **Negative Trust Anchor (NTA)** – це стандартизована процедура, описана в [RFC 7646](https://datatracker.ietf.org/doc/html/rfc7646). NTA вимикає валідацію DNSSEC цілеспрямовано для конкретної зони – у цьому випадку `.de` – не впливаючи на валідацію інших доменів.

Згідно з RFC 7646, NTA призначені саме для таких ситуацій: коли збій DNSSEC спричинений не атакою, а помилкою конфігурації або збоєм на стороні оператора зони. Альтернатива – перехід користувачів на DNS-резолвери без валідації – була б значно небезпечнішою, оскільки це вимкнуло б **всю** валідацію DNSSEC повністю.

Після усунення збою ми негайно видалили NTA та відновили повну валідацію DNSSEC – відповідно до рекомендацій RFC 7646.

### Офіційна заява DENIC

> **6 травня 2026** – Франкфурт-на-Майні – DENIC eG зазнала збою у своєму DNS-сервісі для доменів .de. Внаслідок цього доступність доменів .de, зокрема підписаних DNSSEC, була тимчасово обмежена.
>
> Проблему вирішено, і всі системи знову працюють у нормальному режимі.
>
> Основна причина інциденту ще аналізується. Технічні команди DENIC продовжують розслідування та повідомлять додаткові деталі, щойно будуть отримані надійні результати.
>
> DENIC дякує всім постраждалим за терпіння та розуміння.

Джерело: [Блог DENIC](https://blog.denic.de/en/denic-reports-resolved-dnssec-disruption-affecting-de-domains/)

</section>
