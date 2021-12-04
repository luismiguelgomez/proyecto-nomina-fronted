import { Injectable } from '@angular/core';
import { Update } from './update-http.service'
import { Dataset } from './employee-http.service';

export interface IdiomaticUpdate {
  "id": number,
  "incapacity_update": boolean,
  "vacations_update": boolean,
  "days_worked": number,
  "days_incap": number,
  "days_vacations": number,
  "start_vacations": Date,
  "end_vacations": Date,
  "start_incapacity": Date,
  "end_incapacity": Date,
  "bonus": number,
  "transport": number
}

@Injectable({
  providedIn: 'root'
})
export class UpdateListService {
  updates: Update[] = new Array(0)
  idioUpdates: IdiomaticUpdate[] = new Array(0)

  constructor() { }

  setAllUpdates(updates: Update[]) {
    this.updates = updates
  }

  setAllIdiomatic(idioUpdates: IdiomaticUpdate[]) {
    this.idioUpdates = idioUpdates
  }

  getAllUpdates() {
    return this.updates
  }

  getAllIdiomatic() {
    return this.idioUpdates
  }

  getUpdateByCode(id: number) {
    for (let count: number = 0; count < this.updates.length; count++) {
      this.updates[count]
      if (this.updates[count].id == id) {
        return this.updates[count]
      }
    }
    return null
  }

  getIdiomaticByCode(id: number) {
    for (let count: number = 0; count < this.idioUpdates.length; count++) {
      this.idioUpdates[count]
      if (this.idioUpdates[count].id == id) {
        return this.idioUpdates[count]
      }
    }
    return
  }

  getUpdateIndex(update: Update) {
    return this.updates.indexOf(update)
  }

  getIdiomaticIndex(idiomaticUpdate: IdiomaticUpdate) {
    return this.idioUpdates.indexOf(idiomaticUpdate)
  }

  formatEverything(): void {
    let idioUpdates = new Array(0)
    for (let count: number = 0; count < this.updates.length; count++) {
      let update: Update = this.updates[count]
      if (typeof update.id == 'string') { } else {
        let incap_up: boolean = false; let vac_up: boolean = false; let incap_days: number = 0; let vac_days: number = 0;
        let vac_str: Date = new Date('0-0-0000'); let vac_end: Date = new Date('0-0-0000'); let incap_str: Date = new Date('0-0-0000');
        let incap_end: Date = new Date('0-0-0000'); let bonus: number = 0; let transport: number = 0;
        if (update.incapacity_update == "") { }
        else {
          incap_up = true; incap_days = update.days_incap;
          incap_str = new Date(update.start_incapacity.substring(0, 3) + '-' + update.start_incapacity.substring(4, 5) + '-' + update.start_incapacity.substring(6, 7))
          incap_end = new Date(update.end_incapacity.substring(0, 3) + '-' + update.end_incapacity.substring(4, 5) + '-' + update.end_incapacity.substring(6, 7))
        }
        if (update.vacations_update == "") { }
        else {
          vac_up = true; vac_days = update.days_vacations;
          vac_str = new Date(update.start_vacations.substring(0, 3) + '/' + update.start_vacations.substring(4, 5) + '/' + update.start_vacations.substring(6, 7))
          incap_end = new Date(update.end_vacations.substring(0, 3) + '/' + update.end_vacations.substring(4, 5) + '/' + update.start_vacations.substring(6, 7))
        }
        bonus = Number(update.bonus + ``.replace(`.`, ``)); transport = Number(update.transport + ``.replace('.', ''));
        idioUpdates.push(<IdiomaticUpdate>{
          id: update.id, incapacity_update: incap_up, vacations_update: vac_up, days_worked: update.days_worked, days_incap: incap_days,
          days_vacations: vac_days, start_vacations: vac_str, end_vacations: vac_end, start_incapacity: incap_str, end_incapacity: incap_end,
          bonus: bonus, transport: transport
        })
      }
    }
  }

  /* generatePositionGraphDatasetObject(): Object {
    let dependencies: Object = {}
    this.employees.forEach(employee => {
      if (employee.dependency in dependencies){
        if (employee.position in dependencies[employee.dependency]){
          dependencies[employee.dependency][employee.position]++
        } else { dependencies[employee.dependency][employee.position] = 1 }
      } else { dependencies[employee.dependency] = {}; dependencies[employee.dependency][employee.position] = 1 }
    })
    return dependencies
  } */

  /* generatePositionGraphDataset(): Dataset[] {
    let dataObjects: Object = this.generatePositionGraphDatasetObject()
    let datasets: Dataset[] = new Array(0)
    Object.keys(dataObjects['Contabilidad']).forEach((position) => { datasets.push(<Dataset>{
      label: position,
      data: [dataObjects['Contabilidad'][position],0,0,0],
      backgroundColor: new Array(dataObjects['Contabilidad'][position]).fill('rgb(100, 149, 237)')
    }) } )
    Object.keys(dataObjects['Facturación']).forEach((position) => { datasets.push(<Dataset>{
      label: position,
      data: [0,dataObjects['Facturación'][position],0,0],
      backgroundColor: new Array(dataObjects['Facturación'][position]).fill('rgb(100, 149, 237)')
    }) } )
    Object.keys(dataObjects['Comercial']).forEach((position) => { datasets.push(<Dataset>{
      label: position,
      data: [0,0,dataObjects['Comercial'][position],0],
      backgroundColor: new Array(dataObjects['Comercial'][position]).fill('rgb(100, 149, 237)')
    }) } )
    Object.keys(dataObjects['Tecnología']).forEach((position) => { datasets.push(<Dataset>{
      label: position,
      data: [0,0,0,dataObjects['Tecnología'][position]],
      backgroundColor: new Array(dataObjects['Tecnología'][position]).fill('rgb(100, 149, 237)')
    }) } )
    return datasets
  } */

}
