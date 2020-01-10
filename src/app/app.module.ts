import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AlimentCalcComponent } from './aliment-calc/aliment-calc.component';

@NgModule({
  imports: [
    BrowserModule,
    // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AlimentListComponent,
    TopBarComponent,
    AlimentCalcComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
