import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AddHospedeComponent } from './hospedes/add-hospede/add-hospede.component';
import { EditHospedeComponent  } from './hospedes/edit-hospede/edit-hospede.component';
import { HospedeListComponent } from './hospedes/hospede-list/hospede-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/visualizar-hospedes', pathMatch: 'full' },
  { path: 'registrar-hospede', component: AddHospedeComponent },
  { path: 'visualizar-hospedes', component: HospedeListComponent },
  { path: 'editar-hospede/:id', component: EditHospedeComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
