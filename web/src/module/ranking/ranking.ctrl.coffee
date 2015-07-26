angular.module "starter.ranking"

.controller "rankingCtrl", ($scope, $filter, ngTableParams, $rootScope, Player) ->
	$rootScope.showNav = undefined

	Player.find {}
	, (success) ->
		console.log "PLAYER : ", success
		players = []
		rank = 1
		for line in success
			if line.username != undefined && line.goodAnswers != undefined && line.totalAnswers != undefined
				players.push line
		createTable(players)
	, (error) ->
		console.log error

	createTable = (data) ->
		console.log "data"
		console.log data
		$scope.tableParams = new ngTableParams({
		  page: 1
		  count: 10
		  filter: username: ''
		},
		  total: data.length
		  getData: ($defer, params) ->
		    # use build-in angular filter
		    orderedData = if params.filter() then $filter('filter')(data, params.filter()) else data
		    $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())
		    params.total orderedData.length
		    # set total for recalc pagination
		    $defer.resolve $scope.users

		    return
		)
		$scope.tableParamsMobile = new ngTableParams({
		  page: 1
		  count: 10
		  filter: username: ''
		},
		  total: data.length
		  getData: ($defer, params) ->
		    # use build-in angular filter
		    orderedData = if params.filter() then $filter('filter')(data, params.filter()) else data
		    $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())
		    params.total orderedData.length
		    # set total for recalc pagination
		    $defer.resolve $scope.users

		    return
		)
