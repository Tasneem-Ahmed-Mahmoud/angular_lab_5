import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'product',pathMatch:"full"},
  {path:'product',component:ProductComponent},
  {path:'details',component:DetailsComponent},
  {path:'login', component:LoginComponent},
  {path:'cart', component:CartComponent},
  {path:'register', component: RegisterComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
