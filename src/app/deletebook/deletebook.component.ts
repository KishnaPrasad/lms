import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicGrid } from '../addbooks/addbooks.model';
import { Book } from '../Book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  searchText:string;
  p:number=0;
  public books: Book[] | undefined;
  public book: Book;
  
  constructor(private router: Router,private bookService: BooksService) {}
  

  ngOnInit(): void {
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
  public DeleteRecord(boo: Book): void{
    
    // let json = JSON.stringify(book);
    // console.log(json);
    let json ={
      "isbn": boo.isbn,
      "title": boo.title,
      "cover": boo.cover,
      "publisher": boo.publisher,
      "pages": boo.pages,
      "available": boo.available,
      "shelfId": boo.shelfId
    }
    console.log(json);
    this.book = json;
    this.bookService.deleteBooks(this.book).subscribe(
      (response: Book) =>{
        console.log(response);
        this.getBooks();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }
}
