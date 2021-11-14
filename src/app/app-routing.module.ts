import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductCreateComponent} from "./product-create/product-create.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: {
      title: 'Products'
    },
    redirectTo: 'products'
  },
  {
    path: 'products',
    data: {
      title: 'Products'
    },
    component: ProductListComponent
  },
  {
    path: 'products/details/:id',
    data: {
      title: 'Details'
    },
    component: ProductDetailsComponent
  },
  {
    path: 'products/new',
    data: {
      title: 'Add'
    },
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
