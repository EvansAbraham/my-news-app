import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  sportsDisplay:any=[];
  ngOnInit(): void {
    this._services.sportsnews().subscribe((result)=>{
      console.log(result);
      this.sportsDisplay=result.articles;
    })
  }
}
