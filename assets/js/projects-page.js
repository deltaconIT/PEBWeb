"use strict";
/* =====================================================================
   PROJECTS PAGE - FILTERED RESULTS
   ---------------------------------------------------------------------
   Used only by projects/projects.html. It works without a server.

   With no filter in the address, the page shows its normal landing view.
   With a filter (for example projects.html?prcareer=13), it hides the landing
   view and lists the matching projects, like the original site:

     prcareer   sector id      prcountry  country id     pryear  year
     prname     name search    prdisplay  cards per page page    page number

   To add or change a project, edit assets/js/projects-data.js.
   ===================================================================== */
(function () {
  var script = document.currentScript;
  var root = script ? script.src.replace(/assets\/js\/projects-page\.js([?#].*)?$/, "") : "";
  var config = window.SEICO_PROJECT_DATA || { projects: [], careers: [], countries: [], years: [] };
  var query = new URLSearchParams(window.location.search);
  var PER_PAGE_OPTIONS = [8, 24, 40, 100];
  var PAGE_WINDOW = 5;

  function param(name) {
    var value = query.get(name);
    return value && value !== "0" ? value : "";
  }

  var filters = {
    career: param("prcareer"),
    country: param("prcountry"),
    year: param("pryear"),
    name: (query.get("prname") || "").trim()
  };
  var isFilteredView = filters.career || filters.country || filters.year || filters.name ||
    query.has("sbm") || query.has("page") || query.has("prdisplay");
  if (!isFilteredView) return;

  // Set straight away so the landing view never flashes before the results appear.
  document.documentElement.classList.add("projects-filtered");

  function fromRoot(path) {
    return root ? new URL(path, root).href : path;
  }

  function labelFor(list, id) {
    var match = list.filter(function (item) { return String(item.id) === String(id); })[0];
    return match ? match.name : "";
  }

  // Lets "cau" find "Cầu", and ignores upper and lower case.
  function normalize(text) {
    return String(text).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/gi, "d").toLowerCase();
  }

  function matches(project) {
    if (filters.career && (project.careers || []).map(String).indexOf(filters.career) < 0) return false;
    if (filters.country && String(project.country) !== filters.country) return false;
    if (filters.year && String(project.year) !== filters.year) return false;
    if (filters.name && normalize(project.name).indexOf(normalize(filters.name)) < 0) return false;
    return true;
  }

  function fillSelect(select, placeholder, items, selected) {
    var first = document.createElement("option");
    first.value = "0";
    first.textContent = placeholder;
    select.appendChild(first);
    items.forEach(function (item) {
      var option = document.createElement("option");
      option.value = String(item.id);
      option.textContent = item.name;
      if (String(item.id) === String(selected)) option.selected = true;
      select.appendChild(option);
    });
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function buildCard(project) {
    var column = element("div", "col-xs-12 col-sm-6 col-md-3");
    var article = element("article", "box-two scale");
    var link = element("a", "box-thumbnail");
    link.href = fromRoot(project.href);
    var thumb = element("div", "thumbnail-lazy loaded");
    thumb.style.opacity = "1";
    var image = document.createElement("img");
    image.src = fromRoot(project.image);
    image.alt = project.name;
    thumb.appendChild(image);
    link.appendChild(thumb);
    link.appendChild(element("div", "mist", " + "));
    var description = element("div", "box-desc text-center proj-card-desc");
    description.appendChild(element("h3", "proj-card-title", project.name));
    description.appendChild(element("p", "proj-card-addr", project.address));
    article.appendChild(link);
    article.appendChild(description);
    column.appendChild(article);
    return column;
  }

  function pageHref(page) {
    var next = new URLSearchParams(window.location.search);
    next.set("page", String(page));
    return "?" + next.toString();
  }

  function paginationItem(label, page, state, icon) {
    var item = element("li", state || "");
    var link = document.createElement("a");
    if (state !== "disabled" && state !== "active") link.href = pageHref(page);
    if (icon) {
      var glyph = element("i", "fa " + icon);
      glyph.setAttribute("aria-hidden", "true");
      link.appendChild(glyph);
      link.setAttribute("aria-label", label);
    } else {
      link.textContent = label;
    }
    item.appendChild(link);
    return item;
  }

  function buildPagination(list, current, total) {
    if (total <= 1) return;
    list.appendChild(paginationItem("First page", 1, current === 1 ? "disabled" : "", "fa-angle-double-left"));
    list.appendChild(paginationItem("Previous page", current - 1, current === 1 ? "disabled" : "", "fa-angle-left"));
    var start = Math.max(1, Math.min(current - Math.floor(PAGE_WINDOW / 2), total - PAGE_WINDOW + 1));
    var end = Math.min(total, start + PAGE_WINDOW - 1);
    for (var page = start; page <= end; page++) {
      list.appendChild(paginationItem(String(page), page, page === current ? "active" : ""));
    }
    list.appendChild(paginationItem("Next page", current + 1, current === total ? "disabled" : "", "fa-angle-right"));
    list.appendChild(paginationItem("Last page", total, current === total ? "disabled" : "", "fa-angle-double-right"));
  }

  function render() {
    var results = document.getElementById("projects-results");
    if (!results) return;

    var careerLabel = labelFor(config.careers, filters.career);
    var countryLabel = labelFor(config.countries, filters.country);
    var heading = careerLabel || countryLabel || "Projects";

    // Heading, browser tab title and breadcrumb
    document.title = (heading === "Projects" ? "" : heading + " - ") + document.title;
    var pageTitle = document.querySelector(".hx-pagehero h1, .title-page h1");
    if (pageTitle) pageTitle.textContent = heading;
    results.querySelector("[data-projects-heading]").textContent = heading;
    var crumbs = document.querySelector(".hx-crumb ol, .title-page .breadcrumb");
    if (crumbs && careerLabel) {
      var current = crumbs.querySelector("li.active");
      if (current) {
        current.classList.remove("active");
        current.removeAttribute("aria-current");
        var back = document.createElement("a");
        back.href = window.location.pathname;
        back.textContent = current.textContent;
        current.textContent = "";
        current.appendChild(back);
      }
      var last = element("li", "active", careerLabel);
      last.setAttribute("aria-current", "page");
      crumbs.appendChild(last);
    }

    // Filter form. The sector dropdown is hidden when a sector is already chosen.
    results.querySelector("#pr-name").value = filters.name;
    fillSelect(results.querySelector("#pr-career"), "Sector", config.careers, filters.career);
    fillSelect(results.querySelector("#pr-country"), "Country", config.countries, filters.country);
    fillSelect(results.querySelector("#pr-year"), "Year completed", config.years.map(function (year) {
      return { id: year, name: String(year) };
    }), filters.year);
    if (filters.career) results.querySelector("[data-projects-career]").hidden = true;

    var perPage = parseInt(query.get("prdisplay"), 10);
    if (PER_PAGE_OPTIONS.indexOf(perPage) < 0) perPage = PER_PAGE_OPTIONS[0];
    var perPageSelect = results.querySelector("#pr-type");
    PER_PAGE_OPTIONS.forEach(function (size) {
      var option = document.createElement("option");
      option.value = String(size);
      option.textContent = String(size);
      if (size === perPage) option.selected = true;
      perPageSelect.appendChild(option);
    });

    // Choosing from a dropdown applies it straight away, as on the original site.
    var form = results.querySelector("form");
    ["#pr-career", "#pr-country", "#pr-year", "#pr-type"].forEach(function (selector) {
      results.querySelector(selector).addEventListener("change", function () { form.submit(); });
    });

    // Project cards and page numbers
    var found = config.projects.filter(matches);
    var totalPages = Math.max(1, Math.ceil(found.length / perPage));
    var page = parseInt(query.get("page"), 10);
    if (!(page >= 1)) page = 1;
    if (page > totalPages) page = totalPages;
    var cards = results.querySelector("[data-projects-cards]");
    found.slice((page - 1) * perPage, page * perPage).forEach(function (project) {
      cards.appendChild(buildCard(project));
    });
    results.querySelector("[data-projects-empty]").hidden = found.length > 0;
    buildPagination(results.querySelector(".pagination"), page, totalPages);

    results.hidden = false;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
