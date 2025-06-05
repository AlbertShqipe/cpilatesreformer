// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import CalendarController from "./calendar_controller"

application.register("calendar", CalendarController)

eagerLoadControllersFrom("controllers", application)
