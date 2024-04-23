import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { Empleados } from './empleados.model';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false })
  dataGrid!: DxDataGridComponent;
  private url = '/empleados';
  empleados: Empleados[] = [];
  popupVisible = false;
  public alertVisible: boolean = false;
  nuevoEmpleado: Empleados = new Empleados();
  filtrosVisibles: boolean = false;


  constructor(private HeaderService: HeaderService) {
    for (let i = 1; i < 51; i++) {
      let empleados = new Empleados();
      empleados.Nombre = `Nombre${i}`;
      empleados.DNI = `DNI${i}`;
      empleados.Email = `Email${i}`;
      empleados.Telefono = `Telefono${i}`;
      empleados.Departamento = `Departamento${i}`;
      empleados.Horarios = `Horario${i}`;
      empleados.Estados = `Estado${i}`;

      this.empleados.push(empleados);
    }
  }  
  
  mostrarPopup() {
    this.popupVisible = true;
  }


  addEmpleado() {
    if (
      this.nuevoEmpleado.Nombre &&
      this.nuevoEmpleado.DNI &&
      this.nuevoEmpleado.Email &&
      this.nuevoEmpleado.Telefono &&
      this.nuevoEmpleado.Departamento &&
      this.nuevoEmpleado.Horarios &&
      this.nuevoEmpleado.Estados
    ) {
      this.empleados.unshift(this.nuevoEmpleado);
      this.nuevoEmpleado = new Empleados();
      this.popupVisible = false;
    } else {
      this.alertVisible = true;
    }
  }

  toggleFiltros() {
    this.filtrosVisibles = !this.filtrosVisibles;
    this.dataGrid.instance.option('headerFilter.visible', this.filtrosVisibles);
  }
  

  ngOnInit() {}

  ionViewWillEnter() {
    this.HeaderService.setPageContent(
      this.url,
      'Empleados',
      'Listado de los empleados de tu empresa. Añade, edita y exporta. '
    );
  }

  
}
