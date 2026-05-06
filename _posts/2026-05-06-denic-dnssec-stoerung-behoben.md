---
layout: posts
title: "DENIC DNSSEC-Störung behoben – DNSSEC-Validierung wieder aktiv"
date: 2026-05-06 06:00:00 +0200
categories: freifunk infrastruktur
translations: [en, fr, es, ua]
---

<section data-lang="de" class="language-content active" markdown="1">

## DENIC DNSSEC-Störung behoben – DNSSEC-Validierung wieder aktiv

**Update zur [gestrigen Meldung](/freifunk/infrastruktur/2026/05/05/denic-dnssec-stoerung.html):** Die DNSSEC-Störung bei der DENIC ist behoben. Alle `.de`-Domains sind wieder normal erreichbar.

### Was haben wir getan?

Wir haben die **DNSSEC-Validierung für die .de-Zone auf unseren Nameservern wieder aktiviert**:

<pre><code>rec_control clear-nta de.</code></pre>

Damit ist der reguläre Betrieb mit voller DNSSEC-Validierung auf unseren DNS-Servern wiederhergestellt.

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

**Update to [yesterday's post](/freifunk/infrastruktur/2026/05/05/denic-dnssec-stoerung.html):** The DNSSEC disruption at DENIC has been resolved. All `.de` domains are reachable again.

### What did we do?

We have **re-enabled DNSSEC validation for the .de zone** on our nameservers:

<pre><code>rec_control clear-nta de.</code></pre>

Regular operation with full DNSSEC validation on our DNS servers has been restored.

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

**Mise à jour du [post d'hier](/freifunk/infrastruktur/2026/05/05/denic-dnssec-stoerung.html) :** La perturbation DNSSEC chez DENIC est résolue. Tous les domaines `.de` sont de nouveau accessibles.

### Qu'avons-nous fait ?

Nous avons **réactivé la validation DNSSEC pour la zone .de** sur nos serveurs DNS :

<pre><code>rec_control clear-nta de.</code></pre>

Le fonctionnement normal avec validation DNSSEC complète sur nos serveurs DNS est rétabli.

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

**Actualización del [artículo de ayer](/freifunk/infrastruktur/2026/05/05/denic-dnssec-stoerung.html):** La interrupción DNSSEC en DENIC ha sido resuelta. Todos los dominios `.de` vuelven a estar accesibles.

### ¿Qué hemos hecho?

Hemos **reactivado la validación DNSSEC para la zona .de** en nuestros servidores de nombres:

<pre><code>rec_control clear-nta de.</code></pre>

El funcionamiento normal con validación DNSSEC completa en nuestros servidores DNS ha sido restablecido.

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

**Оновлення до [вчорашнього повідомлення](/freifunk/infrastruktur/2026/05/05/denic-dnssec-stoerung.html):** Збій DNSSEC у DENIC усунено. Усі домени `.de` знову доступні.

### Що ми зробили?

Ми **знову увімкнули валідацію DNSSEC для зони .de** на наших серверах імен:

<pre><code>rec_control clear-nta de.</code></pre>

Нормальну роботу з повною валідацією DNSSEC на наших DNS-серверах відновлено.

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
