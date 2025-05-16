import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';
import { Category } from '../../category/category';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-product-add-form2',
  templateUrl: './product-add-form2.component.html',
  styleUrls: ['./product-add-form2.component.scss']
})
export class ProductAddForm2Component {
  constructor(private categoryService: CategoryService, private productService: ProductService) { }
  addProductForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(2), Validators.required]),
    description: new FormControl('', [Validators.minLength(10), Validators.required]),
    price: new FormControl(0, [Validators.min(1), Validators.required]),
    imageUrl: new FormControl(''),
    categoryId: new FormControl(''),
  })
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.addProductForm.value)
    const newProduct: Product = this.addProductForm.value as Product;
    this.productService.addProduct(newProduct).subscribe(data => {
      console.log(newProduct)
      alert(data.name + " başarıyla eklendi");
    });
  }
  categories: Category[] = []

  public ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: Category[]) => this.categories = categories)
  }
}
