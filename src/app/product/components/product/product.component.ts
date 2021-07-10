import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnDestroy,
    OnInit,
    DoCheck,
    OnChanges,
    SimpleChanges,
  } from '@angular/core';
  
  import { Product } from 'src/app/product.model'; 
  
  @Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
  })
  export class ProductComponent implements OnChanges, OnDestroy, DoCheck, OnInit {
    @Input() product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
  
    constructor() {
      console.log('1, constructor');
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      console.log('2, ngOnChange');
      console.log(changes);
    }
  
    ngOnInit() {
      console.log('3, ngOnInit');
    }
  
    ngDoCheck(): void {
      console.log('4, ngDoCheck');
    }
  
    ngOnDestroy(): void {
      console.log('5, ngOnDestroy');
    }
  
    addCart() {
      console.log('carrito');
      this.productClicked.emit(this.product.id);
    }
    
  }
  