import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingService } from './services/loading.service';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingComponent]
})
export class LoadingModule { }
