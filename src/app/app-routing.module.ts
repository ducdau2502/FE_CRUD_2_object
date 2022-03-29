import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./product/list-product/list-product.component";
import {ListCategoryComponent} from "./category/list-category/list-category.component";

const routes: Routes = [
  {
    path: 'products',
    component: ListProductComponent,
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'categories',
    component: ListCategoryComponent,
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
