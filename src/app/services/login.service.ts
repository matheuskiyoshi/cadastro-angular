import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private email = 'matheus@gmail.com';
  private senha = '123456';

  validateLogin(inputEmail: string, inputPassword: string): boolean{
    return inputEmail === this.email && inputPassword === this.senha;
  }
}
