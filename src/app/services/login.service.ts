import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private email = 'admin@admin.com';
  private senha = 'admin123';

  validateLogin(inputEmail: string, inputPassword: string): boolean{
    return inputEmail === this.email && inputPassword === this.senha;
  }
}
