import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe((products) => {
        this.products = products;
      }, error => {
        console.log(error);
      });
  }
}
