import { Component } from '@angular/core';
import { Product } from '../product';
import { Category } from '../../category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add-form1',
  templateUrl: './product-add-form1.component.html',
  styleUrls: ['./product-add-form1.component.scss']
})
export class ProductAddForm1Component {
  constructor(private categoryService: CategoryService, private productService: ProductService) { }
  model: Product = { description: "", imageUrl: "", name: "", price: 0 }
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.model)
    this.productService.addProduct(this.model).subscribe(data => {
      console.log(this.model)
      alert(data.name + " başarıyla eklendi");
    });
  }
  categories: Category[] = []

  public ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: Category[]) => this.categories = categories)
  }
}
