/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;
(function () {

	angular
		.module('boilerplate')
		.controller('MainController', MainController);

	MainController.$inject = ['$scope', 'LocalStorage'];


	function MainController($scope, LocalStorage ) {

		// 'controller as' syntax
		var self = this;
	}


})();
