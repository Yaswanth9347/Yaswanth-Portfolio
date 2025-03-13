document.addEventListener("DOMContentLoaded", function() {
  console.log("Welcome to Yaswanth's Personal Portfolio!");

  // Update active class on navigation links based on current page
  const currentLocation = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-list li a").forEach(link => {
    if (
      link.getAttribute("href") === currentLocation ||
      (currentLocation === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  // Dynamic footer year update
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
  });
});
