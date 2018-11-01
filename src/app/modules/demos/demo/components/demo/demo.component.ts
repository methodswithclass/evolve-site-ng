import { Component, OnInit } from '@angular/core';

import { AppState } from "../../../../state/services/app.state";

import { LoadingService } from "../../../../loading/services/loading.service";
import { assets } from "../../../../shared/services/asset.service";

import { DemoService } from "../../services/demo.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {


	constructor(private demo:DemoService, private state:AppState, private loading:LoadingService) { }



	ngOnInit() {


		// this.$phases = assets[this.getState()].phases;

		this.loading.initialize(this.demo.$phases);

		this.loading.run();

	}



	getState () {

		return this.state.getName();
	}

}
