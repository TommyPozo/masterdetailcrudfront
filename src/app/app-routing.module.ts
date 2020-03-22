import { PetComponent } from './pets/pet/pet.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  {path: '', redirectTo: 'pet', pathMatch: 'full'},
  {path: 'pets', component: PetsComponent},
  {path: 'pet', children: [
    {path: '', component: PetComponent},
    {path: 'edit/:id', component: PetComponent}
    ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
