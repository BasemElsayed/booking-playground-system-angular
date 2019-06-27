import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-playground-admin',
  templateUrl: './add-playground-admin.component.html',
  styleUrls: ['./add-playground-admin.component.css']
})
export class AddPlaygroundAdminComponent implements OnInit {


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

  errorName:string[];
  errorPrice:string[];
  errorArea:string[];
  errorAddress:string[];
  errorAvailableFrom:string[];
  errorAvailableTo:string[];
  errorImageURL:string[];
  errorDescription:string[];

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }
  

  uploadImage(event)
  {
    this.data.imageURL = <File>event.target.files[0];
  }



  addPlayground(){
    console.log(this.data);


    if(this.data.imageURL == null)
    {
      this.data.imageURL = "https://www.berjayahotel.com/sites/default/files/styles/gallery_slide/public/timessquare_55.jpg";
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


    this.httpClient.post("https://still-lowlands-49060.herokuapp.com/api/addPlayground", uploadData)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.errorName = [];
            this.errorPrice = [];
            this.errorArea = [];
            this.errorAddress = [];
            this.errorAvailableFrom = [];
            this.errorAvailableTo = [];
            this.errorImageURL = [];
            this.errorDescription = [];
            console.log("Image : " + this.data.imageURL);
        },
        error => {
          this.errorName = error['error']['name'];
          this.errorPrice = error['error']['price'];
          this.errorArea = error['error']['area'];
          this.errorAddress = error['error']['address'];
          this.errorAvailableFrom = error['error']['avaiableFrom'];
          this.errorAvailableTo = error['error']['avaiableTo'];
          this.errorImageURL = error['error']['imageURL'];
          this.errorDescription = error['error']['description'];
        }
    );  


  }



}
