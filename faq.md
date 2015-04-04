---
layout: page
title: Frequently Asked Questions (FAQ)
permalink: /faq/
---

<script language="javascript" type="text/javascript">
function toggleNode(node)
      {
        var nodeArray = node.childNodes;
        for(i=0; i < nodeArray.length; i++)
       {
         node = nodeArray[i];
         if (node.tagName && node.tagName.toLowerCase() == 'div')
           node.style.display = (node.style.display == 'block') ? 'none' : 'block';
       }
     }
</script>

## Mitmachen

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Wer kann bei Freifunk mitmachen?
    </a></span>
    <div style="display: none;">
        Jeder :)
    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Benötige ich irgendeine Form der Mitgliedschaft?
    </a></span>
    <div style="display: none;">
        Nein, es ist keine Form der Mitgliedschaft nötig.
    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Wie teuer ist Freifunk für mich als Benutzer?
    </a></span>
    <div style="display: none;">
        Die Nutzung von Freifunk ist völlig kostenlos und unkompliziert. Siehst Du ein WLAN-Netz mit dem Namen “muenchen.freifunk.net” kannst Du es ohne Angst vor versteckten Kosten nutzen und musst dich nicht vorher kompliziert mit Deinen persönlichen Daten anmelden.
    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Ist die Nutzung von Freifunk sicher als Benutzer?
    </a></span>
    <div style="display: none;">
        Wenn Du Freifunk nutzt, dann benutzt Du ein unverschlüsseltes und offenes WLAN-Netz. Dies bringt Gefahren mit sich, denen Du dir bewusst sein solltest. Du solltest daher nur sichere Verbindungen nutzen (z.B. https im Browser verwenden). Allerdings hast Du diese Gefahr bei jedem offenen WLAN. Wenn Du genau wissen möchtest wie Du Dich und Deine Daten schützen kannst, dann schau doch bei einer Cryptoparty vorbei. Hier werden Dir die Gefahren im Netz gezeigt und Maßnahmen, wie Du Dich davor schützen kannst.
    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Ich habe keinen besonders geeigneten Standort für Freifunk. Lohnt sich überhaupt ein Knoten bei mir?
    </a></span>
    <div style="display: none;">
        Natürlich, so etwas lohnt sicher immer! Und schließlich muss immer jemand der Erste sein. Wenn Du erst einmal einen solchen Knoten hast, wird er vielleicht von anderen gefunden, benutzt und im Idealfall beschäftigen sich auch diese Personen mit Freifunk. Nur so kann die Idee wachsen! Und denke an den nächsten Besuch, der nach dem WLAN-Passwort fragt. Wäre es nicht praktisch, dann einfach auf Freifunk hinzuweisen!
    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Mit welchen Kosten habe ich zu rechnen, wenn ich einen Knoten betreiben möchte?
    </a></span>
    <div style="display: none;">
        Zunächst brauchst Du einen Router. Diesen bekommst Du für ab 16€ fix und fertig konfiguriert bei einem unserer Treffen. Falls Du eine Rechnung brauchst, einfach beim Händler Deines Vertrauens bestellen. Wir helfen dir bei unserem Treffen dann mit der Einrichtung. Das war es eigentlich schon.
    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Aber Strom braucht ein Knoten doch, das ist doch jetzt sicherlich teuer?
    </a></span>
    <div style="display: none;">
        Auch hier können wir Dich beruhigen. Das Freifunk-Einstiegsmodell braucht nicht mehr als 6€ Strom pro Jahr. Das sind gerade einmal 50 Cent im Monat.
    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Wann und wo kann man euch treffen?
    </a></span>
    <div style="display: none;">

<div markdown="1">
Wir treffen uns am letzten Mittwoch des Monats im [Chaos Computer Club München][ccc]. Die Termine werden jeweils vorher auf unserer Startseite bekannt gegeben.
</div>

    </div>
</div>

