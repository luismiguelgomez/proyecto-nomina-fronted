import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from '../viu/components/employee-list.component';
import { EmployeePieComponent } from '../viu/components/employee-pie.component';
import { EmployeeBarsComponent } from '../viu/components/employee-bars.component';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NominaViewComponent } from '../viu/views/nomina-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { EpsViewComponent } from '../viu/views/eps-view.component';
import { NovedadViewComponent } from '../viu/views/novedad-view.component';
import { DependencyListComponent } from '../viu/components/dependency-list.component';
import { ChargeListComponent } from '../viu/components/charge-list.component';
import { EpsPieComponent } from '../viu/components/eps-view/eps-pie.component'
import { AllowanceBarsComponent } from '../viu/components/eps-view/allowance-bars.component';

const rutas: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeePieComponent,
    EmployeeBarsComponent,
    NominaViewComponent,
    EpsViewComponent,
    NovedadViewComponent,
    DependencyListComponent,
    ChargeListComponent,
    EpsPieComponent,
    AllowanceBarsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
