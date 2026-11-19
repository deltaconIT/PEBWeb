/* FROZEN COPY of assets/js/main.js, November 2026. Used only by archived pages. Do not edit for the live site. */
"use strict";
/* =====================================================================
   SEICO WEBSITE - MAIN SCRIPT
   ---------------------------------------------------------------------
   Loaded at the bottom of every page, after the libraries in vendor/js/.

   PART 1  Site data  - page list used by the search box, and the
                        office / factory locations for the network map.
                        Edit the lists below; links are written relative
                        to the website root (the folder with index.html).
   PART 2  Site code  - menus, search, sliders, map, forms, etc.
   ===================================================================== */


/* =====================================================================
   PART 1 - SITE DATA
   ===================================================================== */
(function () {
  // Website root, worked out from this file's own address (assets/js/main.js),
  // so links work from any folder depth, from a web server or opened locally.
  var self = document.currentScript;
  var root = self ? self.src.replace(/archive\/assets\/js\/old-main\.js([?#].*)?$/, "") : "";
  var fromRoot = function (path) { return root ? new URL(path, root).href : path; };

  // ---- Pages (used by the search box) --------------------------------
  // path  = page address on the live site, title = text shown in search,
  // href  = file in this folder.
  var pages = [
    {"path": "/", "title": "Home | PEB Philippines - Pre-engineered steel buildings & steel structures", "href": "index.html"},
    {"path": "/about/about.html", "title": "About Us | PEB Philippines", "href": "about/about.html"},
    {"path": "/projects/projects.html", "title": "Pre-engineered steel building, civil steel building and factory projects ...", "href": "projects/projects.html"},
    // {"path": "/archive/hidden-pages/news-publications/news-publications.html", "title": "News & publications | PEB Philippines - Pre-engineered steel...", "href": "archive/hidden-pages/news-publications/news-publications.html"},
    {"path": "/contact/contact.html", "title": "Contact | PEB Philippines - Pre-engineered steel buildings & steel structures", "href": "contact/contact.html"},
    // {"path": "/archive/hidden-pages/careers/careers.html", "title": "Careers | PEB Philippines - Pre-engineered steel buildings & steel structures", "href": "archive/hidden-pages/careers/careers.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/radiant-seico-photo-contest-celebrating-the-women-of-seico-20-10-4358.html", "title": "“RADIANT SEICO” PHOTO CONTEST – CELEBRATING THE WOMEN...", "href": "archive/hidden-pages/news-publications/articles/radiant-seico-photo-contest-celebrating-the-women-of-seico-20-10-4358.html"},
    {"path": "/projects/details/heller-vinfast.html", "title": "Heller-Vinfast | PEB Philippines - Pre-engineered factory construction", "href": "projects/details/heller-vinfast.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/pre-engineered-steel-structure-4349.html", "title": "What is a pre-engineered steel structure? Components and detailed structure", "href": "archive/hidden-pages/news-publications/articles/pre-engineered-steel-structure-4349.html"},
    // {"path": "/archive/hidden-pages/careers/jobs/marketing-manager.html", "title": "B2B Marketing Manager | PEB Philippines - Pre-engineered steel...", "href": "archive/hidden-pages/careers/jobs/marketing-manager.html"},
    {"path": "/products-services/pre-engineered-steel-building/pre-engineered-steel-building.html", "title": "What is a pre-engineered steel building? Structure, applications and prices", "href": "products-services/pre-engineered-steel-building/pre-engineered-steel-building.html"},
    {"path": "/products-services/services/installation.html", "title": "Installation process | PEB Philippines - Pre-engineered steel buildings...", "href": "products-services/services/installation.html"},
    {"path": "/products-services/services/fabrication.html", "title": "Steel structure manufacturing process | PEB Philippines - Pre-engineered...", "href": "products-services/services/fabrication.html"},
    {"path": "/products-services/services/design.html", "title": "Design | PEB Philippines - Pre-engineered steel buildings & steel structures", "href": "products-services/services/design.html"},
    {"path": "/products-services/steel-structure/steel-structure-description.html", "title": "Steel structure description | PEB Philippines - Pre-engineered steel...", "href": "products-services/steel-structure/steel-structure-description.html"},
    {"path": "/products-services/steel-structure/steel-structure-applications.html", "title": "Steel structure applications | PEB Philippines - Pre-engineered steel...", "href": "products-services/steel-structure/steel-structure-applications.html"},
    {"path": "/products-services/pre-engineered-steel-building/secondary-structure.html", "title": "Secondary structure | PEB Philippines - Pre-engineered factory construction", "href": "products-services/pre-engineered-steel-building/secondary-structure.html"},
    {"path": "/products-services/pre-engineered-steel-building/standard-frames.html", "title": "Secondary structure | PEB Philippines - Pre-engineered factory construction", "href": "products-services/pre-engineered-steel-building/standard-frames.html"},
    {"path": "/products-services/pre-engineered-steel-building/pre-engineered-steel-building-description.html", "title": "Affordable pre-engineered steel frame construction, a solution for...", "href": "products-services/pre-engineered-steel-building/pre-engineered-steel-building-description.html"},
    {"path": "/products-services/pre-engineered-steel-building/pre-engineered-steel-building-applications.html", "title": "Versatile applications of pre-engineered steel buildings | PEB Philippines", "href": "products-services/pre-engineered-steel-building/pre-engineered-steel-building-applications.html"},
    {"path": "/products-services/accessory-products/sp-deck.html", "title": "SP Deck floor: an integrated composite floor solution from PEB Philippines", "href": "products-services/accessory-products/sp-deck.html"},
    {"path": "/products-services/accessory-products/roof-and-wall-panels.html", "title": "Cladding profile for roof and walls | PEB Philippines", "href": "products-services/accessory-products/roof-and-wall-panels.html"},
    // {"path": "/archive/hidden-pages/news-publications/publications.html", "title": "Publications | PEB Philippines - Pre-engineered steel buildings & steel structures", "href": "archive/hidden-pages/news-publications/publications.html"},
    // {"path": "/archive/hidden-pages/news-publications/news.html", "title": "News | PEB Philippines - Pre-engineered steel buildings & steel structures", "href": "archive/hidden-pages/news-publications/news.html"},
    {"path": "/projects/details/phuong-dong-tent-complex-van-don.html", "title": "PHUONG DONG TENT COMPLEX - VAN DON | PEB Philippines", "href": "projects/details/phuong-dong-tent-complex-van-don.html"},
    {"path": "/projects/details/metro-line-1-ben-thanh-suoi-tien.html", "title": "Metro Line No. 1, Ben Thanh - Suoi Tien", "href": "projects/details/metro-line-1-ben-thanh-suoi-tien.html"},
    {"path": "/projects/details/bw-dong-hai-cn4-2.html", "title": "BW Dong Hai CN4-2 | PEB Philippines", "href": "projects/details/bw-dong-hai-cn4-2.html"},
    {"path": "/projects/details/foxconn-factory.html", "title": "Foxconn Factory | PEB Philippines", "href": "projects/details/foxconn-factory.html"},
    {"path": "/projects/details/greenfeed-hung-yen-factory.html", "title": "GreenFeed Hung Yen Factory | PEB Philippines", "href": "projects/details/greenfeed-hung-yen-factory.html"},
    {"path": "/projects/details/canadian-international-school-complex-lao-cai-cis-lao-cai.html", "title": "Canadian International School complex in Lao Cai (CIS Lao Cai) | PEB Philippines", "href": "projects/details/canadian-international-school-complex-lao-cai-cis-lao-cai.html"},
    {"path": "/projects/details/xuan-thien-feed-mill.html", "title": "XUAN THIEN FEED MILL | PEB Philippines", "href": "projects/details/xuan-thien-feed-mill.html"},
    {"path": "/projects/details/high-tech-export-poultry-farm-4a-cao-ngoc.html", "title": "HIGH-TECH EXPORT POULTRY FARM - 4A CAO NGOC | PEB Philippines", "href": "projects/details/high-tech-export-poultry-farm-4a-cao-ngoc.html"},
    {"path": "/projects/details/core-5-factory.html", "title": "CORE 5 Factory | PEB Philippines", "href": "projects/details/core-5-factory.html"},
    {"path": "/projects/details/light-building-high-tech-pig-farm.html", "title": "Light building for a high-tech pig farm | PEB Philippines", "href": "projects/details/light-building-high-tech-pig-farm.html"},
    {"path": "/projects/details/messer-industrial-gas-plant.html", "title": "MESSER INDUSTRIAL GAS PLANT | PEB Philippines", "href": "projects/details/messer-industrial-gas-plant.html"},
    {"path": "/projects/details/nam-tai-factory.html", "title": "Nam Tai Factory | PEB Philippines", "href": "projects/details/nam-tai-factory.html"},
    {"path": "/projects/details/factory-at-an-phat-high-tech-industrial-park.html", "title": "FACTORY AT AN PHAT HIGH-TECH INDUSTRIAL PARK | PEB Philippines", "href": "projects/details/factory-at-an-phat-high-tech-industrial-park.html"},
    {"path": "/projects/details/thai-tuan-textile-finishing-factory.html", "title": "Thai Tuan Textile Finishing Factory | PEB Philippines", "href": "projects/details/thai-tuan-textile-finishing-factory.html"},
    {"path": "/projects/details/taisan-factory.html", "title": "TAISAN FACTORY | PEB Philippines", "href": "projects/details/taisan-factory.html"},
    {"path": "/projects/details/huong-binh-cable-car-line.html", "title": "HUONG BINH CABLE CAR LINE | PEB Philippines", "href": "projects/details/huong-binh-cable-car-line.html"},
    {"path": "/projects/details/fujix-electronic-factory.html", "title": "Fujix Electronic Factory | PEB Philippines", "href": "projects/details/fujix-electronic-factory.html"},
    {"path": "/projects/details/autoliv-factory.html", "title": "Autoliv Factory | PEB Philippines", "href": "projects/details/autoliv-factory.html"},
    {"path": "/projects/details/nitto-denko-vietnam-factory.html", "title": "Nitto Denko Vietnam Factory | PEB Philippines", "href": "projects/details/nitto-denko-vietnam-factory.html"},
    {"path": "/projects/details/190-factory.html", "title": "Factory 190 | PEB Philippines", "href": "projects/details/190-factory.html"},
    {"path": "/projects/details/trancy-distribution-center.html", "title": "Trancy Distribution Center | PEB Philippines", "href": "projects/details/trancy-distribution-center.html"},
    {"path": "/projects/details/tan-a-factory.html", "title": "Tan A Factory | PEB Philippines", "href": "projects/details/tan-a-factory.html"},
    {"path": "/projects/details/tp-tech-factory.html", "title": "TP Tech Factory | PEB Philippines", "href": "projects/details/tp-tech-factory.html"},
    {"path": "/projects/details/power-plus-technology-factory.html", "title": "Power Plus Technology factory | PEB Philippines", "href": "projects/details/power-plus-technology-factory.html"},
    {"path": "/projects/details/van-don-entertainment-complex.html", "title": "Van Don urban area | PEB Philippines", "href": "projects/details/van-don-entertainment-complex.html"},
    {"path": "/projects/details/cfg-factory.html", "title": "CFG Float Glass Factory | PEB Philippines", "href": "projects/details/cfg-factory.html"},
    {"path": "/projects/details/logis-valley.html", "title": "Logis Valley Factory | PEB Philippines", "href": "projects/details/logis-valley.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/pre-engineered-factory-building-4339.html", "title": "Pre-engineered factory buildings: structure, advantages & prices 2026 | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/pre-engineered-factory-building-4339.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/pre-engineered-steel-building-erection-4337.html", "title": "5-step standard, safe pre-engineered steel building erection process 2026 | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/pre-engineered-steel-building-erection-4337.html"},
    {"path": "/products-services/products-services.html", "title": "Products & Services | PEB Philippines", "href": "products-services/products-services.html"},
    {"path": "/shared/privacy-policy.html", "title": "Policy & Privacy | PEB Philippines", "href": "shared/privacy-policy.html"},
    {"path": "/about/about.html#vision-mission", "title": "Vision, Mission, Core Values | PEB Philippines", "href": "about/about.html#vision-mission"},
    {"path": "/about/about.html#qhse", "title": "QHSE | PEB Philippines", "href": "about/about.html#qhse"},
    {"path": "/about/about.html#qhse-quality", "title": "Quality | PEB Philippines", "href": "about/about.html#qhse-quality"},
    {"path": "/about/about.html#qhse-health", "title": "Health | PEB Philippines", "href": "about/about.html#qhse-health"},
    {"path": "/about/about.html#qhse-safety", "title": "Safety | PEB Philippines", "href": "about/about.html#qhse-safety"},
    {"path": "/about/about.html#qhse-environment", "title": "Environment | PEB Philippines", "href": "about/about.html#qhse-environment"},
    {"path": "/about/about.html#certificates", "title": "Certificates & awards | PEB Philippines", "href": "about/about.html#certificates"},
    // {"path": "/archive/hidden-pages/news-publications/news/company-news.html", "title": "Company news | PEB Philippines", "href": "archive/hidden-pages/news-publications/news/company-news.html"},
    // {"path": "/archive/hidden-pages/news-publications/news/pre-engineered-steel-buildings.html", "title": "Pre-engineered steel buildings | PEB Philippines", "href": "archive/hidden-pages/news-publications/news/pre-engineered-steel-buildings.html"},
    // {"path": "/archive/hidden-pages/news-publications/news/sp-deck.html", "title": "SP Deck | PEB Philippines", "href": "archive/hidden-pages/news-publications/news/sp-deck.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/pre-engineered-steel-building-prices-4336.html", "title": "Pre-engineered steel building prices: updated construction costs | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/pre-engineered-steel-building-prices-4336.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/steel-frame-building-4335.html", "title": "Steel frame buildings: prices & optimal construction solutions 2026 | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/steel-frame-building-4335.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/what-is-sp-deck-why-it-carries-more-load-and-spans-further-than-standard-deck-4106.html", "title": "What is SP Deck? Why does it carry more load and span further than standard deck floors? | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/what-is-sp-deck-why-it-carries-more-load-and-spans-further-than-standard-deck-4106.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/sp-deck-when-investors-buy-schedule-and-peace-of-mind-not-just-a-floor-4135.html", "title": "SP DECK – When investors buy schedule and peace of mind, not just a floor system | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/sp-deck-when-investors-buy-schedule-and-peace-of-mind-not-just-a-floor-4135.html"},
    {"path": "/projects/industrial-projects.html", "title": "Industrial projects | PEB Philippines", "href": "projects/industrial-projects.html"},
    {"path": "/projects/details/shinwon-factory.html", "title": "Shinwon Factory | PEB Philippines", "href": "projects/details/shinwon-factory.html"},
    {"path": "/projects/details/molex-hung-yen.html", "title": "MOLEX - HUNG YEN | PEB Philippines", "href": "projects/details/molex-hung-yen.html"},
    {"path": "/projects/details/tinh-loi-factory.html", "title": "Tinh Loi Factory blocks 3 & 4 | PEB Philippines", "href": "projects/details/tinh-loi-factory.html"},
    {"path": "/projects/details/mcs.html", "title": "MCS 4 Project | PEB Philippines", "href": "projects/details/mcs.html"},
    {"path": "/projects/details/denyo-factory-phase-1.html", "title": "Denyo Factory Phase 1 | PEB Philippines", "href": "projects/details/denyo-factory-phase-1.html"},
    {"path": "/projects/details/damen-shipyard.html", "title": "Damen Shipyard | PEB Philippines", "href": "projects/details/damen-shipyard.html"},
    {"path": "/projects/details/shin-etsu-dviz-factory.html", "title": "Shin Etsu DVIZ Factory | PEB Philippines", "href": "projects/details/shin-etsu-dviz-factory.html"},
    {"path": "/projects/details/nikkiso-factory.html", "title": "Nikkiso Factory | PEB Philippines", "href": "projects/details/nikkiso-factory.html"},
    {"path": "/projects/details/mitsubishi-heavy-industries-factory.html", "title": "MHI Aerospace Vietnam | PEB Philippines", "href": "projects/details/mitsubishi-heavy-industries-factory.html"},
    {"path": "/products-services/steel-structure/steel-structure.html", "title": "Steel structure | PEB Philippines", "href": "products-services/steel-structure/steel-structure.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/is-your-steel-building-ready-for-earthquakes-3614.html", "title": "IS YOUR STEEL BUILDING READY FOR EARTHQUAKES? | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/is-your-steel-building-ready-for-earthquakes-3614.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/light-steel-buildings-for-livestock-farms-4359.html", "title": "Light steel buildings for livestock farms: cost-optimized & efficient to operate | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/light-steel-buildings-for-livestock-farms-4359.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/light-steel-truss-frame-4357.html", "title": "Light steel truss frames | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/light-steel-truss-frame-4357.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/factory-construction-4356.html", "title": "factory construction | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/factory-construction-4356.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/pre-engineered-steel-buildings-in-agriculture-4353.html", "title": "pre-engineered steel buildings in agriculture | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/pre-engineered-steel-buildings-in-agriculture-4353.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/light-steel-structure-4351.html", "title": "Light steel structure | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/light-steel-structure-4351.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/steel-structure-weld-inspection-methods-3606.html", "title": "EXPLORING WELD INSPECTION METHODS FOR STEEL STRUCTURES | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/steel-structure-weld-inspection-methods-3606.html"},
    {"path": "/products-services/accessory-products/what-is-a-deck-floor.html", "title": "What is a deck floor? | PEB Philippines", "href": "products-services/accessory-products/what-is-a-deck-floor.html"},
    {"path": "/products-services/accessory-products/deck-floor-h50w1000.html", "title": "H50W1000 deck floor | PEB Philippines", "href": "products-services/accessory-products/deck-floor-h50w1000.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/seico-breaks-ground-on-ready-built-factory-and-warehouse-project-in-hai-phong-3949.html", "title": "SEICO: BREAKS GROUND ON READY-BUILT FACTORY AND WAREHOUSE PROJECT IN HAI PHONG | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/seico-breaks-ground-on-ready-built-factory-and-warehouse-project-in-hai-phong-3949.html"},
    {"path": "/products-services/steel-structure/steel-structure-design-to-american-standards.html", "title": "Steel structure design to American standards | PEB Philippines", "href": "products-services/steel-structure/steel-structure-design-to-american-standards.html"},
    {"path": "/projects/details/bac-giang-logistics-park-2-warehouse.html", "title": "BAC GIANG LOGISTICS PARK 2 WAREHOUSE | PEB Philippines", "href": "projects/details/bac-giang-logistics-park-2-warehouse.html"},
    {"path": "/projects/details/concordia-international-school-hanoi.html", "title": "Concordia International School Hanoi | PEB Philippines", "href": "projects/details/concordia-international-school-hanoi.html"},
    {"path": "/projects/details/steel-structure-and-high-tech-equipment-manufacturing-plant.html", "title": "STEEL STRUCTURE AND HIGH-TECH EQUIPMENT MANUFACTURING PLANT | PEB Philippines", "href": "projects/details/steel-structure-and-high-tech-equipment-manufacturing-plant.html"},
    {"path": "/projects/details/hai-phong-outdoor-goods-factory.html", "title": "OUTDOOR GOODS FACTORY – HAI PHONG | PEB Philippines", "href": "projects/details/hai-phong-outdoor-goods-factory.html"},
    {"path": "/projects/details/hoa-thanh-shoe-factory.html", "title": "HOA THANH SHOE FACTORY | PEB Philippines", "href": "projects/details/hoa-thanh-shoe-factory.html"},
    {"path": "/projects/details/pt-da-nang.html", "title": "PT DA NANG | PEB Philippines", "href": "projects/details/pt-da-nang.html"},
    {"path": "/projects/details/vina-feed-mill.html", "title": "Vina Feed Mill Factory | PEB Philippines", "href": "projects/details/vina-feed-mill.html"},
    {"path": "/philippine-partners/philippine-partners.html", "title": "Philippine Partners | PEB Philippines", "href": "philippine-partners/philippine-partners.html"},
    {"path": "/products-services/accessory-products/industrial-paint.html", "title": "Industrial paint | PEB Philippines", "href": "products-services/accessory-products/industrial-paint.html"},
    {"path": "/products-services/light-buildings.html", "title": "Light buildings | PEB Philippines", "href": "products-services/light-buildings.html"},
    {"path": "/shared/document-template.html", "title": "Product catalogue | PEB Philippines", "href": "shared/document-template.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/industrial-building-steel-frame-design-4340.html", "title": "Industrial building steel frame design: process and common frame types 2026 | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/industrial-building-steel-frame-design-4340.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/pre-engineered-steel-building-design-4338.html", "title": "Pre-engineered steel building design | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/pre-engineered-steel-building-design-4338.html"},
    {"path": "/projects/details/chadwick-international-school-in-vietnam.html", "title": "Chadwick International School in Vietnam | PEB Philippines", "href": "projects/details/chadwick-international-school-in-vietnam.html"}
  ];

  // ---- Offices & factories (network map on the About / Contact pages) --
  var network = {
    "office": [
      {
        "id": "quezon_city_branch",
        "name": {
          "en": "QUEZON CITY OFFICE"
        },
        "address": {
          "en": "Delta Unit 204, L & LV Benitez Bldg., 53 N. Ramirez St., Don Manuel, Quezon City"
        },
        "phone": "0917-832-0004",
        "email": "inquiry@pebphilippines.com",
        "image": "assets/images/qcbranchpic-cropped.jpg",
        "coords": {
          "x": 61.8,
          "y": 41.2
        }
      },
      {
        "id": "philippines_branch",
        "name": {
          "en": "PASIG BRANCH"
        },
        "address": {
          "en": "Room 305 Semicon Corporate Building, 50 Marcos Highway, Brgy. Dela Paz, Pasig City"
        },
        "phone": "0917-832-0004",
        "email": "inquiry@pebphilippines.com",
        "image": "assets/images/f0ea356290f4-VP-Philippines.webp",
        "coords": {
          "x": 62.5,
          "y": 42.5
        }
      }
    ],
    "factory": [
      {
        "id": "factory_1",
        "name": {
          "en": "FACTORY NO. 1"
        },
        "address": {
          "en": "National Highway 5, Mao Dien commune, Hai Phong City, Vietnam"
        },
        "phone": "",
        "email": "",
        "image": "assets/images/6237b91236f4-nhamayso2.webp",
        "coords": {
          "x": 31.5,
          "y": 27.5
        }
      },
      {
        "id": "factory_2",
        "name": {
          "en": "FACTORY NO. 2"
        },
        "address": {
          "en": "Lot CN7-2, Tan Truong Industrial Park, Mao Dien commune, Hai Phong City, Vietnam"
        },
        "phone": "",
        "email": "",
        "image": "assets/images/71fad5b94a43-2015_Nh-m-y-SBC.webp",
        "coords": {
          "x": 31.5,
          "y": 28.2
        }
      },
      {
        "id": "factory_3",
        "name": {
          "en": "FACTORY NO. 3"
        },
        "address": {
          "en": "Mao Dien, Hai Phong, Vietnam"
        },
        "phone": "",
        "email": "",
        "image": "assets/images/80cd3a2f16c7-nhamayso3.jpg",
        "coords": {
          "x": 31.9,
          "y": 28.6
        }
      },
      {
        "id": "factory_4",
        "name": {
          "en": "FACTORY PAINT"
        },
        "address": {
          "en": "Mao Dien, Hai Phong, Vietnam"
        },
        "phone": "",
        "email": "",
        "image": "assets/images/390e54a2a103-NMSon.jpg",
        "coords": {
          "x": 31.9,
          "y": 28.6
        }
      }
    ]
  };

  pages.forEach(function (page) { page.href = fromRoot(page.href); });
  Object.keys(network).forEach(function (group) {
    network[group].forEach(function (place) { if (place.image) place.image = fromRoot(place.image); });
  });

  // Current page address, e.g. "/lien-he.html" ("/" on the home page)
  var here = root ? decodeURI(location.href.split(/[?#]/)[0]).replace(decodeURI(root), "") : "";
  window.SEICO_PATH = here === "" || here === "index.html" ? "/" : "/" + here;
  window.SEICO_ROOT = root;
  window.SEICO_PAGES = pages;
  window.SEICO_NETWORK = network;
})();


/* =====================================================================
   PART 2 - SITE CODE  (menus, search, sliders, map, forms ...)
   ===================================================================== */
(() => {
  // client/src/lib/networkMap.ts
  function initializeNetworkMap(root) {
    const section = root.querySelector(".sei_network_map");
    if (!section) return () => {
    };
    const controller = new AbortController();
    const listeners = [];
    const language = "en";
    let data;
    const bind = (element, callback) => {
      element.addEventListener("click", callback);
      listeners.push(() => element.removeEventListener("click", callback));
    };
    const text = (selector, value) => {
      const element = section.querySelector(selector);
      if (element) element.textContent = value;
      return element;
    };
    const details = (location) => {
      text("#info-loc-name", location.name[language] || location.name.vi);
      text("#info-loc-address", location.address[language] || location.address.vi);
      const phone = text("#info-loc-phone", location.phone || "");
      const email = text("#info-loc-email", location.email || "");
      if (phone == null ? void 0 : phone.closest("li")) phone.closest("li").style.display = location.phone ? "flex" : "none";
      if (email == null ? void 0 : email.closest("li")) email.closest("li").style.display = location.email ? "flex" : "none";
      const image = section.querySelector("#info-loc-image");
      if (image) {
        // a location without a photo ("image": "") hides the photo area
        const imageBox = image.closest(".info-image-container") || image;
        if (location.image) {
          image.src = location.image;
          image.alt = location.name[language] || location.name.vi;
          imageBox.style.display = "";
        } else {
          image.removeAttribute("src");
          image.alt = "";
          imageBox.style.display = "none";
        }
      }
      section.querySelectorAll(".map-pin").forEach((pin) => pin.classList.toggle("active", pin.id === `pin-${location.id}`));
      section.querySelectorAll(".list-group-item").forEach((item) => item.classList.toggle("active-item", item.id === `list-item-${location.id}`));
    };
    const render = (tab) => {
      const pins = section.querySelector(".map-pins-container");
      const list = section.querySelector("#locations-list-group");
      if (!pins || !list || !data[tab]) return;
      pins.replaceChildren();
      list.replaceChildren();
      for (const location of data[tab]) {
        const pin = document.createElement("div");
        pin.className = "map-pin";
        pin.id = `pin-${location.id}`;
        pin.style.left = `${location.coords.x}%`;
        pin.style.top = `${location.coords.y}%`;
        pin.title = location.name[language] || location.name.vi;
        pin.tabIndex = 0;
        pin.setAttribute("role", "button");
        pin.setAttribute("aria-label", pin.title);
        pin.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>';
        const item = document.createElement("div");
        item.className = "list-group-item";
        item.id = `list-item-${location.id}`;
        item.textContent = pin.title;
        item.tabIndex = 0;
        item.setAttribute("role", "button");
        bind(pin, () => details(location));
        bind(item, () => details(location));
        [pin, item].forEach((control) => {
          const handler = (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              details(location);
            }
          };
          control.addEventListener("keydown", handler);
          listeners.push(() => control.removeEventListener("keydown", handler));
        });
        pins.appendChild(pin);
        list.appendChild(item);
      }
      if (data[tab][0]) details(data[tab][0]);
      section.querySelectorAll(".tab-btn[data-tab]").forEach((button) => {
        var _a2;
        return (_a2 = button.parentElement) == null ? void 0 : _a2.classList.toggle("active", button.dataset.tab === tab);
      });
    };
    const embedded = window.SEICO_NETWORK;
    const networkPromise = embedded ? Promise.resolve(embedded) : fetch("/content/network.json", { signal: controller.signal }).then((response) => {
      if (!response.ok) throw new Error("Network data unavailable");
      return response.json();
    });
    networkPromise.then((network) => {
      if (!section.isConnected || controller.signal.aborted) return;
      data = network;
      render("office");
      section.querySelectorAll(".tab-btn[data-tab]").forEach((button) => bind(button, (event) => {
        event.preventDefault();
        const tab = button.dataset.tab;
        if (tab === "office" || tab === "factory") render(tab);
      }));
    }).catch(() => {
    });
    return () => {
      controller.abort();
      listeners.forEach((remove) => remove());
    };
  }

  // client/src/lib/articleExtras.ts
  function initializeArticleExtras(root) {
    const removers = [];
    const bind = (element, callback) => {
      element.addEventListener("click", callback);
      removers.push(() => element.removeEventListener("click", callback));
    };
    root.querySelectorAll(".item-slides-image-project-detail").forEach((thumbnail) => bind(thumbnail, () => {
      const image = thumbnail.querySelector("img");
      if (!image) return;
      const full = root.querySelector(".image_full img");
      const figure = root.querySelector(".image_full figure");
      if (full) {
        full.src = image.src;
        full.setAttribute("xoriginal", image.src);
      }
      if (figure) figure.style.backgroundImage = `url("${image.src}")`;
    }));
    root.querySelectorAll(".dropdown-menu > li > a.active").forEach((anchor2) => {
      var _a2, _b, _c;
      return (_c = (_b = (_a2 = anchor2.parentElement) == null ? void 0 : _a2.parentElement) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.classList.add("open");
    });
    root.querySelectorAll(".has-flyout-item").forEach((item) => {
      const submenu = item.querySelector(".project-flyout-menu");
      if (!submenu) return;
      const open = () => {
        submenu.style.display = "block";
      };
      const close = () => {
        submenu.style.display = "none";
      };
      item.addEventListener("mouseenter", open);
      item.addEventListener("mouseleave", close);
      item.addEventListener("focusin", open);
      item.addEventListener("focusout", close);
      removers.push(() => {
        item.removeEventListener("mouseenter", open);
        item.removeEventListener("mouseleave", close);
        item.removeEventListener("focusin", open);
        item.removeEventListener("focusout", close);
      });
    });
    const article = root.querySelector(".sei_intro");
    if (!article || window.location.pathname.includes("/gioi-thieu") || article.querySelector(".nav-tabs, .toc-container, .publications, .recruitment")) return () => removers.forEach((remove) => remove());
    const listCards = [...article.querySelectorAll("article.box-news, article.box-two, .row article")].filter((card) => !card.closest(".owl-carousel, .page_news"));
    if (listCards.length) return () => removers.forEach((remove) => remove());
    const headings = [...article.querySelectorAll("h2,h3,h4")].filter((heading) => !heading.closest(".nb_comment, .share_box, #comments, .comments-list, .comment-respond, .comments-section, .comments-form-wrapper, #comments-section, .page-left, .aside, .rating-summary-box, .owl-carousel, .page_news"));
    if (headings.length < 2) return () => removers.forEach((remove) => remove());
        const container = document.createElement("div");
    container.className = "toc-container";
    const header = document.createElement("div");
    header.className = "toc-header";
    header.innerHTML = `<span class="toc-title"><i class="fa fa-list-ul" aria-hidden="true"></i> Table of Contents</span><span class="toc-toggle">[Hide]</span>`;
    const list = document.createElement("ul");
    list.className = "toc-list";
    headings.forEach((heading, index) => {
      var _a2;
      const text = (_a2 = heading.textContent) == null ? void 0 : _a2.trim();
      if (!text) return;
      if (!heading.id) {
        let slug = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/gi, "d").toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
        if (!slug || document.getElementById(slug)) slug = `toc-section-${index}`;
        heading.id = slug;
      }
      const item = document.createElement("li");
      item.className = `toc-item toc-${heading.tagName.toLowerCase()}`;
      const link = document.createElement("a");
      link.href = `#${heading.id}`;
      link.textContent = text;
      bind(link, (event) => {
        event.preventDefault();
        event.stopPropagation();
        window.scrollTo({ top: heading.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
        window.history.pushState({}, "", link.hash);
      });
      item.appendChild(link);
      list.appendChild(item);
    });
    bind(header, () => {
      const hidden = list.hidden = !list.hidden;
      const toggle = header.querySelector(".toc-toggle");
      if (toggle) toggle.textContent = hidden ? "[Show]" : "[Hide]";
    });
    container.append(header, list);
    const anchor = article.querySelector("h5.text-center, h5, .nb_comment") || article.querySelector("h1.upper, h1");
    if (anchor) anchor.after(container);
    else article.prepend(container);
    removers.push(() => container.remove());
    return () => removers.forEach((remove) => remove());
  }

  // client/src/lib/referenceInteractions.ts
  var OFFICE_DATA = [
    {
      name: "QUEZON CITY OFFICE",
      address: "Delta Unit 204, L & LV Benitez Bldg., 53 N. Ramirez St., Don Manuel, Quezon City"
    },
    {
      name: "PASIG BRANCH",
      address: "Room 305 Semicon Corporate Building, 50 Marcos Highway, Brgy. Dela Paz, Pasig City"
    },
    {
      name: "FACTORY NO. 1 (SEICO, VIETNAM)",
      address: "National Highway 5, Mao Dien commune, Hai Phong City, Vietnam"
    },
    {
      name: "FACTORY NO. 2 (SEICO, VIETNAM)",
      address: "Lot CN7-2, Tan Truong Industrial Park, Mao Dien commune, Hai Phong City, Vietnam"
    }
  ];
  function asWindow() {
    return typeof window === "undefined" ? null : window;
  }
  function getJQuery() {
    const win = asWindow();
    return (win == null ? void 0 : win.jQuery) || (win == null ? void 0 : win.$) || null;
  }
  function hasJQueryPlugin($, name) {
    return Boolean($ && $.fn && typeof $.fn[name] === "function");
  }
  function addClassToggle(element, className, force) {
    if (force === void 0) element.classList.toggle(className);
    else element.classList.toggle(className, force);
  }
  function absoluteOrRelativePath(raw) {
    try {
      const url = new URL(raw, window.location.href);
      return `${url.pathname}${url.search}${url.hash}`;
    } catch (e) {
      return raw;
    }
  }
  function readFieldValue(field) {
    return field.value.trim();
  }
  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  function escapeMailPart(value) {
    return encodeURIComponent(value.replace(/[\r\n]+/g, " ").trim());
  }
  function targetForTab(control) {
    return control.getAttribute("data-target") || control.getAttribute("href") || control.getAttribute("data-bs-target");
  }
  function showTabVanilla(control, root) {
    var _a2;
    const target = targetForTab(control);
    if (!target || target === "#") return;
    const targetElement = root.querySelector(target.startsWith("#") ? target : `[id="${CSS.escape(target)}"]`);
    if (!targetElement) return;
    const list = control.closest('.nav-tabs, .nav-pills, [role="tablist"]');
    if (list) {
      list.querySelectorAll('[data-toggle="tab"], [data-bs-toggle="tab"], [role="tab"]').forEach((item) => {
        var _a3;
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
        (_a3 = item.parentElement) == null ? void 0 : _a3.classList.remove("active");
      });
    }
    root.querySelectorAll('.tab-pane, [role="tabpanel"]').forEach((pane) => {
      pane.classList.remove("active", "in", "show");
      pane.setAttribute("aria-hidden", "true");
    });
    control.classList.add("active");
    control.setAttribute("aria-selected", "true");
    (_a2 = control.parentElement) == null ? void 0 : _a2.classList.add("active");
    targetElement.classList.add("active", "in", "show");
    targetElement.setAttribute("aria-hidden", "false");
  }
  function toggleCollapseVanilla(control, root) {
    const rawTarget = control.getAttribute("data-target") || control.getAttribute("data-bs-target") || control.getAttribute("href");
    if (!rawTarget || rawTarget === "#") return;
    const target = root.querySelector(rawTarget.startsWith("#") ? rawTarget : `[id="${CSS.escape(rawTarget)}"]`);
    if (!target) return;
    const isExpanded = !(target.classList.contains("in") || target.classList.contains("show"));
    target.classList.toggle("in", isExpanded);
    target.classList.toggle("show", isExpanded);
    control.setAttribute("aria-expanded", String(isExpanded));
    control.classList.toggle("collapsed", !isExpanded);
  }
  function renderOffices(carousel) {
    if (carousel.childElementCount > 0) return;
    const documentRef = carousel.ownerDocument;
    OFFICE_DATA.forEach((office) => {
      const item = documentRef.createElement("div");
      item.className = "footer-office-item";
      item.innerHTML = `
      <div class="footer-office-header">
        <p class="footer-office-title"></p><span class="footer-office-line"></span>
      </div>
      <div class="footer-office-body">
        <span class="footer-office-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span>
        <p class="footer-office-address"></p>
      </div>`;
      const title = item.querySelector(".footer-office-title");
      const address = item.querySelector(".footer-office-address");
      if (title) title.textContent = office.name;
      if (address) address.textContent = office.address;
      carousel.appendChild(item);
    });
  }
  function initializeReferenceInteractions(root, options) {
    const cleanups = [];
    const timers = /* @__PURE__ */ new Set();
    const observers = [];
    const jqInstances = [];
    const swipers = [];
    const win = asWindow();
    const documentRef = root.ownerDocument || (typeof document !== "undefined" ? document : null);
    const body = documentRef == null ? void 0 : documentRef.body;
    if (!documentRef || !win) return () => void 0;
    cleanups.push(initializeNetworkMap(root));
    cleanups.push(initializeArticleExtras(root));
    const listen = (target, type, handler, eventOptions) => {
      target.addEventListener(type, handler, eventOptions);
      cleanups.push(() => target.removeEventListener(type, handler, eventOptions));
    };
    const timeout = (callback, delay) => {
      const id = win.setTimeout(() => {
        timers.delete(id);
        callback();
      }, delay);
      timers.add(id);
      return id;
    };
    root.querySelectorAll(".thumbnail-lazy[data-src]").forEach((container) => {
      const source = container.getAttribute("data-src");
      if (!source || container.querySelector("img")) return;
      const image = documentRef.createElement("img");
      image.src = source;
      image.alt = container.getAttribute("data-alt") || "";
      container.appendChild(image);
      container.classList.add("loaded");
    });
    const openMenu = () => body == null ? void 0 : body.classList.add("open");
    const closeMenu = () => body == null ? void 0 : body.classList.remove("open");
    root.querySelectorAll("#vtc-load-menu").forEach((button) => listen(button, "click", (event) => {
      event.preventDefault();
      openMenu();
    }));
    root.querySelectorAll(".close-small-menu").forEach((button) => listen(button, "click", (event) => {
      event.preventDefault();
      closeMenu();
    }));
    root.querySelectorAll(".mobile-nav__toggle-open, .mobile-nav__toggle-close").forEach((toggle) => listen(toggle, "click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const item = toggle.closest("li");
      if (!item) return;
      const isOpen = item.classList.toggle("open");
      toggle.classList.toggle("mobile-nav__toggle-open", !isOpen);
      toggle.classList.toggle("mobile-nav__toggle-close", isOpen);
      toggle.classList.toggle("fa-plus", !isOpen);
      toggle.classList.toggle("fa-minus", isOpen);
      toggle.classList.toggle("icon-plus", !isOpen);
      toggle.classList.toggle("icon-minus", isOpen);
    }));
    root.querySelectorAll("a.prevent-click").forEach((anchor) => listen(anchor, "click", (event) => event.preventDefault()));
    root.querySelectorAll(".mobile-link-header > a.prevent-click").forEach((anchor) => listen(anchor, "click", () => {
      const icon = anchor.parentElement.querySelector("i");
      if (icon) icon.click();
    }));
    const searchOpeners = root.querySelectorAll(".search-open, .search-button");
    searchOpeners.forEach((button) => listen(button, "click", (event) => {
      event.preventDefault();
      options.onSearch();
    }));
    root.querySelectorAll('form[role="search"], .vtc-small-menu form[action*="search"], form[action="/search"]').forEach((form) => listen(form, "submit", (event) => {
      event.preventDefault();
      options.onSearch();
    }));
    root.querySelectorAll(".search-close").forEach((button) => listen(button, "click", (event) => {
      event.preventDefault();
      root.querySelectorAll(".show-search").forEach((element) => element.classList.remove("open"));
    }));
    root.querySelectorAll(".btn-top").forEach((button) => listen(button, "click", (event) => {
      event.preventDefault();
      win.scrollTo({ top: 0, behavior: "smooth" });
    }));
    root.querySelectorAll(".alert-close").forEach((button) => listen(button, "click", (event) => {
      var _a2;
      event.preventDefault();
      (_a2 = button.closest('.alert, .notification, [role="alert"]')) == null ? void 0 : _a2.remove();
    }));
    const $ = getJQuery();
    const bootstrapTabs = hasJQueryPlugin($, "tab");
    const bootstrapCollapse = hasJQueryPlugin($, "collapse");
    if (!bootstrapTabs) {
      listen(root, "click", (event) => {
        var _a2;
        const target = (_a2 = event.target) == null ? void 0 : _a2.closest('[data-toggle="tab"], [data-bs-toggle="tab"]');
        if (!target || !root.contains(target)) return;
        event.preventDefault();
        showTabVanilla(target, root);
      });
    }
    if (!bootstrapCollapse) {
      listen(root, "click", (event) => {
        var _a2;
        const target = (_a2 = event.target) == null ? void 0 : _a2.closest('[data-toggle="collapse"], [data-bs-toggle="collapse"]');
        if (!target || !root.contains(target)) return;
        event.preventDefault();
        toggleCollapseVanilla(target, root);
      });
    }
    root.querySelectorAll('select[name="prcareer"], select[name="prcountry"], select[data-project-filter], [data-project-filter-select]').forEach((select) => {
      if (select.closest("#projects-results")) return;
      listen(select, "change", () => {
        const name = select.getAttribute("name") || select.getAttribute("data-param") || select.getAttribute("data-project-filter") || "prcareer";
        const value = select.value;
        if (!value) return;
        const form = select.closest("form");
        const base = (form == null ? void 0 : form.getAttribute("action")) || "/du-an.html";
        const url = new URL(base, win.location.href);
        url.searchParams.set(name, value);
        options.navigate(absoluteOrRelativePath(url.toString()));
      });
    });
    const careerItems = Array.from(root.querySelectorAll(".career-item"));
    const moreButton = root.querySelector("#load-more-careers");
    if (moreButton && careerItems.length > 9) {
      careerItems.slice(9).forEach((item) => {
        item.style.display = "none";
      });
      moreButton.style.display = "";
      listen(moreButton, "click", (event) => {
        event.preventDefault();
        careerItems.slice(9).forEach((item) => {
          item.style.display = "";
        });
        moreButton.style.display = "none";
      });
    }
    root.querySelectorAll(".show-modal[data-link], [data-link].dowload, [data-link].download, [data-link].dowload-profile").forEach((trigger) => {
      listen(trigger, "click", (event) => {
        event.preventDefault();
        const link = trigger.getAttribute("data-link");
        if (!link) return;
        const download = documentRef.createElement("a");
        download.href = link;
        download.setAttribute("download", "");
        download.rel = "noopener";
        download.target = "_blank";
        documentRef.body.appendChild(download);
        download.click();
        download.remove();
      });
    });
    root.querySelectorAll('form:not([role="search"]):not([action="/search"]):not([data-native-form])').forEach((form) => {
      listen(form, "submit", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const fields = Array.from(form.elements).filter((element) => {
          return element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;
        });
        let valid = true;
        let firstInvalid = null;
        fields.forEach((field) => {
          const required = field.required || field.getAttribute("aria-required") === "true";
          const value = readFieldValue(field);
          const emailField = field.type === "email" || field.name.toLowerCase().includes("email");
          const invalid = required && !value || emailField && value !== "" && !isEmail(value);
          field.setAttribute("aria-invalid", String(invalid));
          if (invalid) {
            valid = false;
            if (!firstInvalid) firstInvalid = field;
          }
        });
        if (!valid) {
          const invalidControl = firstInvalid;
          invalidControl == null ? void 0 : invalidControl.focus();
          return;
        }
        const isCareer = /career|recruit|apply|hr@/i.test(`${form.className} ${form.id} ${form.textContent || ""}`);
        const recipient = form.getAttribute("data-email") || (isCareer ? "hr@seico.vn" : options.contactEmail);
        const subject = form.getAttribute("data-subject") || (isCareer ? "Job application - PEB Philippines" : "Contact PEB Philippines");
        const bodyLines = fields.filter((field) => field.name && field.type !== "submit" && field.type !== "button" && field.type !== "file").map((field) => `${field.name}: ${readFieldValue(field)}`).filter((line) => !line.endsWith(": "));
        const mailto = `mailto:${encodeURIComponent(recipient)}?subject=${escapeMailPart(subject)}&body=${escapeMailPart(bodyLines.join("\n"))}`;
        const note = form.querySelector("[data-replica-form-note], .replica-form-template-note") || documentRef.createElement("p");
        note.setAttribute("data-replica-form-note", "true");
        note.setAttribute("role", "status");
        note.textContent = "This is a front-end form template. Connect your own backend or email service to receive submissions. No information has been sent.";
        if (!note.parentElement) form.appendChild(note);
        void mailto;
      });
    });
    root.querySelectorAll("[data-apply-email], .apply-by-email, [data-application-email]").forEach((trigger) => {
      listen(trigger, "click", (event) => {
        event.preventDefault();
        const recipient = trigger.getAttribute("data-apply-email") || trigger.getAttribute("data-application-email") || "hr@seico.vn";
        const subject = trigger.getAttribute("data-subject") || "Job application - PEB Philippines";
        win.location.href = `mailto:${encodeURIComponent(recipient)}?subject=${escapeMailPart(subject)}`;
      });
    });
    if ($) {
      const flexsliderElements = Array.from(root.querySelectorAll(".flexslider"));
      flexsliderElements.forEach((element) => {
        if (!hasJQueryPlugin($, "flexslider")) {
          element.classList.remove("loading");
          return;
        }
        try {
          $(element).flexslider({
            animation: "fade",
            easing: "swing",
            prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
            animationLoop: true,
            pauseOnAction: true,
            start: () => element.classList.remove("loading"),
            after: (slider) => {
              var _a2;
              if (slider && slider.playing === false) (_a2 = slider.play) == null ? void 0 : _a2.call(slider);
            }
          });
          jqInstances.push({ element, kind: "flex", $ });
        } catch (e) {
          element.classList.remove("loading");
        }
      });
      const owlSettings = (element) => {
        if (element.classList.contains("footer-offices-carousel")) {
          return {
            items: 3,
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            dotsEach: 1,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 4e3,
            autoplayHoverPause: true,
            responsive: { 0: { items: 1 }, 480: { items: 2 }, 992: { items: 3 } }   // fewer than the 4 addresses, so it always slides
          };
        }
        if (element.classList.contains("sei_introssss")) {
          return {
            items: 6,
            loop: true,
            margin: 15,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 2e3,
            autoplayHoverPause: true,
            responsive: { 0: { items: 2 }, 450: { items: 2 }, 768: { items: 3 }, 769: { items: 4 }, 1e3: { items: 6 } }
          };
        }
        if (["list-slide", "page_proj", "page_news", "video", "brochure", "profile"].some((name) => element.classList.contains(name))) {
          const isNews = element.classList.contains("page_news") || element.classList.contains("video");
          const isDocs = element.classList.contains("brochure") || element.classList.contains("profile");
          const isList = element.classList.contains("list-slide");
          return {
            items: isNews ? 3 : 4,
            loop: !isDocs && !isList,
            margin: 15,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            autoplay: true,
            autoplayTimeout: 5e3,
            autoplayHoverPause: true,
            responsive: { 0: { items: isList ? 2 : 1 }, 450: { items: isList || isDocs ? 2 : 1 }, 768: { items: isDocs ? 4 : 3 }, 769: { items: isNews ? 3 : 4 } }
          };
        }
        if (element.classList.contains("about-cert-slider")) {
          return {
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive: { 0: { items: 2 }, 480: { items: 3 }, 768: { items: 3 }, 1024: { items: 3 } }
          };
        }
        if (element.classList.contains("certificates-slider")) {
          return {
            items: 4,
            loop: true,
            margin: 20,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 4e3,
            autoplayHoverPause: true,
            responsive: { 0: { items: 1, margin: 10 }, 480: { items: 2, margin: 15 }, 768: { items: 3, margin: 20 }, 992: { items: 4, margin: 20 } }
          };
        }
        if (element.classList.contains("sei_intro")) {
          return {
            items: 3,
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ["<i></i>", "<i></i>"],
            responsiveClass: true,
            lazyContent: true,
            autoplay: true,
            autoplayTimeout: 5e3,
            autoplayHoverPause: true,
            center: false,
            responsive: { 0: { items: 1 }, 450: { items: 1 }, 768: { items: 2 }, 769: { items: 3, nav: true } }
          };
        }
        if (element.classList.contains("sei_proj")) {
          return {
            items: 4,
            loop: true,
            nav: true,
            dots: false,
            navText: ["<i></i>", "<i></i>"],
            responsiveClass: true,
            lazyContent: true,
            autoplay: true,
            autoplayTimeout: 5e3,
            autoplayHoverPause: true,
            center: false,
            responsive: { 0: { items: 1 }, 450: { items: 1 }, 768: { items: 2 }, 769: { items: 4, nav: true } }
          };
        }
        return {
          items: 4,
          loop: true,
          margin: 20,
          nav: true,
          dots: false,
          responsiveClass: true,
          autoplay: true,
          autoplayTimeout: 4e3,
          autoplayHoverPause: true,
          responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }
        };
      };
      const owlElements = [];
      root.querySelectorAll(".sei_intro.owl-carousel, .sei_proj.owl-carousel, .certificates-slider, .about-cert-slider, .sei_introssss, .list-slide, .page_proj, .page_news, .video.owl-carousel, .brochure.owl-carousel, .profile.owl-carousel, .footer-offices-carousel, .product-slider, .project-slider, .project-detail-slider, .product-carousel, .project-gallery, .detail-gallery").forEach((element) => {
        if (!owlElements.includes(element)) owlElements.push(element);
      });
      owlElements.forEach((element) => {
        if (element.id === "footerOfficesCarousel") renderOffices(element);
        if (!hasJQueryPlugin($, "owlCarousel")) return;
        try {
          $(element).owlCarousel(owlSettings(element));
          jqInstances.push({ element, kind: "owl", $ });
        } catch (e) {
        }
      });
    } else {
      root.querySelectorAll(".flexslider.loading").forEach((element) => element.classList.remove("loading"));
      root.querySelectorAll("#footerOfficesCarousel").forEach(renderOffices);
    }
    const SwiperConstructor = win.Swiper;
    const history = root.querySelector(".historySwiper");
    if (SwiperConstructor && history && !history.swiper) {
      try {
        const instance = new SwiperConstructor(history, {
          slidesPerView: 1,
          spaceBetween: 10,
          grabCursor: true,
          pagination: { el: ".historySwiper .swiper-pagination", clickable: true },
          navigation: { nextEl: ".historySwiper .swiper-button-next", prevEl: ".historySwiper .swiper-button-prev" },
          breakpoints: { 640: { slidesPerView: 2, spaceBetween: 10 }, 900: { slidesPerView: 3, spaceBetween: 10 }, 1200: { slidesPerView: 4, spaceBetween: 10 } }
        });
        swipers.push(instance);
      } catch (e) {
      }
    }
    const partnerContainer = root.querySelector(".mobile-swiper-container");
    const partnerWrapper = root.querySelector("ul.partner");
    const partnerSlides = partnerWrapper ? Array.from(partnerWrapper.children) : [];
    let partnerSwiper = null;
    const togglePartnerSwiper = () => {
      var _a2;
      if (!partnerContainer || !partnerWrapper || !SwiperConstructor) return;
      if (win.innerWidth <= 767 && !partnerSwiper) {
        partnerContainer.classList.add("swiper");
        partnerWrapper.classList.add("swiper-wrapper");
        partnerSlides.forEach((slide) => slide.classList.add("swiper-slide"));
        try {
          partnerSwiper = new SwiperConstructor(partnerContainer, {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: true,
            autoplay: { delay: 1e3, disableOnInteraction: false },
            pagination: { el: ".mobile-swiper-container .swiper-pagination", clickable: true }
          });
          swipers.push(partnerSwiper);
        } catch (e) {
          partnerSwiper = null;
        }
      } else if (win.innerWidth > 767 && partnerSwiper) {
        (_a2 = partnerSwiper.destroy) == null ? void 0 : _a2.call(partnerSwiper, true, true);
        partnerSwiper = null;
        partnerContainer.classList.remove("swiper");
        partnerWrapper.classList.remove("swiper-wrapper");
        partnerSlides.forEach((slide) => {
          slide.classList.remove("swiper-slide");
          slide.removeAttribute("style");
        });
        partnerWrapper.removeAttribute("style");
      }
    };
    if (partnerContainer && partnerWrapper && SwiperConstructor) {
      togglePartnerSwiper();
      listen(win, "resize", togglePartnerSwiper);
    }
    // Customers & partners: clicking a logo shows it larger in the popup already in the page.
    // The listener sits on the whole list so the copies the phone slider makes also work.
    const partnerModal = root.querySelector("#partnerLogoModal");
    if (partnerModal && partnerWrapper) {
      const modalImg = partnerModal.querySelector("#partnerModalImg");
      const modalTitle = partnerModal.querySelector("#partnerModalTitle");
      const modalClose = partnerModal.querySelector("#partnerModalClose");
      const modalLink = partnerModal.querySelector("#partnerModalLink");
      let lastLogo = null;
      const openLogo = (logo) => {
        const img = logo.querySelector("img");
        if (!img) return;
        lastLogo = logo;
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalTitle.textContent = img.alt;
        // Logos with a data-project page get a "View our project" button.
        const project = logo.getAttribute("data-project");
        if (modalLink) {
          modalLink.hidden = !project;
          if (project) modalLink.setAttribute("href", project);
          else modalLink.removeAttribute("href");
        }
        partnerModal.classList.add("active");
        partnerModal.setAttribute("aria-hidden", "false");
        // The popup fades in from visibility: hidden, which cannot take focus until it is drawn,
        // so keep trying for a short while (up to about half a second) until focus lands.
        let focusTries = 0;
        const focusClose = () => {
          modalClose.focus();
          if (document.activeElement !== modalClose && partnerModal.classList.contains("active") && ++focusTries < 20) setTimeout(focusClose, 25);
        };
        setTimeout(focusClose, 30);
      };
      const closeLogo = () => {
        if (!partnerModal.classList.contains("active")) return;
        partnerModal.classList.remove("active");
        partnerModal.setAttribute("aria-hidden", "true");
        if (lastLogo && lastLogo.isConnected) lastLogo.focus();
      };
      listen(partnerWrapper, "click", (event) => {
        // a click anywhere in a logo's box counts, not only on the logo picture itself
        const box = event.target.closest("ul.partner > li");
        const logo = event.target.closest("a.partner-logo") || (box ? box.querySelector("a.partner-logo") : null);
        if (!logo) return;
        event.preventDefault();
        openLogo(logo);
      });
      listen(partnerWrapper, "keydown", (event) => {
        const logo = event.target.closest("a.partner-logo");
        if (!logo || (event.key !== "Enter" && event.key !== " ")) return;
        event.preventDefault();
        openLogo(logo);
      });
      listen(modalClose, "click", closeLogo);
      listen(partnerModal.querySelector(".partner-modal-backdrop"), "click", closeLogo);
      listen(documentRef, "keydown", (event) => {
        if (event.key === "Escape") closeLogo();
      });
    }
    const fancybox = win.Fancybox;
    const lightboxSelector = "[data-fancybox], .certificate-item, .footer-certificates a, .footer-certifications a";
    let nativeLightbox = null;
    const closeNativeLightbox = () => {
      nativeLightbox == null ? void 0 : nativeLightbox.remove();
      nativeLightbox = null;
    };
    if (fancybox == null ? void 0 : fancybox.bind) {
      try {
        fancybox.bind(lightboxSelector, {});
        cleanups.push(() => {
          var _a2;
          return (_a2 = fancybox.unbind) == null ? void 0 : _a2.call(fancybox, lightboxSelector);
        });
      } catch (e) {
      }
    } else if ($ && hasJQueryPlugin($, "fancybox")) {
      try {
        ($(root).find ? $(root).find(lightboxSelector) : $(root.querySelectorAll(lightboxSelector))).fancybox({
          openEffect: "fade",
          closeEffect: "fade",
          prevEffect: "none",
          nextEffect: "none",
          closeBtn: true
        });
      } catch (e) {
      }
    } else {
      root.querySelectorAll(lightboxSelector).forEach((trigger) => listen(trigger, "click", (event) => {
        var _a2;
        const image = trigger.querySelector("img");
        const source = trigger.getAttribute("href") || (image == null ? void 0 : image.currentSrc) || (image == null ? void 0 : image.src);
        if (!source || source === "#") return;
        event.preventDefault();
        closeNativeLightbox();
        nativeLightbox = documentRef.createElement("div");
        nativeLightbox.setAttribute("role", "dialog");
        nativeLightbox.setAttribute("aria-modal", "true");
        nativeLightbox.className = "reference-native-lightbox";
        nativeLightbox.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,.86);display:flex;align-items:center;justify-content:center;padding:24px;cursor:zoom-out;";
        nativeLightbox.innerHTML = '<button type="button" aria-label="Close" style="position:absolute;right:18px;top:12px;border:0;background:transparent;color:#fff;font-size:32px;line-height:1;cursor:pointer">\xD7</button><img alt="" style="max-width:100%;max-height:100%;object-fit:contain;cursor:default">';
        const enlarged = nativeLightbox.querySelector("img");
        if (enlarged) {
          enlarged.src = source;
          enlarged.alt = (image == null ? void 0 : image.alt) || trigger.getAttribute("title") || "";
          enlarged.addEventListener("click", (clickEvent) => clickEvent.stopPropagation());
        }
        nativeLightbox.addEventListener("click", closeNativeLightbox);
        (_a2 = nativeLightbox.querySelector("button")) == null ? void 0 : _a2.addEventListener("click", closeNativeLightbox);
        documentRef.body.appendChild(nativeLightbox);
      }));
      listen(documentRef, "keydown", (event) => {
        if (event.key === "Escape") closeNativeLightbox();
      });
      cleanups.push(closeNativeLightbox);
    }
    const counters = Array.from(root.querySelectorAll(".counter[data-target]"));
    const formatCounter = (value) => {
      const separator = ","; // English site: 1,000
      return Math.floor(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    };
    const animateCounter = (counter) => {
      if (counter.dataset.animating === "true") return;
      const target = parseInt((counter.getAttribute("data-target") || "0").replace(/[,.]/g, ""), 10);
      if (!Number.isFinite(target)) return;
      counter.dataset.animating = "true";
      const start = Date.now();
      const step = () => {
        const progress = Math.min(1, (Date.now() - start) / 1800);
        counter.textContent = formatCounter(target * progress);
        if (progress < 1) {
          const id = win.requestAnimationFrame(step);
          timers.add(id);
        } else {
          counter.textContent = formatCounter(target);
          counter.dataset.animating = "false";
        }
      };
      if (typeof win.requestAnimationFrame === "function") win.requestAnimationFrame(step);
      else {
        counter.textContent = formatCounter(target);
        counter.dataset.animating = "false";
      }
    };
    const resetCounter = (counter) => {
      counter.dataset.animating = "false";
      counter.textContent = "0";
    };
    if ("IntersectionObserver" in win && counters.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const counter = entry.target;
          if (entry.isIntersecting) animateCounter(counter);
          else resetCounter(counter);
        });
      }, { threshold: 0.15 });
      counters.forEach((counter) => observer.observe(counter));
      observers.push(observer);
    } else {
      counters.forEach((counter) => {
        const target = parseInt((counter.getAttribute("data-target") || "0").replace(/[,.]/g, ""), 10);
        if (Number.isFinite(target)) counter.textContent = formatCounter(target);
      });
    }
    return () => {
      cleanups.splice(0).forEach((cleanup) => {
        try {
          cleanup();
        } catch (e) {
        }
      });
      observers.splice(0).forEach((observer) => observer.disconnect());
      timers.forEach((id) => {
        var _a2;
        win.clearTimeout(id);
        (_a2 = win.cancelAnimationFrame) == null ? void 0 : _a2.call(win, id);
      });
      timers.clear();
      jqInstances.forEach(({ element, kind, $: vendor }) => {
        var _a2;
        try {
          if (kind === "owl") vendor(element).trigger("destroy.owl.carousel");
          else {
            const slider = vendor(element).data("flexslider");
            (_a2 = slider == null ? void 0 : slider.pause) == null ? void 0 : _a2.call(slider);
            if (slider == null ? void 0 : slider.animatedSlides) win.clearInterval(slider.animatedSlides);
            vendor(element).find("*").stop(true, true);
            vendor(element).removeData("flexslider");
          }
        } catch (e) {
        }
      });
      swipers.splice(0).forEach((swiper) => {
        var _a2;
        try {
          (_a2 = swiper.destroy) == null ? void 0 : _a2.call(swiper, true, true);
        } catch (e) {
        }
      });
      nativeLightbox == null ? void 0 : nativeLightbox.remove();
      nativeLightbox = null;
      body == null ? void 0 : body.classList.remove("open");
    };
  }

  // client/src/standalone.ts
  var config = window;
  var pages = config.SEICO_PAGES || [];
  function pageUrl(path) {
    const [pathname, query] = path.split("?");
    const match = pages.find((page) => page.path === path) || pages.find((page) => page.path === pathname);
    return match ? match.href + (query ? `?${query}` : "") : void 0;
  }
  function closeSearch() {
    var _a2;
    (_a2 = document.querySelector(".static-search")) == null ? void 0 : _a2.remove();
  }
  function search() {
    closeSearch();
    const overlay = document.createElement("div");
    overlay.className = "static-search";
    overlay.style.cssText = "position:fixed;inset:0;z-index:999999;background:rgba(20, 32, 56,.75);display:flex;justify-content:center;align-items:flex-start;padding:12vh 20px 25px";
    overlay.innerHTML = '<div role="dialog" aria-modal="true" aria-label="Search" style="background:white;width:700px;max-width:100%;max-height:76vh;overflow:auto;padding:30px"><button type="button" aria-label="Close" style="float:right;font-size:28px;border:0;background:none">\xD7</button><h2 style="font-size:22px;color:#204279;margin-top:0">SEARCH</h2><input placeholder="Search..." aria-label="Search pages" style="height:45px;border:1px solid #ddd;padding:10px;width:100%;font-size:16px"><div class="static-search-results" style="margin-top:20px"></div></div>';
    const dialog = overlay.firstElementChild;
    overlay.addEventListener("click", closeSearch);
    dialog.addEventListener("click", (event) => event.stopPropagation());
    overlay.querySelector("button").addEventListener("click", closeSearch);
    const input = overlay.querySelector("input");
    const results = overlay.querySelector(".static-search-results");
    const normalize = (text) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/gi, "d").toLowerCase();
    input.addEventListener("input", () => {
      results.replaceChildren();
      if (!input.value.trim()) return;
      const matches = pages.filter((page) => normalize(page.title).includes(normalize(input.value))).slice(0, 25);
      matches.forEach((page) => {
        const anchor = document.createElement("a");
        anchor.href = page.href;
        anchor.textContent = page.title;
        anchor.style.cssText = "display:block;color:#204279;padding:13px 0;border-bottom:1px solid #eee";
        results.appendChild(anchor);
      });
      if (!matches.length) results.textContent = "No matching content found.";
    });
    document.body.appendChild(overlay);
    input.focus();
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSearch();
  });
  // Footer "Download our profile" popup. Built once here so the pages stay uncluttered.
  //
  // NO BACKEND YET: this form sends nothing. It checks the fields, then the general form
  // handler above shows a notice. To connect a backend, add data-native-form and your
  // address to the <form> below (for example action="/your-endpoint") and set the value of
  // link_document to the file you want to offer. The form then submits normally by POST with
  // these fields: firstname, lastname, email, phone_number, id_document, link_document,
  // send_infor_document.
  function setupProfilePopup() {
    const triggers = document.querySelectorAll(".dowload-profile:not([data-link])");
    const $ = window.jQuery;
    if (!triggers.length || !$ || !$.fn || !$.fn.modal) return;
    const siteRoot = window.SEICO_ROOT || "";
    const holder = document.createElement("div");
    holder.innerHTML = `
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="profile-popup-title">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="logo"><img src="${siteRoot}assets/images/logo-peb-philippines-horizontal.png" alt="PEB Philippines"></div>
          <h3 id="profile-popup-title">Fill in the information to download documents</h3>
          <form method="post" action="" name="profileForm">
            <div class="form-group clearfix">
              <div class="col-md-6 profile-name-field">
                <label for="profile-first-name">First Name</label>
                <input type="text" class="form-control" id="profile-first-name" placeholder="First name ..." name="firstname" autocomplete="given-name" required>
              </div>
              <div class="col-md-6 profile-name-field">
                <label for="profile-last-name">Last Name</label>
                <input type="text" class="form-control" id="profile-last-name" placeholder="Last name ..." name="lastname" autocomplete="family-name" required>
              </div>
              <input type="hidden" name="id_document" value="729">
              <input type="hidden" name="link_document" value="">
              <input type="hidden" name="send_infor_document" value="True">
            </div>
            <div class="form-group">
              <label for="profile-email">Email<span>*</span></label>
              <input type="email" name="email" class="form-control" placeholder="Enter your email ..." id="profile-email" autocomplete="email" required>
            </div>
            <div class="form-group">
              <label for="profile-phone">Phone number</label>
              <div class="phone-country">
                <input type="tel" name="phone_number" class="form-control" placeholder="Enter your phone number ..." id="profile-phone" autocomplete="off">
              </div>
            </div>
            <div class="text-center">
              <button name="sbm-contact" type="submit">Send information</button>
            </div>
          </form>
        </div>
      </div>
    </div>`;
    const modal = holder.firstElementChild;
    document.body.appendChild(modal);
    const form = modal.querySelector("form");
    const phone = modal.querySelector("#profile-phone");

    // The country code picker loads the first time the popup opens.
    let picker = null;
    const isOnlyDialCode = () => /^(\+\d*\s*)?$/.test(phone.value);
    const showDialCode = () => { phone.value = `+${picker.getSelectedCountryData().dialCode} `; };
    function loadPhonePicker() {
      if (loadPhonePicker.started) return;
      loadPhonePicker.started = true;
      const script = document.createElement("script");
      script.src = `${siteRoot}vendor/js/intl-tel-input-17.0.8.min.js`;
      script.onload = () => {
        picker = window.intlTelInput(phone, { initialCountry: "ph", preferredCountries: ["ph", "us", "gb"] });
        showDialCode();
        phone.addEventListener("countrychange", () => {
          // Fills in the dial code unless a number has already been typed.
          if (isOnlyDialCode()) showDialCode();
        });
      };
      document.body.appendChild(script);
    }
    function openPopup(event) {
      event.preventDefault();
      loadPhonePicker();
      $(modal).modal("show");
    }
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", openPopup);
      trigger.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") openPopup(event);
      });
    });
    $(modal).on("shown.bs.modal", () => modal.querySelector("#profile-first-name").focus());
    // A phone field holding only the dial code counts as blank when the form is submitted.
    form.addEventListener("submit", () => {
      if (!picker || !isOnlyDialCode()) return;
      phone.value = "";
      setTimeout(showDialCode, 0);
    });
    $(modal).on("hidden.bs.modal", () => {
      form.reset();
      if (picker) {
        picker.setCountry("ph");
        showDialCode();
      }
      modal.querySelectorAll("[data-replica-form-note]").forEach((note) => note.remove());
      modal.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
    });
  }
  setupProfilePopup();
  // International projects popup. Links to SEICO's project search on seico.vn (the
  // Vietnam, Thailand and Indonesia menu items and the country flags on the Projects page)
  // first ask for a name and email, then continue to seico.vn.
  //
  // NO BACKEND YET: nothing is sent. After the fields are checked, the visitor goes straight
  // on to seico.vn. To connect a backend, put your address in the form's action below (for
  // example action="/api/project-leads"). The form is then sent by POST as form data with
  // these fields: fullname, email, country, destination. The visitor goes on to seico.vn
  // when your server replies, or after 5 seconds, even if the request fails.
  //
  // ASK_ONCE: false (the default) shows the popup on every click. Set it to true to ask each
  // browser only once: after the form is filled in, that browser goes straight to seico.vn.
  function setupInternationalProjectsPopup() {
    const ASK_ONCE = false;
    const STORAGE_KEY = "seicoIntlProjectsInfoGiven";
    const LINKS = 'a[href^="https://seico.vn/en/projects.htm"]';
    const $ = window.jQuery;
    if (!$ || !$.fn || !$.fn.modal || !document.querySelector(LINKS)) return;
    const siteRoot = window.SEICO_ROOT || "";
    const holder = document.createElement("div");
    holder.innerHTML = `
    <div class="modal fade" id="intlProjectsModal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="intl-popup-title" aria-describedby="intl-popup-text">
      <div class="modal-dialog">
        <div class="modal-content">
          <button type="button" class="intl-popup-close" data-dismiss="modal" aria-label="Close">&times;</button>
          <div class="logo"><img src="${siteRoot}assets/images/logo-peb-philippines-horizontal.png" alt="PEB Philippines"></div>
          <h3 id="intl-popup-title">Thank you for your interest in our projects</h3>
          <p id="intl-popup-text" class="intl-popup-text">Before you look at our projects in <strong class="intl-popup-country">other countries</strong>, could you please share a few details with us? Thank you!</p>
          <form method="post" action="" name="intlProjectsForm" data-native-form novalidate>
            <input type="hidden" name="country" value="">
            <input type="hidden" name="destination" value="">
            <div class="form-group">
              <label for="intl-name">Full name<span>*</span></label>
              <input type="text" class="form-control" id="intl-name" name="fullname" placeholder="Enter your full name ..." autocomplete="name" required>
            </div>
            <div class="form-group">
              <label for="intl-email">Email<span>*</span></label>
              <input type="email" class="form-control" id="intl-email" name="email" placeholder="Enter your email ..." autocomplete="email" required>
            </div>
            <p class="intl-popup-error" role="alert"></p>
            <div class="text-center">
              <button type="submit" class="intl-popup-submit">Continue to projects</button>
            </div>
          </form>
          <p class="intl-popup-foot">You will be taken to our projects on seico.vn.</p>
        </div>
      </div>
    </div>`;
    const modal = holder.firstElementChild;
    document.body.appendChild(modal);
    const form = modal.querySelector("form");
    const nameField = modal.querySelector("#intl-name");
    const emailField = modal.querySelector("#intl-email");
    const error = modal.querySelector(".intl-popup-error");
    const submit = modal.querySelector(".intl-popup-submit");
    let destination = "";
    let lastLink = null;

    const alreadyGiven = () => {
      if (!ASK_ONCE) return false;
      try { return window.localStorage.getItem(STORAGE_KEY) === "yes"; } catch (e) { return false; }
    };
    const remember = () => {
      try { window.localStorage.setItem(STORAGE_KEY, "yes"); } catch (e) { /* storage blocked: ask again next time */ }
    };
    // Flags carry the country in the picture's alt text; menu items carry it as their text.
    const countryOf = (link) => {
      const img = link.querySelector("img[alt]");
      if (img && img.alt.trim()) return img.alt.trim();
      const text = link.textContent.replace(/\s+/g, " ").trim();
      return /[a-z]/i.test(text) ? text : "other countries";
    };

    // One listener for the whole page, so menu items and carousel copies of the flags all work.
    document.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const link = event.target.closest ? event.target.closest(LINKS) : null;
      if (!link || alreadyGiven()) return;
      event.preventDefault();
      lastLink = link;
      destination = link.href;
      const country = countryOf(link);
      modal.querySelector(".intl-popup-country").textContent = country;
      form.elements.country.value = country;
      form.elements.destination.value = destination;
      document.body.classList.remove("open"); // close the phone menu if it is open
      document.body.classList.add("intl-popup-open");
      $(modal).modal("show");
    });
    $(modal).on("shown.bs.modal", () => nameField.focus());
    $(modal).on("hidden.bs.modal", () => {
      document.body.classList.remove("intl-popup-open");
      form.reset();
      error.textContent = "";
      submit.disabled = false;
      submit.textContent = "Continue to projects";
      [nameField, emailField].forEach((field) => field.removeAttribute("aria-invalid"));
      if (lastLink && lastLink.isConnected) lastLink.focus();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const nameBad = !name;
      const emailBad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      nameField.setAttribute("aria-invalid", String(nameBad));
      emailField.setAttribute("aria-invalid", String(emailBad));
      if (nameBad || emailBad) {
        error.textContent = nameBad ? "Please enter your name." : "Please enter a valid email address.";
        (nameBad ? nameField : emailField).focus();
        return;
      }
      error.textContent = "";
      submit.disabled = true;
      submit.textContent = "Please wait ...";
      let gone = false;
      const go = () => {
        if (gone) return;
        gone = true;
        remember();
        window.location.href = destination;
      };
      const endpoint = form.getAttribute("action");
      if (endpoint && window.fetch) {
        window.fetch(endpoint, { method: "POST", body: new FormData(form) }).catch(() => {}).then(go);
        setTimeout(go, 5000);
      } else {
        go();
      }
    });
  }
  setupInternationalProjectsPopup();
  // About page (about/about.html): every About topic is a section of one page. While the visitor
  // scrolls, the menu highlights the section on screen and the last breadcrumb shows its name.
  // A section's breadcrumb text is its data-crumb attribute; the menu links are ordinary #anchors.
  function setupAboutPage() {
    if (!document.body.classList.contains("page-about")) return;
    const nav = document.querySelector(".ab-nav");
    const crumb = document.getElementById("about-crumb");
    const sections = Array.from(document.querySelectorAll(".ab-content [data-crumb][id]"));
    if (!nav || !crumb || !sections.length) return;
    const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
    const strip = nav.querySelector(":scope > ul");
    const linkFor = (section) => {
      if (!section) return null;
      return links.find((a) => a.getAttribute("href") === `#${section.id}`) || null;
    };
    let current = null;
    const update = () => {
      // The section whose top has passed a line near the top of the window is the current one.
      const line = Math.min(window.innerHeight * 0.3, 220);
      let active = sections[0];
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top - line <= 0) active = section;
      });
      if (active === current) return;
      current = active;
      crumb.textContent = active.getAttribute("data-crumb");
      // Parts without their own menu entry (e.g. Organization chart) light up their parent's entry.
      const parent = active.parentElement ? active.parentElement.closest("[data-crumb][id]") : null;
      const link = linkFor(active) || linkFor(parent);
      links.forEach((a) => {
        const on = a === link;
        a.classList.toggle("active", on);
        if (on) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
      // On phones the menu is a sideways row of chips: keep the highlighted one in view.
      if (link && strip && strip.scrollWidth > strip.clientWidth) {
        const box = strip.getBoundingClientRect();
        const chip = link.getBoundingClientRect();
        strip.scrollTo({ left: strip.scrollLeft + chip.left - box.left - (box.width - chip.width) / 2, behavior: "smooth" });
      }
    };
    let queued = false;
    const queue = () => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        queued = false;
        update();
      });
    };
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    window.addEventListener("hashchange", queue);
    update();
  }
  setupAboutPage();

  // ---- Back-to-top button (every page) ----
  // A small "^" button in the bottom-right corner.
  //  - Showing: once the visitor has scrolled down SHOW_AFTER pixels it drops down into the corner.
  //  - Hiding (scrolled back near the top by hand): it rises and fades out.
  //  - Click: the page glides up to the top (eased, SCROLL_MS at most) while the button travels up and
  //    fades out. Scrolling, touching or pressing a key during the glide hands control back at once.
  // Styles and animations: "Back-to-top button" in assets/css/main.css.
  function setupBackToTop() {
    if (document.querySelector(".back-to-top")) return;
    const SHOW_AFTER = 400;
    const SCROLL_MS = 900;
    const root = document.documentElement;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "back-to-top";
    button.setAttribute("aria-label", "Back to top");
    button.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    document.body.appendChild(button);
    const scrollTop = () => window.scrollY || root.scrollTop || 0;
    let shown = false;
    let gliding = false;
    const setState = (state) => {   // "visible" | "leaving" | "launching" | "hidden"
      button.classList.remove("is-visible", "is-leaving", "is-launching");
      if (state !== "hidden") button.classList.add("is-" + state);
    };
    const update = () => {
      if (gliding) return;
      const show = scrollTop() > SHOW_AFTER;
      if (show === shown) return;
      shown = show;
      setState(show ? "visible" : "leaving");
    };
    button.addEventListener("animationend", (event) => {
      if (event.animationName === "btt-rise" || event.animationName === "btt-launch") setState("hidden");
    });
    window.addEventListener("scroll", update, { passive: true });
    update();
    // eased scroll to the top, written by hand so it also animates where native smooth scrolling is off
    const glideToTop = () => {
      const start = scrollTop();
      if (start <= 0) return;
      const duration = Math.min(SCROLL_MS, 350 + start * 0.12);
      const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);   // ease-in-out cubic
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";   // the About page sets smooth scrolling; it would fight each step
      const began = performance.now();
      gliding = true;
      button.style.setProperty("--btt-launch-ms", Math.round(duration) + "ms");
      setState("launching");
      const stopEvents = ["wheel", "touchstart", "keydown", "mousedown"];
      const finish = () => {
        gliding = false;
        shown = scrollTop() > SHOW_AFTER;
        root.style.scrollBehavior = previousBehavior;
        stopEvents.forEach((name) => window.removeEventListener(name, cancel, true));
        if (shown) setState("visible");
      };
      const cancel = (event) => {
        if (event && event.target === button) return;
        finish();
      };
      stopEvents.forEach((name) => window.addEventListener(name, cancel, { capture: true, passive: true }));
      const step = (now) => {
        if (!gliding) return;
        const progress = Math.min(1, (now - began) / duration);
        window.scrollTo(0, Math.round(start * (1 - ease(progress))));
        if (progress < 1) window.requestAnimationFrame(step);
        else finish();
      };
      window.requestAnimationFrame(step);
    };
    button.addEventListener("click", glideToTop);
  }
  setupBackToTop();

  // "Share this article" buttons: always share the page the visitor is on.
  function setupShareLinks() {
    const links = document.querySelectorAll("a.share-item");
    if (!links.length) return;
    const url = encodeURIComponent(window.location.href.split("#")[0]);
    const title = encodeURIComponent(document.title);
    const picture = document.querySelector("main img[src]");
    const media = picture ? encodeURIComponent(picture.src) : "";
    const targets = {
      zalo: `https://sp.zalo.me/share?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${title}`
    };
    links.forEach((link) => {
      const kind = Object.keys(targets).find((name) => link.classList.contains(name));
      if (kind) link.href = targets[kind];
    });
  }
  setupShareLinks();

  // About, Credentials and Products & Services pages: the jump links under the page title glide down to their section instead of jumping.
  // Like the back-to-top glide, it animates even when the system asks for reduced motion (the owner wants the animation).
  function setupAboutJumpLinks() {
    const main = document.querySelector("main.hx-about-page, main.hx-cred-page, main.hx-ps-page");
    if (!main) return;
    const MAX_MS = 1100;
    const root = document.documentElement;
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);   // ease-in-out cubic
    let gliding = null;
    const stopEvents = ["wheel", "touchstart", "keydown", "mousedown"];
    const stop = () => {
      if (!gliding) return;
      root.style.scrollBehavior = gliding.previousBehavior;
      stopEvents.forEach((name) => window.removeEventListener(name, stop, true));
      gliding = null;
    };
    const glideTo = (target) => {
      stop();
      const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const maxY = Math.max(0, root.scrollHeight - window.innerHeight);
      const start = window.scrollY || root.scrollTop || 0;
      const end = Math.min(maxY, Math.max(0, Math.round(target.getBoundingClientRect().top + start - margin)));
      const distance = end - start;
      if (Math.abs(distance) < 2) { window.scrollTo(0, end); return; }
      const duration = Math.min(MAX_MS, 450 + Math.abs(distance) * 0.15);
      gliding = { previousBehavior: root.style.scrollBehavior };
      root.style.scrollBehavior = "auto";   // the page's CSS smooth scrolling would fight each step
      stopEvents.forEach((name) => window.addEventListener(name, stop, { capture: true, passive: true }));
      const began = performance.now();
      const run = gliding;
      const step = (now) => {
        if (gliding !== run) return;
        const progress = Math.min(1, (now - began) / duration);
        window.scrollTo(0, Math.round(start + distance * ease(progress)));
        if (progress < 1) window.requestAnimationFrame(step);
        else stop();
      };
      window.requestAnimationFrame(step);
    };
    main.querySelectorAll('.hx-pagehero-jump a[href^="#"], .hx-crumbs a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = decodeURIComponent(link.getAttribute("href").slice(1));
        const target = id && document.getElementById(id);
        if (!target || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        if (window.location.hash !== "#" + id) window.history.pushState(null, "", "#" + id);
        glideTo(target);
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });
  }
  setupAboutJumpLinks();

  initializeReferenceInteractions(document.body, {
    navigate: (path) => {
      const target = pageUrl(path);
      if (target) window.location.href = target;
    },
    onSearch: search,
    contactEmail: "your-email@example.com"
  });
  var _a;
  if (window.location.search && !document.getElementById("projects-results")) {
    const note = document.createElement("p");
    note.textContent = "Listing template \u2014 connect your content and filtering logic here. This front-end copy has no backend.";
    note.style.cssText = "margin:20px auto;padding:12px 18px;max-width:1140px;background:#f3f6fa;border-left:3px solid #204279;color:#687b91;font-size:13px";
    (_a = document.querySelector("main")) == null ? void 0 : _a.prepend(note);
  }
  console.info("Editable static website copy. Forms are templates; no backend is included.");
})();
