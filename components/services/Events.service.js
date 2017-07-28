;
(function () {

/***************
* Events factory
****************/

	angular
		.module('boilerplate')
		.factory('EventsFactory', EventsFactory);

	EventsFactory.$inject = ['$http', 'LocalStorage', 'CONSTANTS'];

	function EventsFactory($http, LocalStorage, CONSTANTS) {
		let events = function () {
			return $http({
					method: 'GET',
					url: CONSTANTS.API_URL + 'visit_events'
				})
				.then(function (events) {
					return events.data;
				})
				.catch(function (error) {
					return error;
				});
		}

		let eventsById = function (id) {
			return $http({
					method: 'GET',
					url: CONSTANTS.API_URL + 'visit_events?visit_id=' + id,
				})
				.then(function (events) {
					return events.data;
				})
				.catch(function (error) {
					return error;
				});
		}

		return {
			events,
			eventsById
		}
	}
})();
