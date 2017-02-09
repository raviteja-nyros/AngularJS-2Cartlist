import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.html',
    providers: [ InfiniteScroll ],
    styleUrls: ['product-list.component.css'],
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
    price1 = [];
    price2 = [];

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

        if (z) {

            $(".exam").hide();
            $(".exam1").hide();
            $(".exam2").hide();
            $(".exam3").hide();
            $(".exam4").show();
        
            for(var j = 0; j < this.products.length; j++){
                
                x=0;
                y=this.products[j].price;

                if(x==0 && y<=700){

                    this.iproduct.push({Pname: this.products[j].productName, Pprice: this.products[j].price,  Pstock: this.products[j].stock, Pdescription: this.products[j].description, PstarRating: this.products[j].starRating, Pimage: this.products[j].imageUrl});

                }
            }
        } else{

            $(".exam").show();
            $(".exam1").hide();
            $(".exam2").hide();
            $(".exam3").hide();
            $(".exam4").hide();
        }
    }
    includePrice1(a,b,c) {

        if(c){
            $(".exam").hide();
            $(".exam1").hide();
            $(".exam2").show();
            $(".exam3").hide();
            $(".exam4").hide();
            
            for(var k = 0; k < this.products.length; k++){
                a=701;
                b=this.products[k].price > 700;

                if(a>=701 && b ){

                    this.price1.push({Pnname: this.products[k].productName, Pnprice: this.products[k].price,  Pnstock: this.products[k].stock, Pndescription: this.products[k].description, PnstarRating: this.products[k].starRating, Pnimage: this.products[k].imageUrl});

                }
            }
        } else{

            $(".exam").show();
            $(".exam1").hide();
            $(".exam2").hide();
            $(".exam3").hide();
            $(".exam4").hide();
        }
    }
    includePrice2(e,f,g) {

        if(g){ 
            $(".exam").hide();
            $(".exam1").hide();
            $(".exam2").hide();
            $(".exam3").show();
            $(".exam4").hide();
          
            for(var l = 0; l < this.products.length; l++){

                e=1501;
                f=this.products[l].price > 1501;

                if(e>=1501 && f){
              
                    this.price2.push({Paname: this.products[l].productName, Paprice: this.products[l].price,  Pnstock: this.products[l].stock, Padescription: this.products[l].description, PastarRating: this.products[l].starRating, Paimage: this.products[l].imageUrl});
              
                }
            }
        }else{

            $(".exam").show();
            $(".exam1").hide();
            $(".exam2").hide();
            $(".exam3").hide();
            $(".exam4").hide();
        }
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
        //console.log(this.data); 
    }

    onScrollUp () {  
        //console.log('scorlled up')
    }

}