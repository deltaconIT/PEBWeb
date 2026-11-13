/* =====================================================================
   PHILIPPINE PROJECTS - THE LIST
   ---------------------------------------------------------------------
   One list feeds three pages: the Projects overview, Philippine Projects
   and Project Types. Edit a project here and every page updates.

   Each project:
     name, year, status ("Completed", "Ongoing" or "" when not stated),
     location ("" when not stated), region ("Luzon", "Visayas", "Mindanao"
     or ""), type (one of the type ids below), scope, steel, area,
     featured (true for the cards at the top), photos (paths from the site
     root; the first one is the card picture, all of them open when clicked).

   Source: PEB Philippines 2026 company deck. Client names are left out on
   purpose. Featured photos are cut from the deck; the other photos come from
   the company's own site and drone photos ("PEB Files"), resized with their
   location data removed. A project without photos shows a text-only card.
   ===================================================================== */
window.PEB_PROJECTS = {
  totalProjects: "50+",        // all projects in the Philippines, including ones not listed here
  // The steel total shown on the site ("5,700+") is added up from the projects below (assets/js/ph-projects.js).

  types: [
    { id: "commercial",  name: "Commercial & showrooms",     icon: "fa-building-o", text: "Car showrooms, commercial buildings, a supermarket and a furniture showroom." },
    { id: "warehousing", name: "Warehousing & logistics",    icon: "fa-cubes",      text: "Warehouses, a storage building and a depot." },
    { id: "public",      name: "Public & institutional",     icon: "fa-university", text: "Places of worship, a school, a government building and a sports hub." },
    { id: "industrial",  name: "Industrial & manufacturing", icon: "fa-industry",   text: "Plant expansions, a treatment plant and other industrial buildings." },
    { id: "agriculture", name: "Agriculture & food",         icon: "fa-leaf",       text: "Cowbarns, a dairy processing plant, a poultry building and a rice mill." },
    { id: "residential", name: "Residential & housing",      icon: "fa-home",       text: "Private residences and a 4PH housing complex." },
    { id: "transport",   name: "Transport & aviation",       icon: "fa-plane",      text: "An aircraft hangar and a multilevel parking building." }
  ],

  projects: [
    // ---- 2026 ----
    { name: "Villongco Warehouse", year: 2026, status: "Ongoing", location: "Villongco Street, Brgy. BF Homes, Parañaque", region: "Luzon", type: "warehousing", scope: "Steel structure and cladding", steel: "", area: "10,000 sqm (construction floor area 10,800.96 sqm)",
      photos: ["assets/images/projects-ph/villongco-warehouse-1.jpg", "assets/images/projects-ph/villongco-warehouse-2.jpg", "assets/images/projects-ph/villongco-warehouse-3.jpg"] },
    { name: "EDSA Cubao Commercial Building", year: 2026, status: "Ongoing", location: "EDSA, Cubao, Quezon City", region: "Luzon", type: "commercial", scope: "Pre-engineered steel (supply & install)", steel: "", area: "3,000 sqm, 5-story building",
      photos: ["assets/images/projects-ph/edsa-cubao-1.jpg", "assets/images/projects-ph/edsa-cubao-2.jpg", "assets/images/projects-ph/edsa-cubao-3.jpg", "assets/images/projects-ph/edsa-cubao-4.jpg"] },
    { name: "Samar Commercial Building / Supermarket", year: 2026, status: "Ongoing", location: "Samar", region: "Visayas", type: "commercial", scope: "Pre-engineered steel (supply & install)", steel: "", area: "2,000 sqm",
      photos: ["assets/images/projects-ph/samar-commercial-1.jpg"] },

    // ---- 2025 ----
    { name: "Residencia de Legazpi (4PH Program)", year: 2025, status: "Ongoing", location: "Legazpi City", region: "Luzon", type: "residential", scope: "Steel structure", steel: "590 tons", area: "2,300 sqm/floor, 4-story housing complex" },
    { name: "One-Story Depot with Loft", year: 2025, status: "Ongoing", location: "Poblacion, Panglao, Bohol", region: "Visayas", type: "warehousing", scope: "Steel structure, decking, cladding & roofing", steel: "106 tons", area: "1,900 sqm" },
    { name: "Primepack Technologies, Inc.", year: 2025, status: "Ongoing", location: "Calamba, Laguna", region: "Luzon", type: "industrial", scope: "Steel structure, decking, cladding & roofing", steel: "126 tons", area: "1,900 sqm",
      photos: ["assets/images/projects-ph/primepack-1.jpg", "assets/images/projects-ph/primepack-2.jpg", "assets/images/projects-ph/primepack-3.jpg"] },
    { name: "PTD Centre Building", year: 2025, status: "Ongoing", location: "58 Scout Rallos St., Brgy. Laging Handa, Quezon City", region: "Luzon", type: "commercial", scope: "Steel structure, decking, cladding & roofing", steel: "149 tons", area: "276 sqm/floor",
      photos: ["assets/images/projects-ph/ptd-centre-1.jpg", "assets/images/projects-ph/ptd-centre-2.jpg", "assets/images/projects-ph/ptd-centre-3.jpg"] },
    { name: "Mundo Warehouse", year: 2025, status: "Ongoing", location: "South Coast Industrial Estate, Carmona, Cavite", region: "Luzon", type: "warehousing", scope: "Steel structure & roofing", steel: "120 tons", area: "2,200 sqm" },
    { name: "Three-Story Residence", year: 2025, status: "Ongoing", location: "Forest Hills, Antipolo", region: "Luzon", type: "residential", scope: "Steel structure", steel: "50.3 tons", area: "431 sqm" },

    // ---- 2024 ----
    { name: "JCLDS Cagayan de Oro Temple", year: 2024, status: "Completed", location: "Rosario, Lim Ket Kai Ave., Cagayan de Oro City", region: "Mindanao", type: "public", scope: "Steel structure", steel: "500 tons", area: "1,500 sqm" },
    { name: "Marawi Multilevel Parking", year: 2024, status: "Completed", location: "Marawi City", region: "Mindanao", type: "transport", scope: "Steel structure", steel: "600 tons", area: "1,720 sqm/floor" },
    { name: "Nissan Car Showroom", year: 2024, status: "Completed", location: "San Jose del Monte, Bulacan", region: "Luzon", type: "commercial", scope: "Steel structure", steel: "500 tons", area: "2,650 sqm/floor" },
    { name: "APC Cowbarn (4 Units)", year: 2024, status: "Completed", location: "Claveria, Misamis Oriental", region: "Mindanao", type: "agriculture", scope: "Steel structure", steel: "224 tons", area: "14,400 sqm", featured: true,
      photos: ["assets/images/projects-ph/apc-cowbarn-1.jpg", "assets/images/projects-ph/apc-cowbarn-2.jpg"] },
    { name: "Two-Story Residence", year: 2024, status: "Completed", location: "Dasmariñas Village, Makati City", region: "Luzon", type: "residential", scope: "Steel structure & cladding", steel: "169 tons", area: "1,500 sqm SP Deck" },
    { name: "Carmen National High School", year: 2024, status: "Completed", location: "Macanhan, Brgy. Carmen, Cagayan de Oro City", region: "Mindanao", type: "public", scope: "Steel structure", steel: "150 tons", area: "350 sqm/floor" },
    { name: "Gypsum Lime Treatment Plant Rehabilitation", year: 2024, status: "Completed", location: "Leyte Industrial Development Estate, Isabel, Leyte", region: "Visayas", type: "industrial", scope: "Steel structure & cladding", steel: "124 tons", area: "3,000 sqm roofing" },
    { name: "Rehabilitation of QAHD Building, DPWH Region IX", year: 2024, status: "Completed", location: "Tetuan, Zamboanga City", region: "Mindanao", type: "public", scope: "Steel structure", steel: "100 tons", area: "4,320 sqm/floor" },
    { name: "Dairy Processing Plant", year: 2024, status: "Completed", location: "Brgy. Gumaod, Claveria, Misamis Oriental", region: "Mindanao", type: "agriculture", scope: "Steel structure", steel: "93 tons", area: "2,500 sqm" },
    { name: "Tunnel-Ventilated Poultry Building", year: 2024, status: "Completed", location: "Malipayon, Baga-as, Hinigaran, Negros Occidental", region: "Visayas", type: "agriculture", scope: "Steel structure", steel: "35 tons", area: "2,300 sqm" },
    { name: "Furniture Showroom (Abrilo)", year: 2024, status: "Completed", location: "Upper Carmen, Cagayan de Oro City", region: "Mindanao", type: "commercial", scope: "Steel structure", steel: "15 tons", area: "500 sqm" },

    // ---- 2023 ----
    { name: "The Bacolod Church", year: 2023, status: "Completed", location: "Bacolod–Silay Airport Access Road, Brgy. Bata, Bacolod City", region: "Visayas", type: "public", scope: "Steel structure", steel: "700 tons", area: "1,500 sqm/floor" },
    { name: "Purefoods Plant 01 Expansion", year: 2023, status: "Completed", location: "", region: "", type: "industrial", scope: "Steel structure", steel: "215 tons", area: "1,750 sqm" },
    { name: "Puyat Gold Storage", year: 2023, status: "Completed", location: "Tanza, Cavite", region: "Luzon", type: "warehousing", scope: "Steel structure", steel: "140 tons", area: "2,500 sqm" },
    { name: "Mactan Cebu Hangar", year: 2023, status: "Completed", location: "Mactan, Cebu", region: "Visayas", type: "transport", scope: "Steel structure", steel: "285 tons", area: "1,600 sqm", featured: true,
      photos: ["assets/images/projects-ph/mactan-cebu-hangar-1.jpg", "assets/images/projects-ph/mactan-cebu-hangar-2.jpg"] },
    { name: "Rice Mill", year: 2023, status: "Completed", location: "Brgy. Amparo, Pavia, Iloilo", region: "Visayas", type: "agriculture", scope: "Steel structure", steel: "58 tons", area: "720 sqm" },
    { name: "Coca-Cola Project", year: 2023, status: "", location: "", region: "", type: "industrial", scope: "Steel structure", steel: "65 tons", area: "1,900 sqm",
      photos: ["assets/images/projects-ph/coca-cola-1.jpg", "assets/images/projects-ph/coca-cola-2.jpg", "assets/images/projects-ph/coca-cola-3.jpg"] },
    { name: "1,000 sqm Warehouse", year: 2023, status: "Completed", location: "Tanauan City, Batangas", region: "Luzon", type: "warehousing", scope: "Steel structure & roofing", steel: "30 tons", area: "1,000 sqm" },
    { name: "Mariana Sports Hub", year: 2023, status: "Completed", location: "Mariana, New Manila, Quezon City", region: "Luzon", type: "public", scope: "Steel structure & cladding", steel: "51 tons", area: "1,800 sqm decking",
      photos: ["assets/images/projects-ph/mariana-sports-hub-1.jpg"] },   // from the "QC Tennis Court" drone flight over New Manila

    // ---- 2022 ----
    { name: "Mitsubishi Showroom & Service Center", year: 2022, status: "Completed", location: "Commonwealth Avenue, Quezon City", region: "Luzon", type: "commercial", scope: "Steel structure and cladding", steel: "540 tons", area: "1,540 sqm/floor", featured: true,
      photos: ["assets/images/projects-ph/mitsubishi-showroom-1.jpg", "assets/images/projects-ph/mitsubishi-showroom-2.jpg", "assets/images/projects-ph/mitsubishi-showroom-3.jpg"] }
  ]
};
