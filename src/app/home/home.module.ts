import { NgModule } from '@angular/core';
import { SingInComponent } from './signin/sigin.component';
import {ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[SingInComponent],
    imports:[
        ReactiveFormsModule,
        CommonModule
        ]
})
export class HomeModule {

}