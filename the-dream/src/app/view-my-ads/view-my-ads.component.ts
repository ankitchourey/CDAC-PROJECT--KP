import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../ngservice/token-storage.service';
import { VendorService } from '../ngservice/vendor.service';

@Component({
  selector: 'app-view-my-ads',
  templateUrl: './view-my-ads.component.html',
  styleUrls: ['./view-my-ads.component.css']
})
export class ViewMyAdsComponent implements OnInit {
myAds:any;
id:number;
flag:boolean;
show:boolean;
isSuccess:boolean;
msg:string;

  constructor(private tokenStorage:TokenStorageService, private vendorService: VendorService, private router:Router) { 
    this.flag = false;
    this.show = false;
    this.isSuccess = false;
    this.msg = '';
  }

  ngOnInit(): void {
   this.id = this.tokenStorage.getUser().id;
  this.vendorService.getAdByUser(this.id).subscribe(data => {
    if(data.length > 0){
      this.flag = true;
      this.myAds = data;
      console.log(this.myAds);
    }
     else
       this.show = true;
  },
  err=>{
    console.log(err);
  });
  }

  onEdit(adv_id:number){
    //for(let i = 0; i < this.myAds.length; i++){
     // if(i == adv_id)
         this.router.navigate(['./home/editAd',adv_id]);
    //}
  }

  onDelete(adv_id:number){
        this.vendorService.deleteAd(adv_id).subscribe(
          data => {
            //console.log(data);
            this.isSuccess = true;
            this.msg = "Deleted your ad successfully! Would miss you :(";
          setTimeout( () => {this.router.navigate(['./home/dreamcatchers']);},2000);
          },
          err => {
            console.log(err);
            this.msg = "Some error occurred- Please try again";
          });
  }


  getEnquiries(adv_id:number){
     this.router.navigate(['./home/enquiries',adv_id]);
  }

}
