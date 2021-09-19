import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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

  displayedColumns: string[] = ['fechaIngreso', 'origen', 'patente', 'carga'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA1);

  @ViewChild(MatSort) sort!: MatSort;
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
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA1: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  
];
