import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Ingreso } from 'src/app/models/IngresoFabricaTB';
import { Router } from '@angular/router';
import { AbmService } from 'src/app/_services/abm.service';
import Swal from 'sweetalert2';

export interface Porteria {
  fechaIngreso: string;
  origen: string;
  patente: string;
  carga: string;
}



const ELEMENT_DATA: Porteria[] = [
  {fechaIngreso: "10/08/21", origen: 'María Pilar', patente: '00D37', carga: 'Leche cruda'},
  {fechaIngreso: "10/08/21", origen: 'Arenaza', patente: 'AD635RS', carga: 'Leche cruda'},
];



@Component({
  selector: 'app-porteria',
  templateUrl: './porteria.component.html',
  styleUrls: ['./porteria.component.css']
})

export class PorteriaComponent implements AfterViewInit, OnInit {


  public ingresos: Ingreso[] | undefined;
  dataSource!: MatTableDataSource<Ingreso>;
  displayedColumns: string[] = ['fechaIngreso', 'origen', 'patente', 'carga', 'ruta'];
  cargando: boolean = false;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private abmService: AbmService, private router: Router){
    this.getIngresos();
  }

  getIngresos():void{
    //this.dataSource=null;

    this.cargando = true;
    this.abmService.getIngresos().subscribe(r => {
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

  displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA1);

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
 

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource1.paginator = this.paginator;
  }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  /*
  test(){
    Swal.fire({
      title: 'Login Form',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup()?.querySelector('#login')?.value
        const password = Swal.getPopup()?.querySelector('#password')?.value
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      Swal.fire(`
        Login: ${result.value?.login}
        Password: ${result.value?.password}
      `.trim())
    })
    
  }
  */

}

export interface PeriodicElement {
  name: number;
  position: string;
  weight: number;
}

const ELEMENT_DATA1: PeriodicElement[] = [
  {position: 'AA213MR', name: 0.00, weight: 1.0079},
  
];
