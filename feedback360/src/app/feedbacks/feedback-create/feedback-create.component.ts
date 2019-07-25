import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import { FeedbacksService} from '../feedbacks.service';

@Component({
    selector:'app-feedback-create',
    templateUrl:'./feedback-create.component.html',
    styleUrls:['./feedback-create.component.css']
})

export class FeedbackCreateComponent {
    id='';
    requestedBy='';
    feedbackOf='';
    feedbackFrom='';
    question1='';
    question2='';
    question3='';
    constructor(public feedbacksservice:FeedbacksService){}

    onAddFeedback(form:NgForm)
    {
        if(form.invalid)
        {
            return;
        }
        //this.feedbacksservice.addFeedbacks(form.value.question1,form.value.question2,form.value.question3,"sas","as","qw","12");
        this.feedbacksservice.addFeedbacks("sas","as","qw","12",form.value.question1,form.value.question2,form.value.question3);

        //console.log(form.value.question1);
    }
    
}