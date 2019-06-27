import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";

  errorEmail:string[];
  errorPassword:string[];

  constructor(private httpClient:HttpClient, private router:Router) {
  }
  
  ngOnInit() {
  }

  login(){

    this.httpClient.post("https://still-lowlands-49060.herokuapp.com/api/login",
    {
      "email" : this.email,
      "password" : this.password
    })
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            console.log("User Token : " + localStorage.getItem('token'));
            this.errorEmail = [];
            this.errorPassword = [];
            if(data['admin'] == false)
            {
              localStorage.setItem("token", data['token']);
              this.router.navigate(['home']);
              window.location.reload();
            }
            else if(data['admin'] == true)
            {
              localStorage.setItem("tokenAdmin", data['token']);
              this.router.navigate(['homeAdmin']);
            }
        },
        error => {
            console.log("Error", error);
            this.errorEmail = error['error']['email'];
            this.errorPassword = error['error']['password'];
        }
    );  
  }




}
