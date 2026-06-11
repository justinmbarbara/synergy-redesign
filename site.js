const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".primary-nav");

if (header) {
  addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 10), { passive: true });
}

if (menuButton && nav) {
  nav.id ||= "primary-navigation";
  menuButton.type = "button";
  menuButton.setAttribute("aria-controls", nav.id);
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }));
  addEventListener("keydown", event => {
    if (event.key !== "Escape" || !nav.classList.contains("open")) return;
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.focus();
  });
}

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");
if (reduceMotion || !("IntersectionObserver" in window)) {
  reveals.forEach(element => element.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      const number = entry.target.querySelector("[data-count]") || (entry.target.matches("[data-count]") ? entry.target : null);
      if (number) animateCount(number);
      observer.unobserve(entry.target);
    });
  }, { threshold: .16 });
  reveals.forEach(element => observer.observe(element));
}

function animateCount(element) {
  if (element.dataset.counted) return;
  element.dataset.counted = "true";
  const target = Number(element.dataset.count);
  const prefix = element.dataset.prefix || "";
  const suffix = element.dataset.suffix || "";
  const start = performance.now();
  const duration = 1400;
  const update = now => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = prefix + Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const filterPanel = document.querySelector(".filters");
if (filterPanel) {
  const filterButtons = filterPanel.querySelectorAll(".filter");
  const sectorButtons = filterPanel.querySelectorAll('.filter[data-group="sector"]');
  const cards = document.querySelectorAll(".deal-card[data-service]");
  const empty = document.querySelector("#deal-empty");
  const resultCount = document.querySelector("#tombstone-count");
  const state = { market: "all", sector: "all" };

  filterButtons.forEach(button => {
    button.type = "button";
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
  });

  const setActive = (group, value) => {
    filterPanel.querySelectorAll(`.filter[data-group="${group}"]`).forEach(item => {
      const active = item.dataset.value === value;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  };

  // Only show sector chips that belong to the selected market ("All" market shows every sector).
  const updateSectorVisibility = () => {
    sectorButtons.forEach(button => {
      const market = button.dataset.market;
      button.hidden = !(!market || state.market === "all" || market === state.market);
    });
  };

  const applyFilters = () => {
    let visible = 0;
    cards.forEach(card => {
      const markets = card.dataset.market.split(" ");
      const sectors = card.dataset.sector.split(" ");
      const match = (state.market === "all" || markets.includes(state.market))
        && (state.sector === "all" || sectors.includes(state.sector));
      card.hidden = !match;
      if (match) visible += 1;
    });
    [...cards]
      .sort((a, b) => {
        const orderKey = state.sector === "all" ? "defaultOrder" : `order${state.sector[0].toUpperCase()}${state.sector.slice(1)}`;
        return Number(a.dataset[orderKey]) - Number(b.dataset[orderKey]);
      })
      .forEach(card => card.parentElement.appendChild(card));
    if (empty) empty.hidden = visible !== 0;
    if (resultCount) resultCount.textContent = `${visible} representative engagement${visible === 1 ? "" : "s"}`;
  };

  filterButtons.forEach(button => button.addEventListener("click", () => {
    const group = button.dataset.group;
    state[group] = button.dataset.value;
    setActive(group, state[group]);
    if (group === "market") {
      // A sector from the other market would yield zero results, so reset to All.
      state.sector = "all";
      setActive("sector", "all");
      updateSectorVisibility();
    }
    applyFilters();
  }));

  updateSectorVisibility();
}

const TEAM_PORTRAITS = {
  "bob-maggiacomo": ["Bob2-1.jpg", "Bob Maggiacomo, CEO and Managing Partner of Synergy Advisors"],
  "jim-emslie": ["Jim2-1.jpg", "Jim Emslie, Partner and Managing Director of Synergy Advisors"],
  "scott-messier": ["Scott2-1.jpg", "Scott Messier, Managing Director of Synergy Advisors"],
  "scott-quigley": ["ScottQ2.png", "Scott Quigley, Managing Director of Synergy Advisors"],
  "timothy-ome": ["TOme-1-1.jpg", "Timothy Ome, Senior Advisor to Synergy Advisors"]
};

Object.entries(TEAM_PORTRAITS).forEach(([id, [file, alt]]) => {
  const placeholder = document.querySelector(`#${id} .bio-photo`);
  if (!placeholder || placeholder.tagName === "IMG") return;
  const image = document.createElement("img");
  image.className = "bio-photo";
  image.src = `assets/tombstones/${file}`;
  image.alt = alt;
  placeholder.replaceWith(image);
});

const homeTransactionGrid = document.querySelector("body .section-head.center + .deal-grid");
if (homeTransactionGrid && !document.querySelector("#tombstone-grid")) {
  const featured = [
    ["HID-Tombstone-4.5-3.png", "Health Information Designs sold to KEPRO"],
    ["kdk2.png", "Kids Dental Kare sold to Western Dental"],
    ["Molina_Abri_feat.png", "Molina Healthcare acquired Abri Health Plan"],
    ["MARCHVisionCare_united2-1.png", "MARCH Vision Care sold to UnitedHealthcare"]
  ];
  homeTransactionGrid.innerHTML = featured.map(([file, alt]) => `
    <article class="deal-card tombstone-card">
      <img src="assets/tombstones/${file}" alt="${alt} - representative Synergy Advisors healthcare transaction" loading="lazy">
    </article>`).join("");
}

document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Interest: ${data.get("interest")}`,
      "",
      data.get("message")
    ].join("\n");
    location.href = `mailto:info@synergyadvisorsllc.com?subject=${encodeURIComponent("Confidential inquiry")}&body=${encodeURIComponent(body)}`;
  });
}
