import { Component } from '@angular/core';

@Component({
  selector: 'app-home-car-collec',
  templateUrl: './home-car-collec.component.html',
  styleUrls: ['./home-car-collec.component.scss']
})
export class HomeCarCollecComponent {
  value: number = 50;
  carDetails=[
    {
      name:"Audi A8 L 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car2.png"
    },
    {
      name:"Nissan Maxima Platinum 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/Nisan.png"
    },
    {
      name:"Porsche Cayenne GTS 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car1.png"
    },
    {
      name:"BMW M8 Coupe 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car5.png"
    },
    {
      name:"BMW X7 M50i 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car6.png"
    },
    {
      name:"Porsche Cayenne GTS 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car4.png"
    },
    {
      name:"BMW M8 Coupe 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car6.png"
    },
    {
      name:"BMW X7 M50i 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/car5.png"
    },
    {
      name:"Nissan Maxima Platinum 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/Nisan.png"
    },
    
  ]

}
