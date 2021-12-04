import { Component, OnInit } from '@angular/core';
import { EmployeeHttpService } from 'src/app/mod/employee-http.service';
import { Employee } from 'src/app/mod/employee-http.service';

@Component({
  selector: 'nomina-view',
  template: `
  <div id="todo">
    <mat-card id="cartica">
      <mat-card-title>Reporte Nómina</mat-card-title>
      <div id="encartica">
        <employee-list></employee-list>
        <dependency-list></dependency-list>
        <charge-list></charge-list>
        <div id="chartcartica"><mat-card class="mat-card chartcard"><employee-pie></employee-pie></mat-card>
        <mat-card class="mat-card chartcard"><employee-bars></employee-bars></mat-card></div>
      </div>
    </mat-card>
  </div>
  `,
  styles: [
  ],
})
export class NominaViewComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {  }

}
