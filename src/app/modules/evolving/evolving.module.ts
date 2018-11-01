import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EvolvingService } from './services/evolving.service';
import { EvolvingComponent } from './components/evolving/evolving.component';
import { EvolveButtonComponent } from './components/evolve-button/evolve-button.component';
import { EvolveFeedbackComponent } from './components/evolve-feedback/evolve-feedback.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
  	EvolvingService
  ],
  declarations: [EvolvingComponent, EvolveButtonComponent, EvolveFeedbackComponent],
  exports:[EvolvingComponent, EvolveButtonComponent, EvolveFeedbackComponent]
})
export class EvolvingModule { }
