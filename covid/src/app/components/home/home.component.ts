import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from 'src/app/models/global-data';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
totalconfirmed = 0;
totaldeaths = 0;
totalactive = 0;
totalrecovered = 0;
globaldata: GlobalDataSummary[];
  constructor(private dataservice: DataServiceService) { }

  ngOnInit(): void {


    this.dataservice.getGlobalData().subscribe(
      {
        next: (result)=>{
          console.log(result);
          this.globaldata = result;
          result.forEach(cs=>{
            if(!Number.isNaN(cs.confirmed))
            {
            this.totalconfirmed+=cs.confirmed;
            this.totaldeaths+=cs.deaths;
            this.totalactive+=cs.active;
            this.totalrecovered+=cs.recovered;
            }

          })
        }
      }
    )
  }

}
