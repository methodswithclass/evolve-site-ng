import { Component, OnInit } from '@angular/core';

import { LoadingService } from "../../services/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

	loadingmessage;
	timer;

	constructor(private loading:LoadingService) { }

	ngOnInit() {
		
		this.getMessage();
		
	}

	
	getMessage () {

		var self = this;

		this.timer = setInterval(function () {

			
			self.loadingmessage = self.loading.getMessage();
			
			
			self.stop();

		}, 30);
	}


	stop() {

		var message = this.loading.getMessage();

		if (message && message.length == 0) {

			clearInterval(this.timer);
			this.timer = null;
		}
	}


	

}
