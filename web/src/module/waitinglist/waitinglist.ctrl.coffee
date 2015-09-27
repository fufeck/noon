angular.module "starter.waitinglist"

.controller "waitinglistCtrl", ($scope, $localStorage, $stateParams, $http, Player) ->

	$scope.user = $localStorage.currentUser
	$scope.players = []
	$scope.newUser = {}
	$scope.query = ""

	findPlayer = ->
		Player.find {order: 'share ASC'}
		, (success) ->
			console.log "PLAYER : ", success
			$scope.players = success
		, (error) ->
			console.log error


	$scope.send = (form) ->
		console.log "SEND"
		if form.$valid && newUser.password == newUser.retype
			console.log("enter")
			Player.create newUser, (success) ->
				$localStorage.currentUser = $scope.user = success
				$localStorage.currentUser.link = "http://beta.noongame.fr/#/waitinglist/" + $scope.user.username
			, (err) ->
				console.log err
				if err.data.error.details.codes.email then newUser.emailAlreadyUsed = true
				if err.data.error.details.codes.username then newUser.usernameAlreadyUsed = true

		# $scope.redirect = (url) ->
		# 	window.open(url, '_system');

	incShare = ->
		return;
		# if $stateParams.username != ""
			# $http.post "", { username : $stateParams.username }
			# .success ->
			# 	console.log success
			# , (error) ->
			# 	console.log error

	findPlayer()
	incShare()