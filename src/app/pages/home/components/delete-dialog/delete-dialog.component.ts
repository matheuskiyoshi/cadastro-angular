import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit{
  modalName: string = 'deleteModal';
  customers: Customer[] = [];
  customerIdToDelete: number | null = null;
  constructor(public modalService: ModalService, public customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.deleteCustomer$.subscribe(id => {
      this.customerIdToDelete = id;
    });
  }

  confirmDelete() {
    if (this.customerIdToDelete) {
      this.customerService.delete(this.customerIdToDelete);
      this.customerIdToDelete = null; 
      this.closeModal();
    }
  }
  closeModal() {
    this.modalService.closeModalMethod(this.modalName);
  }
}
