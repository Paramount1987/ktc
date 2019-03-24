const config = {
    init: false,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
            });
            swiper.on('slideChange', function () {
                self.slideChange(this);
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
    }
};

export default Intro;
