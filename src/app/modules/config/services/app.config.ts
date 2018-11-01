import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter, catchError, scan } from 'rxjs/operators';

import { UtilityService, shared} from "../../shared/services/utility.service";


export const DEBUG = false;

@Injectable()
export class AppConfig {

	private config = {};

	constructor(private http: Http, private utility: UtilityService) {}

	public get(keys) {

		console.log("get keys", this.config, keys);

		// console.log("get config input data", this.config, this.config[$data.config]);
		return this.utility.recursiveObjectLookup({config:this.config, keys:keys});
	}


	


	public load () {

		this.http.get("../../../assets/config/config.json")
		.pipe(
		    map(res => {
		    	console.log("res", res.json());
				return res.json();
			}), 
		    catchError((error: any):any => {
				return Observable.throw(error.json().error || 'Server error');
			})
		)
		.subscribe((res) => {

			this.config = res;
		})

	}
 }
