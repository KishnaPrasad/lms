import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchBookComponent } from './search-book/search-book.component';


const routes: Routes = [
{
  path:'',
  component:LoginComponent
},

  {
    path: 'search-books',
    component: SearchBookComponent
  },
  {
    path: 'addbooks',
    component: AddbooksComponent
  },
  {
    path: 'deletebook',
    component: DeletebookComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'list-user',
    component:ListUserComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
