import { Injectable } from '@angular/core';
import { Employee } from './employee-http.service'
import { Dataset } from './employee-http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  employees: Employee[] = new Array(0)

  constructor() { }

  setAllEmployees(employees: Employee[]) {
    this.employees = employees
    this.formatSalary()
  }

  getAllEmployees() {
    return this.employees
  }

  pushEmployee(employee: Employee) {
    if (this.employees.length == 1) {
      this.employees[0] = employee
    } else {
      this.employees.push(employee)
    }
  }

  getEmployee(index: number) {
    if (index < this.employees.length) {
      return this.employees[index]
    } else {
      return null
    }
  }

  /* getEmployeeByCode(id: number) {
    for (let count: number = 0; count < this.employees.length; count++) {
      this.employees[count]
      if (this.employees[count].id == id) {
        return this.employees[count]
      }
    }
    return null
  } */

  /* getEmployeeIndex(employee: Employee) {
    return this.employees.indexOf(employee)
  } */

  formatSalary(): void {
    for (let index = 0; index < this.employees.length; index++) {
      const str = ``+this.employees[index].Sueldo
      this.employees[index].Sueldo = str.replace(/(?=(?:\d{3})+(?!\d))/g, `.`);
    }
  }

  /* generatePositionGraphDatasetObject(): Object {
    let dependencies: Object = {}
    this.employees.forEach(employee => {
      if (employee.dependency in dependencies){
        if (employee.position in dependencies[employee.dependency]){
          dependencies[employee.dependency][employee.position]++
        } else { dependencies[employee.dependency][employee.position] = 1 }
      } else { dependencies[employee.dependency] = {}; dependencies[employee.dependency][employee.position] = 1 }
    })
    return dependencies
  }

  generatePositionGraphDataset(): Dataset[] {
    let dataObjects: Object = this.generatePositionGraphDatasetObject()
    let datasets: Dataset[] = new Array(0)
    Object.keys(dataObjects['Contabilidad']).forEach((position) => { datasets.push(<Dataset>{
      label: position,
      data: [dataObjects['Contabilidad'][position],0,0,0],
      backgroundColor: new Array(dataObjects['Contabilidad'][position]).fill('rgb(100, 149, 237)')
    }) } )
    Object.keys(dataObjects['Facturación']).forEach((position) => { datasets.push(<Dataset>{
      label: position,
      data: [0,dataObjects['Facturación'][position],0,0],
      backgroundColor: new Array(dataObjects['Facturación'][position]).fill('rgb(100, 149, 237)')
    }) } )
    Object.keys(dataObjects['Comercial']).forEach((position) => { datasets.push(<Dataset>{
      label: position,
      data: [0,0,dataObjects['Comercial'][position],0],
      backgroundColor: new Array(dataObjects['Comercial'][position]).fill('rgb(100, 149, 237)')
    }) } )
    Object.keys(dataObjects['Tecnología']).forEach((position) => { datasets.push(<Dataset>{
      label: position,
      data: [0,0,0,dataObjects['Tecnología'][position]],
      backgroundColor: new Array(dataObjects['Tecnología'][position]).fill('rgb(100, 149, 237)')
    }) } )
    return datasets
  } */

}
