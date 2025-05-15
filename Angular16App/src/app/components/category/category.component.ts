import { Component } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../../services/category.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent {
  constructor(private categoryService: CategoryService) { }
  categories: Category[] = [];
  public ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: Category[]) => this.categories = categories)
  }
}
