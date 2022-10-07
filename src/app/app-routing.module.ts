import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { FlexLayOutComponent } from './flex-lay-out/flex-lay-out.component';
import { NewuserComponent } from './newuser/newuser.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UsersComponent }from './users/users.component';
const routes: Routes = [
  { path: '', redirectTo: 'flex-lay-out', pathMatch: 'full' },
  {path:'users',component:UsersComponent},
  {path:'newuser',component:NewuserComponent},
  {path:'customer',component:CustomerComponent},
  {path:'flex-lay-out',component:FlexLayOutComponent},
  {path:'register-form',component:RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
