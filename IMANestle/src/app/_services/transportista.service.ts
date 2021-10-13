import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { API_ROUTES } from 'src/data/route/api.routes';

@Injectable({
  providedIn: 'root'
})
export class TransportistaService {

  constructor(private http: HttpClient) { }

  getAllTransportistas():Observable<any>{
    return this.http.get(API_ROUTES.TRANSPORTISTA.GET_ALL_TRANSPORTISTAS);     
  }
}
