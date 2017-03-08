import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector:'[etlove]'
})
export class LoveDirective{

  @Input()
  loveCount:number;

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor='yellow';
  }

  @HostListener('click') onclick(){
    this.loveCount = this.loveCount+1;
  }
}
