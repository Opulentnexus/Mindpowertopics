document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    // Select all individual links inside the navigation
    const allLinks = document.querySelectorAll('.nav-links a');

    if(menuBtn) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }
        });
    }

    /* --- NEW LOGIC TO CLOSE MENU ON CLICK --- */
    allLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove the active class to hide the menu
            navLinks.classList.remove('active');
            // Change the X back to the Hamburger icon
            menuBtn.innerHTML = "☰";
        });
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
