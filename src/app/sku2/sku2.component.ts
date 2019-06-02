import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sku2',
  templateUrl: './sku2.component.html'
})
export class Sku2Component implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123'],
      'description': ['--']
    });
   }

  ngOnInit() {
  }

  onSubmit(value: string){
    console.log('you submitted: ' + value);
    console.log(value);
  }

}
