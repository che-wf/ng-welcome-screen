/**
 * Agenda application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;
(function () {

	angular
		.module('boilerplate')
		.controller('AgendaController', AgendaController);

	AgendaController.$inject = ['$scope', 'LocalStorage', 'EventsFactory', 'VisitsFactory', '$route'];


	function AgendaController($scope, LocalStorage, EventsFactory, VisitsFactory, $route) {
		// TODO: Add in logic to send to welcome when last event has finished
		// TODO: Add in filter to hide events that are past. 

		let params = $route.current.params;

		VisitsFactory.visitsById(params.visitId)
			.then((result) => {
				if (result.length < 1) {
					$location.path(home);
				}
				return result;
			});
	}


})();
