
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
@Component({
  selector: 'app-apply-now-flow1',
  templateUrl: './apply-now-flow1.component.html',
  styleUrls: ['./apply-now-flow1.component.scss']
})

export class ApplyNowFlow1Component implements OnInit {

  myObserver ;
  currentUrl : any;
  techDetailsParameter : any;
  applicationId: string = '' ;
  lineItem: any;

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


  carDetails=[
    {
      name:"2023 Toyota Fortuner",
      price: "61,490",
      imgUrl: "../../assets/Toyota-Fortuner-110120211829 2.png",
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

  generateRandomApplicationId(): void {
    const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Generates a random 4-digit number
    this.applicationId = `UNE${randomPart}`;
    this.lineItem = this.applicationId;
    console.log("line",this.lineItem);
  }


  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }

  saveProcceed(){
    let data = {
      specs: this.techDetailsParameter,
      applicationId : this.applicationId,
      // emiDetails : 

    } 
    console.log("y",data);
    
    this.redirectMenu.redirectWithdata('work-space',data);
  }

}

 

 

 