
// accordion 

var Accordian = (function () {
    var accordionwrapper;
    function _setSelector() {
        accordionwrapper = document.querySelectorAll(".curriculum__accordion-wrapper");
    }
    function handleClick() {
        accordionwrapper.forEach(wrapper => {
            let accordionItem = wrapper.querySelectorAll(".curriculum__accordion-item");
            accordionItem.forEach(element => {
                element.addEventListener("click", function () {
                    if (this.classList.contains("active")) {
                        this.classList.remove("active");
                    } else {
                        var activeElement = wrapper.querySelector(".active");
                        activeElement && activeElement.classList.remove("active");
                        this.classList.add("active");
                    }
                })
            });
        });
    }
    function registerEvents() {
        _setSelector();
        handleClick();
    }
    return {
        registerEvents: registerEvents
    }
})();


window.addEventListener("load", function () {
    Accordian.registerEvents();
});