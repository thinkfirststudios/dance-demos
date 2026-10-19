/* DEMO — ThinkFirst Studios · [Your name here] — fictional business. */
// SCHEDULE DATA — replace wholesale from the client's scheduler export
// shape: { id, day, date, countSlot, time, style, instructor, level, minutes, room, cap, bookUrl }
var SCHEDULE = [
 {
  "id": "c01",
  "day": 0,
  "date": "[MON 00]",
  "countSlot": 1,
  "time": "[5:30pm]",
  "style": "[FOUNDATIONS — CONFIRM]",
  "instructor": "f",
  "level": "beg",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c02",
  "day": 0,
  "date": "[MON 00]",
  "countSlot": 2,
  "time": "[6:45pm]",
  "style": "[HIP HOP — CONFIRM]",
  "instructor": "a",
  "level": "int",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c03",
  "day": 0,
  "date": "[MON 00]",
  "countSlot": 3,
  "time": "[8:00pm]",
  "style": "[HOUSE — CONFIRM]",
  "instructor": "b",
  "level": "open",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c04",
  "day": 0,
  "date": "[MON 00]",
  "countSlot": 4,
  "time": "[9:15pm]",
  "style": "[HEELS — CONFIRM]",
  "instructor": "c",
  "level": "int",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c11",
  "day": 1,
  "date": "[TUE 00]",
  "countSlot": 1,
  "time": "[5:30pm]",
  "style": "[WAACKING — CONFIRM]",
  "instructor": "d",
  "level": "beg",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c12",
  "day": 1,
  "date": "[TUE 00]",
  "countSlot": 2,
  "time": "[6:45pm]",
  "style": "[CHOREOGRAPHY — CONFIRM]",
  "instructor": "e",
  "level": "open",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c13",
  "day": 1,
  "date": "[TUE 00]",
  "countSlot": 3,
  "time": "[8:00pm]",
  "style": "[HIP HOP — CONFIRM]",
  "instructor": "a",
  "level": "adv",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c21",
  "day": 2,
  "date": "[WED 00]",
  "countSlot": 1,
  "time": "[5:30pm]",
  "style": "[FOUNDATIONS — CONFIRM]",
  "instructor": "f",
  "level": "beg",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c22",
  "day": 2,
  "date": "[WED 00]",
  "countSlot": 2,
  "time": "[6:45pm]",
  "style": "[HEELS — CONFIRM]",
  "instructor": "c",
  "level": "beg",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c23",
  "day": 2,
  "date": "[WED 00]",
  "countSlot": 3,
  "time": "[8:00pm]",
  "style": "[CHOREOGRAPHY — CONFIRM]",
  "instructor": "e",
  "level": "int",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c24",
  "day": 2,
  "date": "[WED 00]",
  "countSlot": 4,
  "time": "[9:15pm]",
  "style": "[HOUSE — CONFIRM]",
  "instructor": "b",
  "level": "adv",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c25",
  "day": 2,
  "date": "[WED 00]",
  "countSlot": 5,
  "time": "[10:30pm]",
  "style": "[WAACKING — CONFIRM]",
  "instructor": "d",
  "level": "open",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c32",
  "day": 3,
  "date": "[THU 00]",
  "countSlot": 2,
  "time": "[6:45pm]",
  "style": "[HIP HOP — CONFIRM]",
  "instructor": "a",
  "level": "beg",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c33",
  "day": 3,
  "date": "[THU 00]",
  "countSlot": 3,
  "time": "[8:00pm]",
  "style": "[CHOREOGRAPHY — CONFIRM]",
  "instructor": "e",
  "level": "adv",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c34",
  "day": 3,
  "date": "[THU 00]",
  "countSlot": 4,
  "time": "[9:15pm]",
  "style": "[HEELS — CONFIRM]",
  "instructor": "c",
  "level": "open",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c41",
  "day": 4,
  "date": "[FRI 00]",
  "countSlot": 1,
  "time": "[5:30pm]",
  "style": "[HOUSE — CONFIRM]",
  "instructor": "b",
  "level": "int",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c42",
  "day": 4,
  "date": "[FRI 00]",
  "countSlot": 2,
  "time": "[6:45pm]",
  "style": "[WAACKING — CONFIRM]",
  "instructor": "d",
  "level": "int",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c43",
  "day": 4,
  "date": "[FRI 00]",
  "countSlot": 3,
  "time": "[8:00pm]",
  "style": "[FOUNDATIONS — CONFIRM]",
  "instructor": "f",
  "level": "open",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 },
 {
  "id": "c44",
  "day": 4,
  "date": "[FRI 00]",
  "countSlot": 4,
  "time": "[9:15pm]",
  "style": "[HIP HOP — CONFIRM]",
  "instructor": "a",
  "level": "open",
  "minutes": "[75]",
  "room": "[ROOM — CONFIRM]",
  "cap": "[CAP — CONFIRM]",
  "bookUrl": "[SCHEDULER URL — CONFIRM]"
 }
];
var INSTRUCTORS = [{"id": "a", "name": "[INSTRUCTOR A — NAME, CONFIRM]"}, {"id": "b", "name": "[INSTRUCTOR B — NAME, CONFIRM]"}, {"id": "c", "name": "[INSTRUCTOR C — NAME, CONFIRM]"}, {"id": "d", "name": "[INSTRUCTOR D — NAME, CONFIRM]"}, {"id": "e", "name": "[INSTRUCTOR E — NAME, CONFIRM]"}, {"id": "f", "name": "[INSTRUCTOR F — NAME, CONFIRM]"}];
var LEVELS = [{"id": "beg", "name": "[BEG]"}, {"id": "int", "name": "[INT]"}, {"id": "adv", "name": "[ADV]"}, {"id": "open", "name": "[OPEN]"}];
var DAYNAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]; var SLOTS = 5;
var STILLS = ["<figure class=\"shot r-16x9\"><picture><img src=\"assets/img/still-1-1200.webp\" srcset=\"assets/img/still-1-600.webp 600w, assets/img/still-1-1200.webp 1200w\" sizes=\"(min-width:1100px) 30vw, (min-width:760px) 50vw, 100vw\" width=\"1200\" height=\"675\" alt=\"A group of adults working low across the floor of a dark studio, reflected in the mirror wall\" loading=\"lazy\" decoding=\"async\"></picture><span class=\"shot-label\">[IMAGE: video still — the room] STOCK</span></figure>", "<figure class=\"shot r-16x9\"><picture><img src=\"assets/img/still-2-1200.webp\" srcset=\"assets/img/still-2-600.webp 600w, assets/img/still-2-1200.webp 1200w\" sizes=\"(min-width:1100px) 30vw, (min-width:760px) 50vw, 100vw\" width=\"1200\" height=\"675\" alt=\"Two adults balancing with arms extended in a dark studio under strip lights\" loading=\"lazy\" decoding=\"async\"></picture><span class=\"shot-label\">[IMAGE: video still — mid-phrase] STOCK</span></figure>", "<figure class=\"shot r-16x9\"><picture><img src=\"assets/img/still-3-1200.webp\" srcset=\"assets/img/still-3-600.webp 600w, assets/img/still-3-1200.webp 1200w\" sizes=\"(min-width:1100px) 30vw, (min-width:760px) 50vw, 100vw\" width=\"1200\" height=\"675\" alt=\"Six adults kneeling and looking up in a wide dark studio\" loading=\"lazy\" decoding=\"async\"></picture><span class=\"shot-label\">[IMAGE: video still — the group] STOCK</span></figure>"];
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
  function pad(n) { return "[" + (n < 10 ? "0" : "") + n + "]"; }
  function find(arr, id) { for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i]; return { name: id }; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
  function ph(s) { return '<span class="ph">' + esc(s) + "</span>"; }
  function at(d, s) { for (var i = 0; i < SCHEDULE.length; i++) if (SCHEDULE[i].day === d && SCHEDULE[i].countSlot === s) return SCHEDULE[i]; return null; }
  function byId(id) { for (var i = 0; i < SCHEDULE.length; i++) if (SCHEDULE[i].id === id) return SCHEDULE[i]; return null; }
  function lvChip(c) { return '<span class="lv lv--' + c.level + '">' + find(LEVELS, c.level).name + "</span>"; }
  function cell(c) {
    var ins = find(INSTRUCTORS, c.instructor).name;
    return '<div class="cl">' + '<span class="t">' + ph(c.time) + "</span>" + '<span class="st">' + esc(c.style) + "</span>" + '<span class="plate">' + esc(ins) + "</span>" +
      '<span class="mn">' + ph(c.minutes) + " min</span>" + lvChip(c) +
      '<a class="bk" href="book.html?class=' + c.id + '" data-scheduler-target="' + esc(c.bookUrl) + '">Book<span class="sr"> ' + esc(c.style) + " with " + esc(ins) + ", " + DAYNAMES[c.day] + "</span></a></div>";
  }
  // count -> today's weekday index (Mon = 0)
  var today = (new Date().getDay() + 6) % 7;

  // ---- filter state, URL-reflected ----
  var state = { instructor: [], level: [] };
  function readURL() { var p = new URLSearchParams(location.search); state.instructor = p.get("instructor") ? p.get("instructor").split(",") : []; state.level = p.get("level") ? p.get("level").split(",") : []; }
  function match(c, ignore) { return (ignore === "instructor" || !state.instructor.length || state.instructor.indexOf(c.instructor) > -1) && (ignore === "level" || !state.level.length || state.level.indexOf(c.level) > -1); }
  function anyF() { return state.instructor.length + state.level.length > 0; }

  var mq = window.matchMedia("(max-width: 760px)");
  var weeks = document.querySelectorAll("[data-week]");
  function renderWeek(el) {
    var cap = "<caption>" + esc(el.getAttribute("data-cap")) + " · " + ph("[SCHEDULE LAST UPDATED — CONFIRM]") + "</caption>", h = "", d, s, c;
    if (!mq.matches) {
      h = '<table class="week">' + cap + '<thead><tr><th scope="col" class="corner"><span class="sr">Count</span></th>';
      for (d = 0; d < 5; d++) h += '<th scope="col" class="' + (d === today ? "is-today" : "") + '"><span class="dn">' + DAYNAMES[d] + "</span>" + ph(SCHEDULE.filter(function (x) { return x.day === d; })[0] ? SCHEDULE.filter(function (x) { return x.day === d; })[0].date : "[00]") + "</th>";
      h += "</tr></thead><tbody>";
      for (s = 1; s <= SLOTS; s++) {
        h += '<tr><th scope="row"><span class="sr">Count </span>' + s + "</th>";
        for (d = 0; d < 5; d++) { c = at(d, s); h += c ? '<td data-id="' + c.id + '">' + cell(c) + "</td>" : '<td class="empty"><span aria-hidden="true">—</span><span class="sr">No class at count ' + s + "</span></td>"; }
        h += "</tr>";
      }
    } else {
      h = '<table class="week week--m reflow">' + cap + '<thead><tr><th scope="col">Day</th>';
      for (s = 1; s <= SLOTS; s++) h += '<th scope="col">Count ' + s + "</th>";
      h += "</tr></thead><tbody>";
      for (d = 0; d < 5; d++) {
        var first = SCHEDULE.filter(function (x) { return x.day === d; })[0];
        h += '<tr><th scope="row">' + DAYNAMES[d] + (first ? ph(first.date) : "") + "</th>";
        for (s = 1; s <= SLOTS; s++) { c = at(d, s); h += c ? '<td data-l="Count ' + s + '" data-id="' + c.id + '">' + cell(c) + "</td>" : '<td data-l="Count ' + s + '" class="empty">— <span class="sr">no class</span></td>'; }
        h += "</tr>";
      }
    }
    el.innerHTML = h + "</tbody></table>";
  }
  function paint() {
    var shown = 0, total = SCHEDULE.length, f = anyF();
    SCHEDULE.forEach(function (c) { if (match(c)) shown++; });
    document.querySelectorAll(".week").forEach(function (t) { t.classList.toggle("is-filtered", f); });
    document.querySelectorAll(".week td[data-id]").forEach(function (td) {
      var c = byId(td.getAttribute("data-id")), m = match(c);
      td.classList.toggle("is-match", f && m); td.classList.toggle("is-out", f && !m);
      var lv = td.querySelector(".lv"); if (lv) lv.classList.toggle("is-lvl", state.level.indexOf(c.level) > -1 && m);
    });
    document.querySelectorAll(".fchip").forEach(function (b) {
      var k = b.getAttribute("data-f"), v = b.getAttribute("data-v"), n = 0;
      b.setAttribute("aria-pressed", state[k].indexOf(v) > -1);
      SCHEDULE.forEach(function (c) { if (c[k] === v && match(c, k)) n++; });
      b.querySelector("[data-cnt]").textContent = pad(n);
    });
    document.querySelectorAll("[data-readout]").forEach(function (r) { r.textContent = pad(shown) + " of " + pad(total) + " classes showing"; });
    var em = document.querySelector("[data-empty]");
    if (em) {
      em.hidden = shown > 0;
      if (!shown) {
        var near = "";
        if (state.instructor.length) { var lv = SCHEDULE.filter(function (c) { return c.instructor === state.instructor[0]; }).map(function (c) { return find(LEVELS, c.level).name; }); near = find(INSTRUCTORS, state.instructor[0]).name + " teaches " + (lv.length ? lv.filter(function (x, i) { return lv.indexOf(x) === i; }).join(", ") : "no classes") + " this week."; }
        else if (state.level.length) near = "Try " + find(LEVELS, "open").name + " — open to every level.";
        em.innerHTML = "Nothing this week matches that combination. Nearest: " + esc(near) + ' <button type="button" class="clear" data-clear>Clear the filters</button>';
      }
    }
    var qs = new URLSearchParams(); if (state.instructor.length) qs.set("instructor", state.instructor.join(",")); if (state.level.length) qs.set("level", state.level.join(","));
    var q = qs.toString();
    document.querySelectorAll("[data-carry]").forEach(function (a) { a.href = a.getAttribute("href").split("?")[0] + (q ? "?" + q : ""); });
    return q;
  }
  function apply(push) {
    var q = paint();
    if (weeks.length && push !== null) { var url = location.pathname + (q ? "?" + q : "") + location.hash; if (push) history.pushState(null, "", url); else history.replaceState(null, "", url); }
  }
  if (weeks.length) {
    readURL();
    weeks.forEach(renderWeek); apply(false);
    var rer = function () { weeks.forEach(renderWeek); paint(); };
    if (mq.addEventListener) mq.addEventListener("change", rer); else mq.addListener(rer);
    document.addEventListener("click", function (e) {
      var b = e.target.closest(".fchip");
      if (b) { var k = b.getAttribute("data-f"), v = b.getAttribute("data-v"), i = state[k].indexOf(v); if (i > -1) state[k].splice(i, 1); else state[k].push(v); apply(true); return; }
      if (e.target.closest("[data-clear]")) { state = { instructor: [], level: [] }; apply(true); return; }
      var ft = e.target.closest("[data-filter-to]");
      if (ft && document.getElementById("this-week")) { e.preventDefault(); state = { instructor: [ft.getAttribute("data-filter-to")], level: [] }; apply(true); document.getElementById("this-week").scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); }
    });
    window.addEventListener("popstate", function () { readURL(); paint(); });
  }

  // ---- upcoming cards: three renderings of the same array ----
  function order() { return SCHEDULE.slice().sort(function (a, b) { var da = (a.day - today + 7) % 7, db = (b.day - today + 7) % 7; return da - db || a.countSlot - b.countSlot; }); }
  document.querySelectorAll("[data-upcoming]").forEach(function (el) {
    el.innerHTML = order().slice(0, 3).map(function (c, k) {
      return '<article class="vcard rv is-in" style="--i:' + k + '"><a href="schedule.html?instructor=' + c.instructor + '">' + STILLS[k] + '<div class="vb"><h3>' + esc(c.style) + '</h3><span class="plate">' + esc(find(INSTRUCTORS, c.instructor).name) + "</span>" + lvChip(c) +
        '<span class="t">' + DAYNAMES[c.day] + " · " + ph(c.time) + '</span><span class="more">more →</span></div></a></article>';
    }).join("");
  });
  var nx = order()[0];
  document.querySelectorAll("[data-next]").forEach(function (el) { if (nx) el.innerHTML = "Next class " + ph("[DERIVED FROM PLACEHOLDER DATA]") + ": " + DAYNAMES[nx.day] + ", count " + nx.countSlot + ", " + ph(nx.time) + " · " + esc(nx.style) + " · " + esc(find(INSTRUCTORS, nx.instructor).name); });
  document.querySelectorAll("[data-icount]").forEach(function (el) { var n = SCHEDULE.filter(function (c) { return c.instructor === el.getAttribute("data-icount"); }).length; el.textContent = "[CLASSES THIS WEEK: " + (n < 10 ? "0" : "") + n + "]"; });
  document.querySelectorAll("[data-instr]").forEach(function (el) {
    var id = el.getAttribute("data-instr"), rows = SCHEDULE.filter(function (c) { return c.instructor === id; });
    if (!rows.length) { el.innerHTML = "<p>No classes this week.</p>"; return; }
    el.innerHTML = '<table class="itbl reflow"><caption class="sr">Classes this week with ' + esc(find(INSTRUCTORS, id).name) + '</caption><thead><tr><th scope="col">Day</th><th scope="col">Count</th><th scope="col">Time</th><th scope="col">Style</th><th scope="col">Level</th><th scope="col"><span class="sr">Book</span></th></tr></thead><tbody>' +
      rows.map(function (c) { return '<tr><th scope="row">' + DAYNAMES[c.day] + '</th><td data-l="Count">' + c.countSlot + '</td><td data-l="Time">' + ph(c.time) + '</td><td data-l="Style">' + esc(c.style) + '</td><td data-l="Level">' + lvChip(c) + '</td><td><a class="bk" href="book.html?class=' + c.id + '" data-scheduler-target="' + esc(c.bookUrl) + '">Book this class</a></td></tr>'; }).join("") + "</tbody></table>";
  });

  // ---- book: the class arrives pre-selected, or pick one ----
  var pick = document.querySelector("[data-bookpick]");
  if (pick) {
    var sum = function (c) {
      var v = c ? { day: DAYNAMES[c.day], date: ph(c.date), time: ph(c.time), style: esc(c.style), instr: esc(find(INSTRUCTORS, c.instructor).name), level: lvChip(c) } : {};
      document.querySelectorAll("[data-s]").forEach(function (d) { d.innerHTML = v[d.getAttribute("data-s")] || "—"; });
    };
    var pre = byId(new URLSearchParams(location.search).get("class") || "");
    if (pre) {
      pick.innerHTML = '<div class="chosen"><input type="hidden" name="class" value="' + pre.id + '"><strong>' + DAYNAMES[pre.day] + " · " + ph(pre.time) + " · " + esc(pre.style) + '</strong><span class="plate">' + esc(find(INSTRUCTORS, pre.instructor).name) + '</span><a class="link-arrow" href="book.html">Choose a different class</a></div>';
      sum(pre);
    } else {
      var h = '<div class="pick" role="radiogroup" aria-label="Choose one class">', last = -1;
      order().forEach(function (c, k) {
        if (c.day !== last) { h += '<p class="pick-day">' + DAYNAMES[c.day] + "</p>"; last = c.day; }
        h += '<label><input type="radio" name="class" value="' + c.id + '"' + (k === 0 ? " required" : "") + "> <span>" + ph(c.time) + " · " + esc(c.style) + " · " + esc(find(INSTRUCTORS, c.instructor).name) + " · " + find(LEVELS, c.level).name + "</span></label>";
      });
      pick.innerHTML = h + "</div>";
      pick.addEventListener("change", function (e) { if (e.target.name === "class") sum(byId(e.target.value)); });
      sum(null);
    }
  }

  // ---- count strips: the accent travels once, then stops ----
  var strips = document.querySelectorAll("[data-count]");
  if (reduce || !("IntersectionObserver" in window)) strips.forEach(function (s) { s.classList.add("is-on"); });
  else { var so = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-on"); so.unobserve(en.target); } }); }, { threshold: .6 }); strips.forEach(function (s) { so.observe(s); }); }

  // ---- video placeholder panel ----
  var vp = document.getElementById("vpanel");
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-video]") && vp) { if (vp.showModal) vp.showModal(); else vp.setAttribute("open", ""); }
    if (e.target.closest("[data-vclose]") && vp) { if (vp.close) vp.close(); else vp.removeAttribute("open"); }
  });
})();

