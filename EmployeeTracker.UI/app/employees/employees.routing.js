"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var employees_component_1 = require("./employees.component");
var employees_resolve_service_1 = require("./employees-resolve.service");
var employeeRoutes = [
    {
        path: 'employees',
        component: employees_component_1.EmployeeComponent,
        resolve: {
            employees: employees_resolve_service_1.EmployeeResolve
        }
    }
];
exports.employeesRouting = router_1.RouterModule.forChild(employeeRoutes);
//# sourceMappingURL=employees.routing.js.map