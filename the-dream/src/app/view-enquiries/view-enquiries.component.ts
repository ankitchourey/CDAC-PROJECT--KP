import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TokenStorageService } from '../ngservice/token-storage.service';
import { VendorService } from '../ngservice/vendor.service';

@Component({
  selector: 'app-view-enquiries',
  templateUrl: './view-enquiries.component.html',
  styleUrls: ['./view-enquiries.component.css']
})
export class ViewEnquiriesComponent implements OnInit {
  enquiries:any;
  show:boolean;
  flag:boolean;
  adv_id:number;
  uid:number;
  isSuccess:boolean;
  isFailure:boolean;

  constructor(private route: ActivatedRoute, private vendorService: VendorService, 
    private tokenStorage:TokenStorageService, private router: Router) { 
    this.show = false;
    this.flag = false;
    this.isSuccess = false;
    this.isFailure = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.adv_id = +params['id'];
      });
      this.uid = this.tokenStorage.getUser().id;
      this.vendorService.getEnquiry(this.adv_id).subscribe( enqs => {
           console.log(enqs);
           if(enqs.length > 0)
         { 
           this.flag = true;
           this.enquiries = enqs;

         }
          else
           this.show = true;
      },err => {
        console.log(err);
      });
  }

  onDelete(enq:number){

    this.vendorService.deleteEnquiry(this.uid,this.adv_id,enq).subscribe( data => {
         //console.log(data);
         this.isSuccess = true;
         setTimeout( () => {this.router.navigate(['./home/dreamcatchers'])},2000);
    },
    err => {
      console.log(err);
       this.isFailure = true;
    });
  }

}
