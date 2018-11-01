import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressDirective } from './directives/progress.directive';

import { ProgressService } from './services/progress.service';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
  	ProgressService
  ],
  declarations: [ProgressDirective, ProgressComponent],
  exports:[
	ProgressDirective
  ]
})
export class ProgressModule { }
