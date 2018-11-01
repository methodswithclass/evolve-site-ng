import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrashService } from './services/trash.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
  	TrashService
  ],
  declarations: []
})
export class TrashModule { }
