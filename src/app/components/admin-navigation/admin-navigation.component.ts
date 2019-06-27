import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  token:string = '';

  constructor(private httpClient:HttpClient, private router:Router) {
    this.token = localStorage.getItem('tokenAdmin');
  }

  ngOnInit() {
  }



  logout()
  {
    let httpHeaders = new HttpHeaders({
      'Authorization' : "Bearer " + this.token
    }); 
      
    let options = {
      headers: httpHeaders
    }; 

   this.httpClient.post("https://still-lowlands-49060.herokuapp.com/api/logout",
    {

    }, options)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            localStorage.removeItem('tokenAdmin');
            this.router.navigate(['home']);
        },
        error => {
            console.log("Error", error);
        }
    );
  }
}
