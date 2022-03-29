import { Component, OnInit } from '@angular/core';
import {Category} from "../../category/category";
import {ServiceProductService} from "../service-product.service";
import {ServiceCategoryService} from "../../category/service-category.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  categories: Category[] | undefined;


  constructor(private productService: ServiceProductService,
              private categoryService: ServiceCategoryService) { }

  createForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  })

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data
    })

  }

  saveProduct() {
    const form = this.createForm.value;
    const product = {
      name: form.name,
      price: form.price,
      description: form.description,
      category: {
        id: form.category
      }
    }
    this.productService.saveProduct(product).subscribe();
  }
}
