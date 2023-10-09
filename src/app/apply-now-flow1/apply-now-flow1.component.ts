
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
@Component({
  selector: 'app-apply-now-flow1',
  templateUrl: './apply-now-flow1.component.html',
  styleUrls: ['./apply-now-flow1.component.scss']
})

export class ApplyNowFlow1Component {
  applicationId: string = '' ;

  myObserver ;
  currentUrl : any;
  techDetailsParameter : any;

  constructor(private router:Router,private fb: FormBuilder,
    private redirectMenu : RedirectMenuService,
     ) {

      this.myObserver = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
          this.techDetailsParameter = navigation.extras.state;
        } 
        }
      });


     }
     ngOnInit():void{
      this.generateRandomApplicationId();
     }
  
     generateRandomApplicationId(): void {
      const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Generates a random 4-digit number
      this.applicationId = `UNE${randomPart}`;
    }
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

  isUpperVisible=true
  isLowerVisible=false
  onClick(){
    if (this.isUpperVisible){
      this.isUpperVisible=false
    }else{
      this.isUpperVisible=true
    }
  }
 

}

 

 

 