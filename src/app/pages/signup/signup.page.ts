import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public http:HttpClient,private router: Router) { }

  ngOnInit() {
    if(!!localStorage.getItem('token')){
      
      this.router.navigate(["../../home"])
      return false
    }
    else{
      return true
    }
  }

  Email: string;
  Password: string;
  Firstname: string;
  Lastname: string;


  sendRegistration(){

    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let body = {
      email: this.Email,
      password: this.Password,
      fistname: this.Firstname,
      lastname: this.Lastname
    };

    // this.http.post("http://127.0.0.1:80/api/signup",body).subscribe(data =>{
    this.http.post("http://44.201.231.57/api/signup",body).subscribe(data =>{
      console.log(data);
      let status = data[Object.keys(data)[0]];
     

      console.log(data)
      if(status=="success")
      {

        this.router.navigate(["../login"]);
      }
      else{
        //
        let reason = data[Object.keys(data)[1]];
        if(reason=="email")
        {
          alert("Email already exists")
        }
        else{
          alert("An error has occured please try again later.")
        }
        
      }
    });
  }

}
