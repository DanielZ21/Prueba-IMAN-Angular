import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  fechaIngreso: string;
  origen: string;
  patente: string;
  carga: string;
}

export interface TablaMaestra {
  patente: string;
  tara: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fechaIngreso: "10/08/21", origen: 'María Pilar', patente: '00D37', carga: 'Leche cruda'},
  {fechaIngreso: "10/08/21", origen: 'Arenaza', patente: 'AD635RS', carga: 'Leche cruda'},
];

const ELEMENT_DATA1: TablaMaestra[] = [
  {patente: "AA213MR", tara: '0.00'},
]

@Component({
  selector: 'app-porteria',
  templateUrl: './porteria.component.html',
  styleUrls: ['./porteria.component.css']
})

export class PorteriaComponent implements AfterViewInit {

  displayedColumns: string[] = ['fechaIngreso', 'origen', 'patente', 'carga'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns1: string[] = ['patente', 'tara'];
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatSort) sort1!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource1.sort = this.sort1;
  }

}
