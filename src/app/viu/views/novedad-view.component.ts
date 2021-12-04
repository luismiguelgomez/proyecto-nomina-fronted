import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'novedad-view',
  template: `
  <div id="todo">
    <mat-card id="cartica">
      <mat-card-title>Reporte Novedad</mat-card-title>
      <div id="encartica">
        <employee-list></employee-list>
        <div id="chartcartica"><mat-card class="mat-card chartcard"><employee-pie></employee-pie></mat-card>
        <mat-card class="mat-card chartcard"><employee-bars></employee-bars></mat-card></div>
      </div>
    </mat-card>
  </div>
  `,
  styles: [
  ]
})
export class NovedadViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
