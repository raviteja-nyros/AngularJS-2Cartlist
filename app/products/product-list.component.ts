import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
  moduleId: module.id, //relative paths with moduleId, where templateUrl/styleUrls get app/products automatically
  templateUrl: 'product-list.html',
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

  constructor(private _productService: ProductService) {

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(products => this.products = products,
        error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List' + message;
  }
}