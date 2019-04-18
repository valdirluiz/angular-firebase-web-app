import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BuscaComponent } from './busca/busca.component';

@NgModule({
  declarations: [CadastroComponent, BuscaComponent],
  imports: [
    CommonModule
  ]
})
export class HospedesModule { }
