import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/RX";
import { Employee } from "./employee.model";

@Injectable()
export class EmployeeService {

    private url = 'http://localhost/employee-tracker-api/api/employees';

    constructor(private http: Http) { }

    getList(): Observable<Employee[]> {
        return this.http.get(this.url)
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