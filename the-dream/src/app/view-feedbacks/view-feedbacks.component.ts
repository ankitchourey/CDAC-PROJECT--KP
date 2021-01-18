import { Component, OnInit } from '@angular/core';
import { FeedbackComponent } from '../feedback/feedback.component';
import { FeedbackService } from '../ngservice/feedback.service';

@Component({
  selector: 'app-view-feedbacks',
  templateUrl: './view-feedbacks.component.html',
  styleUrls: ['./view-feedbacks.component.css']
})
export class ViewFeedbacksComponent implements OnInit {
  feedbacks:any[];
  show:boolean;
  flag:boolean;

  constructor(private feedbackservice: FeedbackService) {
    this.feedbacks = [];
    this.show = false;
    this.flag = false;
   }

  ngOnInit(): void {
    this.feedbackservice.getFeedbacks().subscribe(
      data => {
          console.log(data);
          if(data.length > 0){
          this.feedbacks = data;
          this.flag =true;
          }
          else
          this.show = true;
      },
      err => {
        console.log(err);
      });
  }

}
