import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  healthnewsDisplay:any=[];
  ngOnInit(): void {
    this._services.healthnews().subscribe((result)=>{
      console.log(result);
      this.healthnewsDisplay=result.articles;
    })
  }

}
