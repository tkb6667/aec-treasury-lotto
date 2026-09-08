const COMPONENTS = [
  {
    selector: "[data-component='topbar']",
    file: "components/topbar.html",
  },
  {
    selector: "[data-component='footer']",
    file: "components/footer.html",
  },
];

async function loadComponent({ selector, file }) {
  const element = document.querySelector(selector);

  if (!element) {
    return;
  }

  const response = await fetch(file);

  if (!response.ok) {
    throw new Error(`ไม่สามารถโหลด ${file} ได้`);
  }

  element.innerHTML = await response.text();
}

function setupActiveNavigation() {
  const currentPage = document.body.dataset.page;

  const activeLink = document.querySelector(
    `[data-nav="${currentPage}"]`,
  );

  if (!activeLink) {
    return;
  }

  activeLink.classList.add("is-active");
  activeLink.setAttribute("aria-current", "page");
}

function setupMobileNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (!toggle || !navigation) {
    return;
  }

  function closeMenu() {
    navigation.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "เปิดเมนู");
  }

  toggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "ปิดเมนู" : "เปิดเมนู",
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      !navigation.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) {
      closeMenu();
    }
  });
}

function setupCurrentYear() {
  document
    .querySelectorAll("[data-current-year]")
    .forEach((element) => {
      element.textContent = new Date().getFullYear();
    });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await Promise.all(COMPONENTS.map(loadComponent));

    setupActiveNavigation();
    setupMobileNavigation();
    setupCurrentYear();
  } catch (error) {
    console.error(error);
  }
});