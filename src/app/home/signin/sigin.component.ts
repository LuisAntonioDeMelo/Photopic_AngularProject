import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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

    constructor(private formBuilder:FormBuilder){}
}