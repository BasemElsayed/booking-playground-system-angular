import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 
import { TouchSequence } from '../../../../node_modules/@types/selenium-webdriver';
import * as moment from 'moment';

@Component({
  selector: 'app-book-playground',
  templateUrl: './book-playground.component.html',
  styleUrls: ['./book-playground.component.css']
})
export class BookPlaygroundComponent implements OnInit {


  bookedDateFrom:string = '';
  bookedDateTo:string = '';
  bookedTimeFrom:string = '23:00:00';
  bookedTimeTo:string = '1:00:00';
  userId:string = '';
  playgroundId:string = '';
  playgroundPrice:number;

  token:string = '';
  errorBookedDateFrom:string[];
  errorBookedDateTo:string[];
  errorBookedTimeFrom:string[];
  errorBookedTimeTo:string[];
  generalError:string = '';

  constructor(private httpClient:HttpClient) {
    
  }

  ngOnInit() {
  }


  book() {
    this.playgroundId = localStorage.getItem("reservePlaygroundId");
    this.token = localStorage.getItem('token');
    this.playgroundPrice = parseInt(localStorage.getItem("playgroundPrice"));

    let myMoment1: moment.Moment = moment(this.bookedDateFrom + " " + this.bookedTimeFrom);
    let myMoment2: moment.Moment = moment(this.bookedDateTo + " " + this.bookedTimeTo);


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
            this.userId = data['id'];
        },
        error => {
            console.log("Error", error);
        }
    );

    
    this.httpClient.post("https://still-lowlands-49060.herokuapp.com/api/book",
    {
      "bookedDateFrom" : this.bookedDateFrom,
      "bookedDateTo" : this.bookedDateTo,
      "bookedTimeFrom" : this.bookedTimeFrom,
      "bookedTimeTo" : this.bookedTimeTo,
      "user_id" : this.userId,
      "playground_id" : this.playgroundId,
      "price" : myMoment2.diff(myMoment1, 'minutes') * (this.playgroundPrice / 60)
    })
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.generalError = '';
            
        },
        error => {
            console.log("Error", error);
            this.errorBookedDateFrom = error['error']['bookedDateFrom'];
            this.errorBookedDateTo = error['error']['bookedDateTo'];
            this.errorBookedTimeFrom = error['error']['bookedTimeFrom'];
            this.errorBookedTimeTo = error['error']['bookedTimeTo'];
            
            if(error['error'].length != undefined)
            this.generalError = error['error'];
        }
    );
  }



}
