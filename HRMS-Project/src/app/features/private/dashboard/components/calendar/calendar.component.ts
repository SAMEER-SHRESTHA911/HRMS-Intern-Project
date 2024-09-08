import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Store } from '@ngrx/store';
import { CalenderState } from '../../store/calender/calender.reducer';
import { Observable, of } from 'rxjs';
import { ICalenderResponseData } from '../../types/calender';
import { fetchCalenderData } from '../../store/calender/calender.actions';
import { formatDate } from '@shared/utils/date-utils';
import { selectCalenderData } from '../../store/calender/calender.selector';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  profileId = localStorage.getItem('employeeId');
  employeeData = [
    {
      date: '2024-09-10',
      checkin: '09:00:00',
      checkout: '18:00:00',
    },
    {
      date: '2024-09-13',
      checkin: '10:00:00',
      checkout: '17:00:00',
    },
    {
      date: '2024-09-20',
      checkin: '08:30:00',
      checkout: '16:30:00',
    },
    {
      date: '2024-09-21',
      checkin: '08:30:00',
      checkout: '16:30:00',
    },
  ];

  events = this.employeeData.flatMap((emp) => [
    {
      start: `${emp.date}T${emp.checkin}`,
      className: this.getCheckinClass(emp.checkin),
    },
    {
      start: `${emp.date}T${emp.checkout}`,
      className: this.getCheckoutClass(emp.checkout),
    },
  ]);

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin],
    events: this.events,
    lazyFetching: true,
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    },
    eventColor: 'transparent',
  };

  getCheckinClass(checkinTime: string): string {
    const checkinDate = new Date(`1970-01-01T${checkinTime}`);
    const limit = new Date(`1970-01-01T09:05:00`);
    return checkinDate > limit ? 'checkin-late' : 'checkin-on-time';
  }

  getCheckoutClass(checkoutTime: string): string {
    const checkoutDate = new Date(`1970-01-01T${checkoutTime}`);
    const limit = new Date(`1970-01-01T18:00:00`);
    return checkoutDate < limit ? 'checkout-early' : 'checkout-on-time';
  }
  calandarData$: Observable<ICalenderResponseData[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);

  constructor(private store: Store<CalenderState>) {}

  ngOnInit(): void {
    this.calandarData$ = this.store.select(selectCalenderData);
    this.store.dispatch(
      fetchCalenderData({
        id: this.profileId,
        data: {
          startingCheckInDate: '2024-08-01',
          endCheckInDate: formatDate(new Date()),
          skip: 0,
          take: 100,
          sort: {
            sortBy: 'Asc',
          },
        },
      })
    );
    this.calandarData$.subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
