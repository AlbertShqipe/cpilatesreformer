import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="calendar"
export default class extends Controller {
  static targets = ["popup", "popupText"]

  connect() {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;

    const calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'fr',
      initialView: window.innerWidth < 768 ? 'listWeek' : 'dayGridMonth',
      buttonText: {
        today: 'Aujourd’hui',
        month: 'Mois',
        week: 'Semaine',
        day: 'Jour',
        list: 'Liste'
      },

      // ✅ Optional: Make title look like "Juin 2025"
      titleFormat: { year: 'numeric', month: 'long' },

      // ✅ Capitalize weekday headers like "Lundi"
      dayHeaderFormat: { weekday: 'long' },

      events: this.classSchedule(),
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      },

      eventClick: function(info) {
        const overlay = document.getElementById('calendar-popup-overlay');
        const popupText = document.getElementById('popup-text');

        const date = info.event.start.toLocaleDateString('fr-FR');
        const time = info.event.start.toTimeString().substring(0, 5);
        const teacher = info.event.extendedProps.teacher || 'Professeur';
        const image = info.event.extendedProps.image || 'default.jpg';
        const title = 'Cours collectif';
        const link = `https://samadhi-lyon.fr/pilates#calendar`;

        popupText.innerHTML = `
          <div class="text-center" style="margin: auto; padding: 20px; background: rgb(241, 241, 241); border-radius: 12px;">
            <strong>${title}</strong><br><br>
            <img src="/assets/${image}" alt="${teacher}" class="teacher-img"><br>
            ${teacher}<br>
            ${date}<br>
            ${time}<br><br>
            <a href="${link}" class="btn-reserve">Réserver</a>
          </div>
        `;

        overlay.classList.remove('hidden');
      }
    });

    calendar.render();

    // Close popup on outside click
    this.handleOutsideClick = this._handleOutsideClick.bind(this);
    document.addEventListener('click', this.handleOutsideClick);
  }

  classSchedule() {
    const weekly = [
      // Monday (Lundi)
      { daysOfWeek: [1], time: '09:00', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg' },
      { daysOfWeek: [1], time: '10:00', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [1], time: '12:30', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [1], time: '18:30', teacher: 'Oksana Boiko', image: 'oksana-5c2d3e3d3e3ae70863c45898958cf5586815fa525a330d9023c9eb42e9687168.png' },
      { daysOfWeek: [1], time: '19:30', teacher: 'Oksana Boiko', image: 'oksana-5c2d3e3d3e3ae70863c45898958cf5586815fa525a330d9023c9eb42e9687168.png' },

      // Tuesday (Mardi)
      { daysOfWeek: [2], time: '09:00', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [2], time: '14:00', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [2], time: '17:30', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [2], time: '18:30', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [2], time: '19:30', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },

      // Wednesday (Mercredi)
      { daysOfWeek: [3], time: '17:30', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [3], time: '18:30', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [3], time: '19:30', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },

      // Thursday (Jeudi)
      { daysOfWeek: [4], time: '09:00', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [4], time: '10:00', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [4], time: '12:30', teacher: 'Oksana Boiko', image: 'oksana-5c2d3e3d3e3ae70863c45898958cf5586815fa525a330d9023c9eb42e9687168.png'  },
      { daysOfWeek: [4], time: '18:30', teacher: 'Astrid Colomb-Bouvard', image: 'astrid-cb7d91b0a4e4eea2801a453d9caf5b3f900f4626bc07490dc76f76b3be0aa969.png' },
      { daysOfWeek: [4], time: '19:30', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },

      // Friday (Vendredi)
      { daysOfWeek: [5], time: '09:00', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [5], time: '12:30', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },

      // Saturday (Samedi)
      { daysOfWeek: [6], time: '10:00', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
      { daysOfWeek: [6], time: '11:15', teacher: 'Chiara Paperini', image: 'chiara_profile-c37f375bedd3fbd7ca2d40b163dc7c993a3096b5bfa5652f7ab9c50c258a4c2b.jpeg'  },
    ];

    return weekly.map((item, index) => ({
      id: index,
      title: `${item.teacher}`,
      daysOfWeek: item.daysOfWeek,
      startTime: item.time,
      endTime: this.addMinutes(item.time, 55),
      startRecur: new Date().toISOString().split('T')[0],
      extendedProps: {
        teacher: item.teacher,
        image: item.image
      }
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
