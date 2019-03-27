import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {


  tableau=[
    'bleu','light','red','yellow','grey','purple','lightbleu','green','pink'
  ];
  @HostBinding('style.borderColor') bc ;
  @HostBinding('style.color') color ;

  constructor() { }

  @HostListener('keypress') changeColor(){
    const index = Math.floor(Math.random()*(this.tableau.length -1)) ;
    this.bc=this.tableau[index] ;
    this.color=this.tableau[index] ;
  }

}
