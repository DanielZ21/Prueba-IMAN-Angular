import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ListaChofere, ListaCliente } from 'src/app/models/IngresoFabricaTB';
import { AbmService } from 'src/app/_services/abm.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-abm',
  templateUrl: './cliente-abm.component.html',
  styleUrls: ['./cliente-abm.component.css']
})
export class ClienteAbmComponent implements AfterViewInit {

  dataSource!: MatTableDataSource<ListaCliente>;
  displayedColumns: string[] = ['cliente','editar'];

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private abmService: AbmService, private router: Router){
    this.getClientes();
  }

  getClientes():void{
  
    this.abmService.getAllClientes().subscribe(r => {
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

  deleteCliente(ClienteID:number){

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
        text: '¿Seguro desea borrar este chofer?',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        confirmButtonColor:'#28a745',
        showCancelButton:true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor:'#dc3545',
      }).then((result) => {
        if (result.isConfirmed) {
          this.abmService.deleteCliente(ClienteID)
            .subscribe(
            (data) => {
              console.log(data);
              console.log('Edición realizada con éxito!');
              Toast.fire({
                icon: 'success',
                title: 'Chofer borrada con éxito'
              });
              this.getClientes();
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

}
