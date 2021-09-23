import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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
export class PorteriaVillaNuevaComponent implements AfterViewInit {
  displayedColumns: string[] = ['articulo', 'descripcion', 'cantidad', 'unidad', 'pallets'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  

}
