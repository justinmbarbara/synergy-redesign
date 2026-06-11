const TOMBSTONES = [
  ["3sbio-davita.png", "3SBio joint venture NewCo sold to DaVita", "sell", "providers"],
  ["Aclara-copy_feat.png", "Aclara BioSciences valuation opinion", "strategic", "medlife"],
  ["adams-series-a.png", "Adams Respiratory Therapeutics Series A venture equity financing", "capital", "medlife"],
  ["adams-series-b.png", "Adams Respiratory Therapeutics Series B venture equity financing", "capital", "medlife"],
  ["AdPathlabs_PathologyInc_feat.png", "AD PathLabs sold to Pathology, Inc.", "sell", "providers"],
  ["AHS-Allied-Tombstone2-1.png", "Automated Health Systems acquired Allied Physician Services", "buy", "providers"],
  ["AlarisMedical_feat.png", "Alaris Medical Systems transformational recapitalization", "strategic", "medlife"],
  ["AWC-NaviMed-Tombstone.png", "Advantage Wound Care sold to NaviMed Capital", "sell", "providers"],
  ["AWC-Tombstone.png", "Advantage Surgical and Wound Care acquired Baromedical Physician Associates Medical Group", "buy", "providers"],
  ["BergenBrunswig_Pharmerica_feat.png", "Bergen Brunswig acquired PharMerica", "buy", "providers"],
  ["CardioVascularDynamics.png", "CardioVascular Dynamics merged with Radiance Medical Systems", "sell", "medlife"],
  ["CDS_Liberty_feat.png", "Community Dental Services sold to Liberty Partners", "sell", "providers"],
  ["Collateral_Schering_feat.png", "Collateral Therapeutics sold to Schering", "sell", "medlife"],
  ["CommunityPsychiatricCenters_feat-1.png", "Community Psychiatric Centers divestiture and spin-off of Transitional Hospitals Corporation", "strategic", "providers"],
  ["ConsensysMXR2.png", "Consensys Imaging Service, a Galen Partners portfolio company, sold to MXR", "sell", "providers"],
  ["CV-Tombstone.png", "Clear Vision Information Systems sold to SCIO Health Analytics", "sell", "government"],
  ["DCITombstone.png", "Device Consulting Incorporated sold to Sagility, a BPEA EQT portfolio company", "sell", "medlife"],
  ["Dedicated_Dental_feat.png", "Dedicated Dental sold to Gentle Dental", "sell", "providers"],
  ["DVPD-Template-1.png", "Desert Valley Pediatric Dentistry and Orthodontics sold to Children's Choice Dental Care", "sell", "providers"],
  ["esensa-davita.png", "Clinica Esensa sold to DaVita", "sell", "providers"],
  ["ExcelERTombstone_1.png", "Excel ER sold to Community Health Systems", "sell", "providers"],
  ["FemaleHealthCo_feat.png", "The Female Health Company capital structure and strategic alternatives advisory", "strategic", "medlife"],
  ["femasys-series-b.png", "Femasys Series B venture equity financing", "capital", "medlife"],
  ["femasys-series-c.png", "Femasys Series C venture equity financing", "capital", "medlife"],
  ["GHS_Emdeon_feat.png", "Goold Health Systems sold to Emdeon", "sell", "government"],
  ["HID-Tombstone-4.5-3.png", "Health Information Designs, a BV Investment Partners portfolio company, sold to KEPRO", "sell", "government"],
  ["iHealthTechnologies_feat.png", "iHealth Technologies strategic partnership advisory", "strategic", "payors"],
  ["kdk2.png", "Kids Dental Kare sold to Western Dental", "sell", "providers"],
  ["KidsChoice_2.png", "Kids Choice Dental Vision and Braces sold to Choice Healthcare Services", "sell", "providers"],
  ["MARCHVisionCare_feat.png", "MARCH Vision Care Series A private equity financing", "capital", "government"],
  ["MARCHVisionCare_united2-1.png", "MARCH Vision Care sold to UnitedHealthcare", "sell", "government"],
  ["Medisked-Tombstone.png", "MediSked sold to CaseWorthy, a Symphony Technology Group portfolio company", "sell", "providers"],
  ["Molina_Abri_feat.png", "Molina Healthcare acquired Abri Health Plan", "buy", "government"],
  ["Molina_Unisys_feat.png", "Molina Healthcare acquired the Health Information Management business from Unisys", "buy", "government"],
  ["MYT-Template.png", "South Bay Home Health Care sold to Devonshire Partners", "sell", "providers"],
  ["NME_AMI_Tenet.png", "NME acquired AMI to form Tenet Health", "buy", "providers"],
  ["Nuance-MD-Holdings-Template.png", "Nuance Medical sold to MD Holdings", "sell", "medlife"],
  ["okhc-davita.png", "Oregon Kidney and Hypertension Clinic sold to DaVita", "sell", "providers"],
  ["Optumas-Tombstone-3.png", "Optumas sold to CBIZ", "sell", "government"],
  ["PacifiCare_IHP_feat.png", "PacifiCare acquired FHP Health Care", "buy", "payors"],
  ["Pegasus-Tombstone-2.png", "Alfred Mann Foundation products and related intellectual property portfolio sold to Medtronic", "sell", "medlife"],
  ["PHC_Champion.png", "PHC merged with Champion Healthcare", "sell", "providers"],
  ["PHC_FHP.png", "PHC acquired hospital assets from FHP Health Care", "buy", "providers"],
  ["Quidel_LitmusConcepts.png", "Quidel Corporation acquired Litmus Concepts", "buy", "medlife"],
  ["RES3-1.png", "Radiographic Equipment Services sold to Universal Hospital Services", "sell", "medlife"],
  ["SCA-Tombstone-1.png", "Southwest Consulting Associates sold to Moss Adams", "sell", "government"],
  ["SCIONDental_feat.png", "SCION Dental strategic partnership advisory", "strategic", "providers"],
  ["SierraHealth_FolksAmerica_feat.png", "Sierra Health Services sold certain assets to Folksamerica Holding Company", "sell", "payors"],
  ["Steri-Oss_Nobel_feat.png", "Steri-Oss sold to Nobel Biocare", "sell", "medlife"],
  ["Summit_FountainView_feat.png", "Summit Care Corporation sold to Fountain View in conjunction with Heritage Fund II", "sell", "providers"],
  ["SystemDynamics_Agilent_feat.png", "System Dynamics sold to Agilent Technologies", "sell", "medlife"],
  ["TexasEmergencyCareII.png", "Texas Emergency Care Center sold to ProCare Emergency Room", "sell", "providers"],
  ["Tombstone_Template__2_-removebg-preview-1.png", "Interstate Rehab sold to Confluent Health, a Partners Group portfolio company", "sell", "providers"],
  ["TotalRenalCare_feat.png", "Total Renal Care financial advisory", "strategic", "providers"],
  ["Trillium_Restora_feat.png", "Trillium Specialty Hospital sold to Restora Healthcare", "sell", "providers"],
  ["Ventana.png", "Ventana equity PIPE financing", "capital", "medlife"],
  ["Webp.net-resizeimage-1.png", "Family Care Specialists sold to Altais, a Blue Shield of California subsidiary", "sell", "providers"],
  ["Webp.net-resizeimage-6.png", "KEPRO, an Apax Partners portfolio company, acquired Health Solutions", "buy", "government"],
  ["Wellpoint_Cerulean_feat.png", "WellPoint acquired Cerulean from Blue Cross Blue Shield of Georgia", "buy", "payors"]
];

