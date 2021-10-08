import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Ingreso } from 'src/app/models/IngresoFabricaTB';
import { IngresoService } from 'src/app/_services/ingreso.service';
import { Router } from '@angular/router';

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
  displayedColumns: string[] = ['fechaIngreso', 'origen', 'patente', 'carga'];
  cargando: boolean = false;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ingresoService: IngresoService, private router: Router){
    this.getIngresos();
  }

  getIngresos():void{
    //this.dataSource=null;

    this.cargando = true;
    this.ingresoService.getIngresos().subscribe(r => {
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

}

export interface PeriodicElement {
  name: number;
  position: string;
  weight: number;
}

const ELEMENT_DATA1: PeriodicElement[] = [
  {position: 'AA213MR', name: 0.00, weight: 1.0079},
  
];
