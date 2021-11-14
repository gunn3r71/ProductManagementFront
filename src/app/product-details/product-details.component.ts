import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product.model";
import {ProductsService} from "../services/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private service: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getProductById(this.route.snapshot.paramMap.get('id'))
      .subscribe((product) => {
        this.product = product;
        console.log(`${product.id} - ${product.nome} - ${product.descricao}`);
      }, error => {
        console.log(error);
      })
  }
}
