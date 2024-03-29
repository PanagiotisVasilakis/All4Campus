import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(!!localStorage.getItem('token')){
      return true
    }
    else{
      
      this.router.navigate(["../login"])
      return false
    }
  }

}
