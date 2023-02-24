import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
  entertainmentnewsDisplay:any=[];
  ngOnInit(): void {
    this._services.entertainmentnews().subscribe((result)=>{
      console.log(result);      
      this.entertainmentnewsDisplay=result.articles;
    })
  }
}
