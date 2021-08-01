
// accordion 

var FooterScroll = (function () {
    var footer, bannerForm, footerButton;
    function _setSelector() {
        footer = document.querySelector(".js-sticky-footer");
        bannerForm = document.querySelector(".banner__form");
        footerButton = footer.querySelector(".footer__button");
    }
    function handleViewport(elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    function handleScroll() {
        if (handleViewport(bannerForm)) {
            footer.classList.remove("active")
        } else {
            footer.classList.add("active")
        }

    }
    function handleButtonClick() {
        bannerForm.scrollIntoView()
    }
    function registerEvents() {
        _setSelector();
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        footerButton.addEventListener('click', handleButtonClick);
    }
    return {
        registerEvents: registerEvents
    }
})();


window.addEventListener("load", function () {
    FooterScroll.registerEvents();
});