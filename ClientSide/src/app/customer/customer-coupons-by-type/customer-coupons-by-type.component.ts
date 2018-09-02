import { CustomerDataService } from './../customer.customer.data.service';
import { Coupon } from 'src/app/company/coupon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-coupons-by-type',
  templateUrl: './customer-coupons-by-type.component.html',
  styleUrls: ['./customer-coupons-by-type.component.css']
})
export class CustomerCouponsByTypeComponent implements OnInit {

  coupons:Array<Coupon>;
  type:string;
  error:string;
  isContent:boolean;
  constructor(private dataService:CustomerDataService) { 
    this.coupons = new Array<Coupon>();
  }

  ngOnInit() {
  }

  onSubmit() {
    
    this.coupons = new Array<Coupon>();
    this.dataService.getCouponsByType(this.type).subscribe((res:Array<Coupon>)=> {this.coupons = res; this.isContent=true}
    , error=>{this.error=error; this.isContent=false});
  }
   
  }

