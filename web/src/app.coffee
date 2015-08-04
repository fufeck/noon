angular.module "starter", [
	"ui.router"
	"ui.bootstrap"
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
		email = $('#' + mail).val()
		emailPattern = /// ^ #begin of line
			([\w.-]+)         #one or more letters, numbers, _ . or -
			@                 #followed by an @ sign
			([\w.-]+)         #then one or more letters, numbers, _ . or -
			\.                #followed by a period
			([a-zA-Z.]{2,6})  #followed by 2 to 6 letters or periods
			$ ///i            #end of line and ignore case

		if email.match emailPattern
			$rootScope.toggleVideo()
			window._fbq.push(['track', '6027837446733', {'value':'0.00','currency':'EUR'}])
			Mail = Parse.Object.extend('Mail')
			data = new Mail()

			return data.save
				mail: email
			.then (obj) ->
				return console.log('obj', obj)
		else
			$rootScope.error = true

	$rootScope.toggleVideo = ->
		$rootScope.videoIsOpen = false

	return

