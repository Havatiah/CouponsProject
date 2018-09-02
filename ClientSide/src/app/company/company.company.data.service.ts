import { Coupon } from './coupon';
import { Company } from '../company';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CompanyDataService {

    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
    }

    createCoupon(coupon: Coupon): Observable<any> {

        return this.http.post<any>("http://localhost:8080/CouponsProjectWeb/rest/company/createCoupon", coupon, { withCredentials: true });
    }
    getCompany() {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/company/getCompany", { withCredentials: true });

    }
    getCoupons() {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/company/getCoupons", { withCredentials: true });

    }
    getCouponsByType(type: string) {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/company/getCouponsByType?type=" + type, { withCredentials: true });
    }
    getCouponsByPrice(price: number) {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/company/getCouponsByPrice?price=" + price, { withCredentials: true });
    }
    getCouponsByDate(date: Date) {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/company/getCouponsByDate?date=" + date, { withCredentials: true });
    }
    updateCoupon(coupon: Coupon): Observable<any> {
        return this.http.put("http://localhost:8080/CouponsProjectWeb/rest/company/coupon", coupon, { withCredentials: true });
    }

    removeCoupons(id: number) {
        const url = "http://localhost:8080/CouponsProjectWeb/rest/company/coupon/" + id;
        return this.http.delete(url, { withCredentials: true }).subscribe(data => { });
    }



}