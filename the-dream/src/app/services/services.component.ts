import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Advertise } from '../models/Advertise';
import { TokenStorageService } from '../ngservice/token-storage.service';
import { VendorService } from '../ngservice/vendor.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  
  title = 'Services';
  advertise:any;
  isLoggedIn: boolean;
  vendorChngSubs: Subscription;
  category:number;
  enablePhoto:boolean;
  role:string;
  bval:string;
  isSuccess:boolean;
  msg:string;

  constructor(private router: Router,private route: ActivatedRoute,private tokenStorage: TokenStorageService,private vendorService: VendorService) {
    this.isLoggedIn = false;
    this.enablePhoto = false;
    this.advertise = [];
    this.role = '';
    this.bval= "Get In Touch";
    this.isSuccess = false;
    this.msg = '';
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.category = +params['id'];
      });
      console.log(this.category);
      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        this.role = this.tokenStorage.getUser().roles[0];
        console.log(this.role);
        if(this.role == "ROLE_ADMIN"){
           this.bval = "Delete";
        }
      }
    this.vendorService.getAdsByCateg(this.category).subscribe(ads => {
     this.advertise = ads;
     console.log(ads);
     for(var i = 0; i < this.advertise.length; i++){
      if(this.advertise[i].photoList.length != 0)
        this.enablePhoto = true;
     } 
    },
    err =>{
      console.log(err.error);
    });
   /*  this.vendorChngSubs = this.vendorService.vendorsChanged.subscribe(    //subscribing to next( ) in vendor service
    (vs: Vendor[]) => {
       this.vendors = vs;
    }); */

  }

  contactOrDelAdv(id:number){
    if(this.role == "ROLE_ADMIN")
      {
            this.vendorService.deleteAd(id).subscribe(
              data => {
                //console.log(data);
                this.isSuccess = true;
                this.msg = "Deleted the ad successfully";
              setTimeout( () => {this.router.navigate(['./home/dreamcatchers']);},2000);
              },
              err => {
                console.log(err);
                this.msg = "Some error occurred- Please try again";
              });
      }
      else{
        /* for(var i = 0; i < this.advertise.length; i++){
            if(id == i){
              this.vendorService.changeParam(this.advertise[i]);
              break;
            }
         }
         this.router.navigate(['/home/advertisement']);
      } */
    this.router.navigate(['/home/vendor/',id]); //go to viewVendor component for getting-in touch
  }
}
}
