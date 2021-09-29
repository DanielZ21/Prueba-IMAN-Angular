import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ListaATAs, ListaChoferes, ListaClientes, ListaDestinos, ListaExportadores, ListaNacionalidades, ListaPatentes, ListaRemitos, ListaTipoArticulos, ListaTransportistas, NuevoIngreso } from 'src/app/models/IngresoFabricaTB';
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

  listaTransportistas:   ListaTransportistas[]=[];
  listaTipoArticulos:    ListaTipoArticulos[]=[];
  listaAtas:             ListaATAs[]=[];
  listaClientes:         ListaClientes[]=[];
  listaDestinos:         ListaDestinos[]=[];
  listaRemitos:          ListaRemitos[]=[];
  listaNacionalidades:   ListaNacionalidades[]=[];
  listaPatentesChasis:   ListaPatentes[]=[];
  listaPatentesAcoplado: ListaPatentes[]=[];
  listaChoferes:         ListaChoferes[]=[];
  listaExportadores:     ListaExportadores[]=[];


  
  constructor(private fb: FormBuilder, private ingresoService: IngresoService){
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaTransportistas[])=> {
        console.log(r);
        this.listaTransportistas = r;
      });
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaTipoArticulos[])=> {
        console.log(r);
        this.listaTipoArticulos = r;
      });
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaATAs[])=> {
        console.log(r);
        this.listaAtas = r;
      });
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaClientes[])=> {
        console.log(r);
        this.listaClientes = r;
      });
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaDestinos[])=> {
        console.log(r);
        this.listaDestinos= r;
      });
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaRemitos[])=> {
        console.log(r);
        this.listaRemitos = r;
      });
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaNacionalidades[])=> {
        console.log(r);
        this.listaNacionalidades = r;
      });
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaPatentes[])=> {
        console.log(r);
        this.listaPatentesChasis = r;
      });
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaPatentes[])=> {
        console.log(r);
        this.listaPatentesAcoplado = r;
      });
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaChoferes[])=> {
        console.log(r);
        this.listaChoferes = r;
      });
      this.ingresoService.getNuevoIngreso().subscribe((r:ListaExportadores[])=> {
        console.log(r);
        this.listaExportadores = r;
      });
    
  }

  public nuevoIngreso!: NuevoIngreso;

  registerForm: FormGroup = this.fb.group({
    id: [0],
    ingreso: [, [Validators.required]],
    salida: [1, [Validators.required]],
    idTipoArticulo: [, [Validators.required]],
    idTransportista: [, [Validators.required]],
    patente1: [, [Validators.required]],
    patente2: [, [Validators.required]],
    ing: [, [Validators.required]],
    bruto: [, [Validators.required]],
    tara: [, [Validators.required]],
    dni:[,[Validators.required] ],
    observaciones: [, [Validators.required]],
    idNacionalidad: [, [Validators.required]],
    idClienteExportador: [, [Validators.required]],
    idDestino: [, [Validators.required]],
    idRemito: [, [Validators.required]],
    chofer: [, [Validators.required]],
    entrada: [2, [Validators.required]],
    taraSalida: [, [Validators.required]],
    nroContenedor: [, [Validators.required]],
    idATA: [, [Validators.required]],
    nroPermisoEmbarque: [, [Validators.required]],
  });

 

  displayedColumns: string[] = ['articulo', 'descripcion', 'cantidad', 'unidad', 'pallets'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  

}
