import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { ServiceService } from '../service.service';
import { ServiceapiService } from '../servicefiles/serviceapi.service';
import { CartService } from '../servicefiles/cart.service';
import { SecurityService } from '../servicefiles/security.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
  
})

export class MenuComponent {
  constructor(public aos:ServiceService, public apiService:ServiceapiService , public cartService:CartService,public security:SecurityService,private router:Router){}

  item:any;
  foodItems:any[]=[]

  ngOnInit(){
    this.item=this.apiService.items
    // this.security.canAccess();
    this.foodItems = this.apiService.getFoodItems();
    

  }
  addtoCart(card:any){
    this.cartService.addToCart(card)
    this.security.canAccess();
  }
  goToDetail(foodId: number) {
    this.router.navigate(['/order', foodId]);
    this.security.canAccess();
  }

  checkAccess(){
    this.security.canAccess();

  }

  
}
