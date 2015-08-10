app.directive('message', function ($stateParams) {
	return {
		restrict: "E",
		templateUrl: "browser/directives/message.html",
		scope: {
			emailMessage: "@",
		},
		controller: {
			gotoMessageState: function() {
				$state.go('messageView', {_id: $stateParams})
			}
		}
	}
});