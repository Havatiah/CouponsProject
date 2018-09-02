import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router,private authService:AuthenticationService) { }

  canActivate():boolean{
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }

    return true;

  }


}
