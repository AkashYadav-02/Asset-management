import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.scss'],
  providers:[MessageService]
})
export class NewpassComponent {
  constructor(private router:Router,
    private redirectMenu : RedirectMenuService,
    private renderer: Renderer2,
    private el: ElementRef
     ) {}

    alertwithsucces(){
      Swal.fire("Password Changed", 'Successfully','success')
    }

    onSubmit() {
     this.alertwithsucces()
        setTimeout(() => {
          this.redirect('user/login'); 
        }, 1000);
      } 

     redirect(path : string){
      this.redirectMenu.redirectTo(path);
    }
}
