import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly url: string = environment.apiUrl + 'Produtos';

  constructor(private client: HttpClient) {
  }

  getProducts(): Observable<Product[]>{
    return this.client.get<Product[]>(this.url);
  }

  getProductById(id: string): Observable<Product>{
    return this.client.get<Product>(this.url + `/${id}`)
  }

  addProduct(product: Product): Observable<any> {
    return this.client.post<Product>(this.url, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.client.put<Product>(this.url + `${product.id}`, product);
  }
}
