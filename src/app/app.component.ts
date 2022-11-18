import { Component } from '@angular/core';
import {FocusService} from './pastries/service/focus.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-yams';

  search:string = ""
  inputSearch(text:string){
    this.search = text
  }
  
  test(e:boolean){
    this.focus.Focus=e
  }

  constructor(private focus:FocusService) { }
}
