import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from "@angular/http";


import { StateModule } from "./modules/state/state.module";
import { ConfigModule } from "./modules/config/config.module";
import { SharedModule } from "./modules/shared/shared.module";


import { DemoModule } from "./modules/demos/demo/demo.module";



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		StateModule,
		ConfigModule,
		SharedModule,
		DemoModule
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
