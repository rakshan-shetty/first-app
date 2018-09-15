import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value)
    return null;
    let words=value.split(" ");
    for(var i=0; i< words.length; i++){
      if(i>0 && this.toPrep(words[i]) ){
        words[i] = words[i].toLowerCase();
      }
      else{
          words[i]= this.toText(words[i]);
      }
    }
    return words.join(" ");
  }
  private toPrep( word:string):boolean{
    let prepositions=["of","the"];
    return prepositions.includes(word.toLowerCase())
  }
  private toText(word:string):string{
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()
  }

}
