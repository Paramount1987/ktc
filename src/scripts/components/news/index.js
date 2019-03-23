const News = {
    init() {
        this.initSlider();
    },

    initSlider() {
        /* global Swiper */
        $('.js-news-slider').each(function init() {
            const $this = $(this);
            const swiper = new Swiper($this, {
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
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
                      spaceBetween: 20
                    }
                  }
            });
        });
    },
};

export default News;
