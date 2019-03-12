import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

const api_url = 'http://localhost:3000'
@Injectable({
  providedIn:'root'
})
export class AuthService {

  constructor(private http:HttpClient,private tokenService:TokenService) {}

  authenticate(userName:string,passsword:string){
    return this.http
    .post(api_url + '/user/login', 
      { userName, passsword },
      { observe : 'response'} )

    //PIPE para autenticação via token com uma api 

    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');

      //salvar o token no storage do navegador

      window.localStorage.setItem('authToken',authToken);
      this.tokenService.setToken(authToken);
      console.log(`User ${userName} foi authenticado com este token ${authToken}`);
    }))
  }
}
