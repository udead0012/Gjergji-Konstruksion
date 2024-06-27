$(document).ready(function() {
    // Smooth scrolling when clicking on navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Highlight navigation bar based on section
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust offset for fixed header
                behavior: "smooth"
            });

            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Highlight the current section in the navigation bar
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            if (
                scrollPosition >= section.offsetTop - 60 &&
                scrollPosition < section.offsetTop + section.offsetHeight - 60
            ) {
                navLinks.forEach(link => link.classList.remove("active"));
                document.querySelector(`nav a[href="#${section.id}"]`).classList.add("active");
            }
        });
    });
});

