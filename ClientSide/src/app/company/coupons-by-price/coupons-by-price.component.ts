import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/company/coupon';
import { CompanyDataService } from 'src/app/company/company.company.data.service';

@Component({
  selector: 'app-coupons-by-price',
  templateUrl: './coupons-by-price.component.html',
  styleUrls: ['./coupons-by-price.component.css']
})
export class CouponsByPriceComponent implements OnInit {

  coupons:Array<Coupon>;
  price:number;
  error:string;
  content:boolean;
  constructor(private dataService:CompanyDataService) { 
    this.coupons = new Array<Coupon>();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.getCouponsByPrice(this.price).subscribe((res:Array<Coupon>)=> {this.coupons = res;this.error=""; this.content=true}, error=>{this.error=error; this.content=false  });
  }

}
