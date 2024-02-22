import { Component } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { SecurityService } from '../servicefiles/security.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(public security:SecurityService){}

  ngOnInit(){
    // this.security.canAccess();
  }

    onSubmit(contactForm:NgForm){
    console.log(contactForm);
    if(contactForm.valid){
      alert("Message Sent Successfully");
      this.resetForm(contactForm);

    }
    
  }

  resetForm(form: NgForm): void {
    form.resetForm();
  }

}
