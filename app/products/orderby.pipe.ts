import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
  name: "orderby",

})
export class OrderByPipe implements PipeTransform {
  
  transform(array: IProduct[], args: string): IProduct[] {
    array.sort((a: any, b: any) => {
      if ( a[args] < b[args] ){
        return -1;
      }else if( a[args] > b[args] ){
          return 1;
      }else{
        return 0; 
      }
    });
    return array;
  }
 
}

