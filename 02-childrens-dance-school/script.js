/* DEMO — ThinkFirst Studios · [Your name here] — fictional business. */
// CLASS + SEASON DATA — replace wholesale from the client's registration export
// shape: { id, name, discipline, ageBand, level, day, time, minutes, studio, routines, tuition, cap, registerUrl }
var CLASSES = [
 {
  "id": "k00",
  "name": "[PRE-BALLET — CONFIRM]",
  "discipline": "ballet",
  "ageBand": "3-4",
  "level": "[LEVEL 1 — CONFIRM]",
  "day": 5,
  "time": "[9:00am]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k01",
  "name": "[CREATIVE MOVEMENT — CONFIRM]",
  "discipline": "jazz",
  "ageBand": "3-4",
  "level": "[LEVEL 1 — CONFIRM]",
  "day": 1,
  "time": "[4:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k02",
  "name": "[BALLET AND TAP COMBO — CONFIRM]",
  "discipline": "tap",
  "ageBand": "5-6",
  "level": "[LEVEL 1 — CONFIRM]",
  "day": 0,
  "time": "[4:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k03",
  "name": "[BALLET 1 — CONFIRM]",
  "discipline": "ballet",
  "ageBand": "5-6",
  "level": "[LEVEL 1 — CONFIRM]",
  "day": 2,
  "time": "[4:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k04",
  "name": "[ACRO 1 — CONFIRM]",
  "discipline": "acro",
  "ageBand": "5-6",
  "level": "[LEVEL 1 — CONFIRM]",
  "day": 5,
  "time": "[10:00am]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k05",
  "name": "[BALLET 2 — CONFIRM]",
  "discipline": "ballet",
  "ageBand": "7-9",
  "level": "[LEVEL 2 — CONFIRM]",
  "day": 0,
  "time": "[5:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k06",
  "name": "[TAP 2 — CONFIRM]",
  "discipline": "tap",
  "ageBand": "7-9",
  "level": "[LEVEL 2 — CONFIRM]",
  "day": 1,
  "time": "[5:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k07",
  "name": "[JAZZ 2 — CONFIRM]",
  "discipline": "jazz",
  "ageBand": "7-9",
  "level": "[LEVEL 2 — CONFIRM]",
  "day": 3,
  "time": "[5:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k08",
  "name": "[ACRO 2 — CONFIRM]",
  "discipline": "acro",
  "ageBand": "7-9",
  "level": "[LEVEL 2 — CONFIRM]",
  "day": 5,
  "time": "[11:00am]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k09",
  "name": "[BALLET 3 — CONFIRM]",
  "discipline": "ballet",
  "ageBand": "10-12",
  "level": "[LEVEL 3 — CONFIRM]",
  "day": 1,
  "time": "[6:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k10",
  "name": "[JAZZ 3 — CONFIRM]",
  "discipline": "jazz",
  "ageBand": "10-12",
  "level": "[LEVEL 3 — CONFIRM]",
  "day": 2,
  "time": "[6:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k11",
  "name": "[TAP 3 — CONFIRM]",
  "discipline": "tap",
  "ageBand": "10-12",
  "level": "[LEVEL 3 — CONFIRM]",
  "day": 4,
  "time": "[5:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k12",
  "name": "[BALLET 4 — CONFIRM]",
  "discipline": "ballet",
  "ageBand": "13",
  "level": "[LEVEL 4 — CONFIRM]",
  "day": 0,
  "time": "[7:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k13",
  "name": "[JAZZ 4 — CONFIRM]",
  "discipline": "jazz",
  "ageBand": "13",
  "level": "[LEVEL 4 — CONFIRM]",
  "day": 3,
  "time": "[7:00pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 },
 {
  "id": "k14",
  "name": "[ACRO 3 — CONFIRM]",
  "discipline": "acro",
  "ageBand": "13",
  "level": "[LEVEL 3 — CONFIRM]",
  "day": 4,
  "time": "[6:30pm]",
  "minutes": "[45]",
  "studio": "[STUDIO — CONFIRM]",
  "routines": "[1]",
  "tuition": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "registerUrl": "[REGISTRATION URL — CONFIRM]"
 }
];
var AGES = [{"id": "3-4", "name": "[AGE 3–4]"}, {"id": "5-6", "name": "[AGE 5–6]"}, {"id": "7-9", "name": "[AGE 7–9]"}, {"id": "10-12", "name": "[AGE 10–12]"}, {"id": "13", "name": "[AGE 13+]"}];
var DISCIPLINES = [{"id": "ballet", "name": "[BALLET]"}, {"id": "tap", "name": "[TAP]"}, {"id": "jazz", "name": "[JAZZ]"}, {"id": "acro", "name": "[ACRO]"}];
var WDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
(function () {
  var root = document.documentElement; root.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.__reduce = reduce;
  document.querySelectorAll("[data-year]").forEach(function (e) { e.textContent = new Date().getFullYear(); });
  var day = new Date().getDay();
  document.querySelectorAll('tr[data-day="' + day + '"]').forEach(function (t) { t.classList.add("is-today"); });

  var head = document.querySelector("[data-head]"), btn = document.querySelector(".menu-btn"), nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.style.setProperty("--nav-top", head.getBoundingClientRect().bottom + "px");
      var o = nav.classList.toggle("is-open"); btn.setAttribute("aria-expanded", o); btn.textContent = o ? "Close" : "Menu";
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("is-open")) { btn.click(); btn.focus(); } });
  }
  var hero = document.querySelector("[data-hero]"), mbar = document.querySelector("[data-mbar]"), trigger = document.querySelector("[data-mbar-after]") || hero;
  function onScroll() {
    var y = window.scrollY;
    if (head) head.classList.toggle("is-condensed", reduce || y > 110);
    if (mbar) mbar.classList.toggle("show", reduce || !trigger || trigger.getBoundingClientRect().bottom < 0);
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  var rv = document.querySelectorAll(".rv");
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }); }, { rootMargin: "0px 0px -6% 0px", threshold: .06 });
    rv.forEach(function (e) { io.observe(e); });
  } else rv.forEach(function (e) { e.classList.add("is-in"); });

  // slot pickers echo into a summary
  document.querySelectorAll("[data-slots]").forEach(function (box) {
    var out = document.querySelector(box.getAttribute("data-slots"));
    box.addEventListener("change", function (e) { if (e.target.name === "slot" && out) out.textContent = e.target.getAttribute("data-label"); });
  });

  // demo forms: validate, never send
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); var bad = null;
      form.querySelectorAll("[required]").forEach(function (r) {
        var b = r.type === "checkbox" ? !r.checked : r.type === "radio" ? !form.querySelector('[name="' + r.name + '"]:checked') : (!String(r.value).trim() || (r.type === "email" && !/^\S+@\S+\.\S+$/.test(r.value)));
        r.setAttribute("aria-invalid", b);
        if (b && !bad) bad = r;
      });
      if (bad) { var st = bad.closest("[data-step]"); if (st && st.hidden) st.hidden = false; bad.focus(); return; }
      var s = form.querySelector(".form-status"); s.hidden = false; s.textContent = form.getAttribute("data-ok") + " — Demo only: nothing was sent, stored or charged."; s.focus();
    });
  });
})();


