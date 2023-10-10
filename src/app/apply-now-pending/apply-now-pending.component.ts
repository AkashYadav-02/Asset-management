import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NavigationEnd, Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
  selector: 'app-apply-now-pending',
  templateUrl: './apply-now-pending.component.html',
  styleUrls: ['./apply-now-pending.component.scss'],
  providers: [MessageService]
})
export class ApplyNowPendingComponent {
  uploadedFiles: any[] = [];

  
  myObserver ;
  currentUrl : any;
  techDetailsParameter : any;
  showCredit : boolean = true;
  
  constructor(private messageService: MessageService, private router: Router, private redirectMenu: RedirectMenuService) {
    this.myObserver = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras.state) {
        this.techDetailsParameter = navigation.extras.state;
        console.log("apply now pending ",this.techDetailsParameter)
      } 
      }
    });

  }

  redirect(path : string){
    this.redirectMenu.redirectTo(path);
  }

  onSubmit(){
    this.techDetailsParameter.comp = "apply";
    this.techDetailsParameter.status = "Processed";
      //this.redirectMenu.redirectWithdata('work-space',this.techDetailsParameter);
      this.showCredit = false;
  }

  onUpload(event: any) {
    for(let file of event.files){
      this.uploadedFiles.push(file)
    }
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File Uploaded successfully' });
  }

  onOk(){
    this.techDetailsParameter.comp = 'credit';
    this.showCredit = true;
    this.redirectMenu.redirectWithdata('work-space',this.techDetailsParameter);
    
  }
  
  onCancel(){
    this.techDetailsParameter.comp = 'credit';
    this.showCredit = true;
    this.redirectMenu.redirectWithdata('work-space',this.techDetailsParameter);
  }

  carDetails=[
    {
      name:"Audi A8 L 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/toyota.png"
    }
  ]

}
