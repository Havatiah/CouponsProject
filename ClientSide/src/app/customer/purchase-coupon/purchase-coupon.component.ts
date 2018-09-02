import { CustomerDataService } from './../customer.customer.data.service';
import { Coupon } from 'src/app/company/coupon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  coupons:Array<Coupon>;
  success:boolean[];
  error
  constructor(private dataService:CustomerDataService) { 
    this.coupons = new Array<Coupon>();
    this.success=[];
    this.error=[];
  }

  ngOnInit() {
    this.dataService.getAllCouponsList().subscribe((res:Array<Coupon>)=> this.coupons = res);
  }

  purchaseCoupon(id:number,index:number){
    if(confirm("Are you sure ? ")){
      this.dataService.purchaseCoupon(id).subscribe(res =>{this.success[index]=true;},error=>this.error[index]=error);
    } 
  }

}