## Mitmachen als Unternehmen

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Ich bin ein Unternehmen und möchte einen Knoten betreiben. Was muss ich tun?
    </a></span>
    <div style="display: none;">

<div markdown="1">
Die einfachste Möglichkeit ist einen Koten bei uns abzuholen. Wir helfen dann auch bei der Konfiguration und geben Tipps bei der Aufstellung. Alternativ kannst Du uns über unsere [Kontakt E-Mail Adresse][kontakt] erreichen.
</div>

    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Ich brauche aber eine Quittung!
    </a></span>
    <div style="display: none;">
        Wir können zur Zeit keine Quittungen für bei uns erworbene Hardware ausstellen. Du kannst die Hardware aber auch selber beschaffen und wir helfen anschließend bei der Einrichtung.
    </div>
</div>

## Eigene Knoten betreiben

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Ich habe einen Router gekauft, was mache ich jetzt?
    </a></span>
    <div style="display: none;">
        
<div markdown="1">
Du musst jetzt die [Münchner Freifunk-Firmware][firmware] auf Deinem Router [installieren][flashen] und anschließend [konfigurieren][config]. Wenn Du Hilfe benötigst kannst Du uns auch gerne persönlich treffen und wir helfen Dir dann bei der Konfiguration. Wo und wann Du uns treffen kannst findest Du [hier][treffen].
</div>

    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Ist das Betreiben eines Freifunk-Knotens sicher?
    </a></span>
    <div style="display: none;">
        Grundsätzlich ja. Wir benutzen eine spezielle Software, die auf dem Router installiert wird. Diese Software sorgt für Deine Sicherheit und blockiert den Zugang zu Deinem Heimnetzwerk. Jemand, der über Deinen Freifunk-Knoten das Netzwerk benutzt, kann somit keinerlei Schandtaten in Deinem Netzwerk anstellen.
    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Wie schnell ist der Zugang?
    </a></span>
    <div style="display: none;">
        Aktuell erreichen die kleinsten Knoten ca. 6 Mbit/s. Da zwischen einem Knoten und den zentralen Gateways eine verschlüsselte VPN-Verbindung aufgebaut wird, ist hier der Prozessor der kleinen Knoten der limitierende Faktor. Bei leistungsfähigeren (und teureren) Geräten ist die Performance besser.
    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Wie viele Personen nutzen das Netz?
    </a></span>
    <div style="display: none;">

<div markdown="1">
Das wissen wir nicht. Du kannst über die [Karte][geomap] sehen wie viele Geräte aktuell verbunden sind. Das ist eine schöne Statistik, aber genaue Aussagen können und wollen wir nicht treffen. Schließlich ist Freifunk anonym und frei.
</div>

    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Welche Geräte werden unterstützt?
    </a></span>
    <div style="display: none;">
        
<div markdown="1">
Aktuell unterstützen wir viele Geräte von TP-Link und Ubiquiti. Schau am besten auf der [Firmware Seite][firmware] vorbei und überprüfe, ob Dein Modell auch dabei ist.
Prinzipiell werden (fast) alle Geräte auf denen OpenWRT als Firmware installiert werden kann unterstützt. Wenn Du Dir unsicher bist, kannst Du Dich gerne bei uns [melden][kontakt].
</div>

    </div>
</div>

## Rechtliches

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Was heißt “frei” bei Freifunk?
    </a></span>
    <div style="display: none;">
        Frei im Sinne von freier Rede. Zensurfrei. Frei im Sinne von ‘Ohne weitere Kosten’. Frei im Sinne von “komplett ohne Einschränkungen”. Wir verstehen frei als öffentlich zugänglich, nicht kommerziell, im Besitz der Gemeinschaft und unzensiert.
    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Was ist mit der Störerhaftung?
    </a></span>
    <div style="display: none;">

