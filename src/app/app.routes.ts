import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './static_app/about/about.component';
import { CourcesComponent } from './static_app/cources/cources.component';
import { TrainersComponent } from './static_app/trainers/trainers.component';
import { EventsComponent } from './static_app/events/events.component';
import { PricingComponent } from './static_app/pricing/pricing.component';
import { ContactusComponent } from './static_app/contactus/contactus.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'courses', component: CourcesComponent },
    { path: 'trainers', component: TrainersComponent },
    { path: 'events', component: EventsComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'contactus', component: ContactusComponent },
//  { path: 'prime', component: TablePrimeComponent },

    { path: '', component: AppComponent }
];
