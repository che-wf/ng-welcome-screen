;
(function () {
	'use strict';
	/**
	 * Background Image
	 *
	 * Usage:
	 * <div bg-image="{{industry}}"></div>
	 *
	 *
	 */
	angular
		.module('boilerplate')
		.directive('bgImage', bgImage);

	function bgImage() {
		return function (scope, element, attrs) {
			attrs.$observe('bgImage', function () {
				let img = {};
				if (attrs.bgImage.length > 0) {
					img = attrs.bgImage;
				} else {
					img = 'general';
				}
				element.css({
					'background-image': 'url(/images/' + img + '.jpg)',
					'width': '100vw',
					'height': '100vh',
				});
			});
		};
	}

})();
