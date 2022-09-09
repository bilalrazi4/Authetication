import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  constructor(private http:HttpClient) { }

  LoginNow(values){
    return this.http.post<any>(`https://localhost:7042//api/Authenticate/login`,values);
  }



}
