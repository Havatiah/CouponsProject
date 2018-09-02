import { AuthGuardService } from './auth-guard.service';
import { CustomerCouponsTableComponent } from './customer/customer-coupons-table/customer-coupons-table.component';
import { CustomerCouponsByPriceComponent } from './customer/customer-coupons-by-price/customer-coupons-by-price.component';
import { CouponsDataTableComponent } from './company/coupons-data-table/coupons-data-table.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersDataTableComponent } from './admin/customers-data-table/customers-data-table.component';
import { ShowAllCompaniesComponent } from './admin/show-all-companies/show-all-companies.component';
import { CreateCompanyComponent } from './admin/create-company/create-company.component';
import { CompaniesDataTableComponent } from './admin/companies-data-table/companies-data-table.component';
import { LoginComponent } from './login/login.component';
import { ShowAllCustomersComponent } from './admin/show-all-customers/show-all-customers.component';
import { CreateCustomerComponent } from './admin/create-customer/create-customer.component';
import { CompanyComponent } from './company/company.component';
import { CreateCouponComponent } from './company/create-coupon/create-coupon.component';
import { ShowAllCouponsComponent } from './company/show-all-coupons/show-all-coupons.component';
import { CouponsByTypeComponent } from './company/coupons-by-type/coupons-by-type.component';
import { CouponsByPriceComponent } from './company/coupons-by-price/coupons-by-price.component';
import { CouponsByDateComponent } from './company/coupons-by-date/coupons-by-date.component';
import { CustomerComponent } from './customer/customer.component';
import { PurchaseCouponComponent } from './customer/purchase-coupon/purchase-coupon.component';
import { ShowAllCustomerCouponsComponent } from './customer/show-all-customer-coupons/show-all-customer-coupons.component';
import { CustomerCouponsByTypeComponent } from './customer/customer-coupons-by-type/customer-coupons-by-type.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'',canActivate:[AuthGuardService],children:[
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'companies-data-table', component: CompaniesDataTableComponent,
        children: [
          { path: 'show-all-companies', component: ShowAllCompaniesComponent },
          { path: 'create-company', component: CreateCompanyComponent }
        ]
      }, {
        path: 'customers-data-table', component: CustomersDataTableComponent,
        children: [
          { path: 'show-all-customers', component: ShowAllCustomersComponent },
          { path: 'create-customer', component: CreateCustomerComponent }
        ]
      }
    ]
  }, 
  {
    path: 'company', component: CompanyComponent,
    children: [
      { path: 'company-details', component: CompanyDetailsComponent },
      {
        path: 'coupons-data-table', component: CouponsDataTableComponent,
        children: [
          { path: 'show-all-coupons', component: ShowAllCouponsComponent },
          { path: 'coupons-by-type', component: CouponsByTypeComponent },
          { path: 'coupons-by-price', component: CouponsByPriceComponent },
          { path: 'coupons-by-date', component: CouponsByDateComponent }
        ]
      },
      { path: 'create-coupon', component: CreateCouponComponent }
    ]},
  {
     path: 'customer', component: CustomerComponent,
  children: [
    {path: 'purchase-coupon', component: PurchaseCouponComponent },
    {path: 'customer-coupons-table', component: CustomerCouponsTableComponent,
    children:[
      {path: 'show-all-customer-coupons', component: ShowAllCustomerCouponsComponent},
      { path:'customer-coupons-by-type', component: CustomerCouponsByTypeComponent},
      { path: 'customer-coupons-by-price', component: CustomerCouponsByPriceComponent}
    ]
    }
  ]

  }
  ]}

]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes,{ useHash: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
