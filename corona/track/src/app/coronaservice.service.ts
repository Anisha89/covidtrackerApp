import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaserviceService {

  constructor(private http:HttpClient) { }
  getCountries():Observable<any>{
    const url = "https://corona.lmao.ninja/v2/countries"
    return this.http.get<any>(url)
  }
 getcoronadetails(country):Observable<any>{
  const url = "https://corona.lmao.ninja/v2/countries/" +country
     return this.http.get<any>(url)

 }

}
