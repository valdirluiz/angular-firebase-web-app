import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';  // CRUD API service class
import { Hospede } from '../../shared/hospede';   // Student interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // 

@Component({
  selector: 'app-hospede-list',
  templateUrl: './hospede-list.component.html',
  styleUrls: ['./hospede-list.component.css']
})
export class HospedeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
