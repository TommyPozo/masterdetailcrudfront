import { PetService } from './../../core/services/pet.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styles: []
})
export class PetComponent implements OnInit {

  constructor(public service: PetService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.resetForm();
  }


  resetForm(form?: NgForm) {

    if (form === null) {
      form.resetForm();
    }

    this.service.formData = {
      Id: null,
      Code: Math.floor(100000 + Math.random() * 900000).toString(),
      Name: '',
      Birth: '',
      Race: '',
      Reason: '',
      Total: 0,
      PatientId: 0,
    };


    this.service.petTreatment = [];

  }

  AddOrEditPetTreatment(PetTreatmentIndex, TreatmentId) {

  }

}
