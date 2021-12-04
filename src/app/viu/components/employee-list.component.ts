import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from 'src/app/mod/employee-list.service';
import { EmployeeHttpService } from 'src/app/mod/employee-http.service';
import { UpdateHttpService } from 'src/app/mod/update-http.service';
import { UpdateListService } from 'src/app/mod/update-list.service';
//<button mat-stroked-button id="list-toggle" (click)="switchShow()">{{show_text}}</button>

@Component({
  selector: 'employee-list',
  template: `
  {{employees.employees.length}} Empleados en PerCol-XYZ
  <div class="herotable">
    <div id="headFather">
      <div id="headDiv" style="grid-column: span 28 / auto;">
        <div style="grid-column: span 2 / auto;">name</div>
        <div>dependency</div>
        <div>position</div>
        <div>join date</div>
        <div>insurance</div>
        <div>ai</div>
        <div>allowance</div>
        <div>salary</div>
      </div>
      <button mat-icon-button (click)="switchShow()" style="color: white;"><mat-icon>expand_more</mat-icon></button>
    </div>
    <div id="bodyDiv" *ngIf="show_list">
    <mat-accordion *ngFor="let employee of employees.getAllEmployees()">
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            <div style="font-size: 14px; grid-column: span 2 / auto;">{{employee.Nombre_emp}}</div>
            <div>{{employee.nombre_dep}}</div>
            <div>{{employee.Cargo}}</div>
            <div>{{employee.Fecha_ingreso}}</div>
            <div>{{employee.EPS}}</div>
            <div>{{employee.ARL}}</div>
            <div>{{employee.Fondo_pension}}</div>
            <div>$ {{employee.Sueldo}}</div>
          </mat-panel-title>
          </mat-expansion-panel-header>
          <div id="employeeDataDiv">
            <div style="grid-column: span 2 / auto;">{{employee.Nombre_emp}}</div>
            <div>Join Date: {{employee.Fecha_ingreso}}</div>
            <div>Allowance: {{employee.Fondo_pension}}</div>
            <div style="grid-column: span 2 / auto;">{{employee.nombre_dep}}, {{employee.Cargo}}</div>
            <div>Insurance: {{employee.EPS}}</div>
            <div>Salary: {{employee.Sueldo}}</div>
            <table style="grid-column: span 3 / auto;">
              <thead>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </thead>
              <tbody></tbody>
          </table>
          <div style="display: grid; place-items: end;">
              <button mat-stroked-button style="max-width: fit-content !important;">🡇</button>
          </div>
          </div>
        </mat-expansion-panel>
      </mat-accordion>
    </div>
  </div>
  `,
  styles: [
  ]
})

export class EmployeeListComponent implements OnInit {
  show_list: boolean
  employees: EmployeeListService

  constructor(private ehttp: EmployeeHttpService) {
    this.show_list = true
    this.employees = new EmployeeListService()
  }

  ngOnInit(): void {
    this.ehttp.getAllEmployees('asc').subscribe(
      (res) => { console.log(res); this.employees.setAllEmployees(res) },
      (err) => { console.log(err) }
    )
  }

  switchShow(): void {
    this.show_list = !this.show_list
  }

}
