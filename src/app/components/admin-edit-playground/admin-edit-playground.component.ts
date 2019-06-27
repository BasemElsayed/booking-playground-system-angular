import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-playground',
  templateUrl: './admin-edit-playground.component.html',
  styleUrls: ['./admin-edit-playground.component.css']
})
export class AdminEditPlaygroundComponent implements OnInit {


  data = {
    name: '',
    price: '',
    area: '',
    address: '',
    avaiableFrom: '12:00:00',
    avaiableTo: '12:00:00',
    imageURL: null,
    description: ''
  };

  
  id:string = '';


  constructor(private httpClient:HttpClient, private router:Router) {
    this.id = localStorage.getItem('playgroundID');
  }

  ngOnInit() {
    this.getPlayground();
  }


  uploadImage(event)
  {
    this.data.imageURL = <File>event.target.files[0];
  }

  getPlayground()
  {
    this.httpClient.get("https://still-lowlands-49060.herokuapp.com/api/viewPlayground/" + this.id)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.data.name = data['name'];
            this.data.price = data['price'];
            this.data.area = data['area'];
            this.data.address = data['address'];
            this.data.avaiableFrom = data['avaiableFrom'];
            this.data.avaiableTo = data['avaiableTo'];
            this.data.description = data['description'];
            this.data.imageURL = data['imageURL'];
        },
        error => {
            console.log("Error", error);
        }
    );
  }

  editPlayground()
  {
    if(this.data.imageURL == null)
    {
      this.data.imageURL = 'https://www.berjayahotel.com/sites/default/files/styles/gallery_slide/public/timessquare_55.jpg';
    }

    const uploadData = new FormData();
    uploadData.append('imageURL', this.data.imageURL, this.data.imageURL.name);
    uploadData.append('name', this.data.name);
    uploadData.append('price', this.data.price);
    uploadData.append('area', this.data.area);
    uploadData.append('address', this.data.address);
    uploadData.append('avaiableFrom', this.data.avaiableFrom);
    uploadData.append('avaiableTo', this.data.avaiableTo);
    uploadData.append('description', this.data.description);

    this.httpClient.post("https://still-lowlands-49060.herokuapp.com/api/editPlayground/" + this.id, uploadData)
    .subscribe(
        data => {
            console.log("POST Request is succesddddddddsful ", data);
            this.data.name = data['name'];
            this.data.price = data['price'];
            this.data.area = data['area'];
            this.data.address = data['address'];
            this.data.avaiableFrom = data['avaiableFrom'];
            this.data.avaiableTo = data['avaiableTo'];
            this.data.description = data['description'];
            if(data['imageURL'] == null)
            {
              this.data.imageURL = 'https://www.berjayahotel.com/sites/default/files/styles/gallery_slide/public/timessquare_55.jpg';  
            }
            else
            {
              this.data.imageURL = data['imageURL'];
            }
            localStorage.removeItem('playgroundID');
            this.router.navigate(['homeAdmin']);
        },
        error => {
            console.log("Error", error);  
        }
    );
  }



}
