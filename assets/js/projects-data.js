"use strict";
/* =====================================================================
   PROJECT LIST - edit this file to add or change projects
   ---------------------------------------------------------------------
   Used by assets/js/projects-page.js on projects/projects.html.

   Each project is one line in the "projects" list below:
     name     shown on the card and used by the name search
     address  shown under the name
     careers  sector ids from the "careers" list. Can be empty or hold several: [13, 14]
     country  country id from the "countries" list, or null
     year     year completed, or null
     image    picture file, written from the website root
     href     the project's page, written from the website root

   SAMPLE DATA: the 12 projects with country 169 and the address "Philippines" were
   moved there as temporary examples. They are really in Vietnam. Replace them.

   Projects appear in this order. To add one, copy a line, change the values,
   and keep a comma between lines. Paths start at the website root (the folder
   with index.html), not at this file.
   ===================================================================== */
window.SEICO_PROJECT_DATA = {
  "careers": [
    {"id": 3, "name": "Agriculture / Animal feed"},
    {"id": 10, "name": "Agriculture / Wood, furniture"},
    {"id": 12, "name": "Agriculture / Farming, food processing"},
    {"id": 13, "name": "Industrial / Automotive, auto parts"},
    {"id": 14, "name": "Industrial / Electronics"},
    {"id": 15, "name": "Industrial / Aviation"},
    {"id": 16, "name": "Industrial / Chemicals"},
    {"id": 18, "name": "Industrial / Steel, metalworking"},
    {"id": 19, "name": "Industrial / Shipbuilding"},
    {"id": 20, "name": "Industrial / Textiles, garments"},
    {"id": 22, "name": "Industrial / Building, construction"},
    {"id": 23, "name": "Industrial / Energy"},
    {"id": 24, "name": "Industrial / Oil and gas"},
    {"id": 25, "name": "Education, sports"},
    {"id": 26, "name": "Hospitals"},
    {"id": 27, "name": "Transport, bridges and roads"},
    {"id": 112, "name": "Industrial / Transport, warehousing"},
    {"id": 118, "name": "Industrial / Plastics, molding"},
    {"id": 128, "name": "Industrial / glass, lenses, electronic glass"},
    {"id": 133, "name": "Industrial / Pharmaceuticals"}
  ],
  "countries": [
    {"id": 13, "name": "Australia"},
    {"id": 44, "name": "China"},
    {"id": 101, "name": "Indonesia"},
    {"id": 116, "name": "Lao People's Democratic Republic"},
    {"id": 136, "name": "Mauritius"},
    {"id": 146, "name": "Myanmar"},
    {"id": 162, "name": "Pakistan"},
    {"id": 169, "name": "Philippines"},
    {"id": 190, "name": "Seychelles"},
    {"id": 200, "name": "Sri Lanka"},
    {"id": 210, "name": "Tanzania, United Republic of"},
    {"id": 211, "name": "Thailand"},
    {"id": 230, "name": "Vanuatu"},
    {"id": 232, "name": "Viet Nam"}
  ],
  "years": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2027],
  "projects": [
    {"name": "Thai Tuan Textile Finishing Factory", "address": "Duc Hoa III Industrial Park, Duc Lap Ha Commune, Tay Ninh Province", "careers": [20], "country": 232, "year": 2025, "image": "assets/images/44162586e71a-DJI_0559.webp", "href": "projects/details/thai-tuan-textile-finishing-factory.html"},
    {"name": "PHUONG DONG TENT COMPLEX - VAN DON", "address": "Dong Xa Commune, Cai Rong Town, Van Don District, Quang Ninh Province", "careers": [], "country": 232, "year": 2025, "image": "assets/images/6332f21864b0-DNA_1270.webp", "href": "projects/details/phuong-dong-tent-complex-van-don.html"},
    {"name": "HOA THANH SHOE FACTORY", "address": "Quang Trach, Quang Xuong District, Thanh Hoa Province", "careers": [], "country": 232, "year": 2025, "image": "assets/images/17c00af126eb-8-1-.webp", "href": "projects/details/hoa-thanh-shoe-factory.html"},
    {"name": "PT DA NANG", "address": "Hoa Cam Industrial Park, Cam Le, Da Nang City", "careers": [], "country": 232, "year": 2025, "image": "assets/images/67c13422a30d-Untitled-20design-3-.webp", "href": "projects/details/pt-da-nang.html"},
    {"name": "OUTDOOR GOODS FACTORY – HAI PHONG", "address": "Hai Phong", "careers": [], "country": 232, "year": 2025, "image": "assets/images/15879bf54569-Untitled-20design-20-31-.webp", "href": "projects/details/hai-phong-outdoor-goods-factory.html"},
    {"name": "BAC GIANG LOGISTICS PARK 2 WAREHOUSE", "address": "Hiep Hoa, Bac Giang", "careers": [112], "country": 232, "year": 2025, "image": "assets/images/4383a3535fa7-Ph-C6-B0-C6-A1ng-20ti-E1-BB-87n-20truy-C3-AA-CC-80n-20th-C3-B4ng-20-3-1-.webp", "href": "projects/details/bac-giang-logistics-park-2-warehouse.html"},
    {"name": "STEEL STRUCTURE AND HIGH-TECH EQUIPMENT MANUFACTURING PLANT", "address": "Cai Lan Industrial Park, Viet Hung Ward, Quang Ninh", "careers": [], "country": 232, "year": 2025, "image": "assets/images/76368574b1f7-web-202.webp", "href": "projects/details/steel-structure-and-high-tech-equipment-manufacturing-plant.html"},
    {"name": "FACTORY AT AN PHAT HIGH-TECH INDUSTRIAL PARK", "address": "Vietnam", "careers": [], "country": 232, "year": 2025, "image": "assets/images/977ec303a289-File0021.webp", "href": "projects/details/factory-at-an-phat-high-tech-industrial-park.html"},
    {"name": "MOLEX - HUNG YEN", "address": "Hung Yen", "careers": [], "country": 232, "year": 2025, "image": "assets/images/3a1dfd735453-Added-20Logo-201.webp", "href": "projects/details/molex-hung-yen.html"},
    {"name": "HUONG BINH CABLE CAR LINE", "address": "Hanoi", "careers": [27], "country": 232, "year": 2024, "image": "assets/images/f3dc14de2559-DJI10.jpg", "href": "projects/details/huong-binh-cable-car-line.html"},
    {"name": "Fujix Electronic Factory", "address": "Philippines", "careers": [14], "country": 169, "year": 2024, "image": "assets/images/f92d32879883-DJI_0080.jpg", "href": "projects/details/fujix-electronic-factory.html"},
    {"name": "Autoliv Factory", "address": "Philippines", "careers": [13], "country": 169, "year": 2024, "image": "assets/images/69951804b113-DJI_0165.jpg", "href": "projects/details/autoliv-factory.html"},
    {"name": "MESSER INDUSTRIAL GAS PLANT", "address": "Philippines", "careers": [24], "country": 169, "year": 2024, "image": "assets/images/5b60f48e87a7-Messer-20-9-.jpeg", "href": "projects/details/messer-industrial-gas-plant.html"},
    {"name": "BW Dong Hai CN4-2", "address": "Lot CN4-02, Nam Dinh Vu Industrial Park, Dong Hai Ward, Hai An District, Hai Phong City", "careers": [112], "country": 232, "year": 2023, "image": "assets/images/93ff5b0b1bf3-z5349378080987_a443bf778b26863961afc79ee0d86084.jpg", "href": "projects/details/bw-dong-hai-cn4-2.html"},
    {"name": "Nitto Denko Vietnam Factory", "address": "VSIP Binh Duong Industrial Park", "careers": [14], "country": 232, "year": 2023, "image": "assets/images/fba8b0bb27af-DJI_0046.jpg", "href": "projects/details/nitto-denko-vietnam-factory.html"},
    {"name": "XUAN THIEN FEED MILL", "address": "Ngoc Lac, Thanh Hoa", "careers": [3], "country": 232, "year": 2023, "image": "assets/images/6fe7b14d02de-DJI_0020.webp", "href": "projects/details/xuan-thien-feed-mill.html"},
    {"name": "HIGH-TECH EXPORT POULTRY FARM - 4A CAO NGOC", "address": "Cao Ngoc, Ngoc Lac, Thanh Hoa", "careers": [12], "country": 232, "year": 2023, "image": "assets/images/289fa4325262-DJI_0941.webp", "href": "projects/details/high-tech-export-poultry-farm-4a-cao-ngoc.html"},
    {"name": "Light building for a high-tech pig farm", "address": "Quang Son Commune, Hai Ha District, Quang Ninh Province", "careers": [12], "country": 232, "year": 2023, "image": "assets/images/ec5361016f17-DJI_0560.webp", "href": "projects/details/light-building-high-tech-pig-farm.html"},
    {"name": "Nam Tai Factory", "address": "Philippines", "careers": [112], "country": 169, "year": 2023, "image": "assets/images/99c6ee05f25d-DJI_0776.webp", "href": "projects/details/nam-tai-factory.html"},
    {"name": "CORE 5 Factory", "address": "Philippines", "careers": [112], "country": 169, "year": 2023, "image": "assets/images/c94b4bd25109-DJI_0634.webp", "href": "projects/details/core-5-factory.html"},
    {"name": "Canadian International School complex in Lao Cai (CIS Lao Cai)", "address": "19/5 Interchange, Roads B9-B10, Binh Minh Road, Lao Cai Province", "careers": [25], "country": 232, "year": 2022, "image": "assets/images/eb08f77c4bdb-truong-lien-cap-cis-lao-cai-thiet-ke-uon-luon-doc-dao-tu-y-tuong-rong-cuon-ven-doi_4.jpg", "href": "projects/details/canadian-international-school-complex-lao-cai-cis-lao-cai.html"},
    {"name": "Metro Line No. 1, Ben Thanh - Suoi Tien", "address": "Ho Chi Minh City", "careers": [27], "country": 232, "year": 2022, "image": "assets/images/f6e4d146cfaa-Screenshot_3-1-.webp", "href": "projects/details/metro-line-1-ben-thanh-suoi-tien.html"},
    {"name": "Chadwick International School in Vietnam", "address": "Swan Lake Park, Ecopark Urban Area, Van Giang, Hung Yen", "careers": [25], "country": 232, "year": 2021, "image": "assets/images/e4afef37e4e2-Chadwick-20Highschool.webp", "href": "projects/details/chadwick-international-school-in-vietnam.html"},
    {"name": "Trancy Distribution Center", "address": "Lot NQ, Dai An Industrial Park, Km51, National Highway 5, Tu Minh Ward, Hai Duong City", "careers": [], "country": 232, "year": 2020, "image": "assets/images/ef960ef73ae5-biatrancy.jpg", "href": "projects/details/trancy-distribution-center.html"},
    {"name": "TP Tech Factory", "address": "Philippines", "careers": [118], "country": 169, "year": 2020, "image": "assets/images/f6edb49bc2b2-TP-20TECH.jpg", "href": "projects/details/tp-tech-factory.html"},
    {"name": "Foxconn Factory", "address": "Philippines", "careers": [14], "country": 169, "year": 2020, "image": "assets/images/3698983c59d7-FOXCON.jpg", "href": "projects/details/foxconn-factory.html"},
    {"name": "Tan A Factory", "address": "Philippines", "careers": [], "country": 169, "year": 2020, "image": "assets/images/b7373e759074-anh-20bia.jpg", "href": "projects/details/tan-a-factory.html"},
    {"name": "Power Plus Technology factory", "address": "Philippines", "careers": [14], "country": 169, "year": 2019, "image": "assets/images/bad9c57a2620-ppt.jpg", "href": "projects/details/power-plus-technology-factory.html"},
    {"name": "Heller-Vinfast", "address": "Vietnam", "careers": [], "country": 232, "year": 2019, "image": "assets/images/58c690a0bae4-vinfas.jpg", "href": "projects/details/heller-vinfast.html"},
    {"name": "MCS 4 Project", "address": "Yangon International Airport, Mingaladon, Yangon, Myanmar", "careers": [22], "country": 146, "year": 2019, "image": "assets/images/dfec5f2c90dc-Untitled-20-900-20x-20645-20px-.webp", "href": "projects/details/mcs.html"},
    {"name": "Van Don urban area", "address": "Dong Xa, Van Don District, Quang Ninh", "careers": [], "country": 232, "year": 2019, "image": "assets/images/b9025914d82f-Screen-20Shot-202019-11-22-20at-20225843.jpg", "href": "projects/details/van-don-entertainment-complex.html"},
    {"name": "Logis Valley Factory", "address": "Philippines", "careers": [112], "country": 169, "year": 2018, "image": "assets/images/1f0e7ab8625b-DJI_0003.jpg", "href": "projects/details/logis-valley.html"},
    {"name": "CFG Float Glass Factory", "address": "Philippines", "careers": [128], "country": 169, "year": 2016, "image": "assets/images/913b86bcee56-DJI_0011.jpg", "href": "projects/details/cfg-factory.html"},
    {"name": "Factory 190", "address": "Philippines", "careers": [18], "country": 169, "year": 2016, "image": "assets/images/a847ae434a86-DJI_0066.jpg", "href": "projects/details/190-factory.html"},
    {"name": "Vina Feed Mill Factory", "address": "Hoa Mac Industrial Park, Duy Tien, Ha Nam", "careers": [3], "country": 232, "year": 2016, "image": "assets/images/6c3c2f38ec52-Untitled.jpg", "href": "projects/details/vina-feed-mill.html"},
    {"name": "Tinh Loi Factory blocks 3 & 4", "address": "Lai Vu Industrial Park, Hai Duong", "careers": [20], "country": 232, "year": 2014, "image": "assets/images/8e6a1a336733-tinhloi.jpg", "href": "projects/details/tinh-loi-factory.html"},
    {"name": "MHI Aerospace Vietnam", "address": "Thang Long 1 Industrial Park, Dong Anh", "careers": [15], "country": 232, "year": 2013, "image": "assets/images/9f3ca8708bdd-679020015_122170606106852213_4666594255347999297_n.jpg", "href": "projects/details/mitsubishi-heavy-industries-factory.html"},
    {"name": "Damen Shipyard", "address": "Thuy Nguyen, Hai Phong", "careers": [19], "country": 232, "year": 2013, "image": "assets/images/ea1cee72f0e3-nha-may-damen-song-cam.jpg", "href": "projects/details/damen-shipyard.html"},
    {"name": "GreenFeed Hung Yen Factory", "address": "Pho Noi Industrial Park, Hung Yen", "careers": [3], "country": 232, "year": 2013, "image": "assets/images/d044be4d9e75-DJI_0039-20-2-.webp", "href": "projects/details/greenfeed-hung-yen-factory.html"},
    {"name": "Shin Etsu DVIZ Factory", "address": "Dinh Vu Industrial Park, Hai Phong", "careers": [16], "country": 232, "year": 2012, "image": "assets/images/c10272413535-Shin-Etsu_Electronics_Materials_Taiwan-300x177.jpg", "href": "projects/details/shin-etsu-dviz-factory.html"},
    {"name": "Denyo Factory Phase 1", "address": "Thang Long 2 Industrial Park, Hung Yen", "careers": [23], "country": 232, "year": 2010, "image": "assets/images/351e42c74ff9-Denyo-20Slide-202.jpg", "href": "projects/details/denyo-factory-phase-1.html"},
    {"name": "Nikkiso Factory", "address": "Thang Long 2 Industrial Park, Hung Yen", "careers": [15], "country": 232, "year": 2009, "image": "assets/images/44831e650a7f-OP2.jpg", "href": "projects/details/nikkiso-factory.html"},
    {"name": "Shinwon Factory", "address": "Song Cong, Thai Nguyen", "careers": [20], "country": 232, "year": 2008, "image": "assets/images/94258658c9ba-Shinwon-20slide-202.jpg", "href": "projects/details/shinwon-factory.html"},
    {"name": "Concordia International School Hanoi", "address": "Van Tri Golf Area, Kim No Commune, Dong Anh District, Hanoi", "careers": [25], "country": 232, "year": null, "image": "assets/images/879d50e89cb4-1030471_main.webp", "href": "projects/details/concordia-international-school-hanoi.html"},
    {"name": "TAISAN FACTORY", "address": "VSIP IP - Quang Ngai, Tho Phong, Quang Ngai", "careers": [10], "country": 232, "year": null, "image": "assets/images/b583e3d8df3b-Seico_Taisan-20logo-202.webp", "href": "projects/details/taisan-factory.html"}
  ]
};