import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VendorService } from '../ngservice/vendor.service';

@Component({
  selector: 'app-edit-adv',
  templateUrl: './edit-adv.component.html',
  styleUrls: ['./edit-adv.component.css']
})
export class EditAdvComponent implements OnInit {
id:number;
adv:any;
isSuccess:boolean;
msg:string;
//advertise:Advertise;
//address:Address;

  constructor(private route:ActivatedRoute, private vendorService:VendorService, private router:Router) {
    this.adv = {};
    this.isSuccess = false;
    this.msg = '';
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      });
   this.vendorService.getAdByAdvId(this.id).subscribe(data => {
      console.log(data);
      this.adv = data;
   },
   err => {
     console.log(err);
   });
  }

  onSubmit(form:NgForm){
    this.vendorService.updateAd(this.adv.adv_id,this.adv).subscribe(
      data => {
        //console.log(data);
        this.isSuccess = true;
        this.msg = "Updated your ad successfully";
      setTimeout( () => {this.router.navigate(['./home/dreamcatchers']);},3000);
      },
      err => {
        console.log(err);
        this.msg = "Some error occurred- Please try again";
      }
    );
  }

  onReset(form:NgForm){
    form.reset();
}

onCancel(){
this.router.navigate(['./home/dreamcatchers']);
}

onM1(){
  this.adv.category = "Venue";
  }
  
  onM2(){
    this.adv.category = "Photography";
  }
  
  onM3(){
    this.adv.category = "Catering";
  }
  
  onM4(){
    this.adv.category = "Clothing";
  }
  
  onM5(){
    this.adv.category = "MakeupGrooming";
  }
  
  
  onM6(){
    this.adv.category = "Gifting";
  }

}
