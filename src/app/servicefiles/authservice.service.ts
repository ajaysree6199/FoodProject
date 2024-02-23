import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map,of } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  //Actual Backend Code..........

//   private apiUrl = 'http://localhost:3000';


//   constructor(private http: HttpClient) { }

//   register(user:string): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, user)
    
// }

// login(user:string): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login`, user)
//     .pipe(
//       catchError((error: any) => {
//         console.log('Error during login:', error);
//         throw error; // Rethrow the error for further handling
//       })
//     );
    
// }


// The Code I Have Changed For Hosting....................


register(user: any): Observable<any> {
  
  return of({ message: 'Registration successful' });
}


login(user: any): Observable<any> {
  
  this.loggedIn = true;
  return of({ message: 'Login successful' });
}
loggedIn:boolean=false;
isLoggedIn(): boolean {
  return this.loggedIn;
}


}
