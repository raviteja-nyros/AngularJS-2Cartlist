import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';
//import { OrderByPipe } from './orderby.pipe';


@Component({
  moduleId: module.id,
  templateUrl: 'product-list.html',
  providers: [ InfiniteScroll ],
  styleUrls: ['product-list.component.css']
  //pipes: [ OrderByPipe ]

})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 200;
  imageHeight: number = 200;
  imageMargin: number = 0;
  showImage: boolean = false;
  listFilter: string = '';
  sortColumn: string;
  products: IProduct[];
  errorMessage: string;
  array = [];
  data: array[] = [];
  
  constructor(private _productService: ProductService) {

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  toggle(clickMe) {
      this.products.sort( function(name1, name2) {
          if ( name1.productName < name2.productName ){
              return -1;
          }else if( name1.productName > name2.productName ){
              return 1;
          }else{
              return 0; 
          }
      })
  }
 
  ngOnInit(): void {

    this._productService.getProducts().subscribe((res: Response) => {
      console.log(res);
      this.products = res;
          data => this.products.slice(0,5) = data;
          error => this.errorMessage = <any>error;
    });

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List' + message;
  }


  onScrollDown () {
    this.data = this.products.slice(0, this.data.length + 4);
    console.log(this.data); 
  }
  onScrollUp () {  
    console.log('scorlled up')
  }

}