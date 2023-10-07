import { Component, OnInit, Input, HostListener, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
declare var $: any;

@Component({
  selector: 'app-navbar-after-home-page',
  templateUrl: './navbar-after-home-page.component.html',
  styleUrls: ['./navbar-after-home-page.component.scss']
})
export class NavbarAfterHomePageComponent implements OnInit {
  isExpand = false;
  isNotiExpand = false;
  isProfileExpand = false;

  @Input() navtheme?: string;

  txtcolor = '';
  aurologo = '';
  bgcolor = '';
  like = '';
  noti = '';
  sett = '';
  sideburger = ''
  // const element = document.getElementById('yourElementId'); 
  // x = this.element.scrollHeight;

  ngOnInit(): void {
    if (this.navtheme == 'blacktheme') {
      // TypeScript code
      window.addEventListener('scroll', () => {
        const navbar = document.getElementById('car-subs-nav');

        if (navbar) {
          const scrollThreshold = 10;

          if (window.scrollY > scrollThreshold) {
            this.txtcolor = 'black';
            this.bgcolor = 'white'
            this.aurologo = '../../assets/logos/logo.png';
            this.like = '../../assets/logos/Like2.png';
            this.noti = '../../assets/logos/Notification2.png';
            this.sett = '../../assets/logos/Settings2.png';
            this.sideburger = '../../assets/logos/black-burger.png';
            navbar.style.width = '100%';
            navbar.style.paddingLeft = '61px'
            navbar.style.paddingRight = '61px'
          } else {
            // navbar.style.backgroundColor = '#333'; // Initial color
            this.txtcolor = 'white';
            this.bgcolor = 'rgba(0, 0, 0, 0)'
            this.aurologo = '../../assets/Aurionpro.png';
            this.like = '../../assets/logos/Like.png';
            this.noti = '../../assets/logos/Notification.png';
            this.sett = '../../assets/logos/Settings.png';
            this.sideburger = '../../assets/logos/white-burger.png';
            navbar.style.width = '91%';
            navbar.style.paddingLeft = '0px'
            navbar.style.paddingRight = '0px'
          }
        }
      });

      this.txtcolor = 'white';
      this.bgcolor = 'rgba(0, 0, 0, 0)'
      this.aurologo = '../../assets/Aurionpro.png';
      this.like = '../../assets/logos/Like.png';
      this.noti = '../../assets/logos/Notification.png';
      this.sett = '../../assets/logos/Settings.png';
      this.sideburger = '../../assets/logos/white-burger.png';
    } else if (this.navtheme == 'whitetheme') {
      this.txtcolor = 'black';
      this.bgcolor = 'white'
      this.aurologo = '../../assets/logos/logo.png';
      this.like = '../../assets/logos/Like2.png';
      this.noti = '../../assets/logos/Notification2.png';
      this.sett = '../../assets/logos/Settings2.png';
      this.sideburger = '../../assets/logos/black-burger.png';
    }

  }

  constructor(private router: Router,
    private fb: FormBuilder,
    private redirectMenu: RedirectMenuService,
  ) { }

  //  @HostListener('window:scroll', ['$event']) 
  // scrollHandler(event:Event) {
  //   console.debug("Scroll Event");
  //   this.navtheme='';
  // }

  expandSideBar() {
    if (this.isExpand) {
      this.isExpand = false
    } else {
      this.isExpand = true
    }
    this.isNotiExpand = false
    this.isProfileExpand = false
  }
  expandNotiBar() {
    if (this.isNotiExpand) {
      this.isNotiExpand = false
    } else {
      this.isNotiExpand = true
    }
    this.isProfileExpand = false
    this.isExpand = false
  }
  expandProfileBar() {
    if (this.isProfileExpand) {
      this.isProfileExpand = false
    } else {
      this.isProfileExpand = true
      this.isNotiExpand = false
      this.isExpand = false
    }
  }

  setBackground(color: string) {
    if (color == "black") {
      this.txtcolor = 'black';
      this.bgcolor = 'white'
      this.aurologo = '../../assets/logos/logo.png';
      this.like = '../../assets/logos/Like2.png';
      this.noti = '../../assets/logos/Notification2.png';
      this.sett = '../../assets/logos/Settings2.png';
      this.sideburger = '../../assets/logos/black-burger.png';
    } else {
      this.txtcolor = 'white';
      this.bgcolor = 'rgba(0, 0, 0, 0)'
      this.aurologo = '../../assets/Aurionpro.png';
      this.like = '../../assets/logos/Like.png';
      this.noti = '../../assets/logos/Notification.png';
      this.sett = '../../assets/logos/Settings.png';
      this.sideburger = '../../assets/logos/white-burger.png';
    }
  }

  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }

}
