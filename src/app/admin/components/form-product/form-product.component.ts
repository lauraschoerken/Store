import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utils/validators';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
