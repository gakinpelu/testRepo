import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { IstanbulComponent } from './istanbul/istanbul.component';
import { MexicoCityComponent } from './mexico-city/mexico-city.component';
import { ParisComponent } from './paris/paris.component';
import { CartagenaComponent } from './cartagena/cartagena.component';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    IstanbulComponent,
    MexicoCityComponent,
    ParisComponent,
    CartagenaComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

