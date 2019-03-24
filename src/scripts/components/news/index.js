import { svgBullet } from './data';

const config = {
    init: false,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: (index, className) => {
            return `<span class=${className}>${svgBullet}</span>`;
        }
    },
    breakpoints: {
        // when window width is <= 480px
        767: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        // when window width is <= 640px
        1399: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
};

const News = {
    init() {
        this.initSlider();
    },

    initSlider() {
        const self = this;
        /* global Swiper */
        $('.js-news-slider').each(function init() {
            const $this = $(this);
            const swiper = new Swiper($this, config);

            swiper.on('init', function() {
            });

            // init Swiper
            swiper.init();
        });
    },
};

export default News;
