import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routers: Routes = [
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'edit/:id',
    component: EditProductComponent
  }
]

@NgModule({
  declarations: [
    ListProductComponent,
    EditProductComponent,
    CreateProductComponent
  ],
  exports: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routers),
    ReactiveFormsModule
  ]
})
export class ProductModule { }
