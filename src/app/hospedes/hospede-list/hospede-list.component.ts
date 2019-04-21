import { Component, OnInit } from "@angular/core";
import { CrudService } from "../../service/crud.service";
import { Hospede } from "../../service/hospede";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-hospede-list",
  templateUrl: "./hospede-list.component.html",
  styleUrls: ["./hospede-list.component.css"]
})
export class HospedeListComponent implements OnInit {
  p: number = 1;
  hospedes: Hospede[];
  hideWhenNoHospede: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CrudService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.buscaHospedes();
    s.snapshotChanges().subscribe(data => {
      this.hospedes = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a["$key"] = item.key;
        this.hospedes.push(a as Hospede);
      });
    });
  }

  dataState() {
    this.crudApi
      .buscaHospedes()
      .valueChanges()
      .subscribe(data => {
        this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoHospede = false;
          this.noData = true;
        } else {
          this.hideWhenNoHospede = true;
          this.noData = false;
        }
      });
  }

  deleteHospede(hospede) {
    if (window.confirm("Confirmar remoção?")) {
      this.crudApi.removeHospede(hospede.$key);
      this.toastr.success(hospede.nome + " removido!");
    }
  }
}
