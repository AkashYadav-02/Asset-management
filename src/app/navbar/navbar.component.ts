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
  btnborder=''
  btncolor=''

  ngOnInit(): void {

    if (this.navtheme == 'blacktheme') {
      // TypeScript code
      window.addEventListener('scroll', () => {
        const navbar = document.getElementById('car-subs-nav');

        if (navbar) {
          const scrollThreshold = 10;

          if (window.scrollY > scrollThreshold) {
            this.txtcolor = 'black';
            this.bgcolor = 'white';
            this.aurologo = '../../assets/logos/logo.png';
            this.btncolor = '#C21807';
            navbar.style.width = '100%';
            navbar.style.paddingLeft = '65px';
            navbar.style.paddingRight = '65px';
          } else {
            // navbar.style.backgroundColor = '#333'; // Initial color
            this.txtcolor = 'white';
            this.bgcolor = 'rgba(0, 0, 0, 0)'
            this.btncolor = 'white';
            this.aurologo = '../../assets/Aurionpro.png';
            navbar.style.width = '91%';
            navbar.style.paddingLeft = '0px'
            navbar.style.paddingRight = '0px'
          }
        }
      });

      this.txtcolor = 'white';
      this.bgcolor = 'rgba(0, 0, 0, 0)';
      this.btncolor = 'white';
      this.aurologo = '../../assets/Aurionpro.png';
    } else if (this.navtheme == 'whitetheme') {
      this.txtcolor = 'black';
      this.bgcolor = 'white';
      this.btncolor = '#C21807';
      this.aurologo = '../../assets/logos/logo.png';
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
