const TOMBSTONES = [
  ["3sbio-davita.png", "3SBio joint venture NewCo sold to DaVita", "sell", "providers"],
  ["Aclara-copy_feat.png", "Aclara BioSciences valuation opinion", "strategic", "lifesciences"],
  ["adams-series-a.png", "Adams Respiratory Therapeutics Series A venture equity financing", "capital", "lifesciences"],
  ["adams-series-b.png", "Adams Respiratory Therapeutics Series B venture equity financing", "capital", "lifesciences"],
  ["AdPathlabs_PathologyInc_feat.png", "AD PathLabs sold to Pathology, Inc.", "sell", "providers"],
  ["AHS-Allied-Tombstone2-1.png", "Automated Health Systems acquired Allied Physician Services", "buy", "providers"],
  ["AlarisMedical_feat.png", "Alaris Medical Systems transformational recapitalization", "strategic", "products"],
  ["AWC-NaviMed-Tombstone.png", "Advantage Wound Care sold to NaviMed Capital", "sell", "providers"],
  ["AWC-Tombstone.png", "Advantage Surgical and Wound Care acquired Baromedical Physician Associates Medical Group", "buy", "providers"],
  ["BergenBrunswig_Pharmerica_feat.png", "Bergen Brunswig acquired PharMerica", "buy", "providers"],
  ["CardioVascularDynamics.png", "CardioVascular Dynamics merged with Radiance Medical Systems", "sell", "products"],
  ["CDS_Liberty_feat.png", "Community Dental Services sold to Liberty Partners", "sell", "providers"],
  ["Collateral_Schering_feat.png", "Collateral Therapeutics sold to Schering", "sell", "lifesciences"],
  ["CommunityPsychiatricCenters_feat-1.png", "Community Psychiatric Centers divestiture and spin-off of Transitional Hospitals Corporation", "strategic", "providers"],
  ["ConsensysMXR2.png", "Consensys Imaging Service, a Galen Partners portfolio company, sold to MXR", "sell", "providers"],
  ["CV-Tombstone.png", "Clear Vision Information Systems sold to SCIO Health Analytics", "sell", "healthtech"],
  ["DCITombstone.png", "Device Consulting Incorporated sold to Sagility, a BPEA EQT portfolio company", "sell", "healthtech"],
  ["Dedicated_Dental_feat.png", "Dedicated Dental sold to Gentle Dental", "sell", "providers"],
  ["DVPD-Template-1.png", "Desert Valley Pediatric Dentistry and Orthodontics sold to Children's Choice Dental Care", "sell", "providers"],
  ["esensa-davita.png", "Clinica Esensa sold to DaVita", "sell", "providers"],
  ["ExcelERTombstone_1.png", "Excel ER sold to Community Health Systems", "sell", "providers"],
  ["FemaleHealthCo_feat.png", "The Female Health Company capital structure and strategic alternatives advisory", "strategic", "lifesciences"],
  ["femasys-series-b.png", "Femasys Series B venture equity financing", "capital", "lifesciences"],
  ["femasys-series-c.png", "Femasys Series C venture equity financing", "capital", "lifesciences"],
  ["GHS_Emdeon_feat.png", "Goold Health Systems sold to Emdeon", "sell", "healthtech"],
  ["HID-Tombstone-4.5-3.png", "Health Information Designs, a BV Investment Partners portfolio company, sold to KEPRO", "sell", "healthtech"],
  ["iHealthTechnologies_feat.png", "iHealth Technologies strategic partnership advisory", "strategic", "healthtech"],
  ["kdk2.png", "Kids Dental Kare sold to Western Dental", "sell", "providers"],
  ["KidsChoice_2.png", "Kids Choice Dental Vision and Braces sold to Choice Healthcare Services", "sell", "providers"],
  ["MARCHVisionCare_feat.png", "MARCH Vision Care Series A private equity financing", "capital", "payors"],
  ["MARCHVisionCare_united2-1.png", "MARCH Vision Care sold to UnitedHealthcare", "sell", "payors"],
  ["Medisked-Tombstone.png", "MediSked sold to CaseWorthy, a Symphony Technology Group portfolio company", "sell", "healthtech"],
  ["Molina_Abri_feat.png", "Molina Healthcare acquired Abri Health Plan", "buy", "payors"],
  ["Molina_Unisys_feat.png", "Molina Healthcare acquired the Health Information Management business from Unisys", "buy", "payors"],
  ["MYT-Template.png", "South Bay Home Health Care sold to Devonshire Partners", "sell", "providers"],
  ["NME_AMI_Tenet.png", "NME acquired AMI to form Tenet Health", "buy", "providers"],
  ["Nuance-MD-Holdings-Template.png", "Nuance Medical sold to MD Holdings", "sell", "healthtech"],
  ["okhc-davita.png", "Oregon Kidney and Hypertension Clinic sold to DaVita", "sell", "providers"],
  ["Optumas-Tombstone-3.png", "Optumas sold to CBIZ", "sell", "healthtech"],
  ["PacifiCare_IHP_feat.png", "PacifiCare acquired FHP Health Care", "buy", "payors"],
  ["Pegasus-Tombstone-2.png", "Alfred Mann Foundation products and related intellectual property portfolio sold to Medtronic", "sell", "products"],
  ["PHC_Champion.png", "PHC merged with Champion Healthcare", "sell", "providers"],
  ["PHC_FHP.png", "PHC acquired hospital assets from FHP Health Care", "buy", "providers"],
  ["Quidel_LitmusConcepts.png", "Quidel Corporation acquired Litmus Concepts", "buy", "products"],
  ["RES3-1.png", "Radiographic Equipment Services sold to Universal Hospital Services", "sell", "products"],
  ["SCA-Tombstone-1.png", "Southwest Consulting Associates sold to Moss Adams", "sell", "healthtech"],
  ["SCIONDental_feat.png", "SCION Dental strategic partnership advisory", "strategic", "providers"],
  ["SierraHealth_FolksAmerica_feat.png", "Sierra Health Services sold certain assets to Folksamerica Holding Company", "sell", "payors"],
  ["Steri-Oss_Nobel_feat.png", "Steri-Oss sold to Nobel Biocare", "sell", "products"],
  ["Summit_FountainView_feat.png", "Summit Care Corporation sold to Fountain View in conjunction with Heritage Fund II", "sell", "providers"],
  ["SystemDynamics_Agilent_feat.png", "System Dynamics sold to Agilent Technologies", "sell", "healthtech"],
  ["TexasEmergencyCareII.png", "Texas Emergency Care Center sold to ProCare Emergency Room", "sell", "providers"],
  ["Tombstone_Template__2_-removebg-preview-1.png", "Interstate Rehab sold to Confluent Health, a Partners Group portfolio company", "sell", "providers"],
  ["TotalRenalCare_feat.png", "Total Renal Care financial advisory", "strategic", "providers"],
  ["Trillium_Restora_feat.png", "Trillium Specialty Hospital sold to Restora Healthcare", "sell", "providers"],
  ["Ventana.png", "Ventana equity PIPE financing", "capital", "lifesciences"],
  ["Webp.net-resizeimage-1.png", "Family Care Specialists sold to Altais, a Blue Shield of California subsidiary", "sell", "providers"],
  ["Webp.net-resizeimage-6.png", "KEPRO, an Apax Partners portfolio company, acquired Health Solutions", "buy", "payors"],
  ["Wellpoint_Cerulean_feat.png", "WellPoint acquired Cerulean from Blue Cross Blue Shield of Georgia", "buy", "payors"]
];

