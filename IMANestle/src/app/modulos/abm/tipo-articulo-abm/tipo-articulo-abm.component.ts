import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { ListaTipoArticulo } from 'src/app/models/IngresoFabricaTB';
import { AbmService } from 'src/app/_services/abm.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipo-articulo-abm',
  templateUrl: './tipo-articulo-abm.component.html',
  styleUrls: ['./tipo-articulo-abm.component.css']
})
export class TipoArticuloAbmComponent implements AfterViewInit {

  public listaTipoArticulos!: ListaTipoArticulo[];
  dataSource!: MatTableDataSource<ListaTipoArticulo>;
  displayedColumns: string[] = ['tipoArticulo', 'editar'];
  cargando: boolean = false;

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor(private abmService: AbmService, private router: Router){
    this.getTipoArtioculos();
  }

  getTipoArtioculos():void{
    //this.dataSource=null;

    this.cargando = true;
    this.abmService.getAllTipoArticulos().subscribe(r => {
      console.log(r);
      this.dataSource = new MatTableDataSource(r);
      this.configTable();
      this.cargando = false;
    }, e => {
      this.cargando = false;
    })

  }

  configTable() {
    this.dataSource.sort = this.sort!;
  }  

  deleteTipoArticulo(TipoArticuloId:number){

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
        text: '¿Seguro desea borrar este tipo de artículo?',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        confirmButtonColor:'#28a745',
        showCancelButton:true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor:'#dc3545',
      }).then((result) => {
        if (result.isConfirmed) {
          this.abmService.deleteTipoArticulo(TipoArticuloId)
            .subscribe(
            (data) => {
              console.log(data);
              console.log('Edición realizada con éxito!');
              Toast.fire({
                icon: 'success',
                title: 'Tipo de artículo borrado con éxito'
              });
              this.getTipoArtioculos();
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
