import {Component, OnInit, OnDestroy} from '@angular/core';
import {Feedback} from '../feedback.model';
import {FeedbacksService} from '../feedbacks.service';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-feedback-list',
    templateUrl:'./feedback-list.component.html',
    styleUrls:['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit,OnDestroy{

    feedbacks: Feedback[]=[];
private feedbacksSub: Subscription;

feedbacksServicce: FeedbacksService;

constructor(public feedbacksService:FeedbacksService){}

ngOnInit(){
    this.feedbacksService.getFeedbacks();
    this.feedbacksSub=this.feedbacksService.getFeedbackUpdateListener().subscribe(
         (feedbacks:Feedback[])=>{
             this.feedbacks=feedbacks;
         }

    );//subscriptionJKB
}

ngOnDestroy(){
    this.feedbacksSub.unsubscribe();
}

}