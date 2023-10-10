
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

<<<<<<< HEAD
export class ApplyNowFlow1Component {
  lastName: string = '';
  driversLicense: string = '';

  licenseClass: string = '';
  licenseNo: string = '';
  licenseValidity: string = '';
  fname: string = '';
  lname: string = '';
  mname: string = '';
  dob: string = '';
  mobile: string = '';
  home: string = '';
  email: string = '';
  citizen: string = '';
  resident: string = '';
  yearsataddress: string = '';
  street: string = '';
  city: string = '';
  state: string = '';
  country: string = '';
  zipcode: string = '';
  employer: string = '';
  yearsatjob: string = '';
  designation: string = '';
  remotework: string = '';
  workstreet: string = '';
  workcity: string = '';
  workstate: string = '';
  workzip: string = '';
=======
export class ApplyNowFlow1Component implements OnInit {
  applicationId: string = '';
>>>>>>> a2d2b0db11c1c35f7880c01b12e3541e8755818d

  leftcard = leftcard;
  myObserver;
  currentUrl: any;
  techDetailsParameter: any;

<<<<<<< HEAD
//  lastname: string = "Aurionpro";
  // driversLicense: string = "1223@"; 
 

  
  
  constructor(private router:Router,private fb: FormBuilder,
    private redirectMenu : RedirectMenuService,
     ) {
=======
  lineItem: any;
>>>>>>> a2d2b0db11c1c35f7880c01b12e3541e8755818d

  constructor(private router: Router, private fb: FormBuilder,private http: HttpClient,
    private redirectMenu: RedirectMenuService,
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

  ngOnInit(): void {
    this.generateRandomApplicationId();
  }


<<<<<<< HEAD
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
  isLowerVisible=false

  isLowerVisible1=false
  onPress() {

    if (this.isLowerVisible) {

      this.isLowerVisible = false

    } else {

      this.isLowerVisible = true

    }

  }

 
  onPress1() {

    if (this.isLowerVisible1) {

      this.isLowerVisible1 = false

    } else {

      this.isLowerVisible1 = true

    }

  }

  radioChanged(event: Event): void {
    const radio = event.target as HTMLInputElement;
    if (radio.checked) {
      // Set the desired value in the input boxes
      this.lastName = 'Smith';
      this.driversLicense = 'DM123456';
    }
  }

  datapopulate(event: Event): void {
    const button = event.target as HTMLButtonElement;

    // Check if the event is a button click
    if (event.type === 'click' && button instanceof HTMLButtonElement) {
      this.licenseClass = '1L';
      this.licenseNo = 'DM123456';
      this.licenseValidity = '01/01/2026';
      this.fname = 'John';
      this.lname = 'Smith';
      this.mname = 'M';
      this.dob = '01/01/1975';
      this.mobile = '(021) 825 234';
      this.home = '(06) 455 4465';
      this.email = 'john.smith@gmail.com';
      this.citizen = 'New Zealander';
      this.resident = 'Permanent';
      this.yearsataddress = '03';
      this.street='144 Willow Walk';
      this.city = 'Port Nelson';
      this.state = 'Nelson';
      this.country = 'New Zealand';
      this.zipcode = '7010';
      this.employer = 'Ace Viticulture LTD';
      this.yearsatjob = '03';
      this.designation = 'Manager';
      this.remotework = 'Yes';
      this.workstreet = '107 Parsonage Road';
      this.workcity = 'Woodend Beach';
      this.workstate = 'Waimakariri';
      this.workzip = '7610';
    }
  }

  turnRed(){
    if (this.heartURL==this.white){
      this.heartURL=this.red
=======
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
>>>>>>> a2d2b0db11c1c35f7880c01b12e3541e8755818d
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
    let data = {
      username: "Brock",
      specs: this.techDetailsParameter,
      applicationId: this.applicationId,
      carddetails: this.leftcard
      // emiDetails : 
    }
    // console.log("y", data);
    let jsonData = {
      appID: this.applicationId,
      customerName: "John",
      carSelection: this.techDetailsParameter.name,
      financing: this.techDetailsParameter.price,
      status: "Pending"
    }

    // let data = {
    //   username: "John",
    //   specs: this.techDetailsParameter,
    //   applicationId: this.applicationId,
    //   carddetails: this.leftcard,
    //   jsonData: jsonData 
    //   // emiDetails : 
    // }
    // console.log("Jason",jsonData);
    // this.http.put('../../assets/JSONfiles/workspace.json');

    
  //  this.redirectMenu.redirectWithdata('work-space', );
    this.redirectMenu.redirectWithdata('credit-info',data);
  }

}





