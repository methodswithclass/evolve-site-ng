import { Component, OnInit, Input } from '@angular/core';

import { AppState } from "../../../../state/services/app.state";

@Component({
  selector: 'app-navbtn',
  templateUrl: './navbtn.component.html',
  styleUrls: ['./navbtn.component.scss']
})
export class NavbtnComponent implements OnInit {

	@Input() varClass: string;
	@Input() name: string;
	@Input() loc:string;

	constructor(private state:AppState) { }

	ngOnInit() {


	}


	go() {

		console.log("clicked", this.loc);
		this.state.go(this.loc);
	}

}
