import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import * as AOS from 'aos';
import { ServiceService } from '../service.service';
import { SecurityService } from '../servicefiles/security.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(public aos:ServiceService, public security:SecurityService){}
  ngOnInit(){
    // this.security.canAccess();
  }
 
  checkAccess(){
    this.security.canAccess();

  }

  


  onSubmit(bookForm:NgForm){
    console.log(bookForm);
    this.resetForm(bookForm);

}

resetForm(form: NgForm): void {
  form.resetForm();
}

showModal: boolean = false;

  toggleModal(): void {
    this.showModal = true;
    setTimeout(()=>{
      this.showModal=false;
    },2500)
    
  }
}
