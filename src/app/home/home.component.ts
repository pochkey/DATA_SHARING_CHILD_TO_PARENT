import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Output('childtoparent') ctp = new EventEmitter();

  passData(){
    this.ctp.emit('This is home component');
  }
}
