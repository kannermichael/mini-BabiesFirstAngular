var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
	$scope.friends = ['Tyler', 'Brennan', 'Peter', 'Mikkel'];
	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
	}
})