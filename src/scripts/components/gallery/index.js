import { svgBullet } from './data';

const config = {
    effect: 'fade',
    init: false,
    slidesPerView: 1,
    spaceBetween: 60,
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: (index, className) => {
            return `<span class=${className}>${svgBullet}</span>`;
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        767: {
            spaceBetween: 10,
        },
    },
};

const gallery = {
    init() {
        this.initSlider();
        this.initImagePopup();
    },

    initSlider() {
        /* global Swiper */
        $('.js-gallery-slider').each(function init() {
            const $this = $(this);
            const autoplay = $this.data('autoplay');
            let opts = {...config};

            if (autoplay) {
                opts = {
                    ...opts,
                    autoplay: {
                        delay: 8000,
                        disableOnInteraction: false
                    }
                }
            }
            
            const swiper = new Swiper($this, opts);

            swiper.on('init', function() {
            });

            // init Swiper
            swiper.init();

            $this.on('shown.bs.tab', function (e) {
                swiper.update();
                swiper.slideTo(0);
            });
        });
    },

    initImagePopup() {
        $('.js-popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                tCounter: '<span class="mfp-counter">%curr% из %total%</span>', // markup of counter
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            }
        });
    },
};

export default gallery;
