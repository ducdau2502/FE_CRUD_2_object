import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoryComponent } from './list-category/list-category.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    ListCategoryComponent
  ],
  exports: [
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CategoryModule { }
