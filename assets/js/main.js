(function () {
  const whatsappPhone = "5491140966637";
  const whatsappDefaultMessage = "Hola! Quiero hacer una consulta sobre las conservas FR";
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navToggleLabel = document.querySelector("[data-nav-toggle-label]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
  const smoothScrollLinks = document.querySelectorAll("[data-smooth-scroll]");
  const siteHeader = document.querySelector("[data-site-header]");
  const backToTop = document.querySelector("[data-back-to-top]");
  const desktopQuery = window.matchMedia("(min-width: 768px)");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  window.dataLayer = window.dataLayer || [];

  whatsappLinks.forEach((link) => {
    const message = link.dataset.whatsappMessage || whatsappDefaultMessage;
    link.href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    link.rel = "noopener";

    link.addEventListener("click", () => {
      window.dataLayer.push({
        event: "whatsapp_click",
        cta_location: link.dataset.location || "sin_ubicacion",
      });
    });
  });

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || !targetId.startsWith("#")) {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      const headerHeight = siteHeader ? siteHeader.getBoundingClientRect().height : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: reducedMotionQuery.matches ? "auto" : "smooth",
      });

      if (window.history.pushState) {
        window.history.pushState(null, "", targetId);
      }
    });
  });

  function setMobileMenuState(isOpen) {
    if (!navToggle || !navMenu) {
      return;
    }

    navMenu.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));

    if (navToggleLabel) {
      navToggleLabel.textContent = isOpen ? "Cerrar menú" : "Abrir menú";
    }

    if ("inert" in navMenu) {
      navMenu.inert = !isOpen && !desktopQuery.matches;
    }
  }

  function syncMenuAccessibility() {
    if (!navMenu) {
      return;
    }

    if ("inert" in navMenu) {
      navMenu.inert = !desktopQuery.matches && !navMenu.classList.contains("is-open");
    }
  }

  if (navToggle && navMenu) {
    syncMenuAccessibility();

    navToggle.addEventListener("click", () => {
      setMobileMenuState(!navMenu.classList.contains("is-open"));
    });

    navMenu.addEventListener("click", (event) => {
      const target = event.target;

      if (target instanceof HTMLAnchorElement) {
        setMobileMenuState(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
        setMobileMenuState(false);
        navToggle.focus();
      }
    });

    desktopQuery.addEventListener("change", syncMenuAccessibility);
  }

  if ("IntersectionObserver" in window && navLinks.length) {
    const observedSections = Array.from(navLinks)
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach((link) => {
            const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;

            if (isCurrent) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          }); 
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    observedSections.forEach((section) => sectionObserver.observe(section));
  }

  if (backToTop) {
    const updateBackToTop = () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 560);
    };

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
  }
})();
