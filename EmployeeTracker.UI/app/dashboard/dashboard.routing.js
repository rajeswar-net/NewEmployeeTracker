"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_resolve_service_1 = require("./dashboard-resolve.service");
var dashboard_component_1 = require("./dashboard.component");
var dashboardRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        resolve: {
            dashboard: dashboard_resolve_service_1.DashboardResolve
        }
    }
];
exports.dashboardRouting = router_1.RouterModule.forChild(dashboardRoutes);
//# sourceMappingURL=dashboard.routing.js.map