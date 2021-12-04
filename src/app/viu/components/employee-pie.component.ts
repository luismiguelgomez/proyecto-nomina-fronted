import { Component, OnInit } from '@angular/core';
import { EmployeeHttpService } from 'src/app/mod/employee-http.service';
import { EmployeeListService } from 'src/app/mod/employee-list.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'employee-pie',
  template: `
  <div id='chartdiv'><canvas id='chartcanvas'></canvas></div>
  `,
  styles: [
  ]
})
export class EmployeePieComponent implements OnInit {
  employees: EmployeeListService

  constructor(private http: EmployeeHttpService) {
    this.employees = new EmployeeListService()
    Chart.register(...registerables);
  }

  ngOnInit(): void { }

  startChart(): void {
    let chartCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('chartcanvas')!;
    let pieChart = new Chart(chartCanvas.getContext('2d')!, {
      type: 'pie',
      data: {
        labels: [
          'Accounting',
          'Biling',
          'Commerce',
          'Technology'
        ],
        datasets: [{
          label: 'Employees Per Dependency',
          data: [],
          backgroundColor: [
            'rgb(153,170,255)',
            'rgb(153,153,255)',
            'rgb(102,153,255)',
            'rgb(128,170,255)',
          ],
          hoverOffset: 5 
        }]
      },
      options: {animation: {
        animateRotate: true,
        animateScale: true,
      }}
    })
  }
}
