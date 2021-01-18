import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  sendFeedbackForm(form):Observable<any>{
   return this.http.post("http://localhost:8080/feedback",form);
  }

  getFeedbacks():Observable<any>{
    return this.http.get("http://localhost:8080/feedback");
  }

}
