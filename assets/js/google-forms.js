"use strict";
/* =====================================================================
   GOOGLE FORMS CONNECTION
   ---------------------------------------------------------------------
   Everything that sends a visitor's form to Google Forms lives in this
   one file (owner's rule, November 2026). main.js still builds and checks
   the forms; once a form passes its checks, main.js hands it to this file
   (look for "PEBGoogleForms" in main.js).

   How sending works:
   - Each Google Form has an address ending in /formResponse, and each
     question has an id like "entry.1709889650".
   - We copy the visitor's answers into those ids and POST them to that
     address in the background (fetch with mode "no-cors").
   - "no-cors" means Google does not tell the website whether it worked,
     so the site thanks the visitor once the request has gone out.

   Everything in this file is public (anyone can read a website's code).
   That is fine for a Google Form address and question ids, but NEVER put
   passwords, API keys or the link to the responses spreadsheet here.

   This file is loaded on every page, because the two popup forms (profile
   download and project details) can open on any page. It also holds the
   spam trap ("honeypot") for every lead form; see SPAM TRAP below.

   To connect another form: add an entry to FORMS below (find the ids with
   the Google Form's "Get pre-filled link").
   To stop a form sending: remove its entry from FORMS (it goes back to the
   "not connected yet" note from main.js).
   ===================================================================== */
