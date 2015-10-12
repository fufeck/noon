angular.module "starter.result"

.controller "resultCtrl", ($scope, $http, $filter, Lottery, $rootScope) ->
	$rootScope.showNav = undefined
	$scope.isOpen = false
	$scope.currentPage = 0
	$scope.results = []
	$scope.pages = []
	$scope.resultsByPage = []

	$scope.search = (q) ->
		console.log
		if q.length
			$scope.resultsByPage = $scope.filteredResults.slice 0, 10
		else
			$scope.getResultsByPage($scope.currentPage)

	$scope.getResults = (date) ->
		lotteryDrawingDate = $scope.getLotteryDrawingDate date

		$scope.getLottery lotteryDrawingDate
		.$promise
		.then (lottery) ->
			$scope.results = lottery.ranks
			if lottery.ranks.length
				$scope.pages = [0..(lottery.ranks.length / 10) - 1]
			else
				$scope.pages = []
			$scope.getResultsByPage()

	$scope.getLottery = (lotteryDrawingDate) ->
		Lottery.findOne
			filter:
				where:
					drawingDate: lotteryDrawingDate
				include:
					relation: 'ranks'
					scope:
						where:
							earned:
								gt: 0
						include: 'ticket'

	$scope.getLotteryDrawingDate = (selectedDate = undefined) ->
		lotteryDrawingDate = moment(selectedDate)

		if lotteryDrawingDate.hour < 12 then lotteryDrawingDate.subtract 1, 'days'

		lotteryDrawingDate.hour(12).second(0).minute(0).millisecond(0)




	$scope.getResultsByPage = (page = 0) ->
		start = page * 10
		end = start + 10
		$scope.currentPage = page
		$scope.resultsByPage = $scope.results.slice start, end
		console.log 'start : ', start
		console.log 'end : ', end
		console.log 'getResultsByPage : ', $scope.resultsByPage
		console.log 'results : ', $scope.results




	$scope.getResults()
