import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ModelPopupComponent } from '../common/model-popup/model-popup.component';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  public modalPopup: ModelPopupComponent;
  constructor(private modalService: NgbModal ) {}

  ngOnInit() {
  }

  open(name: string) {
    const modalRef = this.modalService.open(this.modalPopup);
    modalRef.componentInstance = 'World';
  }

}
