import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private ordersApiUrl = 'https://jsonplaceholder.typicode.com/orders';

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getOrderData(): Observable<any> {
    return this.http.get(this.ordersApiUrl).pipe(
      catchError((error: any) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  postData(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
