import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ProductAddForm1Component } from './components/product/product-add-form1/product-add-form1.component';
import { ProductAddForm2Component } from './components/product/product-add-form2/product-add-form2.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForm1Component,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ProductAddForm2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
