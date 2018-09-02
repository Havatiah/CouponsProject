import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout().subscribe(res=>console.log(res));
    this.router.navigate(['login']);
  }

}
