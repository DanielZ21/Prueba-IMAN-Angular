import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { API_ROUTES } from 'src/data/route/api.routes';

import { IApiUserAuthenticated } from 'src/app/models/apí/iapi-account-user.metada';
import { IApiError } from 'src/app/models/apí/iapi-error.metadata';

import { JwtHelperService } from '@auth0/angular-jwt'
import { CookieService } from 'ngx-cookie-service';
import { INTERNAL_ROUTES } from 'src/data/route/internal.routes';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: BehaviorSubject<IApiUserAuthenticated>;
  public nameUserLS = 'currentUserSGC';

  public isUserLoggedIn = new BehaviorSubject<boolean>(false);

  private testConnectionPath = environment.apiUrl + 'Account/TestConnection';

  public redirectUrl?: string | null;

  blnLoggedIn = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService:CookieService
  ) {
    //const user = localStorage.getItem(this.nameUserLS);
    const user = this.cookieService.get(this.nameUserLS);
    this.currentUser = new BehaviorSubject(
      (user) ? JSON.parse(user) : { token: 'EMPTY' } as IApiUserAuthenticated
    );
    // console.log('Chckeo el token ctr');
    this.checkToken();
  }

  get isLogged(): Observable<boolean> {
    return this.isUserLoggedIn.asObservable();
  }

  login(data: any) {
    return this.http
    .post<string>(API_ROUTES.AUTH.LOGIN,data)
      .subscribe(
        r => {

        },e => {
          e.error.text;
          console.log(data)
          const response = e.error.text;
          console.log('e.error.text ->', e.error.text);
             //   console.log('e.error.text -> Lo hago verdadero');
            this.isUserLoggedIn.next(true);
            this.blnLoggedIn = true;
            
            // this.setUserToLocalStorage(e.error.text);
            this.cookieService.set('token',e.error.text);
            if (this.redirectUrl) {
              this.router.navigate([this.redirectUrl]);
              this.redirectUrl = null;
            }
          else {
            //   console.log('e.error.text -> Lo hago falso');
            this.isUserLoggedIn.next(false);
            this.blnLoggedIn = false;
            // localStorage.removeItem(this.nameUserLS);
            this.cookieService.delete(this.nameUserLS);
          }
          this.cookieService.check('token');
          return e.error.text, this.router.navigateByUrl('/porteria');
          
        }
      )
      
     /* 
     
     CON COOKIES

     .pipe(
        map((res: string) => {
          const response = res;
          console.log('Res ->', res);
             //   console.log('Res -> Lo hago verdadero');
            this.isUserLoggedIn.next(true);
            this.blnLoggedIn = true;
            
            // this.setUserToLocalStorage(res);
            this.cookieService.set('token',res);
            if (this.redirectUrl) {
              this.router.navigate([this.redirectUrl]);
              this.redirectUrl = null;
            }
          else {
            //   console.log('Res -> Lo hago falso');
            this.isUserLoggedIn.next(false);
            this.blnLoggedIn = false;
            // localStorage.removeItem(this.nameUserLS);
            this.cookieService.delete(this.nameUserLS);
          }
          this.cookieService.check('token');
          return res; 
        }),
        catchError((error) => this.handlerError(error))
      ); */
  }


  logout() {
    // console.log('Logout -> Lo hago falso');
    this.isUserLoggedIn.next(false);
    this.blnLoggedIn = false;
    //  console.log('blnLoggedIn en Logout -> Lo hago false ', this.blnLoggedIn);
    //localStorage.removeItem(this.nameUserLS);
    this.cookieService.delete(this.nameUserLS);
    this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
  }

  private handlerError(error: any): Observable<never> {
    let errorMensaje = ''
    if (error) {
      errorMensaje = `Error: code ${error.message}`;
    }
    // window.alert(errorMensaje)
    return throwError(errorMensaje);
  }

  private checkToken(): void {
    // const data = localStorage.getItem(this.nameUserLS);
    const data = this.cookieService.get(this.nameUserLS);
    if (data) {
      const user: IApiUserAuthenticated = JSON.parse(data);
      const token = user.token;
      const isExpired = helper.isTokenExpired(token);
      //  console.log('isExpired ->', isExpired);
      if (isExpired) {
        this.isUserLoggedIn.next(false);
        this.logout()
      } else {
        this.isUserLoggedIn.next(true);
        this.blnLoggedIn = true;
        //    console.log('blnLoggedIn en checkToken -> Lo hago true ', this.blnLoggedIn);
      }
    }
    else {
      //  console.log('Token -> Lo hago falso');
      this.isUserLoggedIn.next(false);
      this.blnLoggedIn = false;
      //  console.log('blnLoggedIn en checkToken -> Lo hago false ', this.blnLoggedIn);
    }
  }

  public getToken(): string | null {
    // const data = localStorage.getItem(this.nameUserLS);
    const data = this.cookieService.get(this.nameUserLS);
    if (data) {
      const user: IApiUserAuthenticated = JSON.parse(data);
      const token = user.token;
      const isExpired = helper.isTokenExpired(token);
      //    console.log('isExpired ->', isExpired);
      if (isExpired) {
        this.isUserLoggedIn.next(false);
        return null;
      }
      else {
        this.isUserLoggedIn.next(true);
        return token;
      }
    }
    this.isUserLoggedIn.next(false);
    return null;
  }

  private setUserToLocalStorage(user: string) {
    //localStorage.setItem(this.nameUserLS, JSON.stringify(user));
    this.cookieService.set(this.nameUserLS, JSON.stringify(user))
  }


  register(data: any): Observable<any> {
    console.log(data);
    return this.http.post(API_ROUTES.AUTH.REGISTER, data)
  }

  isAuthenticated(): Observable<any> {
    return this.http.get(this.testConnectionPath);
  }

  getUser(): IApiUserAuthenticated | null {
    const data = localStorage.getItem(this.nameUserLS);
    if (data) {
      const user: IApiUserAuthenticated = JSON.parse(data);
      return user;
    }
    return null;
  }
  
  
  rolePer(rolesNecesarios: string[]): boolean {

    var result = false;
    this.getUser()?.roles.forEach(rol => {

      if (rolesNecesarios && rolesNecesarios.indexOf(rol) != -1) {
        result = true;
     }

    });

    return result;

  }
  

  
}

