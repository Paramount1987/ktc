const Nav = {
    init() {
        this.mdVw = 1024
        this.$body = $('body');
        this.$window = $(window);
        this.$navBtn = $('.js-nav-btn');
        this.$navHeader = $('.js-header-nav');
        this.clickNavBtn();
        this.resizeHandle();
    },

    toggleNav() {
        this.$navBtn.toggleClass('is-active');
        this.$navHeader.toggleClass('is-open');
        this.$body.toggleClass('is-nav-open');
    },

    hideNav() {
        this.$navBtn.removeClass('is-active');
        this.$navHeader.removeClass('is-open');
        this.$body.removeClass('is-nav-open');
    },

    clickNavBtn() {
        this.$navBtn.click(() => {
            this.toggleNav();
        });
    },

    resizeHandle() {
        this.$window.resize(() => {
            if (window.matchMedia(`(min-width: ${this.mdVw}px)`).matches) {
                this.hideNav();
            }
        });
    }
};

export default Nav;
