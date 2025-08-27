document.addEventListener("DOMContentLoaded", () => {
  // Update footer year dynamically
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Highlight active nav link by URL path
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-list li a").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === current);
  });

  // Toggle mobile nav menu
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Smooth scroll for nav anchor links
  document.querySelectorAll(".nav-list a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        if (nav.classList.contains("open")) nav.classList.remove("open");
      }
    });
  });
});
