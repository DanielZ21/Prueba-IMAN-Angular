import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';
import { INTERNAL_ROUTES } from 'src/data/route/internal.routes';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  {

    return this.authService.isLogged.pipe(
      take(1),
      map((isLogged) => {
      //  console.log('NoAuthGuard ->',!isLogged)
        if(isLogged)
        {
          this.router.navigateByUrl(INTERNAL_ROUTES.HOME)
        }
        return !isLogged;
      })
    )
  }

}
