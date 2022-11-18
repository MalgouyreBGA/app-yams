import { Component, OnInit, Input } from '@angular/core';
import { Pastrie, List } from '../content/pastrie';
import { FocusService } from '../service/focus.service';

@Component({
  selector: 'app-pastrie-detail',
  templateUrl: './pastrie-detail.component.html',
  styleUrls: ['./pastrie-detail.component.scss']
})
export class PastrieDetailComponent implements OnInit {
  @Input() pastrieDetail:Pastrie
  @Input() listDetail:List

  remove(ing:string){
    this.listDetail.list.splice(this.listDetail.list.findIndex(element => element === ing),1)
  }
  
  add(saisie:string){ //, event :Event
    /*const key = (event.target as HTMLInputElement).value;
    console.log(key)*/
    if (this.listDetail.list.find(e => e === saisie)){
    }else{this.listDetail.list.push(saisie)}
  }

  test(e:boolean){
    this.focus.Focus=e
  }

  constructor(private focus:FocusService) { }

  ngOnInit(): void {
  }

}
