"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_nvd3_1 = require("./ng2-nvd3");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_service_1 = require("./dashboard.service");
var dashboard_resolve_service_1 = require("./dashboard-resolve.service");
/* Dashboard Router */
var dashboard_routing_1 = require("./dashboard.routing");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [dashboard_routing_1.dashboardRouting],
            declarations: [dashboard_component_1.DashboardComponent, ng2_nvd3_1.nvD3],
            providers: [dashboard_service_1.DashboardService, dashboard_resolve_service_1.DashboardResolve]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map