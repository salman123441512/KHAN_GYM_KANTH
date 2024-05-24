// Simple swipe detection
document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    let touchstartX = 0;
    let touchendX = 0;

    const headingHome = document.querySelector('.heading-home');

    function handleGesture() {
        if (touchendX < touchstartX) alert('Swiped left!');
        if (touchendX > touchstartX) alert('Swiped right!');
    }

    headingHome.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    headingHome.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    });
});


$(document).ready(function () {
    $('.count').each(function () {
        var $this = $(this),
            countTo = parseInt($this.text(), 10);

        $({ countNum: 0 }).animate({
            countNum: countTo
        },
            {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
    });
});

// PRICING 
// ==============
$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {
        $(".pricing-card .pricing li").addClass("move-up");
    } else {
        $(".pricing-card .pricing li").removeClass("move-up");
    }
});

    //   About
    // ==========

    // Wait for the page to load
    $(document).ready(function() {
        // Scroll to the top of the container when the page is refreshed
        $('#aboutSection').scrollTop(0);
    });
    
