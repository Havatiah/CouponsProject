import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isError:boolean;
error:string;
  private credentials:User = {username:'',password:'',userType:''};
  constructor(private authService:AuthenticationService, private router:Router) { 
    
  }

  ngOnInit() {
  }

  login(){
    this.authService.authenticate(this.credentials).subscribe(res =>{
      this.authService.setAuth();
    if(this.credentials.userType=="Admin"){
      this.router.navigate(['admin']);
    }
    else if(this.credentials.userType=="Company"){
      this.router.navigate(['company']);
    }
    else if(this.credentials.userType=="Customer"){
      this.router.navigate(['customer']);
    }
  }, error => {this.error="Login failed. Please try again!"});

  }

}
