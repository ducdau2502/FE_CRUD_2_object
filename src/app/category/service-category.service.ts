import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {Category} from "./category";

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoryService {

  //API LOCAL
  private API_CATEGORY = environment.API_LOCAL + 'categories';

  constructor(private http: HttpClient) { }

  // @ts-ignore
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_CATEGORY);
  }


}
