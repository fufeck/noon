angular.module "starter.advertiser"

.controller "advertiserCtrl", ($scope, $rootScope) ->
	$rootScope.showNav = undefined
	$scope.htmlReady()
	return
