import { Component, OnInit } from '@angular/core';

import { EvolvingService } from "../../services/evolving.service";

@Component({
  selector: 'app-evolve-button',
  templateUrl: './evolve-button.component.html',
  styleUrls: ['./evolve-button.component.scss']
})
export class EvolveButtonComponent implements OnInit {

	constructor(private evolve:EvolvingService) { }

	ngOnInit() {
	}

	run() {

		console.log("clicked run button");

		this.evolve.run();
	}

}
