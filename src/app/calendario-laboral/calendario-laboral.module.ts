import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioLaboralPageRoutingModule } from './calendario-laboral-routing.module';

import { CalendarioLaboralPage } from './calendario-laboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioLaboralPageRoutingModule
  ],
  declarations: [CalendarioLaboralPage]
})
export class CalendarioLaboralPageModule {}
