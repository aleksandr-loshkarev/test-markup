import CONSTANTS from './constants'
import browserUpdate from 'browser-update';
import preloader from './controller/preloader';
import footer from './controller/footer';
import header from './controller/header';
import personalInfo from './controller/personalInfo';
import customSelect from './controller/custom-select';
import customScroll from './controller/customScroll';
import slider from './controller/slider';

preloader();
browserUpdate(CONSTANTS.browserUpdateOptions);

$(document).ready(() => {
  svg4everybody(); //SVG polyfill
  footer();
  header();
  personalInfo();
  customSelect();
  customScroll();
  slider();
  //Other controllers and js modules here
});
