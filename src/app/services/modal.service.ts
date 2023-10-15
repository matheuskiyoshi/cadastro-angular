import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalMap: { [key: string]: boolean } = {};

  successModal: boolean = false;
  deleteModal: boolean = false;

  constructor() { }

  showModalMethod(modalName: string) {
    if (modalName === 'successModal') {
      this.successModal = true;
    } else if (modalName === 'deleteModal') {
      this.deleteModal = true;
    }
  }

  closeModalMethod(modalName: string) {
    if (modalName === 'successModal') {
      this.successModal = false;
    } else if (modalName === 'deleteModal') {
      this.deleteModal = false;
    }
  }
}