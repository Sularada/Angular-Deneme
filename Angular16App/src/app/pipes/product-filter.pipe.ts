import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../components/product/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText && filterText !== "" ? value.filter((p: Product) => p.name.toLocaleLowerCase().indexOf(filterText!) !== -1) : value;
  }

}
