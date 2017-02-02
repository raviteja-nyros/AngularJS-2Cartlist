import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
import {InfiniteScroll} from './ng2-infinitescroll/app/directives/angular2-infinitescroll';

@Component({
  selector: 'pm-app',
  template:`
            <div>
                <header></header>
                <div class='container' (OnScrollMethod)="nextPage()" infiniteScrollThrottle="500" ScrollDistance="2" InfiniteScroll="InfiniteScroll">
                    <router-outlet></router-outlet> 
                </div>
            </div>`,
  styles: ['.logo-dimensions{ width:"25px";height:"25px" } '],
  providers: [ProductService],
  directives: [InfiniteScroll],
  styleUrls: ['style.css'],

})
export class AppComponent {
  pageTitle: string = 'EcommercE';


  nextPage() {
        console.log('Reached Bottom!!');
  }
}