(function () {
  var FORMS = {
    // Contact page message form (contact/contact.html, <form id="frm-contact">)
    // Google Form: "PEB Website - Contact Messages", connected 2026-11-19.
    contact: {
      selector: "#frm-contact",
      action: "https://docs.google.com/forms/d/e/1FAIpQLSc8jgz6S9u-wMMwXgBRwmR0tk25hmMNSE-bfDIulIdw1fuDWg/formResponse",
      // site field name  ->  Google Form question id
      fields: {
        full_name: "entry.1709889650",    // Full name
        phone_number: "entry.1654870492", // Phone number
        email: "entry.1887597339",        // Email (required)
        address: "entry.744174662",       // Address
        content: "entry.1127318535"       // Message ("Describe your needs")
      },
      // "Source page" question: where the message came from, filled in by sourceFor() below
      sourceField: "entry.465072326",
      sourceName: "Contact page",
      thanks: "Thank you! Your message has been sent. Our team will get back to you as soon as possible. For urgent concerns, call 0917-832-0004."
    },

    // Both popups share one Google Form, "PEB Website - Leads":
    //  - the "Download our profile" popup (footer, every page, form name="profileForm")
    //  - the project details popup (seico.vn links and "See all" buttons, form name="intlProjectsForm")
    // Connected 2026-11-20. To switch it off, set action to "" (the popups then work as before
    // and send nothing).
    leads: {
      selector: 'form[name="profileForm"], form[name="intlProjectsForm"]',
      action: "https://docs.google.com/forms/d/e/1FAIpQLSf67Hsxp8JwxI6a8tep7kyivZ5CUx04NsrmpiHEtKstK0LioQ/formResponse",
      // answer  ->  Google Form question id; the answers come from collect() below
      fields: {
        name: "entry.2011820868",     // Full name
        email: "entry.84385839",      // Email
        phone: "entry.1976237517",    // Phone number
        consent: "entry.897513139",   // Consent
        source: "entry.1047333423"    // Source
      },
      // Reads the answers from whichever popup was sent.
      collect: function (form) {
        var profile = form.getAttribute("name") === "profileForm";
        var phone = valueOf(form, profile ? "phone_number" : "phone");
        if (/^(\+\d*\s*)?$/.test(phone)) phone = "";   // only the country code (+63) = no number given
        return {
          name: profile ? (valueOf(form, "firstname") + " " + valueOf(form, "lastname")).trim() : valueOf(form, "fullname"),
          email: valueOf(form, "email"),
          phone: phone,
          // Both popups have a required consent box (the profile popup since 2026-11-20).
          consent: form.elements.consent && form.elements.consent.checked ? "Yes, agreed to be contacted (Privacy Policy)" : "No",
          source: profile ? "Profile download - page: " + document.title
            : "Project details - " + valueOf(form, "source")
        };
      }
    },

    // Consultation page (contact/consultation.html, <form id="consultation-request">).
    // Google Form: "PEB Website - Consultation Requests" (made by the owner, every question a
    // Short answer / Paragraph), connected 2026-11-20. To switch it off, set action to "" (the page
    // then says the form is not connected yet).
    consultation: {
      selector: "form#consultation-request",
      action: "https://docs.google.com/forms/d/e/1FAIpQLScHQqtCpyz8VRG5TpIPeO-X1KB70lAz1McICqATAWqu30k4Iw/formResponse",
      // answer  ->  Google Form question id ("entry.123...")
      fields: {
        name: "entry.1279087059",              // 1  Customer name / contact person
        phone: "entry.1636363232",             // 2  Contact number
        email: "entry.2130867093",             // 3  Email address
        clientType: "entry.2126196263",        // 4  Type of client
        position: "entry.2118845622",          // 5  Position in the company
        decisionMaker: "entry.1028216661",     // 6  Decision maker
        projectName: "entry.1402617842",       // 7  Project name
        projectLocation: "entry.637109936",   // 8  Project location
        orderType: "entry.135379534",         // 9  Type of order
        startDate: "entry.277201428",         // 10 Planned start date
        floorArea: "entry.837791602",         // 11 Estimated floor area
        importLicense: "entry.455671942",     // 12 Import license / broker
        transaction: "entry.535403238",       // 13 Type of transaction
        estimate: "entry.1621107331",          // 14 Type of estimate needed
        plans: "entry.1112092793",             // 15 Link to plans
        experience: "entry.546827960",        // 16 Experience with PEB steel
        suppliers: "entry.3846841",         // 17 Previous PEB suppliers
        source: "entry.1112008170"             // 18 Source
      },
      collect: function (form) {
        // A choice question: the picked answer, or "Other: <what they typed>".
        function choice(name) {
          var picked = form.querySelector('input[name="' + name + '"]:checked');
          if (!picked) return "";
          if (picked.value !== "Other") return picked.value;
          var typed = valueOf(form, name + "_other");
          return typed ? "Other: " + typed : "Other";
        }
        return {
          name: valueOf(form, "customer_name"),
          phone: valueOf(form, "contact_number"),
          email: valueOf(form, "email"),
          clientType: choice("client_type"),
          position: valueOf(form, "position"),
          decisionMaker: choice("decision_maker"),
          projectName: valueOf(form, "project_name"),
          projectLocation: valueOf(form, "project_location"),
          orderType: choice("order_type"),
          startDate: valueOf(form, "start_date"),        // YYYY-MM-DD, which Google Sheets reads as a date
          floorArea: valueOf(form, "floor_area"),
          importLicense: choice("import_license"),
          transaction: choice("transaction_type"),
          estimate: choice("estimate_type"),
          plans: valueOf(form, "plans_link"),
          experience: choice("peb_experience"),
          suppliers: valueOf(form, "previous_suppliers"),
          source: "Consultation page"
        };
      },
      thanks: "Thank you! Your consultation request has been sent. Our team will review your project details and get back to you. For urgent concerns, call 0917-832-0004."
    }
  };

  var FAILED = "Sorry, your message could not be sent. Please check your internet connection and try again, or call 0917-832-0004 or email inquiry@pebphilippines.com.";
  var TIMEOUT_MS = 15000;   // give up after 15 seconds without a connection
  var MAX_LENGTH = 5000;    // longest answer sent for one field

  /* ---- SPAM TRAP (honeypot) -------------------------------------------
     Every lead form gets one extra text box that people never see: it sits
     off-screen, is skipped by the Tab key and is hidden from screen readers.
     Spam robots fill in every box they find, so if this box has anything
     in it, the form came from a robot. The robot is shown the normal
     "thank you" (so it doesn't try again), but nothing is sent.
     The forms it protects (all four lead forms on the site):          */
  var TRAP_FORMS = [
    "#frm-contact",                    // Contact page message form
    "form#consultation-request",       // Consultation page
    'form[name="profileForm"]',        // "Download our profile" popup (footer, every page)
    'form[name="intlProjectsForm"]'    // Project details popup (seico.vn links, "See all" buttons)
  ].join(", ");
  var TRAP_NAME = "website";           // a name robots like to fill in; never sent to Google

  function addTrap(form) {
    if (form.querySelector("[data-hp]")) return;
    var box = document.createElement("div");
    box.className = "hp-field";        // hidden off-screen by main.css
    box.setAttribute("aria-hidden", "true");
    box.innerHTML = '<label>Leave this box empty <input type="text" name="' + TRAP_NAME +
      '" value="" tabindex="-1" autocomplete="off" data-hp></label>';
    form.insertBefore(box, form.firstChild);
  }

  // true when the hidden box was filled in, i.e. a robot sent the form
  function isSpam(form) {
    var trap = form.querySelector("[data-hp]");
    return !!(trap && trap.value !== "");
  }

  // The popups are built by main.js, which runs before this file, so all four forms exist by now.
  Array.prototype.forEach.call(document.querySelectorAll(TRAP_FORMS), addTrap);

  function configFor(form) {
    for (var key in FORMS) {
      if (Object.prototype.hasOwnProperty.call(FORMS, key) && form.matches(FORMS[key].selector)) return FORMS[key];
    }
    return null;
  }

  // "Contact page", or "Contact page - project: Mitsubishi Showroom ..." when the visitor
  // came from a project card's "Build something like this" link (contact.html?project=...).
  function sourceFor(config) {
    var project = new URLSearchParams(window.location.search).get("project");
    return project ? config.sourceName + " - project: " + project.slice(0, 120) : config.sourceName;
  }

  function valueOf(form, name) {
    var field = form.elements[name];
    return field && typeof field.value === "string" ? field.value.trim().slice(0, MAX_LENGTH) : "";
  }

  // Shows the result under the form (re-uses the note main.js uses), and announces it to screen readers.
  function showStatus(form, text, ok) {
    var note = form.querySelector("[data-replica-form-note], .replica-form-template-note");
    if (!note) {
      note = document.createElement("p");
      form.appendChild(note);
    }
    note.setAttribute("data-replica-form-note", "true");
    note.setAttribute("role", "status");
    note.className = "gf-status " + (ok ? "gf-status--ok" : "gf-status--error");
    note.textContent = text;
  }

  function setSending(form, sending) {
    var button = form.querySelector('[type="submit"]');
    form.setAttribute("data-sending", sending ? "true" : "false");
    if (!button) return;
    if (sending) {
      button.setAttribute("data-label", button.innerHTML);
      button.textContent = "Sending...";
      button.disabled = true;
    } else {
      if (button.getAttribute("data-label")) button.innerHTML = button.getAttribute("data-label");
      button.disabled = false;
    }
  }

  // The answers as Google expects them: question id = answer.
  function bodyFor(config, form) {
    var body = new URLSearchParams();
    if (config.collect) {
      var values = config.collect(form);
      Object.keys(config.fields).forEach(function (key) {
        if (config.fields[key]) body.append(config.fields[key], String(values[key] || "").slice(0, MAX_LENGTH));
      });
    } else {
      Object.keys(config.fields).forEach(function (name) {
        body.append(config.fields[name], valueOf(form, name));
      });
    }
    if (config.sourceField) body.append(config.sourceField, sourceFor(config));
    return body;
  }

  // Sends in the background; gives up after TIMEOUT_MS. keepalive lets the send finish even if
  // the visitor moves on to another page straight away (the project popup goes to seico.vn).
  function post(config, form) {
    var controller = window.AbortController ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, TIMEOUT_MS) : null;
    return fetch(config.action, { method: "POST", mode: "no-cors", keepalive: true, body: bodyFor(config, form), signal: controller ? controller.signal : undefined })
      .then(function (response) { if (timer) clearTimeout(timer); return response; },
        function (error) { if (timer) clearTimeout(timer); throw error; });
  }

  // For the popups: sends without showing a message, because the popup moves on by itself
  // (to the downloads, to the project list or to seico.vn). Always resolves, even on failure.
  // A robot caught by the spam trap is not sent.
  function sendQuietly(form) {
    var config = configFor(form);
    if (!config || !config.action || isSpam(form)) return Promise.resolve();
    return post(config, form).then(function () {}, function () {});
  }

  function send(form) {
    var config = configFor(form);
    if (!config || form.getAttribute("data-sending") === "true") return;

    // ---- SPAM CHECKS ----
    // Robot caught by the spam trap: act as if it worked, send nothing.
    if (isSpam(form)) {
      form.reset();
      showStatus(form, config.thanks, true);
      return;
    }

    setSending(form, true);
    post(config, form)
      .then(function () {
        form.reset();
        showStatus(form, config.thanks, true);
      })
      .catch(function () {
        showStatus(form, FAILED, false);
      })
      .then(function () {
        setSending(form, false);
      });
  }

  // Used by main.js:
  //   PEBGoogleForms.handles(form)      "is this form connected?" (listed above, with an address)
  //   PEBGoogleForms.send(form)         sends a page form and shows the result under it
  //   PEBGoogleForms.sendQuietly(form)  sends a popup form, no message (returns a Promise)
  //   PEBGoogleForms.isSpam(form)       "did a robot fill this in?" (the consultation form,
  //                                     not connected yet, checks it before sending)
  window.PEBGoogleForms = {
    handles: function (form) { var config = configFor(form); return !!(config && config.action); },
    send: send,
    sendQuietly: sendQuietly,
    isSpam: isSpam
  };
})();
