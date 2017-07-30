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

	AgendaController.$inject = ['$scope', 'LocalStorage', 'EventsFactory', 'VisitsFactory', '$route', '$timeout'];


	function AgendaController($scope, LocalStorage, EventsFactory, VisitsFactory, $route, $location, $timeout) {
		// TODO: Add in logic to send to welcome when last event has finished

		// Get visit_id from parameters
		let params = $route.current.params;

		// Get Data from Events Factory
		EventsFactory.eventsById(params.visitId)
			.then((result) => {
				if (result.length < 1) {
					$location.path(home);
				} else {
					$scope.events = organizeEvents(result);
					$scope.lastEvent = lastEvent($scope.events);
					// phoneHome();
				}
			});

		(() => {
			VisitsFactory.visitsById(params.visitId)
				.then((result) => {
					$scope.industry = result[0].customer_industry;
				})
		})();

		// Get last event today
		function lastEvent(events) {
			if(typeof events === 'object'){
				let orgEvents = organizeEvents(events).filter((v)=>{
					return v.show_on_agenda === true;
				});
				return orgEvents[orgEvents.length - 1].event_end;
			}
		}

		// Arrange events in order
		function organizeEvents(events) {
			if (typeof events === 'object') {
				return events.sort((a, b) => {
					return new Date(a.event_start) - new Date(b.event_start);
				});
			}
		}

		// Return home if there are no more events
		// TODO: Set timeout after last event has passed
		// function phoneHome(){
		// 	$timeout(()=>{
		// 		$location.path(welcome).search({param: params.visitId});
		// 	}, 34);
		// }

	}


})();
