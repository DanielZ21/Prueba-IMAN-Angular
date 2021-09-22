import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
import { Registro } from '../models/apí/registro';
import { API_ROUTES } from 'src/data/route/api.routes';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {}

  
}
