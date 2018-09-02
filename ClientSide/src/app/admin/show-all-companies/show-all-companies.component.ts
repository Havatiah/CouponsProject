import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/admin/admin.data.service';
import { Company } from '../../company';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-all-companies',
  templateUrl: './show-all-companies.component.html',
  styleUrls: ['./show-all-companies.component.css']
})
export class ShowAllCompaniesComponent implements OnInit {

  companies:Array<Company>;
  companyModel:Company;
  closeResult:string;
  modelRef: any;
  errorMessage:string;
  isError:boolean;
  error:string;
  isContent:boolean;

  constructor(private dataService:DataService,private modalService: NgbModal) { 
    this.companies = new Array<Company>();
    this.companyModel = {} as Company;
    this.isError=false;
  }

  ngOnInit() {
    this.dataService.getAllCompanies().subscribe((res:Array<Company>)=>{this.companies = res; this.isContent=true; this.error="";}
    , error=>{this.error=error; this.isContent=false});
  }

  deleteCompany(id:number){

    if(confirm("Are you sure ? ")){
      this.dataService.removeCompanyById(id);
      this.companies.filter(element => element.id == id).forEach(element => {
        this.companies.splice(this.companies.indexOf(element), 1);
      
      });
     
    }
  }

  open(content, company){
    this.companyModel = company;
    this.modelRef = this.modalService.open(content);
  }

  submitUpdate(){
    let modified = this.companies.find((el)=> el.id == this.companyModel.id);
    this.dataService.updateCompany(this.companyModel).subscribe(res => { modified.name=this.companyModel.name;
      modified.email = this.companyModel.email; 
      this.modelRef.close();
      this.isError=false;}, err =>{this.isError=true;this.errorMessage = err.error.internalMessage} );
}
}
