import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular2-datatable';

/* Employees Feature Module */
import { EmployeeComponent } from './employees.component';
import { EmployeeService } from './employee.service';
import { EmployeeResolve } from './employees-resolve.service';

/* Employees Router */
import { employeesRouting } from './employees.routing';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    imports: [CommonModule, employeesRouting, DataTableModule, Ng2Bs3ModalModule,ReactiveFormsModule],
    declarations: [EmployeeComponent],
    providers: [EmployeeService, EmployeeResolve]
})

export class EmployeeModule { }