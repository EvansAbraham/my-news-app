import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  newsapiurl="https://newsapi.org/v2/top-headlines?country=in&apiKey=aaea992255724d9aa65e5ab0c334ef35";
  techapiurl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=aaea992255724d9aa65e5ab0c334ef35";
  businessapiurl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=aaea992255724d9aa65e5ab0c334ef35";
  sportsapiurl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=aaea992255724d9aa65e5ab0c334ef35";
  scienceapiurl="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=aaea992255724d9aa65e5ab0c334ef35";
  healthapiurl="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=aaea992255724d9aa65e5ab0c334ef35";
  entertainmentapiurl="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=aaea992255724d9aa65e5ab0c334ef35";
  topHeading():Observable<any>{
    return this._http.get(this.newsapiurl);
  }
  technews():Observable<any>{
    return this._http.get(this.techapiurl);
  }
  businessnews():Observable<any>{
    return this._http.get(this.businessapiurl);
  }
  sportsnews():Observable<any>{
    return this._http.get(this.sportsapiurl);
  }
  sciencenews():Observable<any>{
    return this._http.get(this.scienceapiurl);
  }
  healthnews():Observable<any>{
    return this._http.get(this.healthapiurl);
  }
  entertainmentnews():Observable<any>{
    return this._http.get(this.entertainmentapiurl);
  }
}
