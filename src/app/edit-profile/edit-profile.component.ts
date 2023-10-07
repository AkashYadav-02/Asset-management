import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnGroup } from 'ag-grid-community';
import { MessageService } from 'primeng/api';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [MessageService]

})
export class EditProfileComponent implements OnInit {
 
  constructor(private router: Router, private messageService: MessageService,  
    private renderer: Renderer2,
    private el: ElementRef) {}
  userForm:FormGroup | any;
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
  clicked1=true;
  clicked2=false;
  navigateToProfile() {
    if(this.clicked1){
      this.clicked2=true;
      this.clicked1=false;
      console.log(this.clicked1, this.clicked2);
      
    }
   this.router.navigate(['/main-profile']);
  }
  navigateToAccountSettings() {
    this.router.navigate(['/profile-settings']);
  }
  navigateToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  showBottomCenter(val1:any,val2:any,val3:any,val4:any) {
    this.showAlert()
    console.log("clicked");
    this.print(val1,val2,val3,val4)
    // this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: 'Your Profile has been updated successfully' });
    
}

showAlert() {
  const alertDiv = this.renderer.createElement('div');
  this.renderer.addClass(alertDiv, 'alert');
  this.renderer.addClass(alertDiv, 'alert-success');
  this.renderer.setAttribute(alertDiv, 'role', 'alert');
  alertDiv.innerHTML = `Profile saved successfully`;
  const alertContainer = this.el.nativeElement.querySelector('#alertContainer');
  if (alertContainer) {
    this.renderer.appendChild(alertContainer, alertDiv);
  }
}
  show() {
    this.messageService.add({severity: 'error', summary: 'Failed', detail: 'Log In Failed' });
    console.log("clicked");
}

print(val1:any,val2:any,val3:any,val4:any){
console.log(val1,val2,val3,val4);

}

onSubmit(){
  console.log(this.userForm);
  console.log('form');

}
resetForm(){
  this.router.navigate(['/main-profile']);
  this.userForm.reset();
}
}


