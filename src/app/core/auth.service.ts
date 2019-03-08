import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_url = 'http://localhost:3000'
@Injectable({
  providedIn:'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

  authenticate(userName:string,passsword:string){
    return this.http.post(api_url + '/user/login', { userName, passsword } )
  }
}
