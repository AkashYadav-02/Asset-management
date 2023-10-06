import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.scss']
})
export class NewpassComponent {
  constructor(private router:Router,
    private redirectMenu : RedirectMenuService,
     ) {}

     redirect(path : string){
      this.redirectMenu.redirectTo(path);
    }
}
