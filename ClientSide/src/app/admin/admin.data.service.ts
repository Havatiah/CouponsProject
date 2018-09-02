import { Company } from '../company';
import { Customer } from '../customer';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private headers: HttpHeaders=new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  getAllCustomers() {
    return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/admin/allCustomers",
    {withCredentials:true});

  }

  getAllCompanies() {
    return this.http.get("http://localhost:8080/CouponsProjectWeb/rest/admin/allCompanies",{withCredentials:true});
  }

  removeCustomerById(id: number) {
    const url = "http://localhost:8080/CouponsProjectWeb/rest/admin/customer/" + id;
    return this.http.delete(url,{withCredentials:true}).subscribe(data=>{});
  }
  removeCompanyById(id: number) {
    const url="http://localhost:8080/CouponsProjectWeb/rest/admin/company/" + id;
    return this.http.delete(url,{withCredentials:true}).subscribe(data=>{});
  }

  createCustomer(customer: Customer):Observable<any>{
    return this.http.post<any>("http://localhost:8080/CouponsProjectWeb/rest/admin/customer",customer,{withCredentials:true});
  }
  createCompany(company:Company):Observable<any>{
    
    return this.http.post<any>("http://localhost:8080/CouponsProjectWeb/rest/admin/company",company,{withCredentials:true});  
  }
   updateCustomer(customer:Customer):Observable<any>{
    return this.http.put("http://localhost:8080/CouponsProjectWeb/rest/admin/customer", customer,{withCredentials:true});
   }
 updateCompany(company: Company):Observable<any>{
    return this.http.put("http://localhost:8080/CouponsProjectWeb/rest/admin/company",company,{withCredentials:true});
   }
  // readCompany(id: number):void{
  //    this.http.get("http://localhost:8080/CouponsProjectWeb/rest/admin/getCompany"+id);
  // }
  // readCompany(id: number):void{
  //    this.http.get("http://localhost:8080/CouponsProjectWeb/rest/admin/getCompany"+id);
  // }

}
