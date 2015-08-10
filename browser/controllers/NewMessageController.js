app.controller('NewMessageController', function ($scope, MessagesFactory) {
	$scope.messages = [];
	$scope.currentMessage;
	$scope.submitMessage = function(){
		MessagesFactory.sendMessage($scope.currentMessage).then(function(message){
			$scope.messages.push(message);
		})
	}
});