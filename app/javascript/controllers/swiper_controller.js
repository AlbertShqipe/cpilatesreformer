import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="swiper"
// If using Swiper from CDN (like you are), it's globally available as `Swiper`
export default class extends Controller {
  connect() {
    // Only initialize if element exists
    if (typeof Swiper !== "undefined") {
      new Swiper(this.element, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    } else {
      console.warn("Swiper is not loaded.");
    }

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 6000, // 6 seconds delay
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
