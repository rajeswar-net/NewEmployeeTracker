import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular2-datatable';

/* Employees Feature Module */
import { EmployeeComponent } from './employees.component';
import { EmployeeService } from './employee.service';
import { EmployeeResolve } from './employees-resolve.service';

/* Employees Router */
import { employeesRouting } from './employees.routing';

@NgModule({
    imports: [CommonModule, employeesRouting, DataTableModule],
    declarations: [EmployeeComponent],
    providers: [EmployeeService, EmployeeResolve]
})

export class EmployeeModule { }