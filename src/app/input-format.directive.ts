import { Directive, HostListener,ElementRef , Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
@Input('appInputFormat') format:string;
  constructor(private el:ElementRef) { }
  @HostListener('blur') onblur(){
    if(this.format=="uppercase"){
      let value:string= this.el.nativeElement.value;
      this.el.nativeElement.value=value.toUpperCase(); 
    }
    else{
      let value:string= this.el.nativeElement.value;
      this.el.nativeElement.value=value.toLowerCase(); 
    }
    
  }

}
