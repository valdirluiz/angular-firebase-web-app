import { Injectable } from '@angular/core';
import { Hospede } from './hospede';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  hospedesRef: AngularFireList<any>;
  hospedeRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }


  addHospede(hospede: Hospede) {
    this.hospedesRef.push({
      nome: hospede.nome,
      paisOrigem: hospede.paisOrigem
    });
  }

  buscaHospede(id: string) {
    this.hospedeRef = this.db.object('hospedes-list/' + id);
    return this.hospedeRef;
  }

  buscaHospedes() {
    this.hospedesRef = this.db.list('hospedes-list');
    return this.hospedesRef;
  }

  atualizaHospede(hospede: Hospede) {
    this.hospedeRef.update({
      nome: hospede.nome,
      paisOrigem: hospede.paisOrigem
    })
  }

  removeHospede(id: string) {
    this.hospedeRef = this.db.object('hospedes-list/' + id);
    this.hospedeRef.remove();
  }
}
