import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token:string = '';
  checkToken:boolean = false;

  constructor(private httpClient:HttpClient) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit() {
    this.getUser();
  }


  getUser()
  {
    let httpHeaders = new HttpHeaders({
      'Authorization' : "Bearer " + this.token
    }); 
      
    let options = {
      headers: httpHeaders
    }; 

   this.httpClient.post("https://still-lowlands-49060.herokuapp.com/api/details",
    {

    }, options)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.checkToken = true;
        },
        error => {
            console.log("Error", error);
            this.checkToken = false;
        }
    );
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
            localStorage.removeItem('token');
            this.checkToken = false;
            window.location.reload();
        },
        error => {
            console.log("Error", error);
        }
    );
  }

}
