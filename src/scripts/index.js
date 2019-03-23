import '../styles/index.scss';
// libs
//-------------------------------------------------------
window.$ = require('jquery');
window.jQuery = window.$;

require('./libs/index');

// utils
//----------------------------------------------
require('./utils/index');

// components
//----------------------------------------------
import News from './components/news';
import IntroSlider from './components/intro-slider';

$(document).ready(() => {
    IntroSlider.init();
    News.init();
});