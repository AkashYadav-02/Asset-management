import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  constructor(private router: Router,
    private redirectMenu : RedirectMenuService,){}



  navigateToProfile() {
    this.router.navigate(['/main-profile']);
  }
  
  navigateToAccountSettings() {
    this.router.navigate(['/profile-settings']);
  }
  navigateToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }


  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }
}


