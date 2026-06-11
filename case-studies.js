const CASE_STUDIES = [
  {
    id: "kids-dental-kare", market: "Healthcare", title: "Kids Dental Kare", image: "assets/tombstones/kdk2.png",
    subtitle: "Sale to Western Dental at more than double the seller's initial valuation expectations.",
    highlights: ["14 California clinics", "75,000+ children served annually", "60+ targeted buyers", "2x+ initial valuation expectations"],
    profile: "Kids Dental Kare was one of California's largest pediatric dental providers, serving predominantly Denti-Cal patients. Founder Dr. Jerry Lanier had spent more than 30 years building a respected platform focused on underserved children.",
    situation: "Dr. Lanier was ready to explore a sale. Synergy identified financial-management infrastructure needs, introduced an interim CFO candidate and Denti-Cal consulting resources, and built a targeted list of more than 60 strategic and financial buyers.",
    outcome: "Western Dental emerged as the strongest strategic buyer because of its pediatric and orthodontic growth objectives. Synergy managed diligence and negotiations across the finalist group and exceeded the founder's monetization goals at a valuation substantially above initial expectations.",
    quote: "Their experience in healthcare M&A transactions allowed me to walk away wealthier than I could have ever imagined.",
    cite: "Dr. Jerry Lanier, Founder & CEO, Kids Dental Kare", bankers: "Jim Emslie, Bob Maggiacomo and team"
  },
  {
    id: "clear-vision", market: "Healthcare", title: "Clear Vision Information Systems", image: "assets/tombstones/CV-Tombstone.png",
    subtitle: "Strategic sale of a risk-adjustment analytics platform to SCIO Health Analytics.",
    highlights: ["Healthcare SaaS", "Medicare Advantage analytics", "Immediate liquidity", "Continuing equity participation"],
    profile: "Clear Vision provided SaaS risk-adjustment and quality-metric analytics to health plans, provider groups, and accountable care organizations through RevMaxPro and DxMax.",
    situation: "The co-founders sought a strategic partner that could capitalize on the company's thought leadership and provide financial liquidity. Synergy positioned the recurring revenue, analytic capabilities, and value drivers for prospective buyers.",
    outcome: "The combination with SCIO created a broader care-management and payment-integrity platform with greater financial resources. The owners achieved immediate monetization and retained the potential for long-term appreciation through equity in the combined company.",
    quote: "Synergy was a true partner to us in achieving our strategic and financial objectives.",
    cite: "Tom Peterson, Co-founder & CEO, Clear Vision Information Systems", bankers: "Scott Messier and Bob Maggiacomo"
  },
  {
    id: "system-dynamics", market: "General Middle Market", title: "System Dynamics", image: "assets/tombstones/SystemDynamics_Agilent_feat.png",
    subtitle: "Rapid sale to Agilent Technologies with a 35% increase from initial bid to closing price.",
    highlights: ["35%+ price increase", "Four-month process", "Fortune 500 buyer", "Accelerated tax-driven timeline"],
    profile: "System Dynamics developed instrumentation software used primarily with laboratory equipment and was the sole software supplier for an important Agilent product line.",
    situation: "The owner wanted to reduce portfolio concentration and retire. Although Agilent was the natural buyer and represented most revenue, Synergy prepared full marketing and valuation materials and approached competing multinational equipment companies.",
    outcome: "Competitive tension and focused negotiation increased the price by more than 35% from the initial bid. The transaction closed and funded within four months, meeting the owner's year-end tax requirements.",
    quote: "With Synergy's counsel and assistance I was able to maximize value and close on an accelerated timeframe.",
    cite: "Gordon A. Feingold, Owner & CEO, System Dynamics", bankers: "Bob Maggiacomo"
  },
  {
    id: "goold-health-systems", market: "Healthcare", title: "Goold Health Systems", image: "assets/tombstones/GHS_Emdeon_feat.png",
    subtitle: "Confidential strategic sale of a Medicaid pharmacy-benefit specialist to Emdeon.",
    highlights: ["Medicaid expertise", "Limited market exposure", "Sponsor liquidity", "Strategic buyer fit"],
    profile: "Goold Health Systems delivered clinically driven pharmacy-benefit administration, prior authorization, clinical review, and business-process services to state Medicaid agencies and government clients.",
    situation: "Long-time investor The Waldron Group wanted liquidity without distracting management or alerting the concentrated Medicaid marketplace. Synergy used its sector knowledge to assess counterparties and their ability to leverage GHS.",
    outcome: "Emdeon acquired GHS for its pharmacy capabilities and knowledge of Medicaid management, expanding Emdeon's government pharmacy-benefit position while delivering liquidity to the financial sponsors.",
    quote: "", cite: "", bankers: "Scott Messier and Bob Maggiacomo"
  },
  {
    id: "trillium-specialty-hospital", market: "Healthcare", title: "Trillium Specialty Hospital", image: "assets/tombstones/Trillium_Restora_feat.png",
    subtitle: "Sale of two specialty hospitals after prior attempts failed to achieve valuation goals.",
    highlights: ["Two 120-bed facilities", "Complex reimbursement environment", "Limited buyer universe", "Private equity-backed buyer"],
    profile: "Trillium comprised two long-term acute-care and skilled-nursing facilities treating patients from moderate acuity through ventilator-dependent care.",
    situation: "The owners had assumed operations after a tenant default and later converted beds to higher-acuity LTAC use. Earlier sale attempts failed amid changing reimbursement rules and a narrow strategic-buyer universe.",
    outcome: "Synergy found an experienced industry operator who secured private equity capital and completed a successful acquisition despite regulatory and market complexity.",
    quote: "Synergy brought instinct, experience and judgment to the process, which influenced an excellent outcome for us as a seller.",
    cite: "Owner, Trillium Specialty Hospital", bankers: "Jim Emslie and Bob Maggiacomo"
  },
  {
    id: "ad-pathlabs", market: "Healthcare", title: "AD PathLabs", image: "assets/tombstones/AdPathlabs_PathologyInc_feat.png",
    subtitle: "Turnaround sale supported by bridge financing when the first buyer process produced weak terms.",
    highlights: ["20+ initial buyers", "Turnaround situation", "Bridge debt arranged", "Sale to Pathology, Inc."],
    profile: "AD PathLabs was a Southern California anatomical pathology and esoteric-testing company serving hospitals, surgery centers, and oncology-focused physicians.",
    situation: "The venture-backed company remained loss-making despite improving trends. Initial buyer reception was tepid because of the business model and liquidity risk, so Synergy arranged debt financing and reopened the process to a second buyer group.",
    outcome: "Physician-led Pathology, Inc. understood the model and acquired the company. Investors achieved acceptable exits and transferred the long-term regulatory liability associated with maintaining patient specimen records.",
    quote: "Bob and Jim fought like bulldogs to get the deal done and secured the bridge financing required to reach the finish line.",
    cite: "Venture Investor and Board Member, AD PathLabs", bankers: "Bob Maggiacomo and Jim Emslie"
  },
  {
    id: "molina-healthcare", market: "Healthcare", title: "Molina Healthcare", image: "assets/tombstones/Molina_Unisys_feat.png",
    subtitle: "Acquisition of the Unisys Medicaid management information systems business.",
    highlights: ["Public-company carve-out", "Medicaid technology", "Diversification", "Below-market valuation multiples"],
    profile: "The acquired business designed and operated Medicaid Management Information Systems for state agencies, providing eligibility, claims, pharmacy, financial-management, and program-integrity services.",
    situation: "Molina wanted complementary cash flow and diversification beyond health plans. Synergy sourced a carve-out from Unisys, which was restructuring and seeking liquidity, and entered exclusive negotiations.",
    outcome: "Synergy negotiated favorable terms at valuation multiples below relevant industry mean and median levels, enabling Molina to apply its Medicaid expertise to a complementary technology and services platform.",
    quote: "As a Fortune 500 company, we use Synergy because their advisory capabilities are as good as any Wall Street firm.",
    cite: "John Molina, CFO, Molina Healthcare", bankers: "Jim Emslie, Bob Maggiacomo and Scott Messier"
  },
  {
    id: "march-vision-care", market: "Healthcare", title: "MARCH Vision Care", image: "assets/tombstones/MARCHVisionCare_feat.png",
    subtitle: "Growth capital from a strategic investor that also contributed managed-care lives.",
    highlights: ["Founder control retained", "Strategic growth capital", "Company size effectively tripled", "4M+ beneficiaries"],
    profile: "MARCH administers vision benefits for managed-care organizations, especially Medicaid, Medicare, dual-eligible, and exchange populations.",
    situation: "The family-owned early-stage company needed growth capital and a strategic partner capable of adding covered lives and opening new state markets.",
    outcome: "Synergy negotiated a minority investment that preserved founder control while bringing both capital and managed lives. MARCH expanded nationally and ultimately managed vision care for more than four million beneficiaries without requiring further external capital at that stage.",
    quote: "The Synergy team helped us negotiate and finalize an investment with the perfect strategic investor.",
    cite: "Dr. Glen March, CEO & Founder, MARCH Vision Care", bankers: "Jim Emslie and Bob Maggiacomo"
  },
  {
    id: "cdcc-products", market: "General Middle Market", title: "CDCC Products", image: "assets/middle-market/CDCC_feat-1.png",
    subtitle: "Competitive sale to Ecolab after evaluating growth capital versus monetization.",
    highlights: ["Strategic alternatives analysis", "Multiple bidders", "Premium to unsolicited offers", "Sale to Ecolab"],
    profile: "CDCC manufactured proprietary powdered and liquid chemical-cleaning products for coffee, tea, specialty beverage, foodservice, convenience-store, and vending equipment.",
    situation: "The founders were deciding between raising growth capital and accepting unsolicited strategic interest. The banking team conducted a deep industry analysis and presented prioritized alternatives.",
    outcome: "The owners chose a sale. A broad competitive process generated multiple strategic and financial offers, resulting in favorable terms and a significant cash premium over the initial unsolicited indications.",
    quote: "The diligent, well-orchestrated process and insightful advice helped us achieve a successful close despite complications along the way.",
    cite: "Jack Weaver, President & Founder, CDCC", bankers: "Dan Sanford"
  },
  {
    id: "kaenon-polarized", market: "General Middle Market", title: "Kaenon Polarized", image: "assets/middle-market/Kaenon_feat.png",
    subtitle: "Minority growth investment from Compagnie Financière Richemont.",
    highlights: ["Luxury strategic investor", "Founder majority retained", "Working-capital growth", "Minority equity investment"],
    profile: "Kaenon developed premium sunglasses, prescription lenses, and branded optical products using its proprietary SR-91 lens technology.",
    situation: "Strong product recognition and expansion into larger retail channels increased working-capital needs. The founders wanted growth capital and the support of a larger strategic investor without surrendering control.",
    outcome: "Synergy identified Richemont and negotiated a non-control minority investment that recapitalized Kaenon while allowing the founders to maintain majority ownership.",
    quote: "Jim and Bob were both active on our transaction and were always available whenever I needed them.",
    cite: "Steve Rosenberg, Founder, Kaenon Polarized", bankers: "Jim Emslie and Bob Maggiacomo"
  },
  {
    id: "saber-software", market: "General Middle Market", title: "Saber Software", image: "assets/middle-market/Saber_AccelKKR_feat.png",
    subtitle: "Majority recapitalization that created founder liquidity and funded further growth.",
    highlights: ["Majority recapitalization", "Founder liquidity", "Acquisition capital", "Later $420M sale to EDS"],
    profile: "Saber developed administrative software and services for state and local governments, including elections, human services, public health, retirement, motor vehicles, and unemployment insurance.",
    situation: "The founder-brothers considered a full sale but recognized that further investment in products and acquisitions could create greater value. They needed an experienced capital partner.",
    outcome: "A majority recapitalization with Accel-KKR provided liquidity and growth capital while the founders continued to operate the business. Two years later, Saber was acquired by EDS for $420 million and later became part of Hewlett-Packard.",
    quote: "", cite: "", bankers: "Scott Messier"
  },
  {
    id: "the-boys", market: "General Middle Market", title: "The Boys Market", image: "assets/middle-market/TheBoys_Cala_feat.png",
    subtitle: "Cross-border family acquisition strategy and financing for a growing U.S. supermarket platform.",
    highlights: ["$131M going-private transaction", "Cross-border family investor", "Two follow-on acquisitions", "70-store platform"],
    profile: "The Boys Market was a Los Angeles supermarket chain that had grown through organic expansion and regional acquisitions.",
    situation: "The Mexico-based Brenner family wanted to diversify into the United States. The banking team advised and financed its acquisition of publicly traded Boys Market, then supported two tuck-in grocery acquisitions.",
    outcome: "The family acquired FoodsCo and Cala Foods, grew the multi-brand platform to 70 stores, and ultimately positioned it for a $375 million merger with Yucaipa Food Group.",
    quote: "", cite: "", bankers: "Dan Sanford"
  }
];

