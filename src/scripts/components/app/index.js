// require('waypoints/lib/jquery.waypoints.min.js');

const App = {
  init() {
    this.$body = $('body');

    this.$mlpPopupContainer = $('.js-mlp-descr');
    this.$mlpBtnClose = $('.js-mlp-btn-close');
    this.$mlpPopupTitle = $('.js-mlp-title');
    this.$mlpPopupContent = $('.js-mlp-content');
    this.mlpTotalPoints = $('.js-mlp-point').length;
    this.currentPoint = 1;

    this.hidePreloader();
    this.toggleMap();
    this.toggleTab();
    this.nanoScrollInit();

    this.mlpPointClickHanlder();
    this.mlpBtnCloseClickHanlder();
    this.mlpArrowsClickHandler();
    
    this.spincrementScroll();
    this.fadeInElement();
  },

  hidePreloader() {
    $('#preloader').fadeOut(300);
  },

  toggleMap() {
    $('.js-map-link').click(function(e) {
      e.preventDefault();
      const $this = $(this);
      const target = $this.attr('href');

      $this.toggleClass('is-opened');
      $(target).slideToggle();
    })
  },

  toggleTab() {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      const $target = $(e.target);
      const href = $target.attr('href');

      const $tab = $(href);
      const $gallery = $tab.find('.js-gallery-slider');

      if ($gallery.length) {
        $gallery.trigger('shown.bs.tab');
      }
    });
  },

  mlpPopupShow() {
    this.$mlpPopupContainer.fadeIn(100);
    this.$body.addClass('mlp-popup');
  },

  mlpPopupClose() {
    this.$mlpPopupContainer.fadeOut(100);
    this.$body.removeClass('mlp-popup');
  },

  updateMlpContent(popupId) {
    const $popupContent = $(`#mlp-content-${popupId}`);
    const title = $popupContent.find('.mlp-model-descr__title').text();
    const content = $popupContent.find('.mlp-content').html();

    this.$mlpPopupTitle.text(title);
    this.$mlpPopupContent.html(content);

    setTimeout(() => this.nanoScrollUpdate(), 150);
  },

  nanoScrollInit() {
    $(".nano").nanoScroller({ 
      alwaysVisible: true,
      scroll: 'top',
    });
  },

  nanoScrollUpdate() {
    $(".nano").nanoScroller();
  },

  mlpPointClickHanlder() {
    const _this= this;

    $('.js-mlp-point').click(function() {
      _this.currentPoint = $(this).data('ref');

      _this.updateMlpContent(_this.currentPoint);
      _this.mlpPopupShow();
    });
  },

  mlpBtnCloseClickHanlder() {
    const _this= this;

    this.$mlpBtnClose.click(function() {
      _this.mlpPopupClose();
    });
  },

  mlpArrowsClickHandler() {
    $('.js-mlp-next').click(() => {
      if (this.currentPoint + 1 > this.mlpTotalPoints) {
        this.currentPoint = 1;
      } else {
        this.currentPoint++;
      }

      this.updateMlpContent(this.currentPoint);
      
    });
    $('.js-mlp-prev').click(() => {
      if (this.currentPoint - 1 < 1) {
        this.currentPoint = this.mlpTotalPoints;
      } else {
        this.currentPoint--;
      }

      this.updateMlpContent(this.currentPoint);
    });
  },

  spincrementScroll() {
    $('.js-spincrement').each(function () {
      new Waypoint({
        element: this,
        handler: function() {
          const $el = $(this.element);

          if (!$el.hasClass('done')) {
            $el.spincrement({
              duration: 1800,
              complete: () => {
                  $el.addClass('done')
              }
            });
          }
        },
        offset: '75%'
      })
    });
  },

  fadeInElement() {
    $('.js-fade-in').each(function () {
      new Waypoint({
        element: this,
        handler: function() {
          const $el = $(this.element);
          $el.addClass('is-ready')
        },
        offset: '75%'
      })
    });
  }
};

export default App;
