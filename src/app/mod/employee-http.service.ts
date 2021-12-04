import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dataset {
    label: string
    data: number[]
    backgroundColor: string[]
}

export interface InsuranceGraphObject {
  code: number
  status: string
  nombresEPS: Object[]
  empleados: Object[]

}

export interface Employee {
  Nombre_emp: string
  Cargo: string
  Fecha_ingreso: string
  EPS: string
  ARL: string
  Fondo_pension: string
  Sueldo: string
  nombre_dep: string
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {
  employees: Employee[] = new Array(0)
  constructor(private http: HttpClient) { }

  getAllEmployees(order: string): Observable<Employee[]> {
    let url = <String>'http://127.0.0.1:8000/employes?json={\"orden\":\"{0}\"}'
    return this.http.post<Employee[]>(url.replace('{0}', order), "")
  }

  getEmployeesByDependency(order: string): Observable<Employee[]> {
    let url = <String>'http://127.0.0.1:8000/employes/dependence?json={\"orden\":\"{0}\"}'
    return this.http.post<Employee[]>(url.replace('{0}', order), "")
  }

  getEmployeesByPositionByDependency(order: string): Observable<Employee[]> {
    let url = <String>'http://127.0.0.1:8000/employes/dependence/charge?json={\"orden\":\"{0}\"}'
    return this.http.post<Employee[]>(url.replace('{0}', order), "")
  }
  
  getEmployeesByInsuranceCount(order: string): Observable<Employee[]> {
    let url = <String>'http://127.0.0.1:8000/frecuencia-eps?json={\"orden\":\"{0}\"}'
    return this.http.get<Employee[]>(url.replace('{0}', order))
  }

  getEmployeesByAllowanceCount(order: string): Observable<Employee[]> {
    let url = <String>'http://127.0.0.1:8000/?json={\"orden\":\"{0}\"}'
    return this.http.get<Employee[]>(url.replace('{0}', order))
  }

  getEmployeesInsuranceGraphObject(): Observable<InsuranceGraphObject> {
    return this.http.get<InsuranceGraphObject>('http://127.0.0.1:8000/frecuencia-eps')
  }
  
  getEmployeesAllowanceCountObject(): Observable<InsuranceGraphObject> {
    return this.http.get<InsuranceGraphObject>('http://127.0.0.1:8000/frecuencia-pension')
  }
}
