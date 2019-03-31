const App = {
  init() {
    this.hidePreloader();
    this.toggleMap();
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
  }
};

export default App;
