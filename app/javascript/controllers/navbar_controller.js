import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["navbar", "burger", "menu"]

  connect() {
    this.toggleShadow = this.toggleShadow.bind(this)
    window.addEventListener("scroll", this.toggleShadow)

    // Ensure the burger and menu are reset when the page loads
    this.burgerTarget.classList.remove("active")
    this.menuTarget.classList.remove("open")
  }

  disconnect() {
    window.removeEventListener("scroll", this.toggleShadow)
  }

  toggleShadow() {
    if (window.scrollY > 0) {
      this.navbarTarget.classList.add("shadow-elevation")
    } else {
      this.navbarTarget.classList.remove("shadow-elevation")
    }
  }

  toggle() {
    this.burgerTarget.classList.toggle("active")
    this.menuTarget.classList.toggle("open") // Bootstrap uses 'show' to toggle collapse
  }

  close() {
    this.burgerTarget.classList.remove("active")
    this.menuTarget.classList.remove("open")
  }
}
