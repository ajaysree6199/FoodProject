import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { AuthserviceService } from '../servicefiles/authservice.service';
import { SecurityService } from '../servicefiles/security.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public aos:ServiceService, private authService: AuthserviceService, private security:SecurityService, private router:Router){}

  ngOnInit(){
    this.security.canAuthenticate();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
        const user = form.value;
        this.authService.register(user)
        .subscribe({
          next: (response) => {
            console.log('Server response:', response);
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
}
