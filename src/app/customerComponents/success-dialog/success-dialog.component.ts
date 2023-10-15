import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent implements OnInit {
  modalName: string = 'successModal';
  constructor(public modalService: ModalService, private router: Router) {}

  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.closeModalMethod('successModal');
    this.router.navigate(['/home']);
  }
}
