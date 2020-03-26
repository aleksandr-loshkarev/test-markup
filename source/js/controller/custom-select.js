export default function () {
    controller('customSelect', (self) => {
        $('.js-custom-select').selectric({
            maxHeight: 300,
            onInit: function() {
                $('.selectric-scroll').mCustomScrollbar({
                    axis:"y"
                });
            },
            onChange: function(self) {
                $('.label').addClass('default');
            },
        });
    });
  }