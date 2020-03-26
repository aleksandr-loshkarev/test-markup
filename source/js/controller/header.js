export default function () {
    controller('header', (self) => {

        function mobileNav() {
            $('.js-header-burger').click(function() {
                $('.js-header-nav').toggleClass('show');
            });
        }
        mobileNav();

        function headerStiky() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop(),
                    header = $('.header'),
                    headerHeight = header.innerHeight();
    
                if(scroll > headerHeight + 100) {
                    header.addClass('stiky');
                    $('.wrapper').addClass('header-stiky');
                } else {
                    header.removeClass('stiky');
                    $('.wrapper').removeClass('header-stiky');
                }
    
                if($('.js-header-nav').hasClass('show')) {
                    $('.js-header-nav').removeClass('show');
                }
            });
        }

        headerStiky();

        $(window).on('ready', headerStiky);
        
        function scrollAnchors() {
            $('.js-header-link').on('click', function(e) {
                e.preventDefault();
    
                var self = $(this),
                    href = self.attr('href'),
                    header = $('.header'),
                    headerHeight = header.innerHeight(),
                    top = $(href).offset().top - headerHeight;
    
                $('.js-header-link').removeClass('active');
                self.addClass('active');
    
                $('body,html').animate({scrollTop: top}, 1000);
            });
        }

        scrollAnchors();
    });
  }
  