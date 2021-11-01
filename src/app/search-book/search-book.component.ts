import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  public books: Book[] | undefined;
  searchText:string;
  p:number=0;
  constructor(private router: Router,private bookService: BooksService) {}
  ngOnInit(){
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.getBooks(); 
   }

  public getBooks(): void{
      this.bookService.getBooks().subscribe(
        (response: Book[]) =>{
          this.books = response;
        },
        (error: HttpErrorResponse) =>{
          alert(error.message);
        }
      );
    }
}
