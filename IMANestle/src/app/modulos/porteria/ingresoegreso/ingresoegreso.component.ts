import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface PeriodicElement1 {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface PeriodicElement2 {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const ELEMENT_DATA1: PeriodicElement1[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-ingresoegreso',
  templateUrl: './ingresoegreso.component.html',
  styleUrls: ['./ingresoegreso.component.css']
})
export class IngresoegresoComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns1: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource2 = ELEMENT_DATA2;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatSort) sort1!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource1.sort = this.sort1;
  }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  myControl1 = new FormControl();
  options1: string[] = ['One', 'Two', 'Three'];
  filteredOptions1!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.filteredOptions1 = this.myControl1.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter1(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter1(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options1.filter(option => option.toLowerCase().includes(filterValue));
  }

}
