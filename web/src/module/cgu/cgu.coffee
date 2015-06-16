angular.module "starter.cgu", []

.config ($stateProvider) ->
	
	$stateProvider
	.state 'cgu',
		url: '/cgu',
		templateUrl: 'cgu.view.html',
		controller: 'cguCtrl'
	return

.run ->
	return

