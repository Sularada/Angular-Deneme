import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddForm1Component } from './components/product/product-add-form1/product-add-form1.component';
import { ProductAddForm2Component } from './components/product/product-add-form2/product-add-form2.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: '', redirectTo: 'products', pathMatch: "full" },
  { path: 'products/category/:categoryId', component: ProductComponent },
  { path: 'product-add-1', component: ProductAddForm1Component },
  { path: 'product-add-2', component: ProductAddForm2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
