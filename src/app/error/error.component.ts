import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { SecurityService } from '../servicefiles/security.service';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  constructor(public aos:ServiceService, public security:SecurityService){}

  checkAccess(){
    this.security.canAccess();

  }

}
