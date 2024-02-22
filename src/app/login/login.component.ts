import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { AuthserviceService } from '../servicefiles/authservice.service';
import { SecurityService } from '../servicefiles/security.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(public aos:ServiceService, private authService: AuthserviceService, private security:SecurityService, private router:Router){}

    ngOnInit(){
      this.security.canAuthenticate();
    }
  

  onSubmit(form: NgForm) {
    if (form.valid) {
        const user = form.value;
        this.authService.login(user)
        .subscribe({
          next: (response) => {
            console.log(response.message);
            this.security.isAuth=true;
            this.router.navigateByUrl('/home');

          },
          error: (error) => {
            console.log(error);
            this.errorMessage=error.error.message;

          }
        });
    }
  }
  errorMessage:string="";

  visible:boolean =true;
  changetype:boolean=true;

  viewpass(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }
  

    
  }
  
 

