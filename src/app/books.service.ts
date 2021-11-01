import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './Book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

    public getBooks(): Observable<Book[]> {
      return this.http.get<Book[]>(`${this.apiServerUrl}/getBooks`);
    }
    public addBooks(books: Book[]): Observable<Book[]> {
      return this.http.post<Book[]>(`${this.apiServerUrl}/addBook`, books);
    }
    
  

   
    public deleteBooks(book: Book): Observable<any> {
      // return this.http.delete<Book>(`${this.apiServerUrl}/delBook`, book);
      return this.http.request('DELETE', `${this.apiServerUrl}/delBook`, { body: book });
    }
}
