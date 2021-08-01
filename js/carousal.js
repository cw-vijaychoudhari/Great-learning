
var Carousal = (function () {
  var carousalWrapper, carousalWrapperScroller, carousalItem, isMobile, carousalItemWidth, paginationCont, transform;
  function _setSelector() {
    carousalWrapper = document.querySelector(".carousel__item-wrapper");
    carousalWrapperScroller = document.querySelector(".carousel__item-wrapper--scroller");
    carousalItem = carousalWrapper.querySelectorAll(".carousel__item");
    isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    carousalItemWidth = carousalWrapperScroller.offsetWidth;
    paginationCont = document.querySelector(".carousel__pagination");
    transform = 0;
  } function addPagination(count) {
    var node = document.createElement("div");
    node.setAttribute("data-pag", "pagination-" + count);
    if (count === 0) {
      node.setAttribute("class", "active");
    }
    paginationCont.appendChild(node);
  }
  function intiallization() {
    for (let i = 0; i < carousalItem.length; i++) {
      carousalItem[i].style.width = carousalItemWidth + "px";
      addPagination(i);
    }
    carousalWrapper.style.width = carousalItemWidth * carousalItem.length + "px";
  }

  function handlePagination(value) {
    let paginationCount = Math.abs(value / carousalItemWidth);
    let activePagination = paginationCont.querySelector('.active');
    let currentPagination = document.querySelector('[data-pag="pagination-' + paginationCount + '"]');
    activePagination && activePagination.classList.remove("active");
    currentPagination && currentPagination.classList.add("active");
  }

  function handlePrevClick() {
    if (transform !== 0) {
      transform = transform + carousalItemWidth;
      carousalWrapper.style.transform = "translateX(" + transform + "px)";
      handlePagination(transform);
    }
  }

  function handleNextClick() {
    if (transform != (carousalItemWidth - carousalWrapper.offsetWidth)) {
      transform = transform - carousalItemWidth;
      carousalWrapper.style.transform = "translateX(" + transform + "px)";
      handlePagination(transform);
    }
  }

  function desktop() {
    let prevButton = document.querySelector(".carousel__button--prev");
    let nextButton = document.querySelector(".carousel__button--next");
    prevButton.addEventListener('click', handlePrevClick)
    nextButton.addEventListener('click', handleNextClick)
  }

  function mobile() {
    var startingX, movingX;
    carousalWrapperScroller.addEventListener('touchstart', function (event) {
      startingX = event.touches[0].clientX;
    });
    carousalWrapperScroller.addEventListener('touchmove', function (event) {
      movingX = event.touches[0].clientX;
    });
    carousalWrapperScroller.addEventListener('touchend', function () {
      if (startingX + 20 < movingX) {
        handlePrevClick();
      } else if (startingX - 20 > movingX) {
        handleNextClick();
      }
    });
  }

  function registerEvents() {
    _setSelector();
    intiallization();
    if (isMobile) {
      mobile();
    } else {
      desktop();
    }
  }
  return {
    registerEvents: registerEvents
  }
})();


window.addEventListener("load", function () {
  Carousal.registerEvents();
});







