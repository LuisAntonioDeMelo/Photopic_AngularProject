import { Component, Input } from '@angular/core';

@Component({
    templateUrl:'./vmessage.component.html'
})
export class VMessageComponent {

    @Input() text:string= ''
}