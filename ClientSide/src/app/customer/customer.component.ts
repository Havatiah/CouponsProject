import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout().subscribe(res=>console.log(res));
    this.router.navigate(['login']);
  }  


}
