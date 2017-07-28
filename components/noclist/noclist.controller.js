/**
 * Masterlist application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;
(function () {

	angular
		.module('boilerplate')
		.controller('NoclistController', NoclistController);

	NoclistController.$inject = ['$scope', 'LocalStorage', 'EventsFactory', 'VisitsFactory'];

	function NoclistController($scope, LocalStorage, EventsFactory, VisitsFactory) {
		EventsFactory.events()
			.then((result) => {
				$scope.events = result;
				return result;
			});
		VisitsFactory.visits()
			.then((result) => {
				$scope.visits = result;
				return result;
			});
	}
})();
