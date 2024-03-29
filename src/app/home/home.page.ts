import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!!localStorage.getItem('token')){
      return true
    }
    else{
      
      this.router.navigate(["../pages/login"])
      return false
    }

  }

  redirection(){
    window.location.reload();
  } 

  testfunct(){
    console.log("test")
  }

}