(function () {
  var reduce = window.__reduce;
  if (!document.querySelector("[data-hero]")) document.body.classList.add("nohero");
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
  function ph(s) { return '<span class="ph">' + esc(s) + "</span>"; }
  function pad(n) { return "[" + (n < 10 ? "0" : "") + n + "]"; }
  function nm(arr, id) { for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i].name; return id; }
  function byId(id) { for (var i = 0; i < CLASSES.length; i++) if (CLASSES[i].id === id) return CLASSES[i]; return null; }
  function seasonTotal() { return ph("$[X,XXX]") + " " + ph("[ESTIMATE — DERIVED FROM PLACEHOLDER FIGURES]"); }

  // ---- the finder: words only, never a photograph, in any state ----
  var state = { age: [], discipline: [] };
  function readURL() { var p = new URLSearchParams(location.search); state.age = p.get("age") ? p.get("age").split(",") : []; state.discipline = p.get("discipline") ? p.get("discipline").split(",") : []; }
  function match(c, ign) { return (ign === "age" || !state.age.length || state.age.indexOf(c.ageBand) > -1) && (ign === "discipline" || !state.discipline.length || state.discipline.indexOf(c.discipline) > -1); }
  function lab(k) { var on = state[k].map(function (v) { return nm(k === "age" ? AGES : DISCIPLINES, v); }); return on.length ? on.join(" + ") : (k === "age" ? "all ages" : "all disciplines"); }
  var list = document.querySelector("[data-classes]");
  function row(c) {
    return '<details class="crow" data-id="' + c.id + '"><summary><span class="cn">' + esc(c.name) + '</span><span class="cm">' + ph(nm(AGES, c.ageBand)) + " " + ph(c.level) + " · " + WDAYS[c.day] + " " + ph(c.time) + " · " + ph(c.minutes) + ' min</span>' +
      '<span class="cp"><b>' + ph(c.tuition + "/month") + "</b>season " + ph("$[X,XXX]") + "</span></summary>" +
      '<div class="cx"><dl><div><dt>Level</dt><dd>' + ph(c.level) + "</dd></div><div><dt>Age range</dt><dd>" + ph("[AGE RANGE — CONFIRM]") + "</dd></div><div><dt>Class length</dt><dd>" + ph("[CLASS LENGTH — CONFIRM]") + "</dd></div><div><dt>Studio</dt><dd>" + ph(c.studio) + "</dd></div>" +
      "<div><dt>Routines</dt><dd>" + ph("[HOW MANY ROUTINES — CONFIRM]") + "</dd></div><div><dt>Tuition</dt><dd>" + ph(c.tuition + "/month") + "</dd></div><div><dt>Season total</dt><dd>" + seasonTotal() + "</dd></div><div><dt>Places</dt><dd>" + ph(c.cap) + "</dd></div></dl>" +
      '<p><a class="btn" href="register.html?class=' + c.id + '" data-scheduler-target="' + esc(c.registerUrl) + '">Register for the season</a> <a class="link-arrow" href="costs.html">What a season costs →</a></p></div></details>';
  }
  if (list) list.innerHTML = CLASSES.map(row).join("");
  function paint(push) {
    var any = state.age.length + state.discipline.length > 0, shown = 0;
    if (list && !reduce) list.style.minHeight = list.offsetHeight + "px";
    document.querySelectorAll(".crow").forEach(function (r) {
      var m = match(byId(r.getAttribute("data-id"))); if (m) shown++;
      r.classList.toggle("is-match", any && m); r.classList.remove("is-gone"); r.classList.toggle("is-out", !m);
      if (!m) { if (reduce) r.classList.add("is-gone"); else setTimeout(function () { if (r.classList.contains("is-out")) r.classList.add("is-gone"); }, 160); }
    });
    if (list) setTimeout(function () { list.style.minHeight = ""; }, 340);
    document.querySelectorAll(".chip").forEach(function (b) {
      var k = b.getAttribute("data-f"), v = b.getAttribute("data-v"), n = 0;
      b.setAttribute("aria-pressed", state[k].indexOf(v) > -1);
      CLASSES.forEach(function (c) { if ((k === "age" ? c.ageBand : c.discipline) === v && match(c, k)) n++; });
      b.querySelector("[data-cnt]").textContent = pad(n);
    });
    document.querySelectorAll("[data-readout]").forEach(function (r) {
      r.style.opacity = 0; setTimeout(function () { r.textContent = pad(shown) + " of " + pad(CLASSES.length) + " classes · " + lab("age") + " × " + lab("discipline"); r.style.opacity = 1; }, reduce ? 0 : 140);
    });
    var em = document.querySelector("[data-empty]");
    if (em) {
      em.hidden = shown > 0 || !list;
      if (!shown) {
        var near = "";
        if (state.age.length) { var ds = CLASSES.filter(function (c) { return c.ageBand === state.age[0]; }).map(function (c) { return nm(DISCIPLINES, c.discipline); }); near = nm(AGES, state.age[0]) + " has " + ds.filter(function (x, i) { return ds.indexOf(x) === i; }).join(", ") + "."; }
        else if (state.discipline.length) { var as = CLASSES.filter(function (c) { return c.discipline === state.discipline[0]; }).map(function (c) { return nm(AGES, c.ageBand); }); near = nm(DISCIPLINES, state.discipline[0]) + " runs for " + as.filter(function (x, i) { return as.indexOf(x) === i; }).join(", ") + "."; }
        em.innerHTML = "No class matches " + esc(lab("age")) + " × " + esc(lab("discipline")) + ". Nearest: " + esc(near) + ' <button type="button" class="clear" data-clear>Clear</button>';
      }
    }
    var q = new URLSearchParams(); if (state.age.length) q.set("age", state.age.join(",")); if (state.discipline.length) q.set("discipline", state.discipline.join(","));
    var qs = q.toString();
    document.querySelectorAll("[data-carry]").forEach(function (a) { a.href = a.getAttribute("href").split("?")[0] + (qs ? "?" + qs : ""); });
    if (list && push !== null) { var url = location.pathname + (qs ? "?" + qs : "") + location.hash; if (push) history.pushState(null, "", url); else history.replaceState(null, "", url); }
  }
  if (list) {
    readURL(); paint(false);
    document.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (b) { var k = b.getAttribute("data-f"), v = b.getAttribute("data-v"), i = state[k].indexOf(v); if (i > -1) state[k].splice(i, 1); else state[k].push(v); paint(true); }
      if (e.target.closest("[data-clear]")) { state = { age: [], discipline: [] }; paint(true); }
    });
    window.addEventListener("popstate", function () { readURL(); paint(null); });
  }

  // ---- the week: day columns, rows by age band; stacked day blocks on a phone ----
  var mq = window.matchMedia("(max-width: 760px)");
  function cellFor(d, a) {
    var cs = CLASSES.filter(function (c) { return c.day === d && c.ageBand === a; });
    if (!cs.length) return null;
    return cs.map(function (c) { return '<div class="wc"><b>' + esc(c.name) + "</b><span>" + ph(c.level) + "</span><span>" + ph(c.time) + " · " + ph(c.minutes) + " min · " + ph(c.studio) + "</span><span>" + ph(c.cap) + '</span><a href="register.html?class=' + c.id + '" data-scheduler-target="' + esc(c.registerUrl) + '">Register<span class="sr"> for ' + esc(c.name) + "</span></a></div>"; }).join("");
  }
  function renderWeek(el) {
    var cap = "<caption>The week · " + ph("[SCHEDULE LAST UPDATED — CONFIRM]") + "</caption>", h, d, a, x;
    if (!mq.matches) {
      h = '<table class="wk">' + cap + '<thead><tr><th scope="col">Age band</th>' + WDAYS.map(function (w) { return '<th scope="col">' + w + "</th>"; }).join("") + "</tr></thead><tbody>";
      AGES.forEach(function (ag) { h += '<tr><th scope="row">' + ph(ag.name) + "</th>"; for (d = 0; d < 6; d++) { x = cellFor(d, ag.id); h += x ? "<td>" + x + "</td>" : '<td class="empty">—<span class="sr"> no class</span></td>'; } h += "</tr>"; });
    } else {
      h = '<table class="wk wk--m reflow">' + cap + '<thead><tr><th scope="col">Day</th>' + AGES.map(function (ag) { return '<th scope="col">' + esc(ag.name) + "</th>"; }).join("") + "</tr></thead><tbody>";
      for (d = 0; d < 6; d++) { h += '<tr><th scope="row">' + WDAYS[d] + "</th>"; AGES.forEach(function (ag) { x = cellFor(d, ag.id); h += '<td data-l="' + esc(ag.name) + '"' + (x ? ">" + x : ' class="empty">—') + "</td>"; }); h += "</tr>"; }
    }
    el.innerHTML = h + "</tbody></table>";
  }
  var weeks = document.querySelectorAll("[data-week]");
  weeks.forEach(renderWeek);
  var rr = function () { weeks.forEach(renderWeek); };
  if (mq.addEventListener) mq.addEventListener("change", rr); else mq.addListener(rr);

  // ---- routine count in the cost table comes from the same data ----
  var rts = CLASSES.map(function (c) { return c.routines; }).filter(function (x, i, a) { return a.indexOf(x) === i; });
  document.querySelectorAll("[data-routines]").forEach(function (el) { el.textContent = rts.join("/") + " per class"; });

  // ---- the season line draws once; fee nodes land last ----
  var seasons = document.querySelectorAll("[data-season]");
  if (reduce || !("IntersectionObserver" in window)) seasons.forEach(function (s) { s.classList.add("is-drawn"); });
  else { var so = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-drawn"); so.unobserve(en.target); } }); }, { threshold: .25 }); seasons.forEach(function (s) { so.observe(s); }); }
  // cost table <-> season line
  function hl(id, on) { document.querySelectorAll("#ms-" + id).forEach(function (m) { m.classList.toggle("hl", on); }); }
  document.querySelectorAll("[data-ms]").forEach(function (a) {
    var id = a.getAttribute("data-ms");
    ["mouseenter", "focus"].forEach(function (ev) { a.addEventListener(ev, function () { hl(id, true); }); });
    ["mouseleave", "blur"].forEach(function (ev) { a.addEventListener(ev, function () { hl(id, false); }); });
    a.addEventListener("click", function () { hl(id, true); setTimeout(function () { hl(id, false); }, 1600); });
  });

  // ---- register: the class arrives pre-selected; the cost is restated ----
  var pick = document.querySelector("[data-regpick]");
  if (pick) {
    var sum = function (c) {
      var v = c ? { name: esc(c.name), level: ph(c.level), age: ph(nm(AGES, c.ageBand)), day: WDAYS[c.day], time: ph(c.time), len: ph(c.minutes) + " min", tuition: ph(c.tuition + "/month") } : {};
      document.querySelectorAll("[data-s]").forEach(function (d) { d.innerHTML = v[d.getAttribute("data-s")] || "—"; });
      var rc = document.querySelector("[data-regcost]");
      if (rc) rc.innerHTML = '<table class="tbl reflow"><caption>The season for ' + (c ? esc(c.name) : "this class") + " · " + ph("[ESTIMATE — DERIVED FROM PLACEHOLDER FIGURES]") + '</caption><thead><tr><th scope="col">Fee</th><th scope="col">Amount</th><th scope="col">When it falls due</th></tr></thead><tbody>' +
        [["Registration fee", "[REGISTRATION FEE — CONFIRM]", "[AUG 00]"], ["Tuition", (c ? c.tuition : "$[XXX]") + "/month × [0] months", "Monthly from [SEP 00]"], ["Costumes", "[COSTUME FEE PER ROUTINE — CONFIRM] × " + (c ? c.routines : "[0]") + " routine", "[NOV 00]"],
         ["Tights and shoes", "[TIGHTS AND SHOES — CONFIRM]", "Before [SEP 00]"], ["Recital tickets", "[RECITAL TICKETS — CONFIRM]", "[APR 00]"], ["Recital media", "[RECITAL MEDIA FEE — CONFIRM]", "[DUE DATE — CONFIRM]"]].map(function (r) {
          return '<tr><th scope="row">' + r[0] + '</th><td data-l="Amount">' + ph(r[1]) + '</td><td data-l="When it falls due">' + ph(r[2]) + "</td></tr>"; }).join("") +
        '</tbody><tfoot><tr><th scope="row">Season total</th><td data-l="Season total" colspan="2"><span class="total">' + ph("$[X,XXX]") + "</span></td></tr></tfoot></table>";
    };
    var pre = byId(new URLSearchParams(location.search).get("class") || "");
    if (pre) { pick.innerHTML = '<div class="chosen"><input type="hidden" name="class" value="' + pre.id + '"><strong>' + esc(pre.name) + "</strong><span>" + ph(nm(AGES, pre.ageBand)) + " " + WDAYS[pre.day] + " " + ph(pre.time) + '</span><a class="link-arrow" href="register.html">Choose a different class</a></div>'; sum(pre); }
    else {
      var h = '<div class="pick" role="radiogroup" aria-label="Choose a class">';
      AGES.forEach(function (ag) { h += '<p class="pick-band">' + esc(ag.name) + "</p>"; CLASSES.filter(function (c) { return c.ageBand === ag.id; }).forEach(function (c, k) { h += '<label><input type="radio" name="class" value="' + c.id + '" required> <span>' + esc(c.name) + " · " + WDAYS[c.day] + " " + ph(c.time) + " · " + ph(c.tuition + "/month") + "</span></label>"; }); });
      pick.innerHTML = h + "</div>";
      pick.addEventListener("change", function (e) { if (e.target.name === "class") sum(byId(e.target.value)); });
      sum(null);
    }
  }
})();

