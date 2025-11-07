---
layout: posts
title: "Firmware: Support-Ende für EdgeRouter X und EdgeRouter X SFP"
date: 2025-11-07 00:00:00
categories: freifunkmuc
---

## Support-Ende für EdgeRouter X und EdgeRouter X SFP

Ab voraussichtlich 2026 werden wir den **Support** für folgende Geräte einstellen:

*   **Ubiquiti EdgeRouter X (ER-X)**
*   **Ubiquiti EdgeRouter X SFP (ER-X-SFP)**

### Hintergrund

Automatische Updates von der aktuellen Firmware (basierend auf **Gluon v2023.2.x** / **OpenWRT 23.05**) auf eine Firmware auf Basis von **Gluon v2025.x/v2026.x** sind nicht möglich.

Der Grund dafür ist, dass das OEM-Layout des EdgeRouter X zwei Kernel-Slots zu je 3 MB verwendet. Ab Linux 6.6 (Commit 2967e24) passen die Kernel-Images nicht mehr in dieses Layout, und es gibt keinen automatischen Weg, das Layout auf einem laufenden Router update-sicher zu ändern.

### Manuelle Updates weiterhin möglich

Für erfahrene Nutzer stellen wir weiterhin die entsprechenden Firmware-Dateien bereit, sodass ein manuelles Rollout möglich ist.
Siehe hierzu: <https://openwrt.org/toh/ubiquiti/edgerouter_x_er-x_ka#migrating_to_2410x>
