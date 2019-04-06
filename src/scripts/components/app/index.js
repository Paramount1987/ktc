const App = {
  init() {
    this.hidePreloader();
    this.toggleMap();
    this.toggleTab();
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
  }
};

export default App;
