angular.module "starter.contact"

.controller "contactCtrl", ($scope, $rootScope) ->
	$scope.notif = false
	# $rootScope.showNav = undefined
	$scope.mail =
		name : ""
		mail : ""
		phone : ""
		entreprise : ""

	$scope.sendMail = () ->
		$scope.notif = true
		Contact = Parse.Object.extend('Contact')
		data = new Contact()
		return data.save $scope.mail
		.then (obj) ->
			return console.log('obj', obj)


