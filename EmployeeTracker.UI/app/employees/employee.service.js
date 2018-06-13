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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var RX_1 = require("rxjs/RX");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = 'http://localhost/employee-tracker-api/api';
    }
    EmployeeService.prototype.getList = function () {
        return this.http.get(this.url + '/employees')
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmployeeService.prototype.getOfficeList = function () {
        return this.http.get(this.url + '/offices')
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmployeeService.prototype.getPositionList = function () {
        return this.http.get(this.url + '/positions')
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmployeeService.prototype.extractData = function (res) {
        var data = res.json();
        return data || {};
    };
    EmployeeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return RX_1.Observable.throw(errMsg);
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map