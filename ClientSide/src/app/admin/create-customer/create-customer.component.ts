import { Customer } from './../../customer';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/admin/admin.data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  newCustomer: Customer
  error: string
  success:boolean
  constructor(private dataService: DataService, private router: Router) {
    this.newCustomer = new Customer();
   }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.createCustomer(this.newCustomer).subscribe((res) => {this.success=true;this.error="";},error=>{this.error=error;this.success=false});
  }

}
