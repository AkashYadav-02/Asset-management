import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

 import {FormGroup,FormControl,Validators} from '@angular/forms'
import { RedirectMenuService } from 'src/services/redirect-menu.service';

// import { from } from 'rxjs';
@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.scss']
})
export class MainProfileComponent {
  userForm!:FormGroup;

  arr:any[]=[{

    name:'sahil',

    email:'sahil@gmail.com',

    phone:'8989898989',

    address:'kalyan'

  }];
  
  constructor(private router: Router,
    private redirectMenu : RedirectMenuService
    ){}
  navigateToProfile() {
    this.redirectMenu.redirectTo('/main-profile');
    // this.router.navigate(['/main-profile']);
  }
  
  navigateToAccountSettings() {
    this.redirectMenu.redirectTo('/profile-settings');
    // this.router.navigate(['/profile-settings']);
  }
  navigateToEditProfile() {
    this.redirectMenu.redirectTo('/edit-profile');
    // this.router.navigate(['/edit-profile']);
  }

  loginUser(){
    alert("logged in")
  }
  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }
  
  
  // loginForm = new FormGroup({
  //   user:new FormControl('',[Validators.required]),
  //   email: new FormControl('',[Validators.required]),
  //   password: new FormControl('',[Validators.required]),
  //   address: new FormControl('',[Validators.required])
  // })

}
 