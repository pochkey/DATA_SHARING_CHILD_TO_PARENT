import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DATA_SHARING_CHILD_TO_PARENT';

  tocatchchildvalue(event : any){
    this.title = event;

  }
}
