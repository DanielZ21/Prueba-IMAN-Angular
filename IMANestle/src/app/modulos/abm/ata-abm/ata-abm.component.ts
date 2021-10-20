import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ListaATA } from 'src/app/models/IngresoFabricaTB';
import { AbmService } from 'src/app/_services/abm.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ata-abm',
  templateUrl: './ata-abm.component.html',
  styleUrls: ['./ata-abm.component.css']
})
export class AtaAbmComponent implements AfterViewInit {

  dataSource!: MatTableDataSource<ListaATA>;
  displayedColumns: string[] = ['ata', 'cuit','editar'];
  

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ataIF: boolean = true;

  ataForm: FormGroup = this.fb.group({
    id: [0],
    ata: [,[Validators.required]],
    cuit: [,[Validators.required]],
  });

  constructor(private fb: FormBuilder,private abmService: AbmService, private router: Router){
    this.getAtas();
  }

  getAtas():void{
  
    this.abmService.getAllAtas().subscribe(r => {
      console.log(r);
      this.dataSource = new MatTableDataSource(r);
      this.configTable();
    }, e => {
      console.log(e);
    })

  }

  configTable() {
    this.dataSource.sort = this.sort!;
  }  

  deleteATA(ATAId:number){

    const Toast = Swal.mixin({ //Declaro el mixin de sweet alert 2
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    
      Swal.fire({
        title: 'Esta a punto de borrar este item',
        text: '¿Seguro desea borrar esta ATA?',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        confirmButtonColor:'#28a745',
        showCancelButton:true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor:'#dc3545',
      }).then((result) => {
        if (result.isConfirmed) {
          this.abmService.deleteAta(ATAId)
            .subscribe(
            (data) => {
              console.log(data);
              console.log('Edición realizada con éxito!');
              Toast.fire({
                icon: 'success',
                title: 'ATA borrada con éxito'
              });
              this.getAtas();
            },
            (error) => {
              console.log(error);
              Toast.fire({
                icon: 'error',
                title: `Error de servidor`
              });
            }); 
        }
      }
    )
        console.log("Registro borrado");
  }

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
          this.ataIF = true;
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
      console.log(this.ataForm.value)
      console.log('Registro inválido');
        Toast.fire({
          icon: 'error',
          title: 'Error: Verifique los campos ingresados',
        });
        this.ataForm.reset();
    }
  }

  mostrarAtas(){
    this.ataIF = !this.ataIF;
    this.ataForm.get('idTransportista')?.reset('');
  }


}