const caseLibrary = document.querySelector("#case-library");
if (caseLibrary) {
  caseLibrary.innerHTML = CASE_STUDIES.map(item => `
    <details class="case-entry" id="${item.id}"${location.hash === `#${item.id}` ? " open" : ""}>
      <summary>
        <img class="case-thumb" src="${item.image}" alt="" loading="lazy">
        <div class="case-summary"><small>${item.market}</small><h3>${item.title}</h3><p>${item.subtitle}</p></div>
        <span class="case-toggle" aria-hidden="true">+</span>
      </summary>
      <div class="case-content">
        <div class="case-highlights">${item.highlights.map(value => `<span>${value}</span>`).join("")}</div>
        <div class="case-columns">
          <div class="case-column"><h4>Client Profile</h4><p>${item.profile}</p></div>
          <div class="case-column"><h4>Situation &amp; Approach</h4><p>${item.situation}</p></div>
          <div class="case-column"><h4>Outcome</h4><p>${item.outcome}</p></div>
        </div>
        ${item.quote ? `<blockquote class="case-quote">“${item.quote}”<cite>${item.cite}</cite></blockquote>` : ""}
        <p class="case-bankers"><strong>Lead bankers:</strong> ${item.bankers}</p>
      </div>
    </details>`).join("");

  const openHashCase = () => {
    const id = location.hash.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (target?.classList.contains("case-entry")) {
      target.setAttribute("open", "");
      target.scrollIntoView({ block: "start" });
    }
  };
  requestAnimationFrame(openHashCase);
  addEventListener("hashchange", openHashCase);
  document.querySelectorAll('.tombstone-meta a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => requestAnimationFrame(openHashCase));
  });
}
