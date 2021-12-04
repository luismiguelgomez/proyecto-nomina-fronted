import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eps-view',
  template: `
  <div id="todo">
    <mat-card id="cartica">
      <mat-card-title>Reporte EPS</mat-card-title>
      <div id="encartica">
        <employee-list></employee-list>
        <div id="chartcartica">
        <mat-card class="mat-card chartcard"><eps-pie></eps-pie></mat-card></div>
      </div>
    </mat-card>
  </div>
  `,
  styles: [
  ]
})
export class EpsViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
