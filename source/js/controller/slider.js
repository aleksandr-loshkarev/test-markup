export default function () {
    controller('slider', (self) => {
        $('.js-javascript-slider').slider({
            range: "max",
            min: 1,
            max: 4,
            value: 4
        });
    });
  }
  