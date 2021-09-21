import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecursosService } from '@data/services/api/recursos.service';
import { catchError } from 'rxjs/operators';
import { AuthService } from '@data/services/api/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup
  enError: boolean = false;
  cargando: boolean= false;
  mensajeError: string ="" ;
  usuarioCreado: boolean = false;

  public listaIniciales: Observable<Array<string>>;

  constructor(private fb: FormBuilder, private authService:AuthService, private recursosService:RecursosService) {
    this.registerForm = this.fb.group({
      'username':['', Validators.required],
      'iniciales':['OTRO', Validators.required],
      'password':['', Validators.required]
    });
    this.listaIniciales = this.getListaIniciales();
   }

  ngOnInit(): void {
  // console.log("En register")
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

  getListaIniciales() {
    return this.recursosService.getListaIniciales().pipe(map(response => Object.assign(new Array<string>(), response)))
  }

  resetForm()
  {
    this.registerForm = this.fb.group({
      'username':['', Validators.required],
      'iniciales':['OTRO', Validators.required],
      'password':['', Validators.required]
    });
  }

  onSearchChange(value: string): void {  
    this.enError = false;
  }

}
