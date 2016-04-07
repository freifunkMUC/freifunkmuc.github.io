### Treffen

Wir treffen uns immer am letzten Mittwoch des Monats im [muCCC](http://muc.ccc.de) ([Schleißheimer Str. 41](http://osm.org/go/0JAf0IVLh?node=2012031859)).

Das nächste Treffen findet am <strong><span id="date">letzten Mittwoch des Monats</span> um 20 Uhr</strong> statt.

Es können vor Ort gleich ein fertig konfigurierter Router, Flyer und Sticker mitgenommen werden.

<script type="text/javascript">
  $.get("data/treffen.ics").then(renderDate);

  function renderDate(data) {
    var jCal = ICAL.parse(data);
    var comp = new ICAL.Component(jCal);
    var vevents = comp.getAllSubcomponents('vevent');
    var ev = new ICAL.Event(vevents[0]);
    var time = ICAL.Time.fromJSDate(new Date());
    var expand = ev.iterator(time);
    var next = expand.next();
    var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    var date = next.toJSDate().toLocaleString("de-DE", options);
    document.getElementById('date').innerHTML = date;
  }
</script>

