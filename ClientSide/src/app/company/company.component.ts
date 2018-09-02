import { CompanyDataService } from './company.company.data.service';
import { Company } from './../company';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  private company:Company;
  constructor(private dataService:CompanyDataService, private authService:AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.dataService.getCompany().subscribe((res:Company)=> this.company = res);
  }

  logout(){
    this.authService.logout().subscribe(res=>console.log(res));
    this.router.navigate(['login']);
  }

}
