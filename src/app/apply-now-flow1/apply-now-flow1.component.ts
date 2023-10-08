

import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
@Component({
  selector: 'app-apply-now-flow1',
  templateUrl: './apply-now-flow1.component.html',
  styleUrls: ['./apply-now-flow1.component.scss']
})

export class ApplyNowFlow1Component {

  constructor(private router:Router,private fb: FormBuilder,

    private redirectMenu : RedirectMenuService,

     ) {}

  carDetails=[

    {

      name:"Audi A8 L 2022",

      price: 8200,

      imgUrl: "../../assets/Cars/car1.png"

    },

   

   

  ]

 

  white="../../../assets/logos/heart.png";

  red="../../../assets/logos/heartred.png"

  heartURL=this.white;

 

  turnRed(){

    if (this.heartURL==this.white){

      this.heartURL=this.red

    }

    else if (this.heartURL==this.red){

      this.heartURL=this.white

    }

  }

 

  redirect(path : string){

    this.redirectMenu.redirectTo(path);

  }

 

}

 

 

 