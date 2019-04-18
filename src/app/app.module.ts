import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
 
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HospedesModule } from './hospedes/hospedes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),  
    AngularFireDatabaseModule, HospedesModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
