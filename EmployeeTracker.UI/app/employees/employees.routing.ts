import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from "./employees.component";
import { EmployeeResolve} from "./employees-resolve.service";

const employeeRoutes: Routes = [
    {
        path: 'employees',
        component: EmployeeComponent,
        resolve: {
            employees: EmployeeResolve
        }
    }
];

export const employeesRouting = RouterModule.forChild(employeeRoutes);