import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="calendar"
export default class extends Controller {
  static targets = ["popup", "popupText"]

  connect() {
    var calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: window.innerWidth < 768 ? 'listWeek' : 'dayGridMonth',
      events: this.classSchedule(),
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      },
      // headerToolbar: {
      //   left: '',
      //   center: 'title', // center title only
      //   right: ''
      // },
      // titleFormat: { text: 'Cours Collectifs' },
      eventClick: function(info) {
        const overlay = document.getElementById('calendar-popup-overlay');
        const popupText = document.getElementById('popup-text');

        const date = info.event.start.toLocaleDateString('fr-FR');
        const time = info.event.start.toTimeString().substring(0, 5);
        const title = 'Cours collectif';
        const link = `https://samadhi-lyon.fr/pilates#calendar`;

        popupText.innerHTML = `
          <div class="text-center">
            <strong>${title}</strong><br>
            📅 ${date}<br>
            🕒 ${time}<br><br>
            <a href="${link}" class="btn-reserve">Réserver</a>
          </div>
        `;

        overlay.classList.remove('hidden');
      }
    });

    calendar.render();

    this.handleOutsideClick = this._handleOutsideClick.bind(this);
    document.addEventListener('click', this.handleOutsideClick);
  }

  classSchedule() {
    const weekly = [
      // Monday
      { daysOfWeek: [1], time: '09:00' },
      { daysOfWeek: [1], time: '10:00' },
      { daysOfWeek: [1], time: '12:30' },
      { daysOfWeek: [1], time: '18:30' },
      { daysOfWeek: [1], time: '19:30' },

      // Tuesday
      { daysOfWeek: [2], time: '09:00' },
      { daysOfWeek: [2], time: '14:00' },
      { daysOfWeek: [2], time: '17:30' },
      { daysOfWeek: [2], time: '18:30' },
      { daysOfWeek: [2], time: '19:30' },

      // Wednesday
      { daysOfWeek: [3], time: '17:30' },
      { daysOfWeek: [3], time: '18:30' },
      { daysOfWeek: [3], time: '19:30' },

      // Thursday
      { daysOfWeek: [4], time: '09:00' },
      { daysOfWeek: [4], time: '10:00' },
      { daysOfWeek: [4], time: '12:30' },
      { daysOfWeek: [4], time: '18:30' },
      { daysOfWeek: [4], time: '19:30' },

      // Friday
      { daysOfWeek: [5], time: '09:00' },
      { daysOfWeek: [5], time: '12:30' },

      // Saturday
      { daysOfWeek: [6], time: '10:00' },
      { daysOfWeek: [6], time: '11:15' },
    ];

    return weekly.map((item, index) => ({
      id: index,
      title: '',
      daysOfWeek: item.daysOfWeek,
      startTime: item.time,
      endTime: this.addMinutes(item.time, 55),
      startRecur: new Date().toISOString().split('T')[0]
    }));
  }

  addMinutes(timeStr, mins) {
    const [h, m] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(h);
    date.setMinutes(m + mins);
    return date.toTimeString().substring(0, 5);
  }

  closePopup() {
    const overlay = document.getElementById('calendar-popup-overlay');
    if (overlay) overlay.classList.add('hidden');
  }

  disconnect() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  _handleOutsideClick(event) {
    const overlay = document.getElementById('calendar-popup-overlay');
    const popup = document.getElementById('calendar-popup');

    if (!overlay || overlay.classList.contains('hidden')) return;

    const isClickInsidePopup = popup.contains(event.target);
    const isCalendarClick = event.target.closest('.fc') !== null;

    if (!isClickInsidePopup && !isCalendarClick) {
      overlay.classList.add('hidden');
    }
  }
}
