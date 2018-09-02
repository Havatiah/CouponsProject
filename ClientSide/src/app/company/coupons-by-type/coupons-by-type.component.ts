import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/company/coupon';
import { CompanyDataService } from 'src/app/company/company.company.data.service';

@Component({
  selector: 'app-coupons-by-type',
  templateUrl: './coupons-by-type.component.html',
  styleUrls: ['./coupons-by-type.component.css']
})
export class CouponsByTypeComponent implements OnInit {
  coupons:Array<Coupon>;
  type:string;
  error:string;
  content:boolean;
  constructor(private dataService:CompanyDataService) { 
    this.coupons = new Array<Coupon>();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.getCouponsByType(this.type).subscribe((res:Array<Coupon>)=> {this.coupons = res; this.error="";this.content=true}, error=>{this.error=error; this.content=false});
  }

}

