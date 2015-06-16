angular.module "starter.contact"

.controller "contactCtrl", ($scope, $rootScope) ->
	$rootScope.showNav = undefined
	$scope.mail = 
		name : ""
		mail : ""
		phone : ""
		entreprise : ""

	$scope.sendMail = () ->
		return ;