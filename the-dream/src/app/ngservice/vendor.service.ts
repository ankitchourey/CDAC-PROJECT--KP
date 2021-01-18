import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Advertise } from '../models/Advertise';
import { Enquiry } from '../models/Enquiry';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  id:number;
  // private paramSource: BehaviorSubject<Object> = new BehaviorSubject<Object>(null);
  // sharedParam = this.paramSource.asObservable();

  constructor(private httpClient:HttpClient) { 
    this.id = 0;
  }


/* changeParam(param:any){
  this.paramSource.next(param);
}

retrieveParam()
{
  return this.paramSource;
} */

  postAd(id:number,adv:Advertise):Observable<any>{
     return this.httpClient.post("http://localhost:8080/advertise/"+id,adv);
  }


  setAdvId(id:number){
     this.id = id;
  }

  getAdvId():number{
    return this.id;
  }


  uploadImages(image1,image2,image3,image4,image5,id)
  {
    const formData = new FormData();

    formData.append('image1', image1);
    formData.append('image2', image2);
    formData.append('image3', image3);
    formData.append('image4', image4);
    formData.append('image5', image5);
    console.log(formData)
    return this.httpClient.post("http://localhost:8080/upload/"+id,formData)
  }

  getAdByAdvId(adv_id:number):Observable<any>{
   return this.httpClient.get("http://localhost:8080/advertise/"+adv_id);
  }

  getAdsByCateg(category:number):Observable<any>{ 
    return this.httpClient.get("http://localhost:8080/advertise/category/"+category);
  }

  getAdByUser(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/advertise/user/"+id);
  }

  updateAd(adv_id:number,advertise:Advertise):Observable<any>{
     return this.httpClient.put("http://localhost:8080/advertise/"+adv_id,advertise);
  }

  deleteAd(adv_id:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8080/advertise/"+adv_id);
  }


  getInTouch(uid:number,id:number,enquiry:Enquiry):Observable<any>{
    return this.httpClient.post("http://localhost:8080/enquiry/"+uid+"/"+id,enquiry,httpOptions);
  }

  getEnquiry(adv_id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/enquiry/"+adv_id);
  }

  deleteEnquiry(uid,adv_id,eid):Observable<any>{
    return this.httpClient.delete("http://localhost:8080/enquiry/delete/"+uid+"/"+adv_id+"/"+eid);
  }
  

}
