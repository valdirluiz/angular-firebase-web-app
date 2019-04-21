import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddHospedeComponent } from "./add-hospede/add-hospede.component";
import { EditHospedeComponent } from "./edit-hospede/edit-hospede.component";
import { HospedeListComponent } from "./hospede-list/hospede-list.component";
import { AppRoutingModule } from "../app-routing.module";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AddHospedeComponent,
    EditHospedeComponent,
    HospedeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class HospedesModule {}
