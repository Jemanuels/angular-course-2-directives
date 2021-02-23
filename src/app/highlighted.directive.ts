import { EventEmitter } from '@angular/core';
import { Directive, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight:EventEmitter<any> = new EventEmitter();

  constructor() { 
    console.log("Directive created..");
  }

  @HostBinding('class.highlighted')
  get cssClasses(){
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled(){
    return true;
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event){
    console.log($event);

    this.isHighlighted = true;

    this.toggleHighlight.emit(this.isHighlighted)
  }

  @HostListener('mouseleave')
  mouseLeave(){
    
    this.isHighlighted = false;

    this.toggleHighlight.emit(this.isHighlighted)
  }

}
