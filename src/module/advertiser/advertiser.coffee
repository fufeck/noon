angular.module "starter.advertiser", []

.config ($stateProvider) ->

	$stateProvider
	.state 'advertiser',
		url: '/advertiser',
		title: "Annonceurs"
		templateUrl: 'advertiser.view.html',
		controller: 'advertiserCtrl'
	return

.run ->
	return

