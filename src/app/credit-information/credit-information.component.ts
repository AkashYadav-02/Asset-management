import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
// import { Route } from '@angular/router';
@Component({
  selector: 'app-credit-information',
  templateUrl: './credit-information.component.html',
  styleUrls: ['./credit-information.component.scss']
})
export class CreditInformationComponent {
  myObserver;
  currentUrl: any;
  techDetailsParameter: any;
  constructor(private router: Router,private http: HttpClient,private dialog:Dialog){
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
  onSubmit(){
    const dialogRef=this.dialog.open(DialogBoxComponent,{data:{title:"Success!",dialogMessage:"Thank you your data has been saved and you can view it on your Dashboard/My Workspace.",data:this.techDetailsParameter}})
  }

}
