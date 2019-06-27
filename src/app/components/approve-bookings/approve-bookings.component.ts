import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-approve-bookings',
  templateUrl: './approve-bookings.component.html',
  styleUrls: ['./approve-bookings.component.css']
})
export class ApproveBookingsComponent implements OnInit {



  dataArray:any;
  error:string = '';


  constructor(private httpClient:HttpClient, private router:Router) { }

  ngOnInit() {
    this.viewBookings();
  }

  viewBookings()
  {
    this.httpClient.get("https://still-lowlands-49060.herokuapp.com/api/unapprovedBookings")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.dataArray = data;
            console.log("Error Name is : " + this.error);
        },
        error => {
            console.log("Error", error);
        }
    ); 
  }


  Approve($id)
  {
    this.httpClient.get("https://still-lowlands-49060.herokuapp.com/api/approveBooking/" + $id)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.error = "The Bookings Approved Successfully.";
            console.log("Error Name is : " + this.error);
        },
        error => {
            console.log("Error", error);
            this.error = "Something Wrong!";
            console.log("Error Name is : " + this.error);
        }
    );
  }


  reloadPage()
  {
    window.location.reload();
  }




}
