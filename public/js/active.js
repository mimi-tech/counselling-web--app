(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Countdown Active Code
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('%D <span>Days</span> %H <span>Hours</span> %M <span>Minutes</span> %S <span>Seconds</span>'));
        });
    });

    // :: 3.0 Search Active Code
    var searchBtn = $('.search-btn');
    var searchWrap = $('.search-wrapper');
    var closeIcon = $('.close--icon');

    searchBtn.on('click', function () {
        searchWrap.toggleClass('on');
    });

    closeIcon.on('click', function () {
        searchWrap.removeClass('on');
    });

    // :: 4.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#faithNav').classyNav();
    }

    // :: 5.0 Sliders Active Code
    if ($.fn.owlCarousel) {

        var welcomeSlide = $('.hero-slides');
        var aboutSlide = $('.about-slides');
        var donateSlide = $('.donate-slides');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: true,
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 1500
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        var dot = $('.hero-slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1 + '.';
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });

        donateSlide.owlCarousel({
            items: 4,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false,
            autoplay: false,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    // :: 6.0 Gallery Active Code
    if ($.fn.magnificPopup) {
        $('.videobtn').magnificPopup({
            type: 'iframe'
        });
    }

    // :: 7.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // :: 8.0 CouterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 9.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".faith-main-menu").sticky({
            topSpacing: 0
        });
    }

    // :: 10.0 audioPlayer Active Code
    if ($.fn.audioPlayer) {
        $('audio').audioPlayer();
    }

    // :: 11.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

    // :: 12.0 prevent default a click
    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

})(jQuery);
$(document).ready(function() {
  $('.agnes').click(function() {
    $('.saint-text').slideToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });
});

$(document).ready(function() {
  $('.read').click(function() {
    $('.readmore').slideToggle("slow");
    $('.read').hide();

  });
});
$(document).ready(function() {
  $('.read1').click(function() {
    $('.readmore1').slideToggle("slow");
    $('.read1').hide();

  });
});

$(document).ready(function() {
  $('.read2').click(function() {
    $('.readmore2').slideToggle("slow");
    $('.read2').hide();

  });
});

$(document).ready(function() {
  $('.read3').click(function() {
    $('.readmore3').slideToggle("slow");
    $('.read3').hide();

  });
});

$(document).ready(function() {
  $('.read4').click(function() {
    $('.readmore4').slideToggle("slow");
    $('.read4').hide();

  });
});
$(document).ready(function() {
  $('.read5').click(function() {
    $('.readmore5').slideToggle("slow");
    $('.read5').hide();

  });
});
$(document).ready(function() {
  $('.read6').click(function() {
    $('.readmore6').slideToggle("slow");
    $('.read6').hide();

  });
});
$('#next').click(function() {
  $('.current').removeClass('current').hide()
    .next().show().addClass('current');  $('.current1').removeClass('current1').removeClass('active').next().addClass('active').addClass('current1');
    $( "li.current1" ).prevAll().find('span').addClass('active1');

  if ($('.current').hasClass('last')) {
    $('#next').css('display', 'none');
  }
  $('#prev').css('display', 'block');
});

$('#prev').click(function() {
  $('.current').removeClass('current').hide()
    .prev().show().addClass('current');
  $('.current1').removeClass('current1').removeClass('active').prev().addClass('active').addClass('current1');

  $("li.current1").find('span').removeClass('active1');

  if ($('.current').hasClass('first')) {
    $('#prev').css('display', 'none');
  }
  $('#next').css('display', 'block');
});
