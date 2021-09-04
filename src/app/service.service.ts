import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tank } from './tank';

const REST_API_SERVER = 'http://localhost:8081/tanklist';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) {
  	console.log("service.service constructor");
  	this.httpClient.get(REST_API_SERVER);
  }
 
  public getTanks(){
  	console.log('Request is sent!');
    return this.httpClient.get<Tank[]>(REST_API_SERVER);
  }
}
