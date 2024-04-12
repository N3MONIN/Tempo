import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioLaboralPage } from './calendario-laboral.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioLaboralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioLaboralPageRoutingModule {}
