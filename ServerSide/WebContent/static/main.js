(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*******************************************************************************
 * !**********************************************************!*\ !***
 * ./src/$$_lazy_route_resource lazy namespace object ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*******************************************************************************
 * !*******************************************!*\ !***
 * ./src/app/admin/admin.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*******************************************************************************
 * !********************************************!*\ !***
 * ./src/app/admin/admin.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <nav class =\"navbar navbar-fixed-top navbar-default navbar-dark\" align=\"left\">\n    <div class =\"container\">\n      <a class =\"navbar-brand\">CouponSystem</a>\n      <ul class =\"nav navbar-nav\">\n        <li class =\"nav-item\" > <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['companies-data-table']\">Companies</a></li>\n        <li class =\"nav-item\" > <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['customers-data-table']\">Customers</a></li>\n        <li class =\"nav-item\" > <a class=\"nav-link\" (click)=\"logout()\" >Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n  \n    <router-outlet></router-outlet>\n \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*******************************************************************************
 * !******************************************!*\ !***
 * ./src/app/admin/admin.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																									 * !
																									 * ./../authentication.service
																									 */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/router
																							 */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.logout = function () {
        this.authService.logout().subscribe(function (res) { return console.log(res); });
        this.router.navigate(['login']);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/* ! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/* ! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.data.service.ts":
/*******************************************************************************
 * !*********************************************!*\ !***
 * ./src/app/admin/admin.data.service.ts ***! \
 ******************************************************************************/
/* ! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																									 * !
																									 * @angular/common/http
																									 */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    DataService.prototype.getAllCustomers = function () {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/admin/allCustomers", { withCredentials: true });
    };
    DataService.prototype.getAllCompanies = function () {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/admin/allCompanies", { withCredentials: true });
    };
    DataService.prototype.removeCustomerById = function (id) {
        var url = "http://localhost:8080/CouponsProjectWeb/rest/admin/customer/" + id;
        return this.http.delete(url, { withCredentials: true }).subscribe(function (data) { });
    };
    DataService.prototype.removeCompanyById = function (id) {
        var url = "http://localhost:8080/CouponsProjectWeb/rest/admin/company/" + id;
        return this.http.delete(url, { withCredentials: true }).subscribe(function (data) { });
    };
    DataService.prototype.createCustomer = function (customer) {
        return this.http.post("http://localhost:8080/CouponsProjectWeb/rest/admin/customer", customer, { withCredentials: true });
    };
    DataService.prototype.createCompany = function (company) {
        return this.http.post("http://localhost:8080/CouponsProjectWeb/rest/admin/company", company, { withCredentials: true });
    };
    DataService.prototype.updateCustomer = function (customer) {
        return this.http.put("http://localhost:8080/CouponsProjectWeb/rest/admin/customer", customer, { withCredentials: true });
    };
    DataService.prototype.updateCompany = function (company) {
        return this.http.put("http://localhost:8080/CouponsProjectWeb/rest/admin/company", company, { withCredentials: true });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/admin/companies-data-table/companies-data-table.component.css":
/*******************************************************************************
 * !*******************************************************************************!*\
 * !*** ./src/app/admin/companies-data-table/companies-data-table.component.css
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/companies-data-table/companies-data-table.component.html":
/*******************************************************************************
 * !********************************************************************************!*\
 * !*** ./src/app/admin/companies-data-table/companies-data-table.component.html
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class =\"inNav navbar-fixed\" align=\"center\">\n  <a [routerLinkActive]=\"['active']\" [routerLink]=\"['show-all-companies']\">Show all companies</a>\n<a [routerLinkActive]=\"['active']\" [routerLink]=\"['create-company']\">Create a company</a>\n</nav>\n<br>\n\n\n  <router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/admin/companies-data-table/companies-data-table.component.ts":
/*******************************************************************************
 * !******************************************************************************!*\
 * !*** ./src/app/admin/companies-data-table/companies-data-table.component.ts
 * ***! \
 ******************************************************************************/
/* ! exports provided: CompaniesDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesDataTableComponent", function() { return CompaniesDataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompaniesDataTableComponent = /** @class */ (function () {
    function CompaniesDataTableComponent() {
    }
    CompaniesDataTableComponent.prototype.ngOnInit = function () {
    };
    CompaniesDataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companies-data-table',
            template: __webpack_require__(/*
											 * !
											 * ./companies-data-table.component.html
											 */ "./src/app/admin/companies-data-table/companies-data-table.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./companies-data-table.component.css
											 */ "./src/app/admin/companies-data-table/companies-data-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompaniesDataTableComponent);
    return CompaniesDataTableComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-company/create-company.component.css":
/*******************************************************************************
 * !*******************************************************************!*\ !***
 * ./src/app/admin/create-company/create-company.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/create-company/create-company.component.html":
/*******************************************************************************
 * !********************************************************************!*\ !***
 * ./src/app/admin/create-company/create-company.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #companyForm=\"ngForm\" ngNativeValidate>\n  <fieldset>\n    <legend>Create Company:</legend>\n    \n    Company name:\n    <br>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"newCompany.name\" required>\n    <br> Create a password:\n    <br>\n    <input type=\"text\" name=\"password\" [(ngModel)]=\"newCompany.password\" required>\n    <br> Email:\n    <br>\n    <input type=\"email\" name=\"email\" [(ngModel)]=\"newCompany.email\" required>\n    <br>\n    <br>\n    <input type=\"submit\" value=\"Submit\">\n    <div class=\"alert alert-success\" *ngIf=\"success\">\n        <strong>Success!</strong>  \n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"error\">\n        <strong>Error!</strong> {{error.error.internalMessage}}\n      </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/admin/create-company/create-company.component.ts":
/*******************************************************************************
 * !******************************************************************!*\ !***
 * ./src/app/admin/create-company/create-company.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var src_app_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																												 * !
																												 * src/app/admin/admin.data.service
																												 */ "./src/app/admin/admin.data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																						 * !
																						 * ../../company
																						 */ "./src/app/company.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateCompanyComponent = /** @class */ (function () {
    function CreateCompanyComponent(dataService) {
        this.dataService = dataService;
        this.newCompany = new _company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
    }
    CreateCompanyComponent.prototype.ngOnInit = function () {
    };
    CreateCompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.createCompany(this.newCompany).subscribe(function (res) { _this.success = true; _this.error = ""; }, function (error) { _this.error = error; _this.success = false; });
    };
    CreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/* ! ./create-company.component.html */ "./src/app/admin/create-company/create-company.component.html"),
            styles: [__webpack_require__(/* ! ./create-company.component.css */ "./src/app/admin/create-company/create-company.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_0__["DataService"]])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-customer/create-customer.component.css":
/*******************************************************************************
 * !*********************************************************************!*\
 * !*** ./src/app/admin/create-customer/create-customer.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/create-customer/create-customer.component.html":
/*******************************************************************************
 * !**********************************************************************!*\
 * !*** ./src/app/admin/create-customer/create-customer.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #customerForm=\"ngForm\" ngNativeValidate>\n  <fieldset>\n    <legend>Create Customer:</legend>\n    \n    Customer name:\n    <br>\n    <input type=\"text\" name=\"name\" [(ngModel)]=\"newCustomer.name\" required>\n    <br> Create a password:\n    <br>\n    <input type=\"text\" name=\"password\" [(ngModel)]=\"newCustomer.password\" required>\n    <br>\n    <input type=\"submit\" value=\"Submit\">\n    <div class=\"alert alert-success\" *ngIf=\"success\">\n        <strong>Success!</strong>  \n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"error\">\n        <strong>Error!</strong> {{error.error.internalMessage}}\n      </div>\n  </fieldset>\n</form>"

/***/ }),

/***/ "./src/app/admin/create-customer/create-customer.component.ts":
/*******************************************************************************
 * !********************************************************************!*\ !***
 * ./src/app/admin/create-customer/create-customer.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: CreateCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function() { return CreateCustomerComponent; });
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																						 * !
																						 * ./../../customer
																						 */ "./src/app/customer.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																												 * !
																												 * src/app/admin/admin.data.service
																												 */ "./src/app/admin/admin.data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*
																							 * !
																							 * @angular/router
																							 */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCustomerComponent = /** @class */ (function () {
    function CreateCustomerComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.newCustomer = new _customer__WEBPACK_IMPORTED_MODULE_0__["Customer"]();
    }
    CreateCustomerComponent.prototype.ngOnInit = function () {
    };
    CreateCustomerComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.createCustomer(this.newCustomer).subscribe(function (res) { _this.success = true; _this.error = ""; }, function (error) { _this.error = error; _this.success = false; });
    };
    CreateCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-customer',
            template: __webpack_require__(/*
											 * !
											 * ./create-customer.component.html
											 */ "./src/app/admin/create-customer/create-customer.component.html"),
            styles: [__webpack_require__(/* ! ./create-customer.component.css */ "./src/app/admin/create-customer/create-customer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateCustomerComponent);
    return CreateCustomerComponent;
}());



/***/ }),

/***/ "./src/app/admin/customers-data-table/customers-data-table.component.css":
/*******************************************************************************
 * !*******************************************************************************!*\
 * !*** ./src/app/admin/customers-data-table/customers-data-table.component.css
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/customers-data-table/customers-data-table.component.html":
/*******************************************************************************
 * !********************************************************************************!*\
 * !*** ./src/app/admin/customers-data-table/customers-data-table.component.html
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class =\"inNav navbar-fixed\" align=\"center\">\n    <a [routerLinkActive]=\"['active']\" [routerLink]=\"['show-all-customers']\">Show all customers</a>\n  <a [routerLinkActive]=\"['active']\" [routerLink]=\"['create-customer']\">Create a customer</a>\n  </nav>\n  <br>\n\n  <div class=\"jumbotron\">\n    <router-outlet></router-outlet>\n  <div>\n\n"

/***/ }),

/***/ "./src/app/admin/customers-data-table/customers-data-table.component.ts":
/*******************************************************************************
 * !******************************************************************************!*\
 * !*** ./src/app/admin/customers-data-table/customers-data-table.component.ts
 * ***! \
 ******************************************************************************/
/* ! exports provided: CustomersDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersDataTableComponent", function() { return CustomersDataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomersDataTableComponent = /** @class */ (function () {
    function CustomersDataTableComponent() {
    }
    CustomersDataTableComponent.prototype.ngOnInit = function () {
    };
    CustomersDataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers-data-table',
            template: __webpack_require__(/*
											 * !
											 * ./customers-data-table.component.html
											 */ "./src/app/admin/customers-data-table/customers-data-table.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./customers-data-table.component.css
											 */ "./src/app/admin/customers-data-table/customers-data-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomersDataTableComponent);
    return CustomersDataTableComponent;
}());



/***/ }),

/***/ "./src/app/admin/show-all-companies/show-all-companies.component.css":
/*******************************************************************************
 * !***************************************************************************!*\
 * !*** ./src/app/admin/show-all-companies/show-all-companies.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/show-all-companies/show-all-companies.component.html":
/*******************************************************************************
 * !****************************************************************************!*\
 * !*** ./src/app/admin/show-all-companies/show-all-companies.component.html
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Update a Company</h4>\n    </div>\n    <div class=\"modal-body\">\n    <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" id=\"name\"  [(ngModel)]=\"companyModel.name\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"companyModel.password\" id=\"password\" required>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"companyModel.email\" id=\"email\" required>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n      <div *ngIf=\"isError\" class =\"alert alert-danger\" >\n        <strong>Error!</strong> {{errorMessage}}\n      </div>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitUpdate()\">Submit</button>\n      \n      </div>\n  </ng-template>\n\n  <div *ngIf=\"error\" class =\"alert alert-danger\" >\n      <strong>Error!</strong> {{error.error.internalmessage}}\n    </div>\n<table class=\"table table-fixed\"*ngIf=\"isContent\"> \n\n    <thead>\n      <tr>\n      <th>\n        ID\n  </th>\n      <th>\n      Name\n    </th>\n    <th>\n      Password\n    </th>\n    <th>\n      Email\n    </th>\n    <th>\n        Actions\n      </th>\n      </tr>\n      \n      \n    </thead>\n  \n    <tbody>\n      <tr *ngFor=\"let company of companies\">\n      <td>{{company.id}}</td>\n      <td>{{company.name}}</td>\n      <td>{{company.password}}</td>\n      <td>{{company.email}}</td>\n      <td>\n          <div class = \"row\">\n                <a class =\"linkClass\" (click)=\"deleteCompany(company.id)\">\n                    <span class =\"glyphicon glyphicon-remove\" style =\"padding-right: 10px;\"> </span>\n                </a>\n    \n                <a class =\"linkClass\" (click) =\"open(content, company)\">\n                    <span class =\"glyphicon glyphicon-refresh\"></span>\n                </a>\n          </div>\n        </td>\n\n      </tr>\n  \n    </tbody>\n  </table>\n\n  "

/***/ }),

/***/ "./src/app/admin/show-all-companies/show-all-companies.component.ts":
/*******************************************************************************
 * !**************************************************************************!*\
 * !*** ./src/app/admin/show-all-companies/show-all-companies.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: ShowAllCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllCompaniesComponent", function() { return ShowAllCompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																												 * !
																												 * src/app/admin/admin.data.service
																												 */ "./src/app/admin/admin.data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																										 * !
																										 * @ng-bootstrap/ng-bootstrap
																										 */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowAllCompaniesComponent = /** @class */ (function () {
    function ShowAllCompaniesComponent(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.companies = new Array();
        this.companyModel = {};
        this.isError = false;
    }
    ShowAllCompaniesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllCompanies().subscribe(function (res) { _this.companies = res; _this.isContent = true; _this.error = ""; }, function (error) { _this.error = error; _this.isContent = false; });
    };
    ShowAllCompaniesComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        if (confirm("Are you sure ? ")) {
            this.dataService.removeCompanyById(id);
            this.companies.filter(function (element) { return element.id == id; }).forEach(function (element) {
                _this.companies.splice(_this.companies.indexOf(element), 1);
            });
        }
    };
    ShowAllCompaniesComponent.prototype.open = function (content, company) {
        this.companyModel = company;
        this.modelRef = this.modalService.open(content);
    };
    ShowAllCompaniesComponent.prototype.submitUpdate = function () {
        var _this = this;
        var modified = this.companies.find(function (el) { return el.id == _this.companyModel.id; });
        this.dataService.updateCompany(this.companyModel).subscribe(function (res) {
            modified.name = _this.companyModel.name;
            modified.email = _this.companyModel.email;
            _this.modelRef.close();
            _this.isError = false;
        }, function (err) { _this.isError = true; _this.errorMessage = err.error.internalMessage; });
    };
    ShowAllCompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-all-companies',
            template: __webpack_require__(/*
											 * !
											 * ./show-all-companies.component.html
											 */ "./src/app/admin/show-all-companies/show-all-companies.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./show-all-companies.component.css
											 */ "./src/app/admin/show-all-companies/show-all-companies.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ShowAllCompaniesComponent);
    return ShowAllCompaniesComponent;
}());



/***/ }),

/***/ "./src/app/admin/show-all-customers/show-all-customers.component.css":
/*******************************************************************************
 * !***************************************************************************!*\
 * !*** ./src/app/admin/show-all-customers/show-all-customers.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/show-all-customers/show-all-customers.component.html":
/*******************************************************************************
 * !****************************************************************************!*\
 * !*** ./src/app/admin/show-all-customers/show-all-customers.component.html
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\" style=\"top: 20%\">\n    <h4 class=\"modal-title\">Update a customer</h4>\n  </div>\n\n  <div class=\"modal-body\">\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <label for=\"name\">Name</label>\n      <input id=\"name\" class=\"form-control\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"customerModel.name\">\n    </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input id=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"customerModel.password\">\n    </div>\n    </div>\n  <div class=\"modal-footer\">\n    <div *ngIf=\"isError\" class=\"alert alert-danger\">\n      <strong>Error!</strong> {{errorMessage}}\n    </div>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitUpdate()\">Submit</button>\n  </div>\n\n\n</ng-template>\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">\n  <strong>Error!</strong> {{error.error.internalmessage}}\n</div>\n\n<div style=\"height: 600px; overflow: auto;\">\n  <table class=\"table table-fixed\" *ngIf=\"isContent\">\n    <thead>\n      <tr>\n        <th>\n          ID\n        </th>\n        <th>\n          Name\n        </th>\n        <th>\n          Password\n        </th>\n        <th>\n          Actions\n        </th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let customer of customers\">\n        <td>{{customer.id}}</td>\n        <td>{{customer.name}}</td>\n        <td>{{customer.password}}</td>\n\n        <td>\n          <div class=\"row\">\n            <a class=\"linkClass\" (click)=\"deleteCustomer(customer.id)\">\n              <span class=\"glyphicon glyphicon-remove\" style=\"padding-right: 10px;\"> </span>\n            </a>\n\n\n            <a class=\"linkClass\" (click)=\"open(content,customer)\">\n              <span class=\"glyphicon glyphicon-refresh\"></span>\n            </a>\n          </div>\n        </td>\n      </tr>\n\n    </tbody>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/show-all-customers/show-all-customers.component.ts":
/*******************************************************************************
 * !**************************************************************************!*\
 * !*** ./src/app/admin/show-all-customers/show-all-customers.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: ShowAllCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllCustomersComponent", function() { return ShowAllCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																												 * !
																												 * src/app/admin/admin.data.service
																												 */ "./src/app/admin/admin.data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																										 * !
																										 * @ng-bootstrap/ng-bootstrap
																										 */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowAllCustomersComponent = /** @class */ (function () {
    function ShowAllCustomersComponent(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.customers = new Array();
        this.customerModel = {};
        this.isError = false;
    }
    ShowAllCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllCustomers().subscribe(function (res) { _this.customers = res; _this.isContent = true; _this.error = ""; }, function (error) { _this.error = error; _this.isContent = false; });
    };
    ShowAllCustomersComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        if (confirm("Are you sure ? ")) {
            this.dataService.removeCustomerById(id);
            this.customers.filter(function (element) { return element.id == id; }).forEach(function (element) {
                _this.customers.splice(_this.customers.indexOf(element), 1);
            });
        }
    };
    ShowAllCustomersComponent.prototype.open = function (content, customer) {
        this.customerModel = customer;
        this.modelRef = this.modalService.open(content, { centered: true });
    };
    ShowAllCustomersComponent.prototype.submitUpdate = function () {
        var _this = this;
        this.dataService.updateCustomer(this.customerModel).subscribe(function (res) {
            _this.modelRef.close();
            _this.isError = false;
        }, function (err) { _this.isError = true; _this.errorMessage = err.error.internalMessage; });
    };
    ShowAllCustomersComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ShowAllCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-all-customers',
            template: __webpack_require__(/*
											 * !
											 * ./show-all-customers.component.html
											 */ "./src/app/admin/show-all-customers/show-all-customers.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./show-all-customers.component.css
											 */ "./src/app/admin/show-all-customers/show-all-customers.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ShowAllCustomersComponent);
    return ShowAllCustomersComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*******************************************************************************
 * !***************************************!*\ !***
 * ./src/app/app-routing.module.ts ***! \
 ******************************************************************************/
/* ! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																								 * !
																								 * ./auth-guard.service
																								 */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _customer_customer_coupons_table_customer_coupons_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																																				 * !
																																				 * ./customer/customer-coupons-table/customer-coupons-table.component
																																				 */ "./src/app/customer/customer-coupons-table/customer-coupons-table.component.ts");
/* harmony import */ var _customer_customer_coupons_by_price_customer_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																																					 * !
																																					 * ./customer/customer-coupons-by-price/customer-coupons-by-price.component
																																					 */ "./src/app/customer/customer-coupons-by-price/customer-coupons-by-price.component.ts");
/* harmony import */ var _company_coupons_data_table_coupons_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*
																																		 * !
																																		 * ./company/coupons-data-table/coupons-data-table.component
																																		 */ "./src/app/company/coupons-data-table/coupons-data-table.component.ts");
/* harmony import */ var _company_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*
																																 * !
																																 * ./company/company-details/company-details.component
																																 */ "./src/app/company/company-details/company-details.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*
																									 * !
																									 * ./admin/admin.component
																									 */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*
																							 * !
																							 * @angular/common
																							 */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*
																							 * !
																							 * @angular/router
																							 */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_customers_data_table_customers_data_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*
																																		 * !
																																		 * ./admin/customers-data-table/customers-data-table.component
																																		 */ "./src/app/admin/customers-data-table/customers-data-table.component.ts");
/* harmony import */ var _admin_show_all_companies_show_all_companies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*
																																	 * !
																																	 * ./admin/show-all-companies/show-all-companies.component
																																	 */ "./src/app/admin/show-all-companies/show-all-companies.component.ts");
/* harmony import */ var _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*
																															 * !
																															 * ./admin/create-company/create-company.component
																															 */ "./src/app/admin/create-company/create-company.component.ts");
/* harmony import */ var _admin_companies_data_table_companies_data_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*
																																		 * !
																																		 * ./admin/companies-data-table/companies-data-table.component
																																		 */ "./src/app/admin/companies-data-table/companies-data-table.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*
																									 * !
																									 * ./login/login.component
																									 */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_show_all_customers_show_all_customers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*
																																	 * !
																																	 * ./admin/show-all-customers/show-all-customers.component
																																	 */ "./src/app/admin/show-all-customers/show-all-customers.component.ts");
/* harmony import */ var _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*
																																 * !
																																 * ./admin/create-customer/create-customer.component
																																 */ "./src/app/admin/create-customer/create-customer.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*
																										 * !
																										 * ./company/company.component
																										 */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*
																															 * !
																															 * ./company/create-coupon/create-coupon.component
																															 */ "./src/app/company/create-coupon/create-coupon.component.ts");
/* harmony import */ var _company_show_all_coupons_show_all_coupons_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*
																																	 * !
																																	 * ./company/show-all-coupons/show-all-coupons.component
																																	 */ "./src/app/company/show-all-coupons/show-all-coupons.component.ts");
/* harmony import */ var _company_coupons_by_type_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*
																																 * !
																																 * ./company/coupons-by-type/coupons-by-type.component
																																 */ "./src/app/company/coupons-by-type/coupons-by-type.component.ts");
/* harmony import */ var _company_coupons_by_price_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*
																																	 * !
																																	 * ./company/coupons-by-price/coupons-by-price.component
																																	 */ "./src/app/company/coupons-by-price/coupons-by-price.component.ts");
/* harmony import */ var _company_coupons_by_date_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*
																																 * !
																																 * ./company/coupons-by-date/coupons-by-date.component
																																 */ "./src/app/company/coupons-by-date/coupons-by-date.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*
																											 * !
																											 * ./customer/customer.component
																											 */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*
																																	 * !
																																	 * ./customer/purchase-coupon/purchase-coupon.component
																																	 */ "./src/app/customer/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var _customer_show_all_customer_coupons_show_all_customer_coupons_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*
																																						 * !
																																						 * ./customer/show-all-customer-coupons/show-all-customer-coupons.component
																																						 */ "./src/app/customer/show-all-customer-coupons/show-all-customer-coupons.component.ts");
/* harmony import */ var _customer_customer_coupons_by_type_customer_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*
																																					 * !
																																					 * ./customer/customer-coupons-by-type/customer-coupons-by-type.component
																																					 */ "./src/app/customer/customer-coupons-by-type/customer-coupons-by-type.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: '', canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]], children: [
            {
                path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                children: [
                    {
                        path: 'companies-data-table', component: _admin_companies_data_table_companies_data_table_component__WEBPACK_IMPORTED_MODULE_12__["CompaniesDataTableComponent"],
                        children: [
                            { path: 'show-all-companies', component: _admin_show_all_companies_show_all_companies_component__WEBPACK_IMPORTED_MODULE_10__["ShowAllCompaniesComponent"] },
                            { path: 'create-company', component: _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_11__["CreateCompanyComponent"] }
                        ]
                    }, {
                        path: 'customers-data-table', component: _admin_customers_data_table_customers_data_table_component__WEBPACK_IMPORTED_MODULE_9__["CustomersDataTableComponent"],
                        children: [
                            { path: 'show-all-customers', component: _admin_show_all_customers_show_all_customers_component__WEBPACK_IMPORTED_MODULE_14__["ShowAllCustomersComponent"] },
                            { path: 'create-customer', component: _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_15__["CreateCustomerComponent"] }
                        ]
                    }
                ]
            },
            {
                path: 'company', component: _company_company_component__WEBPACK_IMPORTED_MODULE_16__["CompanyComponent"],
                children: [
                    { path: 'company-details', component: _company_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_4__["CompanyDetailsComponent"] },
                    {
                        path: 'coupons-data-table', component: _company_coupons_data_table_coupons_data_table_component__WEBPACK_IMPORTED_MODULE_3__["CouponsDataTableComponent"],
                        children: [
                            { path: 'show-all-coupons', component: _company_show_all_coupons_show_all_coupons_component__WEBPACK_IMPORTED_MODULE_18__["ShowAllCouponsComponent"] },
                            { path: 'coupons-by-type', component: _company_coupons_by_type_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_19__["CouponsByTypeComponent"] },
                            { path: 'coupons-by-price', component: _company_coupons_by_price_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_20__["CouponsByPriceComponent"] },
                            { path: 'coupons-by-date', component: _company_coupons_by_date_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_21__["CouponsByDateComponent"] }
                        ]
                    },
                    { path: 'create-coupon', component: _company_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_17__["CreateCouponComponent"] }
                ]
            },
            {
                path: 'customer', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_22__["CustomerComponent"],
                children: [
                    { path: 'purchase-coupon', component: _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_23__["PurchaseCouponComponent"] },
                    { path: 'customer-coupons-table', component: _customer_customer_coupons_table_customer_coupons_table_component__WEBPACK_IMPORTED_MODULE_1__["CustomerCouponsTableComponent"],
                        children: [
                            { path: 'show-all-customer-coupons', component: _customer_show_all_customer_coupons_show_all_customer_coupons_component__WEBPACK_IMPORTED_MODULE_24__["ShowAllCustomerCouponsComponent"] },
                            { path: 'customer-coupons-by-type', component: _customer_customer_coupons_by_type_customer_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_25__["CustomerCouponsByTypeComponent"] },
                            { path: 'customer-coupons-by-price', component: _customer_customer_coupons_by_price_customer_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_2__["CustomerCouponsByPriceComponent"] }
                        ]
                    }
                ]
            }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*******************************************************************************
 * !***********************************!*\ !*** ./src/app/app.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The side navigation menu */\r\n.sidenav {\r\n    height: 100%; /* 100% Full-height */\r\n    width: 0; /* 0 width - change this with JavaScript */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Stay on top */\r\n    top: 0; /* Stay at the top */\r\n    left: 0;\r\n    background-color: #111; /* Black*/\r\n    overflow-x: hidden; /* Disable horizontal scroll */\r\n    padding-top: 60px; /* Place content 60px from the top */\r\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\r\n}\r\n/* The navigation menu links */\r\n.sidenav a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n/* When you mouse over the navigation links, change their color */\r\n.sidenav a:hover {\r\n    color: #f1f1f1;\r\n}\r\n/* Position and style the close button (top right corner) */\r\n.sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\r\n#main {\r\n    transition: margin-left .5s;\r\n    padding: 20px;\r\n}\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*******************************************************************************
 * !************************************!*\ !*** ./src/app/app.component.html
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container bg\">\n<nav class =\"navbar navbar-fixed-top navbar-default navbar-dark\" align=\"left\">\n  <div class =\"container\">\n    <a class =\"navbar-brand\">CouponSystem</a>\n  </div>\n</nav>\n\n<div class=\"jumbotron\">\n  <router-outlet></router-outlet>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*******************************************************************************
 * !**********************************!*\ !*** ./src/app/app.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/* ! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/* ! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*******************************************************************************
 * !*******************************!*\ !*** ./src/app/app.module.ts ***! \
 ******************************************************************************/
/* ! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																										 * !
																										 * ./company/company.component
																										 */ "./src/app/company/company.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																										 * !
																										 * @angular/platform-browser
																										 */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*
																							 * !
																							 * ./app.component
																							 */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*
																										 * !
																										 * ./admin/admin.data.service
																										 */ "./src/app/admin/admin.data.service.ts");
/* harmony import */ var _company_company_company_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*
																													 * !
																													 * ./company/company.company.data.service
																													 */ "./src/app/company/company.company.data.service.ts");
/* harmony import */ var _customer_customer_customer_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*
																														 * !
																														 * ./customer/customer.customer.data.service
																														 */ "./src/app/customer/customer.customer.data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*
																									 * !
																									 * @angular/common/http
																									 */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _admin_customers_data_table_customers_data_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*
																																		 * !
																																		 * ./admin/customers-data-table/customers-data-table.component
																																		 */ "./src/app/admin/customers-data-table/customers-data-table.component.ts");
/* harmony import */ var _admin_companies_data_table_companies_data_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*
																																		 * !
																																		 * ./admin/companies-data-table/companies-data-table.component
																																		 */ "./src/app/admin/companies-data-table/companies-data-table.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*
																									 * !
																									 * .//app-routing.module
																									 */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*
																										 * !
																										 * @ng-bootstrap/ng-bootstrap
																										 */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_stack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*
																															 * !
																															 * @ng-bootstrap/ng-bootstrap/modal/modal-stack
																															 */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal-stack.js");
/* harmony import */ var _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*
																															 * !
																															 * ./admin/create-company/create-company.component
																															 */ "./src/app/admin/create-company/create-company.component.ts");
/* harmony import */ var _admin_show_all_companies_show_all_companies_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*
																																	 * !
																																	 * ./admin/show-all-companies/show-all-companies.component
																																	 */ "./src/app/admin/show-all-companies/show-all-companies.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*
																							 * !
																							 * @angular/forms
																							 */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*
																									 * !
																									 * ./admin/admin.component
																									 */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*
																									 * !
																									 * ./login/login.component
																									 */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*
																																 * !
																																 * ./admin/create-customer/create-customer.component
																																 */ "./src/app/admin/create-customer/create-customer.component.ts");
/* harmony import */ var _admin_show_all_customers_show_all_customers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*
																																	 * !
																																	 * ./admin/show-all-customers/show-all-customers.component
																																	 */ "./src/app/admin/show-all-customers/show-all-customers.component.ts");
/* harmony import */ var _company_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*
																																 * !
																																 * ./company/company-details/company-details.component
																																 */ "./src/app/company/company-details/company-details.component.ts");
/* harmony import */ var _company_coupons_data_table_coupons_data_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*
																																		 * !
																																		 * ./company/coupons-data-table/coupons-data-table.component
																																		 */ "./src/app/company/coupons-data-table/coupons-data-table.component.ts");
/* harmony import */ var _company_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*
																															 * !
																															 * ./company/create-coupon/create-coupon.component
																															 */ "./src/app/company/create-coupon/create-coupon.component.ts");
/* harmony import */ var _company_show_all_coupons_show_all_coupons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*
																																	 * !
																																	 * ./company/show-all-coupons/show-all-coupons.component
																																	 */ "./src/app/company/show-all-coupons/show-all-coupons.component.ts");
/* harmony import */ var _company_coupons_by_price_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*
																																	 * !
																																	 * ./company/coupons-by-price/coupons-by-price.component
																																	 */ "./src/app/company/coupons-by-price/coupons-by-price.component.ts");
/* harmony import */ var _company_coupons_by_date_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*
																																 * !
																																 * ./company/coupons-by-date/coupons-by-date.component
																																 */ "./src/app/company/coupons-by-date/coupons-by-date.component.ts");
/* harmony import */ var _company_coupons_by_type_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*
																																 * !
																																 * ./company/coupons-by-type/coupons-by-type.component
																																 */ "./src/app/company/coupons-by-type/coupons-by-type.component.ts");
/* harmony import */ var _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*
																																	 * !
																																	 * ./customer/purchase-coupon/purchase-coupon.component
																																	 */ "./src/app/customer/purchase-coupon/purchase-coupon.component.ts");
/* harmony import */ var _customer_customer_coupons_by_type_customer_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*
																																					 * !
																																					 * ./customer/customer-coupons-by-type/customer-coupons-by-type.component
																																					 */ "./src/app/customer/customer-coupons-by-type/customer-coupons-by-type.component.ts");
/* harmony import */ var _customer_customer_coupons_by_price_customer_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*
																																						 * !
																																						 * ./customer/customer-coupons-by-price/customer-coupons-by-price.component
																																						 */ "./src/app/customer/customer-coupons-by-price/customer-coupons-by-price.component.ts");
/* harmony import */ var _customer_show_all_customer_coupons_show_all_customer_coupons_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*
																																						 * !
																																						 * ./customer/show-all-customer-coupons/show-all-customer-coupons.component
																																						 */ "./src/app/customer/show-all-customer-coupons/show-all-customer-coupons.component.ts");
/* harmony import */ var _customer_customer_coupons_table_customer_coupons_table_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*
																																				 * !
																																				 * ./customer/customer-coupons-table/customer-coupons-table.component
																																				 */ "./src/app/customer/customer-coupons-table/customer-coupons-table.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*
																											 * !
																											 * ./customer/customer.component
																											 */ "./src/app/customer/customer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _admin_companies_data_table_companies_data_table_component__WEBPACK_IMPORTED_MODULE_9__["CompaniesDataTableComponent"],
                _admin_customers_data_table_customers_data_table_component__WEBPACK_IMPORTED_MODULE_8__["CustomersDataTableComponent"],
                _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_13__["CreateCompanyComponent"],
                _admin_show_all_companies_show_all_companies_component__WEBPACK_IMPORTED_MODULE_14__["ShowAllCompaniesComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_18__["CreateCustomerComponent"],
                _admin_show_all_customers_show_all_customers_component__WEBPACK_IMPORTED_MODULE_19__["ShowAllCustomersComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_0__["CompanyComponent"],
                _company_company_details_company_details_component__WEBPACK_IMPORTED_MODULE_20__["CompanyDetailsComponent"],
                _company_coupons_data_table_coupons_data_table_component__WEBPACK_IMPORTED_MODULE_21__["CouponsDataTableComponent"],
                _company_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_22__["CreateCouponComponent"],
                _company_show_all_coupons_show_all_coupons_component__WEBPACK_IMPORTED_MODULE_23__["ShowAllCouponsComponent"],
                _company_coupons_by_price_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_24__["CouponsByPriceComponent"],
                _company_coupons_by_date_coupons_by_date_component__WEBPACK_IMPORTED_MODULE_25__["CouponsByDateComponent"],
                _company_coupons_by_type_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_26__["CouponsByTypeComponent"],
                _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_27__["PurchaseCouponComponent"],
                _customer_customer_coupons_by_type_customer_coupons_by_type_component__WEBPACK_IMPORTED_MODULE_28__["CustomerCouponsByTypeComponent"],
                _customer_customer_coupons_by_price_customer_coupons_by_price_component__WEBPACK_IMPORTED_MODULE_29__["CustomerCouponsByPriceComponent"],
                _customer_show_all_customer_coupons_show_all_customer_coupons_component__WEBPACK_IMPORTED_MODULE_30__["ShowAllCustomerCouponsComponent"],
                _customer_customer_coupons_table_customer_coupons_table_component__WEBPACK_IMPORTED_MODULE_31__["CustomerCouponsTableComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_32__["CustomerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
            ],
            providers: [_admin_admin_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"], _ng_bootstrap_ng_bootstrap_modal_modal_stack__WEBPACK_IMPORTED_MODULE_12__["NgbModalStack"], _company_company_company_data_service__WEBPACK_IMPORTED_MODULE_5__["CompanyDataService"], _customer_customer_customer_data_service__WEBPACK_IMPORTED_MODULE_6__["CustomerDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*******************************************************************************
 * !***************************************!*\ !***
 * ./src/app/auth-guard.service.ts ***! \
 ******************************************************************************/
/* ! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																									 * !
																									 * ./authentication.service
																									 */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																							 * !
																							 * @angular/router
																							 */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*******************************************************************************
 * !*******************************************!*\ !***
 * ./src/app/authentication.service.ts ***! \
 ******************************************************************************/
/* ! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																									 * !
																									 * @angular/common/http
																									 */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.setAuth = function () {
        localStorage.setItem('isAuth', 'true');
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return localStorage.getItem('isAuth') != undefined;
    };
    AuthenticationService.prototype.authenticate = function (user) {
        return this.http.post("http://localhost:8080/CouponsProjectWeb/rest/login/authenticate", user, { withCredentials: true });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.clear();
        return this.http.post("http://localhost:8080/CouponsProjectWeb/rest/logout", { withCredentials: true });
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/company.ts":
/*******************************************************************************
 * !****************************!*\ !*** ./src/app/company.ts ***! \
 ******************************************************************************/
/* ! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/company/company-details/company-details.component.css":
/*******************************************************************************
 * !***********************************************************************!*\
 * !*** ./src/app/company/company-details/company-details.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/company-details/company-details.component.html":
/*******************************************************************************
 * !************************************************************************!*\
 * !*** ./src/app/company/company-details/company-details.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <h4>Company details:</h4>\n <br>\n <table class = \"table\">\n  <thead>\n    <tr>\n    <th>ID</th>\n    <th>Name</th>\n  <th>Password</th>\n  <th>Email</th>\n  </tr>\n  </thead>\n  <tbody>\n    <tr>\n    <td>{{company.id}}</td>\n    <td>{{company.name}}</td>\n    <td>{{company.password}}</td>\n    <td>{{company.email}}</td>\n</tr>\n</tbody>\n</table>"

/***/ }),

/***/ "./src/app/company/company-details/company-details.component.ts":
/*******************************************************************************
 * !**********************************************************************!*\
 * !*** ./src/app/company/company-details/company-details.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: CompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function() { return CompanyDetailsComponent; });
/* harmony import */ var _company_company_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																											 * !
																											 * ../company.company.data.service
																											 */ "./src/app/company/company.company.data.service.ts");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																						 * !
																						 * ./../../company
																						 */ "./src/app/company.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyDetailsComponent = /** @class */ (function () {
    function CompanyDetailsComponent(dataService) {
        this.dataService = dataService;
        this.company = new _company__WEBPACK_IMPORTED_MODULE_1__["Company"]();
    }
    CompanyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCompany().subscribe(function (res) { return _this.company = res; });
    };
    CompanyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-company-details',
            template: __webpack_require__(/*
											 * !
											 * ./company-details.component.html
											 */ "./src/app/company/company-details/company-details.component.html"),
            styles: [__webpack_require__(/* ! ./company-details.component.css */ "./src/app/company/company-details/company-details.component.css")]
        }),
        __metadata("design:paramtypes", [_company_company_data_service__WEBPACK_IMPORTED_MODULE_0__["CompanyDataService"]])
    ], CompanyDetailsComponent);
    return CompanyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/company/company.company.data.service.ts":
/*******************************************************************************
 * !*********************************************************!*\ !***
 * ./src/app/company/company.company.data.service.ts ***! \
 ******************************************************************************/
/* ! exports provided: CompanyDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDataService", function() { return CompanyDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																									 * !
																									 * @angular/common/http
																									 */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyDataService = /** @class */ (function () {
    function CompanyDataService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    CompanyDataService.prototype.createCoupon = function (coupon) {
        return this.http.post("http://localhost:8080/CouponsProjectWeb/rest/company/createCoupon", coupon, { withCredentials: true });
    };
    CompanyDataService.prototype.getCompany = function () {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/company/getCompany", { withCredentials: true });
    };
    CompanyDataService.prototype.getCoupons = function () {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/company/getCoupons", { withCredentials: true });
    };
    CompanyDataService.prototype.getCouponsByType = function (type) {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/company/getCouponsByType?type=" + type, { withCredentials: true });
    };
    CompanyDataService.prototype.getCouponsByPrice = function (price) {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/company/getCouponsByPrice?price=" + price, { withCredentials: true });
    };
    CompanyDataService.prototype.getCouponsByDate = function (date) {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/company/getCouponsByDate?date=" + date, { withCredentials: true });
    };
    CompanyDataService.prototype.updateCoupon = function (coupon) {
        return this.http.put("http://localhost:8080/CouponsProjectWeb/rest/company/coupon", coupon, { withCredentials: true });
    };
    CompanyDataService.prototype.removeCoupons = function (id) {
        var url = "http://localhost:8080/CouponsProjectWeb/rest/company/coupon/" + id;
        return this.http.delete(url, { withCredentials: true }).subscribe(function (data) { });
    };
    CompanyDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyDataService);
    return CompanyDataService;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/*******************************************************************************
 * !***********************************************!*\ !***
 * ./src/app/company/company.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/company.component.html":
/*******************************************************************************
 * !************************************************!*\ !***
 * ./src/app/company/company.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <nav class =\"navbar navbar-fixed-top navbar-default navbar-dark\" align=\"left\">\n    <div class =\"container\">\n      <a class =\"navbar-brand\">CouponSystem</a>\n      <ul class =\"nav navbar-nav\">\n        <li class =\"nav-item\" > <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['company-details']\">Show My Details</a></li>\n        <li class =\"nav-item\" > <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['coupons-data-table']\">Show My Coupons</a></li>\n        <li class =\"nav-item\" > <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['create-coupon']\">Create New Coupon</a></li>\n        <li class =\"nav-item\" > <a class=\"nav-link\" (click)=\"logout()\" >Logout</a></li>\n      </ul>\n    </div>\n  </nav>\n  \n    <router-outlet></router-outlet>\n  </div> \n \n"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*******************************************************************************
 * !**********************************************!*\ !***
 * ./src/app/company/company.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _company_company_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																											 * !
																											 * ./company.company.data.service
																											 */ "./src/app/company/company.company.data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																									 * !
																									 * ./../authentication.service
																									 */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*
																							 * !
																							 * @angular/router
																							 */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(dataService, authService, router) {
        this.dataService = dataService;
        this.authService = authService;
        this.router = router;
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCompany().subscribe(function (res) { return _this.company = res; });
    };
    CompanyComponent.prototype.logout = function () {
        this.authService.logout().subscribe(function (res) { return console.log(res); });
        this.router.navigate(['login']);
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/* ! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/* ! ./company.component.css */ "./src/app/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_company_company_data_service__WEBPACK_IMPORTED_MODULE_0__["CompanyDataService"], _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/coupon.ts":
/*******************************************************************************
 * !***********************************!*\ !*** ./src/app/company/coupon.ts ***! \
 ******************************************************************************/
/* ! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
var Coupon = /** @class */ (function () {
    function Coupon() {
    }
    return Coupon;
}());



/***/ }),

