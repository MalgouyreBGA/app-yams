import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FocusService {
  Focus:boolean = true

  changeFocus(b:boolean){this.Focus=b}

  constructor() { }
}
