import { Injectable } from '@angular/core';
import { Portion } from './portion';
import { Aliment } from './aliment';
import { AlimentService } from './aliment.service';

@Injectable({
  providedIn: 'root'
})
export class PortionService {

  private portionList: Portion[];
  private chargeTotal: number;

  constructor(
    private alimentService: AlimentService,
  ) {
    this.portionList = [];
    this.chargeTotal = 0;
  }

  getPortions() {
    return this.portionList;
  }

  getChargeTotal() {
    return this.chargeTotal;
  }

  addPortion(alimentPortion) {
    const p = {} as Portion;
    console.log(alimentPortion);
    const a: Aliment = this.alimentService.getAlimentByName(alimentPortion.aliment.name);
    p.aliment = a;
    p.propCarbs = a.carbs * alimentPortion.portion / 100;
    p.chargeGlyc = a.ig * p.propCarbs / 100;

    this.portionList.push(p);
    this.incrementChargeTotal(p.chargeGlyc);
  }

  deletePortion(alimentPortion) {
    const index = this.portionList.indexOf(alimentPortion);
    this.portionList.splice(index, 1);
    this.decrementChargeTotal(alimentPortion.chargeGlyc);
  }

  incrementChargeTotal(chargeGlyc) {
    this.chargeTotal += chargeGlyc;
  }

  decrementChargeTotal(chargeGlyc) {
    this.chargeTotal -= chargeGlyc;
  }
}
