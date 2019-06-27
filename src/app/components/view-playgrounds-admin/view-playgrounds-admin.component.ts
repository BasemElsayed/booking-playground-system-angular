import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-view-playgrounds-admin',
  templateUrl: './view-playgrounds-admin.component.html',
  styleUrls: ['./view-playgrounds-admin.component.css']
})
export class ViewPlaygroundsAdminComponent implements OnInit {


  playgrounds:any = [];
  error:any = '';
  constructor(private httpClient:HttpClient, private router:Router) { }

  ngOnInit() {
    this.viewPlaygrounds();
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

  deletePlayground($id)
  {
    this.httpClient.get("https://still-lowlands-49060.herokuapp.com/api/deletePlayground/" + $id)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.error = data;
            console.log("Errors : " + data);
        },
        error => {
            console.log("Error", error);
            this.error = error['error'];
            console.log("Errorss : " + this.error);
        }
    ); 
  }


  reloadPage()
  {
    window.location.reload();
  }

  redirectToSpecificPlayground($id)
  {
    localStorage.setItem("playgroundID", $id);
    this.router.navigate(['editPlayground']);
  }

}
