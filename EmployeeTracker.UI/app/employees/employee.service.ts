import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/RX";
import { Employee } from "./employee.model";
import { Office } from "./office.model";
import { Position } from "./position.model";


@Injectable()
export class EmployeeService {

    private url = 'http://localhost/employee-tracker-api/api';

    constructor(private http: Http) { }

    getList(): Observable<Employee[]> {
        return this.http.get(this.url + '/employees')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getOfficeList(): Observable<Office[]> {
        return this.http.get(this.url + '/offices')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPositionList(): Observable<Position[]> {
        return this.http.get(this.url + '/positions')
            .map(this.extractData)
            .catch(this.handleError);
    }

    addEmployee(model: any): Observable<any> {

        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers })
        return this.http.post(this.url + '/employees', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        var data = res.json();
        
        return data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}