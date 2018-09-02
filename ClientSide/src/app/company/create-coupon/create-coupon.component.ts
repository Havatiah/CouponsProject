import { Coupon } from 'src/app/company/coupon';
import { Component, OnInit } from '@angular/core';
import {CompanyDataService } from 'src/app/company/company.company.data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {
newCoupon:Coupon
error: string
success:boolean
  constructor(private dataService: CompanyDataService, private router: Router) {
    this.newCoupon = new Coupon();
  }

  ngOnInit() {
  }
  onSubmit() {
      this.dataService.createCoupon(this.newCoupon).subscribe((res) => {this.success=true;this.error="";},error=>{this.error=error;this.success=false});
  }
}
