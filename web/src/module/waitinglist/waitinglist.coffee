angular.module "starter.waitinglist", []

.config ($stateProvider) ->
	
	$stateProvider
	.state 'waitinglist',
		url: '/waitinglist/:username',
		title: "waitinglist"
		templateUrl: 'waitinglist.view.html',
		controller: 'waitinglistCtrl'
	return

.run ->
	return

