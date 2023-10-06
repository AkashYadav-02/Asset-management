import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-varification-login',
  templateUrl: './varification-login.component.html',
  styleUrls: ['./varification-login.component.scss'],
  providers: [MessageService]
})
export class VarificationLoginComponent {

  constructor(private router:Router,
    private messageService: MessageService) {}

  onSubmit(){
    this.messageService.clear();
    this.messageService.add({ key : 'tc' ,severity: 'success', summary: 'Success', detail: 'Verified' }); 
    setTimeout(() => {
      this.redirecttonewPass();
    }, 1000);
  }

redirecttonewPass() {

this.router.navigate(['newPass'])

}
}
