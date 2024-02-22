import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ServiceapiService } from '../servicefiles/serviceapi.service';
import { CartService } from '../servicefiles/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(public aos:ServiceService, private apiservice:ServiceapiService, private route:ActivatedRoute, private cartService:CartService, private router:Router){}


  foodItem: any;

  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.foodItem = this.apiservice.getFoodItem(id);

    
  }

  addtoCart(foodItem:any){
    this.cartService.addToCart(foodItem)
  }
  proceedToPay(foodItem:any){
    this.cartService.addToCart(foodItem);
    this.router.navigateByUrl('/pay')
  }

}
