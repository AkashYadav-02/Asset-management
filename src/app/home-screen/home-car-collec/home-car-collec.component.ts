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
      imgUrl: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
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

}
