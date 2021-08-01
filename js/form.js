var Form = (function () {
    var bannerForm, bannerName, bannerEmail, bannerMobileNo, bannerWE, bannerOrganization, bannerAutho, bannerSubmit
        , errorBoxEmail, errorBoxName, errorBoxMobileNo, errorBoxWE, errorBoxAutho, errorBoxOrganization;
    function _setSelector() {
        bannerForm = document.querySelector(".banner__form");
        bannerName = bannerForm.querySelector("#bannerName");
        bannerEmail = bannerForm.querySelector("#bannerEmail");
        bannerMobileNo = bannerForm.querySelector("#bannerMobileNo");
        bannerWE = bannerForm.querySelector("#bannerWE");
        bannerOrganization = bannerForm.querySelector("#bannerOrganization");
        bannerAutho = bannerForm.querySelector("#bannerAutho");
        bannerSubmit = bannerForm.querySelector("#bannerSubmit");
        errorBoxEmail = bannerEmail.nextElementSibling;
        errorBoxName = bannerName.nextElementSibling;
        errorBoxMobileNo = bannerMobileNo.nextElementSibling;
        errorBoxWE = bannerWE.nextElementSibling;
        errorBoxAutho = bannerAutho.nextElementSibling.nextElementSibling;
        errorBoxOrganization = bannerOrganization.nextElementSibling;
    }
    function validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
            return (true)
        }
        return (false)
    }
    function validatePhoneNo(inputtxt) {
        var phoneno = /^\d{10}$/;
        if ((inputtxt.value.match(phoneno))) {
            return true;
        }
        else {
            return false;
        }
    }
    function validateName(input) {
        var letters = /^[A-Za-z ]+$/;
        if (input.value.match(letters)) {
            return true;
        }
        else {
            return false;
        }
    }
    function handleSubmit() {
        if (validateEmail(bannerEmail)) {
            errorBoxEmail.classList.remove("active");
        } else {
            errorBoxEmail.classList.add("active");
        }
        if (validateName(bannerName)) {
            errorBoxName.classList.remove("active");
        } else {
            errorBoxName.classList.add("active");
        }
        if (validatePhoneNo(bannerMobileNo)) {
            errorBoxMobileNo.classList.remove("active");
        } else {
            errorBoxMobileNo.classList.add("active");
        }
        if (bannerWE.value != 0) {
            errorBoxWE.classList.remove("active");
        } else {
            errorBoxWE.classList.add("active");
        }
        if (bannerOrganization.value) {
            errorBoxOrganization.classList.remove("active");
        } else {
            errorBoxOrganization.classList.add("active");
        }
        if (bannerAutho.value === "on") {
            errorBoxAutho.classList.remove("active");
        } else {
            errorBoxAutho.classList.add("active");
        }
        if (!(bannerForm.querySelector(".active"))) {
            localStorage.setItem("Email", bannerEmail.value);
            localStorage.setItem("Name", bannerName.value);
            localStorage.setItem("MobileNo", bannerMobileNo.value);
            localStorage.setItem("Work Experience", bannerWE.value);
            localStorage.setItem("Organization", bannerOrganization.value);
            localStorage.setItem("Authorization", bannerAutho.value);
        }
    }

    function registerEvents() {
        _setSelector()
        bannerSubmit.addEventListener("click", handleSubmit);
    }
    return {
        registerEvents: registerEvents
    }
})();


window.addEventListener("load", function () {
    Form.registerEvents();
});