import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'app-add-hospede',
  templateUrl: './add-hospede.component.html',
  styleUrls: ['./add-hospede.component.css']
})
export class AddHospedeComponent implements OnInit {

  public hospedeForm: FormGroup;   

  constructor(
    public crudApi: CrudService,   
    public fb: FormBuilder,       
    public toastr: ToastrService  
  ) { }


  ngOnInit() {

    this.crudApi.buscaHospedes();   
    this.createHospedeForm();        
  }

  createHospedeForm() {
    this.hospedeForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      paisOrigem: ['', [Validators.required]],

    });
  }

  get nome() {
    return this.hospedeForm.get('nome');
  }

  get paisOrigem() {
    return this.hospedeForm.get('paisOrigem');
  }
 

  
  save() {
    this.crudApi.addHospede(this.hospedeForm.value);  
    this.toastr.success(this.hospedeForm.controls['nome'].value + ' cadastrado com sucesso!');
    this.hospedeForm.reset();
   };



}
