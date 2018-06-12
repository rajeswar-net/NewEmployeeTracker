import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Employee } from "./employee.model";

@Component({
    selector: 'et-employee',
    templateUrl:'/app/employees/employees.component.html'
})
export class EmployeeComponent implements OnInit {
    errorMessage: string;
    title = 'Employees';
    employees: Employee[];
    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
        this.employees = this.route.snapshot.data['employees'];
    }


}