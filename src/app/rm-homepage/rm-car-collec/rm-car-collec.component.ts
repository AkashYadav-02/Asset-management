import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-rm-car-collec',
  templateUrl: './rm-car-collec.component.html',
  styleUrls: ['./rm-car-collec.component.scss']
})
export class RmCarCollecComponent {
  constructor(private router:Router,private fb: FormBuilder,
    private redirectMenu : RedirectMenuService,
     ) {}
  carDetails=[
    {
      name:"2023 Toyota Glanza",
      price: 8200,
      imgUrl : "../../assets/Toyota-Glanza-060520221539 2.png"
    },
    {
      name:"2023 Toyota Fortuner",
      price: 8200,
      imgUrl: "../../assets/Toyota-Fortuner-110120211829 2.png"
    },
    {
      name:"2023 Toyota Innova Crysta",
      price: 8200,
      imgUrl: "../../assets/20201015102234_2021-Toyota-Innova-Crysta-facelift-grey-studio 2.png"
    },
    {
      name:"2023 Toyota Vellfire ",
      price: 8200,
      imgUrl: "../../assets/cover_6492c7391b5b5 2.png"
    },
    {
      name:"2023 Toyota Urban Cruiser ",
      price: 8200,
      imgUrl: "../../assets/urban-cruiser-hyryder-exterior-right-front-three-quarter-72 2.png"
    },
    {
      name:"Toyota Camry",
      price: 8200,
      imgUrl: "../../assets/CamryModelImage 2.png"
    }
    
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
