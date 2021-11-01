import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
public books: Book[] | undefined;

constructor(private bookService: BooksService) {}
 ngOnInit(){
  // this.getBooks(); 
 }

// public getBooks(): void{
//   this.bookService.getBooks().subscribe(
//     (response: Book[]) =>{
//       this.books = response;
//     },
//     (error: HttpErrorResponse) =>{
//       alert(error.message);
//     }
//   );
// }

}