const SERVICE_LABELS = { sell: "Sell-Side M&A", buy: "Buy-Side M&A", capital: "Capital Raising", strategic: "Strategic Advisory" };
const SECTOR_LABELS = { payors: "Payors & Payor Solutions", providers: "Providers & Provider Solutions", government: "Government Sponsored Programs", medlife: "Medical Products / Life Sciences" };
const GENERAL_TOMBSTONES = [
  ["Alma_feat.png", "Alma sold to Illinois Tool Works", "sell", "segments"],
  ["APIAlarm_feat.png", "API Alarm sold to Automated Security Holdings", "sell", "bizit"],
  ["BarrysJewelers_feat.png", "Barry's Jewelers acquired Mission Jewelers and Samuels Jewelers", "buy", "consumer"],
  ["CDCC_feat-1.png", "CDCC Products sold to Ecolab", "sell", "segments"],
  ["Cellana_feat.png", "Cellana Series A preferred equity financing and strategic alternatives", "capital", "segments"],
  ["CFI_Technicolor_feat.png", "Consolidated Film Industries sold to Technicolor", "sell", "segments"],
  ["CircleK_feat.png", "Circle K placement agent for sale-leaseback of 42 convenience store locations", "capital", "consumer"],
  ["ColonyCapital_Harveys_feat.png", "Colony Capital acquired Harvey's Casino Resorts", "buy", "consumer"],
  ["ContinentalGraphics_Boeing_feat.png", "Continental Graphics Group sold to Boeing", "sell", "segments"],
  ["DEP_feat.png", "DEP sold to Jeffrey Martin, Inc.", "sell", "segments"],
  ["DiedrichCoffee_feat.png", "Diedrich Coffee acquired Coffee People", "buy", "consumer"],
  ["DirectAlliance_TeleTech_feat.png", "Direct Alliance sold to TeleTech", "sell", "bizit"],
  ["EIB_feat.png", "European Investment Bank provided financing to Thin Film Solar Technologies", "capital", "segments"],
  ["FranklinMint_feat.png", "The Franklin Mint recapitalized by API", "strategic", "consumer"],
  ["GBMI_feat.png", "Global Brand Marketing stalking horse bidder for Converse 363 sale", "strategic", "consumer"],
  ["GothamVentures_feat.png", "Gotham Ventures limited partner financing for Venture Fund II", "capital", "bizit"],
  ["Hinduja_Affina_feat.png", "Hinduja Global Solutions acquired Affina", "buy", "bizit"],
  ["HIVEGroup_feat.png", "The HIVE Group strategic advisory", "strategic", "bizit"],
  ["Innovar_feat.png", "Innovar merged with Independent Witness to form inthinc", "sell", "bizit"],
  ["Kaenon_feat.png", "Kaenon received equity financing from Richemont", "capital", "consumer"],
  ["Kofax_feat.png", "Kofax sold to DICOM", "sell", "bizit"],
  ["KreosCapital_feat.png", "Kreos Capital IV U.S. private placement", "capital", "bizit"],
  ["LongBeachMagazine_feat.png", "Long Beach Magazine recapitalized by 944 Magazine", "strategic", "segments"],
  ["NetSys_feat.png", "NetSys Technologies sold to Cisco", "sell", "bizit"],
  ["NortelNetworks_feat.png", "Nortel Networks vendor financing for Sprint", "capital", "bizit"],
  ["Panchos_feat-1.png", "Pancho's Mexican Buffet sold to Rockway Properties II", "sell", "consumer"],
  ["Paul_Frank-1.png", "Paul Frank Industries financial advisory", "strategic", "consumer"],
  ["PeaSoupAndersons_feat.png", "Pea Soup Andersen's management buyout from Evans Family Estate", "buy", "consumer"],
  ["radical-rysher.png", "Radical Productions acquired Rysher Entertainment", "buy", "segments"],
  ["Saber_AccelKKR_feat.png", "Saber recapitalized by Accel-KKR", "strategic", "bizit"],
  ["Silicon_feat.png", "Silicon Image strategic advisory regarding DVD", "strategic", "bizit"],
  ["TarrantApparel_feat.png", "Tarrant Apparel Group buy-side advisory and fairness opinion for Jamil Textil Companies", "buy", "consumer"],
  ["TheBoys_Cala_feat.png", "The Boys acquired Cala Foods", "buy", "consumer"],
  ["trimark-lgf.png", "Trimark Pictures merged with Lions Gate Films", "sell", "segments"],
  ["VikingOfficeProducts_feat.png", "Viking Office Products management buyout with Dillon Read", "buy", "bizit"],
  ["WilkesBashford_feat.png", "Wilkes Bashford strategic alternatives advisory and valuation analysis", "strategic", "consumer"],
  ["YoungsMarketCo_feat.png", "Young's Market Company management buyout by the Underwood family", "buy", "consumer"]
];
const GENERAL_SECTOR_LABELS = { consumer: "Consumer / Retail", bizit: "Business Process / IT Services", segments: "Additional Targeted Segments" };
const HEALTHCARE_SECTOR_ORDERS = {
  payors: [
    "DCITombstone.png",
    "Medisked-Tombstone.png",
    "Webp.net-resizeimage-6.png",
    "Optumas-Tombstone-3.png",
    "HID-Tombstone-4.5-3.png",
    "SCA-Tombstone-1.png",
    "MARCHVisionCare_united2-1.png",
    "CV-Tombstone.png",
    "SCIONDental_feat.png",
    "Molina_Abri_feat.png",
    "MARCHVisionCare_feat.png",
    "GHS_Emdeon_feat.png",
    "Molina_Unisys_feat.png",
    "SierraHealth_FolksAmerica_feat.png",
    "iHealthTechnologies_feat.png",
    "PacifiCare_IHP_feat.png",
    "Wellpoint_Cerulean_feat.png"
  ],
  providers: [
    "KidsChoice_2.png",
    "AHS-Allied-Tombstone2-1.png",
    "TexasEmergencyCareII.png",
    "ExcelERTombstone_1.png",
    "Medisked-Tombstone.png",
    "AWC-NaviMed-Tombstone.png",
    "AWC-Tombstone.png",
    "DVPD-Template-1.png",
    "Tombstone_Template__2_-removebg-preview-1.png",
    "Webp.net-resizeimage-1.png",
    "kdk2.png",
    "3sbio-davita.png",
    "esensa-davita.png",
    "Summit_FountainView_feat.png",
    "okhc-davita.png",
    "AdPathlabs_PathologyInc_feat.png",
    "BergenBrunswig_Pharmerica_feat.png",
    "Dedicated_Dental_feat.png",
    "Trillium_Restora_feat.png",
    "PHC_FHP.png",
    "CommunityPsychiatricCenters_feat-1.png",
    "CDS_Liberty_feat.png",
    "PHC_Champion.png",
    "TotalRenalCare_feat.png",
    "NME_AMI_Tenet.png"
  ],
  government: [
    "Webp.net-resizeimage-6.png",
    "Optumas-Tombstone-3.png",
    "SCA-Tombstone-1.png",
    "HID-Tombstone-4.5-3.png",
    "CV-Tombstone.png",
    "GHS_Emdeon_feat.png",
    "Molina_Abri_feat.png",
    "Molina_Unisys_feat.png",
    "MARCHVisionCare_united2-1.png",
    "MARCHVisionCare_feat.png"
  ],
  medlife: [
    "Nuance-MD-Holdings-Template.png",
    "Quidel_LitmusConcepts.png",
    "MYT-Template.png",
    "Pegasus-Tombstone-2.png",
    "RES3-1.png",
    "femasys-series-b.png",
    "ConsensysMXR2.png",
    "femasys-series-c.png",
    "SystemDynamics_Agilent_feat.png",
    "FemaleHealthCo_feat.png",
    "Aclara-copy_feat.png",
    "Collateral_Schering_feat.png",
    "AlarisMedical_feat.png",
    "Ventana.png",
    "adams-series-a.png",
    "CardioVascularDynamics.png",
    "adams-series-b.png",
    "BergenBrunswig_Pharmerica_feat.png",
    "Steri-Oss_Nobel_feat.png"
  ]
};
const GENERAL_SECTOR_ORDERS = {
  consumer: [
    "CDCC_feat-1.png",
    "TarrantApparel_feat.png",
    "Paul_Frank-1.png",
    "WilkesBashford_feat.png",
    "GBMI_feat.png",
    "Panchos_feat-1.png",
    "DiedrichCoffee_feat.png",
    "ColonyCapital_Harveys_feat.png",
    "Kaenon_feat.png",
    "VikingOfficeProducts_feat.png",
    "YoungsMarketCo_feat.png",
    "BarrysJewelers_feat.png",
    "CircleK_feat.png",
    "TheBoys_Cala_feat.png",
    "DEP_feat.png",
    "FranklinMint_feat.png",
    "PeaSoupAndersons_feat.png"
  ],
  bizit: [
    "SystemDynamics_Agilent_feat.png",
    "DirectAlliance_TeleTech_feat.png",
    "Hinduja_Affina_feat.png",
    "HIVEGroup_feat.png",
    "Saber_AccelKKR_feat.png"
  ],
  segments: [
    "Cellana_feat.png",
    "KreosCapital_feat.png",
    "LongBeachMagazine_feat.png",
    "EIB_feat.png",
    "GothamVentures_feat.png",
    "Alma_feat.png",
    "DEP_feat.png",
    "radical-rysher.png",
    "ContinentalGraphics_Boeing_feat.png",
    "CFI_Technicolor_feat.png",
    "trimark-lgf.png",
    "Silicon_feat.png",
    "Kofax_feat.png",
    "NetSys_feat.png",
    "NortelNetworks_feat.png",
    "APIAlarm_feat.png",
    "Innovar_feat.png"
  ]
};
const CASE_STUDY_LINKS = {
  "kdk2.png": "kids-dental-kare",
  "CV-Tombstone.png": "clear-vision",
  "SystemDynamics_Agilent_feat.png": "system-dynamics",
  "GHS_Emdeon_feat.png": "goold-health-systems",
  "Trillium_Restora_feat.png": "trillium-specialty-hospital",
  "AdPathlabs_PathologyInc_feat.png": "ad-pathlabs",
  "Molina_Unisys_feat.png": "molina-healthcare",
  "MARCHVisionCare_feat.png": "march-vision-care",
  "CDCC_feat-1.png": "cdcc-products",
  "Kaenon_feat.png": "kaenon-polarized",
  "Saber_AccelKKR_feat.png": "saber-software",
  "TheBoys_Cala_feat.png": "the-boys"
};
const tombstoneGrid = document.querySelector("#tombstone-grid");

