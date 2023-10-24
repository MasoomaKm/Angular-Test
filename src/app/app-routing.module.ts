import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [

  { path: 'orders', component: OrderComponent },
  { path: 'users', component: UserComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
