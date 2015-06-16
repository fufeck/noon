angular.module "starter.result", []

.config ($stateProvider) ->
	
	$stateProvider
	.state 'result',
		url: '/result',
		templateUrl: 'result.view.html',
		controller: 'resultCtrl'
	return

.run ->
	return

