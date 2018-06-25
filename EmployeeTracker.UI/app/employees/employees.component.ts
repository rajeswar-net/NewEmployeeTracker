import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ModalComponent } from "ng2-bs3-modal/ng2-bs3-modal";

import { Employee } from "./employee.model";
import { Office } from "./office.model";
import { Position } from "./position.model";
import { EmployeeService } from "./employee.service";
//import { INgxMyDpOptions } from "ngx-mydatepicker"
@Component({
    selector: 'et-employee',
    templateUrl: '/app/employees/employees.component.html'
})
export class EmployeeComponent implements OnInit {
    @ViewChild('modal') modal: ModalComponent;
    Employee: Employee;
    employeeFrm: FormGroup;
    AddEmpTitle: string;
    modalBtnTitle: string;
    dbops: string;

    //public startDatePickerOptions: INgxMyDpOptions = {
    //    // other options...
    //    dateFormat: 'dd.mm.yyyy',
    //};
    errorMessage: string;
    title = 'Employees';
    employees: Employee[];
    positions: Position[];
    offices: Office[];
    newEmployee: Employee[];
    constructor(private route: ActivatedRoute, private fb: FormBuilder, private _employeeService: EmployeeService) { }
    ngOnInit() {
        this.employeeFrm = this.fb.group({
            Id: [''],
            FirstName: ['', Validators.required],
            LastName: [''],
            Sex: ['', Validators.required],
            StartDate: ['', Validators.required],
            Age: ['', Validators.required],
            Salary: ['', Validators.required],
            Office: ['', Validators.required],
            Position: ['', Validators.required]
        });

        this.employees = this.route.snapshot.data['employees'];
        //this.getOffices();
    }

    addEmployee() {
        this.dbops = "create";
        this.SetControlsState(true);
        this.AddEmpTitle = "Add New Employee";
        this.modalBtnTitle = "Add";
        this.employeeFrm.reset();
        this.getOffices();
        this.getPositions();
        this.modal.open();
    }

    getOffices() {
        this._employeeService.getOfficeList().subscribe(res => this.offices = res, error => this.errorMessage = <any>error);
    }
    getPositions() {
        this._employeeService.getPositionList().subscribe(res => this.positions = res, error => this.errorMessage = <any>error);
    }
    SetControlsState(isEnable: boolean) {
        isEnable ? this.employeeFrm.enable() : this.employeeFrm.disable();
    }
    getEmployees() {
        this._employeeService.getList().subscribe(res => this.employees = res, error => this.errorMessage = <any>error);
    }
    onSubmit(formData: any) {
        switch (this.dbops) {
            case "create":
                this._employeeService.addEmployee(this.employeeFrm.value).subscribe(res => this.newEmployee = res.json(), error => this.errorMessage = <any>error);
                alert(this.newEmployee);
                this.modal.dismiss();
                break;
        }
    }
}