import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from '../models/Address';
import { Advertise } from '../models/Advertise';
import { TokenStorageService } from '../ngservice/token-storage.service';
import { VendorService } from '../ngservice/vendor.service';

@Component({
  selector: 'app-post-adv',
  templateUrl: './post-adv.component.html',
  styleUrls: ['./post-adv.component.css']
})
export class PostAdvComponent implements OnInit {

  isSuccess:boolean;
  uid:number;
  advertise:Advertise;
  address:Address;
  msg:string;

  constructor(private router:Router, private tokenStorageService:TokenStorageService, private vendorService: VendorService) { 
    this.advertise = new Advertise("","",null,"");
    this.address = new Address("","","");
    this.msg = "";
    this.isSuccess = false;
    this.uid = this.tokenStorageService.getUser().id;
  }

  ngOnInit(): void {
   
  }

  onSubmit(form:NgForm){
   //const f = new Advertise(form.value.cname,form.value.contact,form.value.address,this.tokenStorageService.getUser());
   this.address.area = form.value.area;
   this.address.city = form.value.city;
   this.address.pinNo = form.value.pinNo;

   this.advertise.company = form.value.cname;
   this.advertise.contact = form.value.contact;
   this.advertise.address = this.address;

   this.vendorService.postAd(this.uid,this.advertise).subscribe(data => {
     console.log(data);
      this.isSuccess = true;
      this.vendorService.setAdvId(data.adv_id);
      console.log(data.adv_id);
      this.msg = "You are ready to provide services to your customers- GOOD LUCK!";
      setTimeout(function(){
        //this.router.navigate(['./home/dreamcatchers']);
        window.location.href = "http://localhost:4200/home/advertise/photo/"+data.adv_id;
      },2000); 
   },
   err => {
    this.msg = "Sorry could not post your ad- Please try again";
   });
  }

  onReset(form:NgForm){
        form.reset();
  }

onCancel(){
  this.router.navigate(['./home/dreamcatchers']);
}

onM1(){
this.advertise.category = "Venue";
}

onM2(){
  this.advertise.category = "Photography";
}

onM3(){
  this.advertise.category = "Catering";
}

onM4(){
  this.advertise.category = "Clothing";
}

onM5(){
  this.advertise.category = "MakeupGrooming";
}


onM6(){
  this.advertise.category = "Gifting";
}

}
