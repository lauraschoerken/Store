import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model'; 

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
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


  constructor(
    //provate http: Httpclient
  ) { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }

  // getAllProducts(){
  //   return this.http.get<Product[]>("https://platzi-store.herokuapp.com/products/")
  // }
  // getProduct(id : string){
  //   return this.http.get("https://platzi-store.herokuapp.com/products/${id}")
  // }
  // createProduct (product:Product){
  //   return this.http.post('https://platzi-store.herokuapp.com/products/', product);
  // // }
  // updateProduct(id : string), change: partial<Product>){
  // this.http.put(`${environment.url_api}/products/${id}`, changes);
  // }
  // deleteProduct(id: string){
  // this.http.delete("https://platzi-store.herokuapp.com/products/${id}")
  // }

}
