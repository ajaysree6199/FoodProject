import { Component } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { CartService } from '../servicefiles/cart.service';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../servicefiles/food.service';





@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  constructor( private cartService:CartService,public aos:ServiceService, private route: ActivatedRoute, private router:Router , private foodService:FoodService){}

  ngOnInit() {
  
    this.selectedCartItems=this.cartService.getCartItem()
  }

  selectedCartItems: any[] = [];

  
  getTotalPrice(): number {
    return this.selectedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  total:number=0;

  

  onSubmit(payForm: NgForm) {
    const foodData = this.cartService.getCartItem();
    foodData.forEach((item) => {
  
    this.foodService.addFoodItem(item).subscribe({
      next: (response) => {
        console.log('Food data sent successfully:', response);
        // Handle success
      },
      error: (error) => {
        console.error('Error sending food data:', error);
        // Handle error
      }
    });
  })
  }




  // Modal Content

  canVisible:boolean =false;
  canLoad:boolean=false;
  canSee:boolean=false;
  visible(){
    // this.canVisible=true;
    this.canSee=true;
    this.canLoad=true;

    setTimeout(()=>{
      this.canLoad=false;
    },2000)
    setTimeout(()=>{
      this.canVisible=true;
    },3000)
    setTimeout(()=>{
      this.canVisible=false;
      this.canSee=false;
    },5500)
    setTimeout(()=>{
     this.router.navigateByUrl('/home')
     this.cartService.clearCart();

    },6000)
  }

 

}
