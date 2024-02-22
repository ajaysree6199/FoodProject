import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})
export class BooktableComponent {




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