const SERVICE_LABELS = { sell: "Sell-Side M&A", buy: "Buy-Side M&A", capital: "Capital Raising", strategic: "Strategic Advisory" };
const SECTOR_LABELS = { payors: "Payors", providers: "Providers", healthtech: "Healthcare Technology", products: "Medical Products", lifesciences: "Life Sciences" };
const GENERAL_TOMBSTONES = [
  ["Alma_feat.png", "Alma sold to Illinois Tool Works", "sell", "industrial"],
  ["APIAlarm_feat.png", "API Alarm sold to Automated Security Holdings", "sell", "services"],
  ["BarrysJewelers_feat.png", "Barry's Jewelers acquired Mission Jewelers and Samuels Jewelers", "buy", "consumer"],
  ["CDCC_feat-1.png", "CDCC Products sold to Ecolab", "sell", "industrial"],
  ["Cellana_feat.png", "Cellana Series A preferred equity financing and strategic alternatives", "capital", "industrial"],
  ["CFI_Technicolor_feat.png", "Consolidated Film Industries sold to Technicolor", "sell", "media"],
  ["CircleK_feat.png", "Circle K placement agent for sale-leaseback of 42 convenience store locations", "capital", "consumer"],
  ["ColonyCapital_Harveys_feat.png", "Colony Capital acquired Harvey's Casino Resorts", "buy", "consumer"],
  ["ContinentalGraphics_Boeing_feat.png", "Continental Graphics Group sold to Boeing", "sell", "industrial"],
  ["DEP_feat.png", "DEP sold to Jeffrey Martin, Inc.", "sell", "industrial"],
  ["DiedrichCoffee_feat.png", "Diedrich Coffee acquired Coffee People", "buy", "consumer"],
  ["DirectAlliance_TeleTech_feat.png", "Direct Alliance sold to TeleTech", "sell", "services"],
  ["EIB_feat.png", "European Investment Bank provided financing to Thin Film Solar Technologies", "capital", "industrial"],
  ["FranklinMint_feat.png", "The Franklin Mint recapitalized by API", "strategic", "consumer"],
  ["GBMI_feat.png", "Global Brand Marketing stalking horse bidder for Converse 363 sale", "strategic", "consumer"],
  ["GothamVentures_feat.png", "Gotham Ventures limited partner financing for Venture Fund II", "capital", "services"],
  ["Hinduja_Affina_feat.png", "Hinduja Global Solutions acquired Affina", "buy", "services"],
  ["HIVEGroup_feat.png", "The HIVE Group strategic advisory", "strategic", "services"],
  ["Innovar_feat.png", "Innovar merged with Independent Witness to form inthinc", "sell", "technology"],
  ["Kaenon_feat.png", "Kaenon received equity financing from Richemont", "capital", "consumer"],
  ["Kofax_feat.png", "Kofax sold to DICOM", "sell", "technology"],
  ["KreosCapital_feat.png", "Kreos Capital IV U.S. private placement", "capital", "services"],
  ["LongBeachMagazine_feat.png", "Long Beach Magazine recapitalized by 944 Magazine", "strategic", "media"],
  ["NetSys_feat.png", "NetSys Technologies sold to Cisco", "sell", "technology"],
  ["NortelNetworks_feat.png", "Nortel Networks vendor financing for Sprint", "capital", "technology"],
  ["Panchos_feat-1.png", "Pancho's Mexican Buffet sold to Rockway Properties II", "sell", "consumer"],
  ["Paul_Frank-1.png", "Paul Frank Industries financial advisory", "strategic", "consumer"],
  ["PeaSoupAndersons_feat.png", "Pea Soup Andersen's management buyout from Evans Family Estate", "buy", "consumer"],
  ["radical-rysher.png", "Radical Productions acquired Rysher Entertainment", "buy", "media"],
  ["Saber_AccelKKR_feat.png", "Saber recapitalized by Accel-KKR", "strategic", "technology"],
  ["Silicon_feat.png", "Silicon Image strategic advisory regarding DVD", "strategic", "technology"],
  ["TarrantApparel_feat.png", "Tarrant Apparel Group buy-side advisory and fairness opinion for Jamil Textil Companies", "buy", "consumer"],
  ["TheBoys_Cala_feat.png", "The Boys acquired Cala Foods", "buy", "consumer"],
  ["trimark-lgf.png", "Trimark Pictures merged with Lions Gate Films", "sell", "media"],
  ["VikingOfficeProducts_feat.png", "Viking Office Products management buyout with Dillon Read", "buy", "services"],
  ["WilkesBashford_feat.png", "Wilkes Bashford strategic alternatives advisory and valuation analysis", "strategic", "consumer"],
  ["YoungsMarketCo_feat.png", "Young's Market Company management buyout by the Underwood family", "buy", "consumer"]
];
const GENERAL_SECTOR_LABELS = { consumer: "Consumer & Retail", technology: "Technology", services: "Business Services", industrial: "Industrials & Clean Technology", media: "Media & Entertainment" };
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
  const healthcareCards = TOMBSTONES.map(([file, alt, service, sector]) => `
    <article class="deal-card tombstone-card" data-market="healthcare" data-service="${service}" data-sector="${sector}">
      <img src="assets/tombstones/${file}" alt="${alt} - Synergy Advisors healthcare investment banking transaction" loading="lazy">
      <div class="tombstone-meta"><strong>${SERVICE_LABELS[service]}</strong><span>${SECTOR_LABELS[sector]}</span>${CASE_STUDY_LINKS[file] ? `<a href="#${CASE_STUDY_LINKS[file]}">View case study</a>` : ""}</div>
    </article>`).join("");
  const generalCards = GENERAL_TOMBSTONES.map(([file, alt, service, sector]) => `
    <article class="deal-card tombstone-card" data-market="general" data-service="${service}" data-sector="${sector}">
      <img src="assets/middle-market/${file}" alt="${alt} - Synergy Advisors general middle-market investment banking transaction" loading="lazy">
      <div class="tombstone-meta"><strong>${SERVICE_LABELS[service]}</strong><span>${GENERAL_SECTOR_LABELS[sector]}</span>${CASE_STUDY_LINKS[file] ? `<a href="#${CASE_STUDY_LINKS[file]}">View case study</a>` : ""}</div>
    </article>`).join("");
  tombstoneGrid.innerHTML = healthcareCards + generalCards;
  const count = document.querySelector("#tombstone-count");
  if (count) count.textContent = `${TOMBSTONES.length + GENERAL_TOMBSTONES.length} representative engagements`;
}
