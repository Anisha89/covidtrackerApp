import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from 'src/app/models/global-data';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
data : GlobalDataSummary[];
countries: string[]=[];
totalconfirmed = 0;
totaldeaths = 0;
totalactive = 0;
totalrecovered = 0;
  constructor(private service: DataServiceService ) { }

  ngOnInit(): void {

    this.service.getGlobalData().subscribe(result =>{
      this.data=result;
      this.data.forEach(cs=>{
        this.countries.push(cs.country);
      })
    })
  }
  updatevalues(country: string){
    console.log(country);
    this.data.forEach(cs=>{
      if(cs.country == country){
        this.totalactive=cs.active;
        this.totaldeaths=cs.deaths;
        this.totalrecovered=cs.recovered;
        this.totalconfirmed=cs.confirmed;

      }
    })
  }
}
