import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from '../models/Feedback';
import { FeedbackService } from '../ngservice/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
msg:string;
isSuccess:boolean;
f:Feedback;

  constructor(private feedbackService:FeedbackService, private router: Router) {
   this.msg="";
   this.isSuccess = false;
   this.f = new Feedback("","","","",0);
   }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.f.name = form.value.uname;
    this.f.email = form.value.email;
    this.f.description = form.value.feedback;
    this.f.contactNo = form.value.contact;
    this.f.rating = form.controls['rating'].value;
    //const f = new Feedback(form.value.uname,form.value.email,form.value.feedback,form.value.contact,rating);
    this.feedbackService.sendFeedbackForm(this.f).subscribe(data =>{
      if(data.feedbackId)
      this.isSuccess = true;
        this.msg = "Thank you for your valuable feedback! :)";
        form.reset();
    },
    err =>{
      this.isSuccess = true;
      this.msg = "Please try again";
    });
  }

  onReset(form:NgForm){
        form.reset();
  }

onCancel(){
  this.router.navigate(['./home/dreamcatchers']);
}



}
