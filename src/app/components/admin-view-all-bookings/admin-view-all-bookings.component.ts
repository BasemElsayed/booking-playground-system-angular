import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-view-all-bookings',
  templateUrl: './admin-view-all-bookings.component.html',
  styleUrls: ['./admin-view-all-bookings.component.css']
})
export class AdminViewAllBookingsComponent implements OnInit {


  dataArray:any;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.viewMyBookings();
  }



  viewMyBookings() {

   this.httpClient.get("https://still-lowlands-49060.herokuapp.com/api/viewBookings")
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




}
