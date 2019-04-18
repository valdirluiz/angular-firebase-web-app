import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'app-add-hospede',
  templateUrl: './add-hospede.component.html',
  styleUrls: ['./add-hospede.component.css']
})
export class AddHospedeComponent implements OnInit {

  public studentForm: FormGroup;  // Define FormGroup to student's form

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }


  ngOnInit() {

    this.crudApi.buscaHospedes();   
    this.hospedeForm();        
  }

  hospedeForm() {
    this.studentForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      paisOrigem: ['', [Validators.required]],

    })  
  }

  get nome() {
    return this.studentForm.get('nome');
  }

  get paisOrigem() {
    return this.studentForm.get('paisOrigem');
  }
 

  
  save() {
    this.crudApi.addHospede(this.studentForm.value); // Submit student data using CRUD API
    this.toastr.success(this.studentForm.controls['nome'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.studentForm.reset();
   };



}