/***/ "./src/app/company/coupons-by-date/coupons-by-date.component.css":
/*******************************************************************************
 * !***********************************************************************!*\
 * !*** ./src/app/company/coupons-by-date/coupons-by-date.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/coupons-by-date/coupons-by-date.component.html":
/*******************************************************************************
 * !************************************************************************!*\
 * !*** ./src/app/company/coupons-by-date/coupons-by-date.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #showByDateForm=\"ngForm\">\n    <fieldset>\n      <legend>Show all coupons by date:</legend>\n      <h4>Please select a maximun end date: </h4>\n      <input type=\"date\" name=\"date\" [(ngModel)]=\"date\" required>\n      <br>\n      <input type=\"submit\" value=\"Submit\" [disabled]=\"!showByDateForm.form.valid\">\n    </fieldset>\n    <div class=\"alert alert-danger\" *ngIf=\"error\">\n      <strong>Error!</strong> {{error.error.internalMessage}}\n    </div>\n  </form>\n  \n  <table class=\"table table-fixed\" *ngIf=\"content\">\n  \n    <thead>\n      <tr>\n        <th>\n          ID\n        </th>\n        <th>\n          Title\n        </th>\n        <th>\n          amount\n        </th>\n        <th>\n          type\n        </th>\n        <th>\n          price\n        </th>\n  \n        <th>\n          startDate\n        </th>\n        <th>\n          endDate\n        </th>\n        <th>\n          message\n        </th>\n        <th>\n          image\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let coupon of coupons\">\n        <td>{{coupon.id}}</td>\n        <td>{{coupon.title}}</td>\n        <td>{{coupon.amount}}</td>\n        <td>{{coupon.type}}</td>\n        <td>{{coupon.price}}</td>\n        <td>{{coupon.startDate | date}}</td>\n        <td>{{coupon.endDate | date}}</td>\n        <td>{{coupon.message}}</td>\n        <td><img [src]=\"coupon.image\" width=\"50px\" height=\"30px\" onerror=\"this.src='static/assets/CouponError.png'\"></td>\n      <td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/company/coupons-by-date/coupons-by-date.component.ts":
/*******************************************************************************
 * !**********************************************************************!*\
 * !*** ./src/app/company/coupons-by-date/coupons-by-date.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: CouponsByDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsByDateComponent", function() { return CouponsByDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_company_company_company_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																															 * !
																															 * src/app/company/company.company.data.service
																															 */ "./src/app/company/company.company.data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CouponsByDateComponent = /** @class */ (function () {
    function CouponsByDateComponent(dataService) {
        this.dataService = dataService;
        this.coupons = new Array();
    }
    CouponsByDateComponent.prototype.ngOnInit = function () {
    };
    CouponsByDateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.getCouponsByDate(this.date).subscribe(function (res) { _this.coupons = res; _this.content = true; _this.error = ""; }, function (error) { _this.error = error; _this.content = false; });
    };
    CouponsByDateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupons-by-date',
            template: __webpack_require__(/*
											 * !
											 * ./coupons-by-date.component.html
											 */ "./src/app/company/coupons-by-date/coupons-by-date.component.html"),
            styles: [__webpack_require__(/* ! ./coupons-by-date.component.css */ "./src/app/company/coupons-by-date/coupons-by-date.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_company_company_company_data_service__WEBPACK_IMPORTED_MODULE_1__["CompanyDataService"]])
    ], CouponsByDateComponent);
    return CouponsByDateComponent;
}());



/***/ }),

/***/ "./src/app/company/coupons-by-price/coupons-by-price.component.css":
/*******************************************************************************
 * !*************************************************************************!*\
 * !*** ./src/app/company/coupons-by-price/coupons-by-price.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/coupons-by-price/coupons-by-price.component.html":
/*******************************************************************************
 * !**************************************************************************!*\
 * !*** ./src/app/company/coupons-by-price/coupons-by-price.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #showByPriceForm=\"ngForm\">\n  <fieldset>\n    <legend>Show all coupons by price:</legend>\n    <h4>Please select a maximum price: </h4>\n    <input type=\"number\" name=\"price\" [(ngModel)]=\"price\" required>\n    <br>\n    <input type=\"submit\" value=\"Submit\" [disabled]=\"!showByPriceForm.form.valid\">\n  </fieldset>\n</form>\n<div class=\"alert alert-danger\" *ngIf=\"error\">\n  <strong>Error!</strong> {{error.error.internalMessage}}\n</div>\n<table class=\"table table-fixed\" *ngIf=\"content\">\n\n  <thead>\n    <tr>\n      <th>\n        ID\n      </th>\n      <th>\n        Title\n      </th>\n      <th>\n        amount\n      </th>\n      <th>\n        type\n      </th>\n      <th>\n        price\n      </th>\n\n      <th>\n        startDate\n      </th>\n      <th>\n        endDate\n      </th>\n      <th>\n        message\n      </th>\n      <th>\n        image\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let coupon of coupons\">\n      <td>{{coupon.id}}</td>\n      <td>{{coupon.title}}</td>\n      <td>{{coupon.amount}}</td>\n      <td>{{coupon.type}}</td>\n      <td>{{coupon.price}}</td>\n      <td>{{coupon.startDate | date}}</td>\n      <td>{{coupon.endDate | date}}</td>\n      <td>{{coupon.message}}</td>\n      <td><img [src]=\"coupon.image\" width=\"50px\" height=\"30px\" onerror=\"this.src='static/assets/CouponError.png'\"></td>\n      <td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/company/coupons-by-price/coupons-by-price.component.ts":
/*******************************************************************************
 * !************************************************************************!*\
 * !*** ./src/app/company/coupons-by-price/coupons-by-price.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: CouponsByPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsByPriceComponent", function() { return CouponsByPriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_company_company_company_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																															 * !
																															 * src/app/company/company.company.data.service
																															 */ "./src/app/company/company.company.data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CouponsByPriceComponent = /** @class */ (function () {
    function CouponsByPriceComponent(dataService) {
        this.dataService = dataService;
        this.coupons = new Array();
    }
    CouponsByPriceComponent.prototype.ngOnInit = function () {
    };
    CouponsByPriceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.getCouponsByPrice(this.price).subscribe(function (res) { _this.coupons = res; _this.error = ""; _this.content = true; }, function (error) { _this.error = error; _this.content = false; });
    };
    CouponsByPriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupons-by-price',
            template: __webpack_require__(/*
											 * !
											 * ./coupons-by-price.component.html
											 */ "./src/app/company/coupons-by-price/coupons-by-price.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./coupons-by-price.component.css
											 */ "./src/app/company/coupons-by-price/coupons-by-price.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_company_company_company_data_service__WEBPACK_IMPORTED_MODULE_1__["CompanyDataService"]])
    ], CouponsByPriceComponent);
    return CouponsByPriceComponent;
}());



/***/ }),

/***/ "./src/app/company/coupons-by-type/coupons-by-type.component.css":
/*******************************************************************************
 * !***********************************************************************!*\
 * !*** ./src/app/company/coupons-by-type/coupons-by-type.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/coupons-by-type/coupons-by-type.component.html":
/*******************************************************************************
 * !************************************************************************!*\
 * !*** ./src/app/company/coupons-by-type/coupons-by-type.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #showByTypeForm=\"ngForm\">\n    <fieldset>\n      <legend>Show all coupons by type:</legend>\n      <h4>Please select a type: </h4>\n      <!-- <input type=\"string\" name=\"type\" [(ngModel)]=\"type\" required> -->\n      <br>\n    <select [(ngModel)]=\"type\" name=\"type\" required type=\"text\">\n      <option value = \"RESTAURANTS\">Restaurants</option>\n      <option value=\"ELECTRICITY\">Electricity</option>\n      <option value=\"FOOD\">Food</option>\n      <option value=\"HEALTH\">Health</option>\n      <option value=\"SPORTS\">Sports</option>\n      <option value=\"CAMPING\">Camping</option>\n      <option value=\"TRAVELLING\">Travelling</option>\n    </select>\n    <br> \n      <br>\n      <input type=\"submit\" value=\"Submit\" [disabled]=\"!showByTypeForm.form.valid\">\n    </fieldset>\n  </form>\n  <div class=\"alert alert-danger\" *ngIf=\"error\">\n      <strong>Error!</strong> {{error.error.internalMessage}}\n    </div>\n  <table class=\"table table-fixed\" *ngIf=\"content\">\n  \n    <thead>\n      <tr>\n        <th>\n          ID\n        </th>\n        <th>\n          Title\n        </th>\n        <th>\n          amount\n        </th>\n        <th>\n          type\n        </th>\n        <th>\n          price\n        </th>\n  \n        <th>\n          startDate\n        </th>\n        <th>\n          endDate\n        </th>\n        <th>\n          message\n        </th>\n        <th>\n          image\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let coupon of coupons\">\n        <td>{{coupon.id}}</td>\n        <td>{{coupon.title}}</td>\n        <td>{{coupon.amount}}</td>\n        <td>{{coupon.type}}</td>\n        <td>{{coupon.price}}</td>\n        <td>{{coupon.startDate | date}}</td>\n        <td>{{coupon.endDate | date}}</td>\n        <td>{{coupon.message}}</td>\n        <td><img [src]=\"coupon.image\" width=\"50px\" height=\"30px\" onerror=\"this.src='static/assets/CouponError.png'\"></td>\n      <td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/company/coupons-by-type/coupons-by-type.component.ts":
/*******************************************************************************
 * !**********************************************************************!*\
 * !*** ./src/app/company/coupons-by-type/coupons-by-type.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: CouponsByTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsByTypeComponent", function() { return CouponsByTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_company_company_company_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																															 * !
																															 * src/app/company/company.company.data.service
																															 */ "./src/app/company/company.company.data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CouponsByTypeComponent = /** @class */ (function () {
    function CouponsByTypeComponent(dataService) {
        this.dataService = dataService;
        this.coupons = new Array();
    }
    CouponsByTypeComponent.prototype.ngOnInit = function () {
    };
    CouponsByTypeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.getCouponsByType(this.type).subscribe(function (res) { _this.coupons = res; _this.error = ""; _this.content = true; }, function (error) { _this.error = error; _this.content = false; });
    };
    CouponsByTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupons-by-type',
            template: __webpack_require__(/*
											 * !
											 * ./coupons-by-type.component.html
											 */ "./src/app/company/coupons-by-type/coupons-by-type.component.html"),
            styles: [__webpack_require__(/* ! ./coupons-by-type.component.css */ "./src/app/company/coupons-by-type/coupons-by-type.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_company_company_company_data_service__WEBPACK_IMPORTED_MODULE_1__["CompanyDataService"]])
    ], CouponsByTypeComponent);
    return CouponsByTypeComponent;
}());



/***/ }),

/***/ "./src/app/company/coupons-data-table/coupons-data-table.component.css":
/*******************************************************************************
 * !*****************************************************************************!*\
 * !*** ./src/app/company/coupons-data-table/coupons-data-table.component.css
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/coupons-data-table/coupons-data-table.component.html":
/*******************************************************************************
 * !******************************************************************************!*\
 * !*** ./src/app/company/coupons-data-table/coupons-data-table.component.html
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class =\"inNav navbar-fixed\" align=\"center\">\n  <a [routerLinkActive]=\"['active']\" [routerLink]=\"['show-all-coupons']\">Show all coupons</a>\n<a [routerLinkActive]=\"['active']\" [routerLink]=\"['coupons-by-type']\">coupons-by-type</a>\n<a [routerLinkActive]=\"['active']\" [routerLink]=\"['coupons-by-price']\">coupons-by-price</a>\n<a [routerLinkActive]=\"['active']\" [routerLink]=\"['coupons-by-date']\">coupons-by-date</a>\n</nav>\n<br>\n\n<div class=\"jumbotron\">\n  <router-outlet></router-outlet>\n<div>\n"

/***/ }),

/***/ "./src/app/company/coupons-data-table/coupons-data-table.component.ts":
/*******************************************************************************
 * !****************************************************************************!*\
 * !*** ./src/app/company/coupons-data-table/coupons-data-table.component.ts
 * ***! \
 ******************************************************************************/
/* ! exports provided: CouponsDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsDataTableComponent", function() { return CouponsDataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CouponsDataTableComponent = /** @class */ (function () {
    function CouponsDataTableComponent() {
    }
    CouponsDataTableComponent.prototype.ngOnInit = function () {
    };
    CouponsDataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupons-data-table',
            template: __webpack_require__(/*
											 * !
											 * ./coupons-data-table.component.html
											 */ "./src/app/company/coupons-data-table/coupons-data-table.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./coupons-data-table.component.css
											 */ "./src/app/company/coupons-data-table/coupons-data-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CouponsDataTableComponent);
    return CouponsDataTableComponent;
}());



/***/ }),

