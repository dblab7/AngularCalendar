import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { CalendarWeekComponent } from './calendar-week/calendar-week.component';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { CalendarToDoListComponent } from './calendar-to-do-list/calendar-to-do-list.component';
import { CalendarMainComponent } from './calendar-main.component';
const CalendarContent_Router: Routes = [
    {
        path: 'calendar',
        component: CalendarMainComponent,
        children: [
            { path: '', component: CalendarMonthComponent},
            { path: 'day', component: CalendarDayComponent },
            { path: 'week', component: CalendarWeekComponent },
            { path: 'month', component: CalendarMonthComponent },
            { path: 'to-do-list', component: CalendarToDoListComponent},
            { path : '**', component: CalendarDayComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(CalendarContent_Router)],
    exports: [RouterModule]
})
export class CalendarRoutingModule {} 