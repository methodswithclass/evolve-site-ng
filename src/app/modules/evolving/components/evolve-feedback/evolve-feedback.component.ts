import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evolve-feedback',
  templateUrl: './evolve-feedback.component.html',
  styleUrls: ['./evolve-feedback.component.scss']
})
export class EvolveFeedbackComponent implements OnInit {

	@Input() position:string;

	constructor() { }

	ngOnInit() {
	}

	

}
