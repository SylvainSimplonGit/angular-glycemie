import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { Aliment } from '../aliment';
import { AlimentService } from '../aliment.service';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.css']
})
export class AlimentListComponent implements OnInit {
  aliments: Aliment[];
  createAlimentForm: FormGroup;

  constructor(
    private alimentService: AlimentService,
    private formBuilder: FormBuilder,
  ) {
    this.createAlimentForm = this.formBuilder.group({
      name: '',
      ig: '',
      carbs: ''
    });
   }

  ngOnInit() {
    this.aliments = this.alimentService.getAliments();
  }

  addAliment(alimentData) {
    console.log('Votre aliment a été ajouté !', alimentData);
    this.alimentService.addAliment(alimentData);
  }

  removeAliment(alimentData) {
    console.log('Votre aliment a été supprimé !', alimentData);
    this.alimentService.deleteAliment(alimentData);
  }
}
