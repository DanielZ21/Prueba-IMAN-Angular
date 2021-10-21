import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2';


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
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.forgotPasswordForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]]
    })

  }

  login(): void {
    const Toast = Swal.mixin({
      //Declaro el mixin de sweet alert 2
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });


    if (this.loginForm.valid) {
      this.error = false;
      this.cargando = true;
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value);
      
      /*     .subscribe(
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
        
    }  else {
      this.error = true;
      this.mensajeError = "¡Los campos no pueden estar vacíos!";
    }
  }
  

  /*
  login(): void {
    
    if (this.loginForm.invalid) {
      this.error = true;
      this.mensajeError = "¡Los campos no pueden estar vacíos!";
    }
    else {
      this.error = false;
      this.cargando = true;
      this.authService.login(this.loginForm.value);
      /*
      .subscribe((r: any) => {
        this.cargando = false;
        this.error = false;
        this.router.navigate(['/abm'])
      //(r);
        if (r) {
          window.location.reload();
        }
        else {
          this.cargando = false;
          this.error = true;
          this.mensajeError = 'Se produjo un error.';
        } 
      },
      */
     /*
      (error: any) => {
        this.cargando = false;
        this.error = true;
        this.mensajeError = 'Se produjo un error.';
        console.log(error);
      }
    
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



