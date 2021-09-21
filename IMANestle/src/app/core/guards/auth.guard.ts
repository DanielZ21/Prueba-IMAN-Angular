import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';
import { INTERNAL_ROUTES } from 'src/data/route/internal.routes';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }


  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;

    return this.authService.isLogged.pipe(
      take(1),
      map((isLogged) => {
        const userRoles = this.authService.getUser()?.roles;
        if (!isLogged) {
          this.authService.redirectUrl = url;
          //console.log(url)
          this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN)
        }

        var roles = next.data.roles;

        if (roles) {
          var rolOK = false;
          roles.forEach((rol: string) => {

            if (userRoles && userRoles.indexOf(rol) != -1) {

              rolOK = true;
            }
          });

          if (!rolOK) {
            this.router.navigateByUrl(INTERNAL_ROUTES.HOME);
            return false;
          }
        }

        //   var rolOK = false;
        //  if( next.data.roles)
        //  {
        //    console.log(next.data.roles)
        //   next.data?.roles.forEach((rol: string) => {

        //     if (userRoles && userRoles.indexOf(rol) != -1) {

        //       rolOK = true;
        //    }
        //   });
        //  }
        //  if(!rolOK)
        //  {
        //   this.router.navigateByUrl(INTERNAL_ROUTES.HOME);
        //    return false;
        //  }


        // if (next.data.role && next.data.role.indexOf(userRole) === -1) {
        //   //console.log("Enviado:" + userRole)
        //   //console.log("Requerido:" + next.data.role)
        //   this.router.navigateByUrl(INTERNAL_ROUTES.HOME)
        //   return false;
        // }


        return isLogged;
      })
    )
  }


}
