import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { Aliment } from '../aliment';
import { Portion } from '../portion';
import { AlimentService } from '../aliment.service';
import { PortionService } from '../portion.service';

@Component({
  selector: 'app-aliment-calc',
  templateUrl: './aliment-calc.component.html',
  styleUrls: ['./aliment-calc.component.css']
})
export class AlimentCalcComponent implements OnInit {
  aliments: Aliment[];
  portions: Portion[];
  addAlimentCalcForm: FormGroup;
  chargeTotal: number;

  constructor(
    private alimentService: AlimentService,
    private portionService: PortionService,
    private formBuilder: FormBuilder,
  ) {
    this.addAlimentCalcForm = this.formBuilder.group({
      aliment: '',
      portion: 100
    });
   }

  ngOnInit() {
    this.aliments = this.alimentService.getAliments();
    this.portions = this.portionService.getPortions();
    this.chargeTotal = this.portionService.getChargeTotal();
  }

  addAlimentCalc(alimentPortion) {
    this.portionService.addPortion(alimentPortion);
    console.log('Votre portion a été ajouté !', alimentPortion);
    this.chargeTotal = this.portionService.getChargeTotal();
  }

  removePortion(alimentPortion) {
    this.portionService.deletePortion(alimentPortion);
    console.log('Votre portion a été supprimée !', alimentPortion);
    this.chargeTotal = this.portionService.getChargeTotal();
  }
}
