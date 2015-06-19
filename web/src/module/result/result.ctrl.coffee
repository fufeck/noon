angular.module "starter.result"

.controller "resultCtrl", ($scope, $http, $filter, ngTableParams, Lottery, LotteryRank, $rootScope) ->
	$rootScope.showNav = undefined
	$scope.isOpen = false;
	$scope.tableParams = undefined

	getLotteryDay = (date = undefined) ->
		console.log date
		if date == undefined
			currentDate = moment()
		else
			currentDate = moment(date)

		currentDate.hour(14)
		currentDate.second(0)
		currentDate.minute(0)
		currentDate.millisecond(0)
		Lottery.find {filter : where : day : currentDate.toISOString()}, (success) ->
			loadLotteryRank(success)
		, (error) ->
			console.log error
	
	pushDatas = (datas) ->
		$scope.datas = []
		console.log datas
		for d in datas
			if d.player && d.player.username
				tmp = d
				tmp.username = d.player.username
				$scope.datas.push tmp
		console.log $scope.datas

	loadLotteryRank = (lotteryDay) ->
		if lotteryDay.length > 0
			LotteryRank.find {filter : where : {lotteryId : lotteryDay[0].id}, include : 'player'}
			, (success) ->
				pushDatas(success)
				if $scope.tableParams == undefined
					createTable()
				else
					$scope.tableParams.reload()
					$scope.tableParamsMobile.reload()
			, (error) ->
				console.log error

	createTable = ->

		$scope.tableParams = new ngTableParams({
			page: 1
			count: 10
			filter: username: ''
		},
			total: $scope.datas.length
			getData: ($defer, params) ->
				orderedData = if params.filter() then $filter('filter')($scope.datas, params.filter()) else $scope.datas
				$scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())
				params.total orderedData.length
				$defer.resolve $scope.users
				return
		)
		$scope.tableParamsMobile = new ngTableParams({
			page: 1
			count: 10
			filter: username: ''
		},
			total: $scope.datas.length
			getData: ($defer, params) ->
				orderedData = if params.filter() then $filter('filter')($scope.datas, params.filter()) else $scope.datas
				$scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())
				params.total orderedData.length
				$defer.resolve $scope.users
				return
		)

	getLotteryDay()

	$scope.changeState = ->
		if ($scope.isOpen == false)
			$scope.isOpen = true;
		else
			$scope.isOpen = false;

	$scope.change = (date) ->
		$scope.isOpen = false;
		getLotteryDay(date)