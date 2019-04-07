import { svgBullet } from './data';

const config = {
    init: false,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 8000,
        disableOnInteraction: false
    },
    fadeEffect: {
        crossFade: true
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class=${className}>${svgBullet}</span>`;
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
};

const Intro = {
    init() {
        this.initSlider();
    },

    initSlider() {
        const self = this;
        /* global Swiper */
        $('.js-intro-slider').each(function init() {
            const $this = $(this);
            const totalSlides = $this.find('.swiper-slide').length;
            const swiper = new Swiper($this, config);

            swiper.on('init', function () {
                self.initFraction(this, totalSlides);
                self.numberIncrement(swiper);
            });
            swiper.on('slideChange', function () {
                self.slideChange(this);
                self.numberIncrement(swiper);
            });
            // init Swiper
            swiper.init();
        });
    },

    initFraction(swiper, totalSlides) {
        const { $el } = swiper;
        const $currFraction = $el.find('.js-fr-current');
        const $totalFraction = $el.find('.js-fr-total');

        $currFraction.text('01')
        $totalFraction.text(totalSlides > 9 ? totalSlides : `0${totalSlides}`);
    },

    slideChange(swiper) {
        let { $el, realIndex } = swiper;
        const $currFraction = $el.find('.js-fr-current');
        const idxText = ++realIndex > 9 ? realIndex : `0${realIndex}`;

        $currFraction.text(idxText);
    },

    numberIncrement(swiper) {
        const { activeIndex, $el } = swiper;
        const activeSlide = $el.find('.swiper-slide').eq(activeIndex)[0]; 
        const $increment = $(activeSlide).find('.spincrement:not(.done)');

        $increment.spincrement({
            duration: 1800,
            complete: () => {
                $increment.addClass('done')
            }
        });
    }
};

export default Intro;
