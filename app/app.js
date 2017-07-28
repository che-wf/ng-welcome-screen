;
(function () {


	/**
	 * Definition of the main app module and its dependencies
	 */
	angular
		.module('boilerplate', [
      'ngRoute'
    ])
		.config(config);

	// safe dependency injection
	// this prevents minification issues
	config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

	/**
	 * App routing
	 *
	 * You can leave it here in the config section or take it out
	 * into separate file
	 *
	 */
	function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

		// console.log(getVisitById);
		$locationProvider.html5Mode(false);
		$locationProvider.hashPrefix('');

		// routes
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'MainController',
				controllerAs: 'main'
			})
			.when('/agenda/:visitId', {
				templateUrl: 'components/agenda/agenda.html',
				controller: 'AgendaController',
				controllerAs: 'agenda',
				param: 'id'
			})
			.when('/welcome/:visitId', {
				templateUrl: 'components/welcome/welcome.html',
				controller: 'WelcomeController',
				controllerAs: 'welcome',
				param: 'id'
			})
			.when('/noclist', {
				templateUrl: 'components/noclist/noclist.html',
				controller: 'NoclistController',
				controllerAs: 'noclist'
			})
			.otherwise({
				redirectTo: '/'
			});

		$httpProvider.interceptors.push('authInterceptor');

	}


	/**
	 * You can intercept any request or response inside authInterceptor
	 * or handle what should happend on 40x, 50x errors
	 *
	 */
	angular
		.module('boilerplate')
		.factory('authInterceptor', authInterceptor);

	authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

	function authInterceptor($rootScope, $q, LocalStorage, $location) {

		return {

			// intercept every request
			request: function (config) {
				config.headers = config.headers || {};
				return config;
			},

			// Catch 404 errors
			responseError: function (response) {
				if (response.status === 404) {
					$location.path('/');
					return $q.reject(response);
				} else {
					return $q.reject(response);
				}
			}
		};
	}


	/**
	 * Run block
	 */
	angular
		.module('boilerplate')
		.run(run);

	run.$inject = ['$rootScope', '$location', 'CONSTANTS'];

	function run($rootScope, $location, CONSTANTS) {
		// put here everything that you need to run on page load

		$rootScope.$on('$stateChangeSuccess', (event, toState) => {
			$rootScope.pageTitle = '';

			if (toState.title) {
				$rootScope.pageTitle += toState.title;
				$rootScope.pageTitle += ' \u2014 ';
			}

			$rootScope.pageTitle += CONSTANTS.TITLE;
		});

	}

})();
