import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  constructor() { 
    console.log("Directive created..");
  }

  @HostBinding('className')
  get cssClasses(){
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled(){
    return true;
  }

}
