

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

// Open menu
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Close menu (X button)
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Close menu when any link is clicked
const menuLinks = document.querySelectorAll(".mobile-menu-content a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
window.addEventListener("scroll", function () {

    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }

    }
});


document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var phoneNumber = "917942683888"; // 🔥 Replace with your WhatsApp number (with country code, no +)

    var whatsappMessage =
        "Hello Dr. O. J. Scaria,%0A%0A" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A" +
        "Message: " + message;

    var url = "https://wa.me/" + phoneNumber + "?text=" + whatsappMessage;

    window.open(url, "_blank");
});
