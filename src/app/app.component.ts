import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  template: `
    <div id="todo">
      <mat-card id="cartica">
        <mat-card-title>Prueba API Frontend</mat-card-title>
        <button (click)="getEmpleado()" mat-raised-button color="warn">GET</button>
        <div>{{data | json}}</div>
      </mat-card>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Probando API';
  
  readonly url = 'http://localhost:3000/empleados'
  data: any[] = []
  
  constructor(private http: HttpClient){}

  getEmpleado(){
    this.http.get(this.url).subscribe((res) => {this.data.push(res)}, (err) => {console.log(err)})
  }

}
