import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import {FormGroup,FormControl,Validators} from '@angular/forms'
// import { from } from 'rxjs';
@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
export class MainProfileComponent implements OnInit {
  userForm!:FormGroup;
  arr:any[]=[{
    name:'sahil',
    email:'sahil@gmail.com',
    phone:'8989898989',
    address:'kalyan'
  }];

  
  constructor(private router: Router){}
    ngOnInit(): void {
    this.userForm = new FormGroup(
      {
        'username': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z\s]*$'), Validators.maxLength(10)]),
        'email': new FormControl(null, [Validators.email, Validators.required]),
        'number': new FormControl(null, [Validators.required]),
        'address': new FormControl(null, [Validators.required]),
      }
    )
  }

  navigateToProfile() {
    this.router.navigate(['/main-profile']);
  }
  
  navigateToAccountSettings() {
    this.router.navigate(['/profile-settings']);
  }
  navigateToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  onSubmit(){
    alert("logged in")
    console.log(this.userForm);
    
  }
  
  
  // loginForm = new FormGroup({
  //   user:new FormControl('',[Validators.required]),
  //   email: new FormControl('',[Validators.required]),
  //   password: new FormControl('',[Validators.required]),
  //   address: new FormControl('',[Validators.required])
  // })

}
