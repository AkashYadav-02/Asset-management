import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple'
import { RmHomepageComponent } from './rm-homepage/rm-homepage.component';
import { CarSubsComponent } from './car-subs/car-subs.component';
import { HomeCarCollecComponent } from './home-screen/home-car-collec/home-car-collec.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { TimelineModule } from 'primeng/timeline';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RmCarCollecComponent } from './rm-homepage/rm-car-collec/rm-car-collec.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { NavbarAfterHomePageComponent } from './navbar-after-home-page/navbar-after-home-page.component';
import { HomePageAfterComponent } from './home-page-after/home-page-after.component';
import { VarificationLoginComponent } from './varification-login/varification-login.component';
// import { Form } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { HomepageUpperComponent } from './rm-homepage/homepage-upper/homepage-upper.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { Spinner1Component } from './spinner1/spinner1.component';
import { Spinner2Component } from './spinner2/spinner2.component';


import { HomeupperpageComponent } from './rm-homepage/homeupperpage/homeupperpage.component';
import { AfternavbarComponent } from './afternavbar/afternavbar.component';

import { RouterModule } from '@angular/router';

import { ApplyNowFlow1Component } from './apply-now-flow1/apply-now-flow1.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { NavBarAfterHomeProfileComponent } from './nav-bar-after-home-profile/nav-bar-after-home-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';

// import { ToastmssageComponent } from './toastmssage/toastmssage.component';
 

@NgModule({
  declarations: [
    AppComponent,
    
    CarSubsComponent,
    HomeCarCollecComponent,
    RmHomepageComponent,
    CarSubsComponent,
    HomeCarCollecComponent,
    HomeScreenComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    RmCarCollecComponent,
    DashboardComponent,
    WorkspaceComponent,
    NavbarAfterHomePageComponent,
    VarificationLoginComponent,
    HomePageAfterComponent,
    HomepageUpperComponent,
    FooterComponent,
    ApplyNowFlow1Component,
    MainProfileComponent,
    NavBarAfterHomeProfileComponent,
    EditProfileComponent,
    ProfileSettingsComponent,
    SpinnerComponent,
    Spinner1Component,
    Spinner2Component,
    HowItWorksComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    TimelineModule,
    AgGridModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
