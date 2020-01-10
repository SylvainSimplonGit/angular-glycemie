import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import { AlimentCalcComponent } from './aliment-calc/aliment-calc.component';
// import { AlimentCalcComponent } from './aliment-calc/aliment-calc.component';


const routes: Routes = [
  { path: 'calculate', component: AlimentCalcComponent },
  { path: 'listing', component: AlimentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
