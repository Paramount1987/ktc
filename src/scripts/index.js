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

$(document).ready(() => {
    News.init();
});