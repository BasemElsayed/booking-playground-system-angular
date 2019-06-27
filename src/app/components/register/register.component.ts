import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  data = {
    name : "",
    phone : "",
    email : "",
    password : "",
    c_password : "",
    address : "",
    city : "",
    personalImageUrl: null,
  };

  errorName:string[];
  errorPhone:string[];
  errorEmail:string[];
  errorPassword:string[];
  errorCPassword:string[];
  errorAddress:string[];
  errorCity:string[];
  

  constructor(private httpClient:HttpClient, private router:Router) { }

  ngOnInit() {
  }


  uploadImage(event)
  {
    let file = event.target.files[0];
    this.data.personalImageUrl = file;
    console.log("File Name : " + this.data.personalImageUrl);
  }

  register(){
    console.log(this.data.personalImageUrl);

    if(this.data.personalImageUrl == null)
    {
      this.data.personalImageUrl = "https://thumbs.dreamstime.com/b/user-icon-orange-round-sign-vector-illustration-isolated-white-background-user-icon-orange-round-sign-112808533.jpg";
    }
    
    const uploadData = new FormData();
    uploadData.append('personalImageUrl', this.data.personalImageUrl, this.data.personalImageUrl.name);
    uploadData.append('name', this.data.name);
    uploadData.append('phone', this.data.phone);
    uploadData.append('email', this.data.email);
    uploadData.append('password', this.data.password);
    uploadData.append('c_password', this.data.c_password);
    uploadData.append('address', this.data.address);
    uploadData.append('city', this.data.city);
    
    this.httpClient.post("https://still-lowlands-49060.herokuapp.com/api/register", uploadData)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.errorName = [];
            this.errorPhone = [];
            this.errorEmail = [];
            this.errorPassword = [];
            this.errorCPassword = [];
            this.errorAddress = [];
            this.errorCity = [];
            this.router.navigate(['home']);
        },
        error => {
          this.errorName = error['error']['name'];
          this.errorEmail = error['error']['email'];
          this.errorPhone = error['error']['phone'];
          this.errorPassword = error['error']['password'];
          this.errorCPassword = error['error']['c_password'];
          this.errorAddress = error['error']['address'];
          this.errorCity = error['error']['city'];
        }
    ); 
    

      


  }

}
