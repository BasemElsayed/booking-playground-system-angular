import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-reserveplayground',
  templateUrl: './reserveplayground.component.html',
  styleUrls: ['./reserveplayground.component.css']
})
export class ReserveplaygroundComponent implements OnInit {

  token:string = '';
  checkToken:boolean = false;
  id:string = '';

  playground = {
    address: "",
    area: "",
    avaiableFrom: "",
    avaiableTo: "",
    description: "",
    imageURL: "",
    name: "",
    price: "",
    updated_at:""
  };

  constructor(private httpClient:HttpClient, private router:Router) {
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem("reservePlaygroundId");

    if(this.id != '')
    {
      this.httpClient.get("https://still-lowlands-49060.herokuapp.com/api/viewPlayground/" + this.id)
      .subscribe(
          data => {
              console.log("POST Request is successful ", data);
              this.playground.name = data['name'];
              this.playground.address = data['address'];
              this.playground.area = data['area'];
            
              this.playground.avaiableFrom = data['avaiableFrom'];
              this.playground.avaiableTo = data['avaiableTo'];
              
              this.playground.description = data['description'];
              this.playground.imageURL = data['imageURL'];
              if(this.playground.imageURL == null)
              {
                this.playground.imageURL = 'https://www.berjayahotel.com/sites/default/files/styles/gallery_slide/public/timessquare_55.jpg';
              }
              this.playground.price = data['price'];
              this.playground.updated_at = data['updated_at'];
              console.log(this.playground);
              localStorage.setItem("playgroundPrice", data['price']);
          },
          error => {
              console.log("Error", error);
          }
      );
    }
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
