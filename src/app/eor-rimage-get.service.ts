import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EorRimageGetService {

  constructor(public http: HttpClient) { }

  downloadFile(file){
    return this.http.post('http://127.0.0.1/api/getImage',file,{
      responseType : 'blob',
      headers : new HttpHeaders('Access-Control-Allow-Origin').append('content-type','application/json')
    });
  }
}
