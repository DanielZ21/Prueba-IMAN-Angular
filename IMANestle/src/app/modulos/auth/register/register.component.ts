import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
//import { error } from 'protractor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup
  enError: boolean = false;
  cargando: boolean= false;
  mensajeError: string ="" ;
  usuarioCreado: boolean = false;

 

  constructor(private fb: FormBuilder, private authService:AuthService) {
    this.registerForm = this.fb.group({
      'userName':['', Validators.required],
      'password':['', [Validators.required, Validators.minLength(6)]],
      'nombre':['', Validators.required],
      'idSucursal': [1],
      'rol': ['Usuario'],
      'habilitado': [1],
      'email':['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  register():void
  {
    this.usuarioCreado = false;
    if(this.registerForm.invalid)
    {
      this.enError = true;
      this.mensajeError ="¡Los campos no pueden estar vacíos!";
    }
    else
    {
      this.cargando = true;
      this.enError = false;
      this.authService.register(this.registerForm.value).subscribe(data => {
        this.resetForm();
        this.usuarioCreado = true;
        this.cargando = false;
        this.enError = false
      },  err =>
      {
         this.cargando = false;
         this.enError = true;
         this.mensajeError = err;
      }      
    );
    }
  }

  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg);
    return Observable.throw(error);
  }

  
  resetForm()
  {
    this.registerForm = this.fb.group({
      'userName':['', Validators.required],
      'password':['', [Validators.required, Validators.minLength(6)]],
      'nombre':['', Validators.required],
      'idSucursal': [1],  //idSucursal, rol y habilitado quedan predefinidos.
      'rol': ['Usuario'],
      'habilitado': [1],
      'email':['', Validators.required]
    });
  }

  onSearchChange(value: string): void {  
    this.enError = false;
  }


}
