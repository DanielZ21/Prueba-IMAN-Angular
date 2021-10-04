import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ListaATAs, ListaChoferes, ListaClientes, ListaDestinos, ListaExportadores, ListaNacionalidades, ListaPatentes, ListaRemitos, ListaTipoArticulos, ListaTransportistas } from 'src/app/models/IngresoFabricaTB';
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

  
  transportistas:   ListaTransportistas[]=[];
  tipoArticulos:    ListaTipoArticulos[]=[];
  atas:             ListaATAs[]=[];
  clientes:         ListaClientes[]=[];
  destinos:         ListaDestinos[]=[];
  remitos:          ListaRemitos[]=[];
  nacionalidades:   ListaNacionalidades[]=[];
  patentesChasis:   ListaPatentes[]=[];
  patentesAcoplado: ListaPatentes[]=[];
  choferes:         ListaChoferes[]=[];
  exportadores:     ListaExportadores[]=[];
  

  

  registerForm: FormGroup = this.fb.group({
    id: [0],
    ingreso: [1,[Validators.required]],
    salida: [1,[Validators.required]],
    idTipoArticulo: ['',[Validators.required]],
    patente1: [,[Validators.required]],
    patente2: [,[Validators.required]],
    ing: [,[Validators.required]],
    bruto: [,[Validators.required]],
    tara: [,[Validators.required]],
    dni: [,[Validators.required]],
    observaciones: [,[Validators.required]],
    idNacionalidad: [,[Validators.required]],
    idClienteExportador: [,[Validators.required]],
    idDestino: [,[Validators.required]],
    idRemito: [,[Validators.required]],
    chofer: [,[Validators.required]],
    entrada: [,[Validators.required]],
    taraSalida: [,[Validators.required]],
    nroContenedor: [,[Validators.required]],
    idATA: [,[Validators.required]],
    nroPermisoEmbarque: [,[Validators.required]],
  });

  

  
  constructor(private fb: FormBuilder, private ingresoService: IngresoService){
      /*
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaTransportistas[])=> {
        console.log(r);
        this.transportistas = r;
      });
      */

      this.ingresoService.getNuevoIngreso()
      .subscribe((r: ListaTipoArticulos[])=> {
        //console.log(r);
        this.tipoArticulos = r;
        console.log(this.tipoArticulos);
      });

     
      

      /*
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaATAs[])=> {
        console.log(r);
        this.atas = r;
      });
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaClientes[])=> {
        console.log(r);
        this.clientes = r;
      });
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaDestinos[])=> {
        console.log(r);
        this.destinos= r;
      });
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaRemitos[])=> {
        console.log(r);
        this.remitos = r;
      });
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaNacionalidades[])=> {
        console.log(r);
        this.nacionalidades = r;
      });
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaPatentes[])=> {
        console.log(r);
        this.patentesChasis = r;
      });
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaPatentes[])=> {
        console.log(r);
        this.patentesAcoplado = r;
      });
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaChoferes[])=> {
        console.log(r);
        this.choferes = r;
      });
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaExportadores[])=> {
        console.log(r);
        this.exportadores = r;
      });
      */

  }

 
  register(){
    
  }
 

 

  displayedColumns: string[] = ['articulo', 'descripcion', 'cantidad', 'unidad', 'pallets'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  

}


