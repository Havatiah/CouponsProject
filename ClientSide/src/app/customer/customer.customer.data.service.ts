import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Coupon } from '../company/coupon';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  purchaseCoupon(id: number): Observable<any> {

    return this.http.post<any>("http://localhost:8080/CouponsProjectWeb/rest/customer/purchaseCoupon/" + id, { withCredentials: true });
  }
  getCoupons() {
    return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/customer/getCustomerCoupons", { withCredentials: true });
  }

  getCouponsByType(type: string) {
    return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/customer/getCustomerCouponsByType?type=" + type, { withCredentials: true });
  }

  getCouponsByPrice(price: number) {
    return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/customer/getCustomerCouponsByPrice?price=" + price, { withCredentials: true });
  }

  getAllCouponsList() {
    return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/customer/getAllCoupons", { withCredentials: true });
  }

}
