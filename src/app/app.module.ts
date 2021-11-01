import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksService } from './books.service';
import { SearchBookComponent } from './search-book/search-book.component';
import { HomeComponent } from './home/home.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user.component';
import { RegistrationComponent } from './registration/registration.component';
import { ApiServiceService } from './api-service.service';
import { TokenInterceptor } from './interceptor';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBookComponent,
    HomeComponent,
    AddbooksComponent,
    DeletebookComponent,
    LoginComponent,
    ListUserComponent,
    RegistrationComponent,
    FooterComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

    
  ],
  providers: [BooksService,ApiServiceService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
