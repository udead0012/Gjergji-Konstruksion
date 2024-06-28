$(document).ready(function() {
    // Smooth scrolling when clicking on navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 60 // Adjust offset for fixed header
            }, 1000);

            // Highlight the clicked link
            $('nav ul li a').removeClass("active");
            $(this).addClass("active");
        }
    });

    // Highlight navigation bar based on section
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop() + 60; // Adjust offset for fixed header
        $('nav ul li a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });

    // Toggle navigation menu visibility
    $('.menu-toggle').click(function() {
        $('.nav-links').toggleClass('active');
    });
});
