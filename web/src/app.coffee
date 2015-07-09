angular.module "starter", [
	"ui.router"
	"ui.bootstrap"
	"ngCordova"
	"ngAnimate"
	"ngStorage"
	"ngResource"
	"ngTable"
	"duScroll"
	"noon.service"

	"starter.translate"

	"starter.home"
	"starter.result"
	"starter.ranking"
	"starter.advertiser"
	"starter.contact"
	"starter.faq"
	"starter.cgu"
	"starter.mention"
]

.config ($urlRouterProvider) ->

	$urlRouterProvider.otherwise '/'

	return

.run ($rootScope) ->

	$rootScope.positionPhone = false
	$rootScope.showNav = undefined
	$rootScope.slidePhone = ->
		$rootScope.positionPhone = !$rootScope.positionPhone

	$rootScope.videoIsOpen = true
	
	$rootScope.subscribe = (mail) ->
		$rootScope.toggleVideo()
		Mail = Parse.Object.extend('Mail')
		data = new Mail()
		return data.save
			mail: mail
		.then (obj) ->
			return console.log('obj', obj)

	$rootScope.toggleVideo = ->
		$rootScope.videoIsOpen = false

	return

