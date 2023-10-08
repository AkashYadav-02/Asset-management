import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

declare var $: any;

@Component({
  selector: 'app-car-subs',
  templateUrl: './car-subs.component.html',
  styleUrls: ['./car-subs.component.scss']
})
export class CarSubsComponent implements OnInit{

  myObserver ;
  currentUrl : any;
  techDetailsParameter : any;
  specificaiton : any;
  
  
  constructor(   private redirectMenu : RedirectMenuService,
    private router: Router,
    ){
      this.myObserver = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
          this.techDetailsParameter = navigation.extras.state;
          console.log("tech param",this.techDetailsParameter);
        } 
        }
      });
    }
          carDetails=[
            {
              name:"2023 Toyota Glanza",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"Bhite",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Fortuner",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"Bhite",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Innova Crysta",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"Bhite",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Vellfire ",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"Bhite",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Urban Cruiser ",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"Bhite",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"Toyota Camry",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"Bhite",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Glanza",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"Bhite",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Fortuner",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"Bhite",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            },
            {
              name:"2023 Toyota Innova Crysta",
              engine_capacity:"3.5L/213",
              transmmission_type : "Manual",
              Fuel_Type: "Diesel",
              color_options:{
                  white:"Bhite",
                  black:"Black",
                  blue:"Blue",
                  grey:"Grey"
              }
            }
            
          ]
          
          ngOnInit(){
            this.filterDetails();
            $(document).ready(function () {
              $("#demo").vc3dEye({
                imagePath: "../../assets/3Dimages/",// the location where you’ve put the images.
                totalImages: 50,// the number of images you have.
                imageExtension: "jpg" // the extension of the images. Make sure all the images have same extension.
      });
    });
  }
  percentageValue: number = 50; // Initial percentage value

  // Function to update the percentage value when the slider changes
  updatePercentage(event: Event): void {
    const sliderValue = (event.target as HTMLInputElement).value;
    this.percentageValue = parseFloat(sliderValue);
  }

  isUpperVisible=true
  isLowerVisible=false
  onClick(){
    if (this.isUpperVisible){
      this.isUpperVisible=false
    }else{
      this.isUpperVisible=true
    }
  }

filterDetails(){
   this.specificaiton = this.carDetails.find((element)=> element.name == this.techDetailsParameter.name);   
}

  onPress(){
    if (this.isLowerVisible){
      this.isLowerVisible=false
    }else{
      this.isLowerVisible=true
    }
  }

  inputtxt=''
  outline(event:Event){
    (<HTMLButtonElement>event.target).style.outlineColor=(<HTMLButtonElement>event.target).id
  }

  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }
  onSubmit(){
    this.redirect('apply-now-flow-1'); 

}
}