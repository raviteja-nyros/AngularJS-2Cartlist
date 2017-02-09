import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';
//import { priceByPipe } from './priceby.pipe';


@Component({
    moduleId: module.id,
    templateUrl: 'product-list.html',
    providers: [ InfiniteScroll ],
    styleUrls: ['product-list.component.css'],
    //pipes: [ priceByPipe ]
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
    array: [number,string];
    Response : [];
    data: array<any> = [];
    priceIncludes = [];
    ranges = [];
    iproduct = [];
    ravi = [];
    price1 = [];
    // public priceFilter: any;
    // public maxRange: any;
    // public minRange: any;

 



 
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
      });
  }
  includePrice(x,y,z) {
      // console.log("---------------")
      // console.log(this.products)
      // alert(z)
      $(".exam").hide();
      for(var j = 0; j < this.products.length; j++){
        x=0;
        y=this.products[j].price;
          // console.log("------------------")
          // console.log(x)
          // console.log(y)
          if(x==0 && y<=700){
            // this.rk.push('aaaaaaaaa')
            this.iproduct.push({Pname: this.products[j].productName, Pprice: this.products[j].price,  Pstock: this.products[j].stock, Pdescription: this.products[j].description, PstarRating: this.products[j].starRating, Pimage: this.products[j].imageUrl});
            console.log(this.iproduct)
          }
      }
  }
  includePrice1(a,b,c) {
      // console.log("---------------")
      // console.log(this.products)
      // alert(c)
      $(".exam").hide();
      for(var k = 0; k < this.products.length; k++){
        a=0;
        b=this.products[k].price;
           // console.log("------------------")
           // console.log(a)
           // console.log(b)
          if(a==0 && b<=1500){
            this.ravi.push({Pnname: this.products[k].productName, Pnprice: this.products[k].price,  Pnstock: this.products[k].stock, Pndescription: this.products[k].description, PnstarRating: this.products[k].starRating, Pnimage: this.products[k].imageUrl});
            console.log(this.ravi)
          }
      }
  }
  // includePrice2(a,b,c) {
  //     // console.log("---------------")
  //     // console.log(this.products)
  //     // alert(c)
  //     $(".exam").hide();
  //     for(var k = 0; k < this.products.length; k++){
  //       a=0;
  //       b=this.products[k].price;
  //          // console.log("------------------")
  //          // console.log(a)
  //          // console.log(b)
  //         if(a==0 && b<=3000){
  //           this.price1.push({Pnname: this.products[k].productName, Pnprice: this.products[k].price,  Pnstock: this.products[k].stock, Pndescription: this.products[k].description, PnstarRating: this.products[k].starRating, Pnimage: this.products[k].imageUrl});
  //           console.log(this.price1)
  //         }
  //     }
  // }
 
  ngOnInit(): void {

    this._productService.getProducts().subscribe((res: Response) => {
      console.log(res);
      this.products = res;
          data => this.products.slice(0,5) = data;
          error => this.errorMessage = <any>error;
    });



  // this._productService.getProducts().subscribe(products => this.products = products,
    //     data => this.products.slice(0,5) = data,
    //     error => this.errorMessage = <any>error);
    //       console.log('this.products',this.products)
    // this.products.sort( function(name1, name2) {
    //         if ( name1.productName < name2.productName ){
    //             return -1;
    //         }else if( name1.productName > name2.productName ){
    //             return 1;
    //         }else{
    //             return 0; 
    //         }
    //     });
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