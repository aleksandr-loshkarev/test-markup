export default function () {
    controller('slider', (self) => {
        console.log($( ".js-javascript-slider" ))
        $( ".js-javascript-slider" ).slider({
            range: "max",
            min: 1,
            max: 4,
            value: 2,
            create: function( event, ui ) {
                console.log(event);
            },
            slide: function( event, ui ) {
                console.log(event);
            }
        });
    });
  }
  