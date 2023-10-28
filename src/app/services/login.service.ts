import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private email = 'admin';
  private senha = 'admin';

  validateLogin(inputName: string, inputPassword: string): boolean{
    return inputName === this.email && inputPassword === this.senha;
  }
}
