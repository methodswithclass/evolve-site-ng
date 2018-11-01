import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbtnComponent } from "./components/navbtn/navbtn.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DemoComponent } from './components/demo/demo.component';
import { LoadingComponent } from "../../loading/components/loading/loading.component";
import { DemoService } from './services/demo.service';


import { EvolvingModule } from "../../evolving/evolving.module";
import { TrashModule } from "../trash/trash.module";
import { FeedbackModule } from "../feedback/feedback.module";
import { RecognizeModule } from "../recognize/recognize.module";


@NgModule({
  imports: [
    CommonModule,
    EvolvingModule,
    TrashModule,
    FeedbackModule,
    RecognizeModule
  ],
  providers:[
  	DemoService
  ],
  declarations: [DemoComponent, LoadingComponent, NavbtnComponent, NavbarComponent]
})
export class DemoModule { }
