import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public http:HttpClient) { }

  ngOnInit() {
  }

  Email: string;
  Password: string;


  sendData(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let body = {
      email: this.Email,
      password: this.Password
    };

    // this.http.post("http://127.0.0.1:8080/api/login",body).subscribe(data =>{
    this.http.post("http://44.201.231.57/api/login",body).subscribe(data =>{
      console.log(data);
    });
    
  }
  
}

