import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token:string = '';
  checkToken:boolean = true;


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






}
