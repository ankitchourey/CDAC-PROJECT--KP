import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import { TokenStorageService } from '../ngservice/token-storage.service';
import { VendorService } from '../ngservice/vendor.service';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-photo-adv',
  templateUrl: './photo-adv.component.html',
  styleUrls: ['./photo-adv.component.css']
})
export class PhotoAdvComponent implements OnInit {

  addId:any
  images;
  image='';
  img:any
  formdata;
  image1;
  image2;
  image3;
  image4;
  image5;
  id;


  constructor(private http:HttpClient,
    public _DomSanitizer: DomSanitizer,
    private route: ActivatedRoute,private router: Router,
    private tokenStorageServcie: TokenStorageService,private vendorService:VendorService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
    });
  }

  onSelectFile1(event)
  {
    if(event.target.files.length>0)
    {
      console.log("event is called")
      const file= event.target.files[0];
      this.image1=event.target.files[0];
    }
  }

  onSelectFile2(event)
  {
    if(event.target.files.length>0)
    {
      console.log("event is called")
      const file= event.target.files[0];
      this.image2=event.target.files[0];
    }
  }

  onSelectFile3(event)
  {
    if(event.target.files.length>0)
    {
      console.log("event is called")
      const file= event.target.files[0];
      this.image3=event.target.files[0];
    }
  }

  onSelectFile4(event)
  {
    if(event.target.files.length>0)
    {
      console.log("event is called")
      const file= event.target.files[0];
      console.log(file)
      this.image4=event.target.files[0];
    }
  }

  onSelectFile5(event)
  {
    if(event.target.files.length>0)
    {
      console.log("event is called")
      const file= event.target.files[0];
      console.log(file)
      this.image5=event.target.files[0];
    }
  }

  onAdvertiseAdd(formreg)
  {
    console.log(this.formdata)
    this.vendorService.uploadImages(this.image1,this.image2,this.image3,this.image4,this.image5,this.id).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['./home/dreamcatchers']);
   },(error)=>{
     console.log(error);
   })
  //  this.image=this.images.image;
  }

}
