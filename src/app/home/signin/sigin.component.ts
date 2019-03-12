import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';


@Component({
    templateUrl:'./sigin.component.html'
})

export class SingInComponent implements OnInit{

    ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
         userName: ['',Validators.required],
         password: ['',Validators.required]
     });
    }

    loginForm:FormGroup;
    constructor(private formBuilder:FormBuilder,private authService:AuthService,private router:Router){}

    login(){
      const userName = this.loginForm.get(`userName`).value;
      const password = this.loginForm.get('password').value;

      this.authService.authenticate(userName,password).subscribe(
              () => this.router.navigate(['user',userName]),
              err => {
                  console.log(err);
                  this.loginForm.reset();
                  alert('Usuário não cadastrado!')
              }
          );

    }
}
