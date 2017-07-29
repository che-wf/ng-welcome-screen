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
		var self = this;
		EventsFactory.events()
			.then((result) => {
				self.events = result;
				return result;
			})
			.then(() => {
				VisitsFactory.visits()
					.then((result) => {
						self.visits = result;
						return result;
					})
					.then(() => {
						self.newEventList = [];
						self.events.map((v, i, a) => {
							self.visits.map((v2, i2, a2) => {
								if (v.visit_id === v2.visit_id) {
									self.newEventList.push({
										'customer_name': a2[i2].customer_name,
										'visit_id': a[i].visit_id,
										'event': a[i].event,
										'event_start': a[i].event_start,
										'event_end': a[i].event_end,
										'show_on_agenda': a[i].show_on_agenda,
									});
								}
							});
							if(i === a.length-1){
								$scope.events = self.newEventList;
							}
						});
					});
			});
	}
})();
