import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {


  token:string = '';

  dataArray:any;
  error:string = '';


  constructor(private httpClient:HttpClient, private router:Router) {
    
  }
  ngOnInit() {
    this.viewMyBookings();
  }




  viewMyBookings() {
    this.token = localStorage.getItem('token');

    let httpHeaders = new HttpHeaders({
      'Authorization' : "Bearer " + this.token
    }); 
      
    let options = {
      headers: httpHeaders
    }; 

   this.httpClient.post("https://still-lowlands-49060.herokuapp.com/api/viewBooking",
    {

    }, options)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.dataArray = data;
            for(let i = 0; i<this.dataArray.length ;i++)
            {
              if(this.dataArray[i].imageURL == null)
              {
                this.dataArray[i].imageURL = 'https://www.berjayahotel.com/sites/default/files/styles/gallery_slide/public/timessquare_55.jpg';
              }
            }
        },
        error => {
            console.log("Error", error);
            
        }
    );
  }

  cancelReservation($id)
  {
    this.httpClient.get("https://still-lowlands-49060.herokuapp.com/api/deleteBooking/" + $id)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.error = data['error'];
            console.log("Error Name is : " + this.error);
        },
        error => {
            console.log("Error", error);
            this.error = error['error'];
            console.log("Error Name is : " + this.error);
        }
    ); 
  }


  reloadPage()
  {
    //this.viewMyBookings();
    window.location.reload();
    //this.router.navigate(['home']);
  }




}
