import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


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




}
