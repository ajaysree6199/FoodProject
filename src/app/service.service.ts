import { Injectable } from '@angular/core';
import * as AOS from 'aos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  InitAOS() {
    AOS.init();
 }
}
