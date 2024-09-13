---
layout: posts
title:  "Firmware Rollout auf v2024.9.1"
date:   2024-09-13 10:00:00
categories: freifunkmuc
---
 
Momentan befindet sich die Version **v2024.9.1** für stable/testing/experimental sowie **v2024.9.1-next** für den next Branch im Rollout.  
Eine wichtige Änderung in der neuen Version ist das hinzufügen eines neuen Debug Befehl per SSH so wie viele kleine Neuerungen für die next Version.  
Mit `collect-debug-info` printet der Node per SSH alle notwendigen Debug Infos die wir für eine ggf. Problem Behebung benötigen könnten.  
(Hier für geht ein expliziter dank an [Freifunk Braunschweig](https://freifunk-bs.de/) die dieses Package entwicklet haben) 

## Changelogs:
### Stable [v2024.9.1](https://github.com/freifunkMUC/site-ffm/releases/tag/v2024.9.1):
-  add collect-debug-info

### Next [v2024.9.1-next](https://github.com/freifunkMUC/site-ffm/releases/tag/v2024.9.1-next):  
- add collect-debug-info
- add new targets 
- fritzbox-7530: utilize lan1 as wan
- add ffac-mt7915-hotfix  

---