if (tombstoneGrid) {
  const healthcareDeals = TOMBSTONES.map(([file, alt, service]) => ({
    file, alt, service, source: "healthcare"
  }));
  const generalDeals = GENERAL_TOMBSTONES.map(([file, alt, service]) => ({
    file, alt, service, source: "general"
  }));
  const dealsByKey = new Map(
    [...healthcareDeals, ...generalDeals].map(deal => [`${deal.source}/${deal.file}`, deal])
  );
  const orderedKeys = [];
  const addOrderedKey = key => {
    if (!orderedKeys.includes(key)) orderedKeys.push(key);
  };

  Object.values(HEALTHCARE_SECTOR_ORDERS).flat().forEach(file => addOrderedKey(`healthcare/${file}`));
  Object.entries(GENERAL_SECTOR_ORDERS).forEach(([sector, files]) => {
    files.forEach(file => {
      const source = sector === "bizit" && file === "SystemDynamics_Agilent_feat.png"
        ? "healthcare"
        : "general";
      addOrderedKey(`${source}/${file}`);
    });
  });
  dealsByKey.forEach((deal, key) => addOrderedKey(key));

  const cards = orderedKeys.map((key, defaultOrder) => {
    const deal = dealsByKey.get(key);
    if (!deal) return "";
    const healthcareSectors = Object.entries(HEALTHCARE_SECTOR_ORDERS)
      .filter(([, files]) => deal.source === "healthcare" && files.includes(deal.file))
      .map(([sector]) => sector);
    const generalSectors = Object.entries(GENERAL_SECTOR_ORDERS)
      .filter(([sector, files]) => files.includes(deal.file)
        && (deal.source === "general" || (sector === "bizit" && deal.file === "SystemDynamics_Agilent_feat.png")))
      .map(([sector]) => sector);
    const markets = [
      healthcareSectors.length ? "healthcare" : "",
      generalSectors.length ? "general" : ""
    ].filter(Boolean);
    const sectors = [...healthcareSectors, ...generalSectors];
    const sectorLabels = [
      ...healthcareSectors.map(sector => SECTOR_LABELS[sector]),
      ...generalSectors.map(sector => GENERAL_SECTOR_LABELS[sector])
    ];
    const orderData = [
      ...Object.entries(HEALTHCARE_SECTOR_ORDERS),
      ...Object.entries(GENERAL_SECTOR_ORDERS)
    ].map(([sector, files]) => `data-order-${sector}="${files.indexOf(deal.file)}"`).join(" ");
    const assetFolder = deal.source === "healthcare" ? "tombstones" : "middle-market";
    const marketLabel = markets.includes("healthcare") ? "healthcare" : "general middle-market";

    return `
      <article class="deal-card tombstone-card" data-market="${markets.join(" ")}" data-service="${deal.service}" data-sector="${sectors.join(" ")}" data-default-order="${defaultOrder}" ${orderData}>
        <img src="assets/${assetFolder}/${deal.file}" alt="${deal.alt} - Synergy Advisors ${marketLabel} investment banking transaction" loading="lazy">
        <div class="tombstone-meta"><strong>${SERVICE_LABELS[deal.service]}</strong><span>${sectorLabels.join(" / ")}</span>${CASE_STUDY_LINKS[deal.file] ? `<a href="#${CASE_STUDY_LINKS[deal.file]}">View case study</a>` : ""}</div>
      </article>`;
  }).join("");

  tombstoneGrid.innerHTML = cards;
  const count = document.querySelector("#tombstone-count");
  if (count) count.textContent = `${orderedKeys.length} representative engagements`;
}
