const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const navigationLinks = navigation.querySelectorAll("a");
const projectPreviews = document.querySelectorAll(".project-preview");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  navigation.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

function updateProjectScroll() {
  projectPreviews.forEach((preview) => {
    const image = preview.querySelector("img");
    if (!image.naturalWidth) return;

    const renderedHeight = (image.naturalHeight / image.naturalWidth) * preview.clientWidth;
    const distance = Math.max(0, renderedHeight - preview.clientHeight);
    const duration = Math.min(13, Math.max(5, distance / 310));

    preview.style.setProperty("--scroll-distance", `${distance}px`);
    preview.style.setProperty("--scroll-duration", `${duration}s`);
  });
}

projectPreviews.forEach((preview) => {
  const image = preview.querySelector("img");
  image.addEventListener("load", updateProjectScroll);
});

window.addEventListener("resize", updateProjectScroll);
window.addEventListener("load", updateProjectScroll);
document.querySelector("#year").textContent = new Date().getFullYear();
