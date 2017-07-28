/**
 * Welcome application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;
(function () {

	angular
		.module('boilerplate')
		.controller('WelcomeController', WelcomeController);

	WelcomeController.$inject = ['$scope', 'LocalStorage', 'EventsFactory', 'VisitsFactory', '$route', '$location'];


	function WelcomeController($scope, LocalStorage, EventsFactory, VisitsFactory, $route, $location) {
		let params = $route.current.params;

		VisitsFactory.visitsById(params.visitId)
			.then((result) => {
				console.log(result.length, result);
				if(result.length == 1){
					$scope.visitsInfo = result[0];
				} else if(result.length < 1){
					$location.path(home);
				}
				return result;
			});

		// 'controller as' syntax
		var self = this;
	}


})();
