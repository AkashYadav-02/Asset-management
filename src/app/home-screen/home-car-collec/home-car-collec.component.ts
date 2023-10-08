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
      name:"2023 Toyota Glanza",
      price: "$8,200",
      imgUrl : "../../assets/Toyota-Glanza-060520221539 2.png",
      speed: 4000,
      gear:"Auto",
      capacity:4,
      type:"Petrol"
    },
    {
      name:"2023 Toyota Fortuner",
      price: "$8,200",
      imgUrl: "../../assets/Toyota-Fortuner-110120211829 2.png",
      speed: 5000,
      gear:"Manual",
      capacity:6,
      type:"Diesel"
    },
    {
      name:"2023 Toyota Innova Crysta",
      price: "$8,200",
      imgUrl: "../../assets/20201015102234_2021-Toyota-Innova-Crysta-facelift-grey-studio 2.png",
      speed: 4000,
      gear:"Automatic",
      capacity:7,
      type:"Diesel"
    },
    {
      name:"2023 Toyota Vellfire ",
      price: "$8,200",
      imgUrl: "../../assets/toyota vellfire.png",
      speed: 4000,
      gear:"CVT",
      capacity:8,
      type:"Petrol"
    },
    {
      name:"2023 Toyota Urban Cruiser ",
      price: "$8,200",
      imgUrl: "../../assets/urban-cruiser-hyryder-exterior-right-front-three-quarter-72 2.png",
      speed: 4000,
      gear:"Automatic",
      capacity:4,
      type:"Petrol"
    },
    {
      name:"Toyota Camry",
      price: "$8,200",
      imgUrl: "../../assets/CamryModelImage 2.png",
      speed: 4000,
      gear:"Automatic",
      capacity:5,
      type:"Hybrid"
    },
    
   
    
    
  ]

}
