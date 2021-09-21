import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('init', [
      state('void', style({
        transform: 'translateX(-17%)',
        opacity: 0
      })),
      transition(':enter',
        [
          animate(500, style({
            transform: 'translateX(0)',
            opacity: 1
          }))
        ])
    ]),
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(180deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class LoginComponent {
  [x: string]: any;
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;

  error: boolean = false;
  flip: string = 'inactive';
  isLogin: boolean = true;
  cargando: boolean = false;
  mensajeError: any ;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.loginForm = this.fb.group({
      'userName': ['', [Validators.required,Validators.minLength(6)]],
      'password': ['', [Validators.required,Validators.minLength(6)]]
    });

    this.forgotPasswordForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]]
    })

  }

  

  /*
  login(): void {
    if (this.loginForm.valid) {
      this.error = false;
      this.cargando = true;
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value);
      
      /*         .subscribe(
          (r) => {
            this.cargando = false;
            this.error = false;
            console.log('Respuesta')
            console.log(r);
            this.router.navigateByUrl('/abm')
          }, (e) => {
            console.log('Error')
            console.log(e)
            this.cargando = false;
            this.error = true;
            this.mensajeError = e;
          }
        ); */
  /*
    }  else {
      this.error = true;
      this.mensajeError = "¡Los campos no pueden estar vacíos!";
    }
  }
  */

  /*
  
  login(): void {
    if (this.loginForm.invalid) {
      this.error = true;
      this.mensajeError = "¡Los campos no pueden estar vacíos!";
    }
    else {
      this.error = false;
      this.cargando = true;
      this.authService.login(this.loginForm.value).subscribe((r: { error: any; msg: any; }) => {
        this.cargando = false;
        this.error = false;
      
      //(r);
        if (r) {
          if (r.error) {
            this.error = true;
            this.mensajeError = r.msg;
          }

          else
          {
            window.location.reload();
          }
        }
      
        else {
          this.cargando = false;
          this.error = true;
          this.mensajeError = 'Se produjo un error.';
        }
      },
        (      _error: any) => {
        this.cargando = false;
        this.error = true;
        this.mensajeError = 'Se produjo un error.';
      }
      )
    }
  }
  */

  forgotPassword() {

  }

  onSearchChange(value: string): void {
    this.error = false;
  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    this.isLogin = (this.flip == 'inactive');

  }

  
}


function subscribe(arg0: (r: { error: any; msg: any; }) => void, arg1: (_error: any) => void) {
  throw new Error('Function not implemented.');
}

