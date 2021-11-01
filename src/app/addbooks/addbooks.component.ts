import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { Interface } from 'readline';
import { Book } from '../Book';
import { BooksService } from '../books.service';
import { DynamicGrid } from './addbooks.model';


@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  public books: Book[] =[];
  // public booksArr: DynamicGrid[] | undefined;

  constructor(private router: Router,private bookService: BooksService) { }
  dynamicArray: Array<DynamicGrid> = [];
  
  // newDynamic: any = new DynamicGrid;
  newDynamic: any;
  // newDynamic2: DynamicGrid = new DynamicGrid;
  ngOnInit(): void {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.newDynamic = { isbn: "", title: "", cover: "", publisher: "", pages: 0, available: 0, shelfId: "" };
    this.dynamicArray.push(this.newDynamic);
  }
  addRow() {
    
    this.newDynamic = { isbn: "", title: "", cover: "", publisher: "", pages: 0, available: 0, shelfId: "" };
    this.dynamicArray.push(this.newDynamic);
    // this.toastr.success('New row added successfully', 'New Row');  
    console.log(this.dynamicArray);
    return true;
  }
  deleteRow(index: number) {
    if (this.dynamicArray.length == 1) {
      // this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      // this.toastr.warning('Row deleted successfully', 'Delete row');  
      return true;
    }
  }
  public onAddBooks(addForm: NgForm): void {
    // document.getElementById('add-book-form')?.click;
//     for(var index in this.dynamicArray)
// {   
//     console.log(this.dynamicArray[index]);  
// }
// let json = JSON.stringify(this.dynamicArray);
// console.log(json); 
for(var index in this.dynamicArray){
    this.books.push(this.dynamicArray[index]);}
// console.log(this.books);
    this.bookService.addBooks(this.books).subscribe(
      (response: Book[]) => {
        console.log(response);
        this.getBooks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );


  }
  public getBooks(): void {
    this.bookService.getBooks().subscribe(
      (response: Book[]) => {
        this.books = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
