import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["navbar"]

  connect() {
    this.toggleShadow = this.toggleShadow.bind(this)
    window.addEventListener("scroll", this.toggleShadow)
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
}
