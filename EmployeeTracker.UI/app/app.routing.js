"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var appRoutes = [
    // 1st Route
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // 2nd Route
    { path: 'employees', redirectTo: '/employees' },
    // 3rd Route
    { path: '**', redirectTo: '/dashboard' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map