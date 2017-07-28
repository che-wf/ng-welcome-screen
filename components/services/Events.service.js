;
(function () {

	/***************
	 * Events factory
	 ****************/

	angular
		.module('boilerplate')
		.factory('EventsFactory', EventsFactory);

	EventsFactory.$inject = ['$http', '$q', 'LocalStorage', 'CONSTANTS'];

	// TODO: Add Local Caching

	function EventsFactory($http, $q, LocalStorage, CONSTANTS) {
		return {
			events: function () {
				return $http({
						method: 'GET',
						url: CONSTANTS.API_URL + 'visit_events',
						cache: true
					})
					.then(function (events) {
						return events.data;
					})
					.catch(function (error) {
						console.error('error getting events');
						return error;
					});
			},

			eventsById: function (id) {
				return $http({
						method: 'GET',
						url: CONSTANTS.API_URL + 'visit_events?visit_id=' + id,
						cache: true
					})
					.then(function (events) {
						return events.data;
					})
					.catch(function (error) {
						return error;
					});
			}

		}
	}

})();
