import { Injectable } from '@angular/core';

import { $ } from "../../shared/services/utility.service";

// import * as $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

	$phases = [];
	loadmessage;

	constructor() { }

	setMessage ($message) {

		this.loadmessage = $message
	}


	getMessage () {

		return this.loadmessage;
	}


	runPhase (index) {

		var self = this;

		// console.log("run phases", index, self.$phases);

		

    	// console.log("run complete index", index);

    	if (index < self.$phases.length) {

    		$("#loadingtoggle").css({opacity:1, display:"block"});

			setTimeout(function () {

        		self.setMessage(self.$phases[index].message);

        		self.$phases[index].phase({
        			duration:self.$phases[index].duration,
        			complete:function () {

        				self.runPhase(index + 1);
        			}
        		});

    		}, self.$phases[index].delay);

    	}
    	else {
    		self.setMessage("");
    		$("#loadingtoggle").animate({opacity:0, display:"none"}, 600);
    	}

	}


	initialize (_phases) {

		this.$phases = _phases;

		// console.log("phases", this.$phases);

    }

    run () {

    	this.runPhase(0);
    }


}
