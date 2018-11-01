import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityService } from "./services/utility.service";
import { PhasesService } from "./services/phases.service";

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers:[
		UtilityService,
		PhasesService
	],
	exports:[
	]
})
export class SharedModule { }
