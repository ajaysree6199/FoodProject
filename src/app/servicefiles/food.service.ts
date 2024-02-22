import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  //Sending food data to DataBase

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000';

 

  addFoodItem(foodItem:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/foodItems`, foodItem)
  }

  getFoodItems() {
    return this.http.get('http://localhost:3000/foodItems');
  }
}
