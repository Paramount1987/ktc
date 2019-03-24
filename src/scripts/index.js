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
import App from './components/app';
import Nav from './components/nav';
import News from './components/news';
import IntroSlider from './components/intro-slider';

$(document).ready(() => {
    App.init();
    News.init();
    Nav.init();
    IntroSlider.init();
});