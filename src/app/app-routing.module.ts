import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {PayComponent} from './pay/pay.component';
import{ErrorComponent} from './error/error.component';
import{ContactComponent} from './contact/contact.component';
import{CartComponent} from './cart/cart.component';
import {ErrorpageComponent} from './errorpage/errorpage.component'
import {BooktableComponent}from './booktable/booktable.component'

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'order/:id',component:OrderComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'pay',component: PayComponent},
  {path:'carousel',component:ErrorComponent},
  {path:'contact',component:ContactComponent},
  {path:'cart',component:CartComponent},
  {path:'table', component:BooktableComponent},
  {path:'**',component:ErrorpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
