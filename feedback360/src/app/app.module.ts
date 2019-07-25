import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule,
  MatCardModule, 
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatChipsModule,
  MatIconModule,
  MatAutocompleteModule

} from '@angular//material';

import {FeedbackListComponent} from './feedbacks/feedback-list/feedback-list.component';
import {FeedbackNewComponent} from './feedbacks/feedback-new/feedback-new.component';
import { FeedbackCreateComponent} from './feedbacks/feedback-create/feedback-create.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FeedbackCreateComponent,
    FeedbackNewComponent,
    FeedbackListComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatChipsModule,
    HttpClientModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
