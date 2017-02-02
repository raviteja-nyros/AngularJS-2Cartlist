import {Directive,ElementRef,Input,Output,EventEmitter} from '@angular/core';
import {NgModel} from '@angular/common';

@Directive({
  selector: '[InfiniteScroll]',
  providers: [NgModel],
  host: {
    '(scroll)':'onScroll($event)'
  }
})
export class InfiniteScroll {
  public _element:any;
  public _count:number;
  @Input('ScrollDistance') scrollTrigger: number;
  @Output() OnScrollMethod = new EventEmitter<any>();

  constructor(public element:ElementRef) {
    this._element = this.element.nativeElement;
    if(!this.scrollTrigger) {
      this.scrollTrigger = 1;
    }
  }
  onScroll() {
    this._count++;
    if(this._element.scrollTop + this._element.clientHeight >= this._element.scrollHeight) {
      this.OnScrollMethod.emit(null);
    }else {
      if(this._count % this.scrollTrigger === 0) {
        this.OnScrollMethod.emit(null);
      }
    }
  }
}
