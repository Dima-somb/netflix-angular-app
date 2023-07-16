import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   isScrolled!: boolean;

  @HostListener('window:scroll', ['$event'])
   setIsScrolled() {
    this.isScrolled =  window.pageYOffset !== 0;
    return window.onscroll = null;
   }
}