<div markdown="1">
Wir betreiben zentrale Zugangspunkte in Deutschland, die den Internetverkehr ins Ausland umleiten. Dadurch sind die Betreiber eines Knotens die ihren Internetzugang teilen nicht identifizierbar. Damit Freifunk funktionieren kann, müssen sich aber alle Benutzer an die [Nutzungsbedingungen][nutzungsbedingungen] halten.
</div>

    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Ist Freifunk dann nicht die Möglichkeit um es für illegale Zwecke zu verwenden?
    </a></span>
    <div style="display: none;">

<div markdown="1">
Grundsätzlich hat sich erst einmal jeder Nutzer an gewisse Regeln zu halten, die unter dem [Pico Peering Agreement][nutzungsbedingungen] aufgeführt sind.
Natürlich sind solche Regeln keine Garantie für ein vorbildliches Verhalten aller Anwender, aber es gibt ein paar Punkte, die gegen eine illegale Nutzung sprechen:

Das Freifunknetz ermöglicht unter anderem Zugang zum Internet. Dieser Zugang ist nicht dafür gedacht, um große Datenmengen (z.B. Downloads von Filmen) zu ermöglichen, sondern dient hauptsächlich der Informationsbeschaffung. Dementsprechend ist der Anschluss nicht so schnell wie ein heimischer DSL-Anschluss.
Unser Dienstleister für die Anonymisierung kostet knapp 10 € pro Monat und ist wesentlich schneller.
Grundsätzlich sollten wir damit aufhören eine Technologie an dem größt möglichen Schaden zu messen. Freifunk bietet uns viele tolle Möglichkeiten, die wir nutzen sollten.
Durch den anonymen Zugang zum Internet wird die Verfolgung von Straftaten erschwert!

Filesharing wird klassisch nicht in offenen WLANs betrieben. An dem heimischen Internetanschluss werden sehr viel höhere Bandbreiten erzielt, wodurch ein offenes WLAN-Netz, aufgrund der Performance, uninteressant wird.
Weiterhin sind Rechtsverletzungen in offenen WLAN-Netzen bisher nicht in nennenswertem Umfang bekannt geworden. Zusätzlich geht der Gesetzgeber auch davon aus, dass der Zugang zum Internet grundsätzlich anonym verwendet werden kann.
</div>

    </div>
</div>

## Technisches

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Wie kann ich den Namen oder die Koordinaten ändern und die Bandbreite beschränken?
    </a></span>
    <div style="display: none;">

