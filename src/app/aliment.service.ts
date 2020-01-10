import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { aliments } from './alimentList';
import { Aliment } from './aliment';

@Injectable({
  providedIn: 'root'
})

export class AlimentService {

  private alimentList: Aliment[];

  constructor(
    // private http: HttpClient
  ) {
    this.alimentList = aliments;
  }

  getAliments() {
    return this.alimentList;
    // return this.http.get('/assets/aliments.json');
  }

  getAlimentByName(alimentName: string): Aliment {
    let result: Aliment = null;
    console.log(alimentName);

    this.alimentList.forEach(element => {
      if (element.name === alimentName) {
        result = element;
      }
    });
    return result;
  }

  addAliment(aliment) {
    this.alimentList.push(aliment);
  }

  deleteAliment(aliment) {
    const index = this.alimentList.indexOf(aliment);
    this.alimentList.splice(index, 1);
  }
}
