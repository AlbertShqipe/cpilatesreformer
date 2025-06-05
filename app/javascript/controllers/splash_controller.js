import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="splash"
export default class extends Controller {
  connect() {
    const hasSeenSplash = sessionStorage.getItem("splashSeen")

    if (!hasSeenSplash && window.location.pathname === "/") {
      setTimeout(() => {
        this.hideSplash()
      }, 2000)

      sessionStorage.setItem("splashSeen", "true")
    } else {
      this.hideSplash(true)
    }
  }

  hideSplash(removeCompletely = false) {
    if (removeCompletely) {
      this.element.remove()
    } else {
      this.element.classList.add("hidden")
    }
  }
}
