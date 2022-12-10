import { Injectable } from '@angular/core';
import { environment } from './../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // ************************************* get data from local stroge so user dont have to login every refresh ******************************

  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('token') != null) {
      this.saveUserData();
    }
  }
    // ************************************* save decoded token about user ******************************

  userData: any = new BehaviorSubject(null);

  saveUserData() {
    let encodeToken = JSON.stringify(localStorage.getItem('token'));
    let deCodeToken: any = jwt_decode(encodeToken);
    this.userData.next(deCodeToken);
    console.log(deCodeToken);
  }
    // ************************************* sign in API ******************************

  signIn(userData: object): Observable<any> {
    return this._HttpClient.post(`${environment.APIurl}/auth/login`, userData);
  }
}
