import { Component } from '@angular/core';
import { CartService } from '../servicefiles/cart.service';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor( private cartService:CartService , private  router: Router){
    this.cartItems=this.cartService.getCartItem()
  }

  cartItems:any[]=[]

  clearCart(){
    this.cartService.clearCart();
    this.cartItems=[]
    this. updateTotalAmount()
  }



  removefromcart(itemId: number) {
    const indexToRemove = this.cartItems.findIndex(item => item.id === itemId);
  
    if (indexToRemove !== -1) {
      this.cartItems.splice(indexToRemove, 1);
      this.updateTotalAmount();
    }
  }



  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  

  updateTotalAmount() {
    const totalAmount = this.getTotalPrice();
    this.cartService.setTotalAmount(totalAmount);
  }


  proceedToPayment() {
    const selectedItems = this.cartItems;
    this.cartService.setSelectedCartItems(selectedItems);
    this.router.navigate(['/pay']);
  
  
  }

}
