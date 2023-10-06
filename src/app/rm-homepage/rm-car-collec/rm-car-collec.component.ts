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
      name:"Audi A8 L 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car1.png"
    },
    {
      name:"Nissan Maxima Platinum 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car2.png"
    },
    {
      name:"Porsche Cayenne GTS 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car3.png"
    },
    {
      name:"BMW M8 Coupe 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car4.png"
    },
    {
      name:"BMW X7 M50i 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car5.png"
    },
    {
      name:"Porsche Cayenne GTS 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car3.png"
    },
    {
      name:"BMW M8 Coupe 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car4.png"
    },
    {
      name:"BMW X7 M50i 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car5.png"
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
