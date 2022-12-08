import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { GlobalDataSummary } from '../models/global-data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

// global uri declare
private globalDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/09-27-2020.csv';

  constructor(private http: HttpClient) { }

  //by using method to fetch the data from global uri
  getGlobalData()
  {
    return this.http.get(this.globalDataUrl, {responseType: 'text'}).pipe(
      map(result => {
    
       
        //intialize model 
          
      let data: GlobalDataSummary[] =[];
     //merge states in country
     let raw = {}; //create a array object    

// display row split in next by next using /n
      
        let rows = result.split('\n');
        //console.log(rows);
        // remove field header
        rows.splice(0,1);
        //shows column value
        rows.forEach(row =>{
          let cols = row.split(/,(?=\S)/);
          // console.log(cols);

          //push the data in globaldata summary
         /* data.push({
            country: cols[3],
            confirmed: +cols[7],
            deaths: +cols[8],
            recovered: +cols[9],
            active: +cols[10]
          })*/
         //before push the value what are the states in country merge in each country
          let cs ={
            country: cols[3],
            confirmed: +cols[7],
            deaths: +cols[8],
            recovered: +cols[9],
            active: +cols[10]
          }
         raw[cs.country] = cs;
         let temp : GlobalDataSummary = raw[cs.country];
         if(temp){
            temp.active = cs.active + temp.active;
            temp.deaths = cs.deaths + temp.deaths;
            temp.confirmed = cs.confirmed+ temp.confirmed;
            temp.recovered = cs.recovered + temp.recovered;
            raw[cs.country]=temp;

         }else 
         {
         raw[cs.country]=cs;
         }
           
        })
        return <GlobalDataSummary[]>Object.values(raw);
    }))
  }
}
