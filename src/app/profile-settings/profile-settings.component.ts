import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {
    const link1 = document.getElementById("link1") as HTMLElement;
    const numberInput = document.getElementById("number") as HTMLInputElement;
    const link2 = document.getElementById("link2") as HTMLElement;
    link1.addEventListener("click", () => {
      numberInput.focus();
    });
    link2.addEventListener("click", ()=>{
      numberInput.value = " ";
    });
  
  }

  navigateToProfile() {
    this.router.navigate(['/main-profile']);
  }
  
  navigateToAccountSettings() {
    this.router.navigate(['/profile-settings']);
  }
  
}
