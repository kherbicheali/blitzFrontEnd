import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const REST_API_SERVER = 'http://localhost:8081/tanklist';
//const REST_API_SERVER = 'http://localhost:8080/simple-webapp/mehenna';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private httpClient: HttpClient) {
  	console.log("service.service constructor");
  	this.httpClient.get(REST_API_SERVER);
  }
  
  private extractData(res: any): any {
    const body = res;
    return body || { };
  }
  
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
   
  public getTanks():Observable<any>{
  	console.log('Request is sent!');
    return this.httpClient.get(REST_API_SERVER).pipe(
    	map(this.extractData),
    	catchError(this.handleError)
    );
    //return this.httpClient.get(REST_API_SERVER).pipe((res: Response) => res.json());
    	
    
  }
}
