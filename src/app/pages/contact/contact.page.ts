import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
// import { HomePage } from 'src/app/home/home.page';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {

  reports : Array<object> = []

  constructor(public http: HttpClient, private router: Router) { 
  }

  ngOnInit() {
    var body = { token: localStorage.getItem("token"), place: this.place, issue: this.Report };

    // this.http.post("http://127.0.0.1:8080/api/getReports", body).subscribe(data => {
      this.http.post("http://44.201.231.57/api/getReports", body).subscribe(data => {     


      var size = Object.keys(data).length;
      for (let i = 0; i < size; i++) {
        this.reports.push({'place' : data[i].place, 'issue' : data[i].issue})

      }
      // console.log(this.reports)
    });
  }

  navigateToNewReport() {
    this.router.navigate(['contactnew']);
  }


  place: string;
  Report: string;




}



