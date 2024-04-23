import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EmpleadosPageRoutingModule } from './empleados-routing.module';
import { EmpleadosPage } from './empleados.page';
import {
  DxButtonModule,
  DxDataGridModule,
  DxFormModule,
  DxPopupModule,
  DxValidatorModule,
} from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    EmpleadosPageRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxFormModule,
    DxPopupModule,
    DxValidatorModule,
    CommonModule,
    

  ],
  providers: [],
  declarations: [EmpleadosPage],
})
export class EmpleadosPageModule {}
