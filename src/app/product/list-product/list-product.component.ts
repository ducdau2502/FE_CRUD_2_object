import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ServiceProductService} from "../service-product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[] | undefined;

  constructor(private productService: ServiceProductService) { }

  ngOnInit() {
    this.productService.getAllProduct().subscribe(data => {
      this.products = data;
    }, error => {
      console.log(error);
    })

  }

  deleteProduct(id: any) {
    this.productService.deleteProductById(id).subscribe()
  }
}
