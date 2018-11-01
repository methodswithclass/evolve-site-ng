import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RecognizeService } from './services/recognize.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
  	RecognizeService
  ],
  declarations: []
})
export class RecognizeModule { }
