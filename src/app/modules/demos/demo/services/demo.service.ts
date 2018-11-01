import { Injectable } from '@angular/core';


var displayParams = {
	delay:300,
	duration:100
}

var next = function (options) {


    setTimeout(function () {

        if (typeof options.complete === "function") options.complete() 
    }, options.duration)
}

@Injectable({
  providedIn: 'root'
})
export class DemoService {


	$phases = [
	{
	    message:"begin loading environment for demo", 
	    delay:displayParams.delay,
	    duration:2*displayParams.duration,
	    phase:function (options) {

	        console.log("initial processing phase");


	        // controller.setup(self, $scope);

	        // enter();

	        // display.elementsToggle(self.name, "hide");

	        next(options);

	    }
	},
	{
	    message:"initializing algoirthm", 
	    delay:displayParams.delay,
	    duration:6*displayParams.duration,
	    phase:function (options) {

	        console.log("initializing algorithm, page built");
	        

	        // if (!pageBuilt) {
	           
	        //     api.instantiate(function (res) {

	        //         // console.log("Instantiate session", res);

	        //         $scope.session = res.data.session;

	        //         // console.log("instantiate complete");

	        //         $input.setInput({
	        //             session:$scope.session,
	        //             method:tempcross.default
	        //         })
	                
	        //         api.setInput(false, function (res) {

	        //             api.initialize(function () {                        


	        //                 $scope.session = res.data.session;

	        //                 // console.log("instantiate complete");

	        //                 $input.setInput({
	        //                     session:$scope.session
	        //                 });

	        //                 next(options);

	        //             });

	        //         })
	                
	        //     })

	        // }
	        // else {

	        //     self.resetgen();


	            next(options);
	        // }

	    }
	},
	{
	    message:"loading environment", 
	    delay:displayParams.delay,
	    duration:6*displayParams.duration, 
	    phase:function (options) {

	        console.log("loading environment");

	        // controller.createEnvironment(self, $scope);

	        // settings.animateToggle(false);

	        next(options);
	    }
	},
	{
	    message:"loading display", 
	    delay:displayParams.delay,
	    duration:2*displayParams.duration,
	    phase:function (options) {

	        console.log("loading display");

	        // display.load(self.name);

	        next(options);
	    }
	},
	{
	    message:"finishing up", 
	    delay:displayParams.delay,
	    duration:2*displayParams.duration, 
	    phase:function (options) {

	        console.log("finishing up");

	        // controller.createEnvironment(self, $scope);

	        // controller.finish(self, $scope)
	        // .then(function (result) {

	        //     evolve.running(false, $scope);

	        //     u.toggle("hide", "loading", {fade:displayParams.fade, delay:displayParams.delay});

	        //     display.elementsToggle(self.name, "show");

	        //     display.isBuilt(self.name);
	        
	        //     next(options);

	        // });
	        

	        next(options);
	    }
	}
	]


  	constructor() { }
}
