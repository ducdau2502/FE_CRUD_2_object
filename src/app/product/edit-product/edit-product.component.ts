import { Component, OnInit } from '@angular/core';
import {ServiceProductService} from "../service-product.service";
import {Product} from "../product";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ServiceCategoryService} from "../../category/service-category.service";
import {Category} from "../../category/category";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product | undefined;
  categories: Category[] | undefined;


  constructor(private productService: ServiceProductService,
              private categoryService: ServiceCategoryService,
              private activatedRoute: ActivatedRoute) { }

  editForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  })

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get("id");
      this.categoryService.getAllCategories().subscribe(category => {
        this.categories = category
      }, error => {
        console.log(error)
      })
      this.productService.getProductById(id).subscribe(data => {
        this.product = data
      }, error => {
        console.log(error)
      })
    })
  }

  updateProduct() {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get("id");
      const form = this.editForm.value;
      const product = {
        name: form.name,
        price: form.price,
        description: form.description,
        category: {
          id: form.category
        }
      }
      this.productService.updateProduct(product, id).subscribe();
    });
  }
}
