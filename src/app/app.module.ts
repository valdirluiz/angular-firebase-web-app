import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { HospedesModule } from './hospedes/hospedes.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    HospedesModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  
    AngularFireDatabaseModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
