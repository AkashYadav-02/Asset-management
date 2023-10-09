import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
// import { Route } from '@angular/router';
@Component({
  selector: 'app-credit-information',
  templateUrl: './credit-information.component.html',
  styleUrls: ['./credit-information.component.scss']
})
export class CreditInformationComponent {
  constructor(private dialog:Dialog){}
  onSubmit(){
    const dialogRef=this.dialog.open(DialogBoxComponent,{data:{title:"Success!",dialogMessage:"Thank you your data has been saved and you can view it on your Dashboard/My Workspace."}})
  }

}
