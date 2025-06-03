import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="splash"
export default class extends Controller {
  connect() {
    const hasSeenSplash = sessionStorage.getItem("splashSeen")

    // Only show splash screen on first visit to root
    if (!hasSeenSplash && window.location.pathname === "/") {
      setTimeout(() => {
        this.element.classList.add("hidden")
      }, 2000) // fade out after 2 seconds

      sessionStorage.setItem("splashSeen", "true")
    } else {
      this.element.remove()
    }
  }
}
