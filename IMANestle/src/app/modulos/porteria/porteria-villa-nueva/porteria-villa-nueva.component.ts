import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IngresoFabricaTB, ListaATA, ListaChofere, ListaCliente, ListaDestino, ListaExportadore, ListaNacionalidade, ListaPatentes, ListaRemito, ListaTipoArticulo, ListaTransportista, PesoActual } from 'src/app/models/IngresoFabricaTB';
import { IngresoService } from 'src/app/_services/ingreso.service';
import Swal from 'sweetalert2';


  

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

  
  
    ingresoFabricaTB!:IngresoFabricaTB;
    listaTransportistas!: ListaTransportista[];
    listaTipoArticulos!: ListaTipoArticulo[];
    listaAtas!: ListaATA[];
    listaDestinos!: ListaDestino[];
    listaRemitos!: ListaRemito[];
    listaNacionalidades!: ListaNacionalidade[];
    listaPatentesChasis!: ListaPatentes[];
    listaPatentesAcoplado!: ListaPatentes[];
    listaChoferes!: ListaChofere[];
    listaExportadores!: ListaExportadore[];
  
    peso!: PesoActual;
  
  
  
  

  registerForm: FormGroup = this.fb.group({
    id: [0],
    ingreso: [1,[Validators.required]],
    salida: [1,[Validators.required]],
    tipoArticuloId: ['',[Validators.required]],
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

      this.getTransportistas();
      this.getTipoArticulos();
      this.getPesoActual();
      /*
      this.ingresoService.getNuevoIngreso(r).subscribe((r:ListaTransportistas[])=> {
        console.log(r);
        this.transportistas = r;
      });
      

      

      this.ingresoService.getNuevoIngreso()
      .subscribe((r: ListaTipoArticulo[])=> {
        //console.log(r);
        this.listaTipoArticulos = r;
        console.log(this.listaTipoArticulos.forEach.arguments);
      });

    
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
    const Toast = Swal.mixin({
      //Declaro el mixin de sweet alert 2
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    
    console.log('registrar');

    if(this.registerForm.valid){
      this.ingresoService.postIngreso(this.registerForm.value)
      .subscribe(
        (data) => {
          Toast.fire({
            icon: 'success',
            title: 'Ingreso registrado con éxito',
          });
          this.registerForm.reset();
        },
        (error) => {
          console.log(error);
          Toast.fire({
              icon: 'error',
              title: `Error de servidor`,
          });
        }
      );

    } else {
      console.log('Registro inválido');
        Toast.fire({
          icon: 'error',
          title: 'Error: Verifique los campos ingresados',
        });
        this.registerForm.reset();
    }
  }

  getTransportistas(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r);
      this.listaTransportistas = r.listaTransportistas
    });
  }
 
  getTipoArticulos(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r);
      this.listaTipoArticulos = r.listaTipoArticulos
    });
  }

  
  getPesoActual(){
    this.ingresoService.getPesoActual(1).subscribe(r => {
      console.log('Peso',r);
      this.peso = r.peso
    })
  }
  

 

  displayedColumns: string[] = ['articulo', 'descripcion', 'cantidad', 'unidad', 'pallets'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  

}


