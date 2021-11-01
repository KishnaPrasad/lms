import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './api.response';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/users/';

  login(loginPayload: { username: any; password: any; }) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
