import { Coupon } from 'src/app/company/coupon';
import { CustomerDataService } from './../customer.customer.data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-coupons-by-price',
  templateUrl: './customer-coupons-by-price.component.html',
  styleUrls: ['./customer-coupons-by-price.component.css']
})
export class CustomerCouponsByPriceComponent implements OnInit {
  error: string;
  coupons: Array<Coupon>;
  price: number;
  isContent: boolean;
  constructor(private dataService: CustomerDataService) {
    this.coupons = new Array<Coupon>();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.getCouponsByPrice(this.price).subscribe((res: Array<Coupon>) => { this.coupons = res; this.isContent = true; this.error = "" }
      , error => { this.error = error; this.isContent = false });
  }
}
