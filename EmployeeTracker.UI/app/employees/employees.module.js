"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular2_datatable_1 = require("angular2-datatable");
/* Employees Feature Module */
var employees_component_1 = require("./employees.component");
var employee_service_1 = require("./employee.service");
var employees_resolve_service_1 = require("./employees-resolve.service");
/* Employees Router */
var employees_routing_1 = require("./employees.routing");
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, employees_routing_1.employeesRouting, angular2_datatable_1.DataTableModule],
            declarations: [employees_component_1.EmployeeComponent],
            providers: [employee_service_1.EmployeeService, employees_resolve_service_1.EmployeeResolve]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employees.module.js.map