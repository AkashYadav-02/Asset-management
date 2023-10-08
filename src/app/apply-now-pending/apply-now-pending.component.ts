import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

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
  
  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    for(let file of event.files){
      this.uploadedFiles.push(file)
    }
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File Uploaded successfully' });
  }

  carDetails=[
    {
      name:"Audi A8 L 2022",
      price: 8200,
      imgUrl: "../../assets/Cars/toyota.png"
    }
  ]

}
