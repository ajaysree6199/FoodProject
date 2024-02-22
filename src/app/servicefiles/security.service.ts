import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private router:Router) { }

  public isAuth:boolean=false;

  isAuthenticated():boolean{
    if(this.isAuth==true){
      return true;
    }
    return false //this needs to be true
   }

   canAccess(){
    if(!this.isAuthenticated()){
      this.router.navigate(['/login'])

    }
   }

   canAuthenticate(){
    if(this.isAuthenticated()){
      this.router.navigateByUrl('/home')

    }

   }
   setAuthenticated(status: boolean): void {
    this.isAuth= status;
  }
  logout(): void {
    this.setAuthenticated(false);
    this.router.navigateByUrl('/login');
  }
}
