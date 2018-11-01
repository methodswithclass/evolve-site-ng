import { Component, OnInit } from '@angular/core';


import { StateService } from "@uirouter/angular";
import { AppConfig } from "../../modules/config/services/app.config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	isActive;
	pageIndices;
	pageParams;

	constructor(private state: StateService, private config: AppConfig) { 

		

	}

	ngOnInit() {

		// var configObj = this.config.get("config");
		// var programs = this.config.get("programs");


		// this.isActive = configObj.activePages;
		// this.pageIndices = configObj.pageIndices;


		// for (var i in programs) {
		// 	this.pageParams[i] = programs[i].meta;
		// }
		

	}


	getActive (state) {

		// return this.isActive[this.pageIndices[state]].active
	}


	go(state) {


		this.state.go(state);

	}

}
