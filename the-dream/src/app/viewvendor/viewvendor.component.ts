import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Advertise } from '../models/Advertise';
import { Enquiry } from '../models/Enquiry';
import { User } from '../models/User';
import { TokenStorageService } from '../ngservice/token-storage.service';
import { VendorService } from '../ngservice/vendor.service';

@Component({
  selector: 'app-viewvendor',
  templateUrl: './viewvendor.component.html',
  styleUrls: ['./viewvendor.component.css']
})
export class ViewvendorComponent implements OnInit {

  id:number; //this is adv_id
  uid:number;
  advertise:Advertise;
  isSuccess:boolean;
  msg:string;
  //enquiry:Enquiry;
  user:User;


  constructor(private route: ActivatedRoute, private vendorService: VendorService, private tokenStorage: TokenStorageService, private router:Router) {
  this.isSuccess = false;
  this.msg = '';
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];  //this is adv_id
      });
    this.uid = this.tokenStorage.getUser().id;
    console.log(this.uid);
    this.user = this.tokenStorage.getUser();

      //this.vendor = this.vendorService.vendorDetails(this.id);
  }

  onSubmit(form: NgForm){
   /*  this.enquiry.name = form.value.name;
    this.enquiry.mobileno = form.value.mobile;
    this.enquiry.email = form.value.email; */
    const enq = new Enquiry(form.value.name,form.value.mobile,form.value.email);
    this.vendorService.getInTouch(this.uid,this.id,enq).subscribe(data => {
       this.isSuccess = true;
       this.msg = "Thank you for your interest! We would contact you soon!";
       setTimeout( () => {this.router.navigate(['./home/dreamcatchers'])},2000);
    },
      err =>{
       console.log(err);
       this.msg = "Please try again";
      });
  }

  onReset(form:NgForm){
     form.reset();
  }

  onCancel(){
    this.router.navigate(['./home/dreamcatchers']);
  }
/* 
 vid: number;
    vname:string;
    price:number;
    description:string;
    company:string;
    category:string;
    adv:string;
    email:string;
    city:string;
    contact:string;
*/
}