/***/ "./src/app/company/create-coupon/create-coupon.component.css":
/*******************************************************************************
 * !*******************************************************************!*\ !***
 * ./src/app/company/create-coupon/create-coupon.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/create-coupon/create-coupon.component.html":
/*******************************************************************************
 * !********************************************************************!*\ !***
 * ./src/app/company/create-coupon/create-coupon.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #couponForm=\"ngForm\" ngNativeValidate>\n  <fieldset>\n    <legend>Create Coupon:</legend>\n    \n    Title:\n    <br>\n    <input type=\"text\" name=\"title\" [(ngModel)]=\"newCoupon.title\" required>\n    <br>\n    Amount:\n    <br>\n    <input type=\"number\" name=\"amount\" [(ngModel)]=\"newCoupon.amount\" required>\n    <br>\n    Type:\n    <br>\n    <br>\n    <select [(ngModel)]=\"newCoupon.type\" name=\"type\" required type=\"text\">\n      <option value = \"RESTAURANTS\">Restaurants</option>\n      <option value=\"ELECTRICITY\">Electricity</option>\n      <option value=\"FOOD\">Food</option>\n      <option value=\"HEALTH\">Health</option>\n      <option value=\"SPORTS\">Sports</option>\n      <option value=\"CAMPING\">Camping</option>\n      <option value=\"TRAVELLING\">Travelling</option>\n    </select>\n    <br> \n    <br> \n    Price:\n    <br>\n    <input type=\"number\" name=\"price\" [(ngModel)]=\"newCoupon.price\" required>\n    <br>\n    StartDate:\n    <br>\n    <input type=\"date\" name=\"startDate\" [(ngModel)]=\"newCoupon.startDate\" required>\n    <br>  \n    EndDate:\n    <br>\n    <input type=\"date\" name=\"endDate\" [(ngModel)]=\"newCoupon.endDate\" required>\n    <br> \n    Message:\n    <br>\n    <input type=\"text\" name=\"message\" [(ngModel)]=\"newCoupon.message\" required>\n    <br> \n    Image:\n    <br>\n    <input type=\"text\" name=\"image\" [(ngModel)]=\"newCoupon.image\" required>\n    <br>\n    <br>\n    <input type=\"submit\" value=\"Submit\">\n    <div class=\"alert alert-success\" *ngIf=\"success\">\n        <strong>Success!</strong>  \n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"error\">\n        <strong>Error!</strong> {{error.error.internalMessage}}\n      </div>\n  </fieldset>\n</form>\n"

/***/ }),

/***/ "./src/app/company/create-coupon/create-coupon.component.ts":
/*******************************************************************************
 * !******************************************************************!*\ !***
 * ./src/app/company/create-coupon/create-coupon.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: CreateCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCouponComponent", function() { return CreateCouponComponent; });
/* harmony import */ var src_app_company_coupon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																									 * !
																									 * src/app/company/coupon
																									 */ "./src/app/company/coupon.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_company_company_company_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																															 * !
																															 * src/app/company/company.company.data.service
																															 */ "./src/app/company/company.company.data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*
																							 * !
																							 * @angular/router
																							 */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateCouponComponent = /** @class */ (function () {
    function CreateCouponComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.newCoupon = new src_app_company_coupon__WEBPACK_IMPORTED_MODULE_0__["Coupon"]();
    }
    CreateCouponComponent.prototype.ngOnInit = function () {
    };
    CreateCouponComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.createCoupon(this.newCoupon).subscribe(function (res) { _this.success = true; _this.error = ""; }, function (error) { _this.error = error; _this.success = false; });
    };
    CreateCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-coupon',
            template: __webpack_require__(/* ! ./create-coupon.component.html */ "./src/app/company/create-coupon/create-coupon.component.html"),
            styles: [__webpack_require__(/* ! ./create-coupon.component.css */ "./src/app/company/create-coupon/create-coupon.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_company_company_company_data_service__WEBPACK_IMPORTED_MODULE_2__["CompanyDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateCouponComponent);
    return CreateCouponComponent;
}());



/***/ }),

/***/ "./src/app/company/show-all-coupons/show-all-coupons.component.css":
/*******************************************************************************
 * !*************************************************************************!*\
 * !*** ./src/app/company/show-all-coupons/show-all-coupons.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/company/show-all-coupons/show-all-coupons.component.html":
/*******************************************************************************
 * !**************************************************************************!*\
 * !*** ./src/app/company/show-all-coupons/show-all-coupons.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\"> \n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Update a Coupon</h4>\n  </div>\n  <div class=\"modal-body\">\n  <div class=\"form-group\">\n \n      <label for=\"title\">Title</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Title\" name=\"title\" id=\"title\" [(ngModel)]=\"couponModel.title\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"amount\">amount</label>\n      <input type=\"number\" class=\"form-control\" placeholder=\"amount\" name=\"amount\" id=\"amount\" [(ngModel)]=\"couponModel.amount\"\n        required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"type\">type</label>\n     \n      <select [(ngModel)]=\"type\" name=\"type\" required type=\"text\">\n        <option value = \"RESTAURANTS\">Restaurants</option>\n        <option value=\"ELECTRICITY\">Electricity</option>\n        <option value=\"FOOD\">Food</option>\n        <option value=\"HEALTH\">Health</option>\n        <option value=\"SPORTS\">Sports</option>\n        <option value=\"CAMPING\">Camping</option>\n        <option value=\"TRAVELLING\">Travelling</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"price\">price</label>\n      <input type=\"number\" class=\"form-control\" placeholder=\"price\" name=\"price\" id=\"price\" [(ngModel)]=\"couponModel.price\" required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"startDate\">startDate</label>\n      <input type=\"date\" class=\"form-control\" placeholder=\"startDate\" name=\"startDate\" [(ngModel)]=\"couponModel.startDate\" id=\"startDate\"\n        required>\n    </div>\n    \n\n    <div class=\"form-group\">\n      <label for=\"endDate\">endDate</label>\n      <input type=\"date\" class=\"form-control\" placeholder=\"endDate\" name=\"endDate\" id=\"endDate\" [(ngModel)]=\"couponModel.endDate\"\n        required>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"message\">message</label>\n      <input type=\"string\" class=\"form-control\" placeholder=\"message\" name=\"message\" id=\"message\" [(ngModel)]=\"couponModel.message\"\n        required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image\">image</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"image\" name=\"image\" id=\"image\" [(ngModel)]=\"couponModel.image\" required>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n      \n    <div *ngIf=\"isError\" class=\"alert alert-danger\">\n      <strong>Error!</strong> {{error}}\n    </div>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitUpdate()\">Submit</button>\n\n  </div>\n\n\n\n</ng-template>\n\n\n<div *ngIf=\"error\" class=\"alert alert-danger\">\n    <strong>Error!</strong> {{error.error.internalMessage}}\n  </div>\n<table class=\"table table-fixed\" *ngIf=\"isContent\">\n\n  <thead>\n    <tr>\n      <th>\n        ID\n      </th>\n      <th>\n        Title\n      </th>\n      <th>\n        amount\n      </th>\n      <th>\n        type\n      </th>\n      <th>\n        price\n      </th>\n\n      <th>\n        startDate\n      </th>\n      <th>\n        endDate\n      </th>\n      <th>\n        message\n      </th>\n      <th>\n        image\n      </th>\n      <th>\n        Actions\n      </th>\n    </tr>\n\n\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let coupon of coupons\">\n      <td>{{coupon.id}}</td>\n      <td>{{coupon.title}}</td>\n      <td>{{coupon.amount}}</td>\n      <td>{{coupon.type}}</td>\n      <td>{{coupon.price}}</td>\n      <td>{{coupon.startDate | date}}</td>\n      <td>{{coupon.endDate | date}}</td>\n      <td>{{coupon.message}}</td>\n      <td><img [src]=\"coupon.image\" width=\"50px\" height=\"30px\" onerror=\"this.src='static/assets/CouponError.png'\"></td>\n      <td>\n        <div class=\"row\">\n          <a class=\"linkClass\" (click)=\"deleteCoupon(coupon.id)\">\n            <span class=\"glyphicon glyphicon-remove\" style=\"padding-right: 10px;\"> </span>\n          </a>\n\n          <a class=\"linkClass\" (click)=\"open(content, coupon)\">\n            <span class=\"glyphicon glyphicon-refresh\"></span>\n          </a>\n        </div>\n      </td>\n\n    </tr>\n\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/company/show-all-coupons/show-all-coupons.component.ts":
/*******************************************************************************
 * !************************************************************************!*\
 * !*** ./src/app/company/show-all-coupons/show-all-coupons.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: ShowAllCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllCouponsComponent", function() { return ShowAllCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_company_company_company_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																															 * !
																															 * src/app/company/company.company.data.service
																															 */ "./src/app/company/company.company.data.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																										 * !
																										 * @ng-bootstrap/ng-bootstrap
																										 */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowAllCouponsComponent = /** @class */ (function () {
    function ShowAllCouponsComponent(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.coupons = new Array();
        this.couponModel = {};
        this.isError = false;
    }
    ShowAllCouponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCoupons().subscribe(function (res) { _this.coupons = res; _this.isContent = true; }, function (error) { _this.error = error; _this.isContent = false; });
    };
    ShowAllCouponsComponent.prototype.deleteCoupon = function (id) {
        var _this = this;
        if (confirm("Are you sure ? ")) {
            this.dataService.removeCoupons(id);
            this.coupons.filter(function (element) { return element.id == id; }).forEach(function (element) {
                _this.coupons.splice(_this.coupons.indexOf(element), 1);
            });
        }
    };
    ShowAllCouponsComponent.prototype.open = function (content, coupon) {
        this.couponModel = coupon;
        this.modelRef = this.modalService.open(content);
    };
    ShowAllCouponsComponent.prototype.submitUpdate = function () {
        var _this = this;
        var modified = this.coupons.find(function (el) { return el.id == _this.couponModel.id; });
        this.dataService.updateCoupon(this.couponModel).subscribe(function (res) {
            modified.title = _this.couponModel.title;
            modified.amount = _this.couponModel.amount;
            modified.type = _this.couponModel.type;
            modified.price = _this.couponModel.price;
            modified.startDate = _this.couponModel.startDate;
            modified.endDate = _this.couponModel.endDate;
            modified.message = _this.couponModel.message;
            modified.image = _this.couponModel.image;
            _this.modelRef.close();
            _this.isError = false;
        }, function (err) { _this.isError = true; _this.error = err.error.internalMessage; });
    };
    ShowAllCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-all-coupons',
            template: __webpack_require__(/*
											 * !
											 * ./show-all-coupons.component.html
											 */ "./src/app/company/show-all-coupons/show-all-coupons.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./show-all-coupons.component.css
											 */ "./src/app/company/show-all-coupons/show-all-coupons.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_company_company_company_data_service__WEBPACK_IMPORTED_MODULE_1__["CompanyDataService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ShowAllCouponsComponent);
    return ShowAllCouponsComponent;
}());



/***/ }),

/***/ "./src/app/customer.ts":
/*******************************************************************************
 * !*****************************!*\ !*** ./src/app/customer.ts ***! \
 ******************************************************************************/
/* ! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/customer/customer-coupons-by-price/customer-coupons-by-price.component.css":
/*******************************************************************************
 * !********************************************************************************************!*\
 * !***
 * ./src/app/customer/customer-coupons-by-price/customer-coupons-by-price.component.css
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer-coupons-by-price/customer-coupons-by-price.component.html":
/*******************************************************************************
 * !*********************************************************************************************!*\
 * !***
 * ./src/app/customer/customer-coupons-by-price/customer-coupons-by-price.component.html
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" #showCouponsByPriceForm=\"ngForm\">\n    <fieldset>\n      <legend>Show all coupons by price:</legend>\n      <h4>Please select a maximum price: </h4>\n      <input type=\"number\" name=\"price\" [(ngModel)]=\"price\" required>\n      <br>\n      <input type=\"submit\" value=\"Submit\" [disabled]=\"!showCouponsByPriceForm.form.valid\">\n    </fieldset>\n  </form>\n  <div class=\"alert alert-danger\" *ngIf=\"error\">\n    <strong>Error!</strong>  {{error.error.internalMessage}}\n  </div>\n  <table class=\"table table-fixed\" *ngIf=\"isContent\">\n  \n    <thead>\n      <tr>\n        <th>\n          ID\n        </th>\n        <th>\n          Title\n        </th>\n        <th>\n          amount\n        </th>\n        <th>\n          type\n        </th>\n        <th>\n          price\n        </th>\n  \n        <th>\n          startDate\n        </th>\n        <th>\n          endDate\n        </th>\n        <th>\n          message\n        </th>\n        <th>\n          image\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let coupon of coupons\">\n        <td>{{coupon.id}}</td>\n        <td>{{coupon.title}}</td>\n        <td>{{coupon.amount}}</td>\n        <td>{{coupon.type}}</td>\n        <td>{{coupon.price}}</td>\n        <td>{{coupon.startDate | date}}</td>\n        <td>{{coupon.endDate | date}}</td>\n        <td>{{coupon.message}}</td>\n        <td><img [src]=\"coupon.image\" width=\"50px\" height=\"30px\" onerror=\"this.src='static/assets/CouponError.png'\"></td>\n      <td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/customer/customer-coupons-by-price/customer-coupons-by-price.component.ts":
/*******************************************************************************
 * !*******************************************************************************************!*\
 * !***
 * ./src/app/customer/customer-coupons-by-price/customer-coupons-by-price.component.ts
 * ***! \
 ******************************************************************************/
/* ! exports provided: CustomerCouponsByPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCouponsByPriceComponent", function() { return CustomerCouponsByPriceComponent; });
/* harmony import */ var _customer_customer_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																											 * !
																											 * ./../customer.customer.data.service
																											 */ "./src/app/customer/customer.customer.data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerCouponsByPriceComponent = /** @class */ (function () {
    function CustomerCouponsByPriceComponent(dataService) {
        this.dataService = dataService;
        this.coupons = new Array();
    }
    CustomerCouponsByPriceComponent.prototype.ngOnInit = function () {
    };
    CustomerCouponsByPriceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.getCouponsByPrice(this.price).subscribe(function (res) { _this.coupons = res; _this.isContent = true; _this.error = ""; }, function (error) { _this.error = error; _this.isContent = false; });
    };
    CustomerCouponsByPriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-coupons-by-price',
            template: __webpack_require__(/*
											 * !
											 * ./customer-coupons-by-price.component.html
											 */ "./src/app/customer/customer-coupons-by-price/customer-coupons-by-price.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./customer-coupons-by-price.component.css
											 */ "./src/app/customer/customer-coupons-by-price/customer-coupons-by-price.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_customer_data_service__WEBPACK_IMPORTED_MODULE_0__["CustomerDataService"]])
    ], CustomerCouponsByPriceComponent);
    return CustomerCouponsByPriceComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-coupons-by-type/customer-coupons-by-type.component.css":
/*******************************************************************************
 * !******************************************************************************************!*\
 * !***
 * ./src/app/customer/customer-coupons-by-type/customer-coupons-by-type.component.css
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer-coupons-by-type/customer-coupons-by-type.component.html":
/*******************************************************************************
 * !*******************************************************************************************!*\
 * !***
 * ./src/app/customer/customer-coupons-by-type/customer-coupons-by-type.component.html
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"error=false;onSubmit()\" #showCouponsByTypeForm=\"ngForm\">\n    <fieldset>\n      <legend>Show all coupons by type:</legend>\n      <h4>Please select a type: </h4>\n       <select [(ngModel)]=\"type\" name=\"type\" required type=\"text\">\n          <option value = \"RESTAURANTS\">Restaurants</option>\n          <option value=\"ELECTRICITY\">Electricity</option>\n          <option value=\"FOOD\">Food</option>\n          <option value=\"HEALTH\">Health</option>\n          <option value=\"SPORTS\">Sports</option>\n          <option value=\"CAMPING\">Camping</option>\n          <option value=\"TRAVELLING\">Travelling</option>\n        </select>\n      <br>\n      <input type=\"submit\" value=\"Submit\" [disabled]=\"!showCouponsByTypeForm.form.valid\">\n    </fieldset>\n  </form>\n\n  <div class=\"alert alert-danger\" *ngIf=\"error\">\n    <strong>Error!</strong> {{error.error.internalMessage}}\n  </div>\n  \n  <table class=\"table table-fixed\" *ngIf=\"isContent\">\n  \n    <thead>\n      <tr>\n        <th>\n          ID\n        </th>\n        <th>\n          Title\n        </th>\n        <th>\n          amount\n        </th>\n        <th>\n          type\n        </th>\n        <th>\n          price\n        </th>\n  \n        <th>\n          startDate\n        </th>\n        <th>\n          endDate\n        </th>\n        <th>\n          message\n        </th>\n        <th>\n          image\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let coupon of coupons\">\n        <td>{{coupon.id}}</td>\n        <td>{{coupon.title}}</td>\n        <td>{{coupon.amount}}</td>\n        <td>{{coupon.type}}</td>\n        <td>{{coupon.price}}</td>\n        <td>{{coupon.startDate | date}}</td>\n        <td>{{coupon.endDate | date}}</td>\n        <td>{{coupon.message}}</td>\n        <td><img [src]=\"coupon.image\" width=\"50px\" height=\"30px\" onerror=\"this.src='static/assets/CouponError.png'\"></td>\n      <td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/customer/customer-coupons-by-type/customer-coupons-by-type.component.ts":
/*******************************************************************************
 * !*****************************************************************************************!*\
 * !***
 * ./src/app/customer/customer-coupons-by-type/customer-coupons-by-type.component.ts
 * ***! \
 ******************************************************************************/
/* ! exports provided: CustomerCouponsByTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCouponsByTypeComponent", function() { return CustomerCouponsByTypeComponent; });
/* harmony import */ var _customer_customer_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																											 * !
																											 * ./../customer.customer.data.service
																											 */ "./src/app/customer/customer.customer.data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerCouponsByTypeComponent = /** @class */ (function () {
    function CustomerCouponsByTypeComponent(dataService) {
        this.dataService = dataService;
        this.coupons = new Array();
    }
    CustomerCouponsByTypeComponent.prototype.ngOnInit = function () {
    };
    CustomerCouponsByTypeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.coupons = new Array();
        this.dataService.getCouponsByType(this.type).subscribe(function (res) { _this.coupons = res; _this.isContent = true; }, function (error) { _this.error = error; _this.isContent = false; });
    };
    CustomerCouponsByTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-coupons-by-type',
            template: __webpack_require__(/*
											 * !
											 * ./customer-coupons-by-type.component.html
											 */ "./src/app/customer/customer-coupons-by-type/customer-coupons-by-type.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./customer-coupons-by-type.component.css
											 */ "./src/app/customer/customer-coupons-by-type/customer-coupons-by-type.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_customer_data_service__WEBPACK_IMPORTED_MODULE_0__["CustomerDataService"]])
    ], CustomerCouponsByTypeComponent);
    return CustomerCouponsByTypeComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-coupons-table/customer-coupons-table.component.css":
/*******************************************************************************
 * !**************************************************************************************!*\
 * !***
 * ./src/app/customer/customer-coupons-table/customer-coupons-table.component.css
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer-coupons-table/customer-coupons-table.component.html":
/*******************************************************************************
 * !***************************************************************************************!*\
 * !***
 * ./src/app/customer/customer-coupons-table/customer-coupons-table.component.html
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class =\"inNav navbar-fixed\" align=\"center\">\n    <a [routerLinkActive]=\"['active']\" [routerLink]=\"['show-all-customer-coupons']\">Show all coupons</a>\n  <a [routerLinkActive]=\"['active']\" [routerLink]=\"['customer-coupons-by-type']\">Coupons-by-type</a>\n  <a [routerLinkActive]=\"['active']\" [routerLink]=\"['customer-coupons-by-price']\">Coupons-by-price</a>\n  </nav>\n  <br>\n  \n  <div class=\"jumbotron\">\n    <router-outlet></router-outlet>\n  <div>\n  \n"

/***/ }),

/***/ "./src/app/customer/customer-coupons-table/customer-coupons-table.component.ts":
/*******************************************************************************
 * !*************************************************************************************!*\
 * !***
 * ./src/app/customer/customer-coupons-table/customer-coupons-table.component.ts
 * ***! \
 ******************************************************************************/
/* ! exports provided: CustomerCouponsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCouponsTableComponent", function() { return CustomerCouponsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerCouponsTableComponent = /** @class */ (function () {
    function CustomerCouponsTableComponent() {
    }
    CustomerCouponsTableComponent.prototype.ngOnInit = function () {
    };
    CustomerCouponsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-coupons-table',
            template: __webpack_require__(/*
											 * !
											 * ./customer-coupons-table.component.html
											 */ "./src/app/customer/customer-coupons-table/customer-coupons-table.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./customer-coupons-table.component.css
											 */ "./src/app/customer/customer-coupons-table/customer-coupons-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerCouponsTableComponent);
    return CustomerCouponsTableComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*******************************************************************************
 * !**************************************************!*\ !***
 * ./src/app/customer/customer.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n    <nav class =\"navbar navbar-fixed-top navbar-default navbar-dark\" align=\"left\">\n      <div class =\"container\">\n        <a class =\"navbar-brand\">CouponSystem</a>\n        <ul class =\"nav navbar-nav\">\n          <li class =\"nav-item\" > <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['customer-coupons-table']\">Show My Coupons</a></li>\n          <li class =\"nav-item\" > <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['purchase-coupon']\">Purchase a Coupon</a></li>\n          <li class =\"nav-item\" > <a class=\"nav-link\" (click)=\"logout()\" >Logout</a></li>\n        </ul>\n      </div>\n    </nav>\n    \n    <div class=\"jumbotron\">\n      <router-outlet></router-outlet>\n    </div>\n    </div> \n   \n  "

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*******************************************************************************
 * !************************************************!*\ !***
 * ./src/app/customer/customer.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																									 * !
																									 * ./../authentication.service
																									 */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																							 * !
																							 * @angular/router
																							 */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent.prototype.logout = function () {
        this.authService.logout().subscribe(function (res) { return console.log(res); });
        this.router.navigate(['login']);
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/* ! ./customer.component.html */ "./src/app/customer/customer.component.html"),
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.customer.data.service.ts":
/*******************************************************************************
 * !************************************************************!*\ !***
 * ./src/app/customer/customer.customer.data.service.ts ***! \
 ******************************************************************************/
/* ! exports provided: CustomerDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDataService", function() { return CustomerDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																									 * !
																									 * @angular/common/http
																									 */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDataService = /** @class */ (function () {
    function CustomerDataService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    CustomerDataService.prototype.purchaseCoupon = function (id) {
        return this.http.post("http://localhost:8080/CouponsProjectWeb/rest/customer/purchaseCoupon/" + id, { withCredentials: true });
    };
    CustomerDataService.prototype.getCoupons = function () {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/customer/getCustomerCoupons", { withCredentials: true });
    };
    CustomerDataService.prototype.getCouponsByType = function (type) {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/customer/getCustomerCouponsByType?type=" + type, { withCredentials: true });
    };
    CustomerDataService.prototype.getCouponsByPrice = function (price) {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/customer/getCustomerCouponsByPrice?price=" + price, { withCredentials: true });
    };
    CustomerDataService.prototype.getAllCouponsList = function () {
        return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/customer/getAllCoupons", { withCredentials: true });
    };
    CustomerDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerDataService);
    return CustomerDataService;
}());



/***/ }),

