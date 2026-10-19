/* DEMO — ThinkFirst Studios · [Your name here] — fictional business. */
// COURSE + SOCIAL DATA — replace wholesale from the client's booking export
// shape: { id, name, style, level, startDate, weeks, day, time, minutes, partnerRequired, price, cap, bookUrl }
var COURSES = [
 {
  "id": "m00",
  "name": "[SALSA BEGINNER COURSE — CONFIRM]",
  "style": "salsa",
  "level": "beg",
  "startDate": "[MAR 00]",
  "weeks": "[6]",
  "day": 0,
  "time": "[7:00pm]",
  "minutes": "[60]",
  "partnerRequired": "[PARTNER REQUIRED? — CONFIRM]",
  "price": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "bookUrl": "[BOOKING URL — CONFIRM]"
 },
 {
  "id": "m01",
  "name": "[BACHATA BEGINNER COURSE — CONFIRM]",
  "style": "bachata",
  "level": "beg",
  "startDate": "[MAR 00]",
  "weeks": "[6]",
  "day": 1,
  "time": "[7:00pm]",
  "minutes": "[60]",
  "partnerRequired": "[PARTNER REQUIRED? — CONFIRM]",
  "price": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "bookUrl": "[BOOKING URL — CONFIRM]"
 },
 {
  "id": "m02",
  "name": "[SWING BEGINNER COURSE — CONFIRM]",
  "style": "swing",
  "level": "beg",
  "startDate": "[APR 00]",
  "weeks": "[6]",
  "day": 2,
  "time": "[7:30pm]",
  "minutes": "[60]",
  "partnerRequired": "[PARTNER REQUIRED? — CONFIRM]",
  "price": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "bookUrl": "[BOOKING URL — CONFIRM]"
 },
 {
  "id": "m03",
  "name": "[BALLROOM BEGINNER COURSE — CONFIRM]",
  "style": "ballroom",
  "level": "beg",
  "startDate": "[APR 00]",
  "weeks": "[6]",
  "day": 3,
  "time": "[7:00pm]",
  "minutes": "[60]",
  "partnerRequired": "[PARTNER REQUIRED? — CONFIRM]",
  "price": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "bookUrl": "[BOOKING URL — CONFIRM]"
 },
 {
  "id": "m04",
  "name": "[TANGO BEGINNER COURSE — CONFIRM]",
  "style": "tango",
  "level": "beg",
  "startDate": "[MAY 00]",
  "weeks": "[6]",
  "day": 6,
  "time": "[5:00pm]",
  "minutes": "[60]",
  "partnerRequired": "[PARTNER REQUIRED? — CONFIRM]",
  "price": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "bookUrl": "[BOOKING URL — CONFIRM]"
 },
 {
  "id": "m05",
  "name": "[SALSA IMPROVERS — CONFIRM]",
  "style": "salsa",
  "level": "imp",
  "startDate": "[MAR 00]",
  "weeks": "[6]",
  "day": 0,
  "time": "[8:15pm]",
  "minutes": "[60]",
  "partnerRequired": "[PARTNER REQUIRED? — CONFIRM]",
  "price": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "bookUrl": "[BOOKING URL — CONFIRM]"
 },
 {
  "id": "m06",
  "name": "[SWING IMPROVERS — CONFIRM]",
  "style": "swing",
  "level": "imp",
  "startDate": "[APR 00]",
  "weeks": "[6]",
  "day": 2,
  "time": "[8:45pm]",
  "minutes": "[60]",
  "partnerRequired": "[PARTNER REQUIRED? — CONFIRM]",
  "price": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "bookUrl": "[BOOKING URL — CONFIRM]"
 },
 {
  "id": "m07",
  "name": "[BALLROOM INTERMEDIATE — CONFIRM]",
  "style": "ballroom",
  "level": "int",
  "startDate": "[MAY 00]",
  "weeks": "[6]",
  "day": 3,
  "time": "[8:15pm]",
  "minutes": "[60]",
  "partnerRequired": "[PARTNER REQUIRED? — CONFIRM]",
  "price": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "bookUrl": "[BOOKING URL — CONFIRM]"
 },
 {
  "id": "m08",
  "name": "[BACHATA IMPROVERS — CONFIRM]",
  "style": "bachata",
  "level": "imp",
  "startDate": "[MAY 00]",
  "weeks": "[6]",
  "day": 1,
  "time": "[8:15pm]",
  "minutes": "[60]",
  "partnerRequired": "[PARTNER REQUIRED? — CONFIRM]",
  "price": "$[XXX]",
  "cap": "[PLACES REMAINING — CONFIRM]",
  "bookUrl": "[BOOKING URL — CONFIRM]"
 }
];
var STYLES = [{"id": "salsa", "name": "[SALSA]"}, {"id": "bachata", "name": "[BACHATA]"}, {"id": "swing", "name": "[SWING]"}, {"id": "ballroom", "name": "[BALLROOM]"}, {"id": "tango", "name": "[ARGENTINE TANGO]"}];
var LEVELS = [{"id": "beg", "name": "[BEGINNER — CONFIRM]"}, {"id": "imp", "name": "[IMPROVER — CONFIRM]"}, {"id": "int", "name": "[INTERMEDIATE — CONFIRM]"}];
var DAYS7 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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
  function nm(a, id) { for (var i = 0; i < a.length; i++) if (a[i].id === id) return a[i].name; return id; }
  function byId(id) { for (var i = 0; i < COURSES.length; i++) if (COURSES[i].id === id) return COURSES[i]; return null; }

  // ---- three consumers of one array: the course list, the week, the beginner door's next course ----
  var state = { style: [], level: [] };
  var p0 = new URLSearchParams(location.search); state.style = p0.get("style") ? p0.get("style").split(",") : []; state.level = p0.get("level") ? p0.get("level").split(",") : [];
  function match(c, ign) { return (ign === "style" || !state.style.length || state.style.indexOf(c.style) > -1) && (ign === "level" || !state.level.length || state.level.indexOf(c.level) > -1); }
  document.querySelectorAll("[data-coursetable]").forEach(function (el) {
    var cols = ["Course", "Style", "Level", "Starts", "Weeks", "Day", "Time", "Class length", "Partner required?", "Price", "Places", ""];
    el.innerHTML = '<table class="ctbl reflow"><caption>Courses · ' + ph("[SCHEDULE LAST UPDATED — CONFIRM]") + "</caption><thead><tr>" + cols.map(function (c, i) { return '<th scope="col"' + (i === 8 ? ' class="pcol"' : "") + ">" + (c || '<span class="sr">Book</span>') + "</th>"; }).join("") + "</tr></thead><tbody>" +
      COURSES.map(function (c) {
        return '<tr data-id="' + c.id + '"><th scope="row">' + esc(c.name) + '</th><td data-l="Style">' + esc(nm(STYLES, c.style)) + '</td><td data-l="Level">' + ph(nm(LEVELS, c.level)) + '</td><td data-l="Starts">' + ph(c.startDate) + '</td><td data-l="Weeks">' + ph(c.weeks) +
          '</td><td data-l="Day">' + DAYS7[c.day] + '</td><td data-l="Time">' + ph(c.time) + '</td><td data-l="Class length">' + ph(c.minutes) + ' min</td><td data-l="Partner required?" class="pcell">' + ph(c.partnerRequired) + '</td><td data-l="Price">' + ph(c.price) +
          '</td><td data-l="Places">' + ph(c.cap) + '</td><td><a href="beginners.html?course=' + c.id + '#book" data-scheduler-target="' + esc(c.bookUrl) + '">Book<span class="sr"> ' + esc(c.name) + "</span></a></td></tr>";
      }).join("") + "</tbody></table>";
  });
  document.querySelectorAll("[data-courseweek]").forEach(function (el) {
    var h = '<table class="cwk reflow"><caption>The week · ' + ph("[SCHEDULE LAST UPDATED — CONFIRM]") + '</caption><thead><tr><th scope="col">Course</th>' + DAYS7.map(function (d) { return '<th scope="col">' + d.slice(0, 3) + "</th>"; }).join("") + "</tr></thead><tbody>";
    COURSES.forEach(function (c) { h += '<tr><th scope="row">' + esc(c.name) + "</th>"; for (var d = 0; d < 7; d++) h += d === c.day ? '<td data-l="' + DAYS7[d] + '">' + ph(c.time) + "</td>" : '<td class="empty" data-l="' + DAYS7[d] + '">—<span class="sr"> no class</span></td>'; h += "</tr>"; });
    el.innerHTML = h + "</tbody></table>";
  });
  var beg = COURSES.filter(function (c) { return c.level === "beg"; })[0];
  document.querySelectorAll("[data-nextcourse]").forEach(function (el) { if (beg) el.innerHTML = "Next beginner course: " + esc(beg.name) + ", " + DAYS7[beg.day] + " " + ph(beg.time) + ", from " + ph(beg.startDate) + " · " + ph("[DERIVED FROM PLACEHOLDER DATA]"); });

  function paint(push) {
    if (!document.querySelector(".chip")) return;
    var shown = 0;
    document.querySelectorAll(".ctbl tbody tr").forEach(function (r) { var m = match(byId(r.getAttribute("data-id"))); if (m) shown++; r.classList.toggle("is-out", !m); });
    document.querySelectorAll(".chip").forEach(function (b) {
      var k = b.getAttribute("data-f"), v = b.getAttribute("data-v"), n = 0;
      b.setAttribute("aria-pressed", state[k].indexOf(v) > -1);
      COURSES.forEach(function (c) { if (c[k] === v && match(c, k)) n++; });
      b.querySelector("[data-cnt]").textContent = pad(n);
    });
    document.querySelectorAll("[data-readout]").forEach(function (r) { r.textContent = pad(shown) + " of " + pad(COURSES.length) + " courses"; });
    var em = document.querySelector("[data-empty]");
    if (em) { em.hidden = shown > 0; if (!shown) { var alt = COURSES.filter(function (c) { return match(c, "level"); })[0] || COURSES[0]; em.innerHTML = "No course matches that combination. Nearest: " + esc(alt.name) + ", starting " + ph(alt.startDate) + '. <button type="button" class="clear" data-clear>Clear</button>'; } }
    var q = new URLSearchParams(); if (state.style.length) q.set("style", state.style.join(",")); if (state.level.length) q.set("level", state.level.join(","));
    var url = location.pathname + (q.toString() ? "?" + q.toString() : "");
    if (push) history.pushState(null, "", url); else if (push === false) history.replaceState(null, "", url);
  }
  paint(false);
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".chip");
    if (b) { var k = b.getAttribute("data-f"), v = b.getAttribute("data-v"), i = state[k].indexOf(v); if (i > -1) state[k].splice(i, 1); else state[k].push(v); paint(true); }
    if (e.target.closest("[data-clear]")) { state = { style: [], level: [] }; paint(true); }
    var pk = e.target.closest("[data-pick]"); if (pk) pickCourse(pk.getAttribute("data-pick"));
  });
  window.addEventListener("popstate", function () { var p = new URLSearchParams(location.search); state.style = p.get("style") ? p.get("style").split(",") : []; state.level = p.get("level") ? p.get("level").split(",") : []; paint(); });

  // ---- beginner booking: the course arrives pre-selected or is picked ----
  var cp = document.querySelector("[data-coursepick]");
  function csum(c) {
    var v = c ? { name: esc(c.name), start: ph(c.startDate), weeks: ph(c.weeks), when: DAYS7[c.day] + " " + ph(c.time), partner: ph(c.partnerRequired), price: ph(c.price) } : {};
    document.querySelectorAll("[data-csum] [data-s]").forEach(function (d) { d.innerHTML = v[d.getAttribute("data-s")] || "—"; });
  }
  function pickCourse(id) { var r = document.querySelector('[name="course"][value="' + id + '"]'); if (r) { r.checked = true; csum(byId(id)); } }
  if (cp) {
    cp.innerHTML = '<div class="pick" role="radiogroup" aria-label="Choose a course">' + COURSES.filter(function (c) { return c.level === "beg"; }).map(function (c, k) {
      return '<label><input type="radio" name="course" value="' + c.id + '"' + (k === 0 ? " required" : "") + "> <span>" + esc(c.name) + " · from " + ph(c.startDate) + " · " + DAYS7[c.day] + " " + ph(c.time) + " · partner " + ph(c.partnerRequired) + "</span></label>"; }).join("") + "</div>";
    cp.addEventListener("change", function (e) { if (e.target.name === "course") csum(byId(e.target.value)); });
    var pre = new URLSearchParams(location.search).get("course"); if (pre && byId(pre)) pickCourse(pre); else csum(null);
  }
  // ---- wedding consult: weeks until, derived from the date entered ----
  var wd = document.querySelector("[data-wdate]"), wk = document.querySelector("[data-weeks]");
  if (wd && wk) wd.addEventListener("change", function () { var t = new Date(wd.value); if (isNaN(t)) return; var w = Math.round((t - new Date()) / (7 * 864e5)); wk.textContent = "[" + w + " WEEKS — DERIVED FROM THE DATE ENTERED]"; });
  // ---- contact: a wedding enquiry goes to the consult form, never this one ----
  var cf = document.querySelector("[data-contact]");
  if (cf) cf.querySelector("select").addEventListener("change", function (e) { cf.querySelector("[data-wedroute]").hidden = e.target.value !== "wedding"; });

  // ---- step diagrams resolve once; the doors arrive together; dividers draw once ----
  var once = function (sel, cls, th) {
    var els = document.querySelectorAll(sel);
    if (reduce || !("IntersectionObserver" in window)) { els.forEach(function (x) { x.classList.add(cls); }); return; }
    var o = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add(cls); o.unobserve(en.target); } }); }, { threshold: th });
    els.forEach(function (x) { o.observe(x); });
  };
  once("[data-diagram]", "is-on", .3); once(".doors", "is-in", .15);
})();

