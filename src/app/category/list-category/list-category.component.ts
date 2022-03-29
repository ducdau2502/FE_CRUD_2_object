import { Component, OnInit } from '@angular/core';
import {Category} from "../category";
import {ServiceCategoryService} from "../service-category.service";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories: Category[] | undefined;

  constructor(private categoryService: ServiceCategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
  }

}
