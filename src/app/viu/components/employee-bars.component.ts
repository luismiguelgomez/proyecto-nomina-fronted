import { Component, OnInit } from '@angular/core';
import { EmployeeHttpService } from 'src/app/mod/employee-http.service';
import { EmployeeListService } from 'src/app/mod/employee-list.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'employee-bars',
  template: `
  <div id='chartdiv'><canvas id='barCanvas'></canvas></div>
  `,
  styles: [
  ]
})
export class EmployeeBarsComponent implements OnInit {
  employees: EmployeeListService

  constructor(private http: EmployeeHttpService) {
    this.employees = new EmployeeListService()
    Chart.register(...registerables);
  }

  ngOnInit(): void { }

  startChart(): void {
    let chartCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('barCanvas')!;
    let barChart = new Chart(chartCanvas.getContext('2d')!, {
      type: 'bar',
      data: {
        labels: [
          'Accounting',
          'Biling',
          'Commerce',
          'Technology'
        ],
        datasets: []
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  }

}
