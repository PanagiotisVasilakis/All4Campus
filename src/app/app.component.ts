import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  // public sendTestData(){
  //   let data = {test: "yees"};
  //   this.http.post('http://localhost:8080/api/test', data)
  //   .subscribe((resuslt)=>{
  //     console.warn(resuslt)
  //   })
  // }
}
