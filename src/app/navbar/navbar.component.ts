import { Component, Input, OnInit } from '@angular/core';
import { RedirectMenuService } from 'src/services/redirect-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  @Input() navtheme?:string;

  txtcolor='white';
  aurologo='../../assets/Aurionpro.png';
  bgcolor='rgba(0, 0, 0, 0)';

  ngOnInit(): void {
    if (this.navtheme =='blacktheme'){
      this.txtcolor='white';
      this.bgcolor='rgba(0, 0, 0, 0)'
      this.aurologo='../../assets/Aurionpro.png';
    } else if (this.navtheme =='whitetheme'){
      this.txtcolor='black';
      this.bgcolor='white'
      this.aurologo='../../assets/logos/logo.png';
    }
  }

  constructor(
    private redirectService: RedirectMenuService
    ){
  }

  setBackground(color:string){
    if (color =='black'){

      this.txtcolor='black';
      this.bgcolor='white'
      this.aurologo='../../assets/logos/logo.png';

    } else{
 
      this.txtcolor='white';
      this.bgcolor='rgba(0, 0, 0, 0)'
      this.aurologo='../../assets/Aurionpro.png';
    }
  }
  


  redirect(path : string){
    this.redirectService.redirectTo(path);
  }

}
