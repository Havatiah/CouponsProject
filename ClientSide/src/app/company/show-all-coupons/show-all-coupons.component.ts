import { Coupon } from './../coupon';
import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from 'src/app/company/company.company.data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-all-coupons',
  templateUrl: './show-all-coupons.component.html',
  styleUrls: ['./show-all-coupons.component.css']
})
export class ShowAllCouponsComponent implements OnInit {

    coupons:Array<Coupon>;
    closeResult:string;
    couponModel:Coupon;
    modelRef:any;
    isError:boolean;
    error:string;
    isContent:boolean;
    constructor(private dataService:CompanyDataService,private modalService: NgbModal) { 
      this.coupons = new Array<Coupon>();
      this.couponModel = {} as Coupon;
      this.isError=false;
      
    }
  
    ngOnInit() {
      this.dataService.getCoupons().subscribe((res:Array<Coupon>)=> {this.coupons = res; this.isContent=true}
      , error=>{this.error=error; this.isContent=false});
    }
  
    deleteCoupon(id:number){
  
      if(confirm("Are you sure ? ")){
        this.dataService.removeCoupons(id);
        this.coupons.filter(element => element.id == id).forEach(element => {
          this.coupons.splice(this.coupons.indexOf(element), 1);
        
        });
       
      }
    }
  
    open(content, coupon){
      this.couponModel = coupon;
      this.modelRef = this.modalService.open(content);
    }
  
    submitUpdate(){
      let modified = this.coupons.find((el)=> el.id == this.couponModel.id);
      this.dataService.updateCoupon(this.couponModel).subscribe(res => { 
        modified.title=this.couponModel.title;
        modified.amount=this.couponModel.amount;
        modified.type=this.couponModel.type;
        modified.price=this.couponModel.price;
        modified.startDate = this.couponModel.startDate;
        modified.endDate=this.couponModel.endDate;
        modified.message=this.couponModel.message;
        modified.image=this.couponModel.image;
        this.modelRef.close();this.isError=false;}, err =>{this.isError=true;this.error = err.error.internalMessage} );
  }
  }