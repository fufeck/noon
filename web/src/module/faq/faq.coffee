angular.module "starter.faq", []

.config ($stateProvider) ->
	
	$stateProvider
	.state 'faq',
		url: '/faq',
		templateUrl: 'faq.view.html',
		controller: 'faqCtrl'
	return

.run ->
	return

