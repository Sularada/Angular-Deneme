import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../components/category/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:3000/categories")
  }
}
