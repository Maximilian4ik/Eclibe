$(document).ready(function () {
  $(" ").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function () {
  $("#top_scroll").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$(".burger_menu").click(function (e) {
  e.preventDefault();
  // $(this).toggleClass("active");
  $(".mobile_menu").addClass("mob_menu_active");
  $("html").addClass("active");
});

$(".close").click(function (e) {
  e.preventDefault();
  // $(this).toggleClass("active");
  $(".mobile_menu").addClass("mob_menu_active");
  $(".mobile_menu").removeClass("mob_menu_active");
  $("html").removeClass("active");
});

// Закрыть меню
// const closeBtn = document.querySelector(".close");
// const mobileMenu = document.querySelector(".mobile_menu");
// closeBtn.addEventListener("click", function () {
//   mobileMenu.style.display = "none";
// });

const showButton = document.getElementById("showDiv");
const hideButton = document.getElementById("dontshowDiv");
const hiddenElements = document.querySelectorAll(".portfolio_card_hidden");

showButton.addEventListener("click", () => {
  hiddenElements.forEach((element) => {
    element.style.display = "flex";
  });

  showButton.style.display = "none";
  hideButton.style.display = "block";
});

hideButton.addEventListener("click", () => {
  hiddenElements.forEach((element) => {
    element.style.display = "none";
  });

  showButton.style.display = "block";
  hideButton.style.display = "none";
});

// const menuLinks = document.querySelectorAll(".menu_link");
// menuLinks.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     menuLinks.forEach((otherLink) =>
//       otherLink.classList.remove("menu_item_active")
//     );
//     link.classList.add("menu_item_active");
//   });
// });

const menuLinks = document.querySelectorAll(".menu_link");
menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    menuLinks.forEach((otherLink) =>
      otherLink.classList.remove("menu_item_active")
    );
    link.classList.add("menu_item_active");

    // Добавляем обработчик события beforeunload
    window.addEventListener("beforeunload", () => {
      link.classList.add("menu_item_active");
    });

    // Переход на другую страницу
    window.location.href = link.href;
  });
});

// Call_popup
// const callPopupLink = document.getElementById('call_btn');
// const closePopupLink = document.querySelector('.close_call_popup');
// const callPopupWrapper = document.querySelector('.call_popup_wrapper');

// callPopupLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   callPopupWrapper.style.display = 'block';
// });

// closePopupLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   callPopupWrapper.style.display = 'none';
// });

// document.addEventListener('click', function(event) {
//   if (!callPopupWrapper.contains(event.target)) {
//     callPopupWrapper.style.display = 'none';
//   }
// });

// Сall_popup_end

//--------Popup

$(".call_button").magnificPopup({
  src: "#call_popup",
  type: "inline",
});

$(".test-popup-link").magnificPopup({
  type: "image",
  gallery: {
    // options for gallery
    enabled: true,
  },
});

$(".button").magnificPopup({
  src: "#tooltip-block",
  type: "inline",
});

// $(".site_content_card_question").magnificPopup({
//   src: "#hidden",
//   type: "inline",
// });

//--------
new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 40,
  autoHeight: false,
  direction: "horizontal",

  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    701: {
      slidesPerView: 2,
    },
    852: {
      slidesPerView: 3,
    },
    1183: {
      slidesPerView: 4,
    },
  },
});

// -----------Slick slider----------------------

$(document).ready(function () {
  $(".blocknote_slider_items").slick({
    slidesToShow: 1,
  });

  var slider = $(".blocknote_slider_items");
  $(".sl-count__total").text(slider.slick("getSlick").slideCount);
  $(".blocknote_slider_items").on(
    "afterChange",
    function (event, slick, currentSlide) {
      $(".sl-count__current").text(currentSlide + 1);
    }
  );
  slider.on("afterChange", function (event, slick, currentSlide) {
    $(".development_link").removeClass("development_active");
    $('.development_link[data-num="' + currentSlide + '"]').addClass(
      "development_active"
    );
  });

  // $(".development_list ol li a").click(function (e) {
  //   e.preventDefault();
  //   slideIndex = $(this).index();
  //   $(".blocknote_slider_item").slick("slickGoTo", slideIndex, true);
  // });

  $(".development_list ol li a").click(function (e) {
    e.preventDefault();
    var numslide = $(this).attr("data-num");
    $(".blocknote_slider_items").slick("slickGoTo", numslide, true);
  });
});

// ---------slickGoTO---------\\

// $(".development_list a").click(function (e) {
//   e.preventDefault();
//   var numslide = $(this).attr("data-num");
//   $(".blocknote_slider_items").slick("slickGoTo", numslide, True);
// });

const development_link = document.querySelectorAll(".development_link");
development_link.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    development_link.forEach((otherLink) =>
      otherLink.classList.remove("development_active")
    );
    link.classList.add("development_active");
  });
});

// tooltip
// const tooltips = document.querySelectorAll('.tooltip');

// tooltips.forEach(tooltip => {
//   tooltip.addEventListener('click', () => {
//     tooltip.classList.toggle('tooltip-active');
//   });
// });

// Получаем спан и блок по их id и data-id

// const span = document.querySelector('span[data-tooltip="tooltip"]');
// const block = document.getElementById("tooltip-block");

// span.addEventListener("click", function () {
//   if (block.style.display === "none") {
//     block.style.display = "flex";
//   } else {
//     block.style.display = "none";
//   }
// });

let span = document.querySelectorAll('span[data-tooltip="tooltip"]'),
  index,
  button;
const block = document.getElementById("tooltip-block");

for (index = 0; index < span.length; index++) {
  button = span[index];
  button.addEventListener("click", clickSpan);
}

function clickSpan(event) {
  event.preventDefault();
  if (block.style.display === "none") {
    block.style.display = "flex";
  } else {
    block.style.display = "none";
  }
}

// close tooltlip

let tooltipClose = document.getElementById("tooltip_close");
let tooltipBlock = document.getElementById("tooltip-block");

tooltipClose.addEventListener("click", function (event) {
  event.preventDefault();
  tooltipBlock.style.display = "none";
});

$(document).mouseup(function (e) {
  var container = $(".tooltip-block");
  if (container.has(e.target).length === 0) {
    container.hide();
  }
});
// const question = document.getElementById('question');
// const tooltipBlock = document.getElementById('tooltip-block');

// question.addEventListener('click', function() {
//   if (tooltipBlock.style.display === 'none') {
//     tooltipBlock.style.display = 'block';
//   } else {
//     tooltipBlock.style.display = 'none';
//   }
// });
