import { Injectable } from '@angular/core';


import { $ } from "../../shared/services/utility.service";

@Injectable({
  providedIn: 'root'
})
export class EvolvingService {

	constructor() { }


	run() {

		console.log("clicked run service");

		$("#evolvetoggle").animate({opacity:1, display:"block"}, 600);


	}

	break() {

		console.log("clicked break service");

		$("#evolvetoggle").animate({opacity:0, display:"none"}, 600);
	}



}
