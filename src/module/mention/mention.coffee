angular.module "starter.mention", []

.config ($stateProvider) ->
	
	$stateProvider
	.state 'mention',
		url: '/mention',
		templateUrl: 'mention.view.html',
		controller: 'mentionCtrl'
	return

.run ->
	return


