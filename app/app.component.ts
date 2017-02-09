import { Component } from '@angular/core';

import { ProductService } from './products/product.service';


@Component({
  selector: 'pm-app',
  template:`
              <header></header>
              <div class='container-fluid'>
                  <router-outlet ></router-outlet> 
              </div>
            `,
  styles: ['.logo-dimensions{ width:"25px";height:"25px" } '],
  providers: [ProductService],
  styleUrls: ['style.css']

})

export class AppComponent {
  pageTitle: string = 'EcommercE';
}
