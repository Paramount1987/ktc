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
require('./components/404/index');

import App from './components/app';
import Nav from './components/nav';
import News from './components/news';
import Gallery from './components/gallery';
import IntroSlider from './components/intro-slider';

$(document).ready(() => {
    App.init();
    News.init();
    Nav.init();
    Gallery.init();
    IntroSlider.init();
});