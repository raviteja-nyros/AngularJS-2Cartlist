import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';


@Component({
  moduleId: module.id, //relative paths with moduleId, where templateUrl/styleUrls get app/products automatically
  templateUrl: 'product-list.html',
  providers: [ InfiniteScroll ],
  styleUrls: ['product-list.component.css']
})


export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 200;
  imageHeight: number = 200;
  imageMargin: number = 0;
  showImage: boolean = false;
  listFilter: string;
  products: IProduct[];
  errorMessage: string;
  data:array = [];

  constructor(private _productService: ProductService) {

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    
    this._productService.getProducts()
      .subscribe(products => this.products = products,
        data =>this.products.slice(0,5) = data,
        error => this.errorMessage = <any>error);

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List' + message;
  }


  onScrollDown () {
    //console.log(typeof(this.products))
    // console.log(this.products.slice(0, 5))
    this.data = this.products.slice(0, this.data.length + 5);
    console.log(this.data); 
  }
  onScrollUp () {
      console.log('scrolled up!!')
  }

}