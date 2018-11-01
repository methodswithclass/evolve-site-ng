import { Component, OnInit, Input } from '@angular/core';

import { shared } from "../../../shared/services/utility.service";

import { AppState } from "../../../state/services/app.state";
import { EvolvingService } from "../../services/evolving.service";

var evdata = {
	best:{
		fitness:0
	}
};

var stepdata;
var input;

var fitnessTruncateValue = 2;


@Component({
  selector: 'app-evolving',
  templateUrl: './evolving.component.html',
  styleUrls: ['./evolving.component.scss']
})
export class EvolvingComponent implements OnInit {

	@Input() position:string;
	@Input() feedback:string;

	name = this.state.getName();

	
	fitnessRounded;

	constructor(private state:AppState, private evolve:EvolvingService) { }

	ngOnInit() {
		
		var self = this;

		shared.react.subscribe({
			name:"data" + self.name,
			callback:function (x) {

				evdata = x.evdata || evdata;
				// stepdata = x.stepdata || stepdata;
				// input = x.input || input;
				// console.log("stepdata", $scope.stepdata);

				// console.log("evdata", $scope.evdata.best.fitness, "truncate", g.truncate($scope.evdata.best.fitness, 0));

				// evdata.best = evdata.best ? evdata.best : {};
				// evdata.best.fitness = evdata.best.fitness ? evdata.best.fitness : 0;

	            self.fitnessRounded = shared.g.truncate(evdata.best.fitness, fitnessTruncateValue);

	            // $scope.evol/veProgress = 100*g.truncate($scope.stepdata.gen/$scope.input.gens, 0);

	            // console.log("fitnessRounded", $scope.fitnessRounded);

			}
		})

	}



	evalFeedback() {

		var tempFeedback = true;

		if (this.feedback == "hidden") {
			tempFeedback = false;
		}

		return tempFeedback;
	}
	

	showFeedback() {


		return this.evalFeedback();
	}



	break() {

		console.log("clicked break button");

		this.evolve.break();
	}



}
