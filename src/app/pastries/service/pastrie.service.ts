import { Injectable } from '@angular/core';
import {PASTRIES, INGREDIENTS_LISTS} from '../content/mock-pastries'
import {Pastrie, List} from '../content/pastrie'

@Injectable({
  providedIn: 'root'
})
export class PastrieService {
  
  selectedList:List
  selectedPastrie:Pastrie

  getPastries(){
    let pastries:Array<Pastrie>=PASTRIES.sort(function(a,b){return b.quantity - a.quantity})
    //console.log(pastries)
    return pastries
  }
  getPastrie( id: string){
    return this.findPastrie(id)
  }
    findPastrie(id:string):Pastrie{
      let pastries:Array<Pastrie>=this.getPastries()
      let temp:Pastrie | undefined = pastries.find(element => element.id === id)
      return temp || new Pastrie
    }
  getPastrieIngredientsList(id : string){
    return this.findIngredients(id)
    //this.selectedPastrie = pastrie
  }
    findIngredients(id:string):List{
      let ingredients:Array<List>=INGREDIENTS_LISTS
      let temp:List | undefined = ingredients.find(element => element.id === id)
      return temp || new List
    }

  constructor() { }
}
