import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  users: any[];

  uniqueEmail(email, pass) {
    const emailInput = email.value;
    const passInput = pass.value;
    const obj = {
      // tslint:disable-next-line:object-literal-key-quotes
      'email': emailInput,
      // tslint:disable-next-line:object-literal-key-quotes
      'password': passInput
    };
    if (localStorage.getItem('users') === null) {
      this.users = [];
    } else {
      this.users = JSON.parse(localStorage.getItem('users'));
    }
    if (this.users.length <= 0) {
      if (email.valid && pass.valid) {
        this.users.push(obj);
      }
    } else {

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email === obj.email || this.users[i].password === obj.password) {
          console.log('Email is Repeated');
          console.log('Password is Repeated');
          return false;
        }
      }

      if (email.valid && pass.valid) {
        this.users.push(obj);
      }
    }
    console.log(this.users);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  getUserInfo() {
    return this.users;
  }
  constructor() { }
}
