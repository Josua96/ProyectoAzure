import { Injectable } from '@angular/core';

import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';

import { Http, RequestOptions,RequestOptionsArgs, Headers} from '@angular/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AzureDemoService {

  constructor(private http:HttpClient) { }

  
  sendMessage(message:String){

    return this.http.get(environment.serviceUrl+`&message=${message}`);
    
  }

}
