import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utils/validators';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  form!: FormGroup;
  id!:string;
  product!: Product;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productsService: ProductsService,

  ) {
    this.buildrform();
   }

  ngOnInit(): void {
    
  }

  saveProduct() {
    console.log(this.form.value)
  }

  private buildrform() {
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
      title:['',[Validators.required]],
      price:['',[Validators.required, MyValidators.isPriceValid]],
      image:['',[]],
      description:['',[Validators.required]],
    })
  }

}
function product(product: any) {
  throw new Error('Function not implemented.');
}

