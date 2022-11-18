import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags'
})
export class TagsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let temp = ""
    const type = ["dessert"]
    const taste = [ "sucré", "yummy" ]
    const ings = [ "chocolat", "fruits", "poires", "bananes", "framboises" ]
    if (type.includes(value.toLowerCase())){
      temp="type"
    } else if (taste.includes(value.toLowerCase())){
      temp="taste"
    } else if (ings.includes(value.toLowerCase())) {
      temp="ing"
    }
    return temp;
  }

}
