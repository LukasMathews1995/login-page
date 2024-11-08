import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
@Input() title:string="";
@Input() primaryBtnText:string="";
@Input() secondaryBtnText:string="";
@Input() disablePrimarybutton:boolean=true;
@Output("submit")OnSubmit = new EventEmitter();
@Output("navigate") OnNavigate = new EventEmitter();

submit(){
  this.OnSubmit.emit();
}
navigate(){
  this.OnNavigate.emit();
}
}
