import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product: any[], searchWord: string): any[] {
    if (searchWord == null) {
      return product;
    }
    return product.filter((x: any) => x['Product-Category'].toLowerCase().startsWith(searchWord.toLowerCase())
    ||
    x['Product-Name'].toLowerCase().startsWith(searchWord.toLowerCase()));
  }

}
