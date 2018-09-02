import { DataService } from 'src/app/admin/admin.data.service';

import { Component, OnInit } from '@angular/core';
import { Company } from '../../company';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  newCompany: Company
  error: string
  success:boolean
  constructor(private dataService: DataService) {
    this.newCompany = new Company();
  }
  ngOnInit() {
  }

  onSubmit() {
    this.dataService.createCompany(this.newCompany).subscribe((res) => {this.success=true;this.error="";},error=>{this.error=error;this.success=false});
  }

}
