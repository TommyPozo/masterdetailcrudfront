import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetComponent } from './pets/pet/pet.component';
import { PetTreatmentsComponent } from './pets/pet-treatments/pet-treatments.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetComponent,
    PetTreatmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
