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

	MainController.$inject = ['$scope', 'LocalStorage', 'EventsFactory', 'VisitsFactory'];


	function MainController($scope, LocalStorage, EventsFactory, VisitsFactory) {

		// 'controller as' syntax
		var self = this;




		var throttle = false;

		document.querySelector('body')
			.addEventListener('click', function (evt) {
				var o = this,
					ot = this.textContent;

				if (!throttle && evt.detail === 3) {
					this.textContent = 'Triple-clicked!';
					throttle = true;
					setTimeout(function () {
						o.textContent = ot;
						throttle = false;
					}, 1000);
				}
			});
	}


})();
