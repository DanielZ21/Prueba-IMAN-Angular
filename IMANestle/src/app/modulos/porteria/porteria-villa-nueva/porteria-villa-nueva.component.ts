import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IngresoFabricaTB, ListaATA, ListaChofere, ListaCliente, ListaDestino, ListaExportadore, ListaNacionalidade, ListaPatentes, ListaRemito, ListaTipoArticulo, ListaTransportista, PesoActual, } from 'src/app/models/IngresoFabricaTB';
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
export class PorteriaVillaNuevaComponent implements AfterViewInit{

  
  
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
  
    peso: any
  
  
  
  

  registerForm: FormGroup = this.fb.group({
    id: [0],
    ingreso: [,[Validators.required]],
    salida: [,[Validators.required]],
    tipoArticuloId: ['',[Validators.required]],
    idTransportista: ['',[Validators.required]],
    patente1: [,[Validators.required]],
    patente2: [,[Validators.required]],
    ing: [1,[Validators.required]],
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
      this.getAtas();
      this.getDestinos();
      this.getRemitos();
      this.getNacionalidades();
      this.getPatentesChasis();
      this.getPatentesAcoplado();
      this.getChoferes();
      this.getExportadores();
      this.peso = ingresoService.getPesoActual(1);
      
      
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
      console.log(this.registerForm.value);
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

  /*-------Listas para los selects-------*/

  getTransportistas(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaTransportistas);
      this.listaTransportistas = r.listaTransportistas
    });
  }
 
  getTipoArticulos(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaTipoArticulos);
      this.listaTipoArticulos = r.listaTipoArticulos
    });
  }

  getAtas(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaAtas);
      this.listaAtas= r.listaAtas
    });
  }

  getDestinos(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaDestinos);
      this.listaDestinos= r.listaDestinos
    });
  }

  getRemitos(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaRemitos);
      this.listaRemitos= r.listaRemitos
    });
  }

  getNacionalidades(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaNacionalidades);
      this.listaNacionalidades= r.listaNacionalidades
    });
  }

  getPatentesChasis(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaPatentesChasis);
      this.listaPatentesChasis= r.listaPatentesChasis
    });
  }

  getPatentesAcoplado(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaPatentesAcoplado);
      this.listaPatentesAcoplado= r.listaPatentesAcoplado
    });
  }

  getChoferes(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaChoferes);
      this.listaChoferes= r.listaChoferes
    });
  }

  getExportadores(){
    this.ingresoService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaExportadores);
      this.listaExportadores= r.listaExportadores
    });
  }
  

 

  /*
  getPesoActual(){
    this.ingresoService.getPesoActual(1).subscribe(r => {
      console.log('Peso',r);
      return this.peso = r
    })
  }
  */

 

  displayedColumns: string[] = ['articulo', 'descripcion', 'cantidad', 'unidad', 'pallets'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  

}


