import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IngresoFabricaTB, ListaATA, ListaChofere, ListaCliente, ListaDestino, ListaExportadore, ListaNacionalidade, ListaPatentes, ListaRemito, ListaTipoArticulo, ListaTransportista, } from 'src/app/models/IngresoFabricaTB';
import { AbmService } from 'src/app/_services/abm.service';
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
export class PorteriaVillaNuevaComponent implements AfterViewInit, OnInit{

  filteredOptions: any;

  formGroup!: FormGroup;
  options: any;
  
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
  
    peso!: any

  cargando    : boolean = false;
  tipoArticuloIF  : boolean = true;
  transportistaIF : boolean = true;
  patenteChasisIF: boolean = true;
  nacionalidadIF: boolean = true;
  exportadorIF: boolean = true;
  destinoIF: boolean = true;
  remitoIF: boolean = true;
  choferIF: boolean = true;
  ataIF: boolean = true;
  
  
  

  registerForm: FormGroup = this.fb.group({
    id: [0],
    ingreso: [,[Validators.required]],
    salida: [,[Validators.required]],
    idTipoArticulo: ['',[Validators.required]],
    idTransportista: ['',[Validators.required]],
    patente1: [,[Validators.required]],
    patente2: [,[Validators.required]],
    ing: [1,[Validators.required]],
    bruto: [,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    tara: [,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
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
    nroPermisoEmbarque: [,[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
  });

  tipoArticuloForm: FormGroup = this.fb.group({
    id: [0],
    tipoArticulo: [,[Validators.required]],
  });

  transportistaForm: FormGroup = this.fb.group({
    id: [0],
    transportista: [,[Validators.required]],
  });


  /*?????????????????????*/ 
  patenteChasisForm: FormGroup = this.fb.group({
    id:[0],
    patente: [],
    patenteChasis: [,[Validators.required]]
  });
  
  nacionalidadForm: FormGroup = this.fb.group({
    id: [0],
    nacionalidad: [,[Validators.required]],
  });

  exportadorForm: FormGroup = this.fb.group({
    id: [0],
    exportador: [,[Validators.required]],
  });

  destinoForm: FormGroup = this.fb.group({
    id: [0],
    destino: [,[Validators.required]],
    codigoAfip: [,[Validators.required]],
  });

  remitoForm: FormGroup = this.fb.group({
    
  });

  choferForm: FormGroup = this.fb.group({
    id: [0],
    chofer: [,[Validators.required]],
  });

  ataForm: FormGroup = this.fb.group({
    id: [0],
    ata: [,[Validators.required]],
    cuit: [,[Validators.required]],
  });


  
  /*
  ngOnInit(){
    this.initForm();
    this.getNames();
  }

  initForm(){
    this.formGroup = this.fb.group({
      'tipoArticulo' : ['']
    })
    this.formGroup.get('tipoArticulo')?.valueChanges.subscribe(response => {
      console.log('data is ', response);
      this.filterData(response);
    })
  }

  filterData(enteredData: any){
    this.listaTipoArticulos = this.listaTipoArticulos.filter((listaTipoArticulos) => {
      return this.listaTipoArticulos
      
      //.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){
    this.abmService.getNuevoIngreso().subscribe(response => {
      this.options = response;
      this.filteredOptions = response;
    })
  }
  */

  accion = 'Agregar';
  id = 0;

  
  constructor(private fb: FormBuilder, private abmService: AbmService, private activeRouter: ActivatedRoute, private router: Router){

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
      this.getPeso();
      this.id = +this.activeRouter.snapshot.paramMap.get('id')!;
           
  }

  ngOnInit(): void {
    this.editarIngreso();
  }




  editarIngreso(){
    if(this.id !== 0) {
      this.accion = 'Editar';
      this.abmService.getIngreso(this.id).subscribe(data => {
        this.ingresoFabricaTB = data;
        this.registerForm.patchValue({
          ingreso: data.ingreso,
          salida: data.salida,
          idTipoArticulo: data.idTipoArticulo,
          idTransportista: data.idTransportista,
          patente1: data.patente1,
          patente2: data.patente2,
          ing: data.ing,
          bruto: data.bruto,
          tara: data.tara,
          dni: data.dni,
          observaciones: data.observaciones,
          idNacionalidad: data.idNacionalidad,
          idClienteExportador: data.idClienteExportador,
          idDestino: data.idDestino,
          idRemito: data.idRemito,
          chofer: data.chofer,
          entrada: data.entrada,
          taraSalida: data.taraSalida,
          nroContenedor: data.nroContenedor,
          idATA: data.idATA,
          nroPermisoEmbarque: data.nroPermisoEmbarque,
        })
      }, error => {
        console.log(error);
      })
    }
   
  }

  



  /*
  ngOnInit(): void{ //Prueba de peso
    let BalanzaId = this.activeRouter.snapshot.paramMap.get('id');
    this.abmService.getPesoActual(1).subscribe(data =>{
      console.log(data)
    })
  }
  */

  crearAta(){
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

    if(this.ataForm.valid){
      console.log(this.ataForm.value);
      this.abmService.postAta(this.ataForm.value)
      .subscribe(
        (data) => {
          Toast.fire({
            icon: 'success',
            title: 'Ingreso registrado con éxito',
          });
          this.ataIF  = true;
          this.getAtas();
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
        this.ataForm.reset();
    }
  }

  crearChofer(){
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

    if(this.choferForm.valid){
      console.log(this.choferForm.value);
      this.abmService.postChofer(this.choferForm.value)
      .subscribe(
        (data) => {
          Toast.fire({
            icon: 'success',
            title: 'Ingreso registrado con éxito',
          });
          this.choferIF  = true;
          this.getChoferes();
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
        this.choferForm.reset();
    }
  }

  crearRemito(){}

  crearDestino(){
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

    if(this.destinoForm.valid){
      console.log(this.destinoForm.value);
      this.abmService.postDestino(this.destinoForm.value)
      .subscribe(
        (data) => {
          Toast.fire({
            icon: 'success',
            title: 'Ingreso registrado con éxito',
          });
          this.destinoIF  = true;
          this.getDestinos();
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
        this.destinoForm.reset();
    }

  }

  crearExportador(){
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

    if(this.exportadorForm.valid){
      console.log(this.exportadorForm.value);
      this.abmService.postNacionalidad(this.exportadorForm.value)
      .subscribe(
        (data) => {
          Toast.fire({
            icon: 'success',
            title: 'Ingreso registrado con éxito',
          });
          this.exportadorIF  = true;
          this.getExportadores();
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
        this.exportadorForm.reset();
    }
  }

  crearNacionalidad(){
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

    if(this.nacionalidadForm.valid){
      console.log(this.nacionalidadForm.value);
      this.abmService.postNacionalidad(this.nacionalidadForm.value)
      .subscribe(
        (data) => {
          Toast.fire({
            icon: 'success',
            title: 'Ingreso registrado con éxito',
          });
          this.nacionalidadIF  = true;
          this.getNacionalidades();
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
        this.nacionalidadForm.reset();
    }
  }
  
  crearPatente(){
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

    if(this.patenteChasisForm.valid){
      console.log(this.patenteChasisForm.value);
      this.abmService.postPatente(this.patenteChasisForm.value)
      .subscribe(
        (data) => {
          Toast.fire({
            icon: 'success',
            title: 'Ingreso registrado con éxito',
          });
          this.transportistaIF  = true;
          this.getPatentesChasis();
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
        this.patenteChasisForm.reset();
    }

  }

  crearTransportista(){
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

    if(this.transportistaForm.valid){
      console.log(this.transportistaForm.value);
      this.abmService.postTipoArticulo(this.transportistaForm.value)
      .subscribe(
        (data) => {
          Toast.fire({
            icon: 'success',
            title: 'Ingreso registrado con éxito',
          });
          this.transportistaIF  = true;
          this.getTransportistas();
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
        this.transportistaForm.reset();
    }
  }

  crearTipoArticulo(){
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

    if(this.tipoArticuloForm.valid){
      console.log(this.tipoArticuloForm.value);
      this.abmService.postTipoArticulo(this.tipoArticuloForm.value)
      .subscribe(
        (data) => {
          Toast.fire({
            icon: 'success',
            title: 'Ingreso registrado con éxito',
          });
          this.tipoArticuloIF  = true;
          this.getTipoArticulos();
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
        this.tipoArticuloForm.reset();
    }
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
      this.abmService.postIngreso(this.registerForm.value)
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
      console.log(this.registerForm.value);
      console.log('Registro inválido');
        Toast.fire({
          icon: 'error',
          title: 'Error: Verifique los campos ingresados',
        });
        this.registerForm.reset();
    }
  }

  /*--------Obtener peso de balanza--------*/ 

  getPeso(){
    this.abmService.getPesoActual(1).subscribe(r => {
      console.log(r);
      this.peso = r
    });
  }

  /*-------Listas para los selects-------*/

  getTransportistas(){
    this.abmService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaTransportistas);
      this.listaTransportistas = r.listaTransportistas
    });
  }
 
  getTipoArticulos(){
    this.abmService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaTipoArticulos);
      this.listaTipoArticulos = r.listaTipoArticulos
    });
  }

  getAtas(){
    this.abmService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaAtas);
      this.listaAtas= r.listaAtas
    });
  }

  getDestinos(){
    this.abmService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaDestinos);
      this.listaDestinos= r.listaDestinos
    });
  }

  getRemitos(){
    this.abmService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaRemitos);
      this.listaRemitos= r.listaRemitos
    });
  }

  getNacionalidades(){
    this.abmService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaNacionalidades);
      this.listaNacionalidades= r.listaNacionalidades
    });
  }

  getPatentesChasis(){
    this.abmService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaPatentesChasis);
      this.listaPatentesChasis= r.listaPatentesChasis
    });
  }

  getPatentesAcoplado(){
    this.abmService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaPatentesAcoplado);
      this.listaPatentesAcoplado= r.listaPatentesAcoplado
    });
  }

  getChoferes(){
    this.abmService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaChoferes);
      this.listaChoferes= r.listaChoferes
    });
  }

  getExportadores(){
    this.abmService.getNuevoIngreso().subscribe(r => {
      console.log(r.listaExportadores);
      this.listaExportadores= r.listaExportadores
    });
  }

  mostrarTipoArticulos(){
    this.tipoArticuloIF = !this.tipoArticuloIF;
    this.registerForm.get('idTipoArticulo')?.reset('');
  }
  
  mostrarTransportistas(){
    this.transportistaIF = !this.transportistaIF ;
    this.registerForm.get('idTransportista')?.reset('');
  }

  mostrarPatentes(){
    this.patenteChasisIF = !this.patenteChasisIF ;
    this.registerForm.get('idTransportista')?.reset('');
  }

  mostrarNacionalidades(){
    this.nacionalidadIF = !this.nacionalidadIF ;
    this.registerForm.get('idTransportista')?.reset('');
  }

  mostrarExportadores(){
    this.exportadorIF = !this.exportadorIF ;
    this.registerForm.get('idTransportista')?.reset('');
  }

  mostrarDestinos(){
    this.destinoIF = !this.destinoIF ;
    this.registerForm.get('idTransportista')?.reset('');
  }

  mostrarRemitos(){
    this.remitoIF = !this.remitoIF ;
    this.registerForm.get('idTransportista')?.reset('');
  }

  mostrarChoferes(){
    this.choferIF = !this.choferIF ;
    this.registerForm.get('idTransportista')?.reset('');
  }
 
  mostrarAtas(){
    this.ataIF = !this.ataIF;
    this.registerForm.get('idTransportista')?.reset('');
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


