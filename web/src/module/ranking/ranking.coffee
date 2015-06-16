angular.module "starter.ranking", []

.config ($stateProvider) ->
	
	$stateProvider
	.state 'ranking',
		url: '/ranking',
		templateUrl: 'ranking.view.html',
		controller: 'rankingCtrl'
	return


.run ->
	return

