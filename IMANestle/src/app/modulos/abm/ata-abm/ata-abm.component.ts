import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ATA } from 'src/app/models/Ata';
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
  displayedColumns: string[] = ['ata', 'cuit','editar','eliminar'];
  
  ata!: ATA

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  formGroup!: FormGroup;
  ataIF: boolean = true;

  ataForm1: FormGroup = this.fb.group({
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

    if(this.ataForm1.valid){
      console.log(this.ataForm1.value);
      this.abmService.postAta(this.ataForm1.value)
      .subscribe(
        (data) => {
          Toast.fire({
            icon: 'success',
            title: 'Ingreso registrado con éxito',
          });
          this.ataIF = true;
          this.getAtas();
          this.ataForm1.reset();
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
      console.log(this.ataForm1.value)
      console.log('Registro inválido');
        Toast.fire({
          icon: 'error',
          title: 'Error: Verifique los campos ingresados',
        });
        this.ataForm1.reset();
    }
  }

  mostrarAtas(){
    this.ataIF = !this.ataIF;
    this.ataForm1.get('idATA')?.reset('');
  }

  
  editarAta(ATAId:number){
    this.ataIF = false;
    this.abmService.getOneAta(ATAId).subscribe(data => {
      console.log('editable',data)
      this.ata = data;
      this.ataForm1.patchValue({
        ata: data.ata,
        cuit: data.cuit
      })
    }, error => {
      console.log(error);
    })

  }


}
