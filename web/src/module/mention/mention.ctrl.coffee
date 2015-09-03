angular.module "starter.mention"

.controller "mentionCtrl", ($scope, $rootScope) ->
	$rootScope.showNav = undefined
	$scope.htmlReady()
	return
