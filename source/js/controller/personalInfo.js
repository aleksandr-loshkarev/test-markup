export default function () {
    controller('personalInfo', (self) => {
        $('.js-input').each(function() {
            
            if(!($(this).parent('.js-input-row').hasClass('show'))) {

                $(this).focusin(function() {
                    $(this).parent('.js-input-row').addClass('focus');
                });

            }
            $(this).focusout(function() {
                if($(this)[0].value == '') {
                    $(this).parent('.js-input-row').removeClass('focus');
                }
            });
        });

        $(document).ready(function() {
            $('.js-input').each(function() {
                if(!($(this).parent('.js-input-row').hasClass('show'))) {
                    $(this).parent('.js-input-row').addClass('focus');
                }
                if($(this)[0].value == '') {
                    $(this).parent('.js-input-row').removeClass('focus');
                }
            });
        });
    });
  }
  