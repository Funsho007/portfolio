document.addEventListener("DOMContentLoaded", function () {
    
    // Contact Form Submission Handler
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            // Get input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Basic validation
            if (name && email && message) {
                alert("Thank you, " + name + "! Your message has been sent.");
                contactForm.reset(); // Clear form fields
            } else {
                alert("Please fill out all fields before submitting.");
            }
        });
    }

    // Smooth Scroll to Top
    const backToTopButton = document.querySelector(".back-to-top");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Mobile Menu Toggle (For Future Use)
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

});
