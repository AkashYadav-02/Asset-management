import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent {
  constructor(private router: Router){}
  navigateToProfile() {
    this.router.navigate(['/main-profile']);
  }
  
  navigateToAccountSettings() {
    this.router.navigate(['/profile-settings']);
  }

}
