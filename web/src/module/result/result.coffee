angular.module "starter.result", []

.config ($stateProvider) ->

	$stateProvider
	.state 'result',
		url: '/result',
		title:"Résultats du jour"
		templateUrl: 'result.view.html',
		controller: 'resultCtrl'
	return

.run ->
	return

