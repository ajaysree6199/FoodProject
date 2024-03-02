import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { SecurityService } from './servicefiles/security.service';
import { AuthserviceService } from './servicefiles/authservice.service';
import { CartService } from './servicefiles/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectFood';
    constructor(public security:SecurityService, public authservice:AuthserviceService, public cartservice:CartService){}
  ngOnInit() {
    AOS.init();
    this.cartservice.getCartItem
    
 }
showNavbarLinks = false;

toggleNavbar() {
    this.showNavbarLinks = !this.showNavbarLinks;
  }
checkAccess(){
  this.security.canAccess();

}

logout(){
  this.security.logout();
}

}
