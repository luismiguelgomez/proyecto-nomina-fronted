import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Employee, EmployeeHttpService } from '../mod/employee-http.service';

@Component({
  selector: 'app-root',
  templateUrl: '../viu/app.component.html',
  styles: []
})
export class AppComponent {
  allEmployees: Employee[]

  constructor(private ehttp: EmployeeHttpService) {
    this.allEmployees = new Array(0)
  }

  ngOnInit(){
    this.ehttp.getAllEmployees('asc').subscribe(
      (res) => { this.allEmployees = res },
      (err) => { console.log(err) }
    ) 
  }
}
