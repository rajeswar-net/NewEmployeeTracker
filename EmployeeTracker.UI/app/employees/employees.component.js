"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var employee_service_1 = require("./employee.service");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(route, fb, _employeeService) {
        this.route = route;
        this.fb = fb;
        this._employeeService = _employeeService;
        this.title = 'Employees';
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.employeeFrm = this.fb.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: [''],
            Gender: ['', forms_1.Validators.required],
            Office: [''],
            Position: ['']
        });
        this.employees = this.route.snapshot.data['employees'];
        //this.getOffices();
    };
    EmployeeComponent.prototype.addEmployee = function () {
        this.SetControlsState(true);
        this.AddEmpTitle = "Add New Employee";
        this.modalBtnTitle = "Add";
        this.employeeFrm.reset();
        this.getOffices();
        this.getPositions();
        this.modal.open();
    };
    EmployeeComponent.prototype.getOffices = function () {
        var _this = this;
        this._employeeService.getOfficeList().subscribe(function (res) { return _this.offices = res; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeComponent.prototype.getPositions = function () {
        var _this = this;
        this._employeeService.getPositionList().subscribe(function (res) { return _this.positions = res; }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.employeeFrm.enable() : this.employeeFrm.disable();
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], EmployeeComponent.prototype, "modal", void 0);
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'et-employee',
            templateUrl: '/app/employees/employees.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, forms_1.FormBuilder, employee_service_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employees.component.js.map