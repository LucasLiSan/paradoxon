/**
 * PARADOXON — configurações editáveis
 * Preencha apenas URLs reais. Enquanto vazias, nenhuma ação inexistente é exibida.
 */
const SITE_CONFIG = {
  contactUrl: "",
  proposalUrl: "",
  professionalNetworkUrl: "",
};

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const backToTop = document.querySelector(".back-to-top");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  navigation.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);

  if (!isOpen) navigation.querySelector("a")?.focus();
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMenu();
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { 
    threshold: 0.12,
    rootMargin: "0px 0px -5% 0px"
  },
);

document.querySelectorAll(".reveal").forEach((element) => {
  if (reducedMotion) element.classList.add("is-visible");
  else revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  },
  {
    rootMargin: "-30% 0px -60% 0px",
    threshold: [0, 0.2, 0.5]
  },
);

sections.forEach((section) => sectionObserver.observe(section));

const updateScrollState = () => {
  const hasScrolled = window.scrollY > 30;
  header.classList.toggle("is-scrolled", hasScrolled);
  backToTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.8);
};

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
});

document.getElementById("current-year").textContent = new Date().getFullYear();

const contactPlaceholder = document.querySelector(".contact-placeholder");
if (SITE_CONFIG.contactUrl || SITE_CONFIG.proposalUrl) {
  const actions = document.createElement("div");
  actions.className = "button-row configured-actions";

  [
    [SITE_CONFIG.contactUrl, "Estabelecer contato", "button button-primary"],
    [SITE_CONFIG.proposalUrl, "Apresentar uma proposta", "button button-secondary"],
  ].forEach(([url, label, className]) => {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.className = className;
    link.textContent = label;
    actions.appendChild(link);
  });

  contactPlaceholder.replaceWith(actions);
}

if (SITE_CONFIG.contactUrl) {
  const item = document.querySelector('[data-config="contact"]');
  const link = document.createElement("a");
  link.href = SITE_CONFIG.contactUrl;
  link.textContent = "Contato";
  item.replaceWith(link);
}

if (SITE_CONFIG.professionalNetworkUrl) {
  const item = document.querySelector('[data-config="network"]');
  const link = document.createElement("a");
  link.href = SITE_CONFIG.professionalNetworkUrl;
  link.textContent = "Rede profissional";
  link.rel = "noopener noreferrer";
  item.replaceWith(link);
}
