import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-varification-login',
  templateUrl: './varification-login.component.html',
  styleUrls: ['./varification-login.component.scss']
})
export class VarificationLoginComponent {

  constructor(private router:Router) {}

  onSubmit(){

    console.log('Form submitted');

    this.redirecttonewPass();

  }

redirecttonewPass() {

this.router.navigate(['newPass'])

}
}
