angular.module "starter.cgu"

.controller "cguCtrl", ($scope, EndUserLicenseAgreement, $rootScope) ->
	$rootScope.showNav = undefined

	$scope.questions = EndUserLicenseAgreement.find()
	$scope.status = false
