import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	@Input() navName:string;
	@Input() navLoc: string;

	constructor() { }

	ngOnInit() {
	}

}
