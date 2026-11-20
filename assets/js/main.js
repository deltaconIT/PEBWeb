"use strict";
/* =====================================================================
   PEB PHILIPPINES WEBSITE - MAIN SCRIPT
   ---------------------------------------------------------------------
   Loaded at the bottom of every page, after the libraries in vendor/js/.

   PART 1  Site data  - page list used by the search box, and the
                        office / factory locations for the network map.
                        Edit the lists below; links are written relative
                        to the website root (the folder with index.html).
   PART 2  Site code  - menus, search, sliders, map, forms, etc.
                        (Sending forms to Google Forms is in google-forms.js.)
   ===================================================================== */


/* =====================================================================
   PART 1 - SITE DATA
   ===================================================================== */
(function () {
  // Website root, worked out from this file's own address (assets/js/main.js),
  // so links work from any folder depth, from a web server or opened locally.
  var self = document.currentScript;
  var root = self ? self.src.replace(/assets\/js\/main\.js([?#].*)?$/, "") : "";
  var fromRoot = function (path) { return root ? new URL(path, root).href : path; };

  // ---- Pages (used by the search box) --------------------------------
  // path  = page address on the live site, title = text shown in search,
  // href  = file in this folder.
  var pages = [
    {"path": "/", "title": "Home | PEB Philippines - Pre-engineered steel buildings & steel structures", "href": "index.html"},
    {"path": "/about/about.html", "title": "About Us | PEB Philippines", "href": "about/about.html"},
    {"path": "/projects/projects.html", "title": "Projects | PEB Philippines", "href": "projects/projects.html"},
    {"path": "/projects/philippine-projects.html", "title": "Philippine Projects | PEB Philippines", "href": "projects/philippine-projects.html"},
    {"path": "/projects/project-types.html", "title": "Project Types | PEB Philippines", "href": "projects/project-types.html"},
    // {"path": "/archive/hidden-pages/news-publications/news-publications.html", "title": "News & publications | PEB Philippines - Pre-engineered steel...", "href": "archive/hidden-pages/news-publications/news-publications.html"},
    {"path": "/contact/contact.html", "title": "Contact | PEB Philippines - Pre-engineered steel buildings & steel structures", "href": "contact/contact.html"},
    {"path": "/contact/consultation.html", "title": "Request a consultation | PEB Philippines - Pre-engineered steel buildings & steel structures", "href": "contact/consultation.html"},
    // {"path": "/archive/hidden-pages/careers/careers.html", "title": "Careers | PEB Philippines - Pre-engineered steel buildings & steel structures", "href": "archive/hidden-pages/careers/careers.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/radiant-seico-photo-contest-celebrating-the-women-of-seico-20-10-4358.html", "title": "“RADIANT SEICO” PHOTO CONTEST – CELEBRATING THE WOMEN...", "href": "archive/hidden-pages/news-publications/articles/radiant-seico-photo-contest-celebrating-the-women-of-seico-20-10-4358.html"},
    // {"path": "/archive/hidden-pages/project-details/heller-vinfast.html", "title": "Heller-Vinfast | PEB Philippines - Pre-engineered factory construction", "href": "archive/hidden-pages/project-details/heller-vinfast.html"},
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
    // {"path": "/archive/hidden-pages/project-details/phuong-dong-tent-complex-van-don.html", "title": "PHUONG DONG TENT COMPLEX - VAN DON | PEB Philippines", "href": "archive/hidden-pages/project-details/phuong-dong-tent-complex-van-don.html"},
    // {"path": "/archive/hidden-pages/project-details/metro-line-1-ben-thanh-suoi-tien.html", "title": "Metro Line No. 1, Ben Thanh - Suoi Tien", "href": "archive/hidden-pages/project-details/metro-line-1-ben-thanh-suoi-tien.html"},
    // {"path": "/archive/hidden-pages/project-details/bw-dong-hai-cn4-2.html", "title": "BW Dong Hai CN4-2 | PEB Philippines", "href": "archive/hidden-pages/project-details/bw-dong-hai-cn4-2.html"},
    // {"path": "/archive/hidden-pages/project-details/foxconn-factory.html", "title": "Foxconn Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/foxconn-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/greenfeed-hung-yen-factory.html", "title": "GreenFeed Hung Yen Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/greenfeed-hung-yen-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/canadian-international-school-complex-lao-cai-cis-lao-cai.html", "title": "Canadian International School complex in Lao Cai (CIS Lao Cai) | PEB Philippines", "href": "archive/hidden-pages/project-details/canadian-international-school-complex-lao-cai-cis-lao-cai.html"},
    // {"path": "/archive/hidden-pages/project-details/xuan-thien-feed-mill.html", "title": "XUAN THIEN FEED MILL | PEB Philippines", "href": "archive/hidden-pages/project-details/xuan-thien-feed-mill.html"},
    // {"path": "/archive/hidden-pages/project-details/high-tech-export-poultry-farm-4a-cao-ngoc.html", "title": "HIGH-TECH EXPORT POULTRY FARM - 4A CAO NGOC | PEB Philippines", "href": "archive/hidden-pages/project-details/high-tech-export-poultry-farm-4a-cao-ngoc.html"},
    // {"path": "/archive/hidden-pages/project-details/core-5-factory.html", "title": "CORE 5 Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/core-5-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/light-building-high-tech-pig-farm.html", "title": "Light building for a high-tech pig farm | PEB Philippines", "href": "archive/hidden-pages/project-details/light-building-high-tech-pig-farm.html"},
    // {"path": "/archive/hidden-pages/project-details/messer-industrial-gas-plant.html", "title": "MESSER INDUSTRIAL GAS PLANT | PEB Philippines", "href": "archive/hidden-pages/project-details/messer-industrial-gas-plant.html"},
    // {"path": "/archive/hidden-pages/project-details/nam-tai-factory.html", "title": "Nam Tai Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/nam-tai-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/factory-at-an-phat-high-tech-industrial-park.html", "title": "FACTORY AT AN PHAT HIGH-TECH INDUSTRIAL PARK | PEB Philippines", "href": "archive/hidden-pages/project-details/factory-at-an-phat-high-tech-industrial-park.html"},
    // {"path": "/archive/hidden-pages/project-details/thai-tuan-textile-finishing-factory.html", "title": "Thai Tuan Textile Finishing Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/thai-tuan-textile-finishing-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/taisan-factory.html", "title": "TAISAN FACTORY | PEB Philippines", "href": "archive/hidden-pages/project-details/taisan-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/huong-binh-cable-car-line.html", "title": "HUONG BINH CABLE CAR LINE | PEB Philippines", "href": "archive/hidden-pages/project-details/huong-binh-cable-car-line.html"},
    // {"path": "/archive/hidden-pages/project-details/fujix-electronic-factory.html", "title": "Fujix Electronic Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/fujix-electronic-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/autoliv-factory.html", "title": "Autoliv Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/autoliv-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/nitto-denko-vietnam-factory.html", "title": "Nitto Denko Vietnam Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/nitto-denko-vietnam-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/190-factory.html", "title": "Factory 190 | PEB Philippines", "href": "archive/hidden-pages/project-details/190-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/trancy-distribution-center.html", "title": "Trancy Distribution Center | PEB Philippines", "href": "archive/hidden-pages/project-details/trancy-distribution-center.html"},
    // {"path": "/archive/hidden-pages/project-details/tan-a-factory.html", "title": "Tan A Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/tan-a-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/tp-tech-factory.html", "title": "TP Tech Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/tp-tech-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/power-plus-technology-factory.html", "title": "Power Plus Technology factory | PEB Philippines", "href": "archive/hidden-pages/project-details/power-plus-technology-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/van-don-entertainment-complex.html", "title": "Van Don urban area | PEB Philippines", "href": "archive/hidden-pages/project-details/van-don-entertainment-complex.html"},
    // {"path": "/archive/hidden-pages/project-details/cfg-factory.html", "title": "CFG Float Glass Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/cfg-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/logis-valley.html", "title": "Logis Valley Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/logis-valley.html"},
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
    // archived: {"path": "/archive/projects-before-restructure/industrial-projects.html", "title": "Industrial projects | PEB Philippines", "href": "archive/projects-before-restructure/industrial-projects.html"},
    // {"path": "/archive/hidden-pages/project-details/shinwon-factory.html", "title": "Shinwon Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/shinwon-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/molex-hung-yen.html", "title": "MOLEX - HUNG YEN | PEB Philippines", "href": "archive/hidden-pages/project-details/molex-hung-yen.html"},
    // {"path": "/archive/hidden-pages/project-details/tinh-loi-factory.html", "title": "Tinh Loi Factory blocks 3 & 4 | PEB Philippines", "href": "archive/hidden-pages/project-details/tinh-loi-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/mcs.html", "title": "MCS 4 Project | PEB Philippines", "href": "archive/hidden-pages/project-details/mcs.html"},
    // {"path": "/archive/hidden-pages/project-details/denyo-factory-phase-1.html", "title": "Denyo Factory Phase 1 | PEB Philippines", "href": "archive/hidden-pages/project-details/denyo-factory-phase-1.html"},
    // {"path": "/archive/hidden-pages/project-details/damen-shipyard.html", "title": "Damen Shipyard | PEB Philippines", "href": "archive/hidden-pages/project-details/damen-shipyard.html"},
    // {"path": "/archive/hidden-pages/project-details/shin-etsu-dviz-factory.html", "title": "Shin Etsu DVIZ Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/shin-etsu-dviz-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/nikkiso-factory.html", "title": "Nikkiso Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/nikkiso-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/mitsubishi-heavy-industries-factory.html", "title": "MHI Aerospace Vietnam | PEB Philippines", "href": "archive/hidden-pages/project-details/mitsubishi-heavy-industries-factory.html"},
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
    // {"path": "/archive/hidden-pages/project-details/bac-giang-logistics-park-2-warehouse.html", "title": "BAC GIANG LOGISTICS PARK 2 WAREHOUSE | PEB Philippines", "href": "archive/hidden-pages/project-details/bac-giang-logistics-park-2-warehouse.html"},
    // {"path": "/archive/hidden-pages/project-details/concordia-international-school-hanoi.html", "title": "Concordia International School Hanoi | PEB Philippines", "href": "archive/hidden-pages/project-details/concordia-international-school-hanoi.html"},
    // {"path": "/archive/hidden-pages/project-details/steel-structure-and-high-tech-equipment-manufacturing-plant.html", "title": "STEEL STRUCTURE AND HIGH-TECH EQUIPMENT MANUFACTURING PLANT | PEB Philippines", "href": "archive/hidden-pages/project-details/steel-structure-and-high-tech-equipment-manufacturing-plant.html"},
    // {"path": "/archive/hidden-pages/project-details/hai-phong-outdoor-goods-factory.html", "title": "OUTDOOR GOODS FACTORY – HAI PHONG | PEB Philippines", "href": "archive/hidden-pages/project-details/hai-phong-outdoor-goods-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/hoa-thanh-shoe-factory.html", "title": "HOA THANH SHOE FACTORY | PEB Philippines", "href": "archive/hidden-pages/project-details/hoa-thanh-shoe-factory.html"},
    // {"path": "/archive/hidden-pages/project-details/pt-da-nang.html", "title": "PT DA NANG | PEB Philippines", "href": "archive/hidden-pages/project-details/pt-da-nang.html"},
    // {"path": "/archive/hidden-pages/project-details/vina-feed-mill.html", "title": "Vina Feed Mill Factory | PEB Philippines", "href": "archive/hidden-pages/project-details/vina-feed-mill.html"},
    {"path": "/philippine-partners/philippine-partners.html", "title": "Philippine Partners | PEB Philippines", "href": "philippine-partners/philippine-partners.html"},
    {"path": "/products-services/accessory-products/industrial-paint.html", "title": "Industrial paint | PEB Philippines", "href": "products-services/accessory-products/industrial-paint.html"},
    {"path": "/products-services/light-buildings.html", "title": "Light buildings | PEB Philippines", "href": "products-services/light-buildings.html"},
    {"path": "/shared/document-template.html", "title": "Product catalog | PEB Philippines", "href": "shared/document-template.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/industrial-building-steel-frame-design-4340.html", "title": "Industrial building steel frame design: process and common frame types 2026 | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/industrial-building-steel-frame-design-4340.html"},
    // {"path": "/archive/hidden-pages/news-publications/articles/pre-engineered-steel-building-design-4338.html", "title": "Pre-engineered steel building design | PEB Philippines", "href": "archive/hidden-pages/news-publications/articles/pre-engineered-steel-building-design-4338.html"},
    // {"path": "/archive/hidden-pages/project-details/chadwick-international-school-in-vietnam.html", "title": "Chadwick International School in Vietnam | PEB Philippines", "href": "archive/hidden-pages/project-details/chadwick-international-school-in-vietnam.html"}
  ];

  // ---- Offices & factories (network map on the About page) --------------
  // "footer": the name shown in the footer address slider; places without it are left out there.
  var network = {
    "office": [
      {
        "id": "quezon_city_branch",
        "footer": "QUEZON CITY OFFICE",
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
        "footer": "PASIG BRANCH",
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
        "footer": "FACTORY NO. 1 (SEICO, VIETNAM)",
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
        "footer": "FACTORY NO. 2 (SEICO, VIETNAM)",
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

  window.SEICO_ROOT = root;
  window.SEICO_PAGES = pages;
  window.SEICO_NETWORK = network;
})();


/* =====================================================================
   PART 2 - SITE CODE  (menus, search, sliders, map, forms ...)
   ===================================================================== */
(() => {
  // ---- Shared helpers -----------------------------------------------------
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function isEmail(value) {
    return EMAIL_PATTERN.test(value);
  }
  // Phone numbers (2026-11-19). Spaces, dashes, dots and brackets are ignored. Accepts Philippine
  // mobiles (0917 832 0004, 917 832 0004, +63 917 832 0004), landlines ((02) 8552 6038, 8552 6038,
  // provincial 0XX XXX XXXX) and foreign numbers written with + and the country code (8-15 digits).
  const PHONE_MESSAGE = "Please enter a valid phone number, for example 0917 832 0004 or +63 917 832 0004.";
  function isPhone(value) {
    const compact = value.replace(/[\s().-]/g, "");
    if (!/^\+?\d+$/.test(compact)) return false;
    const digits = compact.replace(/^\+/, "");
    if (/^(\d)\1+$/.test(digits)) return false;
    if (digits.startsWith("63")) return digits.length === 11 || digits.length === 12;
    if (compact.startsWith("+")) return digits.length >= 8 && digits.length <= 15;
    if (digits.startsWith("09")) return digits.length === 11;
    if (digits.startsWith("0")) return digits.length === 10 || digits.length === 11;
    if (digits.startsWith("9")) return digits.length === 10;
    return digits.length === 8 && digits.startsWith("8");
  }
  // "Details already given" memory, shared by the profile popup and the project details form,
  // so filling in either one unlocks both. If the browser blocks storage, we simply ask again.
  const DETAILS_KEY = "pebProjectDetailsGiven";
  const detailsGiven = () => {
    try { return window.localStorage.getItem(DETAILS_KEY) === "yes"; } catch (e) { return false; }
  };
  const rememberDetails = () => {
    try { window.localStorage.setItem(DETAILS_KEY, "yes"); } catch (e) { /* storage blocked: ask again next time */ }
  };
  // Popup confirmation (2026-11-20): after the profile popup or the project details popup is sent,
  // a check mark and a short "thank you" show for CONFIRM_MS, then the popup moves on by itself
  // (the "Continue" button skips the wait). Styles: "POPUP CONFIRMATION" in main.css. Visitors who
  // ask their device for less motion get no animation.
  const CONFIRM_MS = 1800;
  const confirmPanel = (titleId) => `
          <div class="popup-confirm" hidden>
            <svg class="popup-check" viewBox="0 0 52 52" aria-hidden="true" focusable="false"><circle cx="26" cy="26" r="23"/><path d="M15.5 27.5l7 7 14-15"/></svg>
            <h3 class="popup-confirm-title" id="${titleId}" tabindex="-1"></h3>
            <p class="popup-confirm-text" role="status"></p>
            <button type="button" class="popup-confirm-next"></button>
          </div>`;
  // Fills in and shows the panel; calls next() after CONFIRM_MS or on the button. Returns a cancel function.
  function showConfirm(panel, title, text, buttonLabel, next) {
    panel.querySelector(".popup-confirm-title").textContent = title;
    panel.querySelector(".popup-confirm-text").textContent = text;
    const button = panel.querySelector(".popup-confirm-next");
    button.textContent = buttonLabel;
    let gone = false;
    const go = () => { if (gone) return; gone = true; clearTimeout(timer); next(); };
    button.onclick = go;
    panel.hidden = false;
    playIn(panel);
    panel.querySelector(".popup-confirm-title").focus();
    const timer = setTimeout(go, CONFIRM_MS);
    return () => { gone = true; clearTimeout(timer); };
  }
  // Replays the "step in" animation on an element that has just been shown.
  function playIn(element) {
    element.classList.remove("popup-step-in");
    void element.offsetWidth;   // restart the CSS animation
    element.classList.add("popup-step-in");
  }
  const firstName = (text) => (text || "").trim().split(/\s+/)[0] || "";
  // Runs a handler at most once per screen refresh (scroll and resize fire many times a second).
  const oncePerFrame = (handler) => {
    let queued = false;
    return () => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        queued = false;
        handler();
      });
    };
  };
  const isEnterOrSpace = (event) => event.key === "Enter" || event.key === " ";

  // ---- Office and factory map (About page, <div class="sei_network_map">) -----
  // Pins and the list come from the "network" data in PART 1.
  function setupNetworkMap() {
    const section = document.querySelector(".sei_network_map");
    const data = window.SEICO_NETWORK;
    const pins = section && section.querySelector(".map-pins-container");
    const list = section && section.querySelector("#locations-list-group");
    if (!data || !pins || !list) return;
    const setText = (selector, value) => {
      const element = section.querySelector(selector);
      if (element) element.textContent = value;
      return element;
    };
    const showRow = (element, visible) => {
      const row = element && element.closest("li");
      if (row) row.style.display = visible ? "flex" : "none";
    };
    const details = (place) => {
      setText("#info-loc-name", place.name.en);
      setText("#info-loc-address", place.address.en);
      showRow(setText("#info-loc-phone", place.phone || ""), !!place.phone);
      showRow(setText("#info-loc-email", place.email || ""), !!place.email);
      const image = section.querySelector("#info-loc-image");
      if (image) {
        // a place without a photo ("image": "") hides the photo area
        const imageBox = image.closest(".info-image-container") || image;
        if (place.image) {
          image.src = place.image;
          image.alt = place.name.en;
          imageBox.style.display = "";
        } else {
          image.removeAttribute("src");
          image.alt = "";
          imageBox.style.display = "none";
        }
      }
      section.querySelectorAll(".map-pin").forEach((pin) => pin.classList.toggle("active", pin.id === `pin-${place.id}`));
      section.querySelectorAll(".list-group-item").forEach((item) => item.classList.toggle("active-item", item.id === `list-item-${place.id}`));
    };
    // A pin or list entry: works with a click, Enter or Space.
    const control = (className, id, place) => {
      const element = document.createElement("div");
      element.className = className;
      element.id = id;
      element.tabIndex = 0;
      element.setAttribute("role", "button");
      element.addEventListener("click", () => details(place));
      element.addEventListener("keydown", (event) => {
        if (!isEnterOrSpace(event)) return;
        event.preventDefault();
        details(place);
      });
      return element;
    };
    const render = (tab) => {
      const places = data[tab];
      if (!places) return;
      pins.replaceChildren();
      list.replaceChildren();
      places.forEach((place) => {
        const name = place.name.en;
        const pin = control("map-pin", `pin-${place.id}`, place);
        pin.style.left = `${place.coords.x}%`;
        pin.style.top = `${place.coords.y}%`;
        pin.title = name;
        pin.setAttribute("aria-label", name);
        pin.innerHTML = '<i class="fa fa-map-marker" aria-hidden="true"></i>';
        const item = control("list-group-item", `list-item-${place.id}`, place);
        item.textContent = name;
        pins.appendChild(pin);
        list.appendChild(item);
      });
      if (places[0]) details(places[0]);
      section.querySelectorAll(".tab-btn[data-tab]").forEach((button) => {
        if (button.parentElement) button.parentElement.classList.toggle("active", button.dataset.tab === tab);
      });
    };
    render("office");
    section.querySelectorAll(".tab-btn[data-tab]").forEach((button) => button.addEventListener("click", (event) => {
      event.preventDefault();
      const tab = button.dataset.tab;
      if (tab === "office" || tab === "factory") render(tab);
    }));
  }

  // ---- Table of contents for articles (class="sei_intro"), built from the headings -----
  function setupTableOfContents() {
    const article = document.querySelector(".sei_intro");
    if (!article || article.querySelector(".toc-container")) return;
    const outsideSliders = (element) => !element.closest(".owl-carousel");
    if ([...article.querySelectorAll("article.box-two, .row article")].some(outsideSliders)) return;   // lists of cards get none
    const headings = [...article.querySelectorAll("h2,h3,h4")].filter(outsideSliders);
    if (headings.length < 2) return;
    const container = document.createElement("div");
    container.className = "toc-container";
    const header = document.createElement("div");
    header.className = "toc-header";
    header.innerHTML = '<span class="toc-title"><i class="fa fa-list-ul" aria-hidden="true"></i> Table of Contents</span><span class="toc-toggle">[Hide]</span>';
    const list = document.createElement("ul");
    list.className = "toc-list";
    headings.forEach((heading, index) => {
      const text = (heading.textContent || "").trim();
      if (!text) return;
      if (!heading.id) {
        let slug = text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
        if (!slug || document.getElementById(slug)) slug = `toc-section-${index}`;
        heading.id = slug;
      }
      const item = document.createElement("li");
      item.className = `toc-item toc-${heading.tagName.toLowerCase()}`;
      const link = document.createElement("a");
      link.href = `#${heading.id}`;
      link.textContent = text;
      item.appendChild(link);
      list.appendChild(item);
    });
    header.addEventListener("click", () => {
      list.hidden = !list.hidden;
      const toggle = header.querySelector(".toc-toggle");
      if (toggle) toggle.textContent = list.hidden ? "[Show]" : "[Hide]";
    });
    container.append(header, list);
    const anchor = article.querySelector("h5");
    if (anchor) anchor.after(container);
    else article.prepend(container);
  }

  // ---- Footer address slider: the places in PART 1 that have a "footer" name -----
  function renderOffices(carousel) {
    if (carousel.childElementCount > 0) return;
    const network = window.SEICO_NETWORK || {};
    const places = [...(network.office || []), ...(network.factory || [])].filter((place) => place.footer);
    places.forEach((place) => {
      const item = document.createElement("div");
      item.className = "footer-office-item";
      item.innerHTML = `
      <div class="footer-office-header">
        <p class="footer-office-title"></p><span class="footer-office-line"></span>
      </div>
      <div class="footer-office-body">
        <span class="footer-office-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span>
        <p class="footer-office-address"></p>
      </div>`;
      item.querySelector(".footer-office-title").textContent = place.footer;
      item.querySelector(".footer-office-address").textContent = place.address.en;
      carousel.appendChild(item);
    });
  }

  // ---- Menus, search buttons, forms, sliders, logo popup, picture viewer, counters (every page) -----
  function setupPageInteractions() {
    const body = document.body;
    const $ = window.jQuery;
    const on = (selector, type, handler) => document.querySelectorAll(selector).forEach((element) => element.addEventListener(type, (event) => handler(event, element)));

    // Phone menu: open, close, and the +/- toggles of its sub-menus.
    on("#vtc-load-menu", "click", (event) => {
      event.preventDefault();
      body.classList.add("open");
    });
    on(".close-small-menu", "click", (event) => {
      event.preventDefault();
      body.classList.remove("open");
    });
    on(".mobile-nav__toggle-open, .mobile-nav__toggle-close", "click", (event, toggle) => {
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
    });
    on("a.prevent-click", "click", (event) => event.preventDefault());
    on(".mobile-link-header > a.prevent-click", "click", (event, anchor) => {
      const icon = anchor.parentElement && anchor.parentElement.querySelector("i");
      if (icon) icon.click();
    });

    // Search: the magnifier buttons and search boxes open the site search.
    on(".search-open, .search-button", "click", (event) => {
      event.preventDefault();
      openSearch();
    });
    on('form[role="search"], .vtc-small-menu form[action*="search"], form[action="/search"]', "submit", (event) => {
      event.preventDefault();
      openSearch();
    });
    on(".search-close", "click", (event) => {
      event.preventDefault();
      document.querySelectorAll(".show-search").forEach((element) => element.classList.remove("open"));
    });
    on(".btn-top", "click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Page forms (not search, not the popups, which check themselves): check the fields, then hand
    // connected forms to google-forms.js. A form that isn't connected yet only shows a notice.
    document.querySelectorAll('form:not([role="search"]):not([action="/search"]):not([data-native-form])').forEach((form) => {
      // Phone boxes: drop anything that can't be part of a phone number while typing, and clear
      // the "valid phone number" message once the visitor edits the number.
      form.querySelectorAll('input[type="tel"]').forEach((tel) => tel.addEventListener("input", () => {
        const cleaned = tel.value.replace(/[^\d+\s().-]/g, "");
        if (cleaned !== tel.value) tel.value = cleaned;
        tel.setCustomValidity("");
      }));
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();
        let firstInvalid = null;
        Array.from(form.elements).forEach((field) => {
          if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) return;
          const value = field.value.trim();
          const required = field.required || field.getAttribute("aria-required") === "true";
          const emailField = field.type === "email" || field.name.toLowerCase().includes("email");
          const invalid = (required && !value) ||
            (value !== "" && emailField && !isEmail(value)) ||
            (value !== "" && field.type === "tel" && !isPhone(value));
          field.setAttribute("aria-invalid", String(invalid));
          if (invalid && !firstInvalid) firstInvalid = field;
        });
        if (firstInvalid) {
          firstInvalid.focus();
          // A wrong phone number gets the browser's own message bubble, like a missing required field.
          if (firstInvalid.type === "tel" && firstInvalid.value.trim() !== "" && firstInvalid.reportValidity) {
            firstInvalid.setCustomValidity(PHONE_MESSAGE);
            firstInvalid.reportValidity();
          }
          return;
        }
        // Google Forms hand-off: forms connected in assets/js/google-forms.js are sent from there.
        if (window.PEBGoogleForms && window.PEBGoogleForms.handles(form)) {
          window.PEBGoogleForms.send(form);
          return;
        }
        const note = form.querySelector("[data-replica-form-note], .replica-form-template-note") || document.createElement("p");
        note.setAttribute("data-replica-form-note", "true");
        note.setAttribute("role", "status");
        note.textContent = "This form is not connected yet. No information has been sent; please call 0917-832-0004 or email inquiry@pebphilippines.com.";
        if (!note.parentElement) form.appendChild(note);
      });
    });

    // Sliders (Owl Carousel): the footer address slider (every page) and the certificates (Home).
    const arrows = ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'];
    const SLIDERS = {
      ".footer-offices-carousel": {
        items: 3, loop: true, margin: 20, nav: false, dots: true, dotsEach: 1, responsiveClass: true,
        autoplay: true, autoplayTimeout: 4e3, autoplayHoverPause: true,
        responsive: { 0: { items: 1 }, 480: { items: 2 }, 992: { items: 3 } }   // fewer than the 4 addresses, so it always slides
      },
      ".certificates-slider": {
        items: 4, loop: true, margin: 20, nav: true, dots: false, navText: arrows, responsiveClass: true,
        autoplay: true, autoplayTimeout: 4e3, autoplayHoverPause: true,
        responsive: { 0: { items: 1, margin: 10 }, 480: { items: 2, margin: 15 }, 768: { items: 3, margin: 20 }, 992: { items: 4, margin: 20 } }
      }
    };
    document.querySelectorAll("#footerOfficesCarousel").forEach(renderOffices);
    if ($ && $.fn && typeof $.fn.owlCarousel === "function") {
      Object.keys(SLIDERS).forEach((selector) => document.querySelectorAll(selector).forEach((element) => {
        try {
          $(element).owlCarousel(SLIDERS[selector]);
        } catch (e) { /* a broken slider must not stop the rest of the page */ }
      }));
    }

    // Customers & partners logos (Home): a sliding row on phones (Swiper), a grid on wider screens.
    const partnerContainer = document.querySelector(".mobile-swiper-container");
    const partnerWrapper = document.querySelector("ul.partner");
    const partnerSlides = partnerWrapper ? Array.from(partnerWrapper.children) : [];
    let partnerSwiper = null;
    const togglePartnerSwiper = () => {
      if (window.innerWidth <= 767 && !partnerSwiper) {
        partnerContainer.classList.add("swiper");
        partnerWrapper.classList.add("swiper-wrapper");
        partnerSlides.forEach((slide) => slide.classList.add("swiper-slide"));
        try {
          partnerSwiper = new window.Swiper(partnerContainer, {
            slidesPerView: 2,
            spaceBetween: 15,
            loop: true,
            autoplay: { delay: 1e3, disableOnInteraction: false },
            pagination: { el: ".mobile-swiper-container .swiper-pagination", clickable: true }
          });
        } catch (e) {
          partnerSwiper = null;
        }
      } else if (window.innerWidth > 767 && partnerSwiper) {
        if (partnerSwiper.destroy) partnerSwiper.destroy(true, true);
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
    if (partnerContainer && partnerWrapper && window.Swiper) {
      togglePartnerSwiper();
      window.addEventListener("resize", oncePerFrame(togglePartnerSwiper));
    }

    // Clicking a partner logo shows it larger in the popup already in the page. The listener sits on
    // the whole list so the copies the phone slider makes also work.
    const partnerModal = document.querySelector("#partnerLogoModal");
    // The popup's picture is created on first use, so the page has no empty <img> waiting for a source.
    const modalImgBox = partnerModal && partnerModal.querySelector(".partner-modal-img-box");
    const modalTitle = partnerModal && partnerModal.querySelector("#partnerModalTitle");
    const modalClose = partnerModal && partnerModal.querySelector("#partnerModalClose");
    const modalLink = partnerModal && partnerModal.querySelector("#partnerModalLink");
    if (partnerWrapper && modalImgBox && modalTitle && modalClose) {
      let lastLogo = null;
      let modalImg = null;
      const openLogo = (logo) => {
        const img = logo.querySelector("img");
        if (!img) return;
        lastLogo = logo;
        if (!modalImg) {
          modalImg = document.createElement("img");
          modalImg.id = "partnerModalImg";
          modalImg.decoding = "async";
          modalImgBox.appendChild(modalImg);
        }
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalTitle.textContent = img.alt;
        // Logos with a data-project page get a "View our project" button.
        const project = logo.getAttribute("data-project");
        if (modalLink) {
          modalLink.hidden = !project;
          if (project) {
            modalLink.setAttribute("href", project);
            modalLink.setAttribute("data-lead-label", "the " + img.alt + " project on seico.vn");
          } else {
            modalLink.removeAttribute("href");
            modalLink.removeAttribute("data-lead-label");
          }
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
      partnerWrapper.addEventListener("click", (event) => {
        // a click anywhere in a logo's box counts, not only on the logo picture itself
        const box = event.target.closest("ul.partner > li");
        const logo = event.target.closest("a.partner-logo") || (box ? box.querySelector("a.partner-logo") : null);
        if (!logo) return;
        event.preventDefault();
        openLogo(logo);
      });
      partnerWrapper.addEventListener("keydown", (event) => {
        const logo = event.target.closest("a.partner-logo");
        if (!logo || !isEnterOrSpace(event)) return;
        event.preventDefault();
        openLogo(logo);
      });
      modalClose.addEventListener("click", closeLogo);
      // "View this project on seico.vn": close the logo popup; the project details form takes over from here.
      if (modalLink) modalLink.addEventListener("click", () => setTimeout(closeLogo, 0));
      const backdrop = partnerModal.querySelector(".partner-modal-backdrop");
      if (backdrop) backdrop.addEventListener("click", closeLogo);
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeLogo();
      });
    }

    // Picture viewer: Fancybox where the page loads it, otherwise a simple built-in viewer.
    const lightboxSelector = "[data-fancybox], .certificate-item, .footer-certificates a, .footer-certifications a";
    if (window.Fancybox && window.Fancybox.bind) {
      try {
        window.Fancybox.bind(lightboxSelector, {});
      } catch (e) { /* keep the links working as plain links */ }
    } else {
      let viewer = null;
      const closeViewer = () => {
        if (viewer) viewer.remove();
        viewer = null;
      };
      on(lightboxSelector, "click", (event, trigger) => {
        const image = trigger.querySelector("img");
        const source = trigger.getAttribute("href") || (image && (image.currentSrc || image.src));
        if (!source || source === "#") return;
        event.preventDefault();
        closeViewer();
        viewer = document.createElement("div");
        viewer.setAttribute("role", "dialog");
        viewer.setAttribute("aria-modal", "true");
        viewer.className = "reference-native-lightbox";
        viewer.style.cssText = "position:fixed;inset:0;z-index:2147483647;background:rgba(0,0,0,.86);display:flex;align-items:center;justify-content:center;padding:24px;cursor:zoom-out;";
        viewer.innerHTML = '<button type="button" aria-label="Close" style="position:absolute;right:18px;top:12px;border:0;background:transparent;color:#fff;font-size:32px;line-height:1;cursor:pointer">\xD7</button><img alt="" style="max-width:100%;max-height:100%;object-fit:contain;cursor:default">';
        const enlarged = viewer.querySelector("img");
        enlarged.src = source;
        enlarged.alt = (image && image.alt) || trigger.getAttribute("title") || "";
        enlarged.addEventListener("click", (clickEvent) => clickEvent.stopPropagation());
        viewer.addEventListener("click", closeViewer);   // the close button is inside, so this covers it too
        body.appendChild(viewer);
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeViewer();
      });
    }

    // Counters that count up when they come into view (<span class="counter" data-target="1000">).
    const counters = Array.from(document.querySelectorAll(".counter[data-target]"));
    const targetOf = (counter) => parseInt((counter.getAttribute("data-target") || "0").replace(/[,.]/g, ""), 10);
    const formatCounter = (value) => Math.floor(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");   // 1,000
    const animateCounter = (counter) => {
      if (counter.dataset.animating === "true") return;
      const target = targetOf(counter);
      if (!Number.isFinite(target)) return;
      counter.dataset.animating = "true";
      const start = Date.now();
      const step = () => {
        const progress = Math.min(1, (Date.now() - start) / 1800);
        counter.textContent = formatCounter(target * progress);
        if (progress < 1) window.requestAnimationFrame(step);
        else counter.dataset.animating = "false";
      };
      window.requestAnimationFrame(step);
    };
    if ("IntersectionObserver" in window && counters.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
          } else {
            entry.target.dataset.animating = "false";
            entry.target.textContent = "0";
          }
        });
      }, { threshold: 0.15 });
      counters.forEach((counter) => observer.observe(counter));
    } else {
      counters.forEach((counter) => {
        const target = targetOf(counter);
        if (Number.isFinite(target)) counter.textContent = formatCounter(target);
      });
    }
  }

  // ---- Site search (magnifier in the menu): searches the page titles listed in PART 1 -----
  const normalizeText = (text) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const searchPages = (window.SEICO_PAGES || []).map((page) => Object.assign({ key: normalizeText(page.title) }, page));
  function closeSearch() {
    const overlay = document.querySelector(".static-search");
    if (overlay) overlay.remove();
  }
  function openSearch() {
    closeSearch();
    const overlay = document.createElement("div");
    overlay.className = "static-search";
    overlay.style.cssText = "position:fixed;inset:0;z-index:999999;background:rgba(24, 70, 112,.75);display:flex;justify-content:center;align-items:flex-start;padding:12vh 20px 25px";
    overlay.innerHTML = '<div role="dialog" aria-modal="true" aria-label="Search" style="background:white;width:700px;max-width:100%;max-height:76vh;overflow:auto;padding:30px"><button type="button" aria-label="Close" style="float:right;font-size:28px;border:0;background:none">\xD7</button><h2 style="font-size:22px;color:#2672b0;margin-top:0">SEARCH</h2><input placeholder="Search..." aria-label="Search pages" style="height:45px;border:1px solid #ddd;padding:10px;width:100%;font-size:16px"><div class="static-search-results" style="margin-top:20px"></div></div>';
    overlay.addEventListener("click", closeSearch);
    overlay.firstElementChild.addEventListener("click", (event) => event.stopPropagation());
    overlay.querySelector("button").addEventListener("click", closeSearch);
    const input = overlay.querySelector("input");
    const results = overlay.querySelector(".static-search-results");
    input.addEventListener("input", () => {
      results.replaceChildren();
      const query = normalizeText(input.value.trim());
      if (!query) return;
      const matches = searchPages.filter((page) => page.key.includes(query)).slice(0, 25);
      matches.forEach((page) => {
        const anchor = document.createElement("a");
        anchor.href = page.href;
        anchor.textContent = page.title;
        anchor.style.cssText = "display:block;color:#2672b0;padding:13px 0;border-bottom:1px solid #eee";
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
  // The visitor fills in first name, last name, email and (optional) phone, then the popup shows
  // the three company profiles (PROFILES below) to download. Filling it in once is enough: the
  // next time, and after the project details form, the popup opens straight on the downloads.
  // Sending: done by assets/js/google-forms.js (the shared "Leads" Google Form, entry "leads"),
  // which also has the spam trap. Nothing is sent until that entry's address is filled in.
  function setupProfilePopup() {
    // The three company profiles offered after the form (files in assets/downloads/, made smaller
    // and with private details blurred on 2026-11-13; the originals are in company-profile/).
    const PROFILES = [
      { id: "peb", main: true, name: "PEB Philippines", size: "18.7 MB", file: "assets/downloads/peb-philippines-company-profile.pdf",
        text: "Who we are, the pre-engineered building system, our projects in the Philippines from 2022 to 2026, SEICO Group and how we manage projects." },
      { id: "delta", name: "DELTA Group", size: "14.2 MB", file: "assets/downloads/delta-group-company-profile.pdf",
        text: "Our local partner DELTA DNC Inc. and DELTACON Incorporated: licenses and registrations, equipment, team and Philippine projects." },
      { id: "seico", name: "SEICO Group", size: "12.6 MB", file: "assets/downloads/seico-group-company-profile.pdf",
        text: "The manufacturer: factories, quality management, design and production capacity, and projects in Vietnam and abroad (2023 edition)." }
    ];
    // "Details already given" is shared with the project details form (detailsGiven, at the top of PART 2).
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
          <div class="profile-step-form">
          <h3 id="profile-popup-title">Fill in the information to download documents</h3>
          <form method="post" action="" name="profileForm" data-native-form novalidate>
            <div class="form-group clearfix">
              <div class="col-md-6 profile-name-field">
                <label for="profile-first-name">First Name<span>*</span></label>
                <input type="text" class="form-control" id="profile-first-name" placeholder="First name ..." name="firstname" autocomplete="given-name" required>
              </div>
              <div class="col-md-6 profile-name-field">
                <label for="profile-last-name">Last Name<span>*</span></label>
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
            <div class="checkbox profile-consent">
              <label for="profile-consent"><input type="checkbox" id="profile-consent" name="consent" value="yes" required> I agree that PEB Philippines may contact me about my project, as described in the <a href="${siteRoot}shared/privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a>.<span>*</span></label>
            </div>
            <p class="profile-consent-error" role="alert"></p>
            <div class="text-center">
              <button name="sbm-contact" type="submit">Send information</button>
            </div>
          </form>
          </div>${confirmPanel("profile-confirm-title")}
          <div class="profile-step-downloads" hidden>
            <h3 id="profile-downloads-title" tabindex="-1">Company profiles</h3>
            <p class="profile-intro">Thank you. Download the profiles you would like to read.</p>
            <ul class="profile-list">${PROFILES.map((p) => `
              <li class="profile-card${p.main ? " profile-card--main" : ""}">
                ${p.main ? '<span class="profile-badge">Start here</span>' : ""}
                <h4>${p.name}</h4>
                <p>${p.text}</p>
                <a class="profile-dl" href="${siteRoot}${p.file}" download data-profile="${p.id}">
                  <i class="fa fa-download" aria-hidden="true"></i> Download PDF <span>(${p.size})</span>
                </a>
              </li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>`;
    const modal = holder.firstElementChild;
    document.body.appendChild(modal);
    const form = modal.querySelector("form");
    const phone = modal.querySelector("#profile-phone");
    const stepForm = modal.querySelector(".profile-step-form");
    const stepDownloads = modal.querySelector(".profile-step-downloads");
    const consent = modal.querySelector("#profile-consent");
    const consentError = modal.querySelector(".profile-consent-error");
    const CONSENT_MESSAGE = "Please tick the box so we may contact you.";
    consent.addEventListener("change", () => {
      if (!consent.checked) return;
      consent.removeAttribute("aria-invalid");
      consentError.textContent = "";
    });
    const stepConfirm = modal.querySelector(".popup-confirm");
    let cancelConfirm = () => {};
    // step: "form", "confirm" (thank you, filled in by showConfirm) or "downloads"
    function showStep(step) {
      stepForm.hidden = step !== "form";
      stepConfirm.hidden = step !== "confirm";
      stepDownloads.hidden = step !== "downloads";
      modal.setAttribute("aria-labelledby", { form: "profile-popup-title", confirm: "profile-confirm-title", downloads: "profile-downloads-title" }[step]);
    }

    // The country code picker loads the first time the popup opens.
    let picker = null;
    const isOnlyDialCode = () => /^(\+\d*\s*)?$/.test(phone.value);
    const showDialCode = () => { phone.value = `+${picker.getSelectedCountryData().dialCode} `; };
    function loadPhonePicker() {
      if (loadPhonePicker.started) return;
      loadPhonePicker.started = true;
      // Its stylesheet loads with it, only for visitors who open this popup (not on every page).
      if (!document.querySelector('link[href$="intl-tel-input.css"]')) {
        const style = document.createElement("link");
        style.rel = "stylesheet";
        style.href = `${siteRoot}vendor/css/intl-tel-input.css`;
        document.head.appendChild(style);
      }
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
      const skip = detailsGiven();   // details already given (here or in the project details form)
      showStep(skip ? "downloads" : "form");
      if (!skip) loadPhonePicker();
      $(modal).modal("show");
    }
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", openPopup);
      trigger.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") openPopup(event);
      });
    });
    $(modal).on("shown.bs.modal", () => (stepDownloads.hidden ? modal.querySelector("#profile-first-name") : stepDownloads.querySelector("h3")).focus());
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let firstInvalid = null;
      form.querySelectorAll("input[required]").forEach((field) => {
        const value = field.value.trim();
        // The consent box must be ticked (its value is always "yes", so check "checked").
        const invalid = field.type === "checkbox" ? !field.checked : (!value || (field.type === "email" && !isEmail(value)));
        field.setAttribute("aria-invalid", String(invalid));
        if (invalid && !firstInvalid) firstInvalid = field;
      });
      consentError.textContent = consent.checked ? "" : CONSENT_MESSAGE;
      if (firstInvalid) { firstInvalid.focus(); return; }
      // Sent to Google Forms in the background (google-forms.js; a phone box holding only the
      // country code counts as blank there). A short "thank you" shows, then the downloads.
      if (window.PEBGoogleForms && window.PEBGoogleForms.handles(form)) window.PEBGoogleForms.sendQuietly(form);
      rememberDetails();
      const name = firstName(form.elements.firstname.value);
      showStep("confirm");
      cancelConfirm = showConfirm(stepConfirm, name ? `Thank you, ${name}!` : "Thank you!",
        "Your details have been received. Your company profiles are ready to download.", "Show the downloads", () => {
          showStep("downloads");
          playIn(stepDownloads);
          stepDownloads.querySelector("h3").focus();
        });
    });
    $(modal).on("hidden.bs.modal", () => {
      cancelConfirm();   // closed during the "thank you": next time it opens on the downloads
      form.reset();
      if (picker) {
        picker.setCountry("ph");
        showDialCode();
      }
      modal.querySelectorAll("[data-replica-form-note]").forEach((note) => note.remove());
      modal.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
      consentError.textContent = "";
    });
  }
  setupProfilePopup();

  // Consultation form (contact/consultation.html). The questions follow PEB Philippines' Google
  // Form for consultations. Each "Other:" choice switches on its own text box (required while
  // chosen). Choice groups marked data-required need an answer. Plans: instead of a file upload
  // (a Google Form can't take files from another website), the visitor pastes share links to
  // their plans (Google Drive, Dropbox, WeTransfer...), one per line; each line must look like a link.
  // Sending: done by assets/js/google-forms.js (entry "consultation", which also has the spam trap
  // and the thank-you message). Until that entry has its Google Form address, a notice says the
  // form is not connected yet. Field names: customer_name, contact_number, email, client_type
  // (+ client_type_other), position, decision_maker (+ _other), project_name, project_location,
  // order_type, start_date, floor_area, import_license (+ _other), transaction_type (+ _other),
  // estimate_type (+ _other), plans_link, peb_experience (+ _other), previous_suppliers.
  function setupConsultationForm() {
    const form = document.querySelector("form#consultation-request");   // (the Home page has a section with id="consultation")
    if (!form) return;
    const errorBox = form.querySelector(".hx-consult-error");
    const plansLink = form.querySelector('[name="plans_link"]');
    const showError = (show) => { if (errorBox) errorBox.hidden = !show; };
    const looksLikeLinks = (text) => text.split(/\n+/).map((line) => line.trim()).filter(Boolean)
      .every((line) => /^(https?:\/\/)?[^\s/]+\.[^\s]{2,}$/i.test(line));

    // "Other:" text boxes follow their radio button.
    form.querySelectorAll(".hx-choice").forEach((group) => {
      const other = group.querySelector('.hx-choice-other input[type="text"]');
      group.addEventListener("change", () => {
        group.removeAttribute("aria-invalid");
        if (!other) return;
        const on = group.querySelector('.hx-choice-other input[type="radio"]').checked;
        other.disabled = !on;
        other.required = on;
        if (on) other.focus(); else { other.value = ""; other.removeAttribute("aria-invalid"); }
      });
    });

    form.addEventListener("input", (event) => {
      if (event.target.getAttribute("aria-invalid") === "true") event.target.removeAttribute("aria-invalid");
    });

    // After a successful send google-forms.js clears the form: switch the "Other:" boxes off again.
    form.addEventListener("reset", () => setTimeout(() => {
      form.querySelectorAll('.hx-choice-other input[type="text"]').forEach((other) => { other.disabled = true; other.required = false; });
      form.querySelectorAll("[aria-invalid]").forEach((element) => element.removeAttribute("aria-invalid"));
    }, 0));

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let firstInvalid = null;
      const flag = (element, focusTarget) => { element.setAttribute("aria-invalid", "true"); if (!firstInvalid) firstInvalid = focusTarget || element; };
      form.querySelectorAll("input[required]:not([disabled]), textarea[required]").forEach((field) => {
        const value = field.value.trim();
        let bad = !value;
        if (!bad && field.type === "email") bad = !isEmail(value);
        if (!bad && field.type === "tel") bad = !isPhone(value);
        if (bad) flag(field); else field.removeAttribute("aria-invalid");
      });
      form.querySelectorAll(".hx-choice[data-required]").forEach((group) => {
        if (!group.querySelector('input[type="radio"]:checked')) flag(group, group.querySelector('input[type="radio"]'));
      });
      if (plansLink) {
        if (plansLink.value.trim() && !looksLikeLinks(plansLink.value)) flag(plansLink); else plansLink.removeAttribute("aria-invalid");
      }
      if (firstInvalid) {
        showError(true);
        firstInvalid.focus();
        return;
      }
      showError(false);
      // Connected: google-forms.js sends it and shows the result under the form.
      if (window.PEBGoogleForms && window.PEBGoogleForms.handles(form)) {
        window.PEBGoogleForms.send(form);
        return;
      }
      let note = form.querySelector("[data-replica-form-note]");
      if (!note) {
        note = document.createElement("p");
        note.setAttribute("data-replica-form-note", "true");
        note.setAttribute("role", "status");
        form.appendChild(note);
      }
      note.textContent = "This form is not connected yet. No information has been sent; please call 0917-832-0004 or email inquiry@pebphilippines.com.";
    });
  }
  setupConsultationForm();
  // Project details form (one popup for the whole site). It opens:
  //  - from links to SEICO's project search on seico.vn (the Vietnam, Thailand and Indonesia menu
  //    items and the country flags on the Projects page), then continues to seico.vn;
  //  - from "See all ... projects" buttons ([data-lead-gate] with data-lead-target="#list-id",
  //    drawn by assets/js/ph-projects.js), then shows the hidden list on the page.
  // It asks for full name and email (required), mobile number (optional) and the visitor's consent. Once a browser has filled it in, nothing asks again: the seico.vn links go
  // straight through and every "See all" list opens by itself (ASK_ONCE; remembered with detailsGiven).
  //
  // Sending: done by assets/js/google-forms.js (the shared "Leads" Google Form, entry "leads"),
  // which also has the spam trap. Nothing is sent until that entry's address is filled in.
  // The visitor carries on once the details have gone, or after 5 seconds even if it fails.
  function setupProjectLeadForm() {
    const ASK_ONCE = true;   // false: ask every time (the answer is still remembered for the profile popup)
    const LINKS = 'a[href^="https://seico.vn/en/projects.htm"]';
    const GATES = "[data-lead-gate]";
    const $ = window.jQuery;
    const siteRoot = window.SEICO_ROOT || "";

    const given = () => ASK_ONCE && detailsGiven();
    // Shows the list a "See all" button stands for, and hides the button's box.
    const reveal = (button, focus) => {
      const target = document.querySelector(button.getAttribute("data-lead-target"));
      if (!target) return;
      target.hidden = false;
      const box = button.closest("[data-lead-gate-box]");
      if (box) box.hidden = true;
      if (focus) {
        // A list that joins its parent grid (display: contents) has no box of its own: use its first card.
        const anchor = target.getClientRects().length ? target : (target.firstElementChild || target);
        if (!anchor.hasAttribute("tabindex")) anchor.setAttribute("tabindex", "-1");
        anchor.focus({ preventScroll: true });
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    if (given()) document.querySelectorAll(GATES).forEach((button) => reveal(button, false));

    if (!$ || !$.fn || !$.fn.modal || !document.querySelector(LINKS + "," + GATES)) return;
    const holder = document.createElement("div");
    holder.innerHTML = `
    <div class="modal fade" id="intlProjectsModal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="intl-popup-title" aria-describedby="intl-popup-text">
      <div class="modal-dialog">
        <div class="modal-content">
          <button type="button" class="intl-popup-close" data-dismiss="modal" aria-label="Close">&times;</button>
          <div class="logo"><img src="${siteRoot}assets/images/logo-peb-philippines-horizontal.png" alt="PEB Philippines"></div>
          <h3 id="intl-popup-title">Thank you for your interest in our projects</h3>
          <p id="intl-popup-text" class="intl-popup-text">Before you look at <span class="intl-popup-what">our projects in <strong class="intl-popup-country">other countries</strong></span>, could you please share a few details with us? Thank you!</p>
          <form method="post" action="" name="intlProjectsForm" data-native-form novalidate>
            <input type="hidden" name="source" value="">
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
            <div class="form-group">
              <label for="intl-phone">Mobile number</label>
              <input type="tel" class="form-control" id="intl-phone" name="phone" placeholder="e.g. 0917 123 4567" autocomplete="tel">
            </div>
            <div class="checkbox intl-popup-consent">
              <label for="intl-consent"><input type="checkbox" id="intl-consent" name="consent" value="yes" required> I agree that PEB Philippines may contact me about my project, as described in the <a href="${siteRoot}shared/privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a>.<span>*</span></label>
            </div>
            <p class="intl-popup-error" role="alert"></p>
            <div class="text-center">
              <button type="submit" class="intl-popup-submit">Continue to projects</button>
            </div>
          </form>
          <p class="intl-popup-foot"></p>${confirmPanel("intl-confirm-title")}
        </div>
      </div>
    </div>`;
    const modal = holder.firstElementChild;
    document.body.appendChild(modal);
    const form = modal.querySelector("form");
    const nameField = modal.querySelector("#intl-name");
    const phoneField = modal.querySelector("#intl-phone");
    const emailField = modal.querySelector("#intl-email");
    const consentField = modal.querySelector("#intl-consent");
    const error = modal.querySelector(".intl-popup-error");
    const submit = modal.querySelector(".intl-popup-submit");
    const what = modal.querySelector(".intl-popup-what");
    const foot = modal.querySelector(".intl-popup-foot");
    const confirmBox = modal.querySelector(".popup-confirm");
    const formView = [modal.querySelector("#intl-popup-title"), modal.querySelector("#intl-popup-text"), form, foot];
    let cancelConfirm = () => {};
    const showFormView = (show) => {
      formView.forEach((element) => { element.hidden = !show; });
      confirmBox.hidden = show;
      modal.setAttribute("aria-labelledby", show ? "intl-popup-title" : "intl-confirm-title");
      modal.setAttribute("aria-describedby", show ? "intl-popup-text" : "intl-confirm-title");
    };
    const fields = [nameField, emailField, phoneField, consentField];
    let pending = null;    // { kind: "link", href } or { kind: "gate", button }
    let opener = null;

    // Flags carry the country in the picture's alt text; menu items carry it as their text.
    const countryOf = (link) => {
      const img = link.querySelector("img[alt]");
      if (img && img.alt.trim()) return img.alt.trim();
      const text = link.textContent.replace(/\s+/g, " ").trim();
      return /[a-z]/i.test(text) ? text : "other countries";
    };
    const strong = (text) => {
      const node = document.createElement("strong");
      node.className = "intl-popup-country";
      node.textContent = text;
      return node;
    };
    const open = () => {
      document.body.classList.remove("open"); // close the phone menu if it is open
      document.body.classList.add("intl-popup-open");
      $(modal).modal("show");
    };

    // One listener for the whole page, so menu items, carousel copies and drawn buttons all work.
    document.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const link = event.target.closest ? event.target.closest(LINKS) : null;
      const gate = !link && event.target.closest ? event.target.closest(GATES) : null;
      if (!link && !gate) return;
      if (given()) {
        if (gate) reveal(gate, true);
        return;                     // links go straight through
      }
      event.preventDefault();
      opener = link || gate;
      what.textContent = "";
      if (link) {
        // A link can name what it opens (data-lead-label, e.g. the Home logo popup's project button);
        // otherwise the flag or menu text gives the country.
        const named = link.getAttribute("data-lead-label");
        const country = named ? "" : countryOf(link);
        pending = { kind: "link", href: link.href };
        if (named) what.append(strong(named));
        else what.append("our projects in ", strong(country));
        form.elements.country.value = country;
        form.elements.destination.value = link.href;
        form.elements.source.value = "seico.vn projects: " + (named || country);
        foot.textContent = "You will be taken to our projects on seico.vn.";
      } else {
        const label = gate.getAttribute("data-lead-label") || "all our projects";
        pending = { kind: "gate", button: gate };
        what.append(strong(label));
        form.elements.country.value = "Philippines";
        form.elements.destination.value = window.location.href.split("#")[0];
        form.elements.source.value = document.title + ": " + label;
        foot.textContent = "The full list opens on this page.";
      }
      open();
    });
    $(modal).on("shown.bs.modal", () => nameField.focus());
    $(modal).on("hidden.bs.modal", () => {
      document.body.classList.remove("intl-popup-open");
      cancelConfirm();
      showFormView(true);
      form.reset();
      error.textContent = "";
      submit.disabled = false;
      submit.textContent = "Continue to projects";
      fields.forEach((field) => field.removeAttribute("aria-invalid"));
      if (opener && opener.isConnected && !opener.closest("[hidden]")) opener.focus();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const problems = [
        [nameField, !nameField.value.trim(), "Please enter your name."],
        [emailField, !isEmail(emailField.value.trim()), "Please enter a valid email address."],
        // Mobile number is optional (2026-11-20), but one that is filled in must look like a real number.
        [phoneField, phoneField.value.trim() !== "" && !isPhone(phoneField.value.trim()), "Please enter a valid mobile number, for example 0917 832 0004."],
        [consentField, !consentField.checked, "Please tick the box so we may contact you."]
      ];
      problems.forEach(([field, bad]) => field.setAttribute("aria-invalid", String(bad)));
      const first = problems.find(([, bad]) => bad);
      if (first) {
        error.textContent = first[2];
        first[0].focus();
        return;
      }
      error.textContent = "";
      submit.disabled = true;
      rememberDetails();
      const job = pending;
      // Sent in the background; the "thank you" shows at once. The popup moves on when the
      // confirmation time is up and the details have gone (or after 5 seconds at most).
      const sent = window.PEBGoogleForms && window.PEBGoogleForms.handles(form)
        ? Promise.race([window.PEBGoogleForms.sendQuietly(form), new Promise((resolve) => setTimeout(resolve, 5000))])
        : Promise.resolve();
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        if (!job) {
          $(modal).modal("hide");
          return;
        }
        if (job.kind === "link") {
          window.location.href = job.href;
          return;
        }
        $(modal).one("hidden.bs.modal", () => {
          document.querySelectorAll(GATES).forEach((button) => reveal(button, button === job.button));
        });
        $(modal).modal("hide");
      };
      const name = firstName(nameField.value);
      const target = what.textContent.trim();
      const goingTo = !job ? "" : job.kind === "link"
        ? `Taking you to ${target}${/seico\.vn/.test(target) ? "" : " on seico.vn"}…`
        : `Opening ${target}…`;
      showFormView(false);
      cancelConfirm = showConfirm(confirmBox, name ? `Thank you, ${name}!` : "Thank you!",
        `Your details have been received. ${goingTo}`.trim(), job && job.kind === "link" ? "Go to the projects" : "Show the projects",
        () => sent.then(finish));
    });
  }
  setupProjectLeadForm();
  // Contact page: "Build something like this" links on project cards open
  // contact.html?project=<name>#message, and the message box starts with that project's name.
  function setupProjectEnquiry() {
    const project = new URLSearchParams(window.location.search).get("project");
    const box = document.querySelector('#frm-contact textarea[name="content"]');
    if (!project || !box || box.value.trim()) return;
    box.value = "I am interested in a building like your " + project.slice(0, 120) + " project. ";
  }
  setupProjectEnquiry();
  // Side contact buttons (Hotline, Contact Us, Messenger; desktop only): tucked into the left edge
  // behind a small tab. Clicking the tab slides them out; clicking it again, pressing Esc or
  // clicking anywhere else tucks them away. No extra HTML is needed: the tab is added here.
  // Styles: "Floating contact buttons" in assets/css/main.css.
  function setupContactDrawer() {
    const drawer = document.getElementById("contactFloatSide");
    if (!drawer || drawer.querySelector(".cf-side-toggle")) return;
    const items = Array.from(drawer.querySelectorAll(".cf-side-item"));
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "cf-side-toggle";
    toggle.setAttribute("aria-controls", "contactFloatSide");
    toggle.innerHTML = '<i class="fa fa-comments" aria-hidden="true"></i><i class="fa fa-angle-right cf-side-arrow" aria-hidden="true"></i>';
    drawer.appendChild(toggle);
    const set = (open) => {
      drawer.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Hide contact options" : "Show contact options");
      items.forEach((item) => { if (open) item.removeAttribute("tabindex"); else item.setAttribute("tabindex", "-1"); });
    };
    set(false);
    drawer.classList.add("cf-drawer");
    toggle.addEventListener("click", () => set(!drawer.classList.contains("is-open")));
    document.addEventListener("click", (event) => {
      if (drawer.classList.contains("is-open") && !drawer.contains(event.target)) set(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawer.classList.contains("is-open")) { set(false); toggle.focus(); }
    });
  }
  setupContactDrawer();
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

  // Detaching navigation bar (every page), an idea borrowed from pebphilsteel.com on 2026-11-13.
  // It works in two steps so nothing pops:
  //   1. "nav-stuck": once the top contact strip has scrolled away, the menu bar (desktop) or the
  //      logo bar with the menu button (phones and tablets) stays pinned to the top of the window,
  //      looking exactly as it does in the header;
  //   2. "nav-detached": after scrolling DETACH_AFTER px past the header, the bar smoothly pulls away
  //      from the edges into a rounded, frosted card 12px below the top (CSS transitions).
  // Scrolling back up plays it in reverse. The header keeps its height while the bar is pinned, so
  // the page underneath doesn't jump. Styles: "DETACHING NAVIGATION BAR" in main.css.
  function setupDetachingNav() {
    const header = document.querySelector("header.header");   // the site header (not the phone menu, which is also a <header>)
    if (!header) return null;
    const html = document.documentElement;
    const GAP = 12;            // px between the floating card and the top of the window (same as the CSS)
    const DETACH_AFTER = 60;   // px of scrolling past the header before the bar turns into the card
    let stickAt = 0;           // scroll position where the bar reaches the top of the window
    let detachAt = 0;
    let naturalHeight = 0;
    let barHeight = 0;
    let ticking = false;
    const scrollY = () => window.scrollY || html.scrollTop || 0;
    const activeBar = () => {
      const desk = header.querySelector(".vtc-menu-desktop .midde");
      if (desk && getComputedStyle(desk).display !== "none") return desk;
      return header.querySelector(".vtc-menu-mobile");
    };
    const update = () => {
      ticking = false;
      const y = scrollY();
      const stuck = y > stickAt;
      const detached = stuck && y > detachAt;
      const wasStuck = html.classList.contains("nav-stuck");
      if (stuck === wasStuck && detached === html.classList.contains("nav-detached")) return;
      header.style.minHeight = stuck ? naturalHeight + "px" : "";   // hold the space the bar leaves behind
      // Landing far down the page in one jump (reload, link to a section): drop the card in from above.
      html.classList.toggle("nav-drop", detached && !wasStuck);
      html.classList.toggle("nav-stuck", stuck);
      html.classList.toggle("nav-detached", detached);
    };
    const measure = () => {
      const wasPinned = html.classList.contains("nav-stuck");
      html.classList.add("nav-instant");   // re-measuring after a resize: no animation
      html.classList.remove("nav-stuck", "nav-detached", "nav-drop");
      header.style.minHeight = "";
      const y = scrollY();
      naturalHeight = header.offsetHeight;
      const bar = activeBar();
      barHeight = bar ? bar.offsetHeight : 0;
      stickAt = bar ? bar.getBoundingClientRect().top + y : 0;
      detachAt = header.getBoundingClientRect().bottom + y + DETACH_AFTER;
      update();
      if (wasPinned) html.classList.remove("nav-drop");   // it was already showing: don't drop it in again
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => html.classList.remove("nav-instant")));
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", oncePerFrame(measure));
    window.addEventListener("load", measure);
    measure();
    // How far a section has to stay below the top of the window so the bar doesn't cover it
    // (used by the section links below). 0 while the page is still at the top.
    return { offsetFor: (y) => (y <= stickAt ? 0 : (y > detachAt ? GAP : 0) + barHeight + 8) };
  }
  const detachingNav = setupDetachingNav();

  // Section links (every page): any link to a section on the same page glides there instead of jumping.
  // This covers jump links, tables of contents and any such link added later, with no extra code.
  // Like the back-to-top glide, it animates even when the system asks for reduced motion (the owner wants the animation).
  function setupSectionLinks() {
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
    const glideTo = (target, retries = 2) => {
      stop();
      const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const maxY = Math.max(0, root.scrollHeight - window.innerHeight);
      const start = window.scrollY || root.scrollTop || 0;
      let end = Math.min(maxY, Math.max(0, Math.round(target.getBoundingClientRect().top + start - margin)));
      if (detachingNav) end = Math.max(0, end - detachingNav.offsetFor(end));   // stop below the floating menu bar
      const distance = end - start;
      if (Math.abs(distance) < 2) { window.scrollTo(0, end); return; }
      const duration = Math.min(MAX_MS, 450 + Math.abs(distance) * 0.15);
      gliding = { previousBehavior: root.style.scrollBehavior };
      root.style.scrollBehavior = "auto";   // CSS smooth scrolling would fight each step
      stopEvents.forEach((name) => window.addEventListener(name, stop, { capture: true, passive: true }));
      const began = performance.now();
      const run = gliding;
      const step = (now) => {
        if (gliding !== run) return;
        const progress = Math.min(1, (now - began) / duration);
        window.scrollTo(0, Math.round(start + distance * ease(progress)));
        if (progress < 1) window.requestAnimationFrame(step);
        else {
          stop();
          // Pictures that load during the glide can push the section down: aim again (up to twice).
          if (retries > 0) window.setTimeout(() => {
            const off = detachingNav ? detachingNav.offsetFor(window.scrollY) : 0;
            const miss = target.getBoundingClientRect().top - margin - off;
            if (Math.abs(miss) > 4) glideTo(target, retries - 1);
          }, 120);
        }
      };
      window.requestAnimationFrame(step);
    };
    document.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest ? event.target.closest("a[href]") : null;
      if (!link || link.hasAttribute("data-toggle") || link.hasAttribute("data-fancybox") || link.classList.contains("prevent-click")) return;
      if (link.target && link.target !== "_self") return;
      if (!link.hash || link.hash === "#" || link.getAttribute("href") === "#") return;
      if (link.pathname !== window.location.pathname || link.search !== window.location.search) return;
      const id = decodeURIComponent(link.hash.slice(1));
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      if (window.location.hash !== link.hash) window.history.pushState(null, "", link.hash);
      glideTo(target);
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  }
  setupSectionLinks();

  // Simple video player (home page). Without this script the browser's own controls stay on the video.
  function setupVideoPlayers() {
    const HIDE_AFTER = 2500;
    const format = (seconds) => {
      if (!Number.isFinite(seconds)) return "0:00";
      const whole = Math.floor(seconds);
      return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
    };
    document.querySelectorAll("[data-hx-player]").forEach((player) => {
      const video = player.querySelector("video");
      const big = player.querySelector(".hx-player-big");
      const seek = player.querySelector(".hx-player-seek");
      const current = player.querySelector("[data-current]");
      const duration = player.querySelector("[data-duration]");
      const playButton = player.querySelector('[data-action="play"]');
      const muteButton = player.querySelector('[data-action="mute"]');
      const fullButton = player.querySelector('[data-action="fullscreen"]');
      if (!video || !big || !seek || !playButton || !muteButton || !fullButton) return;
      video.controls = false;
      let hideTimer = null;
      let seeking = false;
      const showBar = () => {
        player.classList.remove("is-idle");
        window.clearTimeout(hideTimer);
        if (!video.paused) hideTimer = window.setTimeout(() => player.classList.add("is-idle"), HIDE_AFTER);
      };
      const toggle = () => {
        if (video.paused || video.ended) {
          const started = video.play();
          if (started && started.catch) started.catch(() => undefined);
        } else {
          video.pause();
        }
      };
      const setSeekFill = (percent) => seek.style.setProperty("--hx-seek", `${percent}%`);
      const updateTime = () => {
        if (!video.duration) return;
        current.textContent = format(video.currentTime);
        if (!seeking) {
          const percent = (video.currentTime / video.duration) * 100;
          seek.value = String(percent);
          setSeekFill(percent);
        }
      };
      const updatePlaying = () => {
        const playing = !video.paused && !video.ended;
        player.classList.toggle("is-playing", playing);
        player.classList.toggle("has-started", playing || video.currentTime > 0);
        playButton.setAttribute("aria-label", playing ? "Pause" : "Play");
        big.setAttribute("aria-label", video.ended ? "Replay video" : "Play video");
        showBar();
      };
      const updateMuted = () => {
        player.classList.toggle("is-muted", video.muted);
        muteButton.setAttribute("aria-label", video.muted ? "Unmute" : "Mute");
      };
      video.addEventListener("click", toggle);
      big.addEventListener("click", toggle);
      playButton.addEventListener("click", toggle);
      video.addEventListener("play", updatePlaying);
      video.addEventListener("pause", updatePlaying);
      video.addEventListener("ended", updatePlaying);
      video.addEventListener("timeupdate", updateTime);
      video.addEventListener("loadedmetadata", () => {
        duration.textContent = format(video.duration);
        updateTime();
      });
      video.addEventListener("waiting", () => player.classList.add("is-loading"));
      ["playing", "canplay", "pause"].forEach((name) => video.addEventListener(name, () => player.classList.remove("is-loading")));
      video.addEventListener("volumechange", updateMuted);
      seek.addEventListener("input", () => {
        seeking = true;
        setSeekFill(Number(seek.value));
        if (video.duration) current.textContent = format((Number(seek.value) / 100) * video.duration);
      });
      seek.addEventListener("change", () => {
        if (video.duration) video.currentTime = (Number(seek.value) / 100) * video.duration;
        seeking = false;
      });
      muteButton.addEventListener("click", () => { video.muted = !video.muted; });
      fullButton.addEventListener("click", () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else if (player.requestFullscreen) player.requestFullscreen();
        else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
      });
      document.addEventListener("fullscreenchange", () => {
        const on = document.fullscreenElement === player;
        player.classList.toggle("is-fullscreen", on);
        fullButton.setAttribute("aria-label", on ? "Exit full screen" : "Full screen");
      });
      ["mousemove", "touchstart", "focusin"].forEach((name) => player.addEventListener(name, showBar, { passive: true }));
      player.addEventListener("mouseleave", () => { if (!video.paused) player.classList.add("is-idle"); });
      player.addEventListener("keydown", (event) => {
        if (event.target === seek || event.target.closest("button")) return;
        if (event.key === " " || event.key === "k") { event.preventDefault(); toggle(); }
      });
      if (video.readyState >= 1) duration.textContent = format(video.duration);
      updateMuted();
    });
  }
  setupVideoPlayers();

  setupNetworkMap();
  setupTableOfContents();
  setupPageInteractions();
})();
