import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {
    path: '/products',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
