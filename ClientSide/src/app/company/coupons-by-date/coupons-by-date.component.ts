import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/company/coupon';
import { CompanyDataService } from 'src/app/company/company.company.data.service';

@Component({
  selector: 'app-coupons-by-date',
  templateUrl: './coupons-by-date.component.html',
  styleUrls: ['./coupons-by-date.component.css']
})
export class CouponsByDateComponent implements OnInit {

  coupons:Array<Coupon>;
  date:Date;
  error:string;
  content:boolean;
  constructor(private dataService:CompanyDataService) { 
    this.coupons = new Array<Coupon>();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.getCouponsByDate(this.date).subscribe((res:Array<Coupon>)=> {this.coupons = res; this.content=true; this.error=""}, error=>{this.error=error; this.content=false});
  }


}
