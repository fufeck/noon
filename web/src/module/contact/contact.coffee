angular.module "starter.contact", []

.config ($stateProvider) ->
	
	$stateProvider
	.state 'contact',
		url: '/contact',
		templateUrl: 'contact.view.html',
		controller: 'contactCtrl'
	return

.run ->
	return


