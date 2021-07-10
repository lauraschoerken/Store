import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  
  title = 'platzi-store';
  name  = 'jorge';
  names = ['Jorge', 'Luis', 'Juan'];
  power = 10;

  constructor() { }

  ngOnInit(): void {
  }



  addItem(){
    this.names.push(this.title);
  }

  deleteItem(index: number){
    this.names.splice(index, 1);
  }

  deleteAll(){
    this.names = [];
  }


}
