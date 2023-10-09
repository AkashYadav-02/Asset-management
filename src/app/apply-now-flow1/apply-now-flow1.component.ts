
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { leftcard } from '../carddetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
@Component({
  selector: 'app-apply-now-flow1',
  templateUrl: './apply-now-flow1.component.html',
  styleUrls: ['./apply-now-flow1.component.scss']
})

export class ApplyNowFlow1Component implements OnInit {
  applicationId: string = '';

  leftcard = leftcard;
  myObserver;
  currentUrl: any;
  techDetailsParameter: any;

  lineItem: any;

  constructor(private router: Router, private fb: FormBuilder,private http: HttpClient,
    private redirectMenu: RedirectMenuService,
  ) {

    this.myObserver = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
          this.techDetailsParameter = navigation.extras.state;
          // console.log("Hello",this.techDetailsParameter);
        }
      }
      
      
    });
  }

  ngOnInit(): void {
    this.generateRandomApplicationId();
  }


  // carDetails=[
  //   {
  //     name:"2023 Toyota Fortuner",
  //     price: "61,490",
  //     imgUrl: "../../assets/Toyota-Fortuner-110120211829 2.png",
  //   },
  // ]
  white = "../../../assets/logos/heart.png";
  red = "../../../assets/logos/heartred.png"
  heartURL = this.white;
  turnRed() {
    if (this.heartURL == this.white) {
      this.heartURL = this.red
    }
    else if (this.heartURL == this.red) {
      this.heartURL = this.white
    }
  }

  generateRandomApplicationId(): void {
    const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Generates a random 4-digit number
    this.applicationId = `UNE${randomPart}`;
    this.lineItem = this.applicationId;
    console.log("line", this.lineItem);
  }


  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }

  saveProcceed() {
    
    // console.log("y", data);
    let jsonData = {
      appID: this.applicationId,
      customerName: "John",
      carSelection: this.techDetailsParameter.name,
      financing: this.techDetailsParameter.price,
      status: "Pending"
    }

    let data = {
      username: "John",
      specs: this.techDetailsParameter,
      applicationId: this.applicationId,
      carddetails: this.leftcard,
      jsonData: jsonData 
      // emiDetails : 
    }
    // console.log("Jason",jsonData);
    // this.http.put('../../assets/JSONfiles/workspace.json');

    
    this.redirectMenu.redirectWithdata('work-space', data);
  }

}





