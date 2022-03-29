import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {

  private API_PRODUCT = environment.API_LOCAL + 'products';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_PRODUCT);
  }

  getProductById(id: any): Observable<Product> {
    return this.http.get<Product>(this.API_PRODUCT +`/${id}`);
  }

  deleteProductById(id: any): Observable<Product> {
    return this.http.delete<Product>(this.API_PRODUCT +`/${id}`);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API_PRODUCT, product);
  }

  updateProduct(product: Product, id: any): Observable<Product> {
    return this.http.put<Product>(this.API_PRODUCT +`/${id}`, product);
  }

}
