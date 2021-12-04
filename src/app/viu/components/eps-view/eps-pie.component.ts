import { Component, OnInit } from '@angular/core';
import { EmployeeHttpService } from 'src/app/mod/employee-http.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'eps-pie',
  template: `
    <div id='chartdiv'><canvas id='chartcanvas'></canvas></div>
  `,
  styles: [
  ]
})
export class EpsPieComponent implements OnInit {
labels: string[]
data: number[]

  constructor(private http: EmployeeHttpService) {
    Chart.register(...registerables);
    this.labels = new Array(0)
    this.data = new Array(0)
  }

  ngOnInit(): void {
    this.http.getEmployeesInsuranceGraphObject().subscribe(
      (res) => { console.log(res); res.empleados.forEach( (demo) => {
        this.data.push(demo['COUNT(EPS)']) }); res.nombresEPS.forEach( (label) => {
        this.data.push(label['COUNT(EPS)']) })
      },
      (err) => { console.log(err) }
    )
  }

  startChart(): void {
    let chartCanvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('chartcanvas')!;
    let pieChart = new Chart(chartCanvas.getContext('2d')!, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Employees Per Dependency',
          data: this.data,
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
