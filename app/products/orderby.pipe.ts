
import { PipeTransform, Pipe } from '@angular/core';

import { IProduct } from './product';

@Pipe({
  //The @Pipe decorator takes an object with a name property whose value is the pipe name that we'll use within a template expression. It must be a valid JavaScript identifier. Our pipe's name is orderby.
  name: "orderby"
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
