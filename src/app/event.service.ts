import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _homeUrl = "http://localhost:8080/home"


  constructor(private http: HttpClient) { }

  getHome() {
    return this.http.get<any>(this._homeUrl)

  }
}
