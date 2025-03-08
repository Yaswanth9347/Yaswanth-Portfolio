document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to My Portfolio!");
  
    // Update active class on navigation links
    const currentLocation = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-list li a").forEach(link => {
      if (link.getAttribute("href") === currentLocation) {
        link.classList.add("active");
      }
    });
  
    // Dynamic footer year update
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
  
