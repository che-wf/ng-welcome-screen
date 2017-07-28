;
(function () {

	/***************
	 * Visits factory
	 ****************/

	angular
		.module('boilerplate')
		.factory('VisitsFactory', VisitsFactory);

	VisitsFactory.$inject = ['$http', 'LocalStorage', 'CONSTANTS'];

	// TODO: Add Local Caching

	function VisitsFactory($http, LocalStorage, CONSTANTS) {
		return {
			visits: function () {
				return $http({
						method: 'GET',
						url: CONSTANTS.API_URL + 'customer_visits'
					})
					.then(function (visits) {
						return visits.data;
					})
					.catch(function (error) {
						console.error('error getting visits');
						return error;
					});
			},
			visitsById: function (id) {
				return $http({
						method: 'GET',
						url: CONSTANTS.API_URL + 'customer_visits?visit_id=' + id
					})
					.then(function (visits) {
						return visits.data;
					})
					.catch(function (error) {
						return error;
					});

			}
		}
	}
})();
