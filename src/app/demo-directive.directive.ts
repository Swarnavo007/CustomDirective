import { Directive,ElementRef,HostBinding,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDemoDirective]'
})
export class DemoDirectiveDirective {

  // constructor(private element:ElementRef,private render:Renderer2) {

  //   this.changeColor('red');
  //  }

   @HostBinding('style.border') border:String;
   @HostBinding('style.textAlign') textAlign:String;
   @HostBinding('style.color') colour:String;
   @HostBinding('style.background') bgColor:string;
   @HostListener('mouseenter') onClick(){

    this.colour='blue';
    this.border='5px solid red';
    this.textAlign='center';
    this.bgColor='green';
   }

   @HostListener('mouseleave') onMouseOut(){

    this.colour='initial';
    this.border='initial';
    this.textAlign='initial';
    this.bgColor='white';
   }
  //  changeColor(color:String){

  //   this.render.setStyle(this.element.nativeElement,'color',color);

  //  }


}
