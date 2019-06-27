import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {


 
  playgrounds:any = [];


  constructor(private httpClient:HttpClient, private router:Router) {
    this.viewPlaygrounds();
  }

  ngOnInit() {
  }


  viewPlaygrounds(){

    this.httpClient.get("https://still-lowlands-49060.herokuapp.com/api/viewPlaygrounds")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.playgrounds = data;
            for(let i = 0; i<this.playgrounds.length ;i++)
            {
              if(this.playgrounds[i].imageURL == null)
              {
                this.playgrounds[i].imageURL = 'https://www.berjayahotel.com/sites/default/files/styles/gallery_slide/public/timessquare_55.jpg';
              }
            }
            console.log("Data", this.playgrounds[0]['name']);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }

  redirectToSpecificPlayground($id)
  {
    console.log("ID : " + $id);
    localStorage.setItem("reservePlaygroundId", $id);
    this.router.navigate(['reservePlayground']);
  }


}
