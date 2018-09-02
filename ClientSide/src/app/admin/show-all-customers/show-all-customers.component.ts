import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { DataService } from 'src/app/admin/admin.data.service';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-all-customers',
  templateUrl: './show-all-customers.component.html',
  styleUrls: ['./show-all-customers.component.css']
})
export class ShowAllCustomersComponent implements OnInit {

  customers:Array<Customer>;
  closeResult:string;
  customerModel: any;
  modelRef: any;
  isError: boolean;
  errorMessage: any;
  error:string;
  isContent:boolean;
  constructor(private dataService:DataService, private modalService: NgbModal) {
    this.customers = new Array<Customer>();
    this.customerModel = {} as Customer;
    this.isError = false;
   }

  ngOnInit() {
    this.dataService.getAllCustomers().subscribe((res:Array<Customer>) => {this.customers = res; this.isContent=true; this.error="";}
    , error=>{this.error=error; this.isContent=false});
  }
  

  deleteCustomer(id:number){

    if(confirm("Are you sure ? ")){
      this.dataService.removeCustomerById(id);
      this.customers.filter(element => element.id == id).forEach(element => {
        this.customers.splice(this.customers.indexOf(element), 1);
      
      });
     
    }}
  

  
  open(content, customer){
    this.customerModel = customer;
    this.modelRef = this.modalService.open(content, {centered : true});
  }

  submitUpdate(){
    this.dataService.updateCustomer(this.customerModel).subscribe(res => {
     this.modelRef.close();this.isError=false;}, err =>{this.isError=true;this.errorMessage = err.error.internalMessage} );
}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
