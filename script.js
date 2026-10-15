const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const avatarImage = document.querySelector(".avatar-image");

if (avatarImage instanceof HTMLImageElement) {
  avatarImage.src =
    "data:image/webp;base64,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";
}

if (avatarImage instanceof HTMLImageElement) {
  avatarImage.src = avatarImage.src.replace(
    "AAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAA",
    "AAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAA",
  );
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!reducedMotion.matches) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
  );

  for (const section of document.querySelectorAll("main > .section")) {
    sectionObserver.observe(section);
  }

  document.documentElement.classList.add("motion-enabled");
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Mở menu điều hướng");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Mở menu điều hướng" : "Đóng menu điều hướng",
  );
  navigation.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 680) {
    closeMenu();
  }
});
