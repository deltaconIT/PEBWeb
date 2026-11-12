"use strict";
/* =====================================================================
   PHILIPPINE PROJECTS - CARDS, TYPES AND THE "SEE ALL" LIST
   ---------------------------------------------------------------------
   Draws the Philippine projects from assets/js/ph-projects-data.js into
   any page that has these placeholders:

     <div data-ph-featured></div>   the featured projects (big cards)
     <div data-ph-types></div>      one tile per project type
     <div data-ph-all></div>        Philippine Projects: the "See all" box,
                                    then every project by year
     <div data-ph-type-page></div>  Project Types: the type named in the
                                    address (?type=commercial), or all types
     <span data-ph-count="listed|more|total|types"></span>   numbers

   The full lists start hidden behind a "See all" button. The button opens
   the details form (setupProjectLeadForm in assets/js/main.js), which shows
   the list once the visitor has filled it in. Load this file just before
   main.js, at the end of the page.
   ===================================================================== */
(function () {
  var data = window.PEB_PROJECTS;
  if (!data) return;
  var script = document.currentScript;
  var root = script ? script.src.replace(/assets\/js\/ph-projects\.js([?#].*)?$/, "") : "";
  var FREE_PER_TYPE = 2;          // projects shown on a type page before "See all"

  var projects = data.projects;
  var typeById = {};
  data.types.forEach(function (type) { typeById[type.id] = type; });

  function url(path) { return root ? new URL(path, root).href : path; }
  function esc(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function slug(text) { return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }
  function typeHref(id) { return url("projects/project-types.html?type=" + id); }
  function contactHref(project) { return url("contact/contact.html?project=" + encodeURIComponent(project.name) + "#message"); }
  function ofType(id) { return projects.filter(function (p) { return p.type === id; }); }
  function tons(p) { return parseFloat(String(p.steel).replace(/,/g, "")) || 0; }

  // Featured first, then projects with photos (newest first), then completed projects
  // (most steel first), then the rest (newest first).
  function showcaseOrder(list) {
    function rank(p) { return p.featured ? 0 : (p.photos || []).length ? 1 : p.status === "Completed" ? 2 : 3; }
    return list.slice().sort(function (a, b) {
      return rank(a) - rank(b) || (rank(a) === 2 ? tons(b) - tons(a) : 0) || b.year - a.year;
    });
  }

  // Picture at the top of a small card; every photo of the project opens in the viewer.
  function cardMedia(p) {
    var photos = p.photos || [];
    if (!photos.length) {
      // No photos yet: a tinted block with the type's icon keeps the cards in a row the same height.
      var type = typeById[p.type];
      return '<div class="pj-card-media pj-card-media--none" aria-hidden="true"><i class="fa ' + (type ? type.icon : "fa-building-o") + '"></i></div>';
    }
    var group = "pjl-" + slug(p.name);
    var caption = esc(p.name + " (" + p.year + ")");
    return '<a class="pj-card-media" href="' + url(photos[0]) + '" data-fancybox="' + group + '" data-caption="' + caption + '">' +
      '<img src="' + url(photos[0]) + '" alt="' + esc(p.name + ", " + place(p)) + '" loading="lazy">' +
      (photos.length > 1 ? '<span class="pj-feature-zoom"><i class="fa fa-camera" aria-hidden="true"></i>' + photos.length + " photos</span>" : "") +
      "</a>" +
      photos.slice(1).map(function (photo) {
        return '<a href="' + url(photo) + '" data-fancybox="' + group + '" data-caption="' + caption + '" hidden></a>';
      }).join("");
  }

  function statusBadge(p) {
    if (!p.status) return "";
    return '<span class="ph-status ph-status--' + (p.status === "Completed" ? "completed" : "ongoing") + '">' + esc(p.status) + "</span>";
  }
  function place(p) {
    var parts = [p.location, p.region].filter(Boolean);
    return parts.length ? parts.join(" · ") : "Philippines";
  }
  function facts(p, className) {
    var rows = [["Steel", p.steel], ["Area", p.area], ["Scope", p.scope]].filter(function (row) { return row[1]; });
    return '<dl class="' + className + '">' + rows.map(function (row) {
      return "<div><dt>" + row[0] + "</dt><dd>" + esc(row[1]) + "</dd></div>";
    }).join("") + "</dl>";
  }

  // ---- big card for a featured project ----
  function featureCard(p) {
    var type = typeById[p.type];
    var photos = p.photos || [];
    var group = "pj-" + slug(p.name);
    var media = "";
    if (photos.length) {
      media = '<a class="pj-feature-media" href="' + url(photos[0]) + '" data-fancybox="' + group + '" data-caption="' + esc(p.name + " (" + p.year + ")") + '">' +
        '<img src="' + url(photos[0]) + '" alt="' + esc(p.name + ", " + place(p)) + '" width="1200" height="900" loading="lazy">' +
        '<span class="pj-feature-year">' + p.year + "</span>" +
        (photos.length > 1 ? '<span class="pj-feature-zoom"><i class="fa fa-camera" aria-hidden="true"></i>' + photos.length + " photos</span>" : "") +
        "</a>" +
        photos.slice(1).map(function (photo) {
          return '<a class="pj-feature-more" href="' + url(photo) + '" data-fancybox="' + group + '" data-caption="' + esc(p.name + " (" + p.year + ")") + '" hidden></a>';
        }).join("");
    }
    return '<article class="pj-feature">' + media +
      '<div class="pj-feature-body">' +
      '<p class="pj-feature-meta">' + statusBadge(p) + (type ? '<a class="pj-type-tag" href="' + typeHref(type.id) + '">' + esc(type.name) + "</a>" : "") + "</p>" +
      '<h3 class="pj-feature-title">' + esc(p.name) + "</h3>" +
      '<p class="pj-feature-loc"><i class="fa fa-map-marker" aria-hidden="true"></i>' + esc(place(p)) + "</p>" +
      facts(p, "pj-feature-facts") +
      '<a class="hx-link pj-similar" href="' + contactHref(p) + '">Build something like this <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>' +
      "</div></article>";
  }

  // ---- small card used in the full lists ----
  function listCard(p, showType) {
    var type = typeById[p.type];
    return '<article class="ph-card' + ((p.photos || []).length ? " pj-card--photo" : "") + '">' + cardMedia(p) +
      '<div class="ph-card-top">' + statusBadge(p) + (p.featured ? '<span class="pj-featured-mark">Featured</span>' : "") + "</div>" +
      '<h4 class="ph-card-title">' + esc(p.name) + "</h4>" +
      '<p class="ph-card-loc"><i class="fa fa-map-marker" aria-hidden="true"></i>' + esc(place(p)) + "</p>" +
      (showType && type ? '<p class="pj-card-type"><a href="' + typeHref(type.id) + '">' + esc(type.name) + "</a></p>" : "") +
      '<dl class="ph-card-facts">' + [["Year", p.year], ["Scope", p.scope], ["Steel", p.steel], ["Area", p.area]].filter(function (row) { return row[1]; }).map(function (row) {
        return "<div><dt>" + row[0] + "</dt><dd>" + esc(row[1]) + "</dd></div>";
      }).join("") + "</dl>" +
      '<a class="pj-card-similar" href="' + contactHref(p) + '">Ask about a similar building <i class="fa fa-angle-right" aria-hidden="true"></i></a>' +
      "</article>";
  }

  function typeTiles(currentId) {
    return '<div class="pj-types">' + data.types.filter(function (t) { return t.id !== currentId; }).map(function (t) {
      var n = ofType(t.id).length;
      return '<a class="pj-type" href="' + typeHref(t.id) + '">' +
        '<i class="fa ' + t.icon + '" aria-hidden="true"></i>' +
        '<span class="pj-type-name">' + esc(t.name) + "</span>" +
        '<span class="pj-type-count">' + plural(n, "project") + "</span>" +
        '<span class="pj-type-text">' + esc(t.text) + "</span>" +
        "</a>";
    }).join("") +
    (currentId === undefined ? '<a class="pj-type pj-type--all" href="' + url("projects/philippine-projects.html") + '">' +
      '<i class="fa fa-th-list" aria-hidden="true"></i><span class="pj-type-name">All Philippine projects</span>' +
      '<span class="pj-type-count">' + plural(projects.length, "project") + ' listed</span><span class="pj-type-text">Every listed project, year by year, from 2022 to today.</span></a>' : "") +
    "</div>";
  }

  // The "See all" box. The list itself (#targetId) follows it, hidden.
  function gateBox(targetId, moreCount, totalCount, label, chips) {
    return '<div class="pj-gate" data-lead-gate-box="' + targetId + '">' +
      '<div class="pj-gate-main">' +
      '<p class="pj-gate-count"><strong>' + moreCount + "</strong> more " + (moreCount === 1 ? "project" : "projects") + "</p>" +
      (chips ? '<ul class="pj-gate-chips">' + chips + "</ul>" : "") +
      "</div>" +
      '<div class="pj-gate-action">' +
      '<button type="button" class="hx-btn hx-btn--primary" data-lead-gate data-lead-target="#' + targetId + '" data-lead-label="' + esc(label) + '">See all ' + totalCount + ' projects <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>' +
      '<p class="pj-gate-note">We will ask for your name, email and mobile number first, once.</p>' +
      "</div></div>";
  }

  // ---- placeholders ----
  document.querySelectorAll("[data-ph-count]").forEach(function (node) {
    var what = node.getAttribute("data-ph-count");
    var featuredCount = projects.filter(function (p) { return p.featured; }).length;
    node.textContent = { listed: projects.length, more: projects.length - featuredCount, total: data.totalProjects, types: data.types.length, steel: data.steelLabel }[what];
  });

  document.querySelectorAll("[data-ph-featured]").forEach(function (node) {
    var list = projects.filter(function (p) { return p.featured; }).sort(function (a, b) { return b.year - a.year; });
    node.innerHTML = '<div class="pj-features">' + list.map(featureCard).join("") + "</div>";
  });

  document.querySelectorAll("[data-ph-types]").forEach(function (node) { node.innerHTML = typeTiles(); });

  document.querySelectorAll("[data-ph-all]").forEach(function (node) {
    var years = [];
    projects.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
    years.sort(function (a, b) { return b - a; });
    var featuredCount = projects.filter(function (p) { return p.featured; }).length;
    var chips = data.types.map(function (t) {
      return "<li>" + esc(t.name) + " <span>" + ofType(t.id).length + "</span></li>";
    }).join("");
    var list = '<div class="ph-projects pj-list" id="ph-all-list" hidden>' +
      '<nav class="ph-years" aria-label="Jump to year"><ul>' + years.map(function (y) { return '<li><a href="#ph-' + y + '">' + y + "</a></li>"; }).join("") + "</ul></nav>" +
      years.map(function (y) {
        var inYear = projects.filter(function (p) { return p.year === y; });
        return '<div class="ph-year" id="ph-' + y + '"><h3 class="ph-year-title"><span>' + y + "</span><small>" + plural(inYear.length, "project") + "</small></h3>" +
          '<div class="ph-grid">' + inYear.map(function (p) { return listCard(p, true); }).join("") + "</div></div>";
      }).join("") + "</div>";
    node.innerHTML = gateBox("ph-all-list", projects.length - featuredCount, projects.length, "all " + projects.length + " Philippine projects", chips) + list;
  });

  document.querySelectorAll("[data-ph-type-page]").forEach(function (node) {
    var id = new URLSearchParams(window.location.search).get("type");
    var type = typeById[id];
    var hero = document.querySelector(".hx-pagehero");
    if (!type) {
      node.innerHTML = '<div class="hx-head"><div class="hx-head-main"><p class="hx-eyebrow"><span>01</span>Browse</p><h2 class="hx-title">Choose a project type</h2></div>' +
        '<div class="hx-head-side"><p>Our Philippine projects grouped by what the building is for.</p></div></div>' + typeTiles();
      return;
    }
    var list = showcaseOrder(ofType(type.id));
    var free = list.slice(0, FREE_PER_TYPE);
    var rest = list.slice(FREE_PER_TYPE);
    var featured = free.filter(function (p) { return p.featured; });
    var freeCards = free.filter(function (p) { return !p.featured; });

    document.title = type.name + " projects | PEB Philippines";
    if (hero) {
      hero.querySelector("h1").textContent = type.name;
      var lead = hero.querySelector(".hx-pagehero-lead");
      if (lead) lead.textContent = type.text;
      var current = hero.querySelector(".hx-crumb li[aria-current]");
      if (current) {
        current.removeAttribute("aria-current");
        current.innerHTML = '<a href="' + url("projects/project-types.html") + '">' + esc(current.textContent) + "</a>";
        var last = document.createElement("li");
        last.setAttribute("aria-current", "page");
        last.textContent = type.name;
        current.parentNode.appendChild(last);
      }
    }

    node.innerHTML = '<div class="hx-head"><div class="hx-head-main"><p class="hx-eyebrow"><span>01</span>' + esc(type.name) + '</p><h2 class="hx-title">' + plural(list.length, "project") + " in the Philippines</h2></div>" +
      '<div class="hx-head-side"><p>' + esc(type.text) + "</p></div></div>" +
      (featured.length ? '<div class="pj-features pj-features--inline">' + featured.map(featureCard).join("") + "</div>" : "") +
      (freeCards.length ? '<div class="ph-projects pj-list"><div class="ph-grid">' + freeCards.map(function (p) { return listCard(p, false); }).join("") + "</div></div>" : "") +
      (rest.length ? gateBox("type-rest", rest.length, list.length, "all " + list.length + " " + type.name.toLowerCase() + " projects") +
        '<div class="ph-projects pj-list" id="type-rest" hidden><div class="ph-grid">' + rest.map(function (p) { return listCard(p, false); }).join("") + "</div></div>" : "") +
      '<div class="pj-other"><h3 class="hx-subhead">Other project types</h3>' + typeTiles(type.id) + "</div>";
  });
})();
