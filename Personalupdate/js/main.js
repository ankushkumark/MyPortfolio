(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);


    document.querySelector("form").addEventListener("submit", async function (e) {
        e.preventDefault();

        const data = {
            fullname: document.getElementById("gname").value,
            email: document.getElementById("gmail").value,
            projectName: document.getElementById("cname").value,
            technology: document.getElementById("cage").value,
            message: document.getElementById("message").value
        };

        try {
            const res = await fetch("http://localhost:5000/api/project/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if (result.success) {
                alert("✅ Project submitted successfully! Email sent.");
            } else {
                alert("⚠️ Submission failed: " + result.message);
            }
        } catch (err) {
            alert("❌ Submission failed due to server error.");
            console.error(err);
        }
    });

document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        fullname: document.getElementById("gname").value,
        email: document.getElementById("gmail").value,
        projectName: document.getElementById("cname").value,
        technology: document.getElementById("cage").value,
        message: document.getElementById("message").value
    };

    try {
        const res = await fetch("http://localhost:5000/api/project/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();
        alert(result.message);
    } catch (err) {
        alert("Submission failed!");
    }
});

