import { Component } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }
  filterText: string = "";
  products: Product[] = [];
  addToCart(product: Product) {
    alert(product.name + " sepete eklendi.")
  }
  public ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params['categoryId']).subscribe((products: Product[]) => this.products = products)
    })

  }
}