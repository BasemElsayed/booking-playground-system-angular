import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  token:string = '';

  data = {
    id : 0,
    name : "",
    email : "",
    password : "",
    c_password: "",
    personalImageUrl : null,
    city : "",
    phone : "",
    address : "",
    created_at : ""
  };

  
  errorName:string[];
  errorPhone:string[];
  errorEmail:string[];
  errorPassword:string[];
  errorCPassword:string[];
  

  constructor(private httpClient:HttpClient) {

  }

  ngOnInit() {
    this.getUserDetails();
  }


  uploadImage(event)
  {
    this.data.personalImageUrl = <File> (event.target.files).item(0);
  }


  getUserDetails()
  {
    this.token = localStorage.getItem('token');

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
            this.data.id = data['id'];
            this.data.name = data['name'];
            this.data.email = data['email'];
            this.data.city = data['city'];
            this.data.phone = data['phone'];
            this.data.address = data['address'];
            this.data.created_at = data['created_at'];
            this.data.personalImageUrl = data['personalImageUrl'];
            this.data.password = data['password'];
            this.data.c_password = data['c_password'];
            console.log("ID : " + this.data.id);
            console.log("Password : " + this.data.password);
            
        },
        error => {
            console.log("Error", error);
        }
    );
  }



  editProfile()
  {
    console.log("Data : " + this.data);
    if(this.data.password != "")
    {
      if(this.data.c_password == null)
        this.data.c_password = " ";
    }

    if(this.data.personalImageUrl == null)
    {
      this.data.personalImageUrl = 'https://thumbs.dreamstime.com/b/user-icon-orange-round-sign-vector-illustration-isolated-white-background-user-icon-orange-round-sign-112808533.jpg';
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

    this.httpClient.post("https://still-lowlands-49060.herokuapp.com/api/editUser/" + this.data.id, uploadData)
    .subscribe(
        data => {
            console.log("POST Request is succesddddddddsful ", data);
            this.data.id = data['id'];
            this.data.name = data['name'];
            this.data.email = data['email'];
            this.data.city = data['city'];
            this.data.phone = data['phone'];
            this.data.address = data['address'];
            this.data.created_at = data['created_at'];
            if(data['personalImageUrl'] == null)
            {
              this.data.personalImageUrl = 'https://thumbs.dreamstime.com/b/user-icon-orange-round-sign-vector-illustration-isolated-white-background-user-icon-orange-round-sign-112808533.jpg';  
            }
            else
            {
              this.data.personalImageUrl = data['personalImageUrl'];
            }
            
            this.errorName = [];
            this.errorPhone = [];
            this.errorEmail = [];
            this.errorPassword = [];
            this.errorCPassword = [];
        },
        error => {
            console.log("Error", error);
            this.errorName = error['error']['name'];
            this.errorEmail = error['error']['email'];
            this.errorPhone = error['error']['phone'];
            this.errorPassword = error['error']['password'];
            this.errorCPassword = error['error']['c_password'];
            console.log("Error Email : " + this.errorEmail);    
        }
    );
  }

}
