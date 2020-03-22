import { PetTreatment } from './../../models/pet-treatment.model';
import { Pet } from './../../models/pet.model';
import { Injectable } from '@angular/core';
import { NgForm, Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  formData: Pet;
  petTreatment: PetTreatment[];

  constructor() { }




}
