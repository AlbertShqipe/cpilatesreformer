// app/javascript/controllers/eversports_controller.js
import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="eversports"

export default class extends Controller {
  connect() {
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://widget-static.eversports.io/loader.js"
    document.head.appendChild(script)
  }
}
