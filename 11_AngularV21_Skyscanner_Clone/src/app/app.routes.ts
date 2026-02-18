import { Routes } from '@angular/router';
import { App } from './app';
import { layout } from './layout/layout';
import { FlightResults } from './pages/flight-results/flight-results';
export const routes: Routes = [

    {
        path:'home',
        component:layout
    },
    {
        path:'flight_results',
        component:FlightResults
    },
    {
        path:'**',
        redirectTo:'/home',
        pathMatch:'full'
    }
];
