import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_ROUTES } from 'src/data/route/api.routes';


@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor(private http: HttpClient) { }

  getIngresos():Observable<any>{
    return this.http.get(API_ROUTES.INGRESO_FABRICA_TB.GET_INGRESOS);     
  }

  getNuevoIngreso():Observable<any>{
    return this.http.get(API_ROUTES.INGRESO_FABRICA_TB.GET_NUEVO_INGRESO_FABRICA);     
  }

  postIngreso(data:any):Observable<any>{
    return this.http.post(API_ROUTES.INGRESO_FABRICA_TB.POST_INGRESO_FABRICA, data);
  }

  getPesoActual(id:number):Observable<any>{
    return this.http.get(API_ROUTES.INGRESO_FABRICA_TB.GET_PESO_ACTUAL);
  }
}
