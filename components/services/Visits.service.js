;
(function () {

/***************
* Visits factory
****************/

	angular
		.module('boilerplate')
		.factory('VisitsFactory', VisitsFactory);

	VisitsFactory.$inject = ['$http', 'LocalStorage', 'CONSTANTS'];

	function VisitsFactory($http, LocalStorage, CONSTANTS) {
		let visits = function () {
			return $http({
					method: 'GET',
					url: CONSTANTS.API_URL + 'customer_visits'
				})
				.then(function (visits) {
					console.log(visits.data);
					return visits.data;
				})
				.catch(function (error) {
					return error;
				});
		}

		let visitsById = function (id) {
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

		return {
			visits,
			visitsById
		}
	}
})();
