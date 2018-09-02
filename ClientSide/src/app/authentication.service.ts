import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { 
  }

  public setAuth(){
    localStorage.setItem('isAuth','true');
  }

  
  public isAuthenticated():boolean{
    return localStorage.getItem('isAuth') != undefined;
  }

  authenticate(user:User):Observable<any>{

    return this.http.post("http://localhost:8080/CouponsProjectWeb/rest/login/authenticate", user, {withCredentials:true});

  }

  logout():Observable<any>{
    localStorage.clear();
    return this.http.post("http://localhost:8080/CouponsProjectWeb/rest/logout",{withCredentials:true});
  }
}
