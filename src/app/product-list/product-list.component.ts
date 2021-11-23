import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductsService} from "../services/products.service";
import {ErrorComponent} from "../error/error.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(ErrorComponent)
  errorComponent: ErrorComponent;
  products: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe((products) => {
        this.products = products;
      }, (error) => {
        this.errorHandling("Ocorreu um erro ao carregar a listagem...");
      });
  }

  errorHandling(error: string): void{
    this.errorComponent.showErrorMessage(error);
  }
}
