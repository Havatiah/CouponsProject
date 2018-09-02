import { CustomerDataService } from './../customer.customer.data.service';
import { Coupon } from 'src/app/company/coupon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all-customer-coupons',
  templateUrl: './show-all-customer-coupons.component.html',
  styleUrls: ['./show-all-customer-coupons.component.css']
})
export class ShowAllCustomerCouponsComponent implements OnInit {

  coupons:Array<Coupon>;
  error:string;
  isContent:boolean;
  constructor(private dataService:CustomerDataService) {
    this.coupons = new Array<Coupon>();
   }

  ngOnInit() {
    this.dataService.getCoupons().subscribe((res:Array<Coupon>)=> {this.coupons = res; this.isContent=true; this.error=""}
    , error=>{this.error=error; this.isContent=false});
  }
  }


