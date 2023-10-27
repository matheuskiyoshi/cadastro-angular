import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('password') password!: ElementRef;
  
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(private toastr: ToastrService, private loginService: LoginService, private router: Router, private renderer: Renderer2){
    this.loginForm = new FormGroup({
      inputEmail: new FormControl('', [Validators.required, Validators.email]),
      inputPassword: new FormControl('', [Validators.required]),
    })
  }


  onSubmit(){
    const { inputEmail, inputPassword } = this.loginForm.value;
    if (this.loginService.validateLogin(inputEmail, inputPassword)) {
      this.toastr.success("Login bem sucedido!", "Sucesso!");
      this.router.navigate(['/home']);
    }else{
      this.toastr.error("Email ou senha incorretos.", "Erro...");
    }
  }

  onChange(event: Event){
    const target = event.target as HTMLInputElement;
    this.showPassword = target.checked;
    if (this.showPassword) {
      this.renderer.setAttribute(this.password.nativeElement, 'type', 'text');
    }else{
      this.renderer.setAttribute(this.password.nativeElement, 'type', 'password');
    }
  }
}
