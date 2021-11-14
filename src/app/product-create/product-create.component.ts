import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../services/products.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  newProductForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ProductsService) { }

  ngOnInit(): void {
    this.createNewProductForm();
  }

  onSubmit(): void {
    const formData = this.newProductForm.value;
    let product = new Product();
    product.nome = formData.nome;
    product.descricao = formData.descricao;
    product.imagemUrl = formData.imagemUrl;
    product.valor = formData.valor;
    product.fornecedorId = "8D7DF4EB-F3C0-40AF-24C0-08D991A6427F";

    console.log(product);
    this.service.addProduct(product)
      .subscribe(() => {
        console.log('success')
      }, error => console.log(error));
  }

  createNewProductForm(){
    this.newProductForm = this.fb.group({
      nome: [''],
      descricao: [''],
      imagemUrl: [''],
      valor: [''],
      fornecedorId: ['']
    });
  }
}
