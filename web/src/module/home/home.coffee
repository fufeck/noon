angular.module "starter.home", []

.config ($stateProvider) ->
	
	$stateProvider
	.state 'home',
		url: '/',
		templateUrl: 'home.view.html',
		controller: 'homeCtrl'

	return

.run ->
	return

