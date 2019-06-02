import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html'
})
export class SkuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any){
    console.log( 'You typed: ');
    console.log( form);
  }
}
