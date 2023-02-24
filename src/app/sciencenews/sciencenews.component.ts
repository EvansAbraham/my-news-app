import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  scienceDisplay:any=[];
  ngOnInit(): void {
    this._services.sciencenews().subscribe((result)=>{
      console.log(result);
      this.scienceDisplay=result.articles;
    })
  }
}
