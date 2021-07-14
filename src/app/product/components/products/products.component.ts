import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // products: Product[] = []

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  clickProduct(id:number){
    console.log('product');
    console.log(id);
  }

  constructor(
    // private productsService : ProductsService
  ) { }

  ngOnInit(): void {
    // this.fetchProducts
  }

  // fetchProducts(){
  //   this.productsService.getAllProducts()
  //   .subscribe(products => {
  //     this.products = product;
  //   })
  // }
    // createProduct(){
      // const newProduct: Product {
      //   id: '222',
      //   title: 'nuevo desde angular',
      // image: 'assets/images/banner-1.jpg',
      // price: 3000,
      // description: 'new product'
      // }
  //   this.productsService.createProduct(newProduct)
  //   .subscribe(products => {
  //     this.products = product;
  //   })
  // }


}
