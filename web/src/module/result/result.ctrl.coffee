angular.module "starter.result"

.controller "resultCtrl", ($scope, $http, ngTableParams, LotteryRank, $rootScope) ->
	$rootScope.showNav = undefined
	$scope.isOpen = false;

	$scope.data = LotteryRank.find {filter : {limit : 10}}, (success) ->
		console.log $scope.data
		console.log "success"
		console.log success
	, (error) ->
		console.log "error"
		console.log error
		
	console.log $scope.data

	$scope.dt = new Date()

	datas = [{speudo : "mama", ntiket : 8671, somme : 87},
					{speudo : "mimiopp", ntiket : 81, somme : 45},
					{speudo : "totoyuuy", ntiket : 867, somme : 27},
					{speudo : "titiaza", ntiket : 71, somme : 67},
					{speudo : "tadvdfta", ntiket : 8571, somme : 80},
					{speudo : "tddfxbxfb", ntiket : 1, somme : 55},
					{speudo : "tdfdfxbxfd", ntiket : 7, somme : 44},
					{speudo : "ttfxdb", ntiket : 8, somme : 33},
					{speudo : "ttaxdfbx", ntiket : 5, somme : 22},
					{speudo : "taty,guyu", ntiket : 85871, somme : 1}]

	ngTable = 
		page: 1,
		count: 10

	getData =
		total : datas.length,
		getData : ($defer, params) ->
			$defer.resolve(datas.slice((params.page() - 1) * params.count(), params.page() * params.count()));	

	$scope.tableParams = new ngTableParams(ngTable, getData)


	$scope.changeState = ->
		if ($scope.isOpen == false)
			$scope.isOpen = true;
		else
			$scope.isOpen = false;

	$scope.change = (date) ->
		$scope.isOpen = false;
		console.log date