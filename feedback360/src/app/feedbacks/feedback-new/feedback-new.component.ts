import {Component, OnInit} from '@angular/core';
import {NgForm,FormControl,ReactiveFormsModule} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


export interface People {
  name: string;
}

var s;//Thie variable is used to get the data from the auto complete array to the material chips we have used.

@Component({
    selector:'app-feedback-new',
    templateUrl:'./feedback-new.component.html',
    styleUrls:['./feedback-new.component.css']
})

export class FeedbackNewComponent{

    visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  constructor(private http:HttpClient){}


 // var something: string;

  
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  peoples: People[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.peoples.push({name:s.trim()})

      //this.peoples.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    console.log(this.peoples);
  }



  remove(people: People): void {
    const index = this.peoples.indexOf(people);

    if (index >= 0) {
      this.peoples.splice(index, 1);
    }
  }



  myControl = new FormControl();
  options: string[] = ['Pavan','Sharath','bharath','siddharth','pavani','mayuri','teja','rahul'];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    //console.log(filterValue);
    s=filterValue;
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }



  onFeedbackRequest()
  {
    const tempmsg={name:"this is sid frmm the front end angular"};
    console.log("on sumit of feedback request");
    this.http.post<{message:string}>("http://localhost:3000/api/feedbacknew",this.peoples).subscribe(responseData=>{
      console.log(responseData.message);

  });

}

clickSendMail()
{
  this.http.post<{message:string}>("http://localhost:3000/api/sendmail","").subscribe(responseData=>{
    console.log("email has been sent");
  });
}


 
    
}

//console.log(prople);