<div markdown="1">
Willst Du die Konfiguration Deines Knoten ändern, musst Du in den Configmode wechseln. Im ConfigMode ist der Knoten auf allen LAN Ports (Gelbe Buchse) erreichbar. Die Weboberfläche ist über [http://192.168.1.1][configmode] erreichbar.
</div>

    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Wie komme ich in den Configmode?
    </a></span>
    <div style="display: none;">

<div markdown="1">
Schalte den Knoten ein und warte bis er gestartet ist, dies dauert je nach Modell bis zu 2 Minuten. Ist der Knoten komplett eingeschaltet und betriebsbereit, blinkt die Lampe bei dem WLAN-Symbol. Der Knoten kann nun in den Configmode versetzt werden, indem die QSS Taste, der kleine Taster auf der Rückseite des Gerätes, mindestens 5 Sekunden lang gedrückt wird. Im Zweifel die Taste einfach so lange halten bis die Lampen des Freifunk-Knoten einmal gemeinsam aufleuchten.
</div>

    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Ich möchte meinem Freifunk-Knoten den Zugang zum Internet (Uplink) durch mein bestehendes WLAN geben (Uplink via. WLAN)
    </a></span>
    <div style="display: none;">

<div markdown="1">
Wir raten generell von so einem Setup ab da es mehrere Nachteile hat:

Die Hardware muss im normalen Setup bereits zwei WLANs bereitstellen (das normale, sichtbare Netz sowie das Mesh-Adhoc-WLAN). Für das beschriebene Setup müsste der Chip nun zusätzlich noch in einem dritten WLAN als Client agieren – alleine dadurch steigt das Fehlerrisiko an und auch die mögliche Datenrate sinkt.
Zudem muss, damit das Ganze funktioniert, das “andere” WLAN auf dem gleichen Kanal arbeiten – ein WLAN-Chip kann nur auf einer Frequenz gleichzeitig arbeiten. Dadurch halbiert man die mögliche Datenrate gleich noch einmal. Sollte das andere WLAN nun nicht auf Kanal 1 müsste man den Freifunk-Router auf den passenden Kanal umziehen was dann aber direkt die Mesh-Funktionalität kaputt macht da dieses ja nun auf einem anderen Kanal wäre.
Zuguterletzt muss man dafür selber an dem Router Hand anlegen und diese Konfig kann(!) durch das Autoupdate der Knoten kaputt gehen da wir es offiziell nicht unterstützen.
So oder so: das bringt deutlich mehr Probleme mit als es Vorteile hat.
</div>

    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Mein Knoten funktioniert nicht am Gastzugang der FritzBox
    </a></span>
    <div style="display: none;">

<div markdown="1">
AVM hat mit dem Update auf FritzOS 6.x einen Filter auf den Gastzugang gelegt. Dieser verursacht immer wieder Probleme. Navigiere bitte zu Internet > Filter > Zugangsprofile und bearbeite das Profil “Gast”.
Dort sollte dann unter gesperrte Netzwerkanwendungen die Option “alles außer Surfen und Mailen” existieren. Dies bitte entfernen, da die VPN-Verbindung (Port 10000) leider davon blockiert wird. Alles andere zu Testzwecken auch. Nun sollte sich der Knoten mit den Gateways wieder verbinden können und ist trotzdem zusätzlich über den Gastzugang virtuell von deinem Heimnetz getrennt.
</div>

    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Wie ändere ich den Funkkanal?
    </a></span>
    <div style="display: none;">

<div markdown="1">
Freifunk München nutzt den Kanal 6. Diesen Kanal kann man auch nicht ändern, da alle Freifunk-Knoten auf dem gleichen Kanal senden müssen. Ansonsten würden sich die Freifunk-Knoten nicht mehr untereinander “sehen”. In der Regel weichen normale Router in der Nachbarschaft automatisch auf einen anderen Kanal aus, falls es zu Stau auf dem aktuellen Kanal kommt. Bei manchen Geräten passiert diese Überprüfung häufig leider nur beim Neustart. Evtl. also etwas abwarten und dann freie Fahrt für Freifunk auf Kanal 6.
</div>

    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Ich möchte meinen Knoten Remote administrieren. Geht das?
    </a></span>
    <div style="display: none;">

<div markdown="1">
Ja. Standardmäßig ist ein Knoten so konfiguriert, dass dort niemand Zugriff hat. Aber im Expertenmodus, den man über der Configmode erreichen kann, kannst Du ein Passwort oder besser einen SSH-Schlüssel hinterlegen. Danach kommst Du per SSH als User root auf deinen Freifunk-Knoten entweder in dessen lokalen Netz über die IPv6-Adresse fdef:ffc0:4fff::1 oder über seine globale IPv6-Adresse, die Du aus der Detailansicht deines Knotens in der [Knotenliste][nodelist] entnehmen kannst.
</div>

    </div>
</div>

<div><span onclick="toggleNode(this.parentNode); return  false;"><a>
        Wie funktioniert so ein Router?
    </a></span>
    <div style="display: none;">

<div markdown="1">
![Level 2](/assets/router-interfaces.png)
</div>

    </div>
</div>

Quelle: [Freifunk Magdeburg][ffmd]

[ffmd]: http://md.freifunk.net
[ccc]: http://muc.ccc.de
[kontakt]: /kontakt/
[firmware]: /firmware/
[flashen]: /router-flashen/
[config]: /router-konfigurieren/
[treffen]: /mitmachen/
[nutzungsbedingungen]: /nutzungsbedingungen/
[configmode]: http://192.168.1.1/
[geomap]: http://map.freifunk-muenchen.de/geomap.html
[nodelist]: http://map.freifunk-muenchen.de/list.html
