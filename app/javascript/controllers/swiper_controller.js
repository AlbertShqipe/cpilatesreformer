import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="swiper"
// If using Swiper from CDN (like you are), it's globally available as `Swiper`
export default class extends Controller {
  connect() {
    if (typeof Swiper === "undefined") {
      console.warn("Swiper is not loaded.");
      return;
    }

    // Check if it's a studio carousel or a review carousel
    if (this.element.classList.contains("studio__carousel")) {
      new Swiper(this.element, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 1000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: this.element.querySelector(".swiper-button-next"),
          prevEl: this.element.querySelector(".swiper-button-prev")
        },
        pagination: {
          el: this.element.querySelector(".swiper-pagination"),
          clickable: true,
        }
      });
    }

    if (this.element.classList.contains("review__carousel")) {
      new Swiper(this.element, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        loopAdditionalSlides: 0,
        centeredSlides: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        pagination: {
          el: this.element.querySelector(".swiper-pagination"),
          clickable: true,
        },
        navigation: {
          nextEl: this.element.querySelector(".swiper-button-next"),
          prevEl: this.element.querySelector(".swiper-button-prev")
        }
      });
    }
  }
}
