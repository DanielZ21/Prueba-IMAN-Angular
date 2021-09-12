import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'

export class Usuario
{
  nombre:string="";
  contraseña:string="";
  id:number=0;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
}
