document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const navBar = document.querySelector(".navbar");

  // Toggle mobile menu
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active"); // For animated hamburger
  });

  // Close mobile menu when a link is clicked (for single-page navigation)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });
  });

  // Add sticky class to navbar on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // Adjust threshold as needed
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  });

  // Optional: Smooth scroll for older browsers or more control
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Get the height of the fixed navbar
        const navbarHeight = navBar.offsetHeight;
        // Calculate the position, accounting for the navbar
        const offsetPosition = targetElement.offsetTop - navbarHeight - 20; // -20px for a bit of padding

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
