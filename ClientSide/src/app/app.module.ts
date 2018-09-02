import { CompanyComponent } from './company/company.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { DataService } from './admin/admin.data.service';
import {CompanyDataService} from './company/company.company.data.service';
import {CustomerDataService} from './customer/customer.customer.data.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomersDataTableComponent } from './admin/customers-data-table/customers-data-table.component';
import { CompaniesDataTableComponent } from './admin/companies-data-table/companies-data-table.component';
import { AppRoutingModule } from './/app-routing.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { CreateCompanyComponent } from './admin/create-company/create-company.component';
import { ShowAllCompaniesComponent } from './admin/show-all-companies/show-all-companies.component';
import { FormsModule }   from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { CreateCustomerComponent } from './admin/create-customer/create-customer.component';
import { ShowAllCustomersComponent } from './admin/show-all-customers/show-all-customers.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { CouponsDataTableComponent } from './company/coupons-data-table/coupons-data-table.component';
import { CreateCouponComponent } from './company/create-coupon/create-coupon.component';
import { ShowAllCouponsComponent } from './company/show-all-coupons/show-all-coupons.component';
import { CouponsByPriceComponent } from './company/coupons-by-price/coupons-by-price.component';
import { CouponsByDateComponent } from './company/coupons-by-date/coupons-by-date.component';
import { CouponsByTypeComponent } from './company/coupons-by-type/coupons-by-type.component';
import { PurchaseCouponComponent } from './customer/purchase-coupon/purchase-coupon.component';
import { CustomerCouponsByTypeComponent } from './customer/customer-coupons-by-type/customer-coupons-by-type.component';
import { CustomerCouponsByPriceComponent } from './customer/customer-coupons-by-price/customer-coupons-by-price.component';
import { ShowAllCustomerCouponsComponent } from './customer/show-all-customer-coupons/show-all-customer-coupons.component';
import { CustomerCouponsTableComponent } from './customer/customer-coupons-table/customer-coupons-table.component';
import {CustomerComponent} from './customer/customer.component';
@NgModule({
  declarations: [
    AppComponent,
    CompaniesDataTableComponent,
    CustomersDataTableComponent,
    CreateCompanyComponent,
    ShowAllCompaniesComponent,
    AdminComponent,
    LoginComponent,
    CreateCustomerComponent,
    ShowAllCustomersComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    CouponsDataTableComponent,
    CreateCouponComponent,
    ShowAllCouponsComponent,
    CouponsByPriceComponent,
    CouponsByDateComponent,
    CouponsByTypeComponent,
    PurchaseCouponComponent,
    CustomerCouponsByTypeComponent,
    CustomerCouponsByPriceComponent,
    ShowAllCustomerCouponsComponent,
    CustomerCouponsTableComponent,
    CustomerComponent

  ],
  imports: [
    BrowserModule ,HttpClientModule, AppRoutingModule,NgbModule.forRoot(),FormsModule
  ],
  providers: [  DataService, NgbModal, NgbModalStack, CompanyDataService, CustomerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
