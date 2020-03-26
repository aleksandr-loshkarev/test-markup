export default function () {
    controller('header', (self) => {
        $('.js-header-burger').click(function() {
            $('.js-header-nav').toggleClass('show');
        });
    });
  }
  