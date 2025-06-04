import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="reserve-btn"
export default class extends Controller {
  connect() {
    const isHomePage = window.location.pathname === "/";
    const isMobile = window.innerWidth < 768;

    const reserveBtnDesktop = document.getElementById("reserve_btn_desktop");
    const reserveBtnMobile = document.getElementById("reserve_btn_mobile");
    const heroTarget = document.querySelector(".hero__btn");

    // === Desktop Button Logic ===
    if (reserveBtnDesktop) {
      if (isMobile) {
        reserveBtnDesktop.classList.add("d-none");
      } else if (isHomePage && heroTarget) {
        const desktopObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              reserveBtnDesktop.classList.add("d-none");
            } else {
              reserveBtnDesktop.classList.remove("d-none");
            }
          });
        }, {
          root: null,
          rootMargin: "0px 0px -91px 0px",
          threshold: 1
        });

        desktopObserver.observe(heroTarget);
      } else {
        // Always visible on non-homepage
        reserveBtnDesktop.classList.remove("d-none");
      }
    }

    // 📱 MOBILE logic
    if (isHomePage && heroTarget) {
      setTimeout(() => {
        // === Show/hide logic for reserveBtnMobile ===
        const mobileObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            reserveBtnMobile?.classList.toggle("d-none", entry.isIntersecting);
          });
        }, {
          root: null,
          rootMargin: "0px 0px -91px 0px",
          threshold: 0
        });

        mobileObserver.observe(heroTarget);

        // === Adjust position near footer ===
        const footer = document.querySelector("footer");

        if (footer && reserveBtnMobile) {
          const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              reserveBtnMobile.style.bottom = entry.isIntersecting ? "117px" : "20px";
            });
          }, {
            root: null,
            threshold: 0
          });

          footerObserver.observe(footer);
        }

      }, 100);
    } else {
      reserveBtnMobile?.classList.remove("d-none");
    }

    if (isMobile) {
      reserveBtnDesktop?.classList.add("d-none");
    }
  }
}