/***/ "./src/app/customer/purchase-coupon/purchase-coupon.component.css":
/*******************************************************************************
 * !************************************************************************!*\
 * !*** ./src/app/customer/purchase-coupon/purchase-coupon.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/purchase-coupon/purchase-coupon.component.html":
/*******************************************************************************
 * !*************************************************************************!*\
 * !*** ./src/app/customer/purchase-coupon/purchase-coupon.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table table-fixed\">\n\n    <thead>\n      <tr>\n        <th>\n          ID\n        </th>\n        <th>\n          Title\n        </th>\n        <th>\n          amount\n        </th>\n        <th>\n          type\n        </th>\n        <th>\n          price\n        </th>\n  \n        <th>\n          startDate\n        </th>\n        <th>\n          endDate\n        </th>\n        <th>\n          message\n        </th>\n        <th>\n          image\n        </th>\n        <th>\n          Purchase\n        </th>\n      </tr>\n  \n  \n    </thead>\n  \n    <tbody>\n      <tr *ngFor=\"let coupon of coupons; let i=index\">\n        <td>{{coupon.id}}</td>\n        <td>{{coupon.title}}</td>\n        <td>{{coupon.amount}}</td>\n        <td>{{coupon.type}}</td>\n        <td>{{coupon.price}}</td>\n        <td>{{coupon.startDate | date}}</td>\n        <td>{{coupon.endDate | date}}</td>\n        <td>{{coupon.message}}</td>\n        <td><img [src]=\"coupon.image\" width=\"50px\" height=\"30px\" onerror=\"this.src='static/assets/CouponError.png'\"></td>\n      <td>\n        <td>\n          <div class=\"row\">\n            <a class=\"linkClass\" (click)=\"success=[];error=[];purchaseCoupon(coupon.id,i)\">\n              <span class=\"glyphicon glyphicon-shopping-cart\" style=\"padding-right: 10px;\"> </span>\n            </a>\n          </div>\n          <div class=\"row\">\n            <div class=\"alert alert-success\" *ngIf=\"success[i]\">\n              <strong>Success!</strong>  \n            </div>\n            <div class=\"alert alert-danger\" *ngIf=\"error[i]\">\n              <strong>Error!</strong> {{error[i].error.internalMessage}}\n            </div>\n          </div>\n        </td>\n  \n      </tr>\n  \n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/customer/purchase-coupon/purchase-coupon.component.ts":
/*******************************************************************************
 * !***********************************************************************!*\
 * !*** ./src/app/customer/purchase-coupon/purchase-coupon.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: PurchaseCouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function() { return PurchaseCouponComponent; });
/* harmony import */ var _customer_customer_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																											 * !
																											 * ./../customer.customer.data.service
																											 */ "./src/app/customer/customer.customer.data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PurchaseCouponComponent = /** @class */ (function () {
    function PurchaseCouponComponent(dataService) {
        this.dataService = dataService;
        this.coupons = new Array();
        this.success = [];
        this.error = [];
    }
    PurchaseCouponComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllCouponsList().subscribe(function (res) { return _this.coupons = res; });
    };
    PurchaseCouponComponent.prototype.purchaseCoupon = function (id, index) {
        var _this = this;
        if (confirm("Are you sure ? ")) {
            this.dataService.purchaseCoupon(id).subscribe(function (res) { _this.success[index] = true; }, function (error) { return _this.error[index] = error; });
        }
    };
    PurchaseCouponComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-coupon',
            template: __webpack_require__(/*
											 * !
											 * ./purchase-coupon.component.html
											 */ "./src/app/customer/purchase-coupon/purchase-coupon.component.html"),
            styles: [__webpack_require__(/* ! ./purchase-coupon.component.css */ "./src/app/customer/purchase-coupon/purchase-coupon.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_customer_data_service__WEBPACK_IMPORTED_MODULE_0__["CustomerDataService"]])
    ], PurchaseCouponComponent);
    return PurchaseCouponComponent;
}());



/***/ }),

/***/ "./src/app/customer/show-all-customer-coupons/show-all-customer-coupons.component.css":
/*******************************************************************************
 * !********************************************************************************************!*\
 * !***
 * ./src/app/customer/show-all-customer-coupons/show-all-customer-coupons.component.css
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/show-all-customer-coupons/show-all-customer-coupons.component.html":
/*******************************************************************************
 * !*********************************************************************************************!*\
 * !***
 * ./src/app/customer/show-all-customer-coupons/show-all-customer-coupons.component.html
 * ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"error\" class=\"alert alert-danger\">\n    <strong>Error!</strong> {{error.error.internalMessage}}\n  </div>\n\n<table class=\"table table-fixed\" *ngIf=\"isContent\">\n\n    <thead>\n      <tr>\n        <th>\n          ID\n        </th>\n        <th>\n          Title\n        </th>\n        <th>\n          amount\n        </th>\n        <th>\n          type\n        </th>\n        <th>\n          price\n        </th>\n  \n        <th>\n          startDate\n        </th>\n        <th>\n          endDate\n        </th>\n        <th>\n          message\n        </th>\n        <th>\n          image\n        </th>\n      \n      </tr>\n  \n  \n    </thead>\n  \n    <tbody>\n      <tr *ngFor=\"let coupon of coupons\">\n        <td>{{coupon.id}}</td>\n        <td>{{coupon.title}}</td>\n        <td>{{coupon.amount}}</td>\n        <td>{{coupon.type}}</td>\n        <td>{{coupon.price}}</td>\n        <td>{{coupon.startDate | date}}</td>\n        <td>{{coupon.endDate | date}}</td>\n        <td>{{coupon.message}}</td>\n        <td><img [src]=\"coupon.image\" width=\"50px\" height=\"30px\" onerror=\"this.src='static/assets/CouponError.png'\"></td>\n      <td>\n      </tr>\n  \n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/customer/show-all-customer-coupons/show-all-customer-coupons.component.ts":
/*******************************************************************************
 * !*******************************************************************************************!*\
 * !***
 * ./src/app/customer/show-all-customer-coupons/show-all-customer-coupons.component.ts
 * ***! \
 ******************************************************************************/
/* ! exports provided: ShowAllCustomerCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAllCustomerCouponsComponent", function() { return ShowAllCustomerCouponsComponent; });
/* harmony import */ var _customer_customer_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																											 * !
																											 * ./../customer.customer.data.service
																											 */ "./src/app/customer/customer.customer.data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowAllCustomerCouponsComponent = /** @class */ (function () {
    function ShowAllCustomerCouponsComponent(dataService) {
        this.dataService = dataService;
        this.coupons = new Array();
    }
    ShowAllCustomerCouponsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCoupons().subscribe(function (res) { _this.coupons = res; _this.isContent = true; _this.error = ""; }, function (error) { _this.error = error; _this.isContent = false; });
    };
    ShowAllCustomerCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-all-customer-coupons',
            template: __webpack_require__(/*
											 * !
											 * ./show-all-customer-coupons.component.html
											 */ "./src/app/customer/show-all-customer-coupons/show-all-customer-coupons.component.html"),
            styles: [__webpack_require__(/*
											 * !
											 * ./show-all-customer-coupons.component.css
											 */ "./src/app/customer/show-all-customer-coupons/show-all-customer-coupons.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_customer_data_service__WEBPACK_IMPORTED_MODULE_0__["CustomerDataService"]])
    ], ShowAllCustomerCouponsComponent);
    return ShowAllCustomerCouponsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*******************************************************************************
 * !*******************************************!*\ !***
 * ./src/app/login/login.component.css ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*******************************************************************************
 * !********************************************!*\ !***
 * ./src/app/login/login.component.html ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form  (ngSubmit)=\"login()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)] =\"credentials.username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" required />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\"  [(ngModel)]=\"credentials.password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors } \" required />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n\n      <label for=\"userType\">User Type</label>\n      <select name=\"userType\" [(ngModel)]=\"credentials.userType\" class=\"selectpicker\">\n        <option value=\"Customer\">Customer</option>\n        <option value=\"Company\">Company</option>\n        <option value=\"Admin\">Admin</option>\n      </select>\n\n\n    </div>\n <div class=\"alert alert-danger\" *ngIf=\"error\">\n  <strong>Error!</strong> {{error}}\n</div>\n    <button type =\"submit\" class =\"btn btn-primary\">Login</button>\n   \n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*******************************************************************************
 * !******************************************!*\ !***
 * ./src/app/login/login.component.ts ***! \
 ******************************************************************************/
/* ! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/router
																							 */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																									 * !
																									 * ./../authentication.service
																									 */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.credentials = { username: '', password: '', userType: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.authenticate(this.credentials).subscribe(function (res) {
            _this.authService.setAuth();
            if (_this.credentials.userType == "Admin") {
                _this.router.navigate(['admin']);
            }
            else if (_this.credentials.userType == "Company") {
                _this.router.navigate(['company']);
            }
            else if (_this.credentials.userType == "Customer") {
                _this.router.navigate(['customer']);
            }
        }, function (error) { _this.error = "Login failed. Please try again!"; });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/* ! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/* ! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*******************************************************************************
 * !*****************************************!*\ !***
 * ./src/environments/environment.ts ***! \
 ******************************************************************************/
/* ! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can import
 * the following file, but please comment it out in production mode because it
 * will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error'; // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*******************************************************************************
 * !*********************!*\ !*** ./src/main.ts ***! \
 ******************************************************************************/
/* ! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*
																							 * !
																							 * @angular/core
																							 */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*
																												 * !
																												 * @angular/platform-browser-dynamic
																												 */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*
																							 * !
																							 * ./app/app.module
																							 */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*
																										 * !
																										 * ./environments/environment
																										 */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*******************************************************************************
 * !***************************!*\ !*** multi ./src/main.ts ***! \
 ******************************************************************************/
/* ! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*
										 * !
										 * C:\Users\User\Desktop\CouponsProjectClient\CouponsProjectClient\src\main.ts
										 */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
// # sourceMappingURL=main.js.map
