import { Conditional } from '@angular/compiler';
import { Component, OnInit, Input, HostListener} from '@angular/core';
import {Pastrie, List} from './content/pastrie'

import { PastrieService } from './service/pastrie.service';
import {FocusService} from './service/focus.service';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {
  title = 'Pastries';

  content:Array<Pastrie>
  scroll:Array<any>
  current:any | undefined
  selectedList:List
  selectedPastrie:Pastrie

  useList:Array<Pastrie> | []

@Input() set search(value:string) {
    if (this.content){this.update(value)}
  }
  //---------- detail data sent ------------------

  detail(id:string){
    this.selectedList=this.service.getPastrieIngredientsList(id)
    this.selectedPastrie = this.service.getPastrie(id)
  }

  //------------------Search-----------------------------
  
  update(value:string, values:Array<string>=[]){
    this.useList = this.filtering(value, values)
    this.scroll = this.scrollArray(this.useList)
    this.current = this.scroll.find(e => e.id === this.current?.id) || this.scroll[0]
  }
  f(t:string){ // f for format
    return t.toLowerCase()
  }
  filtering(value:string, values:Array<string>=[]){
    let newList: Array<Pastrie>
    let valueList:string[] = values
    if (valueList.find(e => e === value)!=undefined || value==="" || values.length === 0){
    } else {valueList.push(value)}
  
    if(value=="" && valueList.length > 0){
      newList = this.content?.filter( element =>
        element.tags?.find(e=> valueList.some(r => this.f(e).includes(this.f(r))))
      )
    } else {
      newList = this.content?.filter( element =>
        element.tags?.find(e=> this.f(e).includes(this.f(value))) ||
        element.name?.toLowerCase().includes(this.f(value)) ||
        element.ref?.toLowerCase().includes(this.f(value))
      )
    }
    return newList.length != 0 ? newList : []//[new Pastrie] this.content
  }

  //----Scrolling-----------------------------------------------

  scrollArray(content:Array<Pastrie>){
    let array:Array<object> = []
    for(let i in content){
      array.push({"i":parseInt(i)+1, "id":content[i].id})
    }
    return array
  }
  arrow(i:number){
    let test = this.current.i-1+i
    if(test < 0){ test= this.scroll.length-1}
    if(test > this.scroll.length-1){test=0}
    this.current=this.scroll[test]
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    //this.key = event.key;
    if(this.focus.Focus === true){
      if (event.key==="ArrowLeft"){this.arrow(-1)}
      if (event.key==="ArrowRight"){this.arrow(1)}
    }
    
  }

  //----------Tags-------------------------------------------

  tagList:Array<string>=[]
  tagToggle:any={}
  findtoggle(value:string){
    return ""
  }
  tags(value:string, event :Event){//, event :Event
    if (this.tagList.find(e=> e === value )){
      this.tagList.splice(this.tagList.findIndex(element => element === value),1);
      this.tagToggle[value] = "";
    } else {
      this.tagList.push(value);
      this.tagToggle[value] = "selected";
    }
    this.update("", this.tagList)
  }

  //-----------Constructor & ngOnInit---------------------

  constructor(private service:PastrieService, private focus:FocusService) { }

  ngOnInit(): void {
    this.content = this.service.getPastries()
    this.scroll = this.scrollArray(this.content)
    this.current = this.scroll[0]
    this.useList = this.content
  }
}
