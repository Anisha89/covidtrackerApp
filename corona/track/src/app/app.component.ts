import { Component } from '@angular/core';
import { CoronaserviceService } from './coronaservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries:any
  country:any
  population:number
  cases:number
  todaycases:number
  active:number
  recovered:number
  todayrecovered:number
  deaths:number
  todaydeaths:number

  
  constructor(private corona: CoronaserviceService){}
  ngOnInit(){
    this.corona.getCountries().subscribe((data)=>{
      console.log(data);
      this.countries = data
    })
  }
getCoronaData(){
  this.corona.getcoronadetails(this.country).subscribe((data)=>{
    console.log(data);
    this.population = data.population
    this.cases = data.cases
    this.todaycases = data.todayCases
    this.active = data.active
    this.recovered = data.recovered
    this.todayrecovered = data.todayrecovered
    this.deaths = data.deaths
    this.todaydeaths = data.todayDeaths
  })
}

 getCountry(country:any){
   this.country = country
 } 

}
