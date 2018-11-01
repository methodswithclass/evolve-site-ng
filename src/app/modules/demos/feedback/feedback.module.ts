import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackService } from './services/feedback.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
  	FeedbackService
  ],
  declarations: []
})
export class FeedbackModule { }
