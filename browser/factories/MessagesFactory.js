app.factory('MessagesFactory', function ($http) {
	return {
		getMessagesFrom: function(id) {
			$http.get('/messages/from/' + id)
			.then(function(messages){
				return messages.data;
			});
		},

		sendMessage: function(message) {
			$http.post('/messages')
			.then(function(message){
				return message.data;
			})
		}
	}
});