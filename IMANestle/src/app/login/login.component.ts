import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/servicios/auth.service';
import { observable } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario, UsuarioService } from 'src/servicios/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  usuario = new Usuario();
  [x: string]: any;
  //returnUrl: string;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    
    this.loginForm = this.formBuilder.group({
        'nombre': ['', Validators.required],
        'contraseña': ['', Validators.required]
    })

  }
  get Contraseña() {
    return this.loginForm.get("contraseña");
  }
  get Usuario() {
    return this.loginForm.get("usuario");
  }
  get PasswordValid() {
    return this.Contraseña?.touched && !this.Contraseña?.valid;
  }
  get UserValid() {
    return this.Usuario?.touched && !this.Usuario?.valid;
  }

  /*
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  */

  onEnviar(event: Event, usuario: Usuario): void {

    event.preventDefault;
    this.authService.login(this.usuario)
      .subscribe(
        data => {
          console.log("DATA" + JSON.stringify(data));
          this.router.navigate(['/home/movimientos']);
        },
        error => {
          this.error = error;
        }
      );
  }

}
