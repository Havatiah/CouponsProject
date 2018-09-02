import { CompanyDataService } from '../company.company.data.service';
import { Company } from './../../company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  private company:Company;
  constructor(private dataService:CompanyDataService) {
    this.company = new Company();
   }

  ngOnInit() {
    this.dataService.getCompany().subscribe((res:Company)=> this.company = res);
  }
}
