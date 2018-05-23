import { Routes, RouterModule } from "@angular/router";

import { DashboardResolve } from "./dashboard-resolve.service";

import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        resolve: {
            dashboard: DashboardResolve

        }
    }
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);