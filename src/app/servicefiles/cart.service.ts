import { Injectable } from '@angular/core';
import { Observable, count,BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  constructor() { }
  cardItems:any[]=[];

  getCartItem(){
    return this.cardItems;
  }

 
  private selectedCartItemsSubject = new BehaviorSubject<any[]>([]);
  selectedCartItems$ = this.selectedCartItemsSubject.asObservable();

  setSelectedCartItems(items: any[]) {
    this.selectedCartItemsSubject.next(items);
  }
  getSelectedCartItems(): any[] {
    return this.selectedCartItemsSubject.value;
  }

  addToCart(item: any) {
    const index = this.cardItems.findIndex((cardItem) => cardItem.id === item.id);

    if (index !== -1) {
        this.cardItems[index].quantity++;
    } else {
        this.cardItems.push({ ...item, quantity: 1 });
    }
}
 

  clearCart(){
    this.cardItems=[]
  }
  setTotalAmount(amount: number) {
    this.totalAmount = amount;
  }

  totalAmount: any=0;
  
  getTotalAmount() {
    return this.totalAmount.asObservable();
  }

  

}
