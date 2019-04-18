import { Injectable } from '@angular/core';
import { Hospede } from './hospede';  // Student data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  hospedesRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  constructor(private db: AngularFireDatabase) { }


  addHospede(hospede: Hospede) {
    this.hospedesRef.push({
      nome: hospede.nome,
      paisOrigem: hospede.paisOrigem
    })
  }

  buscaHospede(id: string) {
    this.studentRef = this.db.object('hospedes-list/' + id);
    return this.studentRef;
  }

  buscaHospedes() {
    this.hospedesRef = this.db.list('hospedes-list');
    return this.hospedesRef;
  }

  atualizaHospede(hospede: Hospede) {
    this.studentRef.update({
      nome: hospede.nome,
      paisOrigem: hospede.paisOrigem
    })
  }

  removeHospede(id: string) {
    this.studentRef = this.db.object('hospedes-list/' + id);
    this.studentRef.remove();
  }
}
