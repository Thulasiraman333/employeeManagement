import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseModel, Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  employeeObj: any;
  getEmployeeList(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.API_URL + 'employees');
  }

  saveEmployee(empObj: Employee): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.API_URL + 'employees', empObj);
  }

  updateEmployee(empObj: Employee): Observable<ApiResponseModel> {
    return this.http.put<ApiResponseModel>(environment.API_URL + 'employees', empObj);
  }

  DeleteEmployee(empId: number): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(`${environment.API_URL}DeleteEmployee/${empId}`);
  }

  setEmpData(data: Employee) {
    this.employeeObj = data;
  }
} 
