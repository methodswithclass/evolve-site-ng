

import { UIRouterModule, UIRouter, StateRegistry, StateService } from "@uirouter/angular";

import { HomeComponent } from '../../../components/home/home.component';

import { DemoComponent } from '../../../modules/demos/demo/components/demo/demo.component';


var APP_STATES = [
{
	name:"root",
	url:"",
	redirect:"home"
},
{
	name:"home",
	url:"/",
	component:HomeComponent
},
{
	name:"feedback",
	url:"/feedback",
	component:DemoComponent
},
{
	name:"trash",
	url:"/trash",
	component:DemoComponent
}
]



export const states = UIRouterModule.forRoot({
	states: APP_STATES,
	useHash: false,
	otherwise:{state:"home"}
})
