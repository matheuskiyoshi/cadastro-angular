import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private email = 'admin';
  private senha = 'admin';

  validateLogin(inputEmail: string, inputPassword: string): boolean{
    return inputEmail === this.email && inputPassword === this.senha;
  }
}
