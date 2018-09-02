import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-customer-modal',
  templateUrl: './update-customer-modal.component.html',
  styleUrls: ['./update-customer-modal.component.css']
})
export class UpdateCustomerModalComponent implements OnInit {


  closeResult:string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content){
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
    });
  }


}
