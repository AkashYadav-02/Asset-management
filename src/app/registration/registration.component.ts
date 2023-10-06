import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordMismatch: true };
  }
  return null;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [MessageService]
})
export class RegistrationComponent {
  email: string = '';
  fname: string = '';
  lname: string = '';
  password: string = '';
  confirmPassword: string = '';
  register: FormGroup | any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private redirectMenu: RedirectMenuService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.register = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      lname: ['', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      termsAndConditions: [false, Validators.requiredTrue],
    }, {
      validators: passwordMatchValidator, // Validate password and confirmPassword
    });
  }

  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }

  redirectToForgotPassPage() {
    this.router.navigate(['forgot']);
  }

  onSubmit() {
    this.messageService.add({ key : 'tc' ,severity: 'success', summary: 'Success', detail: 'Message Content' }); 
       this.redirect('user/login');
    // if (this.register && this.register.valid) {
    //   // console.log('Form submitted');
    //   // You can perform additional actions here, e.g., sending the form data to an API.
    // } else {
    //   console.log('Please fill in all required fields and make sure passwords match.');
    // }
  }
}
