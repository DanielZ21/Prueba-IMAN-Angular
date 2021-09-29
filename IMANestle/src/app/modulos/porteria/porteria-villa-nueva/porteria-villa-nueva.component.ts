import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IngresoFabricaTB,  ListaATAs,  ListaChoferes,  ListaClientes,  ListaDestinos,  ListaExportadores,  ListaNacionalidades, ListaPatentes,  ListaRemitos, ListaTipoArticulos,  ListaTransportistas, NuevoIngreso } from 'src/app/models/IngresoFabricaTB';
import { IngresoService } from 'src/app/_services/ingreso.service';




export interface PeriodicElement {
  articulo: string;
  descripcion: string;
  cantidad: number;
  unidad: number;
  pallets: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {articulo: '', descripcion: '', cantidad: 0, unidad: 0, pallets:''}
  
];

@Component({
  selector: 'app-porteria-villa-nueva',
  templateUrl: './porteria-villa-nueva.component.html',
  styleUrls: ['./porteria-villa-nueva.component.css']
})
export class PorteriaVillaNuevaComponent implements AfterViewInit {
  
  ingresoFabricaTB!:      IngresoFabricaTB;
  listaTransportistas!:   ListaTransportistas[];
  listaTipoArticulos!:    ListaTipoArticulos[];
  listaAtas!:             ListaATAs[];
  listaClientes!:         ListaClientes[];
  listaDestinos!:         ListaDestinos[];
  listaRemitos!:          ListaRemitos[];
  listaNacionalidades!:   ListaNacionalidades[];
  listaPatentesChasis!:   ListaPatentes[];
  listaPatentesAcoplado!: ListaPatentes[];
  listaChoferes!:         ListaChoferes[];
  listaExportadores!:     ListaExportadores[];

  

  public nuevoIngreso!: NuevoIngreso;
  

  displayedColumns: string[] = ['articulo', 'descripcion', 'cantidad', 'unidad', 'pallets'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  

}
