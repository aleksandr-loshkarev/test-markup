import CONSTANTS from './constants'
import browserUpdate from 'browser-update';
import preloader from './controller/preloader';
import footer from './controller/footer';
import header from './controller/header';

preloader();
browserUpdate(CONSTANTS.browserUpdateOptions);

$(document).ready(() => {
  svg4everybody(); //SVG polyfill
  footer();
  header();
  //Other controllers and js modules here
});
