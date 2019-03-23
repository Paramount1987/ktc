const Intro = {
    init() {
        this.initSlider();
    },

    initSlider() {
        /* global Swiper */
        $('.js-intro-slider').each(function init() {
            const $this = $(this);
            const swiper = new Swiper($this, {
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
            });
        });
    },
};

export default Intro;
