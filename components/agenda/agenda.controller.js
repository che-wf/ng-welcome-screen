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
		let id = $route.current.$$route.id;
		console.log(id);

		// 'controller as' syntax
		var self = this;
	}


})();
