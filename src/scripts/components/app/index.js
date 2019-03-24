const App = {
    init() {
        this.hidePreloader();
    },

    hidePreloader() {
        $('#preloader').fadeOut(300);
    }
}

export default App;
