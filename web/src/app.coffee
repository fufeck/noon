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

	Parse.initialize("XknyA0h8q2IWp5pr0cvZePcYzDvkePv0ybVCFDqz", "dhIIoXKciHOVuk5TcNQwHg9cRPj4vvnct4FvptzG")
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
			mail: $('#' + mail).val()
		.then (obj) ->
			return console.log('obj', obj)

	$rootScope.toggleVideo = ->
		$rootScope.videoIsOpen = false

	